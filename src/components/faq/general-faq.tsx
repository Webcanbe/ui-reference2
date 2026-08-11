'use client';

import FaqSectionCard from '@/src/components/shared/ui/card/faq-section-card';
import { generalFaqSection } from '@/src/data/faq-data';

type GeneralFaqProps = {
  isFirst?: boolean;
  titleDelay?: number;
};

const GeneralFaq = ({ isFirst = true, titleDelay = 0 }: GeneralFaqProps) => {
  return <FaqSectionCard section={generalFaqSection} isFirst={isFirst} titleDelay={titleDelay} />;
};

export default GeneralFaq;
