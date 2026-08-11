'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { DownArrowIcon } from '@/src/components/shared/icon';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const DataAnalyticsInsights = () => {
  const progressContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const trigger = progressContainerRef.current;
      const progressBars = progressBarRefs.current.filter((p): p is HTMLSpanElement => p != null);
      if (!progressBars.length || !trigger) return;

      progressBars.forEach((bar) => {
        const originalWidth = bar?.offsetWidth;
        gsap.set(bar, { width: '0px' });

        gsap.to(bar, {
          width: originalWidth,
          duration: 2.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger,
            start: 'top 80%',
            once: true,
          },
        });
      });
    },
    { scope: progressContainerRef }
  );

  return (
    <RevealAnimation delay={0.1}>
      <div
        className="border-stroke-1/18 bg-background-6 relative flex h-[391px] w-full flex-col items-start justify-between overflow-hidden rounded-lg border p-6 max-md:items-center max-md:gap-y-10 md:h-[331px] md:w-[714px] md:gap-y-2 md:p-10.5 lg:flex-row"
        aria-labelledby="data-analytics-heading"
      >
        {/* glowing gradient */}
        <div className="pointer-events-none absolute top-[-52%] left-[-22%] select-none">
          <div className="pointer-events-none relative z-20 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-white/40 blur-[25.5px] select-none">
            <div className="bg-opai-purple/90 absolute right-0 bottom-[-4px] left-[102px] z-10 h-[194px] w-[133px] rotate-12 rounded-[50%] mix-blend-plus-lighter blur-[82px]" />
          </div>
        </div>

        <div className="z-10 space-y-1">
          <h3
            id="data-analytics-heading"
            className="font-sora text-sora-heading-5 max-w-[200px] font-normal text-white/80"
            itemProp="name"
          >
            Data analytics & insights
          </h3>
          <p
            className="font-inter-tight text-tagline-2 w-full max-w-[269px] text-left font-normal text-white/50"
            itemProp="description"
          >
            Use AI to discover trends and make informed decisions.
          </p>
        </div>

        <div
          ref={progressContainerRef}
          className="border-stroke-1/18 z-10 w-full max-w-[270px] space-y-4 rounded-lg border px-10.5 pt-6 pb-[43px] lg:max-w-[300px]"
          aria-label="Analytics data visualization"
        >
          <div className="flex w-full items-center justify-between gap-x-2">
            <h4 className="font-manrope text-manrope-heading-6 font-medium text-white/30">
              Analytics
            </h4>
            <div className="border-stroke-1/18 w-full max-w-[97px] cursor-pointer rounded-sm border py-[3px] pr-1 pl-2">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-center gap-x-2"
                aria-label="Select time period for analytics"
                aria-expanded={false}
                aria-haspopup="listbox"
              >
                <span className="font-inter-tight text-tagline-4 font-normal text-nowrap text-white/30">
                  Last week
                </span>
                <span className="flex size-6 items-center justify-center">
                  <DownArrowIcon className="stroke-stroke-3/25" />
                </span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-start gap-x-11">
                <h5 className="text-tagline-4 font-inter-tight font-normal text-white/20">
                  Airtable
                </h5>
                <span
                  ref={(el) => {
                    progressBarRefs.current[0] = el;
                  }}
                  className="h-1.5 w-14 rounded-r-full bg-linear-to-r from-[#8D59FF00] to-[#8D59FF]"
                />
              </div>
              <div className="flex items-center justify-start gap-x-5">
                <h5 className="text-tagline-4 font-inter-tight font-normal text-white/20">
                  Google drive
                </h5>
                <span
                  ref={(el) => {
                    progressBarRefs.current[1] = el;
                  }}
                  className="h-1.5 w-[94px] rounded-r-full bg-linear-to-r from-[#227EFF00] to-[#227EFF]"
                />
              </div>
              <div className="flex items-center justify-start gap-x-14">
                <h5 className="text-tagline-4 font-inter-tight font-normal text-white/20">Mega</h5>
                <span
                  ref={(el) => {
                    progressBarRefs.current[2] = el;
                  }}
                  className="h-1.5 w-[129px] rounded-r-full bg-linear-to-r from-[#5DDCF600] to-[#5DDCF6]"
                />
              </div>
            </div>

            <p
              className="font-inter-tight text-tagline-4 flex w-full items-center justify-center gap-x-2.5 font-normal text-white/20"
              aria-label="Storage capacity indicators: 0 Byte, 400GB, 600GB"
            >
              <span>0 Byte</span>
              <span>400GB</span>
              <span>600GB</span>
            </p>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default DataAnalyticsInsights;
