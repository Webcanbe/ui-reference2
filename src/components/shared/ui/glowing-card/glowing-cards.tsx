'use client';

import { cn } from '@/src/utils/cn';
import React, { createContext, useContext, useMemo, useRef } from 'react';

type RegisterFn = (el: HTMLElement | null) => void;

const GlowRegisterContext = createContext<RegisterFn | null>(null);

export const useGlowRegister = () => {
  const ctx = useContext(GlowRegisterContext);
  if (!ctx) {
    throw new Error('useGlowRegister must be used inside <GlowingCards>.');
  }
  return ctx;
};

type GlowingCardsProps = {
  children: React.ReactNode;
  className?: string;
};

const GlowingCards: React.FC<GlowingCardsProps> = ({ children, className }) => {
  const cardsRef = useRef<Set<HTMLElement>>(new Set());

  const register = useMemo<RegisterFn>(() => {
    return (el) => {
      if (!el) return;
      cardsRef.current.add(el);
    };
  }, []);

  const updateGlow = (e: React.MouseEvent<HTMLDivElement>) => {
    cardsRef.current.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--xPos', `${x}px`);
      card.style.setProperty('--yPos', `${y}px`);
    });
  };

  return (
    <GlowRegisterContext.Provider value={register}>
      <div
        className={cn('glowing-cards', className)}
        onMouseMove={updateGlow}
        onMouseEnter={updateGlow}
      >
        {children}
      </div>
    </GlowRegisterContext.Provider>
  );
};

export default GlowingCards;
