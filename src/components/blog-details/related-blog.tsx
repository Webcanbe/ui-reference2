'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { BlogCard } from '@/src/components/shared/ui/card/blog-card';
import type { BlogPost } from '@/src/interface';
import type { FC } from 'react';

interface RelatedBlogProps {
  posts: BlogPost[];
  currentSlug: string;
}

// Deterministic shuffle by seed so server and client match (no hydration mismatch)
function pickThreeRandom(
  items: BlogPost[],
  seed: string,
  exclude: (p: BlogPost) => boolean
): BlogPost[] {
  const filtered = items?.filter((p) => !exclude(p)) ?? [];
  if (filtered.length === 0) return [];
  const hash = (s: string) => [...s].reduce((acc, c) => acc + (c.codePointAt(0) ?? 0), 0);
  const shuffled = [...filtered].sort((a, b) => {
    const ha = hash(seed + (a?.slug ?? ''));
    const hb = hash(seed + (b?.slug ?? ''));
    return ha - hb;
  });
  return shuffled.slice(0, 3);
}

const RelatedBlog: FC<RelatedBlogProps> = ({ posts, currentSlug }) => {
  const related = pickThreeRandom(
    posts ?? [],
    currentSlug,
    (p) => p?.slug === currentSlug
  );

  if (related.length === 0) return null;

  return (
    <section className="pt-28 pb-39">
      <div className="main-container">
        <div className="mb-[70px] text-center">
          <TextReveal>
            <h3 className="lg:text-sora-heading-4 text-sora-heading-5 font-sora mb-1 font-normal text-white/90">
              Related articles
            </h3>
          </TextReveal>
          <TextReveal>
            <p className="text-tagline-2 font-normal text-white/60">
              Don’t miss our most popular and impactful reads.
            </p>
          </TextReveal>
        </div>
        <div className="flex flex-wrap items-stretch justify-center gap-x-5 gap-y-8 xl:gap-x-8">
          {related.map((blog, index) => (
            <RevealAnimation key={blog.slug} delay={0.3 + index * 0.1}>
              <div className="w-full md:w-[calc(50%-0.625rem)] lg:w-[calc((100%-4rem)/3)]">
                <BlogCard
                  title={blog.title}
                  href={`/blog/${blog.slug}`}
                  imageSrc={blog.thumbnail}
                  imageAlt={blog.title}
                  date={blog.publishDate}
                  readTime={blog.readTime}
                  tags={blog.tags ?? []}
                />
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedBlog;
