'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useRef } from 'react';

if (gsap !== undefined && SplitText !== undefined) {
  gsap.registerPlugin(SplitText, useGSAP);
}

type AccordionContentRevealProps = Readonly<{
  children: React.ReactNode;
  open: boolean;
}>;

/** Animates inner paragraphs by lines on open/close — matches reference accordion.js animateSplitIn / animateSplitOut */
export const AccordionContentReveal = ({ children, open }: AccordionContentRevealProps) => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const splitRefs = useRef<SplitText[]>([]);

  useGSAP(
    () => {
      const container = scopeRef.current;
      if (!container) return;

      const paragraphs = container.querySelectorAll('p');
      if (!paragraphs.length) return;

      const revertSplit = () => {
        splitRefs.current.forEach((split) => {
          try {
            split.revert();
          } catch {}
        });
        splitRefs.current = [];
      };

      const runSplitText = () => {
        if (!scopeRef.current) return;

        if (open) {
          // animateSplitIn: lines in with opacity, y, ease power2.out
          splitRefs.current = [];
          paragraphs.forEach((p, i) => {
            if (!p.textContent?.trim()) return;
            try {
              const split = new SplitText(p, { type: 'lines', linesClass: 'split-text-line' });
              splitRefs.current.push(split);
              gsap.set(split.lines, { opacity: 0, y: 24, rotationX: -90 });
              gsap.to(split.lines, {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 0.6,
                stagger: 0.08,
                delay: i * 0.05,
                ease: 'power2.out',
              });
            } catch {
              (p as HTMLElement).style.opacity = '1';
            }
          });
          return revertSplit;
        }

        // animateSplitOut: lines out (reference closeItem) — opacity 0, y -16, rotationX 90, 0.35s power2.in
        splitRefs.current = [];
        paragraphs.forEach((p, i) => {
          if (!p.textContent?.trim()) return;
          try {
            const split = new SplitText(p, { type: 'lines', linesClass: 'split-text-line' });
            splitRefs.current.push(split);
            gsap.to(split.lines, {
              opacity: 0,
              y: -16,
              rotationX: 90,
              duration: 0.35,
              stagger: 0.03,
              delay: i * 0.02,
              ease: 'power2.in',
            });
          } catch {
            (p as HTMLElement).style.opacity = '0';
          }
        });
        // Revert split after out animation (reference: on transitionend for height)
        const revertDelay = gsap.delayedCall(0.5, revertSplit);
        return () => {
          revertDelay.kill();
          revertSplit();
        };
      };

      const fontsReady =
        typeof document !== 'undefined' && document.fonts
          ? document.fonts.ready
          : Promise.resolve();

      let cleanup: (() => void) | undefined;
      let cancelled = false;
      fontsReady.then(() => {
        if (cancelled || !scopeRef.current) return;
        cleanup = runSplitText();
      });

      return () => {
        cancelled = true;
        cleanup?.();
        revertSplit();
      };
    },
    { scope: scopeRef, dependencies: [open] }
  );

  return (
    <div
      ref={scopeRef}
      data-state={open ? 'true' : 'false'}
      className="w-full transform-gpu [&_.split-text-line]:transform-gpu [&_.split-text-line]:backface-hidden [&_p]:transform-gpu [&_p]:transform-3d"
    >
      {children}
    </div>
  );
};
