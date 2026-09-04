export type Project = {
  slug: string;
  title: string;
  clientIndustry: string;
  liveUrl: string;
  tagline: string;
  description: string;
  features: { icon: string; title: string; desc: string }[];
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    slug: 'sandip-electricals',
    title: 'Sandip Electricals',
    clientIndustry: 'Electrical Retail / E-Commerce',
    liveUrl: 'https://sandip-electricals-e-shop.vercel.app/',
    tagline: 'A full-stack e-commerce platform for a local electrical retail store.',
    description:
      'A full-stack e-commerce web application developed for a local electrical retail store in Ahmedabad. Built with a scalable architecture, custom database migration scripts, and seamless payment gateway integration for secure online transactions. The platform enables customers to browse the product catalog, add items to cart, and complete secure online checkout — all tailored to the store\u2019s inventory and branding.',
    features: [
      { icon: 'shopping-cart', title: 'Full Product Catalog', desc: 'Browseable inventory with categories, search, and product detail pages.' },
      { icon: 'credit-card', title: 'Secure Payments', desc: 'Integrated payment gateway for safe online transactions.' },
      { icon: 'database', title: 'Custom Database', desc: 'Scalable architecture with custom migration scripts.' },
      { icon: 'smartphone', title: 'Mobile-First', desc: 'Responsive design optimized for shopping on any device.' },
    ],
    accent: '#f59e0b',
  },
  {
    slug: 'repairingwale',
    title: 'Repairingwale',
    clientIndustry: 'Device Repair Services',
    liveUrl: 'https://repairingwale.vercel.app/',
    tagline: 'A responsive service-booking platform for device repair technicians.',
    description:
      'A responsive service-oriented web application designed to streamline device repair bookings and customer inquiries. It features an intuitive user interface that allows customers to quickly find repair services and get in touch with technicians. The platform reduces friction in the booking process, helping the business capture more leads and schedule repairs efficiently.',
    features: [
      { icon: 'wrench', title: 'Service Booking', desc: 'Customers can request repairs with a simple, guided flow.' },
      { icon: 'phone', title: 'Inquiry Management', desc: 'Quick contact options to reach technicians directly.' },
      { icon: 'smartphone', title: 'Fully Responsive', desc: 'Optimized for mobile, tablet, and desktop.' },
      { icon: 'zap', title: 'Fast & Intuitive', desc: 'Clean UI that helps customers find what they need quickly.' },
    ],
    accent: '#10b981',
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
