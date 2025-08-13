// app/components/About.tsx
'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id='about' className='py-16 sm:py-20'>
      <div className='max-w-4xl mx-auto px-5'>
        {/* ✅ Background wrapper from heading → tags */}
        <div
          className='
            rounded-3xl
            border border-orange-100/70
            bg-[linear-gradient(180deg,#fff,rgba(255,244,238,.6))]
            shadow-[0_15px_50px_-20px_rgba(240,112,80,0.35)]
            px-5 sm:px-8 py-10 sm:py-12
            text-center
          '
        >
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
          {/* Experience highlight (kept as inner card for contrast) */}
          <div className='mt-6 sm:mt-7 text-left bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100/70 p-5 sm:p-6 shadow-[0_10px_30px_-15px_rgba(240,112,80,0.35)]'>
            <p>
              I’m Gerard Eklu, a Software Engineer with 5 years of enterprise
              experience who evolved into DevOps through hands-on projects and
              advanced training. I blend full stack development with cloud,
              CI/CD, and infrastructure expertise working across React, Next JS,
              Node.js, Java, Terraform, and Google Cloud Platform.
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

          {/* Tags (still inside the background wrapper) */}
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
        </div>

        {/* CTA lives OUTSIDE the background wrapper */}
        <div className='mt-8 sm:mt-10 text-center'>
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
