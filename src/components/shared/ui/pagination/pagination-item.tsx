import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import React from 'react';

type PaginationItemProps = {
  children?: React.ReactNode;
  active?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
};

export const PaginationItem = ({
  children,
  active = false,
  className,
  onClick,
  href,
  disabled = false,
}: PaginationItemProps) => {
  const dataAttrs = {
    ...(active && { 'data-active': 'true' }),
    ...(disabled && { 'data-disabled': 'true' }),
  };

  return (
    <Link
      href={href ?? '#'}
      className={cn(
        'border-stroke-3/25 group hover:text-background-4 data-[active=true]:text-background-4 text-tagline-4 flex size-8 cursor-pointer items-center justify-center rounded-full border p-1.5 font-normal text-white/60 transition-all duration-500 ease-in-out hover:border-white hover:bg-white data-[active=true]:bg-white data-[active=true]:hover:border-white data-[active=true]:hover:bg-white data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
        className
      )}
      {...dataAttrs}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
