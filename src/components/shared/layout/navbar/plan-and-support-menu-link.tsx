'use client';

import HoverBgTransform from '@/src/components/shared/hover-bg-transform';
import Link from 'next/link';
import type { ComponentType } from 'react';

export interface PlanAndSupportMenuLinkProps {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  onClose?: () => void;
}

const PlanAndSupportMenuLink = ({
  title,
  description,
  href,
  icon: Icon,
  onClose,
}: PlanAndSupportMenuLinkProps) => (
  <li>
    <Link
      href={href}
      onClick={onClose}
      className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300"
    >
      <HoverBgTransform className="group-hover:opacity-100" />
      <div className="relative z-10 mt-1.5">
        <Icon className="size-5 stroke-white/60 group-hover:stroke-white" />
      </div>
      <div className="relative z-10 space-y-0.5">
        <p className="font-sora text-tagline-2 font-normal text-white">{title}</p>
        <p className="text-tagline-4 font-normal text-white/60">{description}</p>
      </div>
    </Link>
  </li>
);

export default PlanAndSupportMenuLink;
