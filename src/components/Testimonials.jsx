import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Decimo transformed our research workflow. What used to take hours now takes minutes, with citations we can trust.',
    author: 'Managing Partner, Sofia Law Firm'
  },
  {
    quote: 'The Bulgarian-first approach shows. It understands the nuance we need in local practice.',
    author: 'Senior Counsel, Corporate Practice'
  },
  {
    quote: 'Security and EU-only processing were non-negotiable. Decimo delivers without compromise.',
    author: 'Compliance Officer, Consultancy'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Trusted by professionals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-slate-600 max-w-3xl mx-auto"
          >
            Real impact across firms, solo practices, and consultancies.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <p className="text-slate-700">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
