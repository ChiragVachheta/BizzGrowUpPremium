import { Check, Zap, LayoutGrid as Layout, ShoppingCart, RefreshCw, ArrowRight } from 'lucide-react';
import { waLink } from '@/lib/site';
import { useReveal } from '@/lib/useReveal';

type Pkg = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  icon: typeof Zap;
  featured?: boolean;
};

const PACKAGES: Pkg[] = [
  {
    name: 'Starter Landing Page',
    price: '₹7,000',
    tagline: 'A fast, focused one-page site to get you online quickly and affordably.',
    icon: Zap,
    features: ['1-page responsive website', 'Lightning-fast loading under 2 seconds', 'Contact form with validation', 'Mobile-first design for phone and tablet', 'Basic on-page SEO setup (meta tags, headings)', 'Free SSL certificate and secure hosting'],
  },
  {
    name: 'Standard Business Site',
    price: '₹15,000',
    tagline: 'A complete multi-page presence for growing businesses that need more room to tell their story.',
    icon: Layout,
    featured: true,
    features: ['Multi-page: Home, About, Services, Gallery, Contact', 'WhatsApp chat integration with one-tap buttons', 'Fast loading and mobile-first responsive design', 'Contact form with spam protection and validation', 'On-page SEO optimization for local search', 'Free SSL, secure hosting, and 30 days of support'],
  },
  {
    name: 'E-Commerce / Catalog',
    price: '₹28,000',
    tagline: 'Sell online with a full store, cart workflow, and payment gateway built in.',
    icon: ShoppingCart,
    features: ['Online store setup with custom branding', 'Product lists, categories, and search', 'Shopping cart and secure checkout workflow', 'Order management dashboard', 'Payment gateway integration (UPI, cards, net banking)', 'Inventory tracking and email order notifications'],
  },
];

export default function Pricing() {
  const { ref, visible } = useReveal();
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Transparent Pricing</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Transparent Web Design Packages for Small Businesses
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            No hidden fees, no recurring surprises. Pick the package that fits your business today — pay once and own the website forever. Every package includes mobile-first design, fast loading, and SEO foundations, so your site works hard for you from day one.
          </p>
        </div>

        <div ref={ref} className="mt-14 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } ${p.featured ? 'border-brand-400/50 bg-brand-500/[0.07] shadow-glow lg:-translate-y-3' : 'border-white/10 bg-ink-850/80'}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-ink-950">
                  Most Popular
                </span>
              )}
              <div className="flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${p.featured ? 'bg-brand-500 text-ink-950' : 'bg-white/10 text-brand-300'}`} aria-hidden="true">
                  <p.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-400">{p.tagline}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold text-white">{p.price}</span>
                <span className="text-sm text-slate-500">one-time</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hi GoBizLive! I'm interested in the "${p.name}" package.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 ${p.featured ? 'btn-primary' : 'btn-ghost'}`}
              >
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>

        {/* Maintenance block */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-ink-800 to-ink-850">
          <div className="grid items-center gap-6 p-7 sm:p-9 lg:grid-cols-[1fr_auto]">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400" aria-hidden="true">
                <RefreshCw className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Monthly Maintenance &amp; Updates
                </h3>
                <p className="mt-1.5 text-sm text-slate-400">
                  Includes hosting management, security monitoring, daily backups, and content updates — so your site stays fast, safe, and current without any effort on your part. Cancel anytime, no lock-in.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 lg:flex-col lg:items-end">
              <div className="text-right lg:text-right">
                <span className="font-display text-3xl font-extrabold text-white">₹1,500</span>
                <span className="ml-1 text-sm text-slate-500">/month</span>
              </div>
              <a
                href={waLink('Hi GoBizLive! I would like to add the monthly maintenance plan.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost whitespace-nowrap"
              >
                Add Maintenance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
