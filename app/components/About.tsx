// app/components/About.tsx
'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section
      id='about'
      className='bg-[linear-gradient(180deg,#fff,rgba(255,244,238,.6))] py-16 sm:py-20'
    >
      <div className='max-w-4xl mx-auto px-5 text-center'>
        {/* Title */}
        <h2 className='font-extrabold tracking-tight text-[#F07050] text-4xl sm:text-5xl mb-8'>
          About Me
        </h2>

        {/* Profile */}
        <div className='mx-auto mb-8 sm:mb-10 w-40 h-40 sm:w-48 sm:h-48 rounded-full ring-4 ring-[#ff8b6a]/50 shadow-[0_15px_50px_-20px_rgba(240,112,80,0.55)] overflow-hidden'>
          <Image
            src='/profile.jpeg'
            alt='Gerard Eku'
            width={480}
            height={480}
            className='h-full w-full object-cover'
            priority
          />
        </div>

        <p className='text-neutral-800/90 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto'>
          I’m{' '}
          <span className='font-semibold text-neutral-900'>Gerard Eklu</span>, a
          <span className='font-semibold'>
            {' '}
            Self-taught DevOps & Software Engineer
          </span>{' '}
          with
          <span className='font-semibold'> 5 years</span> of experience
          delivering scalable apps and cloud infrastructure. I work across{' '}
          <span className='font-semibold'>React</span>,{' '}
          <span className='font-semibold'>Node.js</span>, and
          <span className='font-semibold'> Java</span>, with deep expertise in
          <span className='font-semibold'> CI/CD</span>,{' '}
          <span className='font-semibold'>Terraform</span>, and
          <span className='font-semibold'> Google Cloud Platform</span>.
        </p>

        {/* Experience highlight */}
        <div className='mt-6 sm:mt-7 text-left bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100/70 p-5 sm:p-6 shadow-[0_10px_30px_-15px_rgba(240,112,80,0.35)]'>
          <p className='text-neutral-800/95 leading-relaxed text-base sm:text-lg'>
            At <span className='font-semibold'>The Home Depot</span>, I
            contributed to
            <span className='font-semibold'> React</span> UIs and automated
            deployments with
            <span className='font-semibold'> TeamCity</span> &{' '}
            <span className='font-semibold'>GitHub Actions</span>. I managed
            workloads on <span className='font-semibold'>GKE</span> with
            <span className='font-semibold'> Spinnaker</span>, handled secrets
            via
            <span className='font-semibold'> Vault</span>, and provisioned infra
            using
            <span className='font-semibold'> Terraform</span>.
          </p>
          <p className='mt-4 text-neutral-800/95 leading-relaxed text-base sm:text-lg'>
            Afterward, I partnered with a senior engineer to build a job
            management app using
            <span className='font-semibold'> Next.js</span>,{' '}
            <span className='font-semibold'>TypeScript</span>, and
            <span className='font-semibold'> Tailwind CSS</span>, and delivered
            a fully optimized HVAC website. I’m continually sharpening my{' '}
            <span className='font-semibold'>DevOps</span> &{' '}
            <span className='font-semibold'>AWS</span> and Software Engineering
            skills through hands-on projects and a focused bootcamp bridging the
            gap between
            <span className='font-semibold'> code and reliability</span>.
          </p>
        </div>

        {/* Quick skills badges (optional but nice) */}
        <div className='mt-7 sm:mt-8 flex flex-wrap justify-center gap-2'>
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
              className='text-sm sm:text-[0.95rem] px-3 py-1.5 rounded-full bg-orange-50 text-[#F07050] border border-orange-200'
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA (optional – keeps your current button style consistent) */}
        <div className='mt-8 sm:mt-10'>
          <a
            href='#projects'
            className='inline-flex items-center gap-2 rounded-full bg-[#F07050] text-white font-semibold px-6 py-3 hover:brightness-110 active:brightness-95 transition-shadow shadow-[0_8px_25px_-12px_rgba(240,112,80,0.65)]'
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
