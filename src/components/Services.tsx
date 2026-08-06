import { Zap, Smartphone, Search, ShoppingCart, MessageSquare, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

const SERVICES = [
  { icon: Zap, title: 'Lightning-Fast Speed', desc: 'Optimized to load in under 2 seconds, so visitors never wait and never bounce.' },
  { icon: Smartphone, title: 'Mobile-First Design', desc: 'Built for the phone first — where 80% of your local customers actually browse.' },
  { icon: Search, title: 'SEO Foundations', desc: 'On-page SEO baked in so you show up when people nearby search for what you offer.' },
  { icon: ShoppingCart, title: 'E-Commerce Ready', desc: 'Product catalogs, carts, and checkout — turn visitors into paying customers.' },
  { icon: MessageSquare, title: 'WhatsApp Integration', desc: 'One-tap chat buttons that turn website visitors into direct conversations.' },
  { icon: ShieldCheck, title: 'Secure & Maintained', desc: 'Hosting, security, and updates handled for you — your site stays live and safe.' },
];

export default function Services() {
  const { ref, visible } = useReveal();
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What We Do</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Everything Your Business Needs Online
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            From a single landing page to a full online store — we handle the design, the speed, and the tech so you don't have to.
          </p>
        </div>

        <div ref={ref} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`card-surface group p-6 transition-all duration-500 hover:border-brand-400/30 hover:bg-ink-800/80 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-ink-950" aria-hidden="true">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
