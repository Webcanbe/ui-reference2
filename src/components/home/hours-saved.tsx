'use client';

import NumberAnimation from '@/src/components/animation/number-animation';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import Connector from '@/src/components/home/connector';
import { TimerIcon } from '@/src/components/shared/icon';

const HoursSaved = () => {
  return (
    <div className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-auto">
      <RevealAnimation delay={0.4}>
        <div
          className="border-stroke-3/18 relative h-[420px] w-full max-w-[409px] rounded-lg border bg-white p-4 max-md:mx-auto min-[1050px]:p-4.5! min-[1100px]:p-5! min-[1200px]:p-10.5! sm:p-10.5 md:p-4 lg:p-2"
          aria-label="Process workflow visualization"
        >
          <div
            className="pointer-events-none absolute bottom-0 left-0 z-20 h-[334px] w-full bg-linear-to-b from-transparent from-[10.09%] to-[#FFF] to-[99.05%] select-none"
            aria-hidden
          />

          {/* pills + SVG connectors */}
          <div
            className="relative top-[62px] mx-auto h-21 w-full max-w-[324px]"
            data-dot-color="black"
          >
            <div className="absolute top-1/2 left-0 h-7 -translate-y-1/2">
              <div className="border-stroke-1/11 bg-background-5 flex items-center justify-center gap-x-1 rounded-full border px-[14px] py-[5px]">
                <span className="bg-opai-blue h-2 w-2 rounded-full" />
                <span className="text-tagline-4 font-inter-tight font-normal text-white/50">
                  Sync
                </span>
              </div>
            </div>
            <div className="absolute top-0 left-1/2 h-7 -translate-x-1/2">
              <div className="border-stroke-1/11 bg-background-5 flex w-24 items-center justify-start gap-x-1 rounded-full border px-[14px] py-[5px]">
                <span className="bg-opai-purple h-2 w-2 rounded-full" />
                <span className="text-tagline-4 font-inter-tight font-normal text-white/50">
                  Process
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 h-7 -translate-x-1/2">
              <div className="border-stroke-1/11 bg-background-5 flex w-24 items-center justify-start gap-x-1 rounded-full border px-[14px] py-1.5">
                <span className="bg-opai-purple h-2 w-2 rounded-full" />
                <span className="text-tagline-4 font-inter-tight font-normal text-white/50">
                  Flow
                </span>
              </div>
            </div>
            <div className="absolute top-1/2 right-0 h-7 -translate-y-1/2">
              <div className="border-stroke-1/11 bg-background-5 flex items-center justify-center gap-x-1 rounded-full border px-[14px] py-[5px]">
                <span className="bg-opai-purple h-2 w-2 rounded-full" />
                <span className="text-tagline-4 font-inter-tight font-normal text-white/50">
                  Grow
                </span>
              </div>
            </div>

            <Connector
              className="absolute top-[20px] left-[65px] h-6 w-[52px] lg:left-12 xl:left-[65px]"
              viewBox="0 0 59 25"
              d="M0.832031 24.5H26.9087C34.1358 24.5 40.9781 21.2433 45.5355 15.6342L57.832 0.5"
              dotColor="#000000"
            />
            <Connector
              className="absolute top-[43px] left-[65px] h-6 w-[57px] lg:left-12 xl:left-[65px]"
              viewBox="0 0 59 32"
              d="M0.332031 0.5H24.87C32.9592 0.5 40.5041 4.57491 44.9399 11.3394L57.832 31"
              dotColor="#000000"
              delay={0.08}
            />
            <Connector
              className="absolute top-[19px] right-[69px] h-[55px] w-12 lg:right-[52px] xl:right-[69px]"
              viewBox="0 0 59 56"
              d="M58.332 24.5H32.2553C25.0282 24.5 18.1859 21.2433 13.6286 15.6342L1.33203 0.5"
              dotColor="#000000"
              delay={0.16}
            />
            <Connector
              className="absolute top-[19px] right-[69px] h-[55px] w-12 lg:right-[52px] xl:right-[69px]"
              viewBox="0 0 59 56"
              d="M58.832 24.5H34.2941C26.2049 24.5 18.66 28.5749 14.2242 35.3394L1.33203 55"
              dotColor="#000000"
              delay={0.24}
            />
          </div>

          {/* text content */}
          <div className="absolute bottom-10.5 left-1/2 z-30 -translate-x-1/2">
            <div className="flex flex-col items-center justify-center gap-y-6">
              <span className="flex size-[52px] items-center justify-center">
                <TimerIcon className="stroke-opai-purple" />
              </span>
              <div className="text-center">
                <h3
                  className="font-sora text-sora-heading-3 flex items-center justify-center font-normal text-black"
                  aria-label="3 million plus hours saved"
                >
                  <NumberAnimation
                    number={3}
                    speed={2000}
                    interval={200}
                    rooms={1}
                    heightSpaceRatio={1.9}
                  />
                  M+
                </h3>
                <p className="font-inter-tight text-tagline-2 text-background-13/50 font-normal">
                  Hours saved
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </div>
  );
};

export default HoursSaved;
