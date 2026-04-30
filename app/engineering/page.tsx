import type { Metadata } from 'next';
import ProjectCard from '../components/ProjectCard';
import { getProjectsByDomain } from '../data/projects';

export const metadata: Metadata = {
  title: 'Engineering · Gerard Eklu',
  description:
    'Full-stack engineering work: React, TypeScript, Node.js, Prisma, PostgreSQL, and MongoDB.',
  alternates: { canonical: '/engineering' },
};

export default function EngineeringPage() {
  const projects = getProjectsByDomain('engineering');

  return (
    <div className='bg-slate-950 text-slate-100 pt-28 md:pt-32 pb-20 md:pb-24'>
      <div className='max-w-6xl mx-auto px-6 md:px-10'>
        <header className='mb-12 md:mb-16 text-center'>
          <p className='text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-cyan-400'>
            Engineering
          </p>
          <h1 className='mt-3 font-heading text-4xl md:text-5xl font-semibold text-slate-50'>
            Full-Stack Engineering
          </h1>
          <p className='mt-4 text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed'>
            React, TypeScript, Node.js, Prisma, and serverless PostgreSQL.
            Building product-facing applications with a platform mindset.
          </p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
