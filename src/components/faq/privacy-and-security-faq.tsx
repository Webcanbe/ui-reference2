'use client';

import FaqSectionCard from '@/src/components/shared/ui/card/faq-section-card';
import { privacyAndSecurityFaqSection } from '@/src/data/faq-data';

type PrivacyAndSecurityFaqProps = {
  isFirst?: boolean;
  titleDelay?: number;
};

const PrivacyAndSecurityFaq = ({
  isFirst = false,
  titleDelay = 0.01,
}: PrivacyAndSecurityFaqProps) => {
  return (
    <FaqSectionCard
      section={privacyAndSecurityFaqSection}
      isFirst={isFirst}
      titleDelay={titleDelay}
    />
  );
};

export default PrivacyAndSecurityFaq;
