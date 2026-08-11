import RevealAnimation from '@/src/components/animation/reveal-animation';
import { DownArrowLongIcon, GloveIcon, InfinityIcon } from '@/src/components/shared/icon';

const IntelligentAutomation = () => {
  return (
    <div
      className="border-stroke-1/11 bg-background-6 relative z-10 flex h-[719px] w-full flex-col items-center justify-center gap-y-2 overflow-hidden rounded-[8px] border px-[29px] pt-[26px] pb-10.5 md:max-w-[380px] lg:h-[710px] xl:h-[719px]"
      aria-labelledby="intelligent-automation-heading"
    >
      {/* glowing gradient */}
      <div className="pointer-events-none absolute top-[-23%] left-[-39%] select-none">
        <div className="pointer-events-none relative z-20 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-white/40 blur-[25.5px] select-none">
          <div className="bg-opai-purple/90 absolute right-0 bottom-[-4px] left-[102px] z-10 h-[194px] w-[133px] rotate-12 rounded-[50%] mix-blend-plus-lighter blur-[82px]" />
        </div>
      </div>

      {/* Launch */}
      <RevealAnimation delay={0.1}>
        <div className="z-10 flex flex-col items-center justify-center">
          <div className="bg-opai-blue/10 flex max-w-[117px] items-center justify-center gap-x-2 rounded-[4px] px-2 py-1">
            <span className="flex size-5 items-center justify-center">
              <GloveIcon className="stroke-opai-blue/60 size-full" />
            </span>
            <span className="text-opai-blue/60 font-inter-tight text-tagline-4 font-normal">
              Launch
            </span>
          </div>
          <p className="bg-background-5 font-inter-tight text-tagline-3 rounded-[3px] px-6 py-3 text-center font-normal text-white/20 backdrop-blur-[17px]">
            New application is approved
          </p>
        </div>
      </RevealAnimation>

      <div className="z-10">
        <RevealAnimation delay={0.2} offset={2}>
          <DownArrowLongIcon className="fill-stroke-3/18" />
        </RevealAnimation>
      </div>

      {/* Initiate */}
      <RevealAnimation delay={0.1}>
        <div className="z-10 flex flex-col items-center justify-center">
          <div className="bg-opai-lemon/10 flex max-w-[117px] items-center justify-center gap-x-2 rounded-[4px] px-2 py-1">
            <span className="flex size-5 items-center justify-center">
              <InfinityIcon className="stroke-opai-lemon/60 size-full" />
            </span>
            <span className="text-opai-lemon/60 font-inter-tight text-tagline-4 font-normal">
              Initiate
            </span>
          </div>
          <div className="bg-background-5 space-y-1 rounded-[3px] px-6 py-3 text-center backdrop-blur-[17px]">
            <p className="text-white/60">Send welcome email</p>
            <p className="font-inter-tight text-tagline-3 font-normal text-white/20">
              Include links to employee handbook initial documents
            </p>
          </div>
        </div>
      </RevealAnimation>

      <div className="z-10">
        <RevealAnimation delay={0.2} offset={2}>
          <DownArrowLongIcon className="fill-stroke-3/18" />
        </RevealAnimation>
      </div>

      {/* Check if/else */}
      <RevealAnimation delay={0.1}>
        <div className="z-10 flex flex-col items-center justify-center">
          <div className="bg-opai-purple/10 flex max-w-[117px] items-center justify-center gap-x-2 rounded-[4px] px-2 py-1">
            <span className="flex size-5 items-center justify-center">
              <InfinityIcon className="stroke-opai-purple/60 size-full" />
            </span>
            <span className="text-opai-purple/60 font-inter-tight text-tagline-4 shrink-0 font-normal">
              Check if/else
            </span>
          </div>
          <p className="bg-background-5 font-inter-tight text-tagline-3 rounded-[3px] px-6 py-3 text-center font-normal text-white/20 backdrop-blur-[17px]">
            New application is approved
          </p>
        </div>
      </RevealAnimation>

      <div className="z-10">
        <RevealAnimation delay={0.2} offset={2}>
          <DownArrowLongIcon className="fill-stroke-3/18" />
        </RevealAnimation>
      </div>

      {/* Lunch */}
      <RevealAnimation delay={0.1}>
        <div className="z-10 flex flex-col items-center justify-center">
          <div className="bg-opai-green/10 flex max-w-[117px] items-center justify-center gap-x-2 rounded-[4px] px-2 py-1">
            <span className="flex size-5 items-center justify-center">
              <InfinityIcon className="stroke-opai-green/60 size-full" />
            </span>
            <span className="text-opai-green/60 font-inter-tight text-tagline-4 shrink-0 font-normal">
              Lunch
            </span>
          </div>
          <p className="font-inter-tight text-tagline-3 rounded-[3px] px-6 py-3 text-center font-normal text-white/20 backdrop-blur-[17px]">
            Send welcome email Include links to employee handbook initial documents
          </p>
        </div>
      </RevealAnimation>

      {/* overlay */}
      <div className="pointer-events-none absolute -bottom-px left-1/2 z-20 h-[426px] w-[378px] -translate-x-1/2 bg-linear-to-t from-[#0D1017] from-30% to-[#11141D00] to-100% select-none" />

      {/* text content */}
      <div className="absolute bottom-[42px] z-30 max-w-[296px]">
        <RevealAnimation delay={0.1}>
          <h3
            id="intelligent-automation-heading"
            className="font-sora text-sora-heading-5 font-normal text-white/80"
            itemProp="name"
          >
            Intelligent automation
          </h3>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <p
            className="font-inter-tight text-tagline-2 font-normal text-white/50"
            itemProp="description"
          >
            Automate mundane tasks and focus on what matters most.
          </p>
        </RevealAnimation>
      </div>
    </div>
  );
};

export default IntelligentAutomation;
