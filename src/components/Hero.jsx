import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative min-h-[88vh] grid place-items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Spline scene */}
        <div className="absolute inset-0 opacity-70">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Glow gradients */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[42rem] rounded-full bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-blue-500/40 blur-3xl" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-slate-950/90 to-transparent" />

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/90 shadow-sm backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse" />
              Bulgarian Legal AI • Agentic • EU-Hosted
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              Decimo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-lg sm:text-xl text-white/80"
            >
              The Most Advanced Bulgarian Legal AI Assistant
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 max-w-3xl mx-auto text-white/70"
            >
              Built to meet the highest standards of legal accuracy. Trusted by professionals for compliant, secure, and lightning-fast legal research and drafting.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {[
                { href: '#learn', label: 'Learn How', primary: true },
                { href: '#contact', label: 'Book a Demo', primary: false }
              ].map((b, i) => (
                <motion.a
                  key={b.label}
                  href={b.href}
                  variants={{ hidden: { y: 10, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                  className={`${b.primary ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-white/10 hover:bg-white/20 text-white'} inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold shadow-lg shadow-indigo-600/20 transition backdrop-blur`}
                >
                  {b.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
