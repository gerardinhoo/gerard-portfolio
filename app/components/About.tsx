export default function About() {
  return (
    <section
      id='about'
      className='py-20 px-4 bg-[#FDF3ED] dark:bg-[#1a1a1a] text-black dark:text-white'
    >
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6 text-[#F07050]'>About Me</h2>
        <p className='text-lg leading-relaxed'>
          I'm a DevOps and Software Engineer with hands-on experience building
          and deploying cloud-native applications using modern tools like
          Terraform, Docker, GitHub Actions, and Kubernetes. <br />
          <br />I also build full-stack apps using React, Node.js, MongoDB, and
          Next.js. Whether it’s setting up CI/CD pipelines, optimizing
          infrastructure, or creating scalable UIs I bring ideas to life with
          code and reliability.
        </p>
      </div>
    </section>
  );
}
