'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useAccessibleAnimation } from '../hooks/useReducedMotion';

interface SystemCategory {
  slug: string;
  title: string;
  capability: string;
  tools: string[];
}

const categories: SystemCategory[] = [
  {
    slug: 'infrastructure',
    title: 'Infrastructure as Code',
    capability: 'Provision AWS and GCP environments as versioned, reviewed code.',
    tools: ['Terraform', 'CloudFormation', 'Ansible'],
  },
  {
    slug: 'containers',
    title: 'Containers & Orchestration',
    capability: 'Build, ship, and run containerized workloads on ECS and Kubernetes.',
    tools: ['Docker', 'ECS Fargate', 'EKS', 'Kubernetes'],
  },
  {
    slug: 'cicd',
    title: 'CI/CD',
    capability: 'Automated pipelines from commit to production with security gates.',
    tools: ['GitHub Actions', 'Jenkins', 'TeamCity', 'Trivy'],
  },
  {
    slug: 'observability',
    title: 'SRE & Observability',
    capability: 'Dashboards, alarms, log retention, and runbooks for production systems.',
    tools: ['CloudWatch', 'Prometheus', 'Grafana'],
  },
  {
    slug: 'cloud',
    title: 'Cloud Architecture',
    capability: 'Design fault-tolerant, secure architectures on AWS (and GCP).',
    tools: ['AWS', 'VPC', 'IAM', 'Lambda', 'API Gateway'],
  },
  {
    slug: 'scripting',
    title: 'Scripting & Automation',
    capability: 'Bash and Python automation for operational tasks and tooling.',
    tools: ['Bash', 'Python', 'Linux'],
  },
];

export default function SystemsTeaser() {
  const { fadeInUp } = useAccessibleAnimation();

  return (
    <section
      id='systems'
      aria-labelledby='systems-heading'
      className='scroll-mt-24 bg-slate-950 px-4 sm:px-6 py-20 md:py-24 border-t border-slate-900'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='mb-10 md:mb-12 text-center'>
          <p className='text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-cyan-400'>
            Systems
          </p>
          <h2
            id='systems-heading'
            className='mt-2 font-heading text-3xl md:text-4xl font-semibold text-slate-50'
          >
            Platform, Infrastructure, & SRE
          </h2>
          <p className='mt-3 text-sm md:text-base text-slate-400 max-w-2xl mx-auto'>
            Six focus areas that cover how I design, automate, and operate the
            platforms applications run on.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
          {categories.map((cat) => (
            <motion.a
              key={cat.slug}
              href={`/systems/${cat.slug}`}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              transition={fadeInUp.transition}
              viewport={{ once: true }}
              className='group bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-lg shadow-black/25 transition-all duration-200 hover:border-cyan-400/60 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
            >
              <h3 className='font-heading text-lg md:text-xl text-slate-50 group-hover:text-cyan-300 transition-colors'>
                {cat.title}
              </h3>
              <p className='mt-2 text-sm leading-relaxed text-slate-300'>
                {cat.capability}
              </p>
              <div className='mt-4 flex flex-wrap gap-2'>
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className='inline-flex items-center rounded-full border border-slate-700 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-300'
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className='mt-5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-400'>
                Explore
                <ArrowRight
                  size={14}
                  aria-hidden='true'
                  className='transition-transform group-hover:translate-x-0.5'
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
