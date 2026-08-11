'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SocialIcons } from '@/src/components/shared/social-icons';
import { footerData } from '@/src/data/footer';
import Image from 'next/image';
import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

export interface BlogDetailsContentProps {
  blog: { data: Record<string, unknown>; content: string };
}

const formatDisplayDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

const BlogDetailsContent: FC<BlogDetailsContentProps> = ({ blog }) => {
  const data = blog?.data ?? {};
  const title = (data?.title as string) ?? '';
  const author = (data?.author as string) ?? '';
  const authorImage = (data?.authorImage as string) ?? '';
  const publishDate = (data?.publishDate as string) ?? '';
  const readTime = (data?.readTime as string) ?? '';
  const heroImages = data?.heroImages as string[] | undefined;
  const thumbnail = (data?.thumbnail as string) ?? '';

  const heroImage = heroImages?.[0] ?? thumbnail;

  return (
    <section className="pt-32 xl:pt-40 2xl:pt-50">
      <div className="main-container">
        <div className="mx-auto max-w-[1050px] px-5 sm:px-0">
          <div className="mb-28 w-full flex-auto space-y-[70px]">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <figure className="h-[600px] w-full overflow-hidden rounded-lg">
                  <Image
                    src={heroImage}
                    alt={title || 'blog'}
                    width={1050}
                    height={450}
                    className="size-full object-cover"
                  />
                </figure>
              </RevealAnimation>
              <div className="space-y-6">
                <RevealAnimation delay={0.2}>
                  <div className="blog-details-markdown">
                    <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>
                      {blog?.content ?? ''}
                    </ReactMarkdown>
                  </div>
                </RevealAnimation>
              </div>
            </div>

            <RevealAnimation delay={0.3}>
              <div>
                <p className="text-tagline-2 mb-4 font-normal text-white/80">Share this post</p>
                <div>
                  <SocialIcons
                    links={footerData.social}
                    iconClassName="stroke-white [stroke-opacity:0.6]"
                  />
                </div>
                <hr className="border-t-stroke-3/25 my-6 h-px border-t" />
                <div className="flex items-center gap-3">
                  <figure className="size-12 overflow-hidden rounded-full">
                    <Image
                      src={authorImage}
                      alt={author}
                      width={48}
                      height={48}
                      className="size-full object-cover"
                    />
                  </figure>
                  <div>
                    <p className="text-tagline-2 font-medium text-white/80">{author}</p>
                    <p className="flex items-center gap-2">
                      <span className="text-tagline-3 font-normal text-white/60">
                        {formatDisplayDate(publishDate)}
                      </span>
                      <span className="block size-1.5 rounded-full bg-white/60" />
                      <span className="text-tagline-3 font-normal text-white/60">{readTime}</span>
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsContent;
