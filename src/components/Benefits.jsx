import { motion } from 'framer-motion';

export default function Benefits() {
  const items = [
    {
      title: 'Solo Practitioners',
      desc: 'Do more with less—automate research and drafting so you can focus on clients.'
    },
    {
      title: 'Firms',
      desc: 'Standardize quality, speed up delivery, and maintain strict compliance controls.'
    },
    {
      title: 'Consultants',
      desc: 'Accelerate insights and deliverables with repeatable, auditable workflows.'
    }
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-1/3 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
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
            Designed for your practice
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-slate-600 max-w-3xl mx-auto"
          >
            Benefits tailored for different professionals across the Bulgarian legal ecosystem.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i, idx) => (
            <motion.div
              key={i.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <h3 className="font-semibold text-slate-900">{i.title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
