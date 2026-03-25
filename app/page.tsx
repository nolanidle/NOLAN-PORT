import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutBento from '@/components/AboutBento';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Resume from '@/components/Resume';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink transition-colors duration-300">
      <Navbar />
      <Hero />
      <AboutBento />
      <Projects />
      <Experience />
      <Resume />
      <Footer />
    </main>
  );
}
