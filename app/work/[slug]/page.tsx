import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import {
  findProjectBySlug,
  getProjectSlugsByDomain,
} from '../../data/projects';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  // PitchPulse26 has a dedicated static case-study route at
  // /work/pitchpulse26 which overrides this dynamic segment, so we
  // exclude it here to avoid duplicate prebuilding.
  return getProjectSlugsByDomain('work')
    .filter((slug) => slug !== 'pitchpulse26')
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const project = findProjectBySlug(slug);
  if (!project) return { title: 'Not Found' };
  return {
    title: `${project.title} · Gerard Eklu`,
    description: project.tagline ?? project.description,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function WorkCaseStudy({ params }: RouteParams) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);
  if (!project || !project.domains.includes('work')) notFound();

  return (
    <article className='bg-slate-950 text-slate-100 pt-28 md:pt-32 pb-20 md:pb-24'>
      <div className='max-w-3xl mx-auto px-6 md:px-10'>
        <Link
          href='/work'
          className='inline-flex items-center text-xs font-medium uppercase tracking-[0.2em] text-cyan-400 hover:text-cyan-300'
        >
          &larr; Back to Work
        </Link>

        <header className='mt-6'>
          {project.flagship && (
            <span className='inline-block mb-3 rounded-full bg-orange-500/20 text-orange-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider'>
              <span aria-hidden='true'>★</span> Flagship Project
            </span>
          )}
          <h1 className='font-heading text-4xl md:text-5xl font-semibold text-slate-50 leading-tight'>
            {project.title}
          </h1>
          {project.tagline && (
            <p className='mt-4 text-lg text-orange-300/90 leading-relaxed'>
              {project.tagline}
            </p>
          )}
        </header>

        <section className='mt-8'>
          <p className='text-base md:text-lg leading-relaxed text-slate-300'>
            {project.description}
          </p>
        </section>

        <section className='mt-8'>
          <h2 className='font-heading text-lg uppercase tracking-[0.2em] text-cyan-400'>
            Tech Stack
          </h2>
          <div className='mt-4 flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className='inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-300'
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className='mt-10 flex flex-wrap items-center gap-3'>
          <a
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
          >
            GitHub
            <ExternalLink size={14} aria-hidden='true' />
            <span className='sr-only'>(opens in new tab)</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
            >
              {project.live.endsWith('.png') ||
              project.live.endsWith('.jpg') ||
              project.live.endsWith('.svg')
                ? 'Architecture'
                : 'Live'}
              <ExternalLink size={14} aria-hidden='true' />
              <span className='sr-only'>(opens in new tab)</span>
            </a>
          )}
        </section>

        <section className='mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-400'>
          <p className='font-medium text-slate-300'>
            Detailed case study coming soon.
          </p>
          <p className='mt-2'>
            Full architecture diagrams, tradeoffs, observability screenshots,
            and outcomes will live on this page. In the meantime, the GitHub
            repository contains the full source, infrastructure code, and
            documentation.
          </p>
        </section>
      </div>
    </article>
  );
}
