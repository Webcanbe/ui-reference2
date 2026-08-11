'use client';

import { cn } from '@/src/utils/cn';

/** Plus icon (CSS before/after) that rotates to horizontal when open — matches optim-ai accordion-plus-icon.htm */
export const AccordionPlusIcon = ({ open }: { open: boolean }) => (
  <div
    data-state={open ? 'true' : 'false'}
    className={cn(
      'accordion-plus-icon relative size-5 rounded-full border border-white/20 px-[8.5px] duration-300 ease-in-out',
      open && 'border-white/50',
      'before:absolute before:left-1/2 before:top-1/2 before:h-[8.5px] before:w-px before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-white/60 before:transition-transform before:duration-300 before:content-[""]',
      open && 'before:rotate-90 before:bg-white/90',
      'after:absolute after:left-1/2 after:top-1/2 after:h-[8.5px] after:w-px after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-90 after:rounded-full after:bg-white/60 after:transition-transform after:duration-300 after:content-[""]',
      open && 'after:bg-white/90'
    )}
    aria-hidden
  />
);
