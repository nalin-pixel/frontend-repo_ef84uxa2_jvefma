import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80 dark:from-neutral-950/80 dark:via-neutral-950/30 dark:to-neutral-950/90" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 text-center"
          >
            <span className="inline-block rounded-full bg-red-500/10 px-4 py-1 text-sm font-medium text-red-600 ring-1 ring-red-500/20 dark:text-red-400">Biodata</span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
              Hi, I’m <span className="text-red-600 dark:text-red-400">Alex Taylor</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-lg">
              Product designer and front‑end developer crafting clean, human‑centered digital experiences. Minimalist by nature, obsessed with delightful details.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-white shadow-lg shadow-neutral-900/10 transition hover:-translate-y-0.5 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-5 py-3 text-neutral-900 ring-1 ring-inset ring-neutral-200 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:bg-neutral-900/60 dark:text-white dark:ring-neutral-800 dark:hover:bg-neutral-900"
              >
                View Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
