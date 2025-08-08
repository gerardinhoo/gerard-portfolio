// app/components/Skills.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
      { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-plain.svg' },
    ],
  },
  {
    title: 'Tools & Workflow',
    items: [
      { name: 'Git', icon: 'git/git-original.svg' },
      { name: 'Linux', icon: 'linux/linux-original.svg' },
      { name: 'Bash', icon: 'bash/bash-original.svg' },
      { name: 'Jira', icon: 'jira/jira-original.svg' },
      { name: 'VS Code', icon: 'vscode/vscode-original.svg' },
      { name: 'Agile', icon: 'scrumalliance/scrumalliance-original.svg' },
    ],
  },
];

export default function Skills() {
  return (
    <section className='py-20 px-4 bg-[#FDF3ED] dark:bg-[#1a1a1a] text-black dark:text-white'>
      <div className='max-w-6xl mx-auto text-center'>
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
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className='mb-1'
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
    </section>
  );
}
