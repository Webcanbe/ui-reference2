import { TextReveal } from '@/src/components/animation/text-reveal-animation';

const Hero = () => {
  return (
    <section className="bg-background-6 relative overflow-hidden pt-32 pb-18 xl:pt-40 2xl:pt-50">
      <div className="main-container relative z-10">
        <div className="mb-20 text-center xl:mb-28">
          <TextReveal>
            <h1 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 font-sora inline-block font-normal text-white/90">
              Insights, tips, and trends
              <br className="hidden lg:block" />
              <span className="text-white/30"> from Nexsas</span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-tagline-2 mx-auto mt-3 mb-14 max-w-xl font-normal text-white/60">
              At Nexsas, we share practical insights and real-world tips to help you make the most
              of AI in your business.
            </p>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
