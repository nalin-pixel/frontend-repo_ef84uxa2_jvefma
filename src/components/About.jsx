import React from 'react';
import { motion } from 'framer-motion';

const Fact = ({ label, value }) => (
  <div className="rounded-xl border border-neutral-200 bg-white/70 p-4 text-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60">
    <p className="text-neutral-500 dark:text-neutral-400">{label}</p>
    <p className="mt-1 text-base font-semibold text-neutral-900 dark:text-white">{value}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative mx-auto mt-16 max-w-5xl px-6 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-neutral-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60"
      >
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">About Me</h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              I combine design thinking with pragmatic engineering to build interfaces that feel effortless. I love prototyping fast, iterating with feedback, and shipping polished web apps.
            </p>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              When I’m not pushing pixels, you’ll find me exploring typography, running by the river, or brewing the perfect pour-over.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Fact label="Location" value="Berlin, Germany" />
            <Fact label="Experience" value="6+ years" />
            <Fact label="Role" value="Product Designer" />
            <Fact label="Focus" value="Design Systems" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
