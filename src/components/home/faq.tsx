import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import FaqContact from '@/src/components/home/faq-contact';
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionItem,
} from '@/src/components/shared/ui/accordion';

const faqData = [
  {
    value: 'item-one',
    question: 'What AI solutions do you offer for businesses?',
    answer:
      'We deliver end-to-end AI solutions including intelligent automation, predictive analytics, natural language processing, and computer vision. Our offerings are tailored to your industry and goals—from process optimization and customer insights to AI-powered chatbots and decision support systems.',
  },
  {
    value: 'item-two',
    question: 'How long does it take to implement an AI solution?',
    answer:
      'Timeline depends on scope and complexity. A focused use case (e.g. chatbot or document automation) can go live in weeks. Larger initiatives like enterprise analytics or custom ML models typically run 2–6 months. We start with a discovery phase to define scope and a realistic rollout plan.',
  },
  {
    value: 'item-three',
    question: 'Is my data secure when using your AI services?',
    answer:
      'Yes. We follow industry best practices for data security and compliance. Data can be processed in your environment or in our secure cloud with encryption at rest and in transit. We support compliance requirements such as GDPR and SOC 2 and can work under your preferred data residency and governance rules.',
  },
  {
    value: 'item-four',
    question: 'Can your AI integrate with our existing systems?',
    answer:
      'Our solutions are built to integrate with your current tech stack via APIs, connectors, and standard protocols. We work with common ERP, CRM, databases, and cloud platforms so you can augment existing workflows with AI without a full replacement.',
  },
  {
    value: 'item-five',
    question: 'What kind of ROI can we expect from AI implementation?',
    answer:
      'ROI varies by use case: automation often cuts manual effort by 30–50%; predictive models improve forecasting and reduce waste; and AI-driven support can increase satisfaction and conversion. We help you define clear KPIs and measure impact from pilot through scale.',
  },
  {
    value: 'item-six',
    question: 'Do you offer custom AI development or only off-the-shelf tools?',
    answer:
      'We do both. We use proven platforms and frameworks where they fit, and build custom models and applications when your needs are unique. Many engagements combine pre-built components with tailored logic, training, and integration so you get speed and flexibility.',
  },
  {
    value: 'item-seven',
    question: 'What support and training do you provide after rollout?',
    answer:
      'We provide training for your teams, runbooks, and documentation so you can operate and iterate on the solution. Ongoing support options include monitoring, tuning, and enhancement as your data and requirements evolve. We aim for a smooth handover and long-term success.',
  },
];

const FAQ = () => {
  return (
    <section className="bg-background-6 py-10 md:py-28 lg:py-30 xl:py-40 2xl:py-44">
      <div className="main-container space-y-10 md:space-y-19.5">
        <div className="space-y-1.5 text-center md:space-y-3">
          <TextReveal>
            <h2 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 max-md:-leading-[110%] mx-auto max-w-[700px] font-normal">
              <span className="font-normal text-white/90"> Your questions, </span>
              <span className="text-white/30"> answered </span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="font-inter-tight text-tagline-2 mx-auto max-w-[300px] text-white/60">
              Explore our most frequently asked questions to get started.
            </p>
          </TextReveal>
        </div>

        <div className="flex flex-col items-start justify-between gap-y-10 overflow-hidden md:items-center lg:flex-row lg:items-start lg:gap-x-10 xl:gap-x-[100px]">
          <RevealAnimation direction="left" offset={100} delay={0.3}>
            <div className="w-full max-w-[595px]">
              <Accordion defaultOpen="item-one" type="single">
                {faqData.map((item) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="border-stroke-1/10 rounded-lg border px-6"
                  >
                    <AccordionAction>{item.question}</AccordionAction>
                    <AccordionContent contentClassName="font-inter-tight text-tagline-2 max-w-[531px] cursor-text pb-6 font-extralight text-white/50">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </RevealAnimation>

          <FaqContact />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
