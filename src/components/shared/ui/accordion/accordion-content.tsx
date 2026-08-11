'use client';

import { AccordionContentReveal } from '@/src/components/shared/ui/accordion/accordion-content-reveal';
import { cn } from '@/src/utils/cn';
import { useEffect, useRef, useState } from 'react';
import { useAccordion, useAccordionItemValue } from './accordion-context';

export interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  /** Class for the inner <p> (use when passing text as children) */
  contentClassName?: string;
  /** Set to false to disable split-text line animation on open */
  animateLines?: boolean;
}

export const AccordionContent = ({
  children,
  className,
  contentClassName,
  animateLines = true,
}: AccordionContentProps) => {
  const value = useAccordionItemValue();
  const { isOpen } = useAccordion();
  const open = isOpen(value);
  const contentRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeRafRef = useRef<number | null>(null);
  const [height, setHeight] = useState<number | 'auto'>(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (open) {
      const targetHeight = el.scrollHeight;
      setHeight(targetHeight);
      const onTransitionEnd = (e: TransitionEvent) => {
        if (e.propertyName === 'height') {
          setHeight('auto');
        }
      };
      el.addEventListener('transitionend', onTransitionEnd);
      return () => el.removeEventListener('transitionend', onTransitionEnd);
    } else {
      // Match reference accordion.js closeItem: set current height, then after 80ms collapse (height 300ms ease-in-out)
      const current = el.scrollHeight;
      setHeight(current);
      closeTimeoutRef.current = setTimeout(() => {
        closeRafRef.current = requestAnimationFrame(() => setHeight(0));
      }, 80);
      return () => {
        if (closeTimeoutRef.current !== null) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
        if (closeRafRef.current !== null) {
          cancelAnimationFrame(closeRafRef.current);
          closeRafRef.current = null;
        }
      };
    }
  }, [open]);

  return (
    <div
      ref={contentRef}
      id={`accordion-content-${value}`}
      aria-labelledby={`accordion-action-${value}`}
      aria-hidden={!open}
      data-state={open ? 'true' : 'false'}
      className={cn(
        'accordion-content w-full overflow-hidden transition-[height,opacity] duration-300 ease-in-out',
        !open && 'opacity-0',
        open && 'opacity-100',
        className
      )}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      {animateLines ? (
        <AccordionContentReveal open={open}>
          <p className={contentClassName}>{children}</p>
        </AccordionContentReveal>
      ) : (
        <div>
          <p className={contentClassName}>{children}</p>
        </div>
      )}
    </div>
  );
};
