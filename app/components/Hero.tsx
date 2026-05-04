'use client';

import Image from 'next/image';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  return (
    <section className='relative min-h-[70vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center font-big-shoulders overflow-hidden pt-24 md:pt-28'>
      <ParticlesBackground />
      <div className='relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center md:items-start px-6 md:px-10 py-24 md:py-32 lg:py-40 text-center md:text-left'>
        <p className='mb-4 text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-cyan-400'>
          Full-Stack &middot; Cloud &middot; Platform &middot; Reliability
        </p>
        <h1 className='font-heading text-5xl md:text-6xl font-semibold text-white tracking-tight'>
          Full-Stack & Cloud Platform Engineer
        </h1>
        <p className='mt-5 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed'>
          I build product-facing applications and the cloud infrastructure,
          CI/CD, and observability that keep them reliable. From React
          and Node.js code to AWS deployment and operational support.
        </p>
        <p className='mt-4 text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-cyan-400'>
          React &middot; TypeScript &middot; Node.js &middot; PostgreSQL &middot; AWS &middot; Terraform &middot; CI/CD &middot; Observability
        </p>
        <div className='mt-5 flex items-center gap-4'>
          <a
            href="https://www.credly.com/badges/1d63a978-e270-4da6-a561-571019aa6fbf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/aws-saa.png"
              alt="AWS Certified Solutions Architect – Associate"
              width={96}
              height={96}
              className="w-24 hover:scale-105 transition"
            />
          </a>
          <p className='text-sm text-slate-400 max-w-xs leading-snug'>
            Validated expertise in distributed systems, cost optimization, and high-availability architectures on AWS.
          </p>
        </div>

        <div className='mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4'>
          <a
            href='#flagship'
            className='inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-cyan-400'
          >
            View Flagship: PitchPulse26
          </a>
          <a
            href='#systems'
            className='inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400'
          >
            Explore Systems
          </a>
        </div>
      </div>
    </section>
  );
}
