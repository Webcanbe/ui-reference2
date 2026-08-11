'use client';

import { cn } from '@/src/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ReactElement, Ref } from 'react';
import React, { cloneElement, useRef } from 'react';

if (globalThis.window !== undefined) {
  gsap.registerPlugin(ScrollTrigger);
}

export interface BorderExpandProps {
  /** Single child element to animate (e.g. a div for the border line) */
  children: ReactElement<{ className?: string; ref?: Ref<HTMLElement> }>;
  /** Delay in seconds before the expand animation starts */
  delay?: number;
  /** Duration in seconds of the expand animation */
  duration?: number;
  /** Optional ScrollTrigger: start animation when element enters view. If false, runs on mount. */
  scrollTrigger?: boolean;
  /** ScrollTrigger start (e.g. "top 90%") when scrollTrigger is true */
  start?: string;
  /** ScrollTrigger end when scrollTrigger is true */
  end?: string;
  className?: string;
}

const BorderExpand = ({
  children,
  delay = 0.6,
  duration = 2,
  scrollTrigger = true,
  start = 'top 90%',
  end = 'top 50%',
  className,
}: BorderExpandProps) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = elementRef.current;
      if (!el) return;

      gsap.set(el, {
        scaleX: 0,
        xPercent: -50,
        transformOrigin: '50% 50%',
      });

      const vars: gsap.TweenVars = {
        scaleX: 1,
        xPercent: -50,
        duration,
        delay,
        ease: 'power2.out',
      };

      if (scrollTrigger) {
        vars.scrollTrigger = {
          trigger: el,
          start,
          end,
          once: true,
        };
      }

      gsap.to(el, vars);
    },
    { dependencies: [delay, duration, scrollTrigger, start, end], scope: elementRef }
  );

  if (!children || !React.isValidElement(children)) {
    return null;
  }

  /* eslint-disable-next-line react-hooks/refs */
  return cloneElement(children, {
    ref: elementRef as Ref<HTMLElement>,
    className: cn(children?.props?.className, className),
  });
};

export { BorderExpand };
