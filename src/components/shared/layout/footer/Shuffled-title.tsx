'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DURATION_MS = 2000;

const ShuffledTitle = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const element = titleRef.current;
      const spanElement = spanRef.current;
      if (!element) return;

      element.style.whiteSpace = 'nowrap';

      const textNode = spanElement || element;
      const originalText = textNode.textContent ?? ' NEXSAS ';
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        startTime ??= currentTime;
        const progress = Math.min((currentTime - startTime) / DURATION_MS, 1);
        const revealed = Math.floor(progress * originalText.length);

        const animatedText = originalText
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            return i < revealed ? originalText[i] : CHARS[Math.floor(Math.random() * 26)];
          })
          .join('');

        if (spanElement) {
          spanElement.textContent = animatedText;
        } else {
          element.textContent = animatedText;
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else if (spanElement) {
          spanElement.textContent = originalText;
        } else {
          element.textContent = originalText;
        }
      };

      const shuffle = () => {
        // Reset start time so the animation runs from 0 when triggered
        startTime = null;
        requestAnimationFrame(animate);
      };

      const scrollTrigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 100%',
        onEnter: shuffle,
        once: true,
      });

      return () => {
        scrollTrigger.kill();
      };
    },
    { scope: titleRef }
  );

  return (
    <div className="py-12 lg:py-16">
      <h2
        ref={titleRef}
        className="text-it-heading-4 font-inter-tight footer-title-2 text-center font-bold tracking-[22.48px] text-nowrap sm:text-[60px] sm:leading-[120px] sm:tracking-[27.48px] md:tracking-[45.48px] lg:pl-5 lg:text-[80px] lg:tracking-[64.48px] xl:pl-10 xl:text-[112px] xl:leading-[168px] 2xl:tracking-[75.48px]"
        aria-hidden
      >
        <span ref={spanRef} className="text-opai-purple!"> NEXSAS </span>
      </h2>
    </div>
  );
};

export default ShuffledTitle;
