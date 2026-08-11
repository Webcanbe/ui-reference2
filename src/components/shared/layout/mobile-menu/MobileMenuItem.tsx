'use client';

import { useMobileMenuContext } from '@/src/context/MobileMenuContext';
import { cn } from '@/src/utils/cn';
import { ReactNode } from 'react';

interface MobileMenuItemProps {
  id: string;
  title: string;
  children?: ReactNode;
  hasSubmenu?: boolean;
}

const MobileMenuItem = ({ id, title, children, hasSubmenu = false }: MobileMenuItemProps) => {
  const { activeSubmenu, toggleSubmenu } = useMobileMenuContext();

  const isActive = activeSubmenu === id;

  const handleToggle = () => {
    if (hasSubmenu) {
      toggleSubmenu(id);
    }
  };

  return (
    <li className="space-y-2">
      <button
        type="button"
        onClick={handleToggle}
        className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5"
        aria-expanded={hasSubmenu ? isActive : undefined}
        aria-controls={hasSubmenu ? `submenu-${id}` : undefined}
      >
        <span className="font-sora text-tagline-1 block font-normal text-white">{title}</span>
        {hasSubmenu && (
          <span className={cn('transition-transform duration-300', isActive && 'rotate-90')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 12L14 8L10 4"
                className="stroke-white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </button>

      {hasSubmenu && children && (
        <ul
          id={`submenu-${id}`}
          data-submenu={id}
          className={cn(
            'block w-full overflow-y-hidden transition-[height,opacity] duration-300 ease-in-out',
            isActive ? 'pointer-events-auto h-fit opacity-100' : 'pointer-events-none h-0 opacity-0'
          )}
        >
          {children}
        </ul>
      )}
    </li>
  );
};

MobileMenuItem.displayName = 'MobileMenuItem';
export default MobileMenuItem;
