import { BorderExpand } from '@/src/components/animation/border-expand';

const Divider = () => {
  return (
    <div className="py-7 md:py-12 lg:py-16">
      <BorderExpand delay={0.6} duration={2} start="top 100%">
        <div className="bg-stroke-1/10 relative left-1/2 h-px w-full -translate-x-1/2" />
      </BorderExpand>
    </div>
  );
};

export default Divider;
