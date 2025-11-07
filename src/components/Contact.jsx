import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple interactive feature: generate a personalized preview note
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="mx-auto mt-16 max-w-3xl px-6 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-neutral-200 bg-white/70 p-8 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="rounded-xl bg-red-500/10 p-2 ring-1 ring-red-500/20">
            <Mail className="h-5 w-5 text-red-600 dark:text-red-400" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Get in touch</h2>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm text-neutral-600 dark:text-neutral-300" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-white/70 px-4 py-3 text-neutral-900 outline-none ring-red-500/0 transition focus:ring-2 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-white"
              placeholder="Your name"
              required
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-neutral-600 dark:text-neutral-300" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-white/70 px-4 py-3 text-neutral-900 outline-none ring-red-500/0 transition focus:ring-2 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-white"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-neutral-600 dark:text-neutral-300" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-white/70 px-4 py-3 text-neutral-900 outline-none ring-red-500/0 transition focus:ring-2 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-white"
              placeholder="Say hello..."
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-medium text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-500"
            >
              Send message
              <Send className="h-4 w-4" />
            </button>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">I usually reply within 24 hours.</p>
          </div>
        </form>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-700 dark:text-green-300"
          >
            Thanks {name.split(' ')[0] || 'there'} — I’ll reach out to {email} soon. Here’s a preview of your message:
            <blockquote className="mt-2 rounded-lg bg-white/50 p-3 text-neutral-800 dark:bg-neutral-800/50 dark:text-neutral-100">{message}</blockquote>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
