/**
 * High-level area of the portfolio a project appears in.
 * A project can belong to multiple domains (e.g. a flagship project may be
 * featured under `work` and surfaced again under one or more `systems`
 * categories).
 */
export type ProjectDomain = 'work' | 'systems';

/**
 * Sub-category used by the Systems section to group infra/devops projects.
 * Matches the slugs rendered by `app/components/SystemsTeaser.tsx` and the
 * future `/systems/[category]` routes.
 */
export type SystemCategory =
  | 'infrastructure'
  | 'cicd'
  | 'observability'
  | 'cloud';

export interface Project {
  /**
   * URL-safe identifier used for case study routes (e.g. `/work/pitchpulse26`).
   */
  slug: string;
  /**
   * Which top-level sections this project appears in. Projects can belong to
   * more than one (e.g. a featured project that also surfaces under Systems).
   */
  domains: ProjectDomain[];
  /**
   * Optional primary Systems sub-category for project grouping.
   * Dedicated Systems pages can also reference projects across categories.
   */
  category?: SystemCategory;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  featured?: boolean;
  /**
   * Flagship projects are rendered in a dedicated wide hero card on the
   * homepage and are excluded from the standard featured grid.
   */
  flagship?: boolean;
  /**
   * Optional one-line tagline used on the flagship hero card.
   */
  tagline?: string;
}

