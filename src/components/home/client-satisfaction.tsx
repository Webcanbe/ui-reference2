'use client';

import NumberAnimation from '@/src/components/animation/number-animation';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { StarIcon } from '@/src/components/shared/icon';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CARD_ANIMATIONS = [
  { x: 150, duration: 1.5, delay: 0.1, rotation: 15 },
  { x: 90, duration: 2.2, delay: 0.2, rotation: 5 },
  { x: 0, duration: 2.5, delay: 0.3, rotation: -5 },
] as const;

const ClientSatisfaction = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const cardRefs = [card1Ref, card2Ref, card3Ref];

  useGSAP(
    () => {
      const container = cardsContainerRef.current;
      const trigger = container?.closest('.our-impact-section') ?? null;
      if (!trigger) return;

      cardRefs.forEach((ref, index) => {
        const card = ref.current;
        if (!card) return;

        const config = CARD_ANIMATIONS[index];
        if (!config) return;

        gsap.from(card, {
          ...config,
          ease: 'power3.out',
          scrollTrigger: {
            trigger,
            start: 'top 95%',
            end: 'bottom 18%',
            scrub: 0.8,
          },
        });
      });
    },
    { scope: cardsContainerRef }
  );

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <RevealAnimation delay={0.3}>
        <div
          className="border-stroke-3/18 relative h-[420px] w-full max-w-[409px] overflow-hidden rounded-lg border bg-white px-10.5 pt-[57px] pb-10.5 max-md:mx-auto"
          aria-label="Client satisfaction statistics"
        >
          {/* Client testimonials and review cards */}
          <div
            ref={cardsContainerRef}
            className="relative md:-left-1 lg:-left-5 xl:left-4"
            aria-label="Client testimonials and reviews"
          >
            {/* review 01 */}
            <div
              ref={card1Ref}
              className="our-impact-review-card border-stroke-1/11 bg-background-6 absolute top-[35px] flex h-[200px] w-[188px] -rotate-9 flex-col items-center justify-between rounded-sm border p-4"
              aria-label="Client testimonial from Akiko Tanaka"
            >
              <div className="flex flex-col items-center justify-center gap-y-4">
                <div className="flex items-center gap-x-1" aria-hidden>
                  <StarIcon className="fill-opai-yellow size-4" />
                  <StarIcon className="fill-opai-yellow size-4" />
                  <StarIcon className="fill-opai-yellow size-4" />
                  <StarIcon className="fill-opai-yellow size-4" />
                  <StarIcon className="fill-opai-yellow size-4" />
                </div>
                <blockquote
                  className="font-inter-tight max-w-[156px] text-center text-[8px] leading-[150%] font-normal text-white/60"
                  cite="Akiko Tanaka, Chief Strategy Officer, Marketing Agency"
                >
                  &quot;We tried other solutions, but nothing came close to the precision and
                  intelligence that Nexsas brings.&quot;
                </blockquote>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <figure className="size-6 overflow-hidden rounded-full">
                  <Image
                    src="/images/opai-avatar-img-13.png"
                    alt="Akiko Tanaka, Chief Strategy Officer profile img"
                    width={24}
                    height={24}
                    className="size-full object-cover"
                  />
                </figure>
                <div className="text-center">
                  <h3 className="font-inter-tight text-tagline-4 font-normal text-white">
                    Akiko Tanaka
                  </h3>
                  <p className="font-inter-tight text-[10px] leading-[150%] font-normal text-white/60">
                    Chief Strategy Officer, Marketing Agency
                  </p>
                </div>
              </div>
            </div>

            {/* review 02 */}
            <div
              ref={card2Ref}
              className="our-impact-review-card border-stroke-1/11 bg-background-6 absolute top-[26px] left-[38px] flex h-[200px] w-[188px] flex-col items-center justify-between rounded-sm border p-4"
              aria-label="Client testimonial from Akiko Tanaka"
            >
              <div className="flex flex-col items-center justify-center gap-y-4">
                <div className="flex items-center gap-x-1" aria-hidden>
                  <StarIcon className="fill-opai-yellow size-4" />
                  <StarIcon className="fill-opai-yellow size-4" />
                  <StarIcon className="fill-opai-yellow size-4" />
                  <StarIcon className="fill-opai-yellow size-4" />
                  <StarIcon className="fill-opai-yellow size-4" />
                </div>
                <blockquote
                  className="font-inter-tight max-w-[156px] text-center text-[8px] leading-[150%] font-normal text-white/60"
                  cite="Akiko Tanaka, Chief Strategy Officer, Marketing Agency"
                >
                  &quot;We tried other solutions, but nothing came close to the precision and
                  intelligence that Nexsas brings.&quot;
                </blockquote>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <figure className="size-6 overflow-hidden rounded-full">
                  <Image
                    src="/images/opai-avatar-img-13.png"
                    alt="Akiko Tanaka, Chief Strategy Officer profile img"
                    width={24}
                    height={24}
                    className="size-full object-cover"
                  />
                </figure>
                <div className="text-center">
                  <h3 className="font-inter-tight text-tagline-4 font-normal text-white">
                    Akiko Tanaka
                  </h3>
                  <p className="font-inter-tight text-[10px] leading-[150%] font-normal text-white/60">
                    Chief Strategy Officer, Marketing Agency
                  </p>
                </div>
              </div>
            </div>

            {/* review 03 */}
            <div
              ref={card3Ref}
              className="our-impact-review-card border-stroke-1/11 bg-background-6 absolute top-[21px] left-[96px] flex h-[200px] w-[188px] rotate-15 flex-col items-center justify-between rounded-sm border p-4"
              aria-label="Client testimonial from Akiko Tanaka"
            >
              <div className="flex flex-col items-center justify-center gap-y-4">
                <div className="flex items-center gap-x-1" aria-hidden>
                  <StarIcon className="fill-opai-yellow size-4" />
                  <StarIcon className="fill-opai-yellow size-4" />
                  <StarIcon className="fill-opai-yellow size-4" />
                  <StarIcon className="fill-opai-yellow size-4" />
                  <StarIcon className="fill-opai-yellow size-4" />
                </div>
                <blockquote
                  className="font-inter-tight max-w-[156px] text-center text-[8px] leading-[150%] font-normal text-white/60"
                  cite="Akiko Tanaka, Chief Strategy Officer, Marketing Agency"
                >
                  &quot;We tried other solutions, but nothing came close to the precision and
                  intelligence that Nexsas brings.&quot;
                </blockquote>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <figure className="size-6 overflow-hidden rounded-full">
                  <Image
                    src="/images/opai-avatar-img-13.png"
                    alt="Akiko Tanaka, Chief Strategy Officer profile"
                    width={24}
                    height={24}
                    className="size-full object-cover"
                  />
                </figure>
                <div className="text-center">
                  <h3 className="font-inter-tight text-tagline-4 font-normal text-white">
                    Akiko Tanaka
                  </h3>
                  <p className="font-inter-tight text-[10px] leading-[150%] font-normal text-white/60">
                    Chief Strategy Officer, Marketing Agency
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-0 z-20 h-[324px] w-full bg-linear-to-b from-transparent from-[10.09%] to-[#FFF] to-[60.6%] select-none"
            aria-hidden
          />

          {/* text content */}
          <div className="absolute bottom-10.5 left-1/2 z-30 -translate-x-1/2">
            <div className="flex flex-col items-center justify-center gap-y-6">
              <div className="flex items-center gap-x-1" aria-hidden>
                <StarIcon className="fill-opai-purple size-4" />
                <StarIcon className="fill-opai-purple size-4" />
                <StarIcon className="fill-opai-purple size-4" />
                <StarIcon className="fill-opai-purple size-4" />
                <StarIcon className="fill-opai-purple size-4" />
              </div>
              <div className="text-center">
                <h3
                  className="font-sora text-sora-heading-3 flex items-center justify-center font-normal text-black"
                  aria-label="99 percent client satisfaction"
                >
                  <NumberAnimation
                    number={99}
                    speed={2000}
                    interval={200}
                    rooms={2}
                    heightSpaceRatio={1.9}
                    showPercentage
                  />
                </h3>
                <p className="font-inter-tight text-tagline-2 text-background-13/50 font-normal">
                  Client satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </div>
  );
};

export default ClientSatisfaction;
