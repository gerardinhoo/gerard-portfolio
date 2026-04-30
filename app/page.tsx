import Hero from './components/Hero';
import Flagship from './components/Flagship';
import Projects from './components/projects/Projects';
import SystemsTeaser from './components/SystemsTeaser';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';

export default function Home() {
  return (
    <>
      <Hero />
      <Flagship />
      <Projects />
      <SystemsTeaser />
      <About />
      <Resume />
      <Contact />
    </>
  );
}
