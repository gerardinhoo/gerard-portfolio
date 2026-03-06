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
