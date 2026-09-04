import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Monitor, Tablet, Smartphone, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import type { Project } from '@/lib/portfolio';
import { waLink } from '@/lib/site';

const ICONS: Record<string, typeof ArrowRight> = {
  'shopping-cart': ArrowRight,
  'credit-card': ArrowRight,
  database: ArrowRight,
  smartphone: ArrowRight,
  wrench: ArrowRight,
  phone: ArrowRight,
  zap: ArrowRight,
};

type Device = 'desktop' | 'tablet' | 'mobile';
const DEVICES: { id: Device; label: string; icon: typeof Monitor }[] = [
  { id: 'desktop', label: 'Desktop', icon: Monitor },
  { id: 'tablet', label: 'Tablet', icon: Tablet },
  { id: 'mobile', label: 'Mobile', icon: Smartphone },
];

export default function CaseStudy({ project }: { project: Project }) {
  const [device, setDevice] = useState<Device>('desktop');

  const frameWidth =
    device === 'desktop' ? 'w-full' : device === 'tablet' ? 'w-[560px] max-w-full' : 'w-[300px] max-w-full';

  return (
    <div className="min-h-screen bg-ink-950 text-slate-200">
      {/* Sticky header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/portfolio" className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span className="font-display font-bold text-white">Go<span style={{ color: project.accent }}>BizLive</span></span>
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ backgroundColor: project.accent }}
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Visit Live Site
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full blur-[120px]"
          style={{ backgroundColor: `${project.accent}15` }}
        />
        <div className="container-px relative">
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider"
              style={{ borderColor: `${project.accent}40`, backgroundColor: `${project.accent}10`, color: project.accent }}
            >
              {project.clientIndustry}
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              {project.tagline}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
                style={{ backgroundColor: project.accent }}
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Visit Live Site
              </a>
              <a
                href={waLink(`Hi GoBizLive! I liked the ${project.title} project and want to get started.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full sm:w-auto"
              >
                Get a Similar Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Live preview with device mockup */}
      <section className="pb-16 sm:pb-20">
        <div className="container-px">
          <div className="mx-auto max-w-5xl">
            {/* Device toggle */}
            <div className="mb-6 flex items-center justify-center gap-2">
              {DEVICES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDevice(d.id)}
                  className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    device === d.id ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <d.icon className="h-5 w-5" aria-hidden="true" />
                  <span className="hidden sm:inline">{d.label}</span>
                </button>
              ))}
            </div>

            {/* Browser chrome + iframe */}
            <div className="card-surface overflow-hidden p-3 sm:p-5 shadow-card">
              <div className="flex items-center gap-1.5 px-2 pb-3">
                <span className="h-3 w-3 rounded-full bg-red-400/70" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" aria-hidden="true" />
                <span className="ml-3 truncate text-xs text-slate-500">{project.liveUrl}</span>
              </div>
              <div className="flex justify-center rounded-xl bg-ink-950 p-4 sm:p-6">
                <div className={`transition-all duration-500 ${frameWidth}`}>
                  <div
                    className="overflow-hidden rounded-xl border border-white/10"
                    style={{ aspectRatio: device === 'desktop' ? '16/10' : device === 'tablet' ? '3/4' : '9/16' }}
                  >
                    <iframe
                      src={project.liveUrl}
                      title={`${project.title} live website preview`}
                      className="h-full w-full"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">
              Preview loading the live site above.{' '}
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-slate-300">
                Open in a new tab
              </a>{' '}
              if it doesn&apos;t render.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-16 sm:pb-20">
        <div className="container-px">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Project Overview
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="pb-16 sm:pb-24">
        <div className="container-px">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Key Features
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {project.features.map((f) => {
                const Icon = ICONS[f.icon] ?? CheckCircle2;
                return (
                  <div key={f.title} className="card-surface p-6">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-white">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-px">
          <div className="mx-auto max-w-3xl">
            <div
              className="rounded-2xl border p-8 text-center sm:p-12"
              style={{ borderColor: `${project.accent}30`, backgroundColor: `${project.accent}08` }}
            >
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Want a site like this?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-slate-400">
                We build fast, custom web apps tailored to your business. Let&apos;s talk about your project.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                  style={{ backgroundColor: project.accent }}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Visit Live Site
                </a>
                <a
                  href={waLink(`Hi GoBizLive! I want a website similar to ${project.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full sm:w-auto"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-ink-950/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
          <Link to="/portfolio" className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Portfolio
          </Link>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} GoBizLive. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
