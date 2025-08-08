import Image from 'next/image';

export default function About() {
  return (
    <section className='flex flex-col items-center justify-center text-center space-y-6 px-4'>
      <h2 className='text-3xl md:text-4xl font-bold text-orange-500'>
        About Me
      </h2>

      {/* Profile Image */}
      <div className='relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-orange-400 shadow-lg overflow-hidden'>
        <img
          src='/profile.jpeg'
          alt='Gerard Eku'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Bio Text */}
      <div className='max-w-2xl space-y-4 text-sm md:text-base'>
        <p>
          I'm <strong>Gerard Eku</strong>, a hands-on engineer with a passion
          for building, automating, and scaling modern software systems.
        </p>
        <p>
          I specialize in{' '}
          <span className='text-orange-500 font-semibold'>
            DevOps, Cloud Infrastructure, and Full Stack Web Development.
          </span>{' '}
          From CI/CD to React UIs to Terraform/GCP/AWS. I bridge the gap between
          code and reliability.
        </p>
        <p>
          I thrive in environments where I can automate processes, collaborate
          with teams, and deliver real-world solutions that matter.
        </p>
      </div>
    </section>
  );
}
