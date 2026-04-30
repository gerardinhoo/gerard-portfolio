/**
 * High-level area of the portfolio a project appears in.
 * A project can belong to multiple domains (e.g. PitchPulse26 is both
 * flagship `work` and a full-stack `engineering` project).
 */
export type ProjectDomain = 'work' | 'systems' | 'engineering';

/**
 * Sub-category used by the Systems section to group infra/devops projects.
 * Matches the slugs rendered by `app/components/SystemsTeaser.tsx` and the
 * future `/systems/[category]` routes.
 */
export type SystemCategory =
  | 'infrastructure'
  | 'containers'
  | 'cicd'
  | 'observability'
  | 'cloud'
  | 'scripting';

export interface Project {
  /**
   * URL-safe identifier used for case study routes
   * (e.g. `/work/pitchpulse26`, `/engineering/pitchpulse26`).
   */
  slug: string;
  /**
   * Which top-level sections this project appears in. Projects can belong to
   * more than one (e.g. flagship full-stack projects appear in both `work`
   * and `engineering`).
   */
  domains: ProjectDomain[];
  /**
   * Optional Systems sub-category. Required when `'systems'` is in `domains`.
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
    domains: ['work', 'engineering'],
    flagship: true,
    featured: true,
    title: 'PitchPulse26: Full-Stack World Cup Prediction Platform',
    tagline:
      'A production prediction platform \u2014 React + Node on serverless AWS, infra-as-code, monitored, with a documented rollback path.',
    description:
      'End-to-end full-stack platform: React + TypeScript frontend on AWS Amplify, Node.js + Express API on Lambda + API Gateway, Prisma ORM on serverless PostgreSQL (Neon). Infrastructure provisioned with Terraform (Lambda, API Gateway, Amplify, SSM, CloudWatch). CI/CD via GitHub Actions with OIDC. CloudWatch dashboard, alarms on Lambda errors / API 5xx / Lambda duration, and a documented production rollback runbook.',
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
  },
  {
    slug: 'the-acquisitions',
    domains: ['work', 'systems'],
    category: 'cicd',
    featured: true,
    title: 'The Acquisitions: AWS CI/CD & Cloud Deployment',
    description:
      'Automated end-to-end deployment of a containerized Node.js API to AWS — GitHub Actions CI/CD pipeline with Trivy vulnerability scanning, Docker builds pushed to ECR, and ECS Fargate deployment behind an ALB. Prometheus/Grafana observability stack for application metrics. Terraform-provisioned infrastructure with security group chaining.',
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
    title: 'TaskForge: AWS DevOps Platform with SRE Observability',
    description:
      'Built a full AWS DevOps platform. CloudFormation for infrastructure provisioning, Jenkins CI for automated Docker builds and tests, ECR for image storage, and EC2 for container deployment. CloudWatch Agent collects host-level metrics for real-time operational visibility across the deployment lifecycle.',
    tags: [
      'AWS',
      'CloudFormation',
      'Jenkins',
      'Docker',
      'ECR',
      'EC2',
      'CI/CD',
      'CloudWatch',
      'SRE',
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
    title: 'AWS Infrastructure with Terraform — Multi-AZ, Auto Scaling, ALB',
    description:
      'Provisioned highly available AWS infrastructure with Terraform using reusable modules. Multi-AZ VPC with public/private subnets, Auto Scaling Group (2-4 instances) behind an ALB, NAT Gateways per AZ, and IAM roles for SSM access. CloudWatch alarms on CPU utilization drive auto scaling policies and notify an SNS topic for operational alerting. CI/CD via GitHub Actions with OIDC authentication, no static credentials.',
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
    domains: ['engineering', 'work'],
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

/** All slugs in the dataset (useful for `generateStaticParams`). */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Slugs limited to a specific domain (useful for per-domain dynamic routes). */
export function getProjectSlugsByDomain(domain: ProjectDomain): string[] {
  return getProjectsByDomain(domain).map((p) => p.slug);
}
