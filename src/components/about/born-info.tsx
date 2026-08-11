import bornInfoImage from '@/public/images/opai-img-474.jpg';
import NumberAnimation from '@/src/components/animation/number-animation';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import AvatarItem from '@/src/components/shared/ui/avatar-reveal/avatar-item';
import AvatarReveal from '@/src/components/shared/ui/avatar-reveal/avatar-reveal';
import Image from 'next/image';

const AVATARS = [
  { src: '/images/opai-avatar-img-09.png', alt: 'Avatar' },
  { src: '/images/opai-avatar-img-10.png', alt: 'Avatar' },
  { src: '/images/opai-avatar-img-11.png', alt: 'Avatar' },
  { src: '/images/opai-avatar-img-12.png', alt: 'Avatar' },
];

const BornInfo = () => {
  return (
    <section className="overflow-hidden py-28 xl:py-34 2xl:py-44">
      <div className="main-container">
        <div className="flex flex-col items-start justify-between gap-y-10 overflow-hidden xl:flex-row xl:items-center xl:gap-x-14">
          <div className="w-full space-y-8">
            <div className="space-y-3">
              <TextReveal>
                <h2 className="font-sora text-sora-heading-4 lg:text-sora-heading-3 xl:text-sora-heading-2 inline-block font-normal text-white/90">
                  How Nexsas <span className="text-white/30">was born</span>
                </h2>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="text-tagline-2 max-w-xl font-normal text-white/60">
                  Nexsas was founded to make AI accessible for businesses. Our tools are trusted
                  globally for their simplicity, power, and real-world impact.
                </p>
              </TextReveal>
            </div>
            <div className="grid grid-cols-12 gap-y-4 md:gap-x-4">
              <RevealAnimation delay={0.3}>
                <div className="col-span-12 md:col-span-6">
                  <div className="border-stroke-1/11 bg-background-6 h-full rounded-lg border p-8 text-left">
                    <h3 className="font-sora text-sora-heading-3 flex items-center font-normal text-white/90">
                      <NumberAnimation
                        number={95}
                        speed={2000}
                        interval={200}
                        rooms={2}
                        heightSpaceRatio={1.9}
                        showPercentage
                      />
                    </h3>
                    <p className="text-tagline-2 font-normal text-white/90">
                      Customer satisfaction rate
                    </p>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.4}>
                <div className="col-span-12 md:col-span-6">
                  <div className="border-stroke-1/11 bg-background-6 h-full rounded-lg border p-8 text-left">
                    <h3 className="font-sora text-sora-heading-5 font-normal text-white/90">
                      Website design
                    </h3>
                    <p className="text-tagline-2 font-normal text-white/90">
                      Lorem ipsum dolor sit amet consectetur porta vel tempus molestie justo.
                    </p>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.5}>
                <div className="col-span-12 md:col-span-6">
                  <div className="border-stroke-1/11 bg-background-6 relative h-full overflow-hidden rounded-lg border p-8 text-left">
                    <RevealAnimation delay={0.6} direction="left" offset={100}>
                      <figure
                        className="absolute top-0 left-0 z-0 size-full select-none"
                        aria-hidden
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="149"
                          height="140"
                          viewBox="0 0 149 140"
                          fill="none"
                        >
                          <g opacity="0.9" filter="url(#born_blur0)">
                            <ellipse
                              cx="6.79936"
                              cy="-1.32236"
                              rx="58.0362"
                              ry="84.3854"
                              transform="rotate(-0.311865 6.79936 -1.32236)"
                              fill="#8D59FF"
                            />
                          </g>
                          <g
                            opacity="0.6"
                            style={{ mixBlendMode: 'plus-lighter' }}
                            filter="url(#born_blur1)"
                          >
                            <ellipse
                              cx="-55.7497"
                              cy="-34.2889"
                              rx="82.0362"
                              ry="120.414"
                              transform="rotate(-10.8579 -55.7497 -34.2889)"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="born_blur0"
                              x="-135.234"
                              y="-169.707"
                              width="284.07"
                              height="336.77"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feGaussianBlur stdDeviation="42" result="effect1_foregroundBlur" />
                            </filter>
                            <filter
                              id="born_blur1"
                              x="-190.469"
                              y="-204.566"
                              width="269.438"
                              height="340.555"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur" />
                            </filter>
                          </defs>
                        </svg>
                      </figure>
                    </RevealAnimation>
                    <h3 className="font-sora text-sora-heading-5 relative z-10 font-normal text-white/90">
                      Branding & identity
                    </h3>
                    <p className="text-tagline-2 relative z-10 font-normal text-white/90">
                      We build distinctive, memorable brands that resonate with your audience
                    </p>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.6}>
                <div className="col-span-12 md:col-span-6">
                  <div className="border-stroke-1/11 bg-background-6 flex h-full items-center gap-x-14 rounded-lg border p-8 text-left">
                    <div className="">
                      <AvatarReveal className="flex -space-x-3">
                        {AVATARS.map((a, i) => (
                          <AvatarItem key={i + 1} className="shrink-0">
                            <Image
                              src={a.src}
                              alt={a.alt}
                              width={36}
                              height={36}
                              className="z-1 inline-block size-9 rounded-full ring-2 ring-white"
                            />
                          </AvatarItem>
                        ))}
                        <AvatarItem>
                          <div className="bg-background-13/50 z-5 flex size-9 shrink-0 items-center justify-center rounded-full ring-2 ring-white backdrop-blur-[5.5px]">
                            <p className="text-tagline-4 font-normal text-white/80">99+</p>
                          </div>
                        </AvatarItem>
                      </AvatarReveal>
                    </div>
                    <p className="text-tagline-2 font-normal text-white/90">
                      Timeless, sustainable creativity.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.7}>
            <figure className="size-full max-h-[495px] max-w-full overflow-hidden rounded-lg xl:max-w-[495px]">
              <Image src={bornInfoImage} alt="Born info" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default BornInfo;
