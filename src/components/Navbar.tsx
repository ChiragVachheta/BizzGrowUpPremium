import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { COMPANY, NAV_LINKS, waLink } from '@/lib/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px flex h-20 items-center justify-between gap-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-glow" aria-hidden="true">
            <Sparkles className="h-5 w-5 text-ink-950" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-white">
            Go<span className="text-brand-400">BizLive</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-base font-medium text-slate-300 transition-colors duration-200 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`mailto:${COMPANY.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-white/25 hover:text-white"
          >
            <span className="h-2 w-2 rounded-full bg-brand-400" aria-hidden="true" />
            {COMPANY.email}
          </a>
          <a
            href={waLink('Hi GoBizLive! I would like to book a free consultation call.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Free Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl">
          <div className="container-px py-5 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <a
                href={`mailto:${COMPANY.email}`}
                className="btn-ghost w-full"
                onClick={() => setOpen(false)}
              >
                {COMPANY.email}
              </a>
              <a
                href={waLink('Hi GoBizLive! I would like to book a free consultation call.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                Book a Free Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
