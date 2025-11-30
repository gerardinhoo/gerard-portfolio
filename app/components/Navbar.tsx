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
        fixed inset-x-0 top-0 z-50
        border-b border-slate-800
        bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/40 backdrop-blur-xl
      '
    >
      <div className='mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10 py-3'>
        {/* Brand */}
        <Link href='/' className='font-heading text-lg md:text-xl tracking-[0.25em] text-orange-400 font-bold'>
          GERARD EKLU
        </Link>

        {/* Desktop links */}
        <div className='hidden md:flex items-center gap-4'>
          {[
            { href: '#about', label: 'About' },
            { href: '#projects', label: 'Projects' },
            { href: '#skills', label: 'Skills' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className='text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-slate-100/90 hover:text-cyan-400 hover:opacity-80 transition-colors'
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className='md:hidden inline-flex items-center rounded p-2 text-slate-100 hover:bg-slate-800/80'
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
            md:hidden absolute left-0 right-0 top-full
            bg-slate-950/95 border-t border-slate-800
            text-slate-100
          '
        >
          <div className='mx-auto max-w-6xl px-6 py-3 flex flex-col'>
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
                  w-full text-left py-3 text-sm font-medium uppercase tracking-[0.18em]
                  text-slate-100 hover:text-cyan-400
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
