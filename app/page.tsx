import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import SkipLink from './components/SkipLink';

export default function Home() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id='main-content'>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
