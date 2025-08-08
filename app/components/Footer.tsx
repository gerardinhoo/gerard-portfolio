export default function Footer() {
  return (
    <footer className='bg-[#F07050] text-white py-6 text-center font-big-shoulders'>
      <p className='text-sm md:text-base'>
        © {new Date().getFullYear()} Gerard Eku • Built with Next.js, Tailwind
        CSS, & DevOps 💻🚀
      </p>
    </footer>
  );
}
