import { Coffee, MapPin, Clock, Phone, Instagram, Star, ArrowRight } from 'lucide-react';
import DemoLayout from './DemoLayout';

const HERO = 'https://images.pexels.com/photos/11406429/pexels-photo-11406429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const MENU = [
  { name: 'Espresso', desc: 'Rich, bold single shot', price: '₹120', img: 'https://images.pexels.com/photos/459489/pexels-photo-459489.jpeg?auto=compress&cs=tinysrgb&h=400&w=400' },
  { name: 'Cappuccino', desc: 'Silky steamed milk, cocoa dust', price: '₹160', img: 'https://images.pexels.com/photos/11385490/pexels-photo-11385490.jpeg?auto=compress&cs=tinysrgb&h=400&w=400' },
  { name: 'Butter Croissant', desc: 'Flaky, baked fresh daily', price: '₹90', img: 'https://images.pexels.com/photos/20002837/pexels-photo-20002837.jpeg?auto=compress&cs=tinysrgb&h=400&w=400' },
];

export default function StarterDemo() {
  return (
    <DemoLayout packageId="starter" packageName="Starter Landing Page" accent="#3fce95">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO} alt="Cafe interior" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/80 to-ink-950" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
            <Coffee className="h-3.5 w-3.5" aria-hidden="true" />
            Artisan Coffee · Fresh Bakes
          </div>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Brew &amp; Co.
            <span className="block bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Your neighborhood coffee house
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-amber-100/70">
            Hand-pulled espresso, fresh-baked croissants, and a warm corner to slow down. Open daily on Park Street.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#menu" className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-amber-950 transition-colors hover:bg-amber-400">
              View Today&apos;s Menu
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              Reserve a Table
            </a>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Today&apos;s Favourites</h2>
          <p className="mt-2 text-sm text-slate-400">A small, seasonal menu — rotated weekly.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {MENU.map((m) => (
            <div key={m.name} className="overflow-hidden rounded-2xl border border-white/10 bg-ink-850/80">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-white">{m.name}</h3>
                  <span className="font-display text-lg font-extrabold text-amber-400">{m.price}</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="border-y border-white/10 bg-ink-900/60">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">A corner of calm on Park Street</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Since 2018, Brew &amp; Co. has served single-origin coffee and fresh bakes to the neighborhood. We roast in small batches, bake every morning, and remember your usual.
            </p>
            <div className="mt-6 flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
              <span className="ml-2 text-sm text-slate-400">4.9 · 320+ reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[HERO, MENU[1].img, MENU[2].img].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl">
                <img src={src} alt="Cafe moment" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-ink-850/80 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-white">Come Say Hello</h2>
          <p className="mt-2 text-sm text-slate-400">Walk-ins welcome, or reserve for groups of 4+.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="h-4 w-4 text-amber-400" aria-hidden="true" /> 42 Park Street, Kolkata
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Clock className="h-4 w-4 text-amber-400" aria-hidden="true" /> 7am – 9pm daily
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Phone className="h-4 w-4 text-amber-400" aria-hidden="true" /> +91 98xxx xxxxx
            </div>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            <Instagram className="h-4 w-4 text-amber-400" aria-hidden="true" /> Follow @brewandco
          </a>
        </div>
      </section>
    </DemoLayout>
  );
}
