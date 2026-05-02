
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { systemCategories } from '../data/systems';

export const metadata: Metadata = {
  title: 'Systems · Gerard Eklu',
  description:
    'Platform, infrastructure, and reliability work: IaC, containers, CI/CD, observability, cloud architecture, and scripting.',
  alternates: { canonical: '/systems' },
};

export default function SystemsPage() {
  return (
    <div className='bg-slate-950 text-slate-100 pt-28 md:pt-32 pb-20 md:pb-24'>
      <div className='max-w-6xl mx-auto px-6 md:px-10'>
        <header className='mb-12 md:mb-16 text-center'>
          <p className='text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-cyan-400'>
            Systems
          </p>
          <h1 className='mt-3 font-heading text-4xl md:text-5xl font-semibold text-slate-50'>
            Platform, Infrastructure, &amp; Reliability
          </h1>
          <p className='mt-4 text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed'>
            Six focus areas that cover how I design, automate, and operate the
            platforms applications run on.
          </p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
          {systemCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/systems/${cat.slug}`}
              className='group bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-lg shadow-black/25 transition-all duration-200 hover:border-cyan-400/60 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
            >
              <h2 className='font-heading text-lg md:text-xl text-slate-50 group-hover:text-cyan-300 transition-colors'>
                {cat.title}
              </h2>
              <p className='mt-2 text-sm leading-relaxed text-slate-300'>
                {cat.capability}
              </p>
              <div className='mt-4 flex flex-wrap gap-2'>
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className='inline-flex items-center rounded-full border border-slate-700 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-300'
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className='mt-5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-400'>
                Explore
                <ArrowRight
                  size={14}
                  aria-hidden='true'
                  className='transition-transform group-hover:translate-x-0.5'
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
