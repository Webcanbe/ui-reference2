'use client';

import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

export interface BlogCardProps {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  date: string;
  readTime?: string;
  tags: readonly string[];
  className?: string;
}

const formatDisplayDate = (isoDate: string) => {
  const d = new Date(isoDate);
  return d.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
};

const BlogCard: FC<BlogCardProps> = ({
  title,
  href,
  imageSrc,
  imageAlt = 'blog-post-img',
  date,
  readTime,
  tags,
  className,
}) => {
  return (
    <article className={cn('group underline-hover-effect', className)}>
      <Link href={href} className="block">
        <figure className="max-w-full overflow-hidden rounded-lg xl:min-h-[430px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={430}
            className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
          />
        </figure>
        <div className="pt-4 pl-3">
          <p className="text-tagline-4 font-normal text-white/80">{formatDisplayDate(date)}</p>
          <div className="mt-4 mb-2 flex items-center gap-x-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-tagline-3 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="blog-title block">
            <h3 className="text-sora-heading-6 block font-normal text-white/90">{title}</h3>
          </span>
        </div>
      </Link>
    </article>
  );
};

export { BlogCard };
