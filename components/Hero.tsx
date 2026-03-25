'use client';

import { motion } from 'motion/react';
import { useTypewriter } from '@/hooks/use-typewriter';
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const words = ['Developer.', 'Builder.', 'Language Designer.', 'Athlete.', 'Learner.'];
  const typedText = useTypewriter(words, 100, 50, 2000);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(26, 26, 26, 0.1)';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 h-8">
            <span className="font-mono text-sm md:text-base uppercase tracking-widest text-[#FF4E00]">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[#1A1A1A] mb-6 leading-[0.9]">
            Nolan<br className="md:hidden" /> Robert<br className="md:hidden" /> Idle
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-[#4A4A4A] max-w-2xl mx-auto mb-12 text-balance">
            Writing code, designing systems, and running trails in Minneapolis. Still learning — always curious.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#projects"
              className="px-8 py-4 bg-[#1A1A1A] text-[#F5F2ED] font-mono text-sm uppercase tracking-widest hover:bg-[#FF4E00] transition-colors editorial-border"
            >
              See My Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent text-[#1A1A1A] font-mono text-sm uppercase tracking-widest border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F2ED] transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-[#8E8A83]">Scroll</span>
        <ArrowDown size={16} className="text-[#8E8A83] animate-bounce" />
      </motion.div>
    </section>
  );
}
