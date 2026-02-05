import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  const inputCls =
    'w-full rounded-2xl bg-slate-950 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 ' +
    'placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400';

  return (
    <section id="contact" className="bg-slate-950 py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-50 text-center">
          Let’s Connect
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-400 text-center max-w-2xl mx-auto">
          I’m open to DevOps, Cloud, and Software Engineering roles, as well as freelance projects.
          Share a bit about the opportunity and how I can help.
        </p>

        {/* Contact form */}
        <div className="mt-10 max-w-3xl mx-auto">
          <form
            // 👇 replace with your real Formspree URL
            action="https://formspree.io/f/mqareyjo"
            method="POST"
            className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-lg shadow-black/25 space-y-6 text-left"
          >
            {/* Honeypot field (spam protection) */}
            <input
              type="text"
              name="website"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  placeholder="Your name (recruiter, hiring manager, or client)"
                  className={inputCls}
                  required
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your email so I can reply"
                  className={inputCls}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Subject shown in the email you receive */}
            <input
              type="hidden"
              name="_subject"
              value="New message from gerardeklu.dev"
            />

            <label htmlFor="contact-message" className="sr-only">
              Your message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about the role, project, or how we can work together"
              className={`${inputCls} min-h-[140px] resize-y`}
            />

            <button
              type="submit"
              aria-label="Send message"
              className="
                w-full
                inline-flex items-center justify-center gap-2
                rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-slate-950
                transition-colors hover:bg-orange-400
              "
            >
              <MdEmail size={18} />
              Send Message
            </button>
          </form>
        </div>

        {/* Socials */}
        <div className="mt-4 flex justify-center gap-3">
          <a
            href="https://github.com/gerardinhoo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-900 hover:bg-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <FaGithub size={18} aria-hidden='true' />
            GitHub
            <span className='sr-only'>(opens in new tab)</span>
          </a>
          <a
            href="https://linkedin.com/in/gerard-eklu-270422151/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-orange-400 px-4 py-1.5 text-sm font-medium text-orange-300 hover:bg-orange-400/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            <FaLinkedin size={18} aria-hidden='true' />
            LinkedIn
            <span className='sr-only'>(opens in new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
