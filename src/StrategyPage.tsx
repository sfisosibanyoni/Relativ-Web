import { motion } from "motion/react";
import { 
  ArrowRight, 
  BarChart3, 
  GitBranch, 
  Cpu, 
  CheckCircle,
  Mail,
  Instagram
} from "lucide-react";
import { useEffect } from "react";

interface StrategyPageProps {
  onNavigate: (page: 'home' | 'case-study' | 'strategy' | 'design-creative' | 'ai-solutions' | 'marketing-comms' | 'privacy-policy' | 'terms-of-service') => void;
}

const StrategyPage = ({ onNavigate }: StrategyPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marketing Strategy & Consulting | Relativ Connect";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Practical, technology-driven marketing roadmaps that help your business grow. Strategic consulting tailored for brands operating across African markets.");
  }, []);

  return (
    <div className="bg-surface text-on-surface font-sans selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <img src="/logo.png" alt="Relativ Connect" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium tracking-tight">
            <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-slate-100 transition-colors">Capabilities</button>
            <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-slate-100 transition-colors">Work</button>
            <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-slate-100 transition-colors">Contact</button>
          </div>
          <button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hidden md:inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 font-bold tracking-tight active:scale-95 transition-transform rounded-none">
            Get in Touch
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative h-[614px] flex items-center overflow-hidden bg-surface hero-mesh">
          <div className="container mx-auto px-8 grid md:grid-cols-2 items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="z-10"
            >
              <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-4 block">Service Excellence</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface mb-6 leading-[0.9] uppercase">
                Strategic<br/><span className="text-primary">Architecture</span>
              </h1>
              <p className="text-xl leading-relaxed text-on-surface-variant max-w-md">
                We build the logic that helps your business scale. Precision-engineered roadmaps for technical dominance.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-full hidden md:block"
            >
              <div className="absolute inset-0 bg-surface-container-high transform translate-x-4 translate-y-4"></div>
              <img 
                alt="Architectural Visual" 
                className="relative z-10 w-full h-80 object-cover grayscale opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOApH6HUxSunG6dgDzuSf7dVEeGdGNgBk-pxDWF3OC_Cc5WdXhi8x7ywnPhacogMwnlN9NhtuW3XISaBZJ96PjIoVkokuc5LIUzSksISpEVLqz9362wh5DsfUT9_TzuQMgMKPA28WaUTNw6jKlb6pt6swWtQNSYdP8PrKBB6NwPzrr4u9nT2y8iG0YgY2G5BZJahZczALv9Xkp_1vEr6FvJv9D27V99mgWH-0RozU8f_T2hAlOm1s8PvGl4oPsk6VtCSn78QN97OAu"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-tertiary z-20 opacity-20"></div>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Core Pillars */}
        <section className="py-24 bg-surface-container-low">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Market Analysis */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface p-10 border-l-2 border-primary group hover:bg-surface-container-high transition-all duration-300"
              >
                <BarChart3 className="text-primary mb-6 w-10 h-10" />
                <h3 className="text-xl font-black text-on-surface mb-4 uppercase tracking-tight">Market Analysis</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Deep-dive data synthesis to identify whitespace and competitive vectors. We don't just see trends; we predict structural shifts.
                </p>
              </motion.div>
              {/* Roadmap Development */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-surface p-10 border-l-2 border-secondary group hover:bg-surface-container-high transition-all duration-300"
              >
                <GitBranch className="text-secondary mb-6 w-10 h-10" />
                <h3 className="text-xl font-black text-on-surface mb-4 uppercase tracking-tight">Roadmap Development</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Sequence-based planning that aligns technical capabilities with commercial milestones. Scalable frameworks for long-term growth.
                </p>
              </motion.div>
              {/* Growth Engineering */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-surface p-10 border-l-2 border-tertiary group hover:bg-surface-container-high transition-all duration-300"
              >
                <Cpu className="text-tertiary mb-6 w-10 h-10" />
                <h3 className="text-xl font-black text-on-surface mb-4 uppercase tracking-tight">Growth Engineering</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Algorithmic optimization of business processes. We transform operational friction into a streamlined engine for expansion.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Ready to Lead CTA & Form */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface mb-6 uppercase">Ready to Lead?</h2>
                <p className="text-xl leading-relaxed text-on-surface-variant mb-8">
                  Schedule a high-intensity session with our strategy architects to audit your current trajectory and define a new baseline for success.
                </p>
                <div className="flex items-center gap-4 text-secondary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-bold text-xs uppercase tracking-widest">Algorithmic Precision Guaranteed</span>
                </div>
              </div>
              <div className="md:w-1/2 w-full bg-surface-container-lowest p-8 shadow-2xl relative border border-outline-variant/10">
                <div className="absolute top-0 right-0 w-16 h-1 bg-primary"></div>
                <h4 className="text-lg font-bold text-primary mb-6 uppercase tracking-tight">Begin Consultation</h4>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Corporate Identity</label>
                    <input className="w-full bg-surface-container-high border-none text-on-surface focus:ring-2 focus:ring-primary py-3 px-4 outline-none" placeholder="Organization Name" type="text"/>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Direct Contact</label>
                    <input className="w-full bg-surface-container-high border-none text-on-surface focus:ring-2 focus:ring-primary py-3 px-4 outline-none" placeholder="Professional Email" type="email"/>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Focus Area</label>
                    <select className="w-full bg-surface-container-high border-none text-on-surface focus:ring-2 focus:ring-primary py-3 px-4 outline-none">
                      <option>Market Expansion</option>
                      <option>Infrastructure Scaling</option>
                      <option>Strategic Rebrand</option>
                    </select>
                  </div>
                  <button className="w-full bg-primary text-on-primary font-bold py-4 uppercase tracking-widest text-xs hover:brightness-110 transition-all active:scale-[0.98]">
                    Initialize Protocol
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-slate-800/30">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-screen-2xl mx-auto">
          <div className="mb-8 md:mb-0">
            <img 
              alt="Relativ Connect logo" 
              className="h-8 w-auto mb-4 opacity-80"
              src="/logo.png"
            />
            <p className="text-xs uppercase tracking-widest font-bold text-slate-500">© 2024 Relativ Connect.</p>
          </div>
          <div className="flex flex-wrap gap-8 text-sm tracking-wide uppercase">
            <button onClick={() => onNavigate('privacy-policy')} className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors opacity-80 hover:opacity-100">Privacy Policy</button>
            <button onClick={() => onNavigate('terms-of-service')} className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors opacity-80 hover:opacity-100">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StrategyPage;
