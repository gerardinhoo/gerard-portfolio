'use client';

import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  return (
    <section className='relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#D4E6A5] via-[#F9D18C] to-[#F07050] text-white text-center px-4 font-big-shoulders overflow-hidden'>
      <ParticlesBackground />
      <div className='z-10'>
        <h1 className='text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg uppercase tracking-wide'>
          Gerard Eku
        </h1>
        <p className='text-xl md:text-2xl font-semibold max-w-2xl mb-8 drop-shadow'>
          DevOps Engineer • Software Engineer • Freelancer
        </p>
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
