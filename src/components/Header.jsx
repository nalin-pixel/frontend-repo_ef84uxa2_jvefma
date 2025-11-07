import React, { useEffect, useState } from 'react';
import { Menu, X, User } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition ${
      scrolled ? 'backdrop-blur bg-white/70 dark:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800/60' : ''
    }`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
        <a href="#home" className="flex items-center gap-2 text-neutral-900 dark:text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-red-600 text-white shadow-md shadow-red-600/30">
            <User className="h-5 w-5" />
          </span>
          <span className="font-semibold">Alex Taylor</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300 md:flex">
          <a href="#about" className="hover:text-neutral-900 dark:hover:text-white">About</a>
          <a href="#experience" className="hover:text-neutral-900 dark:hover:text-white">Experience</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
        </nav>

        <button
          className="rounded-lg p-2 text-neutral-700 hover:bg-neutral-100 md:hidden dark:text-neutral-300 dark:hover:bg-neutral-800"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white px-6 py-3 text-sm dark:border-neutral-800 dark:bg-neutral-900 md:hidden">
          <a onClick={() => setOpen(false)} href="#about" className="block py-2">About</a>
          <a onClick={() => setOpen(false)} href="#experience" className="block py-2">Experience</a>
          <a onClick={() => setOpen(false)} href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
