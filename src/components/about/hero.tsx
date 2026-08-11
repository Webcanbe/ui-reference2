import heroImage from '@/public/images/opai-img-473.jpg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="pt-44">
      <div className="main-container">
        <div className="space-y-14 xl:space-y-20">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h1 className="font-sora text-sora-heading-4 lg:text-sora-heading-3 xl:text-sora-heading-2 inline-block font-normal text-white/90">
                Revolutionizing <span className="text-white/30">workflows with AI</span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-tagline-2 font-normal text-white/60">
                Empowering businesses with cutting-edge AI solutions.
              </p>
            </TextReveal>
          </div>
          <RevealAnimation delay={0.3} instant>
            <figure className="overflow-hidden rounded-lg">
              <Image src={heroImage} alt="About hero" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
