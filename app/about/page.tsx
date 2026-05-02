import type { Metadata } from 'next';
import About from '../components/About';

export const metadata: Metadata = {
  title: 'About · Gerard Eklu',
  description:
    'About Gerard Eklu \u2014 Full-Stack & Cloud Platform Engineer with 5+ years shipping production software, infrastructure, and CI/CD.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className='pt-20 md:pt-24'>
      <About />
    </div>
  );
}
