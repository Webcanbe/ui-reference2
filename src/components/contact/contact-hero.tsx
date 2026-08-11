'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import {
  ContactAddressIcon,
  ContactEmailIcon,
  ContactPhoneIcon,
} from '@/src/components/shared/icon';
import Image from 'next/image';

const ContactHero = () => {
  return (
    <section className="lp:py-44! py-20 md:py-25 lg:py-30">
      <div className="main-container">
        <div className="mb-12 space-y-3 text-center xl:mb-19">
          <TextReveal>
            <h1 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 inline-block font-normal text-white/90">
              Reach out — We&apos;ll get back <br className="hidden sm:block" />
              <span className="text-white/30">within 24 hours</span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-tagline-2 mx-auto max-w-xs font-normal text-white/60">
              Fill out the form below, and a member of our team will be in touch shortly.
            </p>
          </TextReveal>
        </div>

        <RevealAnimation delay={0.7}>
          <div
            className="overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-2 bg-blend-lighten"
            style={{
              backgroundImage: "url('/images/gradient/opai-37.jpg')",
            }}
          >
            <div className="flex items-stretch gap-y-2 max-[800px]:flex-col min-[800px]:gap-x-2">
              <div className="flex-1">
                <div className="bg-background-6 h-full rounded-lg p-6 xl:p-8">
                  <span className="inline-block">
                    <ContactEmailIcon className="size-9" />
                  </span>
                  <div className="mt-6 mb-5 space-y-1">
                    <h2 className="text-sora-heading-6 font-normal text-white/90">Email</h2>
                    <a
                      href="mailto:support@Nexsas.com"
                      className="text-tagline-2 inline-block font-normal text-white/60 transition-all duration-300 ease-in-out hover:text-white"
                    >
                      support@Nexsas.com
                    </a>
                  </div>
                  <p className="text-tagline-2 font-normal text-white/50 underline underline-offset-2">
                    extra information (optional)
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-background-6 h-full rounded-lg p-6 xl:p-8">
                  <span className="inline-block">
                    <ContactPhoneIcon className="size-[27px]" />
                  </span>
                  <div className="mt-6 mb-5 space-y-1">
                    <h2 className="text-sora-heading-6 font-normal text-white/90">Phone</h2>
                    <a
                      href="tel:+18001234567"
                      className="text-tagline-2 inline-block font-normal text-white/60 transition-all duration-300 ease-in-out hover:text-white"
                    >
                      +1 800 123 4567
                    </a>
                  </div>
                  <p className="text-tagline-2 font-normal text-white/50 underline underline-offset-2">
                    extra information (optional)
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-background-6 h-full rounded-lg p-6 xl:p-8">
                  <span className="inline-block">
                    <ContactAddressIcon className="size-9" />
                  </span>
                  <div className="mt-6 mb-5 space-y-1">
                    <h2 className="text-sora-heading-6 font-normal text-white/90">Address</h2>
                    <p className="text-tagline-2 inline-block font-normal text-white/60">
                      123 Innovation Street, TechCity, CA 94043
                    </p>
                  </div>
                  <p className="text-tagline-2 font-normal text-white/50 underline underline-offset-2">
                    extra information (optional)
                  </p>
                </div>
              </div>
            </div>
            <figure className="mt-2 block overflow-hidden rounded-lg">
              <Image
                src="/images/opai-img-471.jpg"
                alt="Contact hero"
                width={1200}
                height={600}
                className="size-full object-cover"
              />
            </figure>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ContactHero;
