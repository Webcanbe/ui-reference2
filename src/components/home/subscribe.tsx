'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { useButtonSplitText } from '@/src/hooks/use-button-split-text';
import { useRef } from 'react';

const Subscribe = () => {
  const subscribeButtonWrapperRef = useRef<HTMLDivElement>(null);
  useButtonSplitText(subscribeButtonWrapperRef);

  return (
    <section className="bg-background-6 py-10 md:py-32 lg:py-30 xl:py-32">
      <div className="main-container space-y-7 text-center md:space-y-12">
        <div className="space-y-1.5 md:space-y-3">
          <TextReveal delay={0.1}>
            <h2 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 font-normal max-md:leading-[110%]">
              <span className="font-normal text-white/90"> Stay Informed with </span>
              <span className="text-white/30"> Nexsas updates </span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="font-inter-tight text-tagline-2 text-white/60">
              Subscribe to our newsletter for the latest trends, insights, and success stories in AI
              technology.
            </p>
          </TextReveal>
        </div>

        <form className="mx-auto flex w-full flex-col items-center justify-center gap-4 text-left sm:flex-row">
          <label className="sr-only" htmlFor="cta-newsletter-email">
            Enter your email
          </label>
          <RevealAnimation delay={0.3} direction="left" offset={100}>
            <input
              id="cta-newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              className="placeholder:text-tagline-2 placeholder:font-inter-tight border-stroke-3/18 bg-background-5 text-tagline-2 focus:border-stroke-3/30 w-full max-w-[355px] rounded-[300px] border px-6 py-2 text-white placeholder:font-normal placeholder:text-white/50 focus:outline-none md:py-3"
              data-opai-animate
            />
          </RevealAnimation>
          <RevealAnimation delay={0.4} direction="left" offset={100}>
            <button
              type="submit"
              className="w-full max-md:mx-auto max-md:w-[90%] md:mx-0 md:w-auto"
              data-opai-animate
            >
              <div
                ref={subscribeButtonWrapperRef}
                className="button-split-text-wrapper inline-block w-full"
              >
                <div className="group bg-background-7 hover:border-stroke-3 relative flex max-h-12 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-transparent px-6 py-2! transition-all duration-300 ease-in-out md:py-3!">
                  <div className="relative overflow-hidden">
                    <div className="h-5.5">
                      <div className="text-background-5 font-ibm-plex-mono button-split-upper-text text-tagline-2 block leading-[1.4] font-medium text-nowrap">
                        Subscribe now
                      </div>
                    </div>
                    <div className="absolute h-5.5">
                      <div className="text-background-5 font-ibm-plex-mono button-split-lower-text text-tagline-2 block leading-[1.4] font-medium text-nowrap">
                        Subscribe now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </RevealAnimation>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
