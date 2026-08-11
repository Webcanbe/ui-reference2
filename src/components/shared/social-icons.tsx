import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import type { ComponentType, FC } from 'react';
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from './icon';

export type SocialIconComponent = ComponentType<{ className?: string }>;

const socialIconsMap: Record<string, SocialIconComponent> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  X: XIcon,
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
};

export interface SocialLink {
  name: string;
  href: string;
}

export interface SocialIconsProps {
  links: SocialLink[];
  listClassName?: string;
  linkClassName?: string;
  iconClassName?: string;
}

const SocialIcons: FC<SocialIconsProps> = ({
  links,
  listClassName,
  linkClassName,
  iconClassName,
}) => {
  return (
    <ul className={cn('flex items-center gap-3', listClassName)}>
      {links?.map((item) => {
        const Icon = socialIconsMap[item.name];
        return (
          <li key={item.name} className="list-none">
            <Link
              href={item?.href}
              className={cn(
                'inline-block transition-transform duration-500 hover:-translate-y-1',
                linkClassName
              )}
              aria-label={item?.name}
            >
              {Icon ? <Icon className={iconClassName} /> : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { SocialIcons };
