'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm uppercase'>
      <div className='mx-auto max-w-7xl h-14 px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
        {/* Brand */}
        <Link
          href='/'
          className='font-extrabold tracking-wide text-[#F07050] flex-shrink'
        >
          <span className='text-lg sm:text-xl md:text-2xl'>GERARD EKLU</span>
        </Link>

        {/* Desktop links */}
        <div className='hidden md:flex items-center gap-6 text-sm font-semibold tracking-wider'>
          <Link href='#about' className='hover:text-[#F07050]'>
            About
          </Link>
          <Link href='#projects' className='hover:text-[#F07050]'>
            Projects
          </Link>
          <Link href='#skills' className='hover:text-[#F07050]'>
            Skills
          </Link>
          <Link href='#contact' className='hover:text-[#F07050]'>
            Contact
          </Link>
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

      {/* Mobile menu */}
      {open && (
        <div className='md:hidden border-t bg-white/90 backdrop-blur'>
          <div className='mx-auto max-w-7xl px-4 py-3 flex flex-col gap-4 text-sm sm:text-base font-medium text-center'>
            <Link href='#about' onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href='#projects' onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link href='#skills' onClick={() => setOpen(false)}>
              Skills
            </Link>
            <Link href='#contact' onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
