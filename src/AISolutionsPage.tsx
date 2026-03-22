import { motion } from "motion/react";
import { 
  ArrowRight, 
  Brain, 
  Sparkles, 
  Zap,
  CheckCircle,
  Mail,
  Linkedin,
  Instagram
} from "lucide-react";
import { useEffect } from "react";

interface AISolutionsPageProps {
  onNavigate: (page: 'home' | 'case-study' | 'strategy' | 'design-creative' | 'ai-solutions') => void;
}

const AISolutionsPage = ({ onNavigate }: AISolutionsPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-surface text-on-surface font-sans selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => onNavigate('home')}>
            <img 
              alt="Relativ Connect logo" 
              className="h-8 w-auto transition-transform group-hover:scale-110" 
              src="/api/attachments/1742638035189"
            />
            <span className="text-xl font-bold tracking-tighter text-primary">Relativ Connect</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium tracking-tight">
            <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-slate-100 transition-colors">Work</button>
            <button onClick={() => onNavigate('home')} className="text-primary border-b-2 border-primary pb-1">Services</button>
            <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-slate-100 transition-colors">Insights</button>
            <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-slate-100 transition-colors">Contact</button>
          </div>
          <button onClick={() => onNavigate('home')} className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 font-bold tracking-tight active:scale-95 transition-transform rounded-none inline-block">
            Get Started
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[614px] flex items-center overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent z-10"></div>
            <img 
              alt="Neural Network Visualization" 
              className="w-full h-full object-cover grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9kLH5OAKFYgMRGnbXmECNGoTsmBBuDPpjsLQMRl1nqp8paVbSRt4gCwjLjKTauKaZY2isR4__LIPRA4RCQJV1Uh01B9hEWj4OMK6y9eDGSBFy9M5I3vtlh2jhpcPP8TaYCnqbQb22__oxg3BJs-pa3lvwhBj-WYms-a1nccQWKPppyQPaTwWnzd4cuiIaIAYugGqUhdxyR-HO6dJi1tZJVApWQ81Vz19ZmLSCVzkGfPG2lM5afqIDxKoqEVXXsb3h0xZSlvDhMSrW"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="container mx-auto px-8 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-surface-container-high text-secondary text-xs uppercase tracking-widest font-bold">
                <span className="w-2 h-2 bg-secondary block"></span>
                Algorithmic Solutions
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-on-surface leading-none uppercase">
                AI Integration
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant font-medium tracking-tight max-w-xl">
                Smarter automation for high-speed results. Architecting the future of computational efficiency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Pillars Section (Asymmetric Bento Grid) */}
        <section className="py-24 bg-surface-container-low">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-1 items-start border border-outline-variant/10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-4 p-12 bg-surface text-left h-full"
              >
                <Brain className="text-primary w-10 h-10 mb-6" />
                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">Custom LLMs</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Proprietary language models engineered for your specific domain knowledge and security requirements.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-8 p-12 bg-surface-container-highest text-left h-full"
              >
                <Sparkles className="text-secondary w-10 h-10 mb-6" />
                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">Automated Content</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  High-fidelity generative systems that maintain brand integrity while scaling production 10x.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-secondary font-bold uppercase tracking-widest">
                    <CheckCircle className="w-4 h-4" /> Context Aware
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary font-bold uppercase tracking-widest">
                    <CheckCircle className="w-4 h-4" /> Multi-format Output
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-12 p-12 bg-primary-container flex flex-col md:flex-row justify-between items-center gap-8"
              >
                <div className="max-w-2xl">
                  <Zap className="text-on-primary-container w-10 h-10 mb-6" />
                  <h3 className="text-3xl font-black mb-4 tracking-tight text-on-primary-container uppercase">Workflow Scaling</h3>
                  <p className="text-on-primary-container/80 text-lg leading-relaxed">
                    Deploy intelligent agents that handle complex decision logic, removing bottlenecks in your operational pipeline.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-black text-on-primary-container">94%</div>
                  <div className="text-[10px] uppercase tracking-widest text-on-primary-container/60 font-bold">Efficiency Gain</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA & Consultation Form Section */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Left: Text/CTA */}
              <div className="lg:w-1/2">
                <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight uppercase">
                  Ready for AI?
                </h2>
                <p className="text-on-surface-variant text-lg mb-12 max-w-md">
                  Schedule a high-precision audit of your current digital infrastructure and discover immediate integration opportunities.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-surface-container-high text-tertiary font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-on-surface uppercase tracking-tight">Data Assessment</h4>
                      <p className="text-sm text-on-surface-variant">We evaluate your current dataset readiness for model training.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-surface-container-high text-tertiary font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-on-surface uppercase tracking-tight">Prototype Phase</h4>
                      <p className="text-sm text-on-surface-variant">Rapid deployment of a focused AI agent in your sandbox.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Form */}
              <div className="lg:w-1/2 bg-surface-container-lowest p-12 border-l-4 border-primary shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 tracking-tight uppercase">Begin Consultation</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Company Name</label>
                    <input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary text-on-surface py-4 px-4 outline-none" placeholder="ENTER ENTITY NAME" type="text"/>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Work Email</label>
                      <input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary text-on-surface py-4 px-4 outline-none" placeholder="DEPT@ORG.COM" type="email"/>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Project Scope</label>
                      <select className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary text-on-surface py-4 px-4 outline-none">
                        <option>Select Scope</option>
                        <option>Enterprise LLM</option>
                        <option>Workflow Automation</option>
                        <option>Content Engine</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Technical Requirements</label>
                    <textarea className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary text-on-surface py-4 px-4 h-32 outline-none resize-none" placeholder="OUTLINE ARCHITECTURAL NEEDS..."></textarea>
                  </div>
                  <button className="w-full bg-primary text-on-primary font-black py-5 uppercase tracking-widest hover:brightness-110 transition-colors">
                    Submit for Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/30">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-screen-2xl mx-auto">
          <div className="mb-8 md:mb-0">
            <img 
              alt="Relativ Connect logo" 
              className="h-8 w-auto mb-4 brightness-0 invert opacity-80" 
              src="/api/attachments/1742638035189"
            />
            <p className="text-sm tracking-wide uppercase text-slate-500">© 2024 Relativ Connect. Architectural Precision in Data.</p>
          </div>
          <div className="flex flex-wrap gap-8 text-sm tracking-wide uppercase">
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <a key={link} className="text-slate-500 hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AISolutionsPage;
