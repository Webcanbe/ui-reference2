'use client';

import opai1 from '@/public/images/gradient/opai-1.png';
import opai2 from '@/public/images/gradient/opai-2.png';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import AIChatbotVoiceAssistants from '@/src/components/home/ai-chatbot-voice-assistants';
import DataAnalyticsInsights from '@/src/components/home/data-analytics-insights';
import ExploreAllServices from '@/src/components/home/explore-all-services';
import IntelligentAutomation from '@/src/components/home/intelligent-automation';
import PredictiveAnalytics from '@/src/components/home/predictive-analytics';
import GlowingCard from '@/src/components/shared/ui/glowing-card/glowing-card';
import GlowingCards from '@/src/components/shared/ui/glowing-card/glowing-cards';
import Image from 'next/image';

const EmpoweringBusiness = () => {
  return (
    <section
      className="relative -my-0.5 overflow-hidden py-10 sm:py-20 md:py-28 lg:py-30 xl:py-44"
      aria-labelledby="empowering-business-heading"
      data-section="empowering-business"
    >
      <div className="main-container relative z-20">
        <div className="space-y-10 md:space-y-14 lg:space-y-20">
          {/* text */}
          <div className="space-y-2 text-center md:space-y-3">
            <TextReveal>
              <h2
                id="empowering-business-heading"
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[700px] font-normal max-md:leading-[110%]"
                itemProp="name"
              >
                Empowering your{' '}
                <span className="text-background-13/50">
                  business <br className="hidden md:block" />
                  with AI expertise
                </span>
              </h2>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p
                className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[350px] font-normal"
                aria-label="Description of AI business solutions"
                itemProp="description"
              >
                Our tailored solutions address your challenges, delivering innovation at scale.
              </p>
            </TextReveal>
          </div>

          {/* cards */}
          <div className="relative z-5">
            <GlowingCards
              className="flex flex-col items-center justify-center gap-y-8"
              aria-label="AI business solutions showcase"
            >
              {/* row one */}
              <div className="flex w-full flex-col items-center justify-center gap-x-4 gap-y-8 overflow-hidden md:flex-row md:gap-y-0">
                <GlowingCard className="min-w-0 shrink-0 overflow-hidden rounded-[8px] md:w-[380px]">
                  <IntelligentAutomation />
                </GlowingCard>

                <div className="flex w-full max-w-[894px] min-w-0 flex-col items-start justify-center gap-y-8 overflow-hidden md:gap-y-5 xl:gap-y-8">
                  <GlowingCard className="w-full min-w-0 overflow-hidden rounded-[8px]">
                    <PredictiveAnalytics />
                  </GlowingCard>

                  <GlowingCard className="w-full min-w-0 overflow-hidden rounded-[8px]">
                    <AIChatbotVoiceAssistants />
                  </GlowingCard>
                </div>
              </div>

              {/* row two */}
              <div className="flex w-full flex-col items-center justify-center gap-y-8 md:flex-row md:gap-x-4">
                <GlowingCard className="overflow-hidden rounded-[8px]">
                  <DataAnalyticsInsights />
                </GlowingCard>

                <GlowingCard className="overflow-hidden rounded-[8px]">
                  <ExploreAllServices />
                </GlowingCard>
              </div>
            </GlowingCards>
          </div>
        </div>
      </div>

      {/* top gradient background */}
      <div className="absolute -top-10 left-0 z-4 h-[796px] w-full md:top-0 md:h-[760px] lg:-top-2 2xl:-top-12">
        <Image
          src={opai1}
          alt=""
          role="presentation"
          className="max-md:size-full max-md:object-cover"
        />
      </div>

      {/* bottom gradient background */}
      <div className="absolute -bottom-137 left-0 z-4 h-[696px] w-full min-[550px]:-bottom-119 min-[1930px]:bottom-84! md:-bottom-97 lg:-bottom-72 xl:-bottom-47 2xl:bottom-18">
        <Image src={opai2} alt="" role="presentation" />
      </div>
    </section>
  );
};

export default EmpoweringBusiness;
