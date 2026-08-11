import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';

const WHY_US_ITEMS = [
  {
    shapeClass: 'ns-shape-17',
    title: 'Scalability',
    description: 'Solutions that grow with your business needs.',
  },
  {
    shapeClass: 'ns-shape-18',
    title: 'Innovation',
    description: 'Always at the forefront of AI technology.',
  },
  {
    shapeClass: 'ns-shape-19',
    title: 'Support',
    description: 'A dedicated team committed to your success.',
  },
  {
    shapeClass: 'ns-shape-20',
    title: 'Simplicity',
    description: 'Easy-to-use tools with powerful capabilities.',
  },
];

const WhyUs = () => {
  return (
    <section className="py-28 xl:py-34 2xl:py-44">
      <div className="main-container">
        <div className="space-y-18">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h2 className="font-sora text-sora-heading-4 lg:text-sora-heading-3 xl:text-sora-heading-2 inline-block font-normal text-white/90">
                Why choose Nexsas?
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-tagline-2 mx-auto max-w-xl font-normal text-white/60">
                Unparalleled expertise and innovation.
              </p>
            </TextReveal>
          </div>
          <div className="flex flex-col items-stretch gap-y-4 lg:flex-row lg:gap-x-4">
            {WHY_US_ITEMS.map((item, i) => (
              <RevealAnimation key={item.title} delay={0.3 + i * 0.1}>
                <div className="flex-1">
                  <div className="border-stroke-1/11 bg-background-6 relative h-full space-y-6 overflow-hidden rounded-lg border p-10.5">
                    <div className="flex items-center justify-center">
                      <span className={`${item.shapeClass} text-[36px] text-white`} aria-hidden />
                    </div>
                    <div className="space-y-1 text-center">
                      <h3 className="font-sora text-sora-heading-5 font-normal text-white/90">
                        {item.title}
                      </h3>
                      <p className="text-tagline-2 font-normal text-white/60">{item.description}</p>
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

export default WhyUs;
