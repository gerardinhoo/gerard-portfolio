import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Flagship from './components/Flagship';
import Projects from './components/projects/Projects';
import SystemsTeaser from './components/SystemsTeaser';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import SkipLink from './components/SkipLink';

export default function Home() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id='main-content'>
        <Hero />
        <Flagship />
        <Projects />
        <SystemsTeaser />
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
