'use client';

import FaqSectionCard from '@/src/components/shared/ui/card/faq-section-card';
import { pricingAndBillingFaqSection } from '@/src/data/faq-data';

type PricingAndBillingFaqProps = {
  isFirst?: boolean;
  titleDelay?: number;
};

const PricingAndBillingFaq = ({
  isFirst = false,
  titleDelay = 0.04,
}: PricingAndBillingFaqProps) => {
  return (
    <FaqSectionCard
      section={pricingAndBillingFaqSection}
      isFirst={isFirst}
      titleDelay={titleDelay}
    />
  );
};

export default PricingAndBillingFaq;
