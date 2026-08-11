'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BlogCard } from '@/src/components/shared/ui/card/blog-card';
import type { BlogPost } from '@/src/interface';
import type { FC } from 'react';

interface LatestBlogProps {
  posts: BlogPost[];
}

const LatestBlog: FC<LatestBlogProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-12 gap-x-5 gap-y-[70px] 2xl:gap-x-8">
      {posts.map((post, index) => (
        <RevealAnimation key={post.slug} delay={0.1 + (index % 2) * 0.1}>
          <div className="col-span-12 md:col-span-6">
            <BlogCard
              title={post.title}
              href={`/blog/${post.slug}`}
              imageSrc={post.thumbnail}
              imageAlt={post.title}
              date={post.publishDate}
              readTime={post.readTime}
              tags={post.tags ?? []}
            />
          </div>
        </RevealAnimation>
      ))}
    </div>
  );
};

export default LatestBlog;
