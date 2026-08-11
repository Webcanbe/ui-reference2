'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BlogCard } from '@/src/components/shared/ui/card/blog-card';
import type { BlogPost } from '@/src/interface';
import type { FC } from 'react';

interface FeaturedArticlesProps {
  posts: BlogPost[];
}

const FeaturedArticles: FC<FeaturedArticlesProps> = ({ posts }) => {
  return (
    <section>
      <div className="main-container">
        <div className="grid grid-cols-12 gap-x-5 gap-y-[70px] 2xl:gap-x-8">
          {posts.map((post, index) => (
            <RevealAnimation
              key={post.slug}
              delay={0.1 + (index % 2) * 0.1}
              className="group col-span-12 md:col-span-6"
            >
              <BlogCard
                title={post.title}
                href={`/blog/${post.slug}`}
                imageSrc={post.thumbnail}
                imageAlt={post.title}
                date={post.publishDate}
                readTime={post.readTime}
                tags={post.tags ?? []}
              />
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
