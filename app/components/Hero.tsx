'use client';

import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  return (
    <section className='relative min-h-[70vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center font-big-shoulders overflow-hidden pt-24 md:pt-28'>
      <ParticlesBackground />
      <div className='relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center md:items-start px-6 md:px-10 py-24 md:py-32 lg:py-40 text-center md:text-left'>
        <h1 className='font-heading text-5xl md:text-6xl font-semibold text-white tracking-tight'>
          Cloud & DevOps Engineer
        </h1>
        <p className='mt-5 text-xl md:text-2xl text-slate-300 max-w-2xl'>
          Designing and deploying scalable, secure cloud applications across AWS and GCP, with expertise in CI/CD automation, infrastructure as code, and full-stack development.
        </p>
        <p className='mt-5 text-xl md:text-2xl text-slate-300 max-w-2xl'>
          AWS Certified Solutions Architect – Associate
        </p>
        <p className='mt-4 text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-cyan-400'>
          AWS · Terraform · CI/CD · Docker · Kubernetes · GCP
        </p>

        <div className='mt-10 flex flex-wrap items-center gap-4'>
          <a
            href='#projects'
            className='inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-cyan-400'
          >
            View Cloud Projects
          </a>
          <a
            href='#contact'
            className='inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400'
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
