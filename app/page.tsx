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
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
