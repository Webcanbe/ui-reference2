import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getMarkDownContent = (folder: string, slug: string) => {
  const filePath = path.join(process.cwd(), folder, `${slug}.md`);
  const content = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export default getMarkDownContent;
