import { Brain, FileText, Search, Workflow, Languages, Database as DBIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Brain,
    title: 'Agentic Reasoning',
    desc: 'Multi-step planning that autonomously researches, drafts, and validates legal work.'
  },
  {
    icon: Search,
    title: 'Authoritative Sources',
    desc: 'Direct access to authoritative Bulgarian legal databases and citations.'
  },
  {
    icon: FileText,
    title: 'Drafting Superpowers',
    desc: 'Generate motions, contracts, and memos tailored to Bulgarian law—fast.'
  },
  {
    icon: Workflow,
    title: 'Workflows',
    desc: 'Reusable workflows for recurring research and drafting tasks.'
  },
  {
    icon: Languages,
    title: 'Bulgarian-First',
    desc: 'Built for Bulgarian legal language nuances and terminology.'
  },
  {
    icon: DBIcon,
    title: 'Knowledge Controls',
    desc: 'Bring-your-own knowledge. Zero retention, EU-only processing.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-slate-600 max-w-3xl mx-auto"
          >
            Everything you need to research, reason, and draft with confidence.
          </motion.p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition will-change-transform"
            >
              <div className="h-11 w-11 rounded-xl bg-indigo-600/10 text-indigo-700 grid place-items-center group-hover:scale-105 transition">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
              <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
