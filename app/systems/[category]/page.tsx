import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectCard from '../../components/ProjectCard';
import { getProjectsByCategory } from '../../data/projects';
import {
  findSystemCategory,
  getAllSystemCategorySlugs,
} from '../../data/systems';

interface RouteParams {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return getAllSystemCategorySlugs().map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { category } = await params;
  const meta = findSystemCategory(category);
  if (!meta) return { title: 'Not Found' };
  return {
    title: `${meta.title} · Systems · Gerard Eklu`,
    description: meta.capability,
    alternates: { canonical: `/systems/${meta.slug}` },
  };
}

export default async function SystemCategoryPage({ params }: RouteParams) {
  const { category } = await params;
  const meta = findSystemCategory(category);
  if (!meta) notFound();

  const projects = getProjectsByCategory(meta.slug);
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const others = projects.filter((p) => p !== featured);

  return (
    <div className='bg-slate-950 text-slate-100 pt-28 md:pt-32 pb-20 md:pb-24'>
      <div className='max-w-6xl mx-auto px-6 md:px-10'>
        <Link
          href='/systems'
          className='inline-flex items-center text-xs font-medium uppercase tracking-[0.2em] text-cyan-400 hover:text-cyan-300'
        >
          &larr; Back to Systems
        </Link>

        <header className='mt-6 mb-10 md:mb-14 text-center'>
          <p className='text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-cyan-400'>
            Systems / {meta.slug}
          </p>
          <h1 className='mt-3 font-heading text-4xl md:text-5xl font-semibold text-slate-50'>
            {meta.title}
          </h1>
          <p className='mt-4 text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed'>
            {meta.capability}
          </p>
          <div className='mt-5 flex flex-wrap justify-center gap-2'>
            {meta.tools.map((tool) => (
              <span
                key={tool}
                className='inline-flex items-center rounded-full border border-slate-700 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-300'
              >
                {tool}
              </span>
            ))}
          </div>
        </header>

        <section className='mb-14'>
          <h2 className='font-heading text-lg uppercase tracking-[0.2em] text-cyan-400 text-center'>
            What I Can Do
          </h2>
          <ul className='mt-6 mx-auto max-w-2xl space-y-3'>
            {meta.capabilities.map((cap) => (
              <li
                key={cap}
                className='flex items-start gap-3 text-sm md:text-base text-slate-300'
              >
                <span
                  aria-hidden='true'
                  className='mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0'
                />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </section>

        {featured && (
          <section className='mb-14'>
            <h2 className='font-heading text-lg uppercase tracking-[0.2em] text-cyan-400 text-center mb-6'>
              Featured Project
            </h2>
            <div className='max-w-3xl mx-auto'>
              <ProjectCard {...featured} />
            </div>
          </section>
        )}

        {others.length > 0 && (
          <section className='mb-14'>
            <h2 className='font-heading text-lg uppercase tracking-[0.2em] text-cyan-400 text-center mb-6'>
              More Projects
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
              {others.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </section>
        )}

        {projects.length === 0 && (
          <section className='mb-14 text-center text-sm text-slate-400'>
            <p>
              Projects in this category are being migrated into the new layout.
              Check back soon.
            </p>
          </section>
        )}

        {meta.notes.length > 0 && (
          <section>
            <h2 className='font-heading text-lg uppercase tracking-[0.2em] text-cyan-400 text-center'>
              Notes
            </h2>
            <ul className='mt-6 mx-auto max-w-2xl space-y-3'>
              {meta.notes.map((note) => (
                <li
                  key={note}
                  className='text-sm md:text-base text-slate-400 italic'
                >
                  &mdash; {note}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
