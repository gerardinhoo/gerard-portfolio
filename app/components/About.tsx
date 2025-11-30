// app/components/About.tsx
'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id='about' className='bg-slate-950 py-20 md:py-24'>
      <div className='max-w-3xl mx-auto px-6 md:px-10'>
        <h2 className='font-heading text-3xl md:text-4xl font-semibold text-slate-50 text-center'>
          About Me
        </h2>

        <div className='mt-10 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl shadow-black/30 flex flex-col items-center text-center gap-6'>
          {/* Avatar */}
          <div className='relative h-32 w-32 md:h-36 md:w-36 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.35)]'>
            <Image
              src='/profile.jpeg'
              alt='Gerard Eku'
              width={480}
              height={480}
              className='h-full w-full object-cover'
              priority
            />
          </div>

          {/* About text */}
          <div className='text-sm md:text-[15px] leading-relaxed text-slate-300 text-left md:text-center space-y-3'>
           <p>
            I’m Gerard Eklu, a Cloud & DevOps Engineer with a software engineering foundation and hands-on experience building automated, scalable systems on AWS and GCP. I work with Terraform, Docker, Kubernetes, CI/CD, cloud security, and monitoring to deliver reliable cloud infrastructure. Previously at The Home Depot, I contributed to large-scale app development and automated deployments across enterprise environments.
          </p>

          <p>
            Today, I focus on building real-world DevOps projects that integrate IaC, containerization, and production-ready cloud architectures across AWS and GCP.
          </p>

          </div>

          {/* Quick stats */}
          <div className='mt-6 flex flex-wrap justify-center gap-3'>
             <span className='inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300'>
                5 years software engineering experience
             </span>
             <span className='inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300'>
                Cloud & DevOps on AWS + GCP
             </span>
             <span className='inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300'>
                Terraform · Kubernetes · CI/CD · Full-Stack
             </span>
          </div>

          {/* Tags */}
          <div className='mt-6 flex flex-wrap justify-center gap-2'>
            {[
              'React',
              'Node.js',
              'Java',
              'TeamCity',
              'GitHub Actions',
              'Jenkins',
              'Terraform',
              'GKE',
              'Spinnaker',
              'Vault',
              'Trivy',
              'GCP',
              'AWS',
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
              className="rounded-full bg-cyan-500 px-6 py-3 text-white font-medium shadow-md hover:bg-cyan-600 transition"
            >
              Explore My Cloud & DevOps Journey
            </a>

            <h3 className="text-slate-200 text-sm sm:text-base font-medium text-center">
              Hands-on projects across AWS, GCP, Terraform, Docker, Kubernetes, CI/CD, and Cloud Security..
            </h3>

            <p className="text-slate-400 text-sm text-center max-w-xl">
              A curated collection of real cloud deployments, IaC builds, CI/CD pipelines, containerized applications, monitoring setups, 
              and troubleshooting work completed throughout my DevOps engineering journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
