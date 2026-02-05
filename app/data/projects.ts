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
    title:
      'The Acquisitions: Full Cloud DevOps Pipeline (Docker, CI/CD, ALB, EC2, Monitoring, DevSecOps)',
    description:
      'A production-ready DevOps pipeline for a real-world Node/Express API. Features include full CI/CD with GitHub Actions, Docker containerization, automated deployments to AWS EC2, HTTPS routing via ALB, Prometheus monitoring, Grafana dashboards, and Trivy vulnerability scanning providing complete DevSecOps coverage from build to production.',
    tags: [
      'AWS ALB',
      'Docker',
      'GitHub Actions',
      'EC2 Deployment',
      'DevSecOps',
      'Trivy',
      'Prometheus',
      'Grafana',
      'Node.js',
      'PostgreSQL',
    ],
    github: 'https://github.com/gerardinhoo/TheAcquisitions',
    live: 'https://raw.githubusercontent.com/gerardinhoo/TheAcquisitions/refs/heads/main/images/theacquisitions-architecture.png',
  },
  {
    featured: true,
    title:
      'TaskForge: Cloud, DevOps & SRE Enablement (CloudFormation, Docker, Jenkins, ECR, EC2, CloudWatch)',
    description:
      'TaskForge is an end-to-end Cloud, DevOps, and SRE portfolio project demonstrating how to evolve an application from a local Dockerized setup into a production-ready AWS environment. The project showcases infrastructure provisioning with CloudFormation, containerized deployments using Docker and Docker Compose, CI pipelines with Jenkins, secure image storage in Amazon ECR, EC2-based runtime orchestration, and host-level observability using the CloudWatch Agent for system metrics.',
    tags: [
      'AWS CloudFormation',
      'EC2',
      'Amazon ECR',
      'Docker',
      'Docker Compose',
      'Jenkins',
      'CI Pipelines',
      'CloudWatch',
      'SRE',
      'Observability',
      'Infrastructure as Code',
    ],
    github: 'https://github.com/gerardinhoo/TaskForge',
    live: 'https://raw.githubusercontent.com/gerardinhoo/TaskForge/main/docs/screenshots/architecture-overview.png',
  },
  {
    title: 'GCP Infrastructure & Host Bootstrapping (Terraform + Ansible)',
    description:
      'End-to-end GCP infrastructure provisioning with Terraform (VPC, subnet, firewall rules, Compute Engine VM). Post-provisioning host configuration automated with Ansible for OS bootstrapping, package management, and Docker installation. Uses GCS remote backend and Terraform workspaces for isolated dev/prod environments. Includes architecture diagram and outputs.',
    tags: [
      'Terraform',
      'Ansible',
      'GCP',
      'Compute Engine',
      'Infrastructure as Code',
      'Configuration Management',
      'Docker',
      'GCS Backend',
      'Workspaces',
    ],
    github:
      'https://github.com/gerardinhoo/Devops-Journey/tree/main/gcp-terraform-infra',
    live: 'https://raw.githubusercontent.com/gerardinhoo/Devops-Journey/main/gcp-terraform-infra/assets/architecture_diagram.png',
  },
  {
    title: 'Dockerized Node API & CI/CD to EC2 + Monitoring',
    description:
      'Containerized a Node/Express API, built & pushed images, and deployed via GitHub Actions (SSH) to AWS EC2. Added production-style observability with Prometheus scraping /metrics and a Grafana dashboard. Includes architecture diagram and runbooks.',
    tags: [
      'Node.js',
      'Express',
      'Docker',
      'GitHub Actions',
      'EC2',
      'Prometheus',
      'Grafana',
    ],
    github:
      'https://github.com/gerardinhoo/Devops-Journey/tree/main/simple-node-api',
    live: 'https://raw.githubusercontent.com/gerardinhoo/Devops-Journey/main/simple-node-api/assets/devops-workflow.png',
  },
  {
    title: 'Position Description Management App (Frontend Collaboration)',
    description:
      'Contributed to the frontend of a web app designed to manage, update, and generate job descriptions across an organization (ASCO). Built UIs with Next JS and Tailwind CSS, implemented editable forms, profile templates, and integrated with backend APIs for dynamic data handling. Collaborated with another engineer to deliver the app to a client company, deployed via AWS Amplify.',
    tags: [
      'Next JS',
      'Tailwind CSS',
      'TypeScript',
      'AWS Amplify',
      'Team Collaboration',
    ],
    github:
      'https://github.com/Gambia-Fintech/theexm-applications/tree/main/apps/web/features',
    live: 'https://main.d22l2h3u9kpjbu.amplifyapp.com/',
  },
];
