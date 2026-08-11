import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';

const ServicesHero = () => {
  return (
    <section className="py-44">
      <div className="main-container">
        <div>
          <div className="space-y-3 text-center">
            <div className="mx-auto w-full max-w-[461px]">
              <TextReveal>
                <h2 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 inline-block font-normal text-white/90">
                  Transform ideas into <span className="text-white/30">stunning visuals</span>
                </h2>
              </TextReveal>
            </div>
            <TextReveal delay={0.2}>
              <p className="text-tagline-2 font-inter-tight mx-auto w-full max-w-[442px] text-white/60">
                Nexsas&apos;s Creative & Visual AI tools let you generate high-quality visuals
                instantly, no design or coding skills needed.
              </p>
            </TextReveal>
          </div>
          <RevealAnimation delay={0.3}>
            <div className="mt-14 text-center">
              <PrimaryLinkButton href="/contact">Talk to our AI experts</PrimaryLinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
