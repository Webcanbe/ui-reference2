'use client';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import MobileMenu from '@/src/components/shared/layout/mobile-menu/MobileMenu';
import { DefaultLinkButton } from '@/src/components/shared/ui/button/default-link-button';
import { MobileMenuProvider } from '@/src/context/MobileMenuContext';
import { mobileMenuData } from '@/src/data/mobile-meu';
import { useNavbarScroll } from '@/src/hooks/useScrollHeader';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CompanyMenu from './company-menu';
import MobileMenuButton from './mobile-menu-button';
import PlanAndSupportMenu from './plan-and-support-menu';
import PlatformMenu from './platform-menu';
import ResourcesMenu from './resources-menu';

const navItemLineClasses =
  'nav-item-line absolute top-0 left-1/2 h-[0.9px] w-0 -translate-x-1/2 rounded-full bg-radial-[circle,#FFFFFF_0%,#7C8EA52E_100%] opacity-100 transition-all duration-500 ease-out group-hover/nav-item:w-42';
const navItemGradientClasses =
  'nav-item-gradient absolute top-0 left-1/2 h-[89%] w-[calc(100%+120px)] -translate-x-1/2 bg-radial-[circle_at_center] from-[#8D59FF66] from-40% to-[#8D59FF00] to-100% opacity-0 blur-[14px] transition-all duration-500 ease-out group-hover/nav-item:opacity-80';
const navLinkTextClasses =
  'nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white';

interface NavbarProps {
  showTopNav?: boolean;
}

const Navbar = ({ showTopNav = false }: NavbarProps) => {
  const { isScrolled } = useNavbarScroll(150);
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId ?? null);
  };

  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'fixed top-6 left-1/2 z-30 mx-auto w-full max-w-[350px] -translate-x-1/2 transition-all duration-500 ease-in-out md:max-w-[640px] lg:max-w-[818px]',
          showTopNav && 'top-13.5',
          isScrolled && 'top-2'
        )}
      >
        <RevealAnimation direction="up" offset={100} delay={0.8} instant>
          <nav
            className={cn(
              'bg-background-6 border-stroke-3/18 flex items-center justify-between rounded-full border py-1.5 pr-5 pl-2 lg:gap-12 lg:py-0 lg:pr-1.5 lg:pl-1.5'
            )}
          >
            <Link href="/" className="block size-11" aria-label="Nexsas home">
              <figure className="size-full">
                <Image
                  src="/images/logo/logo-white-small.svg"
                  alt="Nexsas"
                  width={44}
                  height={44}
                  className="size-full"
                />
              </figure>
              <span className="sr-only">Nexsas</span>
            </Link>

            <ul className="relative hidden items-center gap-6 lg:flex lg:gap-8">
              {/* Company */}
              <li
                className="group/nav-item relative cursor-pointer py-4"
                data-menu="company-mega-menu"
                onMouseEnter={() => handleMenuHover('company-mega-menu')}
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className={navItemLineClasses} />
                  <div className={navItemGradientClasses} />
                </div>
                <Link href="#" className="relative z-5 flex items-center gap-1.5">
                  <span className={navLinkTextClasses}>Company</span>
                  <span className="block origin-center translate-y-px transition-all duration-500 group-hover/nav-item:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                    >
                      <path
                        d="M1.19922 0.5L5.19922 4.5L9.19922 0.5"
                        className="stroke-white/60 transition-colors duration-500 group-hover/nav-item:stroke-white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
                <CompanyMenu
                  menuDropdownId={menuDropdownId}
                  setMenuDropdownId={setMenuDropdownId}
                />
              </li>

              {/* Platform */}
              <li
                className="group/nav-item relative py-4"
                data-menu="platform-mega-menu"
                onMouseEnter={() => handleMenuHover('platform-mega-menu')}
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className={navItemLineClasses} />
                  <div className={navItemGradientClasses} />
                </div>
                <Link href="#" className="relative z-5 flex items-center gap-1.5">
                  <span className={navLinkTextClasses}>Platform</span>
                  <span className="block origin-center translate-y-px transition-all duration-500 group-hover/nav-item:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                    >
                      <path
                        d="M1.19922 0.5L5.19922 4.5L9.19922 0.5"
                        className="stroke-white/60 transition-colors duration-500 group-hover/nav-item:stroke-white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
                <PlatformMenu
                  menuDropdownId={menuDropdownId}
                  setMenuDropdownId={setMenuDropdownId}
                />
              </li>

              {/* Resources */}
              <li
                className="group/nav-item relative py-4"
                data-menu="resources-dropdown-menu"
                onMouseEnter={() => handleMenuHover('resources-dropdown-menu')}
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className={navItemLineClasses} />
                  <div className={navItemGradientClasses} />
                </div>
                <Link href="#" className="relative z-5 flex items-center gap-1.5">
                  <span className={navLinkTextClasses}>Resources</span>
                  <span className="block origin-center translate-y-px transition-all duration-500 group-hover/nav-item:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                    >
                      <path
                        d="M1.19922 0.5L5.19922 4.5L9.19922 0.5"
                        className="stroke-white/60 transition-colors duration-500 group-hover/nav-item:stroke-white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
                <ResourcesMenu
                  menuDropdownId={menuDropdownId}
                  setMenuDropdownId={setMenuDropdownId}
                />
              </li>

              {/* Plans & Support */}
              <li
                className="group/nav-item relative py-4"
                data-menu="plan-and-support-mega-menu"
                onMouseEnter={() => handleMenuHover('plan-and-support-mega-menu')}
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className={navItemLineClasses} />
                  <div className={navItemGradientClasses} />
                </div>
                <Link href="#" className="relative z-5 flex items-center gap-1.5">
                  <span className={navLinkTextClasses}>Plans & Support</span>
                  <span className="block origin-center translate-y-px transition-all duration-500 group-hover/nav-item:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                    >
                      <path
                        d="M1.19922 0.5L5.19922 4.5L9.19922 0.5"
                        className="stroke-white/60 transition-colors duration-500 group-hover/nav-item:stroke-white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
                <PlanAndSupportMenu
                  menuDropdownId={menuDropdownId}
                  setMenuDropdownId={setMenuDropdownId}
                />
              </li>
            </ul>

            <div className="hidden lg:block">
              <DefaultLinkButton
                href="/login"
                className="shadow-[0_3px_18px_0_rgba(141,89,255,0.80)]"
              >
                Try now
              </DefaultLinkButton>
            </div>

            <MobileMenuButton />
          </nav>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

export default Navbar;
