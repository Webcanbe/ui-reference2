'use client';

import heroImage from '@/public/images/opai-img-95.png';
import heroThumbImg from '@/public/images/opai-img-96.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import HeroVideo from '@/src/components/home/hero-video';
import { PlayIcon } from '@/src/components/shared/icon';
import { HeroLinkButton } from '@/src/components/shared/ui/button/hero-link-button';
import { useModalContext } from '@/src/context/ModalContext';
import Image from 'next/image';

const Hero = () => {
  const { videoModal } = useModalContext();
  return (
    <section
      className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[200px]"
      aria-labelledby="hero-heading"
    >
      <div className="main-container relative z-4">
        <div className="space-y-14 md:space-y-16">
          <div className="space-y-10 md:space-y-14">
            {/* content */}
            <div className="space-y-3 text-center">
              <TextReveal instant>
                <h1 className="font-sora text-sora-heading-3 md:text-sora-heading-2 lg:text-sora-heading-1 mx-auto w-full max-w-[1036px] font-normal max-md:leading-[110%]">
                  <span className="text-white"> AI solutions</span>

                  <button
                    onClick={() =>
                      videoModal.openModal(
                        'https://www.youtube.com/embed/LuKAeNC8e3c?si=dNprxE8hkadUeDvf'
                      )
                    }
                    type="button"
                    className="modal-action group relative mx-2 inline-block h-14 w-[102px] cursor-pointer overflow-hidden rounded-full border-5 border-white/3 md:h-[66px]"
                    aria-label="Play video about AI solutions"
                  >
                    <Image
                      src={heroThumbImg}
                      alt="Video thumbnail showing AI solutions in action"
                      width={102}
                      height={66}
                      className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.4] group-hover:rotate-10"
                    />
                    <span
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      aria-hidden
                    >
                      <PlayIcon className="fill-white" />
                    </span>
                  </button>

                  <span className="text-white/30">
                    built for real <br className="hidden md:block" /> business impact
                  </span>
                </h1>
              </TextReveal>

              <TextReveal instant delay={0.2}>
                <p
                  className="font-inter-tight text-tagline-2 mx-auto w-full max-w-[450px] font-normal text-white/50"
                  aria-describedby="hero-heading"
                >
                  Streamline operations, elevate decision-making, and fuel growth with practical,
                  results-driven AI.
                </p>
              </TextReveal>
            </div>

            {/* buttons */}
            <div
              className="flex items-center justify-center gap-x-6 lg:gap-x-14"
              aria-label="Action buttons"
            >
              <RevealAnimation delay={0.4} instant>
                <div>
                  <HeroLinkButton href="/pricing">Start for free</HeroLinkButton>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.5} instant>
                <div className="relative hidden md:inline-block">
                  <button
                    type="button"
                    onClick={() =>
                      videoModal.openModal(
                        'https://www.youtube.com/embed/BTMjD7_evjE?si=HXnYR-0JdkmV_kwM'
                      )
                    }
                    className="bg-background-7 border-stroke-1/11 modal-action group relative z-20 flex size-[52px] cursor-pointer items-center justify-center rounded-full border"
                    aria-label="Play demo video"
                  >
                    <span
                      className="flex size-6 items-center justify-center gap-x-1 overflow-hidden"
                      aria-hidden
                    >
                      <PlayIcon className="fill-background-6 h-[18px] w-[14px] shrink-0 -translate-x-4 scale-95 transition-all duration-400 ease-out group-hover:translate-x-3 group-hover:scale-100" />
                      <PlayIcon className="fill-background-6 h-[18px] w-[14px] shrink-0 -translate-x-[7px] scale-100 transition-all duration-400 ease-out group-hover:translate-x-3 group-hover:scale-75" />
                    </span>
                    <span
                      className="absolute top-1/2 left-1/2 z-10 size-17 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 opacity-100"
                      aria-hidden
                    />
                    <span
                      className="absolute top-1/2 left-1/2 z-10 size-21 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-100"
                      aria-hidden
                    />
                    <span
                      className="absolute top-1/2 left-1/2 z-10 size-25 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-100"
                      aria-hidden
                    />
                  </button>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* hero image */}
          <RevealAnimation delay={0.6} instant>
            <figure className="relative z-10 mx-auto h-[300px] max-w-[1223px] md:h-[400px] lg:h-[573px]">
              <Image
                src={heroImage}
                alt="AI-powered business solutions dashboard showing analytics and automation tools"
                width={1223}
                height={573}
                loading="eager"
                className="size-[120%] object-cover md:size-full"
                priority
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>

      {/* hero gradient video background */}
      <HeroVideo />

      {/* overlays */}
      <div
        className="to-background-7 pointer-events-none absolute -bottom-10 left-0 z-20 h-[184px] w-full bg-linear-to-b from-transparent from-[10.09%] to-[89.05%] select-none"
        aria-hidden
      />
      <div
        className="to-background-7 pointer-events-none absolute -bottom-12 left-0 z-19 h-[104px] w-full bg-linear-to-b from-transparent from-[10.09%] to-[69.05%] select-none"
        aria-hidden
      />
      <div
        className="to-background-7 pointer-events-none absolute -bottom-2 left-0 z-18 h-10 w-full bg-linear-to-b from-transparent from-[10.09%] to-[55.05%] select-none"
        aria-hidden
      />

      {/* bottom blend */}
      <div
        className="absolute left-0 z-20 hidden h-[200px] w-full min-[1920px]:-bottom-5 lg:-bottom-22 lg:block xl:-bottom-17 2xl:-bottom-7"
        aria-hidden
      >
        <Image
          src="/images/blend.png"
          alt=""
          width={1920}
          height={200}
          className="size-full object-cover object-bottom"
        />
      </div>
    </section>
  );
};

export default Hero;
