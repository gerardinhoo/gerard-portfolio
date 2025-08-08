import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section
      id='projects'
      className='py-20 px-4 bg-white text-black font-big-shoulders'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold mb-10 text-center text-[#F07050]'>
          Projects
        </h2>

        {/* 🔧 DevOps & Cloud Projects */}
        <h3 className='text-2xl font-bold mb-6 text-left text-[#F07050]'>
          🔧 DevOps & Cloud Engineering
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
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
        <h3 className='text-2xl font-bold mb-6 text-left text-[#F07050]'>
          💻 Full Stack & Frontend Development
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
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
