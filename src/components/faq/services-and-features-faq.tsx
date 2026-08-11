'use client';

import FaqSectionCard from '@/src/components/shared/ui/card/faq-section-card';
import { servicesAndFeaturesFaqSection } from '@/src/data/faq-data';

type ServicesAndFeaturesFaqProps = {
  isFirst?: boolean;
  titleDelay?: number;
};

const ServicesAndFeaturesFaq = ({
  isFirst = false,
  titleDelay = 0.07,
}: ServicesAndFeaturesFaqProps) => {
  return (
    <FaqSectionCard
      section={servicesAndFeaturesFaqSection}
      isFirst={isFirst}
      titleDelay={titleDelay}
    />
  );
};

export default ServicesAndFeaturesFaq;
