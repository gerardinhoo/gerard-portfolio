import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className='relative bg-gradient-to-b from-white to-orange-50 py-20'>
        <div className='max-w-4xl mx-auto text-center'>
          <About />
        </div>
        {/* Fade-out effect */}
        <div className='absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none'></div>
      </section>
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
