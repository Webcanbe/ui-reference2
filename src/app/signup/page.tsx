import Signup from '@/src/components/auth/signup';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Sign up - AI Solutions || Nexsas',
  description:
    'Create your Nexsas account. Join and explore AI-driven solutions tailored to your goals.',
};

const page = () => {
  return <Signup />;
};

export default page;
