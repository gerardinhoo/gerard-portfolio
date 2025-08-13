// app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = [
    { href: '#about', label: 'ABOUT' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#contact', label: 'CONTACT' },
  ];

  return (
    <nav
      className='
        sticky top-0 z-50
        bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60
        border-b border-black/5
        uppercase
      '
    >
      <div className='mx-auto max-w-7xl h-14 px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
        {/* Brand */}
        <Link
          href='/'
          className='font-extrabold tracking-[0.18em] text-[#F07050] flex-shrink'
        >
          <span className='text-lg sm:text-xl md:text-2xl'>GERARD EKLU</span>
        </Link>

        {/* Desktop links */}
        <ul className='hidden md:flex items-center gap-1'>
          {items.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className='
                  group relative inline-flex items-center
                  px-3 py-2 text-sm font-semibold tracking-wider
                  text-neutral-900 hover:text-[#F07050]
                  transition-colors duration-200
                  rounded-md focus:outline-none
                  focus-visible:ring-2 focus-visible:ring-[#F07050]/40
                '
              >
                <span>{label}</span>
                {/* animated underline */}
                <span
                  aria-hidden='true'
                  className='
                    pointer-events-none absolute left-2 right-2 -bottom-0.5
                    h-[2px] origin-left scale-x-0 bg-[#F07050]
                    transition-transform duration-300 group-hover:scale-x-100
                    group-focus-visible:scale-x-100
                  '
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className='md:hidden inline-flex items-center rounded p-2 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F07050]/40'
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

      {/* Mobile menu */}
      {open && (
        <div className='md:hidden border-t bg-white/90 backdrop-blur'>
          <div className='mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2 text-sm sm:text-base font-medium text-center'>
            {items.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className='
                  block rounded-md px-3 py-2
                  hover:bg-[#F07050]/10 hover:text-[#F07050]
                  transition-colors
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F07050]/40
                '
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
