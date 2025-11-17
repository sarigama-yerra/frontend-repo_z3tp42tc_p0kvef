import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#security', label: 'Security' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <motion.div
        className="fixed left-0 right-0 top-0 h-0.5 origin-[0%] bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600"
        style={{ scaleX }}
        aria-hidden
      />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 grid place-items-center text-white font-bold shadow-sm">D</div>
          <span className="font-semibold text-slate-900">Decimo</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative hover:text-indigo-600 transition">
              <span>{l.label}</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" className="ml-2 rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 transition">
            Book a Demo
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2 border-t border-slate-200 bg-white">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block py-2 text-slate-700 hover:text-indigo-600" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold">Book a Demo</a>
        </div>
      )}
    </header>
  );
}
