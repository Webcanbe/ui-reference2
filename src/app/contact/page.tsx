import ContactHero from '@/src/components/contact/contact-hero';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Contact us - AI Solutions || Nexsas',
  description:
    'Reach out to Nexsas. We’ll get back within 24 hours. Get in touch for AI solutions and support.',
};

const page = () => {
  return <ContactHero />;
};

export default page;
