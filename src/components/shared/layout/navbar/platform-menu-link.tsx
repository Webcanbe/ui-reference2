'use client';

import HoverBgTransform from '@/src/components/shared/hover-bg-transform';
import Link from 'next/link';
import type { ComponentType, JSX } from 'react';

export interface PlatformMenuLinkProps {
  label: string;
  href: string;
  variant?: 'text' | 'icon';
  icon?: ComponentType<{ className?: string }>;
  onClose?: () => void;
}

const PlatformMenuLink = ({
  label,
  href,
  variant = 'text',
  icon: Icon,
  onClose,
}: PlatformMenuLinkProps): JSX.Element => {
  if (variant === 'icon') {
    return (
      <li>
        <Link href={href} onClick={onClose} className="group relative flex items-center gap-2 p-3">
          <HoverBgTransform className="group-hover:opacity-100" />
          <span className="relative z-10">
            {Icon && <Icon className="size-5 stroke-white/60 group-hover:stroke-white" />}
          </span>
          <span className="font-sora text-tagline-2 relative z-10 font-normal text-white">
            {label}
          </span>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} onClick={onClose} className="group relative block p-3">
        <HoverBgTransform className="group-hover:opacity-100" />
        <span className="font-sora text-tagline-2 relative z-10 font-normal text-white">
          {label}
        </span>
      </Link>
    </li>
  );
};

export default PlatformMenuLink;
