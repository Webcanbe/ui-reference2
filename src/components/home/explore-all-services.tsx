import RevealAnimation from '@/src/components/animation/reveal-animation';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';

const ExploreAllServices = () => {
  return (
    <RevealAnimation delay={0.2}>
      <div
        className="border-stroke-1/18 bg-background-6 relative flex h-[331px] w-full items-center justify-center overflow-hidden rounded-lg border p-6 md:w-[560px] md:p-10.5"
        aria-label="Call to action section"
      >
        {/* glowing gradient */}
        <div className="pointer-events-none absolute top-[-57%] left-[-25%] select-none">
          <div className="pointer-events-none relative z-20 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-white/40 blur-[25.5px] select-none">
            <div className="bg-opai-purple/90 absolute right-0 bottom-[-4px] left-[102px] z-10 h-[194px] w-[133px] rotate-12 rounded-[50%] mix-blend-plus-lighter blur-[82px]" />
          </div>
        </div>

        <div className="z-10">
          <RevealAnimation delay={0.1}>
            <PrimaryLinkButton href="/services" className="w-full">
              Explore all services
            </PrimaryLinkButton>
          </RevealAnimation>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default ExploreAllServices;
