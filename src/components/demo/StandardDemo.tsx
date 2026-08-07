import { useState } from 'react';
import { Wrench, Phone, Clock, MapPin, ShieldCheck, Star, ArrowRight, CheckCircle2, Menu, X } from 'lucide-react';
import DemoLayout from './DemoLayout';

const HERO = 'https://images.pexels.com/photos/17063686/pexels-photo-17063686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GALLERY = [
  'https://images.pexels.com/photos/33699774/pexels-photo-33699774.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/33699778/pexels-photo-33699778.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/16552851/pexels-photo-16552851.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/17063686/pexels-photo-17063686.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
];

const SERVICES = [
  { title: 'Leak Repair', desc: 'Fast, clean fixes for leaking taps, pipes, and tanks.', price: 'From ₹499' },
  { title: 'Wiring & Switches', desc: 'Safe installation and replacement of switches, sockets, and circuits.', price: 'From ₹699' },
  { title: 'Emergency Visit', desc: '24/7 urgent callouts for bursts, shorts, and breakdowns.', price: 'On-call' },
  { title: 'Full Bathroom Fit-out', desc: 'Sanitaryware, fittings, and plumbing for new bathrooms.', price: 'Custom quote' },
];

const PAGES = ['Home', 'About', 'Services', 'Gallery', 'Contact'] as const;
type Page = (typeof PAGES)[number];

export default function StandardDemo() {
  const [page, setPage] = useState<Page>('Home');
  const [navOpen, setNavOpen] = useState(false);

  const go = (p: Page) => { setPage(p); setNavOpen(false); };

  return (
    <DemoLayout packageId="standard" packageName="Standard Business Site" accent="#3fce95">
      {/* Page nav */}
      <nav className="border-b border-white/10 bg-ink-900/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 py-4">
            <Wrench className="h-5 w-5 text-emerald-400" aria-hidden="true" />
            <span className="font-display text-base font-bold text-white">FixIt Pros</span>
          </div>
          <ul className="hidden items-center gap-1 md:flex">
            {PAGES.map((p) => (
              <li key={p}>
                <button
                  onClick={() => go(p)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    page === p ? 'bg-emerald-500/15 text-emerald-300' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {p}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => setNavOpen((v) => !v)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-200" aria-label="Toggle menu">
            {navOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
        {navOpen && (
          <div className="border-t border-white/10 bg-ink-950/95 md:hidden">
            <div className="flex flex-col px-4 py-2">
              {PAGES.map((p) => (
                <button key={p} onClick={() => go(p)} className={`rounded-lg px-3 py-3 text-left text-sm font-medium ${page === p ? 'text-emerald-300' : 'text-slate-200'}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {page === 'Home' && <Home onServices={() => go('Services')} onContact={() => go('Contact')} />}
      {page === 'About' && <About />}
      {page === 'Services' && <Services onContact={() => go('Contact')} />}
      {page === 'Gallery' && <Gallery />}
      {page === 'Contact' && <Contact />}
    </DemoLayout>
  );
}

function Home({ onServices, onContact }: { onServices: () => void; onContact: () => void }) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO} alt="Technician at work" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/70 to-ink-950/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /> Available Today
          </span>
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Plumbing &amp; Electrical, <span className="text-emerald-400">done right.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-slate-300">
            Licensed, insured, and on-time. FixIt Pros handles leaks, wiring, and emergencies across the city — 24/7.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={onContact} className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-400">
              Book a Visit <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button onClick={onServices} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              View Services
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, title: '24/7 Emergency', desc: 'Call any hour, we dispatch fast.' },
            { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Certified pros, guaranteed work.' },
            { icon: Star, title: '4.8★ Rated', desc: '500+ happy local households.' },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-ink-850/80 p-6">
              <f.icon className="h-6 w-6 text-emerald-400" aria-hidden="true" />
              <h3 className="mt-3 font-display text-base font-bold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-extrabold text-white">About FixIt Pros</h1>
      <p className="mt-4 text-base leading-relaxed text-slate-400">
        FixIt Pros is a team of licensed plumbers and electricians serving local homes and businesses since 2015. We believe in transparent pricing, clean workmanship, and showing up when we say we will. Every job is backed by a 30-day workmanship guarantee.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-ink-850/80 p-6">
          <h3 className="font-display text-base font-bold text-white">Our Promise</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" /> Upfront, fixed pricing</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" /> On-time arrival or it&apos;s free</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" /> Clean job sites, every time</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-ink-850/80 p-6">
          <h3 className="font-display text-base font-bold text-white">Service Area</h3>
          <p className="mt-3 text-sm text-slate-400">We cover the entire metro region and surrounding suburbs within a 25km radius.</p>
        </div>
      </div>
    </section>
  );
}

function Services({ onContact }: { onContact: () => void }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-extrabold text-white">Our Services</h1>
      <p className="mt-2 text-sm text-slate-400">Clear pricing. No surprises.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {SERVICES.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-ink-850/80 p-6">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
              <span className="font-display text-sm font-extrabold text-emerald-400">{s.price}</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
          </div>
        ))}
      </div>
      <button onClick={onContact} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-400">
        Book a Visit <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </section>
  );
}

function Gallery() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-extrabold text-white">Gallery</h1>
      <p className="mt-2 text-sm text-slate-400">A few jobs we&apos;re proud of.</p>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {GALLERY.map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded-2xl border border-white/10">
            <img src={src} alt={`Work sample ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-extrabold text-white">Contact Us</h1>
      <p className="mt-2 text-sm text-slate-400">Call now or send a message — we reply within the hour.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <a href="tel:+9198xxx" className="rounded-2xl border border-white/10 bg-ink-850/80 p-6 transition-colors hover:border-emerald-400/40">
          <Phone className="h-5 w-5 text-emerald-400" aria-hidden="true" />
          <h3 className="mt-3 text-xs uppercase tracking-wider text-slate-500">Call</h3>
          <p className="mt-1 text-sm font-semibold text-white">+91 98xxx xxxxx</p>
        </a>
        <div className="rounded-2xl border border-white/10 bg-ink-850/80 p-6">
          <Clock className="h-5 w-5 text-emerald-400" aria-hidden="true" />
          <h3 className="mt-3 text-xs uppercase tracking-wider text-slate-500">Hours</h3>
          <p className="mt-1 text-sm font-semibold text-white">24/7 Emergency</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-ink-850/80 p-6">
          <MapPin className="h-5 w-5 text-emerald-400" aria-hidden="true" />
          <h3 className="mt-3 text-xs uppercase tracking-wider text-slate-500">Area</h3>
          <p className="mt-1 text-sm font-semibold text-white">Metro + 25km</p>
        </div>
      </div>
      <form className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-ink-850/80 p-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-slate-200">Your Name</label>
          <input type="text" placeholder="e.g. Rohan Sharma" className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-400/50 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-200">Phone Number</label>
          <input type="tel" placeholder="+91 98xxx xxxxx" className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-400/50 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-200">What do you need?</label>
          <textarea rows={3} placeholder="e.g. Kitchen tap is leaking since morning" className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-400/50 focus:outline-none" />
        </div>
        <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-400">
          Send Message <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
    </section>
  );
}
