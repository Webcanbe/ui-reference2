'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import type { RefObject } from 'react';

gsap.registerPlugin(SplitText);

export interface UseButtonSplitTextOptions {
  /** Animation duration in seconds (default: 0.4) */
  duration?: number;
  /** Stagger delay between chars in seconds (default: 0.00625) */
  stagger?: number;
}

/**
 * Hook that sets up GSAP split-text hover animation on a button wrapper.
 * The wrapper must contain elements with classes .button-split-upper-text and .button-split-lower-text.
 * On hover, upper text flips out and lower text flips in (char stagger).
 */
export function useButtonSplitText(
  wrapperRef: RefObject<HTMLElement | null>,
  options: UseButtonSplitTextOptions = {}
) {
  const { duration = 0.4, stagger: staggerSec = 0.00625 } = options;

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const upperEl = wrapper.querySelector<HTMLElement>('.button-split-upper-text');
      const lowerEl = wrapper.querySelector<HTMLElement>('.button-split-lower-text');
      if (!upperEl || !lowerEl) return;

      const upperSplit = new SplitText(upperEl, { type: 'chars', tag: 'span' });
      const lowerSplit = new SplitText(lowerEl, { type: 'chars', tag: 'span' });

      gsap.set(upperSplit.chars, { opacity: 1, display: 'inline-block' });
      gsap.set(lowerSplit.chars, { opacity: 0, display: 'inline-block' });

      const hoverInTl = gsap.timeline({ paused: true });
      hoverInTl
        .to(upperSplit.chars, {
          y: '-100%',
          duration,
          opacity: 0,
          ease: 'power2.inOut',
          stagger: staggerSec,
        })
        .to(
          lowerSplit.chars,
          {
            y: '-100%',
            duration,
            opacity: 1,
            stagger: staggerSec,
            ease: 'power2.inOut',
          },
          '<'
        );

      const onEnter = () => hoverInTl.play();
      const onLeave = () => hoverInTl.reverse();

      wrapper.addEventListener('mouseenter', onEnter);
      wrapper.addEventListener('mouseleave', onLeave);

      return () => {
        wrapper.removeEventListener('mouseenter', onEnter);
        wrapper.removeEventListener('mouseleave', onLeave);
        upperSplit.revert();
        lowerSplit.revert();
      };
    },
    {
      scope: wrapperRef,
      dependencies: [duration, staggerSec],
    }
  );
}
