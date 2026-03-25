'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, Code, Cpu, ShieldCheck } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 'bulletproof',
      title: 'BulletPROOF',
      status: 'ALPHA → approaching Beta',
      statusColor: 'bg-accent',
      link: 'https://bp.astroyds.com',
      description: "An AI-driven tool that analyzes news articles for authenticity and reliability. Currently in alpha with beta testing imminent. It's the project I've put the most time and energy into, and I'm genuinely proud of how far it's come.",
      tags: ['AI/ML', 'JavaScript', 'Python', 'Verification Engine'],
      icon: <ShieldCheck size={48} className="text-accent" />,
      featured: true,
    },
    {
      id: 'rift',
      title: 'RIFT',
      status: 'IN DEVELOPMENT',
      statusColor: 'bg-[#8E8A83]',
      description: "A programming language I've been building from scratch. It's been one of the most challenging and educational things I've ever done — writing a lexer, parser, and compiler forces you to really understand how software works.",
      tags: ['Systems Programming', 'Compilers', 'Low-level'],
      icon: <Code size={32} className="text-ink" />,
      featured: false,
    },
    {
      id: 'idle',
      title: 'IDLE',
      status: 'IN DEVELOPMENT',
      statusColor: 'bg-[#8E8A83]',
      description: "An exploration into running AI inference efficiently on traditional CPUs — without needing a GPU. More research project than finished product right now, but it's an area I find genuinely fascinating.",
      tags: ['CPU Architecture', 'AI Inference', 'Research'],
      icon: <Cpu size={32} className="text-ink" />,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="section-label">Projects</span>
          <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-ink mb-4">
            What I&apos;m Building
          </h2>
          <p className="font-mono text-sm uppercase tracking-widest text-muted ruled-line pb-2 inline-block">
            Selected Works & Research
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`editorial-border bg-warm p-8 md:p-12 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#1A1A1A] ${
                project.featured ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    {project.icon}
                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-ink">
                      {project.title}
                    </h3>
                  </div>
                  
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-paper border border-border rounded-full hover:bg-accent hover:text-white hover:border-accent transition-colors"
                    >
                      <ArrowUpRight size={24} />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="relative flex h-3 w-3">
                    {project.status.includes('ALPHA') && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    )}
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${project.statusColor}`}></span>
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest font-bold text-ink">
                    {project.status}
                  </span>
                </div>

                <p className="font-sans text-lg text-muted mb-8 leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-warm text-ink font-mono text-xs uppercase tracking-wider border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
