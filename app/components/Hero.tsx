'use client';

import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  return (
    <section className='relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#D4E6A5] via-[#F9D18C] to-[#F07050] text-white text-center px-4 font-big-shoulders overflow-hidden'>
      <ParticlesBackground />
      <div className='z-10 max-w-4xl mx-auto'>
        {/* Headline */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 drop-shadow-lg uppercase tracking-wide'>
          DevOps Engineer | Software Engineer | Freelance Web Developer
        </h1>

        {/* Tagline */}
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white tracking-tight mb-10 max-w-3xl mx-auto'>
          DevOps & Software Engineer with 5 years of experience delivering
          scalable apps and cloud infrastructure — from React UIs to
          Terraform/GCP/AWS and CI/CD pipelines.
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
