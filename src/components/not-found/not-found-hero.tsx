import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button';
const NotFoundHero = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="lp:py-44! py-20 md:py-25 lg:py-30">
        <div className="main-container">
          <div
            className="overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-2 bg-blend-lighten"
            style={{
              backgroundImage: "var(--color-gradient-20), url('/images/gradient/opai-37.jpg')",
            }}
          >
            <div className="bg-background-6 rounded-lg px-3.5 py-20 lg:px-0 xl:py-39">
              <div className="text-center">
                <div className="flex flex-col items-center justify-center">
                  <TextReveal>
                    <h1 className="font-sora inline-block text-[60px] leading-[70px] font-normal text-white/90 sm:text-[120px] sm:leading-[180px] md:text-[160px] xl:text-[200px] xl:leading-[240px] xl:tracking-[-10px]">
                      40<span className="text-white/30">4</span>
                    </h1>
                  </TextReveal>

                  <TextReveal delay={0.2}>
                    <h2 className="font-sora text-sora-heading-5 sm:text-sora-heading-4 lg:text-sora-heading-2 mb-3 inline-block font-normal text-white/90">
                      Oops! Page
                      <br className="hidden md:block" />
                      <span className="text-white/30">Not Found</span>
                    </h2>
                  </TextReveal>
                </div>

                <TextReveal delay={0.3}>
                  <p className="text-tagline-2 mx-auto max-w-xs font-normal text-white/60">
                    The page doesn&apos;t exist or was moved. Don&apos;t worry, we&apos;ll guide you
                    back.
                  </p>
                </TextReveal>

                <RevealAnimation delay={0.4} instant>
                  <div className="mt-10 flex justify-center text-center lg:mt-18">
                    <PrimaryLinkButton href="/" displayClassName="w-auto">
                      Back to Home
                    </PrimaryLinkButton>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default NotFoundHero;
