import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';
import type { ServicePost } from '@/src/interface';
import Image from 'next/image';

interface ServiceDetailsHeroProps {
  service: ServicePost;
}

const ServiceDetailsHero = ({ service }: ServiceDetailsHeroProps) => {
  const ctaHref = service.ctaHref ?? '/contact';
  const ctaText = service.ctaText ?? 'Get a Demo';

  return (
    <section className="bg-background-6 relative overflow-hidden pt-32 pb-18 xl:pt-40 2xl:pt-50">
      <div className="main-container relative z-10">
        <div className="mb-10 text-center lg:mb-20 xl:mb-28">
          <TextReveal>
            <h2 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 inline-block font-normal text-white/90">
              {service.title} <span className="text-white/30">{service.titleItalic ?? ''}</span>
            </h2>
          </TextReveal>

          <TextReveal delay={0.2}>
            <p className="text-tagline-2 mx-auto mt-3 mb-14 max-w-xl font-normal text-white/60">
              {service.description}
            </p>
          </TextReveal>
          <RevealAnimation delay={0.3}>
            <div className="text-center">
              <PrimaryLinkButton href={ctaHref}>{ctaText}</PrimaryLinkButton>
            </div>
          </RevealAnimation>
        </div>
        {service.heroImage && (
          <RevealAnimation delay={0.4}>
            <figure className="mt-14 overflow-hidden rounded-[10px] md:mt-24 lg:mt-39">
              <Image
                src={service.heroImage}
                alt={service.title}
                width={1200}
                height={600}
                className="size-full object-cover"
              />
            </figure>
          </RevealAnimation>
        )}
      </div>
    </section>
  );
};

export default ServiceDetailsHero;
