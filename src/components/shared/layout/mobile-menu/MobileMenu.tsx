'use client';
import logoSmall from '@/public/images/logo/logo-white-small.svg';
import { useMobileMenuContext } from '@/src/context/MobileMenuContext';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuCloseButton from './MenuCloseButton';
import MobileMenuItem from './MobileMenuItem';

export interface MobileMenuItem {
  id: string;
  label: string;
  href: string;
}

export interface MobileMenuGroup {
  id: string;
  title: string;
  submenu: MobileMenuItem[];
}

const MobileMenu = ({ menuData }: { menuData: MobileMenuGroup[] }) => {
  const { isOpen, closeMenu } = useMobileMenuContext();
  const pathname = usePathname();

  const isActiveLink = (href: string) =>
    pathname === href || (href !== '#' && pathname.startsWith(href + '/'));

  return (
    <aside
      className={cn(
        'scroll-bar bg-background-13 fixed top-0 right-0 z-9999 h-screen w-full translate-x-full transition-all duration-300 sm:w-1/2 sm:rounded-l-3xl xl:hidden',
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      )}
    >
      <div className="space-y-4 p-5 sm:p-8 lg:p-9">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="sr-only">Home</span>
            <figure className="max-w-[44px]">
              <Image src={logoSmall} alt="Nexsas" width={44} height={44} className="block w-full" />
            </figure>
          </Link>
          <MenuCloseButton />
        </div>

        <div className="scroll-bar mt-6 h-[85vh] w-full overflow-x-hidden overflow-y-auto pb-10">
          <ul className="space-y-2">
            {menuData.map((item) => (
              <MobileMenuItem
                key={item.id}
                id={item.id}
                title={item.title}
                hasSubmenu={item.submenu.length > 0}
              >
                {item?.submenu?.map((subItem, idx) => (
                  <li key={subItem.id}>
                    <Link
                      href={subItem.href}
                      onClick={closeMenu}
                      className={cn(
                        'font-inter-tight text-tagline-3 ml-4 block text-left text-white/70 transition-all duration-500 ease-in-out',
                        idx === 0 ? 'py-1.5' : 'py-2.5',
                        isActiveLink(subItem.href) ? 'font-semibold' : 'font-normal'
                      )}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </MobileMenuItem>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu;
