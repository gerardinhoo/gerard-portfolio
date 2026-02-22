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
    title: 'The Acquisitions: End-to-End AWS CI/CD & Cloud Deployment Architecture',
    description:
      'Designed and implemented a production-ready cloud deployment architecture for a containerized Node.js API, demonstrating how to automate application delivery from code commit to secure, monitored production on AWS. Built a complete CI/CD pipeline using GitHub Actions and Docker, enabling automated builds, vulnerability scanning, and deployments to EC2 behind an Application Load Balancer with HTTPS routing. Implemented full observability using Prometheus metrics collection and Grafana dashboards, and integrated DevSecOps practices with Trivy image scanning to ensure secure, reliable releases.',
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
    title: 'TaskForge: End-to-End AWS DevOps Platform & SRE Observability Architecture',
    description:
      'Designed and implemented a production-style AWS DevOps platform demonstrating how to evolve a containerized application from local development to a fully automated, observable cloud environment. Provisioned infrastructure using CloudFormation, built CI pipelines with Jenkins for automated Docker image builds and testing, and deployed containers to EC2 with secure storage in Amazon ECR. Implemented SRE-focused observability using the CloudWatch Agent to collect host-level metrics, enabling real-time monitoring and operational visibility across the deployment lifecycle.',
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
      'Infrastructure as Code',
    ],
    github: 'https://github.com/gerardinhoo/TaskForge',
    live: 'https://raw.githubusercontent.com/gerardinhoo/TaskForge/main/docs/screenshots/architecture-overview.png',
  },

  {
  title: 'GCP Infrastructure Automation Platform (Terraform + Ansible)',
  description:
    'Designed and automated a production-style GCP infrastructure environment using Infrastructure as Code and configuration management principles. Provisioned core cloud resources with Terraform, including VPC networking, subnets, firewall rules, and Compute Engine instances. Implemented remote state management using a GCS backend with environment isolation via Terraform workspaces. Automated post-provisioning server configuration using Ansible for OS bootstrapping, package installation, and Docker setup, demonstrating end-to-end cloud infrastructure lifecycle automation from provisioning to runtime readiness.',
  tags: [
    'GCP',
    'Terraform',
    'Ansible',
    'Infrastructure as Code',
    'Configuration Management',
    'Compute Engine',
    'VPC Networking',
    'GCS Backend',
    'Workspaces',
    'Docker Automation',
  ],
  github:
    'https://github.com/gerardinhoo/Devops-Journey/tree/main/gcp-terraform-infra',
  live:
    'https://raw.githubusercontent.com/gerardinhoo/Devops-Journey/main/gcp-terraform-infra/assets/architecture_diagram.png',
  },

  {
  title: 'Production Deployment Pipeline: Dockerized API with CI/CD & Monitoring',
  description:
    'Designed and implemented an end-to-end deployment pipeline for a containerized Node/Express API, demonstrating real-world production release workflows. Built and optimized Docker images, automated CI/CD using GitHub Actions, and deployed containers to AWS EC2 via secure SSH-based automation. Implemented application observability using Prometheus metrics scraping and Grafana dashboards to monitor runtime health and performance. Includes architecture diagrams, deployment workflows, and operational runbooks.',
  tags: [
    'AWS EC2',
    'Docker',
    'GitHub Actions',
    'CI/CD Automation',
    'Node.js',
    'Prometheus',
    'Grafana',
    'Monitoring',
    'Deployment Pipelines',
  ],
  github:
    'https://github.com/gerardinhoo/Devops-Journey/tree/main/simple-node-api',
  live:
    'https://raw.githubusercontent.com/gerardinhoo/Devops-Journey/main/simple-node-api/assets/devops-workflow.png',
  },

  {
  title: 'Client Delivery: Enterprise Job Management Platform (Frontend & Cloud Collaboration)',
  description:
    'Contributed to the development and delivery of a production web application used to manage and generate position descriptions across an organization. Built responsive UI components using Next.js, TypeScript, and Tailwind CSS, implementing dynamic forms, reusable templates, and API integrations for real-time data handling. Collaborated within an engineering team under ExM Technologies to deliver the application to a client environment and supported cloud deployment workflows using AWS Amplify for hosting, CI/CD integration, and environment configuration.',
  tags: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'AWS Amplify',
    'Frontend Engineering',
    'API Integration',
    'Client Delivery',
  ],
  github:
    'https://github.com/Gambia-Fintech/theexm-applications/tree/main/apps/web/features',
  live: 'https://main.d22l2h3u9kpjbu.amplifyapp.com/',
  },

];