export const projects: Project[] = [
  {
    slug: 'pitchpulse26',
    domains: ['work'],
    flagship: true,
    featured: true,
    title: 'PitchPulse26: Full-Stack World Cup Prediction Platform',
    tagline:
      'A full-stack World Cup prediction platform built on serverless AWS with Terraform, CI/CD, CloudWatch monitoring, and a documented rollback path.',
    description:
      'Built an end-to-end prediction platform for World Cup 2026 group-stage matches. The frontend runs on AWS Amplify, the backend is an Express API on Lambda behind API Gateway, and Prisma + Neon PostgreSQL power match, prediction, standings, and leaderboard data. Infrastructure is managed with Terraform, DNS is handled through Route 53 for a Namecheap-purchased domain, deployments run through GitHub Actions, and operations are supported by CloudWatch dashboards, alarms, and a documented rollback runbook.',
    tags: [
      'React',
      'TypeScript',
      'Node.js',
      'Prisma',
      'PostgreSQL (Neon)',
      'AWS Lambda',
      'API Gateway',
      'Amplify',
      'Terraform',
      'GitHub Actions',
      'CloudWatch',
      'Rollback',
    ],
    github: 'https://github.com/gerardinhoo/PitchPulse26',
    live: 'https://www.pitchpulse26.com/',
  },
  {
    slug: 'the-acquisitions',
    domains: ['work', 'systems'],
    category: 'cicd',
    featured: true,
    title: 'The Acquisitions: Container Delivery on AWS',
    description:
      'Built an end-to-end delivery pipeline for a containerized Node.js API on AWS. GitHub Actions runs build, test, image scanning, and deployment; Docker images are pushed to ECR; ECS Fargate serves the application behind an ALB; and Terraform provisions the supporting infrastructure. Prometheus and Grafana add runtime visibility on top of the deployment flow.',
    tags: [
      'AWS',
      'CI/CD',
      'Docker',
      'ECS Fargate',
      'ALB',
      'ECR',
      'GitHub Actions',
      'Terraform',
      'Prometheus',
      'Grafana',
      'DevSecOps',
    ],
    github: 'https://github.com/gerardinhoo/TheAcquisitions',
    live: 'https://raw.githubusercontent.com/gerardinhoo/TheAcquisitions/refs/heads/main/images/the-acquisitions-architecture.png',
  },

  {
    slug: 'taskforge',
    domains: ['work', 'systems'],
    category: 'cicd',
    featured: true,
    title: 'TaskForge: AWS Delivery Platform with Observability',
    description:
      'Built a delivery platform around Jenkins, Docker, ECR, and EC2 to automate how application changes move into AWS. CloudFormation provisions the base infrastructure, Jenkins handles build and deployment stages, and CloudWatch Agent collects host-level metrics so runtime health is visible after release, not just during the pipeline run.',
    tags: [
      'AWS',
      'CloudFormation',
      'Jenkins',
      'Docker',
      'ECR',
      'EC2',
      'CI/CD',
      'CloudWatch',
      'Observability',
    ],
    github: 'https://github.com/gerardinhoo/TaskForge',
    live: 'https://raw.githubusercontent.com/gerardinhoo/TaskForge/main/docs/screenshots/architecture-overview.png',
  },

  {
    slug: 'terraform-aws-production-vpc',
    domains: ['work', 'systems'],
    category: 'infrastructure',
    featured: true,
    title: 'Terraform AWS Platform: Multi-AZ, ALB, Auto Scaling',
    description:
      'Provisioned a reusable AWS infrastructure baseline with Terraform for highly available application hosting. The stack includes a multi-AZ VPC, public and private subnets, an ALB, an Auto Scaling Group, NAT gateways, IAM roles for SSM access, and CloudWatch alarms tied to scaling behavior. GitHub Actions handles CI/CD for infrastructure changes without static cloud credentials.',
    tags: [
      'AWS',
      'Terraform',
      'VPC',
      'ALB',
      'Auto Scaling',
      'CloudWatch',
      'SNS',
      'IAM',
      'NAT Gateway',
      'GitHub Actions',
      'High Availability',
    ],
    github: 'https://github.com/gerardinhoo/terraform-aws-production-vpc',
    live: 'https://raw.githubusercontent.com/gerardinhoo/terraform-aws-production-vpc/main/docs/architecture.png',
  },

  {
    slug: 'gcp-terraform-infra',
    domains: ['systems'],
    category: 'infrastructure',
    title: 'GCP Infrastructure Automation (Terraform + Ansible)',
    description:
      'Provisioned a full GCP environment (VPC, subnets, firewalls, Compute Engine) with Terraform, using GCS remote state and workspaces for environment isolation. Ansible handles post-provision configuration, OS bootstrapping through Docker runtime setup. End-to-end infrastructure lifecycle automation.',
    tags: [
      'GCP',
      'Terraform',
      'Ansible',
      'VPC Networking',
      'Compute Engine',
      'GCS Backend',
      'Workspaces',
      'Configuration Management',
    ],
    github:
      'https://github.com/gerardinhoo/Devops-Journey/tree/main/gcp-terraform-infra',
    live:
      'https://raw.githubusercontent.com/gerardinhoo/Devops-Journey/main/gcp-terraform-infra/assets/architecture_diagram.png',
  },


  {
    slug: 'theexm-applications',
    domains: ['work'],
    title: 'Enterprise Job Platform: Cloud Delivery with AWS Amplify',
    description:
      'Delivered a production web application for enterprise position management under ExM Technologies. Owned cloud deployment via AWS Amplify. CI/CD integration, environment configuration, and hosting. Built frontend with Next.js, TypeScript, and Tailwind CSS with API integrations for real-time data.',
    tags: [
      'AWS Amplify',
      'CI/CD',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'API Integration',
      'Cloud Hosting',
    ],
    github:
      'https://github.com/Gambia-Fintech/theexm-applications/tree/main/apps/web/features',
    live: 'https://main.d22l2h3u9kpjbu.amplifyapp.com/',
  },

];

/** Find a project by its slug. Returns `undefined` if no match. */
export function findProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Filter projects that belong to a given top-level domain. */
export function getProjectsByDomain(domain: ProjectDomain): Project[] {
  return projects.filter((p) => p.domains.includes(domain));
}

/** Filter projects that belong to a given Systems sub-category. */
export function getProjectsByCategory(category: SystemCategory): Project[] {
  return projects.filter(
    (p) => p.domains.includes('systems') && p.category === category,
  );
}

/** Resolve a curated list of project slugs in display order. */
export function getProjectsBySlugs(slugs: string[]): Project[] {
  return slugs
    .map((slug) => findProjectBySlug(slug))
    .filter((project): project is Project => Boolean(project));
}

/** All slugs in the dataset (useful for `generateStaticParams`). */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Slugs limited to a specific domain (useful for per-domain dynamic routes). */
export function getProjectSlugsByDomain(domain: ProjectDomain): string[] {
  return getProjectsByDomain(domain).map((p) => p.slug);
}
