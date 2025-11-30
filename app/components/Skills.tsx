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
    title: 'Software Engineering',
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

const getCategoryHeadingClass = (title: string) => {
  if (title === 'DevOps & Cloud Engineering')
    return 'font-heading text-lg md:text-xl text-cyan-400';
  if (title === 'Software Engineering')
    return 'font-heading text-lg md:text-xl text-orange-400';
  return 'font-heading text-lg md:text-xl text-slate-50';
};

export default function Skills() {
  return (
    <section id='skills' className='bg-slate-950 py-20 md:py-24'>
      <div className='max-w-6xl mx-auto px-6 md:px-10'>
        <motion.h2
          className='font-heading text-3xl md:text-4xl font-semibold text-slate-50 text-center'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <p className='mt-3 text-sm md:text-base text-slate-400 text-center max-w-2xl mx-auto'>
          Technologies I use to design, automate, and operate reliable systems.
        </p>

        <div className='mt-10 grid gap-6 md:gap-8 md:grid-cols-3'>
          {skills.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-lg shadow-black/25 flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-cyan-400/60'
            >
              <h3 className={getCategoryHeadingClass(category.title)}>
                {category.title}
              </h3>
              <div className='flex flex-wrap gap-2 mt-2'>
                {category.items.map((skill) => (
                  <span
                    key={skill.name}
                    className='inline-flex items-center rounded-full border border-slate-700 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-slate-300'
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
