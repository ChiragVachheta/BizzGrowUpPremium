import { useState } from 'react';
import { Check, Zap, LayoutGrid as Layout, ShoppingCart, RefreshCw, ArrowRight, Info } from 'lucide-react';
import { waLink } from '@/lib/site';
import { useReveal } from '@/lib/useReveal';

type Pkg = {
  name: string;
  originalPrice: string;
  discountedPrice: string;
  savings: string;
  tagline: string;
  features: string[];
  icon: typeof Zap;
  featured?: boolean;
};

const PACKAGES: Pkg[] = [
  {
    name: 'Starter Landing Page',
    originalPrice: '₹7,000',
    discountedPrice: '₹5,000',
    savings: 'Save ₹2,000',
    tagline: 'A fast, focused one-page site to get you online quickly and affordably.',
    icon: Zap,
    features: [
      '1-page responsive website',
      'Lightning-fast loading under 2 seconds',
      'Contact form with validation',
      'Mobile-first design for phone and tablet',
      'Technical & Code-Level SEO Built-In',
      'Domain Registration Assistance (Domain registered in client\'s name so you retain 100% ownership; actual registrar fee ~$10/yr paid directly)',
      '1 Year High-Speed Cloud Hosting Management Included',
      'Client-Provided Content Integration (Professional formatting and layout of your provided text and photos)',
      'Free SSL certificate and secure hosting',
    ],
  },
  {
    name: 'Standard Business Site',
    originalPrice: '₹15,000',
    discountedPrice: '₹8,000',
    savings: 'Save ₹7,000',
    tagline: 'A complete multi-page presence for growing businesses that need more room to tell their story.',
    icon: Layout,
    featured: true,
    features: [
      'Multi-page: Home, About, Services, Gallery, Contact',
      'WhatsApp chat integration with one-tap buttons',
      'Fast loading and mobile-first responsive design',
      'Contact form with spam protection and validation',
      'Technical & Code-Level SEO Built-In',
      'Domain Registration Assistance (Domain registered in client\'s name so you retain 100% ownership; actual registrar fee ~$10/yr paid directly)',
      '1 Year High-Speed Cloud Hosting Management Included',
      'Client-Provided Content Integration (Professional formatting and layout of your provided text and photos)',
      'Free SSL, secure hosting, and 30 days of support',
    ],
  },
  {
    name: 'E-Commerce / Catalog',
    originalPrice: '₹32,000',
    discountedPrice: '₹28,000',
    savings: 'Save ₹4,000',
    tagline: 'Sell online with a full store, cart workflow, and payment gateway built in.',
    icon: ShoppingCart,
    features: [
      'Online store setup with custom branding',
      'Product lists, categories, and search',
      'Shopping cart and secure checkout workflow',
      'Order management dashboard',
      'Payment gateway integration (UPI, cards, net banking)',
      'Inventory tracking and email order notifications',
      'Technical & Code-Level SEO Built-In',
      'Domain Registration Assistance (Domain registered in client\'s name so you retain 100% ownership; actual registrar fee ~$10/yr paid directly)',
      '1 Year High-Speed Cloud Hosting Management Included',
      'Client-Provided Content Integration (Professional formatting and layout of your provided text and photos)',
      'User-Friendly Admin Dashboard: Self-manage, add, or remove products and images anytime with automated cloud backups',
    ],
  },
];

const SEO_NOTE =
  'Includes schema markup, meta titles/descriptions, OpenGraph tags, XML sitemap, robot.txt, and image alt tags. (Off-page link building is not included).';
const ADDON_NOTE =
  'Copywriting, brand photography, and custom graphic design available as separate custom add-ons.';

function FeatureItem({ text }: { text: string }) {
  const isSeo = text.startsWith('Technical & Code-Level SEO');
  const isContent = text.startsWith('Client-Provided Content');
  return (
    <li className="flex items-start gap-2.5 text-sm text-slate-300">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
      <span>
        {text}
        {isSeo && (
          <span className="mt-1 block rounded-lg border border-white/10 bg-ink-950/60 px-2.5 py-1.5 text-xs leading-relaxed text-slate-400">
            <Info className="mr-1 inline h-3 w-3 text-brand-400 align-text-bottom" aria-hidden="true" />
            {SEO_NOTE}
          </span>
        )}
        {isContent && (
          <span className="mt-1 block text-xs leading-relaxed text-slate-500">{ADDON_NOTE}</span>
        )}
      </span>
    </li>
  );
}

export default function Pricing() {
  const { ref, visible } = useReveal();
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Limited-Time Offer</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Discounted Web Design Packages for Small Businesses
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
              <div className="mt-5">
                <div className="flex items-center gap-2">
                  <span className="font-display text-lg font-semibold text-slate-500 line-through decoration-red-400/60 decoration-2">{p.originalPrice}</span>
                  <span className="inline-flex items-center rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-bold text-red-300">
                    {p.savings}
                  </span>
                </div>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold text-brand-300">{p.discountedPrice}</span>
                  <span className="text-sm text-slate-500">one-time</span>
                </div>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <FeatureItem key={f} text={f} />
                ))}
              </ul>
              <a
                href={waLink(`Hi GoBizLive! I'm interested in the "${p.name}" package.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 ${p.featured ? 'btn-primary' : 'btn-ghost'}`}
              >
                Get Business Website
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

                {/* Billing toggle */}
                <div className="mt-4 inline-flex items-center gap-1 rounded-full border border-white/10 bg-ink-950/60 p-1">
                  <button
                    onClick={() => setYearly(false)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      !yearly ? 'bg-brand-500 text-ink-950' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Monthly Billing
                  </button>
                  <button
                    onClick={() => setYearly(true)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      yearly ? 'bg-brand-500 text-ink-950' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Yearly Billing
                  </button>
                </div>

                {/* Feature checklist */}
                <ul className="mt-4 space-y-2">
                  {[
                    'Automated Cloud Database & Media Storage Backups (Products, uploaded images, order records)',
                    'GitHub Codebase & Design Version Control with instant 1-click rollback',
                    'High-Speed Edge CDN Hosting Management (Sub-2s load speed)',
                    'Security monitoring, SSL renewal, and package dependency updates',
                    'Up to 2 content/text/pricing updates per month included',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-5 lg:flex-col lg:items-end">
              <div className="text-right lg:text-right">
                {yearly ? (
                  <>
                    <span className="block font-display text-3xl font-extrabold text-brand-300">₹4,800</span>
                    <span className="ml-1 text-sm text-slate-500">/year (₹400/month) · Billed annually</span>
                  </>
                ) : (
                  <>
                    <span className="block font-display text-3xl font-extrabold text-brand-300">₹500</span>
                    <span className="ml-1 text-sm text-slate-500">/month · Billed monthly</span>
                  </>
                )}
              </div>
              <a
                href={waLink(yearly ? 'Hi GoBizLive! I would like to add the yearly maintenance plan.' : 'Hi GoBizLive! I would like to add the monthly maintenance plan.')}
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
