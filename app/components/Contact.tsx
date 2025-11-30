'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | 'ok' | 'err'>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)
        ?.value,
      website: (form.elements.namedItem('website') as HTMLInputElement)?.value, // honeypot
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setLoading(false);
    setStatus(res.ok ? 'ok' : 'err');
    if (res.ok) form.reset();
  }

  const inputCls =
    'w-full rounded-2xl bg-slate-950 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 ' +
    'placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400';

  return (
    <section id='contact' className='bg-slate-950 py-20 md:py-24'>
      <div className='max-w-3xl mx-auto px-6 md:px-10 text-center'>
        <h2 className='font-heading text-3xl md:text-4xl font-semibold text-slate-50 text-center'>
          Let’s Connect
        </h2>
        <p className='mt-3 text-sm md:text-base text-slate-400 text-center max-w-2xl mx-auto'>
          I’m open to opportunities in DevOps, Cloud, or Software Engineering
          roles, as well as freelance work. Drop a note below.
        </p>

        {/* Contact form */}
        <div className='mt-10 max-w-3xl mx-auto'>
          <form
            onSubmit={onSubmit}
            className='bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-lg shadow-black/25 space-y-6 text-left'
          >
          {/* honeypot (hidden) */}
          <input
            type='text'
            name='website'
            className='hidden'
            tabIndex={-1}
            autoComplete='off'
          />

          <div className='grid gap-4 sm:grid-cols-2'>
            <input name='name' placeholder='Your name' className={inputCls} />
            <input
              name='email'
              type='email'
              required
              placeholder='Your email'
              className={inputCls}
            />
          </div>

          <textarea
            name='message'
            required
            rows={5}
            placeholder='Your message'
            className={`${inputCls} min-h-[140px] resize-y`}
          />

          <button
            type='submit'
            disabled={loading}
            aria-label='Send message'
            className='
              w-full
              inline-flex items-center justify-center gap-2
              rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-slate-950
              transition-colors hover:bg-orange-400
              disabled:opacity-60 disabled:pointer-events-none
            '
          >
            <MdEmail size={18} />
            {loading ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'ok' && (
            <p className='text-green-600 mt-2'>
              Thanks! Your message was sent.
            </p>
          )}
          {status === 'err' && (
            <p className='text-red-600 mt-2'>
              Something went wrong. Please try again.
            </p>
          )}
        </form>
        </div>

        {/* Socials */}
        <div className='mt-4 flex justify-center gap-3'>
          <a
            href='https://github.com/gerardinhoo'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-900 hover:bg-slate-200 transition-colors'
          >
            <FaGithub size={18} /> GitHub
          </a>
          <a
            href='https://linkedin.com/in/gerard-eklu-270422151/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center rounded-full border border-orange-400 px-4 py-1.5 text-sm font-medium text-orange-300 hover:bg-orange-400/10 transition-colors'
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
