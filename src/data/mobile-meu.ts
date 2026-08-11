import { MobileMenuData } from '../interface';

export const mobileMenuData: MobileMenuData[] = [
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: '/about' },
      { id: 'services', label: 'Our Services', href: '/services' },
      { id: 'features', label: 'Product Features', href: '#' },
      { id: 'blog', label: 'Blog & News', href: '/blog' },
    ],
  },
  {
    id: 'collaborate',
    title: 'Collaborate',
    submenu: [
      { id: 'affiliate', label: 'Affiliate', href: '#' },
      { id: 'referral', label: 'Referral', href: '#' },
      { id: 'login', label: 'Login', href: '/login' },
      { id: 'create-account', label: 'Create Account', href: '/signup' },
      { id: 'download', label: 'Download', href: '#' },
      { id: 'integration', label: 'Integration', href: '#' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'documentation', label: 'Documentation', href: '#' },
      { id: 'tutorials', label: 'Tutorials', href: '#' },
      { id: 'faq', label: 'FAQ', href: '/faq' },
      { id: 'case-studies', label: 'Case Studies', href: '/projects' },
      { id: 'whitepapers', label: 'Whitepapers', href: '#' },
      { id: 'support', label: 'Support', href: '#' },
      { id: 'use-cases', label: 'Use Cases', href: '#' },
      { id: 'success-stories', label: 'Success Stories', href: '#' },
      { id: 'analytics', label: 'Analytics', href: '#' },
      { id: 'changelog', label: 'Changelog', href: '#' },
      { id: 'glossary', label: 'Glossary', href: '#' },
      { id: 'security', label: 'Security', href: '#' },
      { id: 'gdpr', label: 'GDPR Compliance', href: '#' },
      { id: 'privacy', label: 'Privacy Policy', href: '#' },
      { id: 'terms', label: 'Terms & Conditions', href: '#' },
      { id: 'refund', label: 'Refund Policy', href: '#' },
      { id: 'affiliate-policy', label: 'Affiliate Policy', href: '#' },
      { id: 'legal', label: 'Legal', href: '#' },
      { id: 'press', label: 'Press Coverage', href: '#' },
    ],
  },
  {
    id: 'people-culture',
    title: 'People & Culture',
    submenu: [
      { id: 'process', label: 'Process', href: '#' },
      { id: 'team', label: 'Team', href: '#' },
      { id: 'career', label: 'Career', href: '#' },
      { id: 'testimonial', label: 'Testimonial', href: '#' },
      { id: 'customer', label: 'Customer', href: '#' },
      { id: 'contact', label: 'Contact', href: '/contact' },
      { id: 'pricing', label: 'Pricing', href: '/pricing' },
    ],
  },
];
