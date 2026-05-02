import type { Metadata } from 'next';
import Resume from '../components/Resume';

export const metadata: Metadata = {
  title: 'Resume · Gerard Eklu',
  description:
    'Download Gerard Eklu\u2019s resume \u2014 Full-Stack & Cloud Platform Engineer with experience in React, Node.js, AWS, Terraform, and CI/CD.',
  alternates: { canonical: '/resume' },
};

export default function ResumePage() {
  return <Resume />;
}
