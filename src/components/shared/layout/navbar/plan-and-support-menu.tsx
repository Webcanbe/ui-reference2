'use client';

import nsImg419 from '@/public/images/ns-img-419.jpg';
import {
  AffiliatePolicyIcon,
  AffiliateProgramIcon,
  GDPRIcon,
  LegalNoticeIcon,
  LoginIcon,
  PrivacyIcon,
  ReferralProgramIcon,
  RefundPolicyIcon,
  SignUpIcon,
  TermsConditionsIcon,
} from '@/src/components/shared/icon/menu-icon';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentType } from 'react';
import PlanAndSupportMenuLink from './plan-and-support-menu-link';

type PlanSupportLink = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

const accountLinks: PlanSupportLink[] = [
  { title: 'Login', description: 'Sign in to your account', href: '/login', icon: LoginIcon },
  {
    title: 'Create Account',
    description: 'Sign up for a new account',
    href: '/signup',
    icon: SignUpIcon,
  },
  {
    title: 'Referral Program',
    description: 'Earn rewards by referring others',
    href: '#',
    icon: ReferralProgramIcon,
  },
  {
    title: 'Affiliate Program',
    description: 'Partner with us and earn commissions',
    href: '#',
    icon: AffiliateProgramIcon,
  },
  {
    title: 'Affiliate Policy',
    description: 'Terms for our affiliate program',
    href: '#',
    icon: AffiliatePolicyIcon,
  },
];

const policyLinks: PlanSupportLink[] = [
  {
    title: 'Terms & Conditions',
    description: 'Usage terms and conditions',
    href: '#',
    icon: TermsConditionsIcon,
  },
  {
    title: 'Privacy Policy',
    description: 'How we handle your data',
    href: '#',
    icon: PrivacyIcon,
  },
  {
    title: 'Refund Policy',
    description: 'Refund and cancellation policy',
    href: '#',
    icon: RefundPolicyIcon,
  },
  { title: 'GDPR', description: 'Data protection and compliance', href: '#', icon: GDPRIcon },
  { title: 'Legal', description: 'Legal notices and documents', href: '#', icon: LegalNoticeIcon },
];

interface PlanAndSupportMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

const PlanAndSupportMenu = ({ menuDropdownId, setMenuDropdownId }: PlanAndSupportMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);

  return (
    <div>
      <div
        className={cn(
          'pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full max-w-[952px] -translate-x-1/2 bg-transparent opacity-0 transition-opacity duration-300 ease-in-out',
          menuDropdownId === 'plan-and-support-mega-menu' && 'pointer-events-auto! opacity-100'
        )}
      />
      <div
        id="plan-and-support-mega-menu"
        className={cn(
          'border-stroke-3/18 bg-background-6 fixed top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 space-y-6 rounded-[20px] border p-4 transition-all duration-500 ease-out md:w-[952px] lg:flex',
          menuDropdownId === 'plan-and-support-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        <div className="flex w-full items-start gap-y-6 md:gap-x-6">
          <ul className="w-full flex-1 space-y-2">
            {accountLinks.map((link) => (
              <PlanAndSupportMenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
          <ul className="w-full flex-1 space-y-2">
            {policyLinks.map((link) => (
              <PlanAndSupportMenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
          <figure className="w-full flex-1 space-y-3">
            <p className="text-tagline-2 font-medium text-white/60">What&apos;s New</p>
            <Link href="#" onClick={handleClose}>
              <figure className="group border-stroke-3/18 relative h-[250px] w-full max-w-full overflow-hidden rounded-[14px] border">
                <Image
                  src={nsImg419}
                  alt="What's New"
                  className="size-full rounded-[14px] object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 size-full space-y-1 transition-all duration-500 ease-in-out group-hover:top-5 group-hover:left-5">
                  <p className="text-tagline-1 font-medium text-white">AI Changelog</p>
                  <p className="text-tagline-3 w-full max-w-[212px] font-normal text-white/60">
                    Access all your workflows, analytics, and integrations in one smart dashboard.
                  </p>
                </div>
              </figure>
            </Link>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default PlanAndSupportMenu;
