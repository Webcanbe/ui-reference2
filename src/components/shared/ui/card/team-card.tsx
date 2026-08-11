'use client';

import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

export interface TeamCardProps {
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const TeamCard = ({
  href,
  title,
  description,
  imageSrc,
  imageAlt,
  className,
}: Readonly<TeamCardProps>) => {
  return (
    <article
      className={cn(
        'group relative mx-auto min-h-[395px] w-full cursor-pointer overflow-hidden rounded-lg',
        className
      )}
    >
      <Link href={href} className="block h-full w-full" aria-label={`View ${title}`}>
        <figure className="h-full w-full rounded-lg saturate-50 transition-all duration-500 group-hover:scale-105 group-hover:saturate-100">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={395}
            height={395}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </figure>
        <div className="absolute bottom-5 left-5 z-10 space-y-0.5 p-3">
          <h3 className="font-sora text-sora-heading-5 font-normal text-white/80 transition-colors group-hover:text-white/90">
            {title}
          </h3>
          <p className="text-tagline-4 font-normal text-white/50">{description}</p>
        </div>
      </Link>
      {/* Bottom gradient overlay for text readability */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-5 h-[158px] w-full bg-linear-to-t from-black/80 to-transparent"
        aria-hidden
      />
    </article>
  );
};

export default TeamCard;
