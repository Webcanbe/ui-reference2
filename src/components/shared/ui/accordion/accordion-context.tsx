'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export type AccordionType = 'single' | 'multiple';

type AccordionContextValue = {
  type: AccordionType;
  openValue: string | null | string[];
  toggle: (value: string) => void;
  isOpen: (value: string) => boolean;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

function parseDefaultOpen(
  defaultOpen: string | string[] | undefined,
  type: AccordionType
): string | null | string[] {
  if (defaultOpen == null || defaultOpen === '') {
    return type === 'multiple' ? [] : null;
  }
  if (Array.isArray(defaultOpen)) {
    return type === 'single' ? defaultOpen[0] ?? null : defaultOpen;
  }
  return type === 'single' ? defaultOpen : [defaultOpen];
}

type AccordionProviderProps = {
  children: React.ReactNode;
  defaultOpen?: string | string[];
  type?: AccordionType;
};

export const AccordionProvider = ({
  children,
  defaultOpen,
  type = 'single',
}: AccordionProviderProps) => {
  const [openValue, setOpenValue] = useState<string | null | string[]>(() =>
    parseDefaultOpen(defaultOpen, type)
  );

  const isOpen = useCallback(
    (value: string) => {
      if (type === 'single') {
        return (openValue as string | null) === value;
      }
      return (openValue as string[]).includes(value);
    },
    [type, openValue]
  );

  const toggle = useCallback(
    (value: string) => {
      setOpenValue((prev) => {
        if (type === 'single') {
          const current = prev as string | null;
          return current === value ? null : value;
        }
        const current = (prev ?? []) as string[];
        return current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value];
      });
    },
    [type]
  );

  const value = useMemo(
    () => ({ type, openValue, toggle, isOpen }),
    [type, openValue, toggle, isOpen]
  );

  return (
    <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>
  );
};

export function useAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error('Accordion components must be used within an <Accordion>');
  }
  return ctx;
}

export const AccordionItemValueContext = createContext<string | null>(null);

export function useAccordionItemValue(): string {
  const value = useContext(AccordionItemValueContext);
  if (value == null) {
    throw new Error('AccordionAction/AccordionContent must be used inside AccordionItem');
  }
  return value;
}
