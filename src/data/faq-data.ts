export type FaqItem = {
  value: string;
  question: string;
  answer: string;
};

export type FaqSection = {
  id: string;
  title: string;
  titleHighlight: string;
  defaultOpenValue: string;
  items: FaqItem[];
};

const generalFaqSection: FaqSection = {
  id: 'general',
  title: 'General ',
  titleHighlight: 'questions',
  defaultOpenValue: 'general-1',
  items: [
    {
      value: 'general-1',
      question: 'What is Nexsas?',
      answer:
        'Nexsas is an AI solutions platform that helps businesses automate workflows, gain data-driven insights, and deploy intelligent systems. We offer end-to-end AI services—from strategy and integration to custom models and ongoing support—so you can scale AI across your organization with confidence.',
    },
    {
      value: 'general-2',
      question: 'Who is it for?',
      answer:
        'Nexsas is built for organizations of all sizes that want to adopt AI without the complexity. Whether you’re a startup looking to automate operations, a mid-market company improving customer experience, or an enterprise scaling predictive analytics, our solutions are tailored to your industry, goals, and technical maturity.',
    },
    {
      value: 'general-3',
      question: 'Is it easy to use?',
      answer:
        'Yes. We design our AI solutions with usability in mind. You get intuitive interfaces, clear dashboards, and documentation so your teams can operate and iterate without deep technical expertise. We also provide training and support to ensure a smooth rollout and long-term success.',
    },
    {
      value: 'general-4',
      question: 'Can I use Nexsas for commercial projects?',
      answer:
        'Absolutely. Nexsas is built for commercial use. Our plans support business and enterprise deployments, including customer-facing applications, internal tools, and white-label solutions. Contact us to discuss licensing and terms for your specific use case.',
    },
  ],
};

const servicesAndFeaturesFaqSection: FaqSection = {
  id: 'services',
  title: 'Services and ',
  titleHighlight: 'features',
  defaultOpenValue: '',
  items: [
    {
      value: 'services-1',
      question: 'Can it work with my current tools?',
      answer:
        'Yes. Our AI solutions integrate with your existing stack via APIs, connectors, and standard protocols. We work with popular ERPs, CRMs, databases, and cloud platforms so you can add AI to current workflows without replacing systems. We’ll align with your tech stack during discovery.',
    },
    {
      value: 'services-2',
      question: 'How accurate is the data?',
      answer:
        'We use validated data pipelines, quality checks, and model monitoring to keep accuracy high. Accuracy depends on your data and use case; we set clear metrics and thresholds during implementation and continuously tune models as your data and requirements evolve.',
    },
    {
      value: 'services-3',
      question: 'Can I use Nexsas for commercial projects?',
      answer:
        'Yes. Nexsas is designed for commercial use. You can deploy our AI solutions in customer-facing products, internal tools, and white-label offerings. Reach out to discuss licensing and commercial terms for your project.',
    },
  ],
};

const pricingAndBillingFaqSection: FaqSection = {
  id: 'pricing',
  title: 'Pricing and ',
  titleHighlight: 'billing',
  defaultOpenValue: 'pricing-1',
  items: [
    {
      value: 'pricing-1',
      question: 'How much does Nexsas cost?',
      answer:
        'Pricing depends on scope, usage, and support level. We offer flexible plans from pilot projects to enterprise deployments. Book a call with our team for a tailored quote based on your use case, data volume, and goals.',
    },
    {
      value: 'pricing-2',
      question: 'Is there a free trial?',
      answer:
        'We offer pilot engagements and proof-of-concept projects so you can validate results before committing. Contact us to discuss trial options, duration, and success criteria for your AI use case.',
    },
    {
      value: 'pricing-3',
      question: 'Can I change my plan later?',
      answer:
        'Yes. You can upgrade or adjust your plan as your needs grow. We support scaling usage, adding features, and changing support tiers. Your account manager can help you plan changes with minimal disruption.',
    },
    {
      value: 'pricing-4',
      question: 'Can I use Nexsas for commercial projects?',
      answer:
        'Yes. Our plans support commercial use, including customer-facing apps and internal tools. Commercial licensing and pricing can be tailored to your project—contact sales for details.',
    },
  ],
};

