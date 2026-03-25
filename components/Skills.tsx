'use client';

import { motion } from 'motion/react';

export default function Skills() {
  const categories = [
    {
      title: 'Languages',
      note: 'Primary coding languages',
      skills: [
        { name: 'JavaScript', level: 88 },
        { name: 'HTML & CSS', level: 85 },
        { name: 'Python', level: 78 },
        { name: 'Bash / Shell', level: 50 },
      ],
    },
    {
      title: 'Web & Frameworks',
      note: 'Tools I use to build things',
      skills: [
        { name: 'React / Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 82 },
        { name: 'Node.js', level: 70 },
        { name: 'REST APIs', level: 65 },
      ],
    },
    {
      title: 'CS Concepts',
      note: 'Areas I study & explore',
      skills: [
        { name: 'AI / ML Concepts', level: 70 },
        { name: 'Systems Programming', level: 60 },
        { name: 'CPU Architecture', level: 52 },
        { name: 'Compiler Design', level: 45 },
      ],
    },
    {
      title: 'Tools & Workflow',
      note: 'Day-to-day tooling',
      skills: [
        { name: 'Git / GitHub', level: 78 },
        { name: 'VS Code', level: 90 },
        { name: 'Linux / Terminal', level: 62 },
        { name: 'Vercel / Deploy', level: 68 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-warm border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="section-label">Skills & Knowledge</span>
          <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-ink mb-4">
            What I Know
          </h2>
          <p className="font-sans text-lg text-muted max-w-2xl">
            A rough self-assessment of where I&apos;m at. Still actively learning across all of these areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.12 }}
              className="bg-paper p-8 md:p-10 editorial-border hover-lift"
            >
              <div className="mb-8 pb-4 border-b border-border">
                <h3 className="font-serif text-2xl font-bold text-ink">
                  {category.title}
                </h3>
                <p className="font-mono text-xs text-muted uppercase tracking-wider mt-1">
                  {category.note}
                </p>
              </div>

              <div className="space-y-7">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-mono text-sm uppercase tracking-widest text-ink font-bold">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-mono text-xs text-muted uppercase tracking-wider mt-10 text-center"
        >
          &#42; Percentages are self-assessed &mdash; rough approximations, not absolutes.
        </motion.p>
      </div>
    </section>
  );
}
