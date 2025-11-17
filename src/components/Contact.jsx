import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-40 w-[40rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Book a demo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-slate-600"
          >
            Schedule a 30-minute session to see Decimo in action.
          </motion.p>
        </div>
        {!submitted ? (
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full name</label>
                <input required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="jane@firm.bg" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Organization</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Firm or practice" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us about your needs" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" required />
                I agree to the privacy policy and EU data processing.
              </label>
              <button type="submit" className="rounded-lg bg-indigo-600 px-5 py-2.5 text-white font-semibold hover:bg-indigo-700">Book 30 min meeting</button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center"
          >
            <p className="text-green-800 font-semibold">Thanks! We will reach out shortly to schedule your demo.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
