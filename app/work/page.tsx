import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import { getProjectsByDomain } from '../data/projects';

export const metadata: Metadata = {
  title: 'Work · Gerard Eklu',
  description:
    'Production-grade projects spanning full-stack engineering, cloud infrastructure, CI/CD, and observability.',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  const work = getProjectsByDomain('work');
  const flagship = work.find((p) => p.flagship);
  const others = work.filter((p) => !p.flagship);

  return (
    <div className='bg-slate-950 text-slate-100 pt-28 md:pt-32 pb-20 md:pb-24'>
      <div className='max-w-6xl mx-auto px-6 md:px-10'>
        <header className='mb-12 md:mb-16 text-center'>
          <p className='text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-cyan-400'>
            Work
          </p>
          <h1 className='mt-3 font-heading text-4xl md:text-5xl font-semibold text-slate-50'>
            Selected Production Work
          </h1>
          <p className='mt-4 text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed'>
            Projects shipped end to end &mdash; from application code to
            infrastructure, CI/CD, and the observability that keeps them
            running.
          </p>
        </header>

        {flagship && (
          <Link
            href={`/work/${flagship.slug}`}
            className='block mb-12 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 rounded-3xl'
          >
            <article className='relative overflow-hidden rounded-3xl border border-orange-400/40 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 md:p-10 shadow-xl shadow-black/40 transition group-hover:border-orange-400'>
              <span className='absolute right-5 top-5 inline-block rounded-full bg-orange-500/20 text-orange-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider'>
                <span aria-hidden='true'>★</span> Flagship
              </span>
              <h2 className='font-heading text-2xl md:text-3xl text-slate-50'>
                {flagship.title}
              </h2>
              {flagship.tagline && (
                <p className='mt-3 text-base text-orange-300/90'>
                  {flagship.tagline}
                </p>
              )}
              <p className='mt-4 text-sm md:text-[15px] leading-relaxed text-slate-300'>
                {flagship.description}
              </p>
              <span className='mt-6 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-orange-300'>
                Read case study &rarr;
              </span>
            </article>
          </Link>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {others.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
