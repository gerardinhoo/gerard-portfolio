'use client';

import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  return (
    <section className='relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#D4E6A5] via-[#F9D18C] to-[#F07050] text-white text-center px-4 font-big-shoulders overflow-hidden'>
      <ParticlesBackground />
      <div className='z-10 max-w-4xl mx-auto'>
        {/* Headline */}
        <h1
          className='
    hidden md:flex flex-wrap items-center justify-center
    gap-x-3 gap-y-2 font-extrabold text-white
    md:text-[clamp(2rem,5vw,3.5rem)] [text-wrap:balance]
    md:uppercase tracking-tight leading-tight
  '
        >
          <span>DevOps Engineer</span>
          <span className='opacity-70' />
          <span>Full-Stack Engineer</span>
          <span className='opacity-70' />
          <span>Freelance Web Developer</span>
        </h1>

        {/* Mobile version (stacked) */}
        <h1
          className='
    md:hidden font-extrabold text-white
    text-3xl sm:text-4xl leading-[1.15] tracking-tight
    [text-wrap:balance]
  '
        >
          <span className='block'>DevOps Engineer</span>
          <span className='block'>Full-Stack Engineer</span>
          <span className='block'>Freelance Web Developer</span>
        </h1>

        {/* Tagline */}
        <h2 className='mt-6 max-w-3xl mx-auto text-white/95 leading-snug [text-wrap:balance] text-[clamp(1.25rem,4vw,2rem)]'>
          From code to cloud. I build, automate, and deliver reliable systems.
        </h2>
        <h3 className='mt-2 max-w-3xl mx-auto text-white/80 text-[clamp(1rem,2.5vw,1.25rem)]'>
          React · Node.js · Terraform · Docker · CI/CD · AWS/GCP
        </h3>
      </div>
    </section>
  );
}
