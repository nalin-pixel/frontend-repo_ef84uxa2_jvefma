import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Product Designer',
    company: 'PixelCraft Studio',
    period: '2022 — Present',
    points: [
      'Led the design of a design system used across 7 products.',
      'Partnered with engineers to ship a performance‑focused UI overhaul.',
      'Introduced accessibility reviews and dark mode across apps.'
    ]
  },
  {
    role: 'Frontend Engineer',
    company: 'Nova Labs',
    period: '2019 — 2022',
    points: [
      'Built micro‑frontends with React and federated modules.',
      'Collaborated closely with design to iterate on complex flows.',
      'Mentored 5+ junior developers.'
    ]
  }
];

const TimelineItem = ({ item }) => (
  <li className="group relative pl-8">
    <span className="absolute left-0 top-1.5 rounded-full bg-red-500/20 p-1 ring-2 ring-red-500/30">
      <Briefcase className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
    </span>
    <div className="rounded-2xl border border-neutral-200 bg-white/70 p-5 backdrop-blur transition group-hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/60">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-base font-semibold text-neutral-900 dark:text-white">{item.role}</p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.period}</p>
      </div>
      <p className="mt-0.5 text-sm font-medium text-neutral-700 dark:text-neutral-300">{item.company}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
        {item.points.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ul>
    </div>
  </li>
);

const Experience = () => {
  return (
    <section id="experience" className="mx-auto mt-16 max-w-5xl px-6 sm:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl"
      >
        Experience
      </motion.h2>
      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
        }}
        className="mt-6 space-y-4"
      >
        {experiences.map((item, i) => (
          <motion.div key={i} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
            <TimelineItem item={item} />
          </motion.div>
        ))}
      </motion.ol>
    </section>
  );
};

export default Experience;
