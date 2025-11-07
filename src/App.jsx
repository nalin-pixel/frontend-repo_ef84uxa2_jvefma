import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-white">
      <Header />
      <main className="mx-auto max-w-7xl space-y-12 pb-16 pt-4 sm:space-y-16 sm:pt-6">
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200/60 py-8 text-center text-sm text-neutral-500 dark:border-neutral-800/60 dark:text-neutral-400">
        © {new Date().getFullYear()} Alex Taylor — Built with care.
      </footer>
    </div>
  );
};

export default App;
