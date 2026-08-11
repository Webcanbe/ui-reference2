'use client';

import HoverBgTransform from '@/src/components/shared/hover-bg-transform';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import type { ComponentType } from 'react';

export interface CompanyMenuLinkProps {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  onClose?: () => void;
}

const CompanyMenuLink = ({
  title,
  description,
  href,
  icon: Icon,
  onClose,
}: CompanyMenuLinkProps) => (
  <li>
    <Link href={href} onClick={onClose} className="group relative flex items-start gap-2 p-3">
      <HoverBgTransform className="group-hover:opacity-100" />
      <div className="relative z-10 mt-1 flex size-7 shrink-0 items-center justify-center">
        <Icon className={cn('size-5 stroke-white/60 group-hover:stroke-white')} />
      </div>
      <div className="relative z-10">
        <p className="font-sora text-tagline-2 font-normal text-white">{title}</p>
        <p className="text-tagline-4 font-normal text-white/60">{description}</p>
      </div>
    </Link>
  </li>
);

export default CompanyMenuLink;
