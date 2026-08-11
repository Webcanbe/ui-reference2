'use client';

import { useMobileMenuContext } from '@/src/context/MobileMenuContext';

const MenuCloseButton = () => {
  const { closeMenu } = useMobileMenuContext();
  return (
    <button
      type="button"
      onClick={closeMenu}
      className="nav-hamburger-close bg-background-1/50 relative flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full"
    >
      <span className="sr-only">Close Menu</span>
      <span className="bg-background-7 absolute block h-0.5 w-4 rotate-45" />
      <span className="bg-background-7 absolute block h-0.5 w-4 -rotate-45" />
    </button>
  );
};

MenuCloseButton.displayName = 'MenuCloseButton';
export default MenuCloseButton;
