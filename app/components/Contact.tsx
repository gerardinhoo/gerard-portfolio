import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6 text-[#F07050]'>
          Let's Connect
        </h2>
        <p className='text-lg mb-10'>
          I'm open to opportunities in DevOps, Full Stack, or Freelance work.
          Feel free to reach out — whether it's a project idea, a job offer, or
          just to say hi!
        </p>

        <div className='flex justify-center gap-6 flex-wrap'>
          {/* <a
            href='mailto:youremail@example.com'
            className='flex items-center gap-2 px-5 py-3 bg-[#F07050] text-white rounded hover:bg-orange-600 transition'
          >
            <MdEmail size={18} /> Email Me
          </a> */}

          <a
            href='https://github.com/yourusername'
            target='_blank'
            className='flex items-center gap-2 px-5 py-3 bg-black text-white rounded hover:bg-gray-800 transition'
          >
            <FaGithub size={18} /> GitHub
          </a>

          <a
            href='https://linkedin.com/in/yourusername'
            target='_blank'
            className='flex items-center gap-2 px-5 py-3 border border-[#F07050] text-[#F07050] rounded hover:bg-[#F07050] hover:text-white transition'
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
