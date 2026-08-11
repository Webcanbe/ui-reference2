import ServicesHero from '@/src/components/services/hero';
import OurServices from '@/src/components/services/our-services';
import CTA from '@/src/components/shared/cta';
import WhyChooseUs from '@/src/components/shared/why-choose-us';
import type { ServicePost } from '@/src/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - AI Solutions || Nexsas',
  description: 'Tailored AI solutions and proven results.',
};

const page = async () => {
  const services = getMarkDownData<ServicePost>('src/data/services');

  return (
    <>
      <ServicesHero />
      <OurServices services={services} />
      <WhyChooseUs />
      <CTA />
    </>
  );
};

export default page;
