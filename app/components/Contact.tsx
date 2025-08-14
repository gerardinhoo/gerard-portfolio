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
    'w-full rounded-xl border border-slate-300/80 bg-white px-4 py-3 ' +
    'text-[16px] shadow-sm placeholder:text-slate-400 ' +
    'focus:outline-none focus:ring-2 focus:ring-[#F07050]/30 focus:border-[#F07050]';

  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='max-w-3xl mx-auto px-4 text-center'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-4 text-[#F07050]'>
          Let’s Connect
        </h2>
        <p className='text-slate-700 text-base sm:text-lg max-w-2xl mx-auto mb-8'>
          I’m open to opportunities in DevOps, Full Stack, or Freelance work.
          Drop a note below.
        </p>

        {/* Contact form */}
        <form
          onSubmit={onSubmit}
          className='grid gap-4 text-left max-w-xl mx-auto'
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
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              rounded-xl bg-[#F07050] text-white font-semibold
              px-6 py-3
              shadow-[0_8px_24px_-10px_rgba(240,112,80,0.6)]
              transition hover:brightness-110 active:brightness-95
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

        {/* Socials */}
        <div className='mt-8 flex flex-col sm:flex-row gap-3 sm:gap-6 max-w-xl mx-auto justify-center'>
          <a
            href='https://github.com/gerardinhoo'
            target='_blank'
            rel='noopener noreferrer'
            className='w-full sm:w-auto inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-black text-white hover:bg-gray-800'
          >
            <FaGithub size={18} /> GitHub
          </a>
          <a
            href='https://linkedin.com/in/gerard-eklu-270422151/'
            target='_blank'
            rel='noopener noreferrer'
            className='w-full sm:w-auto inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl border border-[#F07050] text-[#F07050] hover:bg-[#F07050] hover:text-white'
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
