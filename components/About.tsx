'use client';

import { motion } from 'motion/react';
import { Code, Cpu, Wind, BookOpen, Wrench } from 'lucide-react';

export default function About() {
  const interests = [
    { icon: <Code size={16} />, label: 'Systems Programming' },
    { icon: <Cpu size={16} />, label: 'CPU Architecture' },
    { icon: <Wind size={16} />, label: 'Distance Running' },
    { icon: <BookOpen size={16} />, label: 'CS Theory' },
    { icon: <Wrench size={16} />, label: 'Building from Scratch' },
  ];

  return (
    <section id="about" className="py-32 bg-[#EAE5D9] relative border-y border-[#D1CDC4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <span className="section-label">About Me</span>
            <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-[#1A1A1A] mb-8">
              Still figuring it out.
            </h2>

            <div className="font-sans text-lg md:text-xl text-[#4A4A4A] leading-relaxed space-y-6">
              <p>
                I&apos;m Nolan &mdash; a 15-year-old freshman from Minneapolis, Minnesota. I spend a good
                chunk of my free time learning about programming, building projects, and trying to understand
                how computers actually work at the lowest level.
              </p>
              <p>
                I got into coding out of curiosity a few years ago and have been genuinely hooked ever
                since. Right now I&apos;m working on a few projects I care a lot about &mdash; including an
                AI-powered news verification tool and my own programming language. Building a language from
                scratch has turned out to be one of the best ways I&apos;ve found to actually understand
                how software works.
              </p>
              <p>
                Outside of programming, I run cross country and track for my school. There&apos;s something
                about long-distance running that keeps me grounded &mdash; it&apos;s just you and the miles,
                and the only way forward is to keep moving. I try to bring that same mindset to coding.
              </p>
              <p>
                I still have an enormous amount to learn, and that&apos;s honestly the most exciting part.
                Every week there&apos;s a new concept, a new algorithm, or something I hadn&apos;t quite
                understood before. I&apos;m not sure exactly where all of this is heading yet, but
                I&apos;m enjoying the process of figuring it out.
              </p>
            </div>

            {/* Interests chips */}
            <div className="mt-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8E8A83] mb-4 block">
                Things I care about
              </span>
              <div className="flex flex-wrap gap-3">
                {interests.map((item) => (
                  <div
                    key={item.label}
                    className="chip"
                  >
                    <span className="text-[#FF4E00]">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="ink-stamp">Honor Roll</span>
              <span className="ink-stamp border-[#1A1A1A] text-[#1A1A1A]">Athlete</span>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Quick Facts */}
            <div className="bg-[#F5F2ED] p-8 editorial-border">
              <h3 className="font-mono text-sm uppercase tracking-widest text-[#FF4E00] mb-8 ruled-line pb-2">
                Quick Facts
              </h3>

              <ul className="space-y-5 font-mono text-sm">
                <li className="flex flex-col gap-1">
                  <span className="text-[#8E8A83] uppercase tracking-wider text-xs">Age</span>
                  <span className="text-[#1A1A1A] font-bold text-base">15</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[#8E8A83] uppercase tracking-wider text-xs">Location</span>
                  <span className="text-[#1A1A1A] font-bold text-base">Minneapolis, MN</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[#8E8A83] uppercase tracking-wider text-xs">Education</span>
                  <span className="text-[#1A1A1A] font-bold text-base">9th Grade &mdash; Freshman</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[#8E8A83] uppercase tracking-wider text-xs">Academic Standing</span>
                  <span className="text-[#1A1A1A] font-bold text-base">Honor Roll</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[#8E8A83] uppercase tracking-wider text-xs">Sports</span>
                  <span className="text-[#1A1A1A] font-bold text-base">Track & Cross Country</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[#8E8A83] uppercase tracking-wider text-xs">Primary Languages</span>
                  <span className="text-[#1A1A1A] font-bold text-base">JavaScript, Python</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[#8E8A83] uppercase tracking-wider text-xs">Currently Exploring</span>
                  <span className="text-[#1A1A1A] font-bold text-base">CPU Architecture</span>
                </li>
              </ul>
            </div>

            {/* Currently Learning */}
            <div className="bg-[#F5F2ED] p-8 editorial-border">
              <h3 className="font-mono text-sm uppercase tracking-widest text-[#FF4E00] mb-6 ruled-line pb-2">
                Currently Learning
              </h3>
              <ul className="space-y-3 font-mono text-sm text-[#4A4A4A]">
                {[
                  'Compiler design & lexer theory',
                  'CPU instruction set architectures',
                  'Transformer architecture basics',
                  'Low-level memory management',
                  'OS scheduling concepts',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#FF4E00] mt-0.5 flex-shrink-0">&rarr;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
