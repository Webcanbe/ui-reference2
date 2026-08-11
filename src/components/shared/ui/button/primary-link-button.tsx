'use client';

import { ChevronRightIcon } from '@/src/components/shared/icon';
import { useButtonSplitText } from '@/src/hooks/use-button-split-text';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import { useRef } from 'react';

export interface PrimaryLinkButtonProps {
  href: string;
  children: string;
  className?: string;
  displayClassName?: string;
  external?: boolean;
}

export function PrimaryLinkButton({
  href,
  children,
  className,
  displayClassName,
  external = false,
}: Readonly<PrimaryLinkButtonProps>) {
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
          'group bg-background-7 hover:border-stroke-3 relative flex max-h-12 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out',
          className
        )}
      >
        <div className="relative overflow-hidden">
          <div className="h-5.5">
            <span
              className="button-split-upper-text text-background-5 font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap"
              aria-hidden
            >
              {children}
            </span>
          </div>
          <div className="absolute h-5.5">
            <span
              className="button-split-lower-text text-background-5 font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap"
              aria-hidden
            >
              {children}
            </span>
          </div>
        </div>

        <div className="relative mt-[2px] flex size-6 items-center justify-center overflow-hidden">
          <span className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] translate-x-0 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-6">
            <ChevronRightIcon className="stroke-background-6 size-[18px] stroke-[1.5px]" />
          </span>
          <span className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] -translate-x-6 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-0">
            <ChevronRightIcon className="stroke-background-6 size-[18px] stroke-[1.5px]" />
          </span>
        </div>
      </Link>
    </div>
  );
}
