import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
