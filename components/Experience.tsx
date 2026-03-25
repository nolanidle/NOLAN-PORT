'use client';

import { motion } from 'motion/react';

type TimelineEvent = {
  title: string;
  detail: string;
  tag?: string;
};

type TimelineBlock = {
  period: string;
  highlight: boolean;
  events: TimelineEvent[];
};

export default function Experience() {
  const timeline: TimelineBlock[] = [
    {
      period: '2026 — Now',
      highlight: true,
      events: [
        { title: 'Sophomore Year', detail: 'Minneapolis, MN — Honor Roll', tag: 'Academic' },
        { title: 'BulletPROOF', detail: 'Approaching beta launch', tag: 'Project' },
        { title: 'RIFT & IDLE', detail: 'Active development continues', tag: 'Project' },
      ],
    },
    {
      period: '2025',
      highlight: false,
      events: [
        { title: 'Started RIFT', detail: 'Custom programming language begun', tag: 'Project' },
        { title: 'CPU Architecture Deep Dive', detail: 'Started exploring low-level computing', tag: 'Learning' },
        { title: 'IDLE Concept Born', detail: 'Began researching CPU-native AI', tag: 'Research' },
      ],
    },
    {
      period: '2024',
      highlight: false,
      events: [
        { title: 'BulletPROOF Started', detail: 'First major AI-powered project', tag: 'Project' },
        { title: 'Freshman Year', detail: 'Honor Roll — first year of high school', tag: 'Academic' },
        { title: 'JavaScript Deep Dive', detail: 'Moved beyond basics into real projects', tag: 'Learning' },
      ],
    },
    {
      period: 'Before',
      highlight: false,
      events: [
        { title: 'Self-Taught Foundations', detail: 'HTML, CSS, JavaScript, Python', tag: 'Learning' },
        { title: 'First Projects', detail: 'Small tools and experiments', tag: 'Project' },
        { title: 'Got Curious', detail: 'Started wondering how things work under the hood', tag: 'Learning' },
      ],
    },
  ];

  const tagColors: Record<string, string> = {
    Academic: 'bg-[#1A1A1A] text-[#F5F2ED]',
    Athletic: 'bg-[#FF4E00] text-white',
    Project: 'bg-[#EAE5D9] text-[#1A1A1A] border border-[#D1CDC4]',
    Learning: 'bg-[#F5F2ED] text-[#8E8A83] border border-[#D1CDC4]',
    Research: 'bg-[#F5F2ED] text-[#8E8A83] border border-[#D1CDC4]',
  };

  return (
    <section id="experience" className="py-32 bg-[#F5F2ED] pattern-dots">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="section-label">Background</span>
          <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-[#1A1A1A] mb-4">
            The Journey So Far
          </h2>
          <p className="font-sans text-lg text-[#4A4A4A] max-w-2xl">
            I&apos;m still early in the story. Here&apos;s what the path has looked like so far.
          </p>
        </motion.div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((block, blockIndex) => (
            <motion.div
              key={block.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: blockIndex * 0.12 }}
              className={`relative p-8 editorial-border hover-lift ${
                block.highlight
                  ? 'bg-[#1A1A1A] text-[#F5F2ED]'
                  : 'bg-white text-[#1A1A1A]'
              }`}
            >
              {/* Period label */}
              <div
                className={`font-mono text-xs uppercase tracking-widest mb-6 pb-4 border-b font-bold ${
                  block.highlight ? 'text-[#FF4E00] border-[#333]' : 'text-[#FF4E00] border-[#D1CDC4]'
                }`}
              >
                {block.highlight && (
                  <span className="relative inline-flex h-2 w-2 mr-2 align-middle">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4E00] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4E00]" />
                  </span>
                )}
                {block.period}
              </div>

              {/* Events */}
              <ul className="space-y-6">
                {block.events.map((event, i) => (
                  <li key={i} className="flex flex-col gap-1.5">
                    <span
                      className={`font-sans text-sm font-semibold leading-snug ${
                        block.highlight ? 'text-[#F5F2ED]' : 'text-[#1A1A1A]'
                      }`}
                    >
                      {event.title}
                    </span>
                    <span className="font-mono text-xs text-[#8E8A83] leading-relaxed">
                      {event.detail}
                    </span>
                    {event.tag && (
                      <span
                        className={`self-start font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm ${
                          tagColors[event.tag] ?? 'bg-[#EAE5D9] text-[#1A1A1A]'
                        }`}
                      >
                        {event.tag}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-mono text-xs text-[#8E8A83] uppercase tracking-wider mt-10 text-center"
        >
          More chapters being written every day.
        </motion.p>
      </div>
    </section>
  );
}
