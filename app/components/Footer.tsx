import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='relative text-white'>
      {/* subtle divider */}
      <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-white/25 to-transparent' />

      {/* gradient footer */}
      <div className='bg-gradient-to-r from-[#F07050] via-[#ea6a4d] to-[#F07050]'>
        <div className='max-w-6xl mx-auto px-4 py-8 md:py-10'>
          {/* Social row */}
          <div className='flex items-center justify-center gap-6 mb-4'>
            <Link
              href='https://github.com/gerardinhoo'
              target='_blank'
              aria-label='GitHub'
              className='rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors'
            >
              <FaGithub size={20} />
            </Link>
            <Link
              href='https://linkedin.com/in//gerard-eklu-270422151/'
              target='_blank'
              aria-label='LinkedIn'
              className='rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors'
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href='eklugerard018@gmail.com'
              aria-label='Email'
              className='rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors'
            >
              <FaEnvelope size={20} />
            </Link>
          </div>

          {/* Copy + stack */}
          <p className='text-center text-sm md:text-[15px] leading-relaxed'>
            © {year} <span className='font-semibold'>Gerard Eku</span> Built
            with <span className='font-semibold'>Next.js</span> |{' '}
            <span className='font-semibold'>Tailwind CSS</span> |{' '}
            <span className='font-semibold'>DevOps</span> 💻🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
