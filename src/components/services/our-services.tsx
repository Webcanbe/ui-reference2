import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { IconGradient, ServiceGradientIcon } from '@/src/components/shared/icon';
import type { ServicePost } from '@/src/interface';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';

interface OurServicesProps {
  services: ServicePost[];
}

const OurServices = ({ services }: OurServicesProps) => {
  return (
    <section>
      <div className="main-container">
        <div className="mb-18 space-y-3 text-center">
          <TextReveal>
            <h2 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 inline-block font-normal text-white/90">
              Tailored solutions. <span className="text-white/30">proven results.</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-tagline-2 font-inter-tight mx-auto w-full max-w-[542px] text-white/60">
              From custom software to machine learning models, we help you unlock AI&apos;s full
              potential, backed by a 95% satisfaction rate and 60% cost reduction.
            </p>
          </TextReveal>
        </div>
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          {services.map((service, index) => (
            <RevealAnimation key={service.slug} delay={0.3 + index * 0.1}>
              <div
                className="group col-span-12 h-[340px] md:col-span-6 lg:col-span-4"
                data-opai-animate
                data-delay="0.2"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="border-stroke-1/11 relative block h-full space-y-20 overflow-hidden rounded-lg border px-8 py-11"
                >
                  <figure className="absolute top-0 left-0 size-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <ServiceGradientIcon />
                  </figure>
                  <div className="flex h-full flex-col items-start justify-between">
                    <div className="border-stroke-1/11 relative flex size-[60px] items-center justify-center overflow-hidden rounded-[14px] border p-4 backdrop-blur-[28px]">
                      <figure className="absolute top-0 left-1/2 size-full -translate-x-1/2">
                        <IconGradient />
                      </figure>
                      <span className={cn('text-[28px] text-white', service.icon)}></span>
                    </div>
                    <div>
                      <h2 className="text-sora-heading-6 font-normal text-white/90">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
