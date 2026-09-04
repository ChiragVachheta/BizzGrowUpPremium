import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/lib/portfolio';
import { useReveal } from '@/lib/useReveal';

export default function Portfolio() {
  const { ref, visible } = useReveal();

  return (
    <section id="portfolio" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Work</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Live Client Projects
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Real web applications we&apos;ve built and launched for businesses across India. Explore the case studies to see what we delivered.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-12 mx-auto max-w-5xl grid gap-6 transition-all duration-500 sm:grid-cols-2"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.slug}
              className="card-surface group overflow-hidden p-6 transition-all duration-200 hover:-translate-y-1 hover:border-white/20"
            >
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
              >
                {project.clientIndustry}
              </span>
              <h3 className="mt-4 font-display text-xl font-extrabold tracking-tight text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.tagline}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-ink-950 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: project.accent }}
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live Site
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/portfolio" className="btn-ghost">
            View All Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
