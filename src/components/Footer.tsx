import { Sparkles, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS, waLink } from '@/lib/site';

function FooterLink({ href, label }: { href: string; label: string }) {
  const cls = 'text-sm text-slate-400 transition-colors hover:text-brand-300';
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={cls}>
        {label}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950/60">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600" aria-hidden="true">
                <Sparkles className="h-5 w-5 text-ink-950" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                Go<span className="text-brand-400">BizLive</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              High-performance business websites built and launched in 15 days. Fast, mobile-first, and hassle-free for local businesses across India.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href} label={l.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Get In Touch</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={waLink('Hi GoBizLive!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-brand-300"
                >
                  <MessageCircle className="h-4 w-4 text-brand-400" aria-hidden="true" />
                  {COMPANY.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-accent-300"
                >
                  <Mail className="h-4 w-4 text-accent-400" aria-hidden="true" />
                  <span className="break-all">{COMPANY.email}</span>
                </a>
              </li>
            </ul>

          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} GoBizLive. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
