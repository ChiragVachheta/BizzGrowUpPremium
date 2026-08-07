import { type ReactNode } from 'react';
import { Sparkles, ArrowLeft, ExternalLink } from 'lucide-react';
import { waLink } from '@/lib/site';

type Props = {
  packageId: 'starter' | 'standard' | 'ecommerce';
  packageName: string;
  accent: string;
  children: ReactNode;
};

export default function DemoLayout({ packageId, packageName, accent, children }: Props) {
  return (
    <div className="min-h-screen bg-ink-950 text-slate-200">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600" aria-hidden="true">
              <Sparkles className="h-4 w-4 text-ink-950" aria-hidden="true" />
            </span>
            <span className="font-display text-base font-extrabold tracking-tight text-white">
              Go<span className="text-brand-400">BizLive</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <span
              className="hidden rounded-full px-3 py-1 text-xs font-semibold sm:inline-block"
              style={{ backgroundColor: `${accent}22`, color: accent }}
            >
              {packageName} Demo
            </span>
            <a
              href={waLink(`Hi GoBizLive! I liked the ${packageName} demo and want to get started.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-3.5 py-2 text-xs font-semibold text-ink-950 transition-colors hover:bg-brand-400"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Get This Site
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-ink-950/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
          <a href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to GoBizLive
          </a>
          <p className="text-xs text-slate-500">
            This is a live demo for the {packageName} package. Your website will be tailored to your brand.
          </p>
        </div>
      </footer>
    </div>
  );
}
