'use client';

import Image from 'next/image';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  return (
    <section className='relative min-h-[70vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center font-big-shoulders overflow-hidden pt-24 md:pt-28'>
      <ParticlesBackground />
      <div className='relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center md:items-start px-6 md:px-10 py-24 md:py-32 lg:py-40 text-center md:text-left'>
        <h1 className='font-heading text-5xl md:text-6xl font-semibold text-white tracking-tight'>
          Cloud & DevOps Engineer
        </h1>
        <p className='mt-5 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed'>
          I build automated cloud infrastructure and CI/CD pipelines on AWS and GCP.
          5+ years shipping production software gives me the edge most infra engineers
          lack — I understand what developers actually need.
        </p>
        <p className='mt-4 text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-cyan-400'>
          AWS · Terraform · CI/CD · Docker · GCP
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
            href='#projects'
            className='inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-cyan-400'
          >
            View Cloud & Devops Projects
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
