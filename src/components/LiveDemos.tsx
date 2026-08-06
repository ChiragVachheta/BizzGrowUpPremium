import { useState } from 'react';
import { Coffee, Wrench, ShoppingBag, Monitor, Tablet, Smartphone } from 'lucide-react';

type TemplateId = 'cafe' | 'services' | 'retail';

const TEMPLATES: {
  id: TemplateId;
  label: string;
  sub: string;
  icon: typeof Coffee;
}[] = [
  { id: 'cafe', label: 'Cafe & Restaurant', sub: 'Template A', icon: Coffee },
  { id: 'services', label: 'Plumber / Electrician', sub: 'Template B', icon: Wrench },
  { id: 'retail', label: 'Boutique Shop', sub: 'Template C', icon: ShoppingBag },
];

type Device = 'desktop' | 'tablet' | 'mobile';
const DEVICES: { id: Device; label: string; icon: typeof Monitor }[] = [
  { id: 'desktop', label: 'Desktop', icon: Monitor },
  { id: 'tablet', label: 'Tablet', icon: Tablet },
  { id: 'mobile', label: 'Mobile', icon: Smartphone },
];

export default function LiveDemos() {
  const [active, setActive] = useState<TemplateId>('cafe');
  const [device, setDevice] = useState<Device>('desktop');

  return (
    <section id="demos" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Interactive Previews</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Interactive Live Client Demos
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Toggle between real client-style templates and preview them across devices. This is the kind of site your business could have.
          </p>
        </div>

        {/* Template tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {TEMPLATES.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`group inline-flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                  isActive
                    ? 'border-brand-400/50 bg-brand-500/10 shadow-glow'
                    : 'border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10'
                }`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                    isActive ? 'bg-brand-500 text-ink-950' : 'bg-white/10 text-slate-300'
                  }`}
                  aria-hidden="true"
                >
                  <t.icon className="h-5 w-5" />
                </span>
                <span className="flex flex-col">
                  <span className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-slate-200'}`}>
                    {t.label}
                  </span>
                  <span className="text-xs text-slate-500">{t.sub}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Device toggle */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {DEVICES.map((d) => (
            <button
              key={d.id}
              onClick={() => setDevice(d.id)}
              className={`inline-flex min-h-[48px] items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                device === d.id
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <d.icon className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">{d.label}</span>
            </button>
          ))}
        </div>

        {/* Preview frame */}
        <div className="mt-8 mx-auto max-w-5xl">
          <div className="card-surface overflow-hidden p-3 sm:p-5 shadow-card">
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" aria-hidden="true" />
              <span className="ml-3 text-xs text-slate-500">gobizlive.demo / {active}</span>
            </div>
            <div className="flex justify-center rounded-xl bg-ink-950 p-4 sm:p-6">
              <div
                className={`transition-all duration-500 ${
                  device === 'desktop'
                    ? 'w-full max-w-4xl'
                    : device === 'tablet'
                    ? 'w-[560px] max-w-full'
                    : 'w-[300px] max-w-full'
                }`}
                role="img"
                aria-label={`GoBizLive ${active} website template preview on ${device} view`}
              >
                <TemplatePreview id={active} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TemplatePreview({ id }: { id: TemplateId }) {
  if (id === 'cafe') return <CafeTemplate />;
  if (id === 'services') return <ServicesTemplate />;
  return <RetailTemplate />;
}

/* ---------- Cafe ---------- */
function CafeTemplate() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1a120b] text-white">
      <div className="relative h-28 sm:h-36 bg-gradient-to-br from-amber-700/60 to-amber-950/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,200,120,0.25),transparent_60%)]" />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <Coffee className="h-6 w-6 text-amber-300" aria-hidden="true" />
          <span className="font-display text-lg font-bold tracking-tight">Brew &amp; Co.</span>
        </div>
        <nav className="absolute top-3 right-4 hidden sm:flex gap-4 text-xs text-amber-100/80">
          <span>Menu</span><span>About</span><span>Visit</span>
        </nav>
      </div>
      <div className="p-4">
        <p className="text-[11px] uppercase tracking-wider text-amber-400/80">Artisan Coffee · Fresh Bakes</p>
        <h3 className="mt-1 font-display text-xl font-bold">Your neighborhood coffee house</h3>
        <p className="mt-1.5 text-xs text-amber-100/60">Open daily 7am–9pm · 42 Park Street</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {['Espresso', 'Cappuccino', 'Croissant'].map((m) => (
            <div key={m} className="rounded-lg bg-white/5 p-2 text-center">
              <div className="mx-auto mb-1 h-8 w-8 rounded-full bg-amber-700/40" role="img" aria-label={`GoBizLive cafe ${m} menu item`} />
              <span className="text-[10px] text-amber-100/80">{m}</span>
            </div>
          ))}
        </div>
        <button className="mt-3 w-full rounded-lg bg-amber-500 py-2 text-xs font-semibold text-amber-950">
          Reserve a Table
        </button>
      </div>
    </div>
  );
}

/* ---------- Services ---------- */
function ServicesTemplate() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0c1a14] text-white">
      <div className="flex items-center justify-between bg-emerald-600/20 px-4 py-3">
        <div className="flex items-center gap-2">
          <Wrench className="h-5 w-5 text-emerald-400" aria-hidden="true" />
          <span className="font-display text-base font-bold">FixIt Pros</span>
        </div>
        <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
          Available Today
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-bold">Plumbing &amp; Electrical, done right.</h3>
        <p className="mt-1 text-xs text-emerald-100/60">Licensed · Insured · 24/7 emergency service</p>
        <div className="mt-3 space-y-2">
          {[
            { t: 'Leak Repair', p: 'From ₹499' },
            { t: 'Wiring & Switches', p: 'From ₹699' },
            { t: 'Emergency Visit', p: 'On-call' },
          ].map((s) => (
            <div key={s.t} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
              <span className="text-xs text-emerald-100/90">{s.t}</span>
              <span className="text-[11px] font-semibold text-emerald-400">{s.p}</span>
            </div>
          ))}
        </div>
        <button className="mt-3 w-full rounded-lg bg-emerald-500 py-2 text-xs font-semibold text-emerald-950">
          Call Now: +91 98xxx xxxxx
        </button>
      </div>
    </div>
  );
}

/* ---------- Retail ---------- */
function RetailTemplate() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1a1024] text-white">
      <div className="px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5 text-fuchsia-400" aria-hidden="true" />
          <span className="font-display text-base font-bold">Loom &amp; Lace</span>
        </div>
        <p className="mt-1 text-[11px] text-fuchsia-200/70">Handpicked boutique fashion</p>
      </div>
      <div className="p-3 grid grid-cols-2 gap-2">
        {[
          { n: 'Silk Saree', p: '₹2,499' },
          { n: 'Cotton Kurta', p: '₹1,299' },
          { n: 'Linen Dress', p: '₹1,899' },
          { n: 'Wool Scarf', p: '₹699' },
        ].map((p) => (
          <div key={p.n} className="rounded-lg bg-white/5 p-2">
            <div className="mb-1.5 h-16 rounded-md bg-gradient-to-br from-fuchsia-600/40 to-purple-800/40" role="img" aria-label={`GoBizLive retail ${p.n} product preview`} />
            <span className="block text-[11px] font-medium text-fuchsia-100/90">{p.n}</span>
            <span className="text-[11px] font-semibold text-fuchsia-400">{p.p}</span>
          </div>
        ))}
      </div>
      <div className="px-3 pb-3">
        <button className="w-full rounded-lg bg-fuchsia-500 py-2 text-xs font-semibold text-fuchsia-950">
          View Full Catalog
        </button>
      </div>
    </div>
  );
}
