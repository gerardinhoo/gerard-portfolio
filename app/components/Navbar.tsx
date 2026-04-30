// app/components/Navbar.tsx
'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { systemCategories } from '../data/systems';

type NavItem =
  | { kind: 'link'; href: string; label: string }
  | { kind: 'menu'; label: string; items: { href: string; label: string }[] };

const SYSTEMS_ITEMS = systemCategories.map((c) => ({
  href: `/systems/${c.slug}`,
  label: c.title,
}));

const NAV_ITEMS: NavItem[] = [
  { kind: 'link', href: '/work', label: 'Work' },
  {
    kind: 'menu',
    label: 'Systems',
    items: [{ href: '/systems', label: 'All Systems' }, ...SYSTEMS_ITEMS],
  },
  { kind: 'link', href: '/engineering', label: 'Engineering' },
  { kind: 'link', href: '/about', label: 'About' },
  { kind: 'link', href: '/resume', label: 'Resume' },
  { kind: 'link', href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  // Mobile drawer
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Desktop dropdown (Systems)
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  // Mobile expandable submenu (Systems)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const closeMobile = useCallback(() => {
    setOpen(false);
    setMobileExpanded(null);
    // Return focus to toggle button when closing
    toggleButtonRef.current?.focus();
  }, []);

  // Lock page scroll when mobile menu is open
  useEffect(() => {
    if (open) document.documentElement.style.overflow = 'hidden';
    else document.documentElement.style.overflow = '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  // Escape closes mobile menu and desktop dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (open) closeMobile();
      if (desktopMenu) setDesktopMenu(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, desktopMenu, closeMobile]);

  // Focus first link when mobile menu opens
  useEffect(() => {
    if (open && menuRef.current) {
      const firstFocusable = menuRef.current.querySelector('a, button');
      (firstFocusable as HTMLElement | null)?.focus();
    }
  }, [open]);

  // Click-outside closes the desktop dropdown
  useEffect(() => {
    if (!desktopMenu) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(e.target as Node)
      ) {
        setDesktopMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [desktopMenu]);

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
        <Link
          href='/'
          className='font-heading text-lg md:text-xl tracking-[0.25em] text-orange-400 font-bold'
        >
          GERARD EKLU
        </Link>

        {/* Desktop links */}
        <div
          ref={desktopMenuRef}
          className='hidden md:flex items-center gap-4'
        >
          {NAV_ITEMS.map((item) => {
            if (item.kind === 'link') {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-slate-100/90 hover:text-cyan-400 transition-colors'
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = desktopMenu === item.label;
            return (
              <div key={item.label} className='relative'>
                <button
                  type='button'
                  className='inline-flex items-center gap-1 text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-slate-100/90 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:text-cyan-400'
                  aria-haspopup='true'
                  aria-expanded={isOpen}
                  onClick={() =>
                    setDesktopMenu((cur) =>
                      cur === item.label ? null : item.label,
                    )
                  }
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    aria-hidden='true'
                    className={`transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    role='menu'
                    aria-label={`${item.label} submenu`}
                    className='absolute right-0 mt-3 w-72 rounded-xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-xl shadow-black/40 overflow-hidden'
                  >
                    <ul className='py-2'>
                      {item.items.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            role='menuitem'
                            onClick={() => setDesktopMenu(null)}
                            className='block px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-200 hover:bg-slate-900 hover:text-cyan-300 focus-visible:outline-none focus-visible:bg-slate-900 focus-visible:text-cyan-300'
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
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
            max-h-[calc(100vh-4rem)] overflow-y-auto
          '
        >
          <div className='mx-auto max-w-6xl px-6 py-3 flex flex-col'>
            {NAV_ITEMS.map((item) => {
              if (item.kind === 'link') {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobile}
                    className='w-full text-left py-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-100 hover:text-cyan-400 focus-visible:outline-none focus-visible:text-cyan-400 border-b border-slate-900/80'
                  >
                    {item.label}
                  </Link>
                );
              }

              const isExpanded = mobileExpanded === item.label;
              return (
                <div
                  key={item.label}
                  className='border-b border-slate-900/80'
                >
                  <button
                    type='button'
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setMobileExpanded((cur) =>
                        cur === item.label ? null : item.label,
                      )
                    }
                    className='w-full flex items-center justify-between py-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-100 hover:text-cyan-400 focus-visible:outline-none focus-visible:text-cyan-400'
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      aria-hidden='true'
                      className={`transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <ul className='pb-2'>
                      {item.items.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={closeMobile}
                            className='block pl-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-300 hover:text-cyan-300 focus-visible:outline-none focus-visible:text-cyan-300'
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
