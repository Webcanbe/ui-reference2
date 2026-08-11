import { FooterData } from '../interface';

export const footerData: FooterData = {
  logo: {
    src: '/images/logo/logo-white.svg',
    alt: 'Nexsas',
    href: '/',
  },
  address: {
    label: 'Address:',
    text: '30 North Gould Street, Sheridan, WY 8280',
  },
  contact: {
    label: 'Contact:',
    phone: '+1 (202) 555-0130',
    phoneHref: 'tel:+12025550130',
    email: 'hello@pixels71.com',
    emailHref: 'mailto:hello@pixels71.com',
  },
  social: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'X', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'YouTube', href: '#' },
  ],
  linkGroups: [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Career', href: '#' },
        { label: 'Case Studies', href: '/use-case' },
        { label: 'Contact us', href: '/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Tutorial', href: '#' },
        { label: 'Support', href: '#' },
      ],
    },
    {
      title: 'Legal Policies',
      links: [
        { label: 'Terms & Conditions', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Refund Policy', href: '#' },
        { label: 'GDPR Compliance', href: '#' },
        { label: 'Affiliate Policy', href: '#' },
      ],
    },
  ],
  bottomBar: {
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Settings', href: '#' },
    ],
  },
};
