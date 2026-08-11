import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { BlurSvg } from '@/src/components/shared/icon';

const cards = [
  {
    shapeClass: 'ns-shape-15',
    title: 'Vision',
    description:
      'Our mission is to empower every business by providing innovative AI tools that enable them to reach their full potential. We believe that with the right technology, companies can achieve remarkable results and drive growth like never before.',
  },
  {
    shapeClass: 'ns-shape-16',
    title: 'Mission',
    description:
      'Our goal is to develop artificial intelligence solutions that are not only intuitive and powerful but also specifically designed to address real-world challenges. We aim to harness the latest advancements in technology to create tools.',
  },
];

const AiBusiness = () => {
  return (
    <section>
      <div className="main-container">
        <div className="space-y-20">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h2 className="font-sora text-sora-heading-4 lg:text-sora-heading-3 xl:text-sora-heading-2 inline-block font-normal text-white/90">
                Shaping the future of <br className="hidden lg:block" />
                AI in business
              </h2>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p className="text-tagline-2 mx-auto max-w-xl font-normal text-white/60">
                At our company, we are not just dedicated to fostering a culture of innovation; we
                also strive to create a lasting and meaningful impact in the community.
              </p>
            </TextReveal>
          </div>
          <div className="flex flex-col items-stretch gap-y-4 lg:flex-row lg:gap-x-4">
            {cards.map((card, i) => (
              <RevealAnimation key={card.title} delay={0.3 + i * 0.1}>
                <div className="flex-1">
                  <div className="border-stroke-1/11 bg-background-6 relative h-full space-y-14 overflow-hidden rounded-lg border px-8 py-11">
                    <figure className="pointer-events-none">
                      <BlurSvg idPrefix={`ai-business-${i}`} />
                    </figure>
                    <div className="relative z-10 flex items-center justify-center">
                      <span className={`${card.shapeClass} text-[50px] text-white`} aria-hidden />
                    </div>
                    <div className="relative z-10 space-y-2 text-center">
                      <h3 className="font-sora text-sora-heading-5 font-normal text-white/90">
                        {card.title}
                      </h3>
                      <p className="text-tagline-2 font-normal text-white/60">{card.description}</p>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiBusiness;
