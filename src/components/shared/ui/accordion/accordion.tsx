'use client';

import { cn } from '@/src/utils/cn';
import { AccordionProvider } from './accordion-context';

export type AccordionType = 'single' | 'multiple';

export interface AccordionProps {
  children: React.ReactNode;
  defaultOpen?: string | string[];
  type?: AccordionType;
  className?: string;
}

export const Accordion = ({
  children,
  defaultOpen,
  type = 'single',
  className,
}: AccordionProps) => (
  <AccordionProvider defaultOpen={defaultOpen} type={type}>
    <div className={cn('accordion w-full space-y-3', className)} aria-label="Accordion">
      {children}
    </div>
  </AccordionProvider>
);
