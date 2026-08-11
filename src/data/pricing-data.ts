export interface PricingPlanItem {
  id: string;
  name: string;
  description: string;
  monthlyStrikePrice: number;
  monthlyPrice: number;
  yearlyStrikePrice: number;
  yearlyPrice: number;
  features: string[];
  featured: boolean;
  ctaHref: string;
  ctaLabel?: string;
}

export const pricingPlans: PricingPlanItem[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'For startups and small teams getting started with AI',
    monthlyStrikePrice: 99,
    monthlyPrice: 19,
    yearlyStrikePrice: 999,
    yearlyPrice: 699,
    featured: false,
    ctaHref: '/contact',
    ctaLabel: 'Get started',
    features: [
      'Up to 3 AI projects',
      'Core AI tools & templates',
      'Email support',
      'Basic analytics & reporting',
      'Documentation & guides',
      '14-day free trial',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    description: 'For growing companies scaling AI across operations',
    monthlyStrikePrice: 199,
    monthlyPrice: 149,
    yearlyStrikePrice: 1999,
    yearlyPrice: 1399,
    featured: true,
    ctaHref: '/contact',
    ctaLabel: 'Get started',
    features: [
      'Up to 15 AI projects',
      'API access & integrations',
      'Priority support',
      'Advanced analytics & dashboards',
      'Custom workflows & automation',
      'Dedicated onboarding',
    ],
  },
  {
    id: 'team',
    name: 'Team',
    description: 'For teams and organizations that need collaboration & control',
    monthlyStrikePrice: 299,
    monthlyPrice: 249,
    yearlyStrikePrice: 2999,
    yearlyPrice: 2399,
    featured: false,
    ctaHref: '/contact',
    ctaLabel: 'Get started',
    features: [
      'Unlimited AI projects',
      'Team seats & role-based access',
      'SSO & security controls',
      'Everything in Business',
      'Dedicated success manager',
      'SLA & custom contracts',
    ],
  },
];