const privacyAndSecurityFaqSection: FaqSection = {
  id: 'privacy',
  title: 'Privacy and ',
  titleHighlight: 'security',
  defaultOpenValue: 'privacy-1',
  items: [
    {
      value: 'privacy-1',
      question: 'Is my data secure with Nexsas?',
      answer:
        'Yes. We use encryption in transit and at rest, follow security best practices, and support compliance requirements such as GDPR and SOC 2. Data can be processed in your environment or in our secure cloud, depending on your preferences and policies.',
    },
    {
      value: 'privacy-2',
      question: 'Will Nexsas sell my data?',
      answer:
        'No. We never sell your data. Your data is used only to deliver and improve your AI solutions. We outline data use, retention, and ownership in our agreements and are transparent about how we handle your information.',
    },
    {
      value: 'privacy-3',
      question: 'Where is my data stored?',
      answer:
        'Storage depends on your chosen deployment. We support your own cloud or on-premises environment, or our secure cloud with configurable region and residency. We can align storage with your data governance and compliance needs.',
    },
    {
      value: 'privacy-4',
      question: 'Can I use Nexsas for commercial projects?',
      answer:
        'Yes. Commercial use is supported under our terms. We can discuss data handling, compliance, and licensing for your commercial AI projects during onboarding.',
    },
  ],
};

const technicalSupportFaqSection: FaqSection = {
  id: 'technical',
  title: 'Technical ',
  titleHighlight: 'support',
  defaultOpenValue: 'technical-1',
  items: [
    {
      value: 'technical-1',
      question: 'Need help?',
      answer:
        'Our support team is here to help. You can reach us via email, your customer portal, or your account manager. We offer documentation, runbooks, and tiered support options so you get the right level of help when you need it.',
    },
    {
      value: 'technical-2',
      question: 'Is onboarding included?',
      answer:
        'Yes. Onboarding is part of our implementation. We cover setup, integration, training, and handover so your teams can run and iterate on the solution. Scope depends on your plan; we’ll confirm what’s included in your proposal.',
    },
    {
      value: 'technical-3',
      question: 'Where can I learn more?',
      answer:
        'You can explore our website, documentation, and resource center. For deeper technical or commercial discussions, book a call with our team. We’re happy to walk you through use cases, architecture, and how Nexsas can fit your roadmap.',
    },
    {
      value: 'technical-4',
      question: 'Can I use Nexsas for commercial projects?',
      answer:
        'Yes. Nexsas is built for commercial deployments. Technical support and SLA options are available for production and commercial use—contact us to align support with your needs.',
    },
  ],
};

const gettingStartedFaqSection: FaqSection = {
  id: 'getting-started',
  title: 'Getting ',
  titleHighlight: 'started',
  defaultOpenValue: 'getting-started-1',
  items: [
    {
      value: 'getting-started-1',
      question: 'How do I sign up?',
      answer:
        'Start by contacting us or booking a discovery call. We’ll discuss your goals, use cases, and technical context, then propose a plan and next steps. Once agreed, we’ll handle setup, integration, and training so you can go live quickly.',
    },
    {
      value: 'getting-started-2',
      question: 'Can I cancel anytime?',
      answer:
        'Terms depend on your plan. Many engagements are flexible with clear cancellation and wind-down options. We’ll outline commitment and notice periods in your agreement so you know exactly what to expect.',
    },
    {
      value: 'getting-started-3',
      question: 'Is Nexsas mobile-friendly?',
      answer:
        'Our dashboards and interfaces are responsive and work on tablets and phones. For mobile apps or embedded AI, we can deliver APIs and SDKs that integrate into your native or web mobile experiences.',
    },
    {
      value: 'getting-started-4',
      question: 'Can I use Nexsas for commercial projects?',
      answer:
        'Yes. Nexsas is intended for commercial use. You can use our AI solutions in products and services you offer to customers. Get in touch to confirm licensing and terms for your commercial project.',
    },
  ],
};

export {
  generalFaqSection,
  gettingStartedFaqSection,
  pricingAndBillingFaqSection,
  privacyAndSecurityFaqSection,
  servicesAndFeaturesFaqSection,
  technicalSupportFaqSection,
};
