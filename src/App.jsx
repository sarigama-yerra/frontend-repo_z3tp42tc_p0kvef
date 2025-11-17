import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Security from './components/Security';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Decimo. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#security" className="hover:text-indigo-600">Security</a>
          <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Security />
      <Features />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
