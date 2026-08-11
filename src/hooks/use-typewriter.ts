'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import type { RefObject } from 'react';

gsap.registerPlugin(SplitText, useGSAP, ScrollTrigger);

export type TypewriterElementRef = RefObject<
  HTMLElement | HTMLInputElement | HTMLTextAreaElement | null
>;

export interface UseTypewriterOptions {
  /** Total duration of the typing animation in seconds (default: 2.5) */
  duration?: number;
  /** ScrollTrigger start position (default: 'top 80%') */
  start?: string;
  /** Run once when in view (default: true) */
  once?: boolean;
  /** Optional delay before typing starts in seconds */
  delay?: number;
  /** If true, animate on mount instead of when in view (useful for inputs) */
  immediate?: boolean;
}

function isFormControl(el: HTMLElement): el is HTMLInputElement | HTMLTextAreaElement {
  return el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement;
}

export function useTypewriter(
  elementRef: TypewriterElementRef,
  {
    duration = 2.5,
    start = 'top 80%',
    once = true,
    delay = 0,
    immediate = false,
  }: UseTypewriterOptions = {}
) {
  useGSAP(
    () => {
      const el = elementRef.current;
      if (!el) return;

      const text = isFormControl(el)
        ? (el.placeholder || '').trim()
        : (el.textContent || '').trim();
      if (!text) return;

      const chars = text.split('');
      const charDelay = duration / chars.length;

      const timelineConfig = immediate
        ? { delay }
        : {
            scrollTrigger: {
              trigger: el,
              start,
              once,
            },
            delay,
          };

      if (isFormControl(el)) {
        el.placeholder = '';
        const tl = gsap.timeline(timelineConfig);
        chars.forEach((char, index) => {
          tl.call(
            () => {
              if (elementRef.current && isFormControl(elementRef.current)) {
                elementRef.current.placeholder += char;
              }
            },
            undefined,
            index * charDelay
          );
        });
        return;
      }

      // Other elements: content is already in the element; SplitText and animate
      const split = new SplitText(el, { type: 'chars', tag: 'span' });
      gsap.set(split.chars, { opacity: 0 });

      const tl = gsap.timeline(timelineConfig);
      split.chars.forEach((char, index) => {
        tl.to(char, { opacity: 1, duration: 0.02 }, index * charDelay);
      });

      return () => {
        split.revert();
      };
    },
    {
      scope: elementRef,
      dependencies: [duration, start, once, delay, immediate],
    }
  );
}
