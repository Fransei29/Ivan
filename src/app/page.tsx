import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Stack from '@/components/Stack/Stack';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
