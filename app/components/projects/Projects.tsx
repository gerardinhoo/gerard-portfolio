import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  // Flagship is rendered separately in the Flagship hero card.
  const featured = projects.filter((p) => p.featured && !p.flagship);
  const others = projects.filter((p) => !p.featured && !p.flagship);

  return (
    <section
      id='projects'
      className='scroll-mt-24 bg-slate-950 px-4 sm:px-6 py-20 md:py-24'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='mb-10 md:mb-12 text-center'>
          <h2 className='font-heading text-3xl md:text-4xl font-semibold text-slate-50'>
            Featured Work
          </h2>
          <p className='mt-3 text-sm md:text-base text-slate-400 max-w-2xl mx-auto'>
            Production-grade projects spanning full-stack engineering, cloud infrastructure, and CI/CD.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {featured.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <div className='mt-16 mb-8 text-center'>
              <h3 className='font-heading text-2xl md:text-3xl font-semibold text-slate-50'>
                More Projects
              </h3>
              <p className='mt-2 text-sm text-slate-400'>
                Additional cloud, infrastructure, and full-stack work.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
              {others.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
