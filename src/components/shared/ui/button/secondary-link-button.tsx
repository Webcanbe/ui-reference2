'use client';

import { ChevronRightIcon } from '@/src/components/shared/icon';
import { useButtonSplitText } from '@/src/hooks/use-button-split-text';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import { useRef } from 'react';

export interface SecondaryLinkButtonProps {
  href: string;
  children: string;
  className?: string;
  displayClassName?: string;
  external?: boolean;
}

export function SecondaryLinkButton({
  href,
  children,
  className,
  displayClassName,
  external = false,
}: Readonly<SecondaryLinkButtonProps>) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useButtonSplitText(wrapperRef);

  return (
    <div
      ref={wrapperRef}
      className={cn('button-split-text-wrapper inline-block', displayClassName)}
    >
      <Link
        href={href}
        aria-label={children}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={cn(
          'group border-stroke-3/18 bg-background-6 hover:bg-background-4 relative flex max-h-12 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border px-6 py-[13px] transition-all duration-300 ease-in-out',
          className
        )}
      >
        <div className="relative overflow-hidden">
          <div className="h-5.5">
            <span
              className="button-split-upper-text font-ibm-plex-mono text-tagline-2 block cursor-pointer leading-[1.4] font-medium text-nowrap text-white/90"
              aria-hidden
            >
              {children}
            </span>
          </div>
          <div className="absolute h-5.5">
            <span
              className="button-split-lower-text font-ibm-plex-mono text-tagline-2 block cursor-pointer leading-[1.4] font-medium text-nowrap text-white/90"
              aria-hidden
            >
              {children}
            </span>
          </div>
        </div>

        <div className="relative mt-[2px] flex size-6 items-center justify-center overflow-hidden">
          <span className="ease-custom-ease-1 absolute size-[18px] translate-x-0 stroke-white/90 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-6">
            <ChevronRightIcon className="size-[18px] stroke-white/90 stroke-[1.5px]" />
          </span>
          <span className="ease-custom-ease-1 absolute size-[18px] -translate-x-6 stroke-white/90 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-0">
            <ChevronRightIcon className="size-[18px] stroke-white/90 stroke-[1.5px]" />
          </span>
        </div>
      </Link>
    </div>
  );
}
