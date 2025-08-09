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
            title='Terraform + GCP + Docker CI/CD'
            description='Provisioned infrastructure with Terraform, deployed Node.js app using Docker and GitHub Actions, with GCP monitoring.'
            tags={['Terraform', 'Docker', 'GCP', 'GitHub Actions']}
            github='https://github.com/yourusername/terraform-gcp-docker'
            live='https://live-demo-link.com'
          />
          <ProjectCard
            title='Spring Boot + Maven + Nexus'
            description='Java/Maven project built with CI pipeline, artifact pushed to Nexus, deployed to EC2 instance.'
            tags={['Java', 'Maven', 'Nexus', 'EC2']}
            github='https://github.com/yourusername/springboot-nexus'
          />
          <ProjectCard
            title='Prometheus + Grafana Monitoring'
            description='Integrated Prometheus and Grafana to monitor a Dockerized Node.js app running on a remote VM.'
            tags={['Prometheus', 'Grafana', 'Docker', 'Monitoring']}
            github='https://github.com/yourusername/monitoring-stack'
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
            title='PitchVibe (MERN App)'
            description='Full-stack soccer app built with React, Node, Express, and MongoDB. Dockerized with CI/CD and deployment to GCP.'
            tags={['React', 'Node.js', 'MongoDB', 'Docker']}
            github='https://github.com/yourusername/pitchvibe'
            live='https://pitchvibe.com'
          />
          <ProjectCard
            title='Comfort Guardians HVAC Website'
            description='Freelance site for HVAC business using Next.js, Tailwind CSS, SEO optimization, and Jobber integration. Deployed to Vercel.'
            tags={['Next.js', 'Tailwind CSS', 'SEO', 'Jobber']}
            github='https://github.com/yourusername/hvac-site'
            live='https://comfortguardians.com'
          />
        </div>
      </div>
    </section>
  );
}
