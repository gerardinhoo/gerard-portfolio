export default function Resume() {
  return (
    <section id='resume' className='scroll-mt-24 bg-slate-950 py-20 md:py-24'>
      <div className='max-w-6xl mx-auto px-6 md:px-10 text-center'>
        <h2 className='font-heading text-3xl md:text-4xl font-semibold text-slate-50 text-center'>
          Resume
        </h2>
        <p className='mt-3 text-sm md:text-base text-slate-400 text-center max-w-2xl mx-auto'>
          Download my up-to-date resume highlighting my experience in software
          engineering, DevOps, and cloud engineering.
        </p>

        <div className='mt-8 flex justify-center'>
          <div className='bg-slate-900/80 border border-slate-800 rounded-3xl px-8 py-6 shadow-lg shadow-black/25 flex flex-col items-center gap-4'>
            <a
              href='/GERARD EKLU-Cloud-Devops-engineer.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-orange-400 transition-colors'
            >
              📄 View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
