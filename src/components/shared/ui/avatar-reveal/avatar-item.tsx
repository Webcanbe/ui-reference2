'use client';

import { useRevealRegister } from '@/src/components/shared/ui/avatar-reveal/avatar-reveal';
import { cn } from '@/src/utils/cn';
import React, { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const AvatarItem: React.FC<Props> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const register = useRevealRegister();

  useEffect(() => {
    register(ref.current);
  }, [register]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
};

export default AvatarItem;
