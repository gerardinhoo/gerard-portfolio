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
    title: 'DevOps & Cloud Engineering',
    variant: 'primary',
    items: [
      { name: 'Docker', icon: 'docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'kubernetes/kubernetes-plain.svg' },
      { name: 'Terraform', icon: 'terraform/terraform-original.svg' },
      { name: 'GitHub Actions', icon: 'github/github-original.svg' },
      { name: 'Jenkins', icon: 'jenkins/jenkins-original.svg' },
      { name: 'GCP', icon: 'googlecloud/googlecloud-original.svg' },
      { name: 'AWS', icon: 'aws/aws.svg' },
      { name: 'Prometheus', icon: 'prometheus/prometheus-original.svg' },
      { name: 'Grafana', icon: 'grafana/grafana-original.svg' },
      { name: 'Trivy', icon: 'trivy/trivy-original.svg' },
    ],
  },
  {
    title: 'Software Engineering',
    variant: 'secondary',
    items: [
      { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
      { name: 'React', icon: 'react/react-original.svg' },
      { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'express/express-original.svg' },
      { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', icon: 'postgres/postgres-original.svg' },
      { name: 'Next.js', icon: 'nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
    ],
  },
  {
    title: 'Tools & Workflow',
    variant: 'default',
    items: [
      { name: 'Git', icon: 'git/git-original.svg' },
      { name: 'Linux', icon: 'linux/linux-original.svg' },
      { name: 'Bash', icon: 'bash/bash-original.svg' },
      { name: 'Jira', icon: 'jira/jira-original.svg' },
      { name: 'Confluence Page', icon: '/icons/confluence.svg' },
      { name: 'Agile', icon: '/icons/agile.svg' },
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
