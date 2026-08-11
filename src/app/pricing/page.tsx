import OurImpact from '@/src/components/home/our-impact';
import IncludeInEveryPlan from '@/src/components/pricing/include-in-every-plan';
import Pricing from '@/src/components/pricing/pricing';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Pricing - AI Solutions || Nexsas',
  description:
    'Transparent pricing designed to scale with your business. No hidden fees, no surprises.',
};

const page = () => {
  return (
    <>
      <Pricing />
      <OurImpact />
      <IncludeInEveryPlan />
      <CTA />
    </>
  );
};

export default page;
