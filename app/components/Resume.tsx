export default function Resume() {
  return (
    <section id='resume' className='scroll-mt-24 relative bg-orange-50'>
      <div className='px-4 sm:px-6 py-16 sm:py-20 md:py-24 max-w-6xl mx-auto text-center'>
        <h2 className='text-[clamp(2rem,6vw,3rem)] font-bold mb-6 text-[#F07050]'>
          Resume
        </h2>
        <p className='text-gray-700 max-w-2xl mx-auto mb-8'>
          Download my up-to-date resume highlighting my experience in full stack
          development, DevOps, and cloud engineering.
        </p>

        <a
          href='/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F07050] hover:bg-[#d95d3f] transition text-white font-semibold shadow-md'
        >
          📄 View Resume
        </a>
      </div>

      {/* Wave Divider */}
      <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180'>
        <svg
          className='relative block w-[calc(100%+1.3px)] h-16'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,27,906.67,54.75,985.66,65.29c70.36,9.29,136.93,4.47,214.34-8.27v63H0V0C74.15,23.6,147.81,47.83,227,61.17,267.75,67.92,304,67.77,321.39,56.44Z'
            fill='#ffffff'
          ></path>
        </svg>
      </div>
    </section>
  );
}
