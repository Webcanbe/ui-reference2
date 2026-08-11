'use client';

import { useMobileMenuContext } from '@/src/context/MobileMenuContext';

const MobileMenuButton = () => {
  const { openMenu } = useMobileMenuContext();

  return (
    <div className="block lg:hidden">
      <button
        type="button"
        onClick={openMenu}
        className="nav-hamburger flex cursor-pointer flex-col items-end justify-center space-y-2"
        aria-label="Toggle menu"
      >
        <span className="sr-only">Toggle menu</span>
        <span className="bg-background-7 block h-px w-9" />
        <span className="bg-background-7 block h-px w-6" />
      </button>
    </div>
  );
};

export default MobileMenuButton;
