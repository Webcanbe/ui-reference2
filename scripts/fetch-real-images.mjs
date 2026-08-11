#!/usr/bin/env node
/**
 * Overwrites the placeholder artwork in public/images with the real artwork
 * served by the reference deployment, then lets the build continue.
 *
 * Runs as a `prebuild` hook so the real files are on disk before the bundler
 * resolves the `import img from '@/public/images/...'` static imports. That
 * ordering matters: Next.js reads the intrinsic width/height at build time, so
 * swapping the bytes afterwards would leave the layout sized for placeholders.
 *
 * Rules this script never breaks:
 *   - it only ever overwrites, never deletes (a missing file is a build error)
 *   - it only touches public/images (video and fonts are left alone)
 *   - any network or validation failure keeps the local file and exits 0
 */

import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IMAGES_DIR = path.join(ROOT, 'public', 'images');

const ORIGIN = (process.env.REAL_IMAGES_ORIGIN ?? 'https://ai-solutions-sooty.vercel.app').replace(
  /\/+$/,
  '',
);
const CONCURRENCY = Number(process.env.REAL_IMAGES_CONCURRENCY ?? 8);
const TIMEOUT_MS = Number(process.env.REAL_IMAGES_TIMEOUT_MS ?? 20000);
const SKIP = process.env.REAL_IMAGES_SKIP === '1';

const IMAGE_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.avif',
  '.gif',
  '.svg',
  '.ico',
]);

const log = (...args) => console.log('[real-images]', ...args);

/** Reads the leading bytes and confirms they match the family the extension claims. */
const looksLikeImage = (buffer, ext) => {
  if (buffer.length < 16) return false;

  const ascii = (start, end) => buffer.subarray(start, end).toString('latin1');

  switch (ext) {
    case '.jpg':
    case '.jpeg':
      return buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
    case '.png':
      return buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
    case '.gif':
      return ascii(0, 6) === 'GIF87a' || ascii(0, 6) === 'GIF89a';
    case '.webp':
      return ascii(0, 4) === 'RIFF' && ascii(8, 12) === 'WEBP';
    case '.avif':
      return ascii(4, 8) === 'ftyp' && ascii(8, 12).startsWith('avi');
    case '.ico':
      return buffer[0] === 0x00 && buffer[1] === 0x00 && buffer[2] === 0x01 && buffer[3] === 0x00;
    case '.svg': {
      // SVG is text, so guard against an HTML error page landing in a .svg file.
      const head = buffer.subarray(0, 1024).toString('utf8').trimStart().toLowerCase();
      if (head.startsWith('<!doctype html') || head.startsWith('<html')) return false;
      return head.includes('<svg');
    }
    default:
      return false;
  }
};

const md5 = (buffer) => createHash('md5').update(buffer).digest('hex');

const collectImages = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(absolute)));
    } else if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(absolute);
    }
  }

  return files;
};

const fetchWithTimeout = async (url) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, {
      signal: controller.signal,
      headers: { accept: 'image/*,*/*;q=0.8' },
    });
  } finally {
    clearTimeout(timer);
  }
};

const processFile = async (absolute) => {
  // public/ is the site root, so the on-disk path is the remote path.
  const urlPath = `/${path.relative(path.join(ROOT, 'public'), absolute).split(path.sep).join('/')}`;
  const ext = path.extname(absolute).toLowerCase();

  let local;
  try {
    local = await readFile(absolute);
  } catch (error) {
    return { status: 'failed', urlPath, reason: `unreadable locally: ${error.message}` };
  }

  let response;
  try {
    response = await fetchWithTimeout(`${ORIGIN}${encodeURI(urlPath)}`);
  } catch (error) {
    const reason = error.name === 'AbortError' ? `timeout after ${TIMEOUT_MS}ms` : error.message;
    return { status: 'failed', urlPath, reason };
  }

  if (!response.ok) {
    return { status: 'failed', urlPath, reason: `HTTP ${response.status}` };
  }

  const remote = Buffer.from(await response.arrayBuffer());

  if (!remote.length) {
    return { status: 'failed', urlPath, reason: 'empty response' };
  }

  if (!looksLikeImage(remote, ext)) {
    const contentType = response.headers.get('content-type') ?? 'unknown';
    return {
      status: 'failed',
      urlPath,
      reason: `not a valid ${ext.slice(1)} (content-type: ${contentType})`,
    };
  }

  if (md5(remote) === md5(local)) {
    return { status: 'unchanged', urlPath, bytes: local.length };
  }

  try {
    await writeFile(absolute, remote);
  } catch (error) {
    return { status: 'failed', urlPath, reason: `write failed: ${error.message}` };
  }

  return { status: 'replaced', urlPath, from: local.length, to: remote.length };
};

/** Runs the queue with a fixed worker pool so one slow file cannot stall the build. */
const runPool = async (items, worker) => {
  const results = [];
  let cursor = 0;

  const runners = Array.from({ length: Math.min(CONCURRENCY, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await worker(items[index]);
    }
  });

  await Promise.all(runners);
  return results;
};

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

const main = async () => {
  if (SKIP) {
    log('REAL_IMAGES_SKIP=1 — leaving public/images untouched.');
    return;
  }

  log(`origin: ${ORIGIN}`);

  let files;
  try {
    files = await collectImages(IMAGES_DIR);
  } catch (error) {
    log(`could not read ${IMAGES_DIR} (${error.message}) — nothing to do.`);
    return;
  }

  if (!files.length) {
    log('no images found — nothing to do.');
    return;
  }

  log(`checking ${files.length} images...`);

  const results = await runPool(files, processFile);
  const counts = { replaced: 0, unchanged: 0, failed: 0 };

  for (const result of results) {
    counts[result.status] += 1;
    if (result.status === 'replaced') {
      log(`replaced  ${result.urlPath}  (${kb(result.from)} -> ${kb(result.to)})`);
    } else if (result.status === 'unchanged') {
      log(`unchanged ${result.urlPath}  (${kb(result.bytes)})`);
    } else {
      log(`failed    ${result.urlPath}  (${result.reason}) — keeping local file`);
    }
  }

  log(
    `summary: ${counts.replaced} replaced, ${counts.unchanged} unchanged, ` +
      `${counts.failed} failed, ${files.length} total`,
  );

  if (counts.replaced === 0 && counts.unchanged > 0 && counts.failed === 0) {
    log('every image matched the reference site byte for byte.');
    log('if the local artwork is placeholder art, the reference site is serving the same art.');
  }

  if (counts.failed) {
    log(`${counts.failed} image(s) could not be refreshed; the existing files were kept.`);
  }
};

try {
  await main();
} catch (error) {
  // A refresh failure must never take the deployment down.
  log(`unexpected error: ${error?.stack ?? error} — continuing with the existing images.`);
}
