'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ReactElement, ReactNode, Ref } from 'react';
import React, { cloneElement, useRef } from 'react';
import { cn } from '../../utils/cn';

gsap.registerPlugin(SplitText, ScrollTrigger);

export interface TypewriterProps {
  /** Single element to clone (e.g. <p className="..." />); receives ref and text as children */
  children: ReactElement<{
    className?: string;
    ref?: Ref<HTMLElement>;
    children?: ReactNode;
  }>;
  /** Text to animate character by character */
  text: string;
  /** Total duration of the typing animation in seconds (default: 3) */
  duration?: number;
  /** ScrollTrigger start position (default: 'top 80%') */
  start?: string;
  /** Run once when in view (default: true) */
  once?: boolean;
  /** Optional delay before typing starts in seconds */
  delay?: number;
  className?: string;
}

const Typewriter = ({
  children,
  text,
  duration = 3,
  start = 'top 80%',
  once = true,
  delay = 0,
  className,
}: TypewriterProps) => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container || !text) return;

      const split = new SplitText(container, { type: 'chars', tag: 'span' });

      gsap.set(split.chars, { opacity: 0 });

      const charDelay = duration / split.chars.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start,
          once,
        },
        delay,
      });

      split.chars.forEach((char, index) => {
        tl.to(char, { opacity: 1, duration: 0.02 }, index * charDelay);
      });

      return () => {
        split.revert();
      };
    },
    { scope: containerRef, dependencies: [text, duration, start, once, delay] }
  );

  if (!children || !React.isValidElement(children)) {
    return null;
  }

  /* eslint-disable-next-line react-hooks/refs */
  return cloneElement(children, {
    ref: containerRef as Ref<HTMLElement>,
    className: cn(children.props?.className, className),
    children: text,
  });
};

export default Typewriter;
