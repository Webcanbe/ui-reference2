'use client';

import img97 from '@/public/images/opai-img-97.png';
import img98 from '@/public/images/opai-img-98.png';
import img99 from '@/public/images/opai-img-99.png';
import NumberAnimation from '@/src/components/animation/number-animation';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { ClipBoardIcon } from '@/src/components/shared/icon';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const IMAGE_ANIMATIONS = [
  { y: -70, duration: 2.3, rotation: -7 },
  { y: 70, duration: 2.3, rotation: 12 },
  { x: 90, duration: 2.3, rotation: 12 },
] as const;

const SuccessfulProjects = () => {
  const imageGroupRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLElement>(null);
  const image2Ref = useRef<HTMLElement>(null);
  const image3Ref = useRef<HTMLElement>(null);
  const imageRefs = [image1Ref, image2Ref, image3Ref];

  useGSAP(
    () => {
      const container = imageGroupRef.current;
      const trigger = container?.closest('.our-impact-section') ?? null;
      if (!container || !trigger) return;

      imageRefs.forEach((ref, index) => {
        const image = ref.current;
        if (!image) return;

        const config = IMAGE_ANIMATIONS[index];
        if (!config) return;

        gsap.from(image, {
          ...config,
          ease: 'power3.out',
          filter: 'blur(5px)',
          scrollTrigger: {
            trigger,
            start: 'top 80%',
            end: 'bottom 30%',
            scrub: 0.8,
            once: true,
          },
        });
      });
    },
    { scope: imageGroupRef }
  );

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <RevealAnimation delay={0.2}>
        <div
          className="border-stroke-3/18 relative h-[420px] max-w-[409px] basis-[409px] rounded-lg border bg-white px-10.5 pt-[27px] pb-10.5 max-md:mx-auto lg:px-5 xl:px-10.5"
          aria-label="Successful projects statistics"
        >
          {/* image group */}
          <div ref={imageGroupRef} className="relative h-[294px] w-full max-w-[324px]">
            <div
              className="pointer-events-none absolute inset-0 z-20 h-[294px] max-w-[409px] bg-linear-to-b from-transparent from-[10.09%] to-[#FFF] to-[90.05%] select-none md:to-[80.05%]"
              aria-hidden
            />
            <figure
              ref={image1Ref}
              className="our-impact-image border-stroke-1/11 absolute top-[130px] right-[34px] h-[143px] w-[188px] rotate-12 overflow-hidden rounded-[2px] border"
            >
              <Image
                src={img99}
                alt="Project showcase img 3 - demonstrating successful project outcomes"
                className="size-full object-cover"
                loading="lazy"
              />
            </figure>
            <figure
              ref={image2Ref}
              className="our-impact-image border-stroke-1/11 absolute top-[19px] right-[36px] h-[138px] w-[188px] -rotate-12 overflow-hidden rounded-[2px] border"
            >
              <Image
                src={img97}
                alt="Project showcase img 1 - demonstrating successful project outcomes"
                className="size-full object-cover"
                loading="lazy"
              />
            </figure>
            <figure
              ref={image3Ref}
              className="our-impact-image border-stroke-1/11 absolute top-[77px] left-[19px] h-[154px] w-[188px] -rotate-8 overflow-hidden rounded-[2px] border"
            >
              <Image
                src={img98}
                alt="Project showcase img 2 - demonstrating successful project outcomes"
                className="size-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>

          {/* text content */}
          <div className="absolute bottom-10.5 left-1/2 z-30 -translate-x-1/2 space-y-[30.5px] text-center">
            <span className="flex items-center justify-center">
              <ClipBoardIcon className="stroke-opai-purple shrink-0" />
            </span>
            <div className="text-center">
              <h3
                className="font-sora text-sora-heading-3 flex items-center justify-center font-normal text-black"
                aria-label="500 plus successful projects"
              >
                <NumberAnimation
                  number={500}
                  speed={2000}
                  interval={200}
                  rooms={3}
                  heightSpaceRatio={1.7}
                />
                +
              </h3>
              <p className="font-inter-tight text-tagline-2 text-background-13/50 font-normal">
                Successful projects
              </p>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </div>
  );
};

export default SuccessfulProjects;
