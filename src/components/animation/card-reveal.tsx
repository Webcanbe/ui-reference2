'use client';

import { cn } from '@/src/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ReactNode } from 'react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface CardRevealProps {
  children: ReactNode;
  className?: string;
  /** ScrollTrigger start (default: 'top 94%') */
  start?: string;
  /** ScrollTrigger end (default: 'bottom 58%') */
  end?: string;
  duration?: number;
  ease?: string;
}

export default function CardReveal({
  children,
  className,
  start = 'top 94%',
  end = 'bottom 58%',
  duration = 0.9,
  ease = 'back.in',
}: CardRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const img = container.querySelector('img');
      if (!img) return;

      const triggerEl = container;

      gsap.set(img, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        opacity: 0,
        scale: 0.9,
      });

      const tween = gsap.fromTo(
        img,
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          opacity: 0,
          scale: 0.9,
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          scale: 1,
          ease,
          duration,
          scrollTrigger: {
            trigger: triggerEl,
            start,
            end,
            toggleActions: 'play none none none',
          },
        }
      );

      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === triggerEl) st.kill();
        });
      };
    },
    { dependencies: [start, end, duration, ease], scope: containerRef }
  );

  return (
    <div ref={containerRef} className={cn('image-loading-reveal', className)}>
      {children}
    </div>
  );
}
