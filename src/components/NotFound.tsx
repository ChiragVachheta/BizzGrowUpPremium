import { Link } from 'react-router-dom';
import { Home, MessageCircle, ArrowLeft } from 'lucide-react';
import { waLink } from '@/lib/site';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-950 px-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(22,182,127,0.12), transparent 45%), radial-gradient(circle at 80% 80%, rgba(255,107,53,0.08), transparent 45%)',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-lg text-center">
        <p className="font-display text-[8rem] font-extrabold leading-none tracking-tighter text-brand-400 sm:text-[10rem]">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
          This page took a wrong turn
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-400">
          The page you are looking for may have been moved or never existed. Let&apos;s get you back
          on track — or reach out and we&apos;ll help you launch your local business website.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-display text-sm font-semibold text-ink-950 transition-colors hover:bg-brand-400"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
          <a
            href={waLink("Hi GoBizLive, I landed on a 404 page and I'd like to talk about a website for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4 text-brand-400" aria-hidden="true" />
            Contact Us via WhatsApp
          </a>
        </div>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          GoBizLive home
        </Link>
      </div>
    </div>
  );
}
