'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

type MobileMenuContextValue = {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  activeSubmenu: string | null;
  toggleSubmenu: (id: string) => void;
};

const MobileMenuContext = createContext<MobileMenuContextValue | null>(null);

export function MobileMenuProvider({ children }: { readonly children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const openMenu = useCallback(() => {
    setIsOpen(true);
    setActiveSubmenu('company');
  }, []);
  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, []);
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => {
      if (!prev) setActiveSubmenu('company');
      return !prev;
    });
  }, []);

  const toggleSubmenu = useCallback((id: string) => {
    setActiveSubmenu((prev) => (prev === id ? null : id));
  }, []);

  const value = useMemo(
    () => ({ isOpen, openMenu, closeMenu, toggleMenu, activeSubmenu, toggleSubmenu }),
    [isOpen, activeSubmenu, openMenu, closeMenu, toggleMenu, toggleSubmenu]
  );

  return <MobileMenuContext.Provider value={value}>{children}</MobileMenuContext.Provider>;
}

export function useMobileMenuContext() {
  const ctx = useContext(MobileMenuContext);
  if (!ctx) throw new Error('useMobileMenuContext must be used within MobileMenuProvider');
  return ctx;
}
