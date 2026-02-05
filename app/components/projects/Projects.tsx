import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section
      id='projects'
      className='scroll-mt-24 bg-slate-950 px-4 sm:px-6 py-20 md:py-24'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='font-heading text-3xl md:text-4xl font-semibold text-slate-50 text-center mb-10 md:mb-12'>
          Projects
        </h2>

        <h3 className='flex items-center gap-2 text-lg md:text-xl font-medium text-cyan-400 mb-4 sm:mb-6 text-left'>
          <span aria-hidden='true'>🔧</span>
          <span>DevOps & Cloud Engineering</span>
        </h3>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
