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
              I’m Gerard Eklu, a Software Engineer with 5 years of enterprise
              experience who transitioned into DevOps through hands-on projects
              and cloud engineering training. I specialize in building reliable,
              scalable systems by combining full-stack development with CI/CD
              automation, containerization, and infrastructure as code across
              AWS and GCP.
            </p>
            <p>
              At The Home Depot, I built high-performance React UIs, contributed
              to full stack apps, automated deployments with TeamCity & GitHub
              Actions, managed workloads on GKE with Spinnaker, and provisioned
              infrastructure via Terraform. Since then, I’ve delivered projects
              from job management apps to optimized business websites, while
              continually sharpening my DevOps and AWS skills.
            </p>
          </div>

          {/* Quick stats */}
          <div className='mt-6 flex flex-wrap justify-center gap-3'>
            <span className='inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300'>
              5 years software engineering
            </span>
            <span className='inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300'>
              Cloud &amp; DevOps on GCP &amp; AWS
            </span>
            <span className='inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300'>
              React · Next.js · Node.js · Terraform · CI/CD
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
              'Terraform',
              'GKE',
              'Spinnaker',
              'Vault',
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
          <div className='mt-6'>
            <a
              href='#projects'
              className='inline-flex items-center gap-2 rounded-full bg-cyan-500 text-slate-950 font-medium px-6 py-3 hover:bg-cyan-400 transition-colors shadow-[0_0_25px_rgba(34,211,238,0.45)]'
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
