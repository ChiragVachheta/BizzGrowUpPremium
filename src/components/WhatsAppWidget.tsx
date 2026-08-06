import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY, waLink } from '@/lib/site';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="animate-fade-up w-72 overflow-hidden rounded-2xl border border-white/10 bg-ink-850 shadow-card">
          <div className="flex items-center justify-between bg-brand-500/15 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-ink-950" aria-hidden="true">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">GoBizLive</p>
                <p className="text-[11px] text-brand-300">Typically replies in minutes</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white" aria-label="Close WhatsApp chat">
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div className="p-4">
            <div className="rounded-xl rounded-tl-sm bg-white/5 p-3 text-sm text-slate-300">
              Hi there! Ready to get your business online? Send us a message and we'll help you get started.
            </div>
            <a
              href={waLink('Hi GoBizLive! I would like to chat about getting a website for my business.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-3 w-full"
            >
              Start Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-ink-950 shadow-glow transition-transform hover:scale-105"
        aria-label="Open WhatsApp chat"
      >
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-brand-500/40" aria-hidden="true" />
        )}
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <MessageCircle className="h-7 w-7" aria-hidden="true" />}
      </button>
    </div>
  );
}
