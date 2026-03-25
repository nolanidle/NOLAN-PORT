'use client';

import { motion } from 'motion/react';
import { Github, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper py-20 border-t-8 border-accent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">Contact</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-paper">
              Get In Touch
            </h2>
            <p className="font-sans text-lg text-[#D1CDC4] max-w-md mb-10">
              Feel free to reach out if you want to talk about code, running, or really anything else.
              I&apos;m always happy to chat.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:nolan@nolan.astroyds.com"
                className="flex items-center gap-4 font-mono text-sm uppercase tracking-widest hover:text-accent transition-colors group w-max link-underline"
              >
                <Mail size={20} className="text-muted group-hover:text-accent transition-colors flex-shrink-0" />
                nolan@nolan.astroyds.com
              </a>
              <a
                href="https://github.com/nolanidle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 font-mono text-sm uppercase tracking-widest hover:text-accent transition-colors group w-max link-underline"
              >
                <Github size={20} className="text-muted group-hover:text-accent transition-colors flex-shrink-0" />
                github.com/nolanidle
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Availability note */}
            <div className="mt-10 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Open to conversations & opportunities
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start md:items-end justify-between h-full"
          >
            <div className="text-left md:text-right mb-12 md:mb-0">
              <h3 className="font-serif text-2xl font-bold mb-3 text-paper">Nolan Idle</h3>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Maple Grove, Minnesota<br />
                Est. 2011
              </p>

              <div className="mt-8 flex flex-col md:items-end gap-2">
                <span className="font-mono text-xs text-muted uppercase tracking-wider">Currently working on</span>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {['BulletPROOF', 'RIFT', 'IDLE'].map((p) => (
                    <span key={p} className="font-mono text-xs border border-[#333] px-2 py-1 text-muted uppercase tracking-wider">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="font-mono text-[10px] uppercase tracking-widest text-muted text-left md:text-right mt-8 md:mt-0">
              <p>&copy; {new Date().getFullYear()} Nolan Idle. All rights reserved.</p>
              <p className="mt-2">Built with Next.js &amp; Tailwind CSS.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}
