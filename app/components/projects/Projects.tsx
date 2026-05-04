import Link from 'next/link';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  // Flagship is rendered separately in the Flagship hero card.
  const featured = projects.filter((p) => p.featured && !p.flagship);

  return (
    <section
      id='projects'
      className='scroll-mt-24 bg-slate-950 px-4 sm:px-6 py-20 md:py-24'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='mb-10 md:mb-12 text-center'>
          <h2 className='font-heading text-3xl md:text-4xl font-semibold text-slate-50'>
            Selected Projects
          </h2>
          <p className='mt-3 text-sm md:text-base text-slate-400 max-w-2xl mx-auto'>
            A curated set of supporting projects that reinforce the flagship with cloud infrastructure, CI/CD, and production delivery depth.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {featured.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className='mt-10 text-center'>
          <Link
            href='/work'
            className='inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-slate-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
          >
            View all work
          </Link>
        </div>
      </div>
    </section>
  );
}
