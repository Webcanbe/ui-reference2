'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { createContext, useContext, useMemo, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

type Direction = 'left' | 'right' | 'up' | 'down';

type RegisterFn = (el: HTMLDivElement | null) => void;

const RevealContext = createContext<RegisterFn>(() => {});
export const useRevealRegister = () => useContext(RevealContext);

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  offset?: number;
  scale?: number;
  stagger?: number;
  markers?: boolean;
};

const AvatarReveal: React.FC<Props> = ({
  children,
  className,
  direction = 'left',
  offset = 40,
  scale = 0,
  stagger = 0.1,
  markers = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [readyTick, setReadyTick] = useState(0);

  // register items (called by RevealItem callback-ref)
  const register = useMemo<RegisterFn>(() => {
    return (el) => {
      if (!el) return;

      // avoid duplicates
      if (!itemsRef.current.includes(el)) {
        itemsRef.current.push(el);
        // trigger useGSAP to run after items exist
        setReadyTick((v) => v + 1);
      }
    };
  }, []);

  useGSAP(
    () => {
      if (!itemsRef.current.length) return;

      // kill any existing triggers inside this scope (important in dev/strict mode)
      ScrollTrigger.getAll().forEach((t) => {
        const triggerEl = t.vars.trigger as Element | undefined;
        if (triggerEl && containerRef.current?.contains(triggerEl)) t.kill();
      });

      itemsRef.current.forEach((el, index) => {
        const vars: gsap.TweenVars = {
          duration: 1.5,
          opacity: 0,
          scale,
          filter: 'blur(5px)',
          delay: index * stagger,
          ease: 'elastic.out(1,0.7)',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'bottom 20%',
          },
        };

        switch (direction) {
          case 'left':
            vars.x = -offset;
            break;
          case 'right':
            vars.x = offset;
            break;
          case 'down':
            vars.y = offset;
            break;
          case 'up':
          default:
            vars.y = -offset;
            break;
        }

        gsap.from(el, vars);
      });

      ScrollTrigger.refresh();
    },

    { scope: containerRef, dependencies: [readyTick, direction, offset, scale, stagger, markers] }
  );

  return (
    <RevealContext.Provider value={register}>
      <div ref={containerRef} className={className}>
        {children}
      </div>
    </RevealContext.Provider>
  );
};

export default AvatarReveal;
