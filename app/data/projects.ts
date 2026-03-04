export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    featured: true,
    title: 'The Acquisitions: AWS CI/CD & Cloud Deployment',
    description:
      'Automated end-to-end deployment of a containerized Node.js API to AWS — from GitHub push to production behind an ALB with HTTPS. Pipeline includes Docker builds, Trivy vulnerability scanning, EC2 deployment, and Prometheus/Grafana observability. Zero-downtime workflow with DevSecOps baked in.',
    tags: [
      'AWS',
      'CI/CD',
      'Docker',
      'EC2',
      'ALB',
      'GitHub Actions',
      'Prometheus',
      'Grafana',
      'DevSecOps',
    ],
    github: 'https://github.com/gerardinhoo/TheAcquisitions',
    live: 'https://raw.githubusercontent.com/gerardinhoo/TheAcquisitions/refs/heads/main/images/the-acquisitions-architecture.png',
  },

  {
    featured: true,
    title: 'TaskForge: AWS DevOps Platform with SRE Observability',
    description:
      'Built a full AWS DevOps platform — CloudFormation for infrastructure provisioning, Jenkins CI for automated Docker builds and tests, ECR for image storage, and EC2 for container deployment. CloudWatch Agent collects host-level metrics for real-time operational visibility across the deployment lifecycle.',
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
    title: 'GCP Infrastructure Automation (Terraform + Ansible)',
    description:
      'Provisioned a full GCP environment (VPC, subnets, firewalls, Compute Engine) with Terraform, using GCS remote state and workspaces for environment isolation. Ansible handles post-provision configuration — OS bootstrapping through Docker runtime setup. End-to-end infrastructure lifecycle automation.',
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
    title: 'Enterprise Job Platform: Cloud Delivery with AWS Amplify',
    description:
      'Delivered a production web application for enterprise position management under ExM Technologies. Owned cloud deployment via AWS Amplify — CI/CD integration, environment configuration, and hosting. Built frontend with Next.js, TypeScript, and Tailwind CSS with API integrations for real-time data.',
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
