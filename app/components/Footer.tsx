// components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-slate-950 border-t border-slate-800 text-slate-300'>
      <div className='max-w-6xl mx-auto px-6 py-10 text-center space-y-5'>
        <div className='flex justify-center gap-4'>
          {[
            {
              href: 'https://github.com/gerardinhoo',
              label: 'GitHub',
              Icon: FaGithub,
            },
            {
              href: 'https://www.linkedin.com/in/gerard-eklu/',
              label: 'LinkedIn',
              Icon: FaLinkedin,
            },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={label}
              className='
                inline-flex h-10 w-10 items-center justify-center rounded-full
                bg-slate-800/80 backdrop-blur
                hover:bg-slate-700 active:bg-slate-800
                transition ring-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70
              '
            >
              <Icon className='text-slate-100' />
            </a>
          ))}
        </div>

        <p className='text-slate-400'>
          © {year} <strong className='text-slate-100'>Gerard Eklu</strong>{' '}
          <span className='text-slate-500 text-sm'>
            Built with Next.js &amp; Tailwind CSS
          </span>
        </p>
      </div>
    </footer>
  );
}
