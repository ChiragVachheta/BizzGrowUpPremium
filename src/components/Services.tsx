import { Zap, Smartphone, Search, ShoppingCart, MessageSquare, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

const SERVICES = [
  { icon: Zap, title: 'Lightning-Fast Speed', desc: 'Every site is engineered to load in under two seconds on a 4G connection. We optimize images, minify code, and use modern caching so visitors never wait and never bounce. Faster pages also rank higher on Google, bringing you more organic traffic from local searches.' },
  { icon: Smartphone, title: 'Mobile-First Design', desc: 'Over 80% of local customers browse on their phones before visiting a store. We design for the phone first, then scale up to tablet and desktop. Every layout is touch-friendly, with tap targets sized for thumbs and text that reads clearly on small screens.' },
  { icon: Search, title: 'SEO Foundations', desc: 'We bake on-page SEO into every site: clean meta tags, descriptive headings, fast load times, and mobile-friendly markup. This helps your business show up when nearby customers search for the products or services you offer on Google.' },
  { icon: ShoppingCart, title: 'E-Commerce Ready', desc: 'Turn visitors into paying customers with a full online store. We set up product catalogs with categories, shopping carts, secure checkout, and payment gateway integration. Manage orders easily from a simple dashboard, with or without technical knowledge.' },
  { icon: MessageSquare, title: 'WhatsApp Integration', desc: 'Add one-tap chat buttons that turn website visitors into direct WhatsApp conversations. Whether a customer wants a quote, a reservation, or a quick question, they can reach you instantly without filling out a form or waiting on email.' },
  { icon: ShieldCheck, title: 'Secure & Maintained', desc: 'Hosting, SSL security, daily backups, and software updates are all handled for you. Your site stays live, safe, and current without you lifting a finger. If something breaks, we fix it — usually before you even notice.' },
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
            From a single landing page to a full online store, we handle the design, the speed, and the tech so you do not have to. Every website we build is tailored to how local customers in India discover, browse, and contact businesses like yours — fast, mobile-first, and ready to grow.
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
