import { motion } from 'motion/react';
import { useTypewriter } from '@/hooks/use-typewriter';
import { ArrowDown } from 'lucide-react';
import HeroCanvas from './hero-canvas';
import TextReveal from './text-reveal';
import MagneticButton from './magnetic-button';

export default function Hero() {
  const words = ['Systems Programmer.', 'Language Designer.', 'Athlete.', 'Builder.'];
  const typedText = useTypewriter(words, 100, 50, 2000);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <HeroCanvas />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-4 h-8">
            <span className="font-mono text-sm md:text-base uppercase tracking-widest text-accent">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <h1 className="font-serif text-[15vw] md:text-[10vw] font-bold tracking-tighter text-ink mb-2 leading-[0.8] select-none mix-blend-difference dark:mix-blend-normal">
            <TextReveal text="NOLAN" className="block -ml-[4vw]" />
            <TextReveal text="ROBERT" className="block text-accent -mr-[6vw]" />
            <TextReveal text="IDLE" className="block -ml-[2vw]" />
          </h1>
          
          <p className="font-sans text-lg md:text-2xl text-muted max-w-2xl mx-auto mt-12 mb-12 text-balance">
            Writing code, designing systems, and running trails in Minneapolis. Exploring the elegant intersection of software logic and physical endurance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto">
            <MagneticButton className="bg-ink text-paper hover:bg-accent border-none !px-10 !py-5 font-bold">
              <a href="#projects">See My Work</a>
            </MagneticButton>
            <MagneticButton className="!px-10 !py-5 editorial-border font-bold">
              <a href="#contact">Get In Touch</a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-muted">Scroll</span>
        <ArrowDown size={16} className="text-muted animate-bounce" />
      </motion.div>
    </section>
  );
}
