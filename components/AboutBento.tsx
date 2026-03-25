"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Code, Wind, Cpu, Globe, ArrowRight } from "lucide-react";
import MagneticButton from "./magnetic-button";

const LiveClock = () => {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour12: false }));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="font-mono text-2xl font-bold tracking-widest text-accent invisible">00:00:00</div>;

  return <div className="font-mono text-2xl font-bold tracking-widest text-accent">{time}</div>;
}

export default function AboutBento() {
  return (
    <section id="about" className="py-32 bg-paper dark:bg-background border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <span className="section-label">Identity & Skills</span>
        <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-ink mb-12">
          The Variables.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[16rem]">
          {/* Main Bio - Large */}
          <motion.div 
             className="md:col-span-2 md:row-span-2 p-8 editorial-border bg-warm dark:bg-warm flex flex-col justify-between hover-lift group relative overflow-hidden"
             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }}
          >
            <div className="z-10 relative">
               <h3 className="font-serif text-4xl font-bold mb-4 text-ink">I'm Nolan.</h3>
               <p className="font-sans text-muted text-lg text-balance mb-4">
                 A 15-year-old systems programming enthusiast, builder, and language creator based in Minneapolis.
                 I build things from scratch to figure out how they work. My goal isn't just to write code, but to understand the machine underneath it all.
               </p>
            </div>
            <div className="flex gap-2 z-10 relative mt-auto">
               <span className="chip mix-blend-difference dark:mix-blend-normal text-white dark:text-ink border-white/20">TypeScript</span>
               <span className="chip mix-blend-difference dark:mix-blend-normal text-white dark:text-ink border-white/20">Python</span>
               <span className="chip mix-blend-difference dark:mix-blend-normal text-white dark:text-ink border-white/20">C</span>
            </div>
            <Code className="absolute -bottom-10 -right-10 text-border opacity-20 group-hover:scale-110 transition-transform duration-500" size={240} />
          </motion.div>

          {/* Location / Clock */}
          <motion.div 
            className="md:col-span-1 md:row-span-1 p-6 editorial-border bg-paper dark:bg-background flex flex-col items-center justify-center hover-lift relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.1 }}
          >
            <Globe className="absolute -left-6 -top-6 text-border opacity-20 group-hover:rotate-180 transition-transform duration-1000" size={120} />
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-2 z-10">Minneapolis, MN</h4>
            <div className="z-10"><LiveClock /></div>
            <div className="w-full h-[1px] bg-border my-4 z-10" />
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted z-10">Local Status</h4>
          </motion.div>

          {/* Running Stats */}
          <motion.div 
            className="md:col-span-1 md:row-span-1 p-6 editorial-border bg-accent text-white flex flex-col justify-between hover-lift relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }}
          >
             <h4 className="font-mono text-xs uppercase tracking-widest opacity-80 mb-2 z-10">Varsity Track</h4>
             <div className="mb-auto z-10">
                <span className="text-4xl font-serif font-bold">1600m</span>
                <p className="font-mono text-sm opacity-90 mt-1">Personal Best: <strong className="text-paper">4:45</strong></p>
             </div>
             <MagneticButton className="self-start text-xs border-paper/30 text-paper z-10 !px-4 !py-1 mt-auto group-hover:bg-white group-hover:text-accent">
                <a href="#athletics">Athletics <ArrowRight size={12} className="inline ml-1" /></a>
             </MagneticButton>
             <Wind className="absolute -bottom-4 -right-4 opacity-30 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" size={100} />
          </motion.div>

          {/* Code Quality SVG animation representing LOC */}
          <motion.div 
            className="md:col-span-1 md:row-span-1 p-6 editorial-border bg-paper dark:bg-background flex flex-col hover-lift relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.3 }}
          >
             <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-2 z-10">System Architecture</h4>
             <div className="flex-1 flex items-center justify-center z-10">
                 <svg className="w-full h-24" viewBox="0 0 100 40">
                    <motion.path
                        d="M 10 20 Q 30 10 50 20 T 90 20"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-accent"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                 </svg>
             </div>
          </motion.div>

          {/* Learning Focus */}
          <motion.div 
            className="md:col-span-1 md:row-span-1 p-6 editorial-border bg-paper dark:bg-background flex flex-col justify-center hover-lift relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.4 }}
          >
            <Cpu className="absolute -right-4 top-1/2 -translate-y-1/2 text-border opacity-20 group-hover:text-accent transition-colors duration-500" size={140} />
            <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-4 z-10">Currently Studying</h4>
            <ul className="space-y-2 font-mono text-sm text-ink z-10">
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> CPU Architecture</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Compiler Design</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Lexical Analysis</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
