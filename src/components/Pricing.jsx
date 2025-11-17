import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Professional Pro',
    price: '€49.99',
    cadence: '/month',
    highlight: 'Free 1 month trial (No credit card required)',
    features: [
      '200 credits/month',
      "Full access to Decimo's power",
      'Full access to authoritative databases',
      '24/7 live chat support',
      'Target: Solo practitioners and consultants'
    ],
    cta: 'Get Started'
  },
  {
    name: 'Professional Max',
    price: '€99.99',
    cadence: '/month',
    highlight: 'Free 1 month trial (No credit card required)',
    features: [
      'Unlimited credits',
      "Full access to Decimo's power",
      'Full access to authoritative databases',
      '24/7 instant live chat support',
      'Target: Research-intensive professionals and legal practitioners'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Firm',
    price: 'Custom',
    cadence: 'Pricing',
    highlight: 'Contact for demo and pricing',
    features: [
      'Unlimited credits',
      "Full access to Decimo's power",
      'Full access to authoritative databases',
      '24/7 instant live chat support',
      'Dedicated account manager',
      'Onboarding support for entire firm',
      'Target: Law firms, consulting groups, and organizations'
    ],
    cta: 'Book a 30 minute meeting'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent to-slate-50/50" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-slate-600 max-w-3xl mx-auto"
          >
            Choose a plan that fits your practice. All plans include enterprise-grade security by default.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-2xl border ${t.popular ? 'border-indigo-600' : 'border-slate-200'} bg-white p-6 shadow-sm overflow-hidden`}
            >
              {t.popular && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow"
                >
                  Most Popular
                </motion.div>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-extrabold text-slate-900">{t.price}</span>
                <span className="text-slate-500">{t.cadence}</span>
              </div>
              <p className="mt-3 text-sm text-slate-700">{t.highlight}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#contact" className={`${t.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-900 text-white hover:bg-slate-800'} inline-flex w-full justify-center rounded-lg px-4 py-2 font-semibold transition`}>
                  {t.cta}
                </a>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pointer-events-none absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-t from-indigo-500/10 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
