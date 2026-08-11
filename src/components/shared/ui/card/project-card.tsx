'use client';

import CardReveal from '@/src/components/animation/card-reveal';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { ExpandIcon } from '@/src/components/shared/icon';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

export interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}
const ProjectCard = ({
  href,
  title,
  description,
  imageSrc,
  imageAlt,
  className,
}: Readonly<ProjectCardProps>) => {
  return (
    <div className={cn('border-stroke-1/11 w-full overflow-hidden rounded-lg border', className)}>
      <Link href={href} className="group relative block">
        <CardReveal className="h-full w-full overflow-hidden max-lg:h-[280px] xl:h-full xl:max-h-[500px]">
          <figure className="h-full w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={500}
              quality={100}
              className="h-full w-full scale-100 object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
            />
          </figure>
        </CardReveal>
        <div
          className="bg-background-13/50 absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 translate-y-[57%] items-center justify-center rounded opacity-0 backdrop-blur-[6px] transition-all duration-500 ease-in-out group-hover:-translate-y-1/2 group-hover:opacity-100 lg:size-18"
          aria-hidden
        >
          <span className="relative size-6 overflow-hidden">
            <ExpandIcon className="absolute -translate-x-12 translate-y-10.5 opacity-0 transition-all duration-700 group-hover:-translate-x-0.5 group-hover:translate-y-0 group-hover:opacity-100" />
          </span>
        </div>
        <RevealAnimation delay={0.1}>
          <div className="bg-background-6 px-6 py-8 text-center backdrop-blur-[17px] max-md:text-left md:space-y-1 md:px-12">
            <h3 className="font-sora text-sora-heading-6 sm:text-sora-heading-5 font-normal tracking-[-0.72px] text-white/80">
              {title}
            </h3>
            <p className="font-inter-tight text-tagline-2 text-white/50">{description}</p>
          </div>
        </RevealAnimation>
      </Link>
    </div>
  );
};

export default ProjectCard;
