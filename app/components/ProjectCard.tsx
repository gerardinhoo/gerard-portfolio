'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  github,
  live,
}: ProjectCardProps) {
  return (
    <motion.div
      className='bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition border border-gray-100'
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className='text-xl font-bold mb-2 text-[#F07050]'>{title}</h3>
      <p className='text-sm text-gray-700 mb-4'>{description}</p>
      <div className='flex flex-wrap gap-2 mb-4'>
        {tags.map((tag, i) => (
          <span
            key={i}
            className='text-xs bg-orange-100 text-orange-600 font-semibold px-2 py-1 rounded-full'
          >
            {tag}
          </span>
        ))}
      </div>
      <div className='flex gap-4'>
        <a
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition flex items-center gap-1'
        >
          GitHub <ExternalLink size={14} />
        </a>
        {live && (
          <a
            href={live}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm text-[#F07050] border border-[#F07050] px-4 py-2 rounded hover:bg-[#F07050] hover:text-white transition flex items-center gap-1'
          >
            Live Demo <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
