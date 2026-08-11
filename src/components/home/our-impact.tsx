'use client';

import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import ClientSatisfaction from '@/src/components/home/client-satisfaction';
import HoursSaved from '@/src/components/home/hours-saved';
import SuccessfulProjects from '@/src/components/home/successful-projects';

const OurImpact = () => {
  return (
    <section
      className="our-impact-section bg-background-7 pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-50 xl:pb-44"
      aria-labelledby="impact-heading"
    >
      <div className="main-container">
        <div className="space-y-10 md:space-y-12 lg:space-y-20">
          {/* content */}
          <div className="text-center">
            <TextReveal>
              <h2
                id="impact-heading"
                className="font-sora lg:text-sora-heading-2 md:text-sora-heading-3 text-sora-heading-4 font-normal max-md:leading-[110%]"
              >
                <span className="text-background-13/90 font-normal"> Our Impact </span>
                <span className="text-background-13/50"> in numbers </span>
              </h2>
            </TextReveal>
          </div>

          {/* cards */}
          <div
            className="grid grid-cols-12 items-center justify-center gap-x-8 gap-y-8 lg:gap-x-2 xl:gap-x-8"
            aria-label="Impact statistics cards"
          >
            <SuccessfulProjects />
            <ClientSatisfaction />
            <HoursSaved />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
