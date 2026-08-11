'use client';

import FaqSectionCard from '@/src/components/shared/ui/card/faq-section-card';
import { technicalSupportFaqSection } from '@/src/data/faq-data';

type TechnicalSupportFaqProps = {
  isFirst?: boolean;
  titleDelay?: number;
};

const TechnicalSupportFaq = ({ isFirst = false, titleDelay = 0.01 }: TechnicalSupportFaqProps) => {
  return (
    <FaqSectionCard
      section={technicalSupportFaqSection}
      isFirst={isFirst}
      titleDelay={titleDelay}
    />
  );
};

export default TechnicalSupportFaq;
