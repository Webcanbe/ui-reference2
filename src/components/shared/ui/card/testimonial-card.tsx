'use client';

import { StarIcon } from '@/src/components/shared/icon';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  name,
  role,
  imageSrc,
  imageAlt,
  className,
}: Readonly<TestimonialCardProps>) => {
  // create place holder img
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        'bg-background-6 border-stroke-1/11 relative flex h-[330px] w-[300px] flex-col items-center rounded-lg border p-6 first:ml-8 md:h-[370px] md:w-[332px] md:p-10.5',
        className
      )}
    >
      <div className="max-h-full space-y-4 text-center">
        <div className="flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="fill-opai-purple size-4" />
          ))}
        </div>
        <p className="font-inter-tight text-tagline-2 font-normal text-wrap text-white/50">
          {quote}
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 mt-[5px] -translate-x-1/2 space-y-2 text-center md:bottom-10.5">
        <figure className="mx-auto flex size-12 items-center justify-center overflow-hidden rounded-full bg-white/10">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt ?? name}
              width={48}
              height={48}
              className="size-full object-cover grayscale-[0.25]"
            />
          ) : (
            <span className="font-manrope text-tagline-3 font-normal text-white/80">
              {initials}
            </span>
          )}
        </figure>
        <blockquote className="space-y-0.5">
          <h3 className="font-manrope text-manrope-heading-6 font-normal text-white">{name}</h3>
          <p className="font-inter-tight text-tagline-3 font-normal text-white/60">{role}</p>
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;
