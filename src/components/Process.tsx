import { ClipboardList, Eye, Rocket } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

const STEPS = [
  {
    icon: ClipboardList,
    title: 'Share Details',
    desc: 'Tell us about your business, your goals, and what you need. We listen carefully, ask the right questions, and map out a clear plan. You do not need any technical knowledge — just a few minutes to share what makes your business unique and what you want your website to achieve.',
  },
  {
    icon: Eye,
    title: 'Review Prototype',
    desc: 'Within days, you review a working prototype of your website on a private link. We refine it together based on your feedback — adjusting layouts, colors, and content until every detail feels right to you. No guesswork, no surprises at launch.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    desc: 'We go live on your domain — fast, mobile-optimized, and ready for customers. Your site is submitted to Google, connected to analytics, and handed over with a simple guide so you can update content anytime. All done in 15 days or less, guaranteed.',
  },
];

export default function Process() {
  const { ref, visible } = useReveal();
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Simple 3-Step Launch Process
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Three steps from first conversation to a launched website. No jargon, no delays.
          </p>
        </div>

        <div ref={ref} className="mt-14 grid gap-6 md:grid-cols-3 relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-brand-500/0 via-brand-500/40 to-brand-500/0" />

          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className={`relative flex flex-col items-center text-center transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-ink-850 shadow-card">
                <s.icon className="h-9 w-9 text-brand-400" aria-hidden="true" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-ink-950">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
