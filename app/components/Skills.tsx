// app/components/Skills.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
const getIconSrc = (icon: string) => {
  // Use local or absolute URLs as-is; otherwise, use the Devicon CDN
  if (icon.startsWith('/') || icon.startsWith('http')) return icon;
  return `${DEVICON_BASE}${icon}`;
};

const skills = [
  {
    title: 'DevOps & Cloud Engineering',
    items: [
      { name: 'Docker', icon: 'docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'kubernetes/kubernetes-plain.svg' },
      { name: 'Terraform', icon: 'terraform/terraform-original.svg' },
      { name: 'GitHub Actions', icon: 'github/github-original.svg' },
      { name: 'GCP', icon: 'googlecloud/googlecloud-original.svg' },
      { name: 'Prometheus', icon: 'prometheus/prometheus-original.svg' },
      { name: 'Grafana', icon: 'grafana/grafana-original.svg' },
    ],
  },
  {
    title: 'Full Stack & Frontend',
    items: [
      { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
      { name: 'React', icon: 'react/react-original.svg' },
      { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'express/express-original.svg' },
      { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
      { name: 'Next.js', icon: 'nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
    ],
  },
  {
    title: 'Tools & Workflow',
    items: [
      { name: 'Git', icon: 'git/git-original.svg' },
      { name: 'Linux', icon: 'linux/linux-original.svg' },
      { name: 'Bash', icon: 'bash/bash-original.svg' },
      { name: 'Jira', icon: 'jira/jira-original.svg' },
      { name: 'Agile', icon: '/icons/agile.svg' },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id='skills'
      className='relative py-20 pt-24 pb-28 px-4 bg-[#F3E2DA] dark:bg-[#1a1a1a] text-black dark:text-white overflow-hidden'
    >
      {/* Top wave (mirror vertically) */}
      <svg
        className='pointer-events-none absolute top-0 left-0 w-full h-24 -scale-y-100'
        viewBox='0 0 1440 120'
        preserveAspectRatio='none'
        aria-hidden='true'
      >
        <path
          d='M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,85.3C840,96,960,96,1080,90.7C1200,85,1320,75,1380,69.3L1440,64L1440,0L0,0Z'
          fill='#ffffff'
        />
      </svg>
      <div className='max-w-6xl mx-auto text-center mt-10'>
        <motion.h2
          className='text-4xl font-bold mb-12 text-[#F07050]'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className='grid gap-12 md:grid-cols-3'>
          {skills.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className='text-2xl font-semibold mb-4 text-[#F07050]'>
                {category.title}
              </h3>
              <div className='flex flex-wrap justify-center gap-4'>
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className='flex flex-col items-center w-20'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={getIconSrc(skill.icon)}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className='mb-1 h-10 w-10 object-contain'
                      unoptimized={skill.icon.startsWith('/')} // ensure local SVGs render without optimization issues
                    />
                    <p className='text-xs font-medium text-center'>
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <svg
        className='pointer-events-none absolute bottom-0 left-0 w-full h-24'
        viewBox='0 0 1440 120'
        preserveAspectRatio='none'
        aria-hidden='true'
      >
        <path
          d='M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,85.3C840,96,960,96,1080,90.7C1200,85,1320,75,1380,69.3L1440,64L1440,120L0,120Z'
          fill='#ffffff'
        />
      </svg>
    </section>
  );
}
