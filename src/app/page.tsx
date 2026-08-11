import Blog from '@/src/components/home/blog';
import EmpoweringBusiness from '@/src/components/home/empowering-business';
import FAQ from '@/src/components/home/faq';
import Hero from '@/src/components/home/hero';
import InnovativeSolutions from '@/src/components/home/innovative-solutions';
import OurImpact from '@/src/components/home/our-impact';
import Projects from '@/src/components/home/projects';
import Subscribe from '@/src/components/home/subscribe';
import Testimonial from '@/src/components/home/testimonial';
import Contact from '@/src/components/shared/contact';
import CTA from '@/src/components/shared/cta';
import VideoModal from '@/src/components/shared/VideoModal';
import ModalProvider from '@/src/context/ModalContext';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'AI Solutions || Nexsas',
};

const page = () => {
  return (
    <ModalProvider>
      <Hero />
      <OurImpact />
      <EmpoweringBusiness />
      <InnovativeSolutions />
      <Projects />
      <Testimonial />
      <Blog />
      <FAQ />
      <Subscribe />
      <CTA />
      <Contact />
      <VideoModal />
    </ModalProvider>
  );
};

export default page;
