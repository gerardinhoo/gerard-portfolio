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
      // honeypot:
      website: (form.elements.namedItem('website') as HTMLInputElement)?.value,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setLoading(false);
    setStatus(res.ok ? 'ok' : 'err');
    if (res.ok) (form as HTMLFormElement).reset();
  }

  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6 text-[#F07050]'>
          Let’s Connect
        </h2>
        <p className='text-lg mb-10'>
          I’m open to opportunities in DevOps, Full Stack, or Freelance work.
          Drop a note below.
        </p>

        {/* Contact form */}
        <form
          onSubmit={onSubmit}
          className='grid gap-4 text-left max-w-xl mx-auto mb-8'
        >
          {/* honeypot (hidden) */}
          <input
            type='text'
            name='website'
            className='hidden'
            tabIndex={-1}
            autoComplete='off'
          />

          <div className='grid md:grid-cols-2 gap-4'>
            <input
              name='name'
              placeholder='Your name'
              className='w-full rounded-md border px-4 py-3'
            />
            <input
              name='email'
              type='email'
              required
              placeholder='Your email'
              className='w-full rounded-md border px-4 py-3'
            />
          </div>

          <textarea
            name='message'
            required
            rows={5}
            placeholder='Your message'
            className='w-full rounded-md border px-4 py-3'
          />

          <button
            type='submit'
            disabled={loading}
            className='inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#F07050] text-white font-semibold hover:brightness-110 disabled:opacity-60'
            aria-label='Send message'
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
        <div className='flex justify-center gap-6'>
          <a
            href='https://github.com/gerardinhoo'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-5 py-3 bg-black text-white rounded hover:bg-gray-800'
          >
            <svg aria-hidden='true' className='hidden' />
            <FaGithub size={18} /> GitHub
          </a>
          <a
            href='https://linkedin.com/in/gerard-eklu-270422151/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-5 py-3 border border-[#F07050] text-[#F07050] rounded hover:bg-[#F07050] hover:text-white'
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
