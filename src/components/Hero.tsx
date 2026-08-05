import { ArrowRight, Zap, Smartphone, Rocket, Star } from 'lucide-react';
import { waLink } from '@/lib/site';

const PILLS = [
  { icon: Zap, label: 'Fast-loading' },
  { icon: Smartphone, label: 'Mobile-first' },
  { icon: Rocket, label: 'Live in 15 days' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* glow accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[480px] w-[820px] rounded-full bg-brand-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 right-10 h-72 w-72 rounded-full bg-accent-500/10 blur-[100px]" />

      <div className="container-px relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-up flex justify-center">
            <span className="eyebrow">
              <Star className="h-3.5 w-3.5" />
              Trusted by local businesses across India
            </span>
          </div>

          <h1 className="animate-fade-up mt-7 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ animationDelay: '60ms' }}>
            Get a High-Performance Business Website Built &amp; Launched in{' '}
            <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
              15 Days
            </span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400" style={{ animationDelay: '120ms' }}>
            Lightning-fast speed, flawless mobile optimization, and zero hassle. We design, build, and launch modern websites for local businesses — so you can focus on your customers, not your code.
          </p>

          <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: '180ms' }}>
            <a href="#demos" className="btn-primary w-full sm:w-auto">
              Explore Live Demos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={waLink('Hi GoBizLive! I would like a free website mockup for my business.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto"
            >
              Get Your Free Website Mockup
            </a>
          </div>

          <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: '240ms' }}>
            {PILLS.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
              >
                <p.icon className="h-4 w-4 text-brand-400" />
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
