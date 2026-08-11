import { cn } from '@/src/utils/cn';
import React from 'react';

type PaginationWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export const PaginationWrapper = ({ children, className }: PaginationWrapperProps) => {
  return (
    <div
      data-opai-animate
      data-delay="0.1"
      className={cn('flex items-center justify-start gap-x-2', className)}
    >
      {children}
    </div>
  );
};
