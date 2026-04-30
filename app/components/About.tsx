// app/components/About.tsx

import Image from 'next/image';
import { skillCategories, getCategoryHeadingClass } from '../data/skills';

export default function About() {
  return (
    <section id='about' className='scroll-mt-24 bg-slate-950 py-20 md:py-24'>
      <div className='max-w-3xl mx-auto px-6 md:px-10'>
        <h2 className='font-heading text-3xl md:text-4xl font-semibold text-slate-50 text-center'>
          About Me
        </h2>

        <div className="mt-10 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl shadow-black/30 flex flex-col items-center text-center gap-6">
          {/* Avatar */}
          <div className="relative h-40 w-40 md:h-44 md:w-44 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.35)] flex items-center justify-center bg-slate-900">
            <Image
              src="/profile.jpg"
              alt="Gerard Eklu"
              fill
              className="object-cover object-[50%_18%] scale-100"
              priority
            />
          </div>

          {/* About text */}
          <div className='text-sm md:text-[15px] leading-relaxed text-slate-300 text-left md:text-center space-y-3'>
            <p>
              I&apos;m Gerard Eklu, a Cloud &amp; DevOps Engineer with 5+ years of software engineering experience.
              At The Home Depot, I worked on enterprise-scale applications, modernized CI/CD pipelines
              using GitHub Actions, TeamCity, and Spinnaker, and supported cloud deployments across GCP
              and Kubernetes environments with secure secrets management.
            </p>
            <p>
             I specialize in infrastructure automation with Terraform, containerization with Docker, CI/CD pipeline design, and cloud-native architectures on AWS and GCP.
            </p>
            <p>
             With 5 years of experience building production software using React, Node.js, and TypeScript, I design infrastructure and CI/CD pipelines with real developer workflows in mind focusing on reliable, friction-free deployments.
            </p>
            <p className='text-cyan-400 font-medium'>
              AWS Certified Solutions Architect &ndash; Associate
            </p>
          </div>

          {/* Tags */}
          <div className='mt-6 flex flex-wrap justify-center gap-2'>
            {[
              'AWS',
              'Terraform',
              'CI/CD',
              'Docker',
              'Ansible',
              'GCP',
              'Observability',
              'React',
              'Node.js',
              'TypeScript',
            ].map((t) => (
              <span
                key={t}
                className='inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300'
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href="https://github.com/gerardinhoo/Devops-Journey"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-500 px-6 py-2 text-white font-medium shadow-md hover:bg-cyan-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Explore My Cloud & DevOps Journey
              <span className='sr-only'>(opens in new tab)</span>
            </a>

            <h6 className="text-slate-200 text-sm sm:text-base font-medium text-center">
              Hands-on projects across AWS, GCP, Terraform, Docker, CI/CD, and Cloud Security.
            </h6>

            <p className="text-slate-400 text-sm text-center max-w-xl">
              A curated collection of real cloud deployments, IaC builds, CI/CD pipelines, containerized applications, monitoring setups, 
              and troubleshooting work completed throughout my DevOps engineering journey.
            </p>
          </div>
        </div>
      </div>

      {/* Inline Skills matrix */}
      <div id='skills' className='scroll-mt-24 max-w-6xl mx-auto px-6 md:px-10 mt-16 md:mt-20'>
        <div className='text-center'>
          <h3 className='font-heading text-2xl md:text-3xl font-semibold text-slate-50'>
            Skills
          </h3>
          <p className='mt-2 text-sm md:text-base text-slate-400 max-w-2xl mx-auto'>
            Technologies I use to design, build, automate, and operate reliable systems.
          </p>
        </div>

        <div className='mt-8 grid gap-6 md:gap-8 md:grid-cols-3'>
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className='bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-lg shadow-black/25 flex flex-col gap-4'
            >
              <h4 className={getCategoryHeadingClass(category.variant)}>
                {category.title}
              </h4>
              <div className='flex flex-wrap gap-2 mt-2'>
                {category.items.map((skill) => (
                  <span
                    key={skill.name}
                    className='inline-flex items-center rounded-full border border-slate-700 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-slate-300'
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
