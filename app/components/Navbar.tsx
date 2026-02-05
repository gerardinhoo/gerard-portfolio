// app/components/Navbar.tsx
'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    // Return focus to toggle button when closing
    toggleButtonRef.current?.focus();
  }, []);

  // Lock page scroll when menu is open
  useEffect(() => {
    if (open) document.documentElement.style.overflow = 'hidden';
    else document.documentElement.style.overflow = '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  // Handle Escape key to close menu
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, closeMenu]);

  // Focus first menu item when menu opens
  useEffect(() => {
    if (open && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a');
      firstLink?.focus();
    }
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
          {NAV_LINKS.map(({ href, label }) => (
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
          ref={toggleButtonRef}
          className='md:hidden inline-flex items-center rounded p-2 text-slate-100 hover:bg-slate-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls='mobile-menu'
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
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
        <div
          ref={menuRef}
          id='mobile-menu'
          role='dialog'
          aria-modal='true'
          aria-label='Navigation menu'
          className='
            md:hidden absolute left-0 right-0 top-full
            bg-slate-950/95 border-t border-slate-800
            text-slate-100
          '
        >
          <div className='mx-auto max-w-6xl px-6 py-3 flex flex-col'>
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className='
                  w-full text-left py-3 text-sm font-medium uppercase tracking-[0.18em]
                  text-slate-100 hover:text-cyan-400 focus-visible:outline-none focus-visible:text-cyan-400
                '
                onClick={closeMenu}
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
