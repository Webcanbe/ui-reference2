'use client';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { ChevronRightIcon } from '@/src/components/shared/icon';
import { useButtonSplitText } from '@/src/hooks/use-button-split-text';
import Link from 'next/link';
import { useRef } from 'react';

const Newsletter = () => {
  const subscribeButtonRef = useRef<HTMLDivElement>(null);
  useButtonSplitText(subscribeButtonRef);

  return (
    <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
      <RevealAnimation delay={0.1}>
        <div className="text-center lg:text-left">
          <p className="text-background-11 text-sora-heading-5 font-normal tracking-[-0.72px]">
            Subscribe to our newsletter
          </p>
          <p className="text-tagline-2 font-normal text-white/50">
            Stay updated with our latest news and updates.
          </p>
        </div>
      </RevealAnimation>

      <div className="space-y-3 text-center max-md:w-full lg:text-left">
        <RevealAnimation delay={0.2}>
          <form className="flex flex-col items-center gap-2 md:flex-row">
            <div className="w-full md:w-[260px]">
              <input
                type="email"
                required
                aria-label="Enter your email"
                placeholder="Enter your email"
                className="border-stroke-3/30 bg-background-6 placeholder:text-background-8 placeholder:text-tagline-3 text-background-8 text-tagline-2 focus:ring-stroke-3/50 mx-auto block h-10 w-full rounded-full border px-4 py-3 font-normal placeholder:font-normal focus:ring-[0.5px] focus:outline-none max-sm:w-[85%] md:mx-0"
              />
            </div>
            <div ref={subscribeButtonRef} className="w-[85%] sm:block sm:w-auto">
              <button
                type="submit"
                className="group bg-background-7 hover:border-stroke-3 relative flex max-h-10 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
              >
                <div className="relative overflow-hidden">
                  <div className="h-5.5">
                    <div className="text-background-5 font-ibm-plex-mono button-split-upper-text text-tagline-2 block leading-[1.4] font-medium text-nowrap">
                      Subscribe
                    </div>
                  </div>
                  <div className="absolute h-5.5">
                    <div className="text-background-5 font-ibm-plex-mono button-split-lower-text text-tagline-2 block leading-[1.4] font-medium text-nowrap">
                      Subscribe
                    </div>
                  </div>
                </div>
                <div className="relative mt-[2px] flex size-6 items-center justify-center overflow-hidden">
                  <span className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] translate-x-0 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-6">
                    <ChevronRightIcon className="stroke-background-6 size-[18px] stroke-[1.5px]" />
                  </span>
                  <span className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] -translate-x-6 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-0">
                    <ChevronRightIcon className="stroke-background-6 size-[18px] stroke-[1.5px]" />
                  </span>
                </div>
              </button>
            </div>
          </form>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <p className="text-tagline-4 font-normal text-white/60">
            By subscribing you agree to with our{' '}
            <Link href="#" className="font-medium text-white hover:underline">
              Privacy Policy
            </Link>
          </p>
        </RevealAnimation>
      </div>
    </div>
  );
};

export default Newsletter;
