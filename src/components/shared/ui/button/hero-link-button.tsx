'use client';

import { useButtonSplitText } from '@/src/hooks/use-button-split-text';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import { useRef } from 'react';

export interface HeroLinkButtonProps {
  href: string;
  children: string;
  className?: string;
  displayClassName?: string;
  external?: boolean;
}

const HeroLinkButton = ({
  href,
  children,
  className,
  displayClassName,
  external = false,
}: Readonly<HeroLinkButtonProps>) => {
  const wrapperRef = useRef<HTMLAnchorElement>(null);
  useButtonSplitText(wrapperRef);

  return (
    <Link
      ref={wrapperRef}
      href={href}
      aria-label={children}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn('group inline-block h-full', displayClassName, className)}
    >
      <div className="relative z-10 h-full max-h-[52px] cursor-pointer">
        <div className="bg-background-7 flex cursor-pointer items-center justify-center rounded-full py-[5px] pr-1.5 pl-6">
          <div className="relative overflow-hidden pr-5 transition-all duration-300 ease-in-out">
            <div className="h-[21px]">
              <div
                className="text-background-5 font-ibm-plex-mono button-split-upper-text text-tagline-2 block leading-[1.4] font-medium text-nowrap"
                aria-hidden
              >
                {children}
              </div>
            </div>
            <div className="absolute h-[21px]">
              <div
                className="text-background-5 font-ibm-plex-mono button-split-lower-text text-tagline-2 block leading-[1.4] font-medium text-nowrap"
                aria-hidden
              >
                {children}
              </div>
            </div>
          </div>
          <div className="relative mt-[2px] inline-block shrink-0 rounded-full p-2">
            <div
              className="bg-background-6 absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-(--button-shadow) transition-all duration-300 ease-in-out"
              aria-hidden
            />
            <span className="relative z-10 size-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="rotate-45 stroke-white transition-all duration-400 ease-in-out group-hover:rotate-0"
                aria-hidden
              >
                <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>

        <span
          className="absolute top-1/2 left-1/2 h-[68px] w-[107%] -translate-x-1/2 -translate-y-1/2 scale-100 rounded-full border border-white/20 opacity-100"
          aria-hidden
        />
        <span
          className="absolute top-1/2 left-1/2 h-[84px] w-[115%] -translate-x-1/2 -translate-y-1/2 scale-100 rounded-full border border-white/10 opacity-100"
          aria-hidden
        />
        <span
          className="absolute top-1/2 left-1/2 h-[100px] w-[123%] -translate-x-1/2 -translate-y-1/2 scale-100 rounded-full border border-white/5 opacity-100"
          aria-hidden
        />
      </div>
    </Link>
  );
};

export { HeroLinkButton };
