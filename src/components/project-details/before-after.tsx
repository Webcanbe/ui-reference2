import Image from 'next/image';

interface BeforeAfterProps {
  before: string[];
  after: string[];
  gradientImage?: string;
}

const BeforeAfter = ({ before, after, gradientImage = '/images/gradient/opai-38.jpg' }: BeforeAfterProps) => {
  return (
    <div className="relative min-h-[482px] overflow-hidden rounded-lg p-6">
      <figure className="absolute inset-0 size-full">
        <Image
          src={gradientImage}
          alt=""
          fill
          className="object-cover"
        />
      </figure>
      <div className="relative z-10 flex h-full flex-col items-start gap-y-5 md:flex-row md:gap-x-6">
        <div className="h-full flex-1">
          <div className="border-stroke-1/11 bg-background-13/90 h-full rounded-sm border px-6 py-8">
            <p className="text-sora-heading-5 mb-8 font-normal text-white/80">Before</p>
            <ul className="text-tagline-2 list-inside list-disc space-y-4 font-normal text-white/60">
              {before.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="h-full flex-1">
          <div className="border-stroke-1/11 bg-background-13/90 h-full rounded-sm border px-6 py-8">
            <p className="text-sora-heading-5 mb-8 font-normal text-white/80">After</p>
            <ul className="text-tagline-2 list-inside list-disc space-y-4 font-normal text-white/60">
              {after.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
