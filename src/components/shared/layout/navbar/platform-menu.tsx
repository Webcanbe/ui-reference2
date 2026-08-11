'use client';

import nsImg424 from '@/public/images/ns-img-424.jpg';
import nsImg425 from '@/public/images/ns-img-425.jpg';
import {
  AnalyticsIconV2,
  CareerIconV2,
  IntegrationIconV2,
  PricingIcon,
  SupportIconV2,
  WhitePaperIconV2,
} from '@/src/components/shared/icon/menu-icon';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentType } from 'react';
import PlatformMenuLink from './platform-menu-link';

type SimpleNavLink = {
  label: string;
  href: string;
  closesMenu?: boolean;
};

type IntegrationLink = SimpleNavLink & {
  icon: ComponentType<{ className?: string }>;
};

const overviewLinks: SimpleNavLink[] = [
  { label: 'Features & Capabilities', href: '#', closesMenu: true },
  { label: 'Process & Workflow', href: '#' },
  { label: 'Security & Compliance', href: '#' },
  { label: 'Our Brandkit', href: '#' },
  { label: 'Download App', href: '#' },
  { label: 'Press', href: '#' },
];

const integrationLinks: IntegrationLink[] = [
  { label: 'Pricing', href: '/pricing', icon: PricingIcon },
  { label: 'HR & Payroll', href: '#', icon: CareerIconV2 },
  { label: 'Customer Support', href: '#', icon: SupportIconV2 },
  { label: 'Analytics & Reporting', href: '#', icon: AnalyticsIconV2 },
  { label: 'Whitepaper & Reports', href: '#', icon: WhitePaperIconV2 },
  { label: 'Explore All Integrations', href: '#', icon: IntegrationIconV2 },
];

interface PlatformMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

const PlatformMenu = ({ menuDropdownId, setMenuDropdownId }: PlatformMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);

  return (
    <div>
      <div
        className={cn(
          'pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent opacity-0 transition-opacity duration-300 ease-in-out lg:w-[1290px]',
          menuDropdownId === 'platform-mega-menu' && 'pointer-events-auto! opacity-100'
        )}
      />
      <div
        id="platform-mega-menu"
        className={cn(
          'border-stroke-3/18 bg-background-6 fixed top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 rounded-[20px] border p-4 transition-all duration-500 ease-out lg:flex lg:w-[1290px]',
          menuDropdownId === 'platform-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        <div className="grid grid-cols-12 items-start gap-y-6 md:gap-x-6">
          <div className="col-span-12 grid grid-cols-12 gap-x-6 lg:col-span-6">
            <div className="col-span-12 xl:col-span-6">
              <div>
                <p className="text-tagline-2 p-3 font-medium text-white/60">Overview</p>
                <ul>
                  {overviewLinks.map((link) => (
                    <PlatformMenuLink key={link.label} {...link} onClose={handleClose} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-6">
              <div>
                <p className="text-tagline-2 p-3 font-medium text-white/60">Integrations</p>
                <ul>
                  {integrationLinks.map((link) => (
                    <PlatformMenuLink
                      key={link.label}
                      {...link}
                      variant="icon"
                      onClose={handleClose}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-x-6 lg:col-span-6">
            <div className="col-span-12 xl:col-span-6">
              <article className="border-stroke-3/18 group space-y-3 rounded-2xl border p-3">
                <Link
                  onClick={handleClose}
                  href="/blog/the-future-of-automation-ai-agency"
                  className="block"
                >
                  <figure className="h-[250px] w-full max-w-[400px] overflow-hidden rounded-lg">
                    <Image
                      src={nsImg424}
                      alt="Featured"
                      className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </figure>
                </Link>
                <div className="space-y-2">
                  <Link href="/blog/the-future-of-automation-ai-agency" className="block">
                    <p className="font-sora text-tagline-2 line-clamp-1 font-normal text-white">
                      The Future of Automation
                    </p>
                    <p className="text-tagline-4 font-normal text-white/60">
                      What every AI agency should know.
                    </p>
                  </Link>
                </div>
              </article>
            </div>
            <div className="col-span-12 xl:col-span-6">
              <article className="border-stroke-3/18 group space-y-3 rounded-2xl border p-3">
                <Link
                  onClick={handleClose}
                  href="/blog/beginners-guide-automating-workflows-ai"
                  className="block"
                >
                  <figure className="h-[250px] w-full max-w-[400px] overflow-hidden rounded-lg">
                    <Image
                      src={nsImg425}
                      alt="Featured"
                      className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </figure>
                </Link>
                <div className="space-y-2">
                  <Link href="/blog/beginners-guide-automating-workflows-ai" className="block">
                    <p className="font-sora text-tagline-2 line-clamp-1 font-normal text-white">
                      A beginner&apos;s guide to automating workflows
                    </p>
                    <p className="text-tagline-4 font-normal text-white/60">
                      Automating workflows with AI.
                    </p>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformMenu;
