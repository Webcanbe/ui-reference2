import whyChooseUsImage from '@/public/images/opai-img-475.jpg';
import whyChooseUsImage2 from '@/public/images/opai-img-509.png';
import whyChooseUsImage3 from '@/public/images/opai-img-510.png';
import whyChooseUsImage4 from '@/public/images/opai-img-511.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import AvatarItem from '@/src/components/shared/ui/avatar-reveal/avatar-item';
import AvatarReveal from '@/src/components/shared/ui/avatar-reveal/avatar-reveal';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';
import Image from 'next/image';
const AVATARS = [
  { src: '/images/opai-avatar-img-09.png', alt: 'Avatar 2' },
  { src: '/images/opai-avatar-img-10.png', alt: 'Avatar 3' },
  { src: '/images/opai-avatar-img-11.png', alt: 'Avatar 4' },
  { src: '/images/opai-avatar-img-12.png', alt: 'Avatar 5' },
];

const WhyChooseUs = () => {
  return (
    <section className="overflow-hidden py-24 xl:py-32 2xl:py-44">
      <div className="main-container space-y-18">
        <div className="space-y-5">
          <div className="text-center">
            <TextReveal>
              <h2 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 inline-block text-center font-normal text-white/90">
                Why <span className="text-white/30">Nexsas?</span>
              </h2>
            </TextReveal>
          </div>
          <div className="flex items-center justify-center gap-x-4">
            <AvatarReveal className="flex -space-x-3" stagger={0.1}>
              {AVATARS.map((avatar) => (
                <AvatarItem key={avatar.src} className="shrink-0">
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    width={36}
                    height={36}
                    className="inline-block size-9 rounded-full ring-2 ring-white"
                  />
                </AvatarItem>
              ))}
              <AvatarItem>
                <div className="bg-background-13/50 z-5 flex size-9 shrink-0 items-center justify-center rounded-full ring-2 ring-white backdrop-blur-[5.5px]">
                  <p className="text-tagline-4 font-normal text-white/80">99+</p>
                </div>
              </AvatarItem>
            </AvatarReveal>
            <RevealAnimation delay={0.3}>
              <div>
                <p className="text-tagline-3 block font-medium text-white/90">Trusted by 100+</p>
                <p className="text-tagline-4 font-normal text-white/60">
                  Customers across the globe
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-12 items-center gap-y-8 lg:gap-x-8">
          <RevealAnimation delay={0.2} direction="left">
            <div className="col-span-12 lg:col-span-4">
              <div className="border-stroke-1/11 group relative flex min-h-[347px] items-end rounded-xl border p-8">
                <figure className="absolute top-0 left-0 size-full overflow-hidden rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Image
                    src={whyChooseUsImage}
                    alt="Why Choose Us"
                    className="size-full object-cover"
                  />
                </figure>
                <div
                  className="absolute inset-0 z-0 size-full scale-105 bg-[linear-gradient(232deg,rgba(13,16,23,0.00)_49.68%,rgba(13,16,23,0.60)_70.59%,#0D1017_84.77%)] bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-100"
                  aria-hidden
                />
                <h3 className="lg:text-sora-heading-5 text-sora-heading-6 relative z-10 font-normal text-white">
                  Save hours of design and rendering time
                </h3>
              </div>
            </div>
          </RevealAnimation>

          <div className="col-span-12 space-y-8 lg:col-span-4">
            <RevealAnimation delay={0.3} direction="up">
              <div className="border-stroke-1/11 group relative flex min-h-[347px] items-end rounded-xl border p-8">
                <figure className="absolute top-0 left-0 size-full overflow-hidden rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Image
                    src={whyChooseUsImage2}
                    alt="Why Choose Us"
                    className="size-full object-cover"
                  />
                </figure>
                <div
                  className="absolute inset-0 z-0 size-full scale-105 bg-[linear-gradient(232deg,rgba(13,16,23,0.00)_49.68%,rgba(13,16,23,0.60)_70.59%,#0D1017_84.77%)] bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-100"
                  aria-hidden
                />
                <h3 className="lg:text-sora-heading-5 text-sora-heading-6 relative z-10 font-normal text-white">
                  Scale visual content across formats, styles, and platforms
                </h3>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="border-stroke-1/11 group relative flex min-h-[347px] items-end overflow-hidden rounded-xl border p-8">
                <figure className="absolute top-0 left-0 size-full overflow-hidden rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Image
                    src={whyChooseUsImage3}
                    alt="Why Choose Us"
                    className="size-full object-cover"
                  />
                </figure>
                <div
                  className="absolute inset-0 z-0 size-full scale-105 bg-[linear-gradient(232deg,rgba(13,16,23,0.00)_49.68%,rgba(13,16,23,0.60)_70.59%,#0D1017_84.77%)] bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-100"
                  aria-hidden
                />
                <h3 className="lg:text-sora-heading-5 text-sora-heading-6 relative z-10 font-normal text-white">
                  Customize outputs with ease—no design background required
                </h3>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4} direction="right">
            <div className="col-span-12 lg:col-span-4">
              <div className="border-stroke-1/11 group relative flex h-[347px] items-end overflow-hidden rounded-xl border p-8">
                <figure className="absolute top-0 left-0 size-full overflow-hidden rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Image
                    src={whyChooseUsImage4}
                    alt="Why Choose Us"
                    className="size-full object-cover"
                  />
                </figure>
                <div
                  className="absolute inset-0 z-0 size-full scale-105 bg-[linear-gradient(232deg,rgba(13,16,23,0.00)_49.68%,rgba(13,16,23,0.60)_70.59%,#0D1017_84.77%)] bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-100"
                  aria-hidden
                />
                <h3 className="lg:text-sora-heading-5 text-sora-heading-6 relative z-10 font-normal text-white">
                  Save hours of design and rendering time
                </h3>
              </div>
            </div>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.1}>
          <div className="text-center">
            <PrimaryLinkButton href="/contact">Talk to our AI experts</PrimaryLinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default WhyChooseUs;
