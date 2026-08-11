import RevealAnimation from '@/src/components/animation/reveal-animation';
import { ServiceGradientIcon } from '@/src/components/shared/icon';

const DEFAULT_TOOLS = [
  'No 3D modeling experience needed',
  'Works in-browser—no software installs',
  'Fast generation and real-time previews',
  'Easily refine models with intuitive controls',
  'Compatible with top 3D platforms',
];

interface ToolProps {
  tools?: string[];
}

const Tool = ({ tools = DEFAULT_TOOLS }: ToolProps) => {
  return (
    <aside className="hidden w-full max-w-[390px] shrink-0 space-y-18 xl:block">
      <RevealAnimation delay={0.2} direction="right">
        <div className="bg-background-6 border-stroke-1/11 relative w-full max-w-[390px] space-y-6 overflow-hidden rounded-2xl border p-8">
          <figure className="absolute top-0 left-1/2 z-0 -translate-x-1/2">
            <ServiceGradientIcon />
          </figure>
          <h3 className="text-sora-heading-5 relative z-10 font-normal text-white/90">
            Nexsas tools
          </h3>
          <ul className="relative z-10 space-y-2">
            {tools.map((item) => (
              <li
                key={item}
                className="text-tagline-2 list-item list-inside list-disc py-2 font-normal text-white/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </RevealAnimation>
    </aside>
  );
};

export default Tool;
