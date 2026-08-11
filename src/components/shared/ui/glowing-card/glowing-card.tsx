'use client';

import { useGlowRegister } from '@/src/components/shared/ui/glowing-card/glowing-cards';
import { cn } from '@/src/utils/cn';
import React, { useCallback, useRef } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const GlowingCard: React.FC<Props> = ({ children, className }) => {
  const register = useGlowRegister();
  const localRef = useRef<HTMLDivElement | null>(null);

  const setRef = useCallback(
    (el: HTMLDivElement | null) => {
      localRef.current = el;
      register(el); // register into parent list
    },
    [register]
  );

  return (
    <div ref={setRef} className={cn('glowing-card', className)}>
      {children}
    </div>
  );
};

export default GlowingCard;
