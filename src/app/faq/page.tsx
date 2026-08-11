import RevealAnimation from '@/src/components/animation/reveal-animation';
import FaqHeader from '@/src/components/faq/faq-header';
import GeneralFaq from '@/src/components/faq/general-faq';
import GettingStartedFaq from '@/src/components/faq/getting-started-faq';
import PricingAndBillingFaq from '@/src/components/faq/pricing-and-billing-faq';
import PrivacyAndSecurityFaq from '@/src/components/faq/privacy-and-security-faq';
import ServicesAndFeaturesFaq from '@/src/components/faq/services-and-features-faq';
import TechnicalSupportFaq from '@/src/components/faq/technical-support-faq';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'FAQ - AI Solutions || Nexsas',
  description:
    'Frequently asked questions about Nexsas AI solutions. Find answers on pricing, security, features, and getting started.',
};

const page = () => {
  return (
    <>
      <section className="lp:py-32! py-20 md:py-25 lg:py-30">
        <div className="main-container">
          <FaqHeader />
          <div className="space-y-18 2xl:space-y-25">
            <RevealAnimation delay={0.3}>
              <div>
                <GeneralFaq isFirst titleDelay={0} />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div>
                <ServicesAndFeaturesFaq />
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <div>
                <PricingAndBillingFaq />
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.6}>
              <div>
                <PrivacyAndSecurityFaq />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.7}>
              <div>
                <TechnicalSupportFaq />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.8}>
              <div>
                <GettingStartedFaq />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
};

export default page;
