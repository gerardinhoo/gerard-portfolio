// app/components/Navbar.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Optional: lock page scroll when menu is open (mobile polish)
  useEffect(() => {
    if (open) document.documentElement.style.overflow = 'hidden';
    else document.documentElement.style.overflow = '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <nav
      className='
        sticky top-0 z-50
        border-b border-orange-100/60
        bg-white/90 backdrop-blur-xl
        supports-[backdrop-filter]:bg-white/70
        shadow-[0_2px_24px_-10px_rgba(240,112,80,0.25)]
      '
    >
      <div className='mx-auto max-w-7xl h-14 px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
        {/* Brand */}
        <Link
          href='/'
          className='font-extrabold tracking-wide text-[#F07050] uppercase'
        >
          <span className='text-lg sm:text-xl md:text-2xl'>Gerard Eklu</span>
        </Link>

        {/* Desktop links */}
        <div className='hidden md:flex items-center gap-2'>
          {[
            { href: '#about', label: 'About' },
            { href: '#projects', label: 'Projects' },
            { href: '#skills', label: 'Skills' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className='
                relative px-3 py-2 rounded-full text-[13px] font-semibold uppercase tracking-wide
                text-slate-800 hover:text-[#F07050]
                hover:bg-orange-50 transition-colors
              '
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className='md:hidden inline-flex items-center rounded p-2 hover:bg-black/5'
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label='Toggle navigation'
        >
          <svg viewBox='0 0 24 24' className='size-6'>
            <path
              d='M4 6h16M4 12h16M4 18h16'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div
          className='
            md:hidden absolute left-0 right-0 top-14
            bg-white shadow-md border-t border-orange-100
            text-slate-900
          '
        >
          <div className='mx-auto max-w-7xl px-4 py-3 flex flex-col'>
            {[
              { href: '#about', label: 'About' },
              { href: '#projects', label: 'Projects' },
              { href: '#skills', label: 'Skills' },
              { href: '#contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className='
                  w-full text-left py-3 text-base font-semibold uppercase tracking-wide
                  text-slate-900 hover:text-[#F07050]
                '
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
