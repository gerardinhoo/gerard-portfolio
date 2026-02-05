// app/components/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { useAccessibleAnimation } from '../hooks/useReducedMotion';
import { skillCategories, getCategoryHeadingClass } from '../data/skills';

export default function Skills() {
  const { fadeInUp } = useAccessibleAnimation();

  return (
    <section id='skills' className='bg-slate-950 py-20 md:py-24'>
      <div className='max-w-6xl mx-auto px-6 md:px-10'>
        <motion.h2
          className='font-heading text-3xl md:text-4xl font-semibold text-slate-50 text-center'
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <p className='mt-3 text-sm md:text-base text-slate-400 text-center max-w-2xl mx-auto'>
          Technologies I use to design, automate, and operate reliable systems.
        </p>

        <div className='mt-10 grid gap-6 md:gap-8 md:grid-cols-3'>
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              transition={fadeInUp.transition}
              viewport={{ once: true }}
              className='bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-lg shadow-black/25 flex flex-col gap-4 transition-shadow duration-200 hover:shadow-xl hover:border-cyan-400/60'
            >
              <h3 className={getCategoryHeadingClass(category.variant)}>
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
