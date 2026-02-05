/**
 * Skip link for keyboard users to bypass navigation.
 * Visually hidden until focused.
 */
export default function SkipLink() {
  return (
    <a
      href='#main-content'
      className='
        sr-only focus:not-sr-only
        focus:fixed focus:top-4 focus:left-4 focus:z-[100]
        focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2
        focus:text-sm focus:font-semibold focus:text-slate-950
        focus:outline-none focus:ring-2 focus:ring-cyan-300
      '
    >
      Skip to main content
    </a>
  );
}
