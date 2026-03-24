import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Page =
  | 'home'
  | 'case-study'
  | 'strategy'
  | 'design-creative'
  | 'ai-solutions'
  | 'marketing-comms'
  | 'privacy-policy'
  | 'terms-of-service';

interface NavbarProps {
  onNavigate: (page: Page) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  const goSection = (id: string) => {
    onNavigate('home');
    close();
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const goContact = () => goSection('contact');

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-screen-2xl mx-auto">

          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => { onNavigate('home'); close(); }}
          >
            <img src="/logo.png" alt="Relativ Connect" className="h-10 w-auto" />
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 font-medium tracking-tight">
            <button onClick={() => goSection('capabilities')} className="text-slate-400 hover:text-slate-100 transition-colors">Capabilities</button>
            <button onClick={() => goSection('work')} className="text-slate-400 hover:text-slate-100 transition-colors">Work</button>
            <button onClick={() => goSection('contact')} className="text-slate-400 hover:text-slate-100 transition-colors">Contact</button>
          </div>

          {/* Desktop CTA */}
          <button
            onClick={goContact}
            className="hidden md:inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 font-bold tracking-tight active:scale-95 transition-transform rounded-none"
          >
            Get in Touch
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-surface-container-highest border-l border-white/5 flex flex-col md:hidden"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/5 flex-shrink-0">
                <img src="/logo.png" alt="Relativ Connect" className="h-8 w-auto opacity-80" />
                <button onClick={close} className="text-slate-400 hover:text-white transition-colors p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 flex flex-col pt-2">
                <button
                  onClick={() => goSection('capabilities')}
                  className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5"
                >
                  Capabilities
                </button>
                <button
                  onClick={() => goSection('work')}
                  className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5"
                >
                  Work
                </button>
                <button
                  onClick={() => goSection('contact')}
                  className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5"
                >
                  Contact
                </button>
              </div>

              {/* Mobile CTA */}
              <div className="p-6 flex-shrink-0">
                <button
                  onClick={goContact}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 font-bold text-xs uppercase tracking-widest"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
