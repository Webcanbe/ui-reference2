'use client';

import { cn } from '@/src/utils/cn';
import { AccordionItemValueContext, useAccordion } from './accordion-context';

export interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export const AccordionItem = ({ children, value, className }: AccordionItemProps) => {
  const { isOpen } = useAccordion();
  const open = isOpen(value);

  return (
    <AccordionItemValueContext.Provider value={value}>
      <div className={cn(className)} data-state={open ? 'true' : 'false'}>
        {children}
      </div>
    </AccordionItemValueContext.Provider>
  );
};
