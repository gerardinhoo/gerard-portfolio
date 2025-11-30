// components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-slate-950 border-t border-slate-800 text-slate-300'>
      <div className='max-w-6xl mx-auto px-6 py-10 text-center space-y-5'>
        <p>© 2025 <span className="text-slate-300 font-bold">Gerard Eklu</span></p>
        <p className="text-xs mt-1">Cloud & DevOps Engineer • AWS | GCP</p>
        <p className="text-xs mt-1">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
