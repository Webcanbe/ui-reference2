'use client';

import {
  BlogIcon,
  ContactIcon,
  FaqIcon,
  GlossaryIcon,
  SuccessIcon,
  SupportIcon,
  TutorialIcon,
} from '@/src/components/shared/icon/menu-icon';
import { cn } from '@/src/utils/cn';
import type { ComponentType } from 'react';
import ResourcesMenuLink from './resources-menu-link';

type ResourceLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

const resourceLinks: ResourceLink[] = [
  { label: 'Blog', href: '/blog', icon: BlogIcon },
  { label: 'Tutorial', href: '#', icon: TutorialIcon },
  { label: 'FAQ', href: '/faq', icon: FaqIcon },
  { label: 'Glossary', href: '#', icon: GlossaryIcon },
  { label: 'Support', href: '#', icon: SupportIcon },
  { label: 'Contact', href: '/contact', icon: ContactIcon },
  { label: 'Success Stories', href: '#', icon: SuccessIcon },
];

interface ResourcesMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

const ResourcesMenu = ({ menuDropdownId, setMenuDropdownId }: ResourcesMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);

  return (
    <div>
      <div
        className={cn(
          'pointer-events-none absolute top-full left-1/2 z-40 h-3 w-[280px] -translate-x-1/2 bg-transparent opacity-0 transition-opacity duration-300 ease-in-out',
          menuDropdownId === 'resources-dropdown-menu' && 'pointer-events-auto! opacity-100'
        )}
      />
      <div
        id="resources-dropdown-menu"
        className={cn(
          'border-stroke-3/18 bg-background-6 absolute top-full left-1/2 z-50 mt-2 hidden w-[280px] -translate-x-1/2 rounded-[20px] border p-3 transition-all duration-500 ease-out lg:block',
          menuDropdownId === 'resources-dropdown-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        <ul className="space-y-2">
          {resourceLinks.map((link) => (
            <ResourcesMenuLink key={link.label} {...link} onClose={handleClose} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResourcesMenu;
