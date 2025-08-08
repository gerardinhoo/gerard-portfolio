'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-sm z-50 shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
        <h1 className='text-xl font-extrabold uppercase text-[#F07050] tracking-wide'>
          GERARD.DEV
        </h1>

        <div className='space-x-4 text-sm font-semibold uppercase tracking-wider'>
          <Link href='#about' className='hover:text-orange-600'>
            About
          </Link>
          <Link href='#projects' className='hover:text-orange-600'>
            Projects
          </Link>
          <Link href='#contact' className='hover:text-orange-600'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
