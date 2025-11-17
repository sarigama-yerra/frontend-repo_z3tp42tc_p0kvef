import { ShieldCheck, Lock, Database, EyeOff, KeyRound, Radar, FlaskConical, BadgeCheck, Globe2, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  { icon: ShieldCheck, title: 'Data Protection', desc: 'Enterprise-grade security and privacy measures' },
  { icon: EyeOff, title: 'No AI Training', desc: 'Your data is not used to train or improve any of our AI models' },
  { icon: Database, title: 'Zero Data Retention', desc: 'Complete user control over data' },
  { icon: Lock, title: 'Encryption', desc: 'All data encrypted at rest and in transit' },
  { icon: Radar, title: '24/7 Monitoring', desc: 'Infrastructure protected by continuous security monitoring' },
  { icon: FlaskConical, title: 'Testing', desc: 'Regular penetration testing and vulnerability assessments' },
  { icon: KeyRound, title: 'Two-Factor Authentication', desc: 'Automatically enabled for all accounts' },
  { icon: BadgeCheck, title: 'GDPR Compliance', desc: 'Fully compliant data handling and storage' },
  { icon: Server, title: 'Certifications', desc: 'SOC 2 Type II and ISO 27001 certified providers' },
  { icon: Globe2, title: 'EU Infrastructure', desc: 'All infrastructure and processing located in the EU' },
];

export default function Security() {
  return (
    <section id="security" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-10 h-40 w-40 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Security & Trust
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-white/70 max-w-3xl mx-auto"
          >
            Built for legal-grade protection with European data sovereignty at its core.
          </motion.p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:via-transparent group-hover:to-purple-500/10 pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-white/10 text-indigo-200 grid place-items-center">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-white/70">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
