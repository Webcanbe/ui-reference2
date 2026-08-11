'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import PricingCard from '@/src/components/shared/ui/card/pricing-card';
import { pricingPlans } from '@/src/data/pricing-data';
import { useState } from 'react';
import PricingToggle from './pricing-toggle';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="pt-34 pb-28 xl:pt-40 2xl:pt-50">
      <div className="main-container">
        <div className="mb-[70px] space-y-3 text-center">
          <TextReveal>
            <h1 className="lg:text-sora-heading-2 text-sora-heading-3 font-normal text-white/90">
              Pricing <span className="text-white/30">plans</span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-tagline-2 mx-auto w-full font-normal text-white/60">
              Transparent pricing designed to scale with your business. No hidden fees, no
              surprises.
            </p>
          </TextReveal>
        </div>

        <div className="space-y-14">
          <RevealAnimation delay={0.3}>
            <div>
              <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-x-8 xl:flex-row xl:items-start 2xl:gap-x-12">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
              ))}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
