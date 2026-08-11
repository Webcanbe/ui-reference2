'use client';

import nsImg422 from '@/public/images/ns-img-422.jpg';
import { ChevronRightIcon } from '@/src/components/shared/icon';
import {
  AboutIcon,
  CareerIcon,
  CaseStudyICon,
  CustomersIcon,
  ManifestoIcon,
  ServiceIcon,
  TeamIcon,
  TestimonialIcon,
  UseCaseIcon,
  WhyChooseUsIcon,
} from '@/src/components/shared/icon/menu-icon';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import CompanyMenuLink, { type CompanyMenuLinkProps } from './company-menu-link';

type CompanyLink = Omit<CompanyMenuLinkProps, 'onClose'>;

const aboutLinks: CompanyLink[] = [
  {
    title: 'About Us',
    description: 'See how others are using NextSaaS',
    href: '/about',
    icon: AboutIcon,
  },
  {
    title: 'Our Team',
    description: 'Dynamic content solutions',
    href: '#',
    icon: TeamIcon,
  },
  {
    title: 'Career',
    description: 'Join our team',
    href: '#',
    icon: CareerIcon,
  },
  {
    title: 'Why Choose Us',
    description: 'Our unique selling points and competitive advantages',
    href: '#',
    icon: WhyChooseUsIcon,
  },
];

const cultureLinks: CompanyLink[] = [
  {
    title: 'Our Manifesto',
    description: 'Our values and principles',
    href: '#',
    icon: ManifestoIcon,
  },
  {
    title: 'Customers',
    description: 'Success stories and testimonials',
    href: '#',
    icon: CustomersIcon,
  },
  {
    title: 'Testimonials',
    description: 'What our customers say about us',
    href: '#',
    icon: TestimonialIcon,
  },
  {
    title: 'Case Studies',
    description: 'Real-world examples of our solutions',
    href: '/projects',
    icon: CaseStudyICon,
  },
];

const solutionLinks: CompanyLink[] = [
  {
    title: 'Services',
    description: 'Our services and offerings',
    href: '/services',
    icon: ServiceIcon,
  },
  {
    title: 'Use Cases',
    description: 'Real-world examples of our solutions',
    href: '#',
    icon: UseCaseIcon,
  },
];

interface CompanyMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

const CompanyMenu = ({ menuDropdownId, setMenuDropdownId }: CompanyMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);

  return (
    <div>
      <div
        className={cn(
          'pointer-events-none absolute top-full left-1/2 z-40 h-3 w-[946px] -translate-x-1/2 bg-transparent opacity-0 transition-opacity duration-300 ease-in-out',
          menuDropdownId === 'company-mega-menu' && 'pointer-events-auto! opacity-100'
        )}
      />
      <div
        id="company-mega-menu"
        className={cn(
          'border-stroke-3/18 bg-background-6 fixed top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border p-4 transition-all duration-500 ease-out md:w-[946px] md:gap-x-6 lg:flex',
          menuDropdownId === 'company-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        <div className="flex-1 space-y-3">
          <ul className="space-y-2">
            {aboutLinks.map((link) => (
              <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
        </div>
        <div className="flex-1 space-y-3">
          <ul className="space-y-2">
            {cultureLinks.map((link) => (
              <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <div className="space-y-3">
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
              ))}
            </ul>
          </div>
          <p className="text-tagline-2 p-3 font-medium text-white/60">What&apos;s new</p>
          <div>
            <figure className="group/company-menu-link relative h-[166px] w-full max-w-full overflow-hidden rounded-[14px]">
              <Image
                src={nsImg422}
                alt="What's new"
                className="h-full w-full rounded-[14px] object-cover"
              />
              <div className="absolute top-3 bottom-3 left-3 w-full space-y-5 p-2">
                <div>
                  <p className="text-tagline-1 text-background-13 font-normal">Product updates</p>
                  <p className="text-tagline-2 text-background-13/60 w-full max-w-[169px] font-normal">
                    Stay updated with latest features.
                  </p>
                </div>
                {/* link button  */}
                <Link
                  href={'#'}
                  className="ring-background-13/60 bg-background-13 inline-block rounded-full px-5 py-1 ring-4"
                >
                  <div className="relative mt-[2px] flex size-6 items-center justify-center overflow-hidden">
                    <span className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] translate-x-0 stroke-[1.5px] transition-all duration-500 group-hover/company-menu-link:translate-x-6">
                      <ChevronRightIcon className="size-[18px] stroke-white stroke-[1.5px]" />
                    </span>
                    <span className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] -translate-x-6 stroke-[1.5px] transition-all duration-500 group-hover/company-menu-link:translate-x-0">
                      <ChevronRightIcon className="size-[18px] stroke-white stroke-[1.5px]" />
                    </span>
                  </div>
                </Link>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMenu;
