'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionItem,
} from '@/src/components/shared/ui/accordion';
import type { FaqSection } from '@/src/data/faq-data';

type FaqSectionCardProps = {
  section: FaqSection;
  isFirst?: boolean;
  titleDelay?: number;
};

const FaqSectionCard = ({ section, isFirst = false, titleDelay = 0 }: FaqSectionCardProps) => {
  return (
    <div className="border-stroke-3/11 bg-background-5 relative mx-auto w-full max-w-[1050px] rounded-xl border p-8 md:p-10 lg:p-14 xl:p-18 2xl:p-25">
      {isFirst && (
        <figure
          className="absolute inset-0 z-0 size-full bg-[radial-gradient(65.52%_100.25%_at_15.82%_5.75%,rgba(141,89,255,0.2)_0%,rgba(141,89,255,0.00)_59.03%)]"
          aria-hidden
        />
      )}
      <div className="mb-6 lg:mb-8 xl:mb-12">
        <TextReveal delay={titleDelay} instant={isFirst}>
          <h2 className="text-sora-heading-5 lg:text-sora-heading-4 inline-block font-normal text-white/90">
            {section.title}
            <span className="text-white/30">{section.titleHighlight}</span>
          </h2>
        </TextReveal>
      </div>

      <RevealAnimation delay={0.2}>
        <div className="w-full">
          <Accordion
            defaultOpen={section.defaultOpenValue || undefined}
            type="single"
            className="relative z-10 w-full space-y-0"
          >
            {section.items.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border-b-stroke-3/20 overflow-hidden rounded-none border-b"
              >
                <AccordionAction className="text-tagline-1 pt-4 pb-4 text-white/90 lg:pt-6 lg:pb-6">
                  {item.question}
                </AccordionAction>
                <AccordionContent
                  contentClassName="text-tagline-2 font-inter-tight w-full max-w-[794px] cursor-text pb-4 text-left text-white/50 lg:pb-6"
                  animateLines={false}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </RevealAnimation>
    </div>
  );
};

export default FaqSectionCard;
