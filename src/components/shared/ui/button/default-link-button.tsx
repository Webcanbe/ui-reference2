'use client';

import { useButtonSplitText } from '@/src/hooks/use-button-split-text';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import { useRef } from 'react';

export interface DefaultLinkButtonProps {
  href: string;
  children: string;
  className?: string;
  displayClassName?: string;
  /** Open in new tab (adds target="_blank" and rel="noopener noreferrer") */
  external?: boolean;
}

export function DefaultLinkButton({
  href,
  children,
  className,
  displayClassName,
  external = false,
}: Readonly<DefaultLinkButtonProps>) {
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
          'group bg-background-7 hover:border-stroke-3 relative flex max-h-12 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-transparent px-6 py-[11px] transition-all duration-300 ease-in-out',
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
      </Link>
    </div>
  );
}
