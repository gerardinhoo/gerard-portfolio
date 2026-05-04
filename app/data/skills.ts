export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  variant: 'primary' | 'secondary' | 'default';
  items: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & Platform',
    variant: 'primary',
    items: [
      { name: 'AWS', icon: 'aws/aws.svg' },
      { name: 'Terraform', icon: 'terraform/terraform-original.svg' },
      { name: 'Docker', icon: 'docker/docker-original.svg' },
      { name: 'GitHub Actions', icon: 'github/github-original.svg' },
      { name: 'CloudWatch', icon: 'aws/aws.svg' },
      { name: 'Networking / VPC', icon: 'aws/aws.svg' },
      { name: 'IAM / Security', icon: 'aws/aws.svg' },
    ],
  },
  {
    title: 'Application Engineering',
    variant: 'secondary',
    items: [
      { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
      { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
      { name: 'React', icon: 'react/react-original.svg' },
      { name: 'Next.js', icon: 'nextjs/nextjs-original.svg' },
      { name: 'Express', icon: 'express/express-original.svg' },
      { name: 'PostgreSQL', icon: 'postgres/postgres-original.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
    ],
  },
  {
    title: 'Workflow & Delivery',
    variant: 'default',
    items: [
      { name: 'Git', icon: 'git/git-original.svg' },
      { name: 'Linux', icon: 'linux/linux-original.svg' },
      { name: 'Bash / Shell Scripting', icon: 'bash/bash-original.svg' },
      { name: 'Confluence', icon: '/icons/confluence.svg' },
      { name: 'Agile Delivery', icon: '/icons/agile.svg' },
    ],
  },
];

/**
 * Get the appropriate heading color class based on category variant
 */
export function getCategoryHeadingClass(variant: SkillCategory['variant']): string {
  const variants = {
    primary: 'text-cyan-400',
    secondary: 'text-orange-400',
    default: 'text-slate-50',
  } as const;

  return `font-heading text-lg md:text-xl ${variants[variant]}`;
}
