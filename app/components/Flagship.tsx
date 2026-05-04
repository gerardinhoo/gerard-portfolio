'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useAccessibleAnimation } from '../hooks/useReducedMotion';
import { projects } from '../data/projects';

export default function Flagship() {
  const { fadeInUp } = useAccessibleAnimation();
  const flagship = projects.find((p) => p.flagship);

  if (!flagship) return null;

  return (
    <section
      id='flagship'
      aria-labelledby='flagship-heading'
      className='scroll-mt-24 bg-slate-950 px-4 sm:px-6 pt-20 md:pt-24'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-end justify-between mb-6 md:mb-8'>
          <h2
            id='flagship-heading'
            className='font-heading text-3xl md:text-4xl font-semibold text-slate-50'
          >
            Flagship
          </h2>
          <span className='hidden sm:inline-block text-xs font-medium uppercase tracking-[0.25em] text-orange-400'>
            Full-Stack &middot; Cloud &middot; Reliability
          </span>
        </div>

        <motion.article
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition}
          viewport={{ once: true }}
          className='relative overflow-hidden rounded-3xl border border-orange-400/40 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 md:p-10 shadow-xl shadow-black/40'
        >
          <span className='mb-4 inline-flex rounded-full bg-orange-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-orange-300 sm:absolute sm:right-5 sm:top-3 sm:mb-0'>
            <span aria-hidden='true'>★</span> Flagship Project
          </span>

          <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start'>
            <div className='lg:col-span-3'>
              <h3 className='font-heading text-2xl md:text-3xl text-slate-50 leading-tight'>
                {flagship.title}
              </h3>
              {flagship.tagline && (
                <p className='mt-3 text-base md:text-lg text-orange-300/90 leading-relaxed'>
                  {flagship.tagline}
                </p>
              )}
              <p className='mt-4 text-sm md:text-[15px] leading-relaxed text-slate-300'>
                {flagship.description}
              </p>

              <div className='mt-5 flex flex-wrap gap-2'>
                {flagship.tags.map((tag) => (
                  <span
                    key={tag}
                    className='inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-300'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className='mt-7 flex flex-wrap items-center gap-3'>
                <Link
                  href='/work/pitchpulse26'
                  className='inline-flex items-center justify-center gap-1.5 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300'
                >
                  Read case study
                </Link>
                <a
                  href={flagship.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
                >
                  GitHub
                  <ExternalLink size={14} aria-hidden='true' />
                  <span className='sr-only'>(opens in new tab)</span>
                </a>
                {flagship.live && (
                  <a
                    href={flagship.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
                  >
                    Live
                    <ExternalLink size={14} aria-hidden='true' />
                    <span className='sr-only'>(opens in new tab)</span>
                  </a>
                )}
              </div>
            </div>

            <div className='lg:col-span-2'>
              <dl className='grid grid-cols-2 gap-3 text-xs md:text-sm'>
                <div className='rounded-xl border border-slate-800 bg-slate-950/60 p-3'>
                  <dt className='text-slate-500 uppercase tracking-wider text-[10px] mb-1'>Frontend</dt>
                  <dd className='text-slate-200'>React, TypeScript, Vite, Tailwind</dd>
                </div>
                <div className='rounded-xl border border-slate-800 bg-slate-950/60 p-3'>
                  <dt className='text-slate-500 uppercase tracking-wider text-[10px] mb-1'>Backend</dt>
                  <dd className='text-slate-200'>Node.js, Express, Prisma</dd>
                </div>
                <div className='rounded-xl border border-slate-800 bg-slate-950/60 p-3'>
                  <dt className='text-slate-500 uppercase tracking-wider text-[10px] mb-1'>Database</dt>
                  <dd className='text-slate-200'>PostgreSQL on Neon</dd>
                </div>
                <div className='rounded-xl border border-slate-800 bg-slate-950/60 p-3'>
                  <dt className='text-slate-500 uppercase tracking-wider text-[10px] mb-1'>Compute</dt>
                  <dd className='text-slate-200'>Lambda + API Gateway</dd>
                </div>
                <div className='rounded-xl border border-slate-800 bg-slate-950/60 p-3'>
                  <dt className='text-slate-500 uppercase tracking-wider text-[10px] mb-1'>IaC</dt>
                  <dd className='text-slate-200'>Terraform</dd>
                </div>
                <div className='rounded-xl border border-slate-800 bg-slate-950/60 p-3'>
                  <dt className='text-slate-500 uppercase tracking-wider text-[10px] mb-1'>CI/CD</dt>
                  <dd className='text-slate-200'>GitHub Actions</dd>
                </div>
                <div className='rounded-xl border border-slate-800 bg-slate-950/60 p-3 col-span-2'>
                  <dt className='text-slate-500 uppercase tracking-wider text-[10px] mb-1'>Observability</dt>
                  <dd className='text-slate-200'>CloudWatch dashboard, alarms, log retention, rollback runbook</dd>
                </div>
              </dl>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
