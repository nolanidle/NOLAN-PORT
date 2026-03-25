'use client';

import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-32 bg-[#F5F2ED]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div>
            <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-[#1A1A1A] mb-4">
              Curriculum Vitae
            </h2>
            <p className="font-mono text-sm uppercase tracking-widest text-[#8E8A83] ruled-line pb-2 inline-block">
              Nolan Idle
            </p>
          </div>
          
          <button className="flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-[#F5F2ED] font-mono text-sm uppercase tracking-widest hover:bg-[#FF4E00] transition-colors editorial-border group">
            <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
            Download PDF
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-16 editorial-border shadow-[12px_12px_0px_0px_#1A1A1A]"
        >
          {/* Header */}
          <div className="border-b-4 border-[#1A1A1A] pb-8 mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#1A1A1A] uppercase tracking-tighter mb-2">
                Nolan Idle
              </h1>
              <p className="font-mono text-sm uppercase tracking-widest text-[#8E8A83]">
                Developer • Language Designer
              </p>
            </div>
            <div className="font-mono text-xs text-[#4A4A4A] text-right space-y-1">
              <p>Maple Grove, MN</p>
              <p>nolan@nolan.astroyds.com</p>
              <p>github.com/nolanidle</p>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-12">
            <h3 className="font-mono text-sm uppercase tracking-widest text-[#1A1A1A] font-bold mb-4 border-b border-[#D1CDC4] pb-2">
              Summary
            </h3>
          <p className="font-sans text-base text-[#4A4A4A] leading-relaxed">
            Self-taught software developer, 15 years old, with a focus on JavaScript, Python, and systems programming. Creator of BulletPROOF, an AI-powered news verification engine currently in alpha. I enjoy exploring low-level computing, CPU architecture, and building things from scratch to understand how they work. Currently balancing high school academics (3.96 Unweighted GPA) and independent software development. The problem-solving mindset I've developed directly applies to fast-paced professional environments, customer support, and logic-based operations.
          </p>
          </div>

          {/* Experience / Projects */}
          <div className="mb-12">
            <h3 className="font-mono text-sm uppercase tracking-widest text-[#1A1A1A] font-bold mb-6 border-b border-[#D1CDC4] pb-2">
              Selected Projects
            </h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-serif text-2xl font-bold text-[#1A1A1A]">BulletPROOF</h4>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#FF4E00] font-bold">Alpha / Approaching Beta</span>
                </div>
                <p className="font-mono text-xs text-[#8E8A83] mb-3">AI-Powered News Verification Engine • bp.astroyds.com</p>
                <ul className="list-disc list-inside font-sans text-sm text-[#4A4A4A] space-y-2">
                  <li>Architected and built an AI-driven tool to analyze the authenticity and reliability of news articles.</li>
                  <li>Implemented verification pipelines drawing on machine learning concepts.</li>
                  <li>Currently managing alpha testing and preparing for a public beta launch.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-serif text-2xl font-bold text-[#1A1A1A]">RIFT</h4>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#8E8A83] font-bold">In Development</span>
                </div>
                <p className="font-mono text-xs text-[#8E8A83] mb-3">Custom Programming Language</p>
                <ul className="list-disc list-inside font-sans text-sm text-[#4A4A4A] space-y-2">
                  <li>Designing and building a programming language from scratch as a way to deeply understand how software works.</li>
                  <li>Writing a lexer, parser, and compiler architecture from the ground up.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-serif text-2xl font-bold text-[#1A1A1A]">IDLE</h4>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#8E8A83] font-bold">In Development</span>
                </div>
                <p className="font-mono text-xs text-[#8E8A83] mb-3">CPU-Based AI Alternative</p>
                <ul className="list-disc list-inside font-sans text-sm text-[#4A4A4A] space-y-2">
                  <li>Researching how AI inference can run efficiently on traditional CPUs without GPU acceleration.</li>
                  <li>Exploring low-level optimization approaches for standard CPU architectures.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-[#1A1A1A] font-bold mb-4 border-b border-[#D1CDC4] pb-2">
                Education
              </h3>
              <div>
                <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">Maple Grove Senior High School</h4>
                <p className="font-mono text-xs text-[#8E8A83] mb-2">Maple Grove, MN • 9th Grade (Freshman)</p>
                <p className="font-sans text-sm text-[#4A4A4A] font-bold">3.96 Unweighted GPA</p>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-[#1A1A1A] font-bold mb-4 border-b border-[#D1CDC4] pb-2">
                Activities
              </h3>
              <ul className="list-disc list-inside font-sans text-sm text-[#4A4A4A] space-y-2">
                <li>Self-directed Computer Science Research</li>
              </ul>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
