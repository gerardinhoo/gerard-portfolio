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
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white tracking-tight mb-10 max-w-3xl mx-auto'>
          Self-taught engineer with 5+ years of experience delivering scalable
          applications and cloud infrastructure. From building high-performance
          React UIs to deploying automated, production-ready systems with
          Terraform, Docker, and CI/CD pipelines on GCP/AWS — I bridge the gap
          between code and cloud reliability.
        </p>

        {/* CTA */}
        <a
          href='#projects'
          className='bg-white text-[#F07050] font-bold px-6 py-3 rounded-full hover:bg-orange-100 transition'
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
