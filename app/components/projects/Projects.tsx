import ProjectCard from '../ProjectCard';
import './projects.css';

export default function Projects() {
  return (
    <section
      id='projects'
      className='
        projects-section
        scroll-mt-24
        px-4 sm:px-6
        py-16 sm:py-20 md:py-24
      '
    >
      <div className='max-w-6xl mx-auto'>
        {/* Section title */}
        <h2
          className='
            projects-title
            text-[clamp(2rem,6vw,3rem)]
            text-center font-bold
            mb-10 md:mb-12
            text-[#F07050]
          '
        >
          Projects
        </h2>

        {/* 🔧 DevOps & Cloud Projects */}
        <h3
          className='
            text-xl sm:text-2xl font-bold
            mb-4 sm:mb-6
            text-left
            text-[#F07050]
            flex items-center gap-2
          '
        >
          <span aria-hidden>🔧</span>
          <span>DevOps & Cloud Engineering</span>
        </h3>

        <div
          className='
            grid grid-cols-1 md:grid-cols-2
            gap-6 sm:gap-8
            mb-12 md:mb-16
          '
        >
          <ProjectCard
            title='GCP Infrastructure Setup with Terraform'
            description='IaC on GCP: VPC, subnet, firewall, and Compute Engine VM provisioned with Terraform. Startup script installs Docker/Git. GCS remote backend + Terraform workspaces for isolated dev/prod. Includes architecture diagram & outputs.'
            tags={[
              'Terraform',
              'GCP',
              'Compute Engine',
              'GCS Backend',
              'Workspaces',
            ]}
            github='https://github.com/gerardinhoo/Devops-Journey/tree/main/gcp-terraform-infra'
            live='https://raw.githubusercontent.com/gerardinhoo/Devops-Journey/main/gcp-terraform-infra/assets/architecture-diagram.png'
          />
          <ProjectCard
            title='Dockerized Node API — CI/CD to EC2 + Monitoring'
            description='Containerized a Node/Express API, built & pushed images, and deployed via GitHub Actions (SSH) to AWS EC2. Added production-style observability with Prometheus scraping /metrics and a Grafana dashboard. Includes architecture diagram and runbooks.'
            tags={[
              'Node.js',
              'Express',
              'Docker',
              'GitHub Actions',
              'EC2',
              'Prometheus',
              'Grafana',
            ]}
            github='https://github.com/gerardinhoo/simple-node-api'
            live='https://raw.githubusercontent.com/gerardinhoo/Devops-Journey/main/simple-node-api/assets/devops-workflow.png'
          />
        </div>

        {/* 💻 Full Stack & Frontend Projects */}
        <h3
          className='
            text-xl sm:text-2xl font-bold
            mb-4 sm:mb-6
            text-left
            text-[#F07050]
            flex items-center gap-2
          '
        >
          <span aria-hidden>💻</span>
          <span>Full Stack & Frontend Development</span>
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
          <ProjectCard
            title='The Comfort Guardians HVAC Website'
            description='Freelance marketing site for an HVAC business built with Next.js, Tailwind CSS, and Framer Motion. Integrated Jobber for appointment booking, custom contact form with Nodemailer backend, and deployed to Vercel.'
            tags={[
              'Next.js',
              'Tailwind CSS',
              'Framer Motion',
              'TypeScript',
              'Vercel',
              'Nodemailer',
              'Jobber Integration',
              'SEO',
            ]}
            github='https://github.com/gerardinhoo/the-comfort-guardians'
            live='https://www.thecomfortsguardians.com/'
          />
          <ProjectCard
            title='Position Description Management App (Frontend Collaboration)'
            description='Contributed to the frontend of a web app designed to manage, update, and generate job descriptions across an organization (ASCO). Built UIs with Next JS and Tailwind CSS, implemented editable forms, profile templates, and integrated with backend APIs for dynamic data handling. Collaborated with another engineer to deliver the app to a client company, deployed via AWS Amplify.'
            tags={[
              'Next JS',
              'Tailwind CSS',
              'TypeScript',
              'AWS Amplify',
              'Team Collaboration',
            ]}
            github='https://github.com/Gambia-Fintech/theexm-applications/tree/main/apps/web/features'
            live='https://main.d22l2h3u9kpjbu.amplifyapp.com/'
          />
        </div>
      </div>
    </section>
  );
}
