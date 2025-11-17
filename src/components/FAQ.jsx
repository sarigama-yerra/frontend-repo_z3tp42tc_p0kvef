import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'Is my data used to train AI models?', a: 'No. Your data is never used to train or improve any AI models. We enforce strict zero-retention policies.' },
  { q: 'Where is data processed?', a: 'All infrastructure and processing is located in the European Union.' },
  { q: 'Do you offer a trial?', a: 'Yes. All professional plans include a free one-month trial with no credit card required.' },
  { q: 'What makes Decimo Bulgarian-first?', a: 'Our models and workflows are tuned for Bulgarian legal language, sources, and practice requirements.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-slate-600"
          >
            Everything you need to know about Decimo.
          </motion.p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-xl border border-slate-200 bg-white p-4">
              <button className="w-full text-left flex items-center justify-between" onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-semibold text-slate-900">{f.q}</span>
                <span className="text-slate-500">{open === i ? '-' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.p
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-2 text-slate-700 overflow-hidden"
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
