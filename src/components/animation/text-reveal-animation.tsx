'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { cloneElement, isValidElement, useCallback, useRef } from 'react';

gsap.registerPlugin(SplitText, CustomEase, useGSAP, ScrollTrigger);

let easeReady = false;
const ensureEase = () => {
  if (easeReady) return;
  CustomEase.create('ns-ease', '0.625, 0.05, 0, 1');
  easeReady = true;
};

type TextRevealProps = {
  children: React.ReactElement;
  type?: 'lines' | 'words' | 'letters';
  duration?: number;
  stagger?: number;
  delay?: number;
  instant?: boolean;
  start?: string;
  end?: string;
};

const DEFAULTS = {
  lines: { duration: 0.8, stagger: 0.08 },
  words: { duration: 0.6, stagger: 0.06 },
  letters: { duration: 0.4, stagger: 0.008 },
} as const;

export const TextReveal = ({
  children,
  type = 'lines',
  duration,
  stagger,
  delay = 0.1,
  instant = false,
  start = 'top 90%',
  end = 'top 50%',
}: TextRevealProps) => {
  const scopeRef = useRef<HTMLElement | null>(null);
  const splitRef = useRef<SplitText | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const setRef = useCallback((el: HTMLElement | null) => {
    (scopeRef as { current: HTMLElement | null }).current = el;
  }, []);

  useGSAP(
    () => {
      const el = scopeRef.current;
      if (!el) return;

      ensureEase();

      const run = () => {
        if (!scopeRef.current) return;
        const targetEl = scopeRef.current;

        tweenRef.current?.kill();
        splitRef.current?.revert();

        const split = SplitText.create(targetEl, {
          type: 'lines, words, chars',
          mask: 'lines',
          linesClass: 'line',
          wordsClass: 'word',
          charsClass: 'letter',
        });
        splitRef.current = split;

        const preset = DEFAULTS[type];
        const targetsByType = {
          lines: split.lines,
          words: split.words,
          letters: split.chars,
        } as const;
        const targets = targetsByType[type] ?? split.lines;

        const tweenVars: gsap.TweenVars = {
          yPercent: 0,
          duration: duration ?? preset.duration,
          stagger: stagger ?? preset.stagger,
          delay,
          ease: 'ns-ease',
          onStart: () => {
            targetEl.style.opacity = '1';
          },
        };

        if (!instant) {
          tweenVars.scrollTrigger = {
            trigger: targetEl,
            start,
            end,
            scrub: false,
          };
        }

        tweenRef.current = gsap.fromTo(targets, { yPercent: 110 }, tweenVars);
      };

      if (document.fonts) {
        document.fonts.ready.then(run);
      } else {
        run();
      }

      return () => {
        tweenRef.current?.kill();
        splitRef.current?.revert();
      };
    },
    {
      scope: scopeRef,
      dependencies: [type, duration, stagger, delay, instant, start, end],
    }
  );

  if (!isValidElement(children)) {
    console.warn('TextReveal expects a single valid React element.');
    return null;
  }

  // eslint-disable-next-line react-hooks/refs -- ref callback forwarded to clone for useGSAP scope
  return cloneElement(children, {
    ref: setRef,
    'data-ns-split-text': true,
  } as React.HTMLAttributes<HTMLElement> & { ref: React.Ref<HTMLElement> });
};
