export default function Resume() {
  return (
    <section
      id='resume'
      className='scroll-mt-24 bg-slate-950 pt-28 md:pt-32 pb-20 md:pb-24'
    >
      <div className='max-w-6xl mx-auto px-6 md:px-10 text-center'>
        <h2 className='font-heading text-3xl md:text-4xl font-semibold text-slate-50 text-center'>
          Resume
        </h2>
        <p className='mt-3 text-sm md:text-base text-slate-400 text-center max-w-2xl mx-auto'>
          Download my up-to-date resume highlighting product engineering, cloud
          infrastructure, CI/CD, and production delivery experience.
        </p>

        <div className='mt-10 flex justify-center'>
          <div className='w-full max-w-2xl bg-slate-900/80 border border-slate-800 rounded-3xl px-8 py-8 shadow-lg shadow-black/25 flex flex-col items-center gap-4'>
            <p className='text-sm leading-relaxed text-slate-300 max-w-xl'>
              The resume highlights product engineering, cloud infrastructure,
              CI/CD, and production delivery experience across flagship and
              supporting projects.
            </p>
            <a
              href='/GerardEKLU-CLOUD-DEVOPS-ENGINEER.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300'
            >
              <span aria-hidden='true'>📄</span>
              View Resume
              <span className='sr-only'>(PDF, opens in new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
