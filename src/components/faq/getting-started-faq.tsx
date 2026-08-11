'use client';

import FaqSectionCard from '@/src/components/shared/ui/card/faq-section-card';
import { gettingStartedFaqSection } from '@/src/data/faq-data';

type GettingStartedFaqProps = {
  isFirst?: boolean;
  titleDelay?: number;
};

const GettingStartedFaq = ({ isFirst = false, titleDelay = 0.01 }: GettingStartedFaqProps) => {
  return (
    <FaqSectionCard section={gettingStartedFaqSection} isFirst={isFirst} titleDelay={titleDelay} />
  );
};

export default GettingStartedFaq;
