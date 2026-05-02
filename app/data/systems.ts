import type { SystemCategory } from './projects';

export interface SystemCategoryMeta {
  slug: SystemCategory;
  title: string;
  /** One-line capability statement shown on the teaser card and category hero. */
  capability: string;
  /** Tools/technologies displayed as chips on the teaser card. */
  tools: string[];
  /** Bulleted capabilities shown on the dedicated category page. */
  capabilities: string[];
  /** Notes / lessons learned shown at the bottom of the category page. */
  notes: string[];
}

export const systemCategories: SystemCategoryMeta[] = [
  {
    slug: 'infrastructure',
    title: 'Infrastructure as Code',
    capability:
      'Provision AWS and GCP environments as versioned, reviewed code.',
    tools: ['Terraform', 'CloudFormation', 'Ansible'],
    capabilities: [
      'Reusable Terraform modules for VPCs, ASGs, ALBs, and Lambda APIs',
      'Remote state on S3 with DynamoDB locking; GCS backend on GCP',
      'Workspace-based environment isolation (dev / staging / prod)',
      'OIDC-based pipeline authentication \u2014 no static credentials',
      'Post-provision configuration with Ansible',
    ],
    notes: [
      'Module boundaries matter more than module count \u2014 group by lifecycle.',
      'Backward-compatible variable defaults make rollouts safer.',
    ],
  },
  {
    slug: 'containers',
    title: 'Containers & Orchestration',
    capability:
      'Build, ship, and run containerized workloads on ECS and Kubernetes.',
    tools: ['Docker', 'ECS Fargate', 'EKS', 'Kubernetes'],
    capabilities: [
      'Multi-stage Dockerfiles tuned for image size and cold-start',
      'ECS Fargate services behind ALBs with health checks',
      'Kubernetes workload manifests (Deployment, Service, Ingress, ConfigMap)',
      'EKS deployments with IRSA-based pod authentication',
      'Local Docker Compose environments that mirror production wiring',
    ],
    notes: [
      'Health checks are not optional \u2014 they are a contract.',
      'ARM vs AMD image architecture mismatches are a quiet source of failures.',
    ],
  },
  {
    slug: 'cicd',
    title: 'CI/CD',
    capability:
      'Automated pipelines from commit to production with security gates.',
    tools: ['GitHub Actions', 'Jenkins', 'TeamCity', 'Trivy'],
    capabilities: [
      'GitHub Actions pipelines: build, test, scan, deploy',
      'Container image scanning with Trivy as a hard gate',
      'Push to ECR, deploy to ECS Fargate / Lambda',
      'Jenkins pipelines integrated with Nexus and ECR',
      'Plan-on-PR / apply-on-merge for Terraform changes',
    ],
    notes: [
      'Secrets belong in OIDC + IAM \u2014 not in pipeline variables.',
      'Failed deploys should leave the system in a known state.',
    ],
  },
  {
    slug: 'observability',
    title: 'Reliability & Observability',
    capability:
      'Dashboards, alarms, log retention, and runbooks for production systems.',
    tools: ['CloudWatch', 'Prometheus', 'Grafana'],
    capabilities: [
      'CloudWatch dashboards covering Lambda + API Gateway health',
      'Alarms on error rate, p95 duration, and 5xx responses',
      'Prometheus + Grafana for application-level metrics',
      'Structured log retention policies tuned per service',
      'Documented production rollback runbooks',
    ],
    notes: [
      'Alarms without runbooks generate noise, not action.',
      'Log retention is a cost lever and a compliance lever \u2014 set it deliberately.',
    ],
  },
  {
    slug: 'cloud',
    title: 'Cloud Architecture',
    capability:
      'Design fault-tolerant, secure architectures on AWS (and GCP).',
    tools: ['AWS', 'VPC', 'IAM', 'Lambda', 'API Gateway'],
    capabilities: [
      'Multi-AZ VPCs with public / private subnet isolation',
      'Auto Scaling Groups behind Application Load Balancers',
      'Serverless APIs on Lambda + API Gateway + DynamoDB',
      'Least-privilege IAM roles for compute and CI/CD',
      'AWS Certified Solutions Architect \u2013 Associate',
    ],
    notes: [
      'Default to private subnets; expose intentionally.',
      'Cost shows up in NAT Gateways and idle compute \u2014 watch both.',
    ],
  },
  {
    slug: 'scripting',
    title: 'Scripting & Automation',
    capability:
      'Bash and Python automation for operational tasks and tooling.',
    tools: ['Bash', 'Python', 'Linux'],
    capabilities: [
      'Bash automations for build, deploy, and ops tasks',
      'Python scripts for data shaping and reporting',
      'Idempotent scripts with clear exit codes and logging',
      'Linux fundamentals: processes, networking, permissions',
    ],
    notes: [
      'A 30-line Bash script with `set -euo pipefail` beats a 300-line one without it.',
      'If a script ships to prod, it deserves tests.',
    ],
  },
];

export function findSystemCategory(
  slug: string,
): SystemCategoryMeta | undefined {
  return systemCategories.find((c) => c.slug === slug);
}

export function getAllSystemCategorySlugs(): SystemCategory[] {
  return systemCategories.map((c) => c.slug);
}
