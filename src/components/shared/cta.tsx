'use client';

import ctaImage120 from '@/public/images/opai-img-120.jpg';
import ctaImage121 from '@/public/images/opai-img-121.jpg';
import ctaImage122 from '@/public/images/opai-img-122.jpg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CTA = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLElement>(null);
  const image2Ref = useRef<HTMLElement>(null);
  const image3Ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const image1 = image1Ref.current;
      const image2 = image2Ref.current;
      const image3 = image3Ref.current;
      const wrapper = wrapperRef.current;
      if (!image1 || !image2 || !image3 || !wrapper) return;

      const offset1 = -140;
      const offset2 = -160;
      const offset3 = -10;

      gsap.set(image1, { x: offset1, y: 50, rotation: -30, opacity: 0.2 });
      gsap.set(image2, { x: offset2, y: -3, rotation: -30, opacity: 0 });
      gsap.set(image3, { x: offset3, y: 150, rotation: -50, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 90%',
          once: true,
        },
      });

      tl.to(image3, {
        x: 0,
        y: 0,
        rotation: -30,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
      })
        .to(
          image2,
          {
            x: 0,
            y: 0,
            rotation: -15,
            opacity: 1,
            duration: 2,
            ease: 'power3.out',
          },
          '-=0.8'
        )
        .to(
          image1,
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: 2,
            ease: 'power3.out',
          },
          '-=1.8'
        );
    },
    { scope: wrapperRef }
  );

  return (
    <section className="bg-background-6 py-10 md:py-28 lg:py-30 xl:py-39">
      <div className="main-container">
        <div className="bg-background-5 relative flex items-center justify-between overflow-hidden rounded-lg p-7 lg:p-20 xl:p-[100px]">
          <div className="space-y-1.5 sm:max-w-[400px] lg:max-w-[567px] lg:space-y-3">
            <TextReveal delay={0.3}>
              <h2 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 font-normal max-md:leading-[110%]">
                <span className="font-normal text-white/90"> Start Your AI </span>
                <span className="text-white/30"> Transformation Today. </span>
              </h2>
            </TextReveal>
            <TextReveal delay={0.4}>
              <p className="font-inter-tight text-tagline-2 text-white/60">
                Let&apos;s explore how Nexsas can drive success for your business.
              </p>
            </TextReveal>
            <RevealAnimation delay={0.5}>
              <div className="mt-6 md:mt-12" data-opai-animate>
                <PrimaryLinkButton href="/contact">Learn more</PrimaryLinkButton>
              </div>
            </RevealAnimation>
          </div>

          <div ref={wrapperRef}>
            <figure
              ref={image1Ref}
              className="absolute right-0 -bottom-1 z-3 max-h-[406px] max-w-[120px] overflow-hidden sm:max-w-[150px] md:max-w-[250px] md:rounded-xl lg:right-5 lg:max-w-[320px] xl:right-25 xl:max-w-[360px]"
              aria-hidden
            >
              <Image src={ctaImage120} alt="cta-image-1" className="size-full object-cover" />
            </figure>
            <figure
              ref={image2Ref}
              className="absolute right-26 -bottom-3 z-2 hidden max-h-[345px] max-w-[130px] -rotate-15 overflow-hidden sm:block md:max-w-[220px] md:rounded-xl lg:right-40 lg:max-w-[280px] xl:right-60 xl:max-w-[317px]"
              aria-hidden
            >
              <Image src={ctaImage121} alt="cta-image-2" className="size-full object-cover" />
            </figure>
            <figure
              ref={image3Ref}
              className="absolute right-50 bottom-0 z-1 hidden max-h-[261px] max-w-[190px] -rotate-30 overflow-hidden rounded-xl md:block lg:right-100 lg:max-w-[150px] xl:max-w-[226px]"
              aria-hidden
            >
              <Image src={ctaImage122} alt="cta-image-3" className="size-full object-cover" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
