export const COMPANY = {
  name: 'BizGrowUp',
  whatsappNumber: '918460534210',
  whatsappDisplay: '+91 8460534210',
  email: 'bizzgrowup.contact@gmail.com',
};

export function waLink(message: string): string {
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Live Demos', href: '#demos' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];
