export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    quote:
      'Committed, innovative, and results-oriented—exactly what we needed. Their creative strategies consistently introduce new concepts. With a deep dedication to quality.',
    name: 'Lena Torres',
    role: 'CMO',
    imageSrc: '/images/opai-avatar-img-01.png',
    imageAlt: 'Lena Torres',
  },
  {
    id: '2',
    quote:
      "The team's expertise and hands-on approach made the entire integration seamless and surprisingly fast. Highly recommend!",
    name: 'Maya Chen',
    role: 'CTO, Fintech Innovators',
    imageSrc: '/images/opai-avatar-img-02.png',
    imageAlt: 'Maya Chen',
  },
  {
    id: '3',
    quote:
      'From day one, Nexsas felt like an extension of our internal team. Their tools and support are truly next-level.',
    name: 'Derek Singh',
    role: 'Head of Product, E-commerce Platform',
    imageSrc: '/images/opai-avatar-img-03.png',
    imageAlt: 'Derek Singh',
  },
  {
    id: '4',
    quote:
      'We went from idea to execution in weeks—not months. The automation is saving us countless hours every month.',
    name: 'Laura Fernandez',
    role: 'Operations Lead, SaaS Company',
    imageSrc: '/images/opai-avatar-img-04.png',
    imageAlt: 'Laura Fernandez',
  },
  {
    id: '5',
    quote:
      'What impressed me most was the flexibility. Nexsas adapted to our workflow instead of forcing us to change.',
    name: 'Jonas Müller',
    role: 'Growth Manager, Logistics Startup',
    imageSrc: '/images/opai-avatar-img-05.png',
    imageAlt: 'Jonas Müller',
  },
];
