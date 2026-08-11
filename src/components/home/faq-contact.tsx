'use client';
import faqContactGradient from '@/public/images/gradient/opai-6.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { useButtonSplitText } from '@/src/hooks/use-button-split-text';
import Image from 'next/image';
import { useRef } from 'react';
const FaqContact = () => {
  const contactButtonWrapperRef = useRef<HTMLDivElement>(null);
  useButtonSplitText(contactButtonWrapperRef);
  return (
    <RevealAnimation direction="right" offset={100} delay={0.3}>
      <div
        className="relative z-10 w-full max-w-[595px] overflow-hidden p-7 lg:p-14"
        data-opai-animate
        data-delay="0.3"
      >
        <figure className="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-lg">
          <Image src={faqContactGradient} alt="faq-v7-contact" fill className="object-cover" />
        </figure>
        <h4 className="font-inter-tight text-it-heading-5 mb-2 font-medium text-white/90">
          Still have questions?
        </h4>
        <p className="text-tagline-4 font-inter-tight mb-6 text-white/60">
          Support details to capture customers that might be on the fence.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            required
            className="focus:outline-stroke-3 text-tagline-2 font-inter-tight bg-background-13/90 border-stroke-3/35 min-h-12 w-full rounded-md border px-4 font-extralight text-white/90 backdrop-blur-[32px] placeholder:text-white/60 focus:outline-1"
          />
          <input
            type="email"
            required
            placeholder="Your email"
            className="focus:outline-stroke-3 text-tagline-2 font-inter-tight bg-background-13/90 border-stroke-3/35 min-h-12 w-full rounded-md border px-4 font-extralight text-white/90 backdrop-blur-[32px] placeholder:text-white/60 focus:outline-1"
          />
          <input
            type="text"
            required
            placeholder="Subject"
            className="focus:outline-stroke-3 text-tagline-2 font-inter-tight bg-background-13/90 border-stroke-3/35 min-h-12 w-full rounded-md border px-4 font-extralight text-white/90 backdrop-blur-[32px] placeholder:text-white/60 focus:outline-1"
          />
          <textarea
            required
            placeholder="Your Questions"
            className="focus:outline-stroke-3 text-tagline-2 font-inter-tight bg-background-13/90 border-stroke-3/35 min-h-[220px] w-full rounded-md border p-4 font-extralight text-white/90 backdrop-blur-[32px] placeholder:text-white/60 focus:outline-1"
          />
          <div className="w-full max-md:mx-auto max-md:w-[85%] md:mx-0 md:w-auto">
            <button type="submit" className="w-full">
              <div
                ref={contactButtonWrapperRef}
                className="button-split-text-wrapper inline-block w-full"
              >
                <div className="group bg-background-7 hover:border-stroke-3 relative flex max-h-12 cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-6 py-2! transition-all duration-300 ease-in-out md:py-3!">
                  <div className="relative overflow-hidden">
                    <div className="h-5.5">
                      <div className="text-background-5 font-ibm-plex-mono button-split-upper-text text-tagline-2 block leading-[1.4] font-medium text-nowrap">
                        Contact us
                      </div>
                    </div>
                    <div className="absolute h-5.5">
                      <div className="text-background-5 font-ibm-plex-mono button-split-lower-text text-tagline-2 block leading-[1.4] font-medium text-nowrap">
                        Contact us
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-[2px] flex size-6 items-center justify-center overflow-hidden">
                    <span className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] translate-x-0 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M6.75 13.5L11.25 9L6.75 4.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] -translate-x-6 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M6.75 13.5L11.25 9L6.75 4.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </form>
      </div>
    </RevealAnimation>
  );
};

export default FaqContact;
