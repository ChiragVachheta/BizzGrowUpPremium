import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, ArrowLeft } from 'lucide-react';
import { PROJECTS } from '@/lib/portfolio';
import { useReveal } from '@/lib/useReveal';

export default function PortfolioIndex() {
  return (
    <div className="min-h-screen bg-ink-950 text-slate-200">
      {/* Sticky header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="font-display text-base font-extrabold tracking-tight text-white">
              Go<span className="text-brand-400">BizLive</span>
            </span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-brand-500/10 blur-[120px]" />
        <div className="container-px relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Our Work</span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Client Projects &amp; Case Studies
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              Real, live web applications we&apos;ve built for businesses across India. Explore each project to see the live site, tech stack, and what we delivered.
            </p>
          </div>
        </div>
      </section>

      {/* Project cards */}
      <section className="pb-20 sm:pb-28">
        <div className="container-px">
          <div className="mx-auto max-w-5xl space-y-8">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-ink-950/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} GoBizLive. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`card-surface overflow-hidden transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="grid md:grid-cols-2">
        {/* Preview pane */}
        <div className="relative flex items-center justify-center bg-ink-950 p-6 sm:p-8" style={{ minHeight: '240px' }}>
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{ backgroundImage: `radial-gradient(circle at 50% 50%, ${project.accent}20, transparent 70%)` }}
          />
          <div
            className="relative flex h-32 w-full max-w-xs items-center justify-center rounded-xl border text-center"
            style={{ borderColor: `${project.accent}30`, backgroundColor: `${project.accent}08` }}
          >
            <span className="font-display text-lg font-extrabold" style={{ color: project.accent }}>
              {project.title}
            </span>
          </div>
        </div>

        {/* Content pane */}
        <div className="p-6 sm:p-8">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
          >
            {project.clientIndustry}
          </span>
          <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-white">
            {project.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to={`/portfolio/${project.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-ink-950 transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: project.accent }}
            >
              View Case Study
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition-all duration-200 hover:border-white/25 hover:bg-white/10"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Visit Live Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
