import opaiImg507 from '@/public/images/opai-img-507.png';
import opaiImg508 from '@/public/images/opai-img-508.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import Image from 'next/image';

const IncludeInEveryPlan = () => {
  return (
    <section className="lp:py-44! py-20 md:py-25 lg:py-30">
      <div className="main-container">
        <div className="flex flex-col items-center justify-center gap-10 overflow-hidden lg:flex-row lg:gap-x-10 xl:gap-x-25">
          {/* images  */}
          <RevealAnimation delay={0.1} direction="left" offset={100}>
            <div className="flex w-full flex-col items-center justify-center gap-x-8 gap-y-6 md:flex-row md:gap-y-0">
              <figure className="h-[430px] w-full overflow-hidden rounded-lg">
                <Image src={opaiImg507} alt="project-img" className="size-full object-cover" />
              </figure>
              <figure className="h-[430px] w-full overflow-hidden rounded-lg">
                <Image src={opaiImg508} alt="project-img" className="size-full object-cover" />
              </figure>
            </div>
          </RevealAnimation>

          {/* text content  */}
          <RevealAnimation delay={0.2} direction="right" offset={100}>
            <div className="w-full space-y-8">
              <div className="space-y-3">
                <TextReveal delay={0.3}>
                  <h2 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 font-normal text-white/90 lg:max-w-[450px]">
                    What’s included in <span className="text-white/30">every plan</span>
                  </h2>
                </TextReveal>
                <TextReveal delay={0.4}>
                  <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    Key Advantages of Each Subscription Plan. Every subscription plan we offer comes
                    with its own set of core benefits designed to enhance your experience.
                  </p>
                </TextReveal>
              </div>
              <TextReveal delay={0.5}>
                <ul className="space-y-3">
                  <li className="font-inter-tight text-tagline-1 flex items-center gap-x-2 text-white/90">
                    <span className="inline-block size-1.5 rounded-full bg-white"></span>
                    Free Onboarding
                  </li>
                  <li className="font-inter-tight text-tagline-1 flex items-center gap-x-2 text-white/90">
                    <span className="inline-block size-1.5 rounded-full bg-white"></span>
                    AI Insights
                  </li>
                  <li className="font-inter-tight text-tagline-1 flex items-center gap-x-2 text-white/90">
                    <span className="inline-block size-1.5 rounded-full bg-white"></span>
                    Secure Data Management
                  </li>
                  <li className="font-inter-tight text-tagline-1 flex items-center gap-x-2 text-white/90">
                    <span className="inline-block size-1.5 rounded-full bg-white"></span>
                    Real-Time Analytics
                  </li>
                  <li className="font-inter-tight text-tagline-1 flex items-center gap-x-2 text-white/90">
                    <span className="inline-block size-1.5 rounded-full bg-white"></span>
                    Cancel Anytime
                  </li>
                  <li className="font-inter-tight text-tagline-1 flex items-center gap-x-2 text-white/90">
                    <span className="inline-block size-1.5 rounded-full bg-white"></span>
                    Free Updates
                  </li>
                </ul>
              </TextReveal>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default IncludeInEveryPlan;
