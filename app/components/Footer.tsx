// components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-[#F07050] text-white'>
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
                bg-white/15 backdrop-blur
                hover:bg-white/25 active:bg-white/20
                transition ring-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
              '
            >
              <Icon className='text-white/95' />
            </a>
          ))}
        </div>

        <p className='text-white/90'>
          © {year} <strong>Gerard Eklu</strong>{' '}
          <span className='text-white/80 text-sm'>
            Built with Next.js & Tailwind CSS
          </span>
        </p>
      </div>
    </footer>
  );
}
