'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useAccessibleAnimation } from '../hooks/useReducedMotion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  github,
  live,
  featured = false,
}: ProjectCardProps) {
  const { fadeInUp } = useAccessibleAnimation();

  return (
    <motion.div
      className='bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-7 shadow-lg shadow-black/25 flex flex-col justify-between transition-shadow duration-200 hover:shadow-xl hover:border-cyan-400/60'
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      transition={fadeInUp.transition}
      viewport={{ once: true }}
    >
      <div>
      {/* Featured Badge */}
      {featured && (
        <span className="inline-block mb-3 rounded-full bg-orange-500/20 text-orange-400 px-3 py-1 text-xs font-semibold tracking-wide">
          <span aria-hidden='true'>⭐</span> Featured Project
        </span>
      )}
        <h3 className='font-heading text-xl md:text-2xl text-slate-50'>{title}</h3>
        <p className='mt-3 text-sm md:text-[15px] leading-relaxed text-slate-300'>
          {description}
        </p>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, i) => (
            <span
              key={i}
              className='inline-flex items-center rounded-full border border-slate-700 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-300'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className='mt-6 flex flex-wrap items-center gap-3'>
        <a
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
        >
          GitHub
          <ExternalLink size={14} aria-hidden='true' />
          <span className='sr-only'>(opens in new tab)</span>
        </a>
        {live && (
          <a
            href={live}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
          >
            Live Demo
            <ExternalLink size={14} aria-hidden='true' />
            <span className='sr-only'>(opens in new tab)</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
