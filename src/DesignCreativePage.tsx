import { motion } from "motion/react";
import { 
  ArrowRight, 
  Layout, 
  Fingerprint, 
  Box,
  CheckCircle,
  Mail,
  Instagram
} from "lucide-react";
import { useEffect } from "react";

interface DesignCreativePageProps {
  onNavigate: (page: 'home' | 'case-study' | 'strategy' | 'design-creative' | 'ai-solutions' | 'marketing-comms' | 'privacy-policy' | 'terms-of-service') => void;
}

const DesignCreativePage = ({ onNavigate }: DesignCreativePageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-surface text-on-surface font-sans selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
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
          <button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 font-bold tracking-tight active:scale-95 transition-transform rounded-none inline-block">
            Get in Touch
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative h-[614px] flex items-center overflow-hidden px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="z-10"
            >
              <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-4 block">Design & Creative</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 uppercase">
                Visual <br/><span className="text-primary">Precision</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-md font-medium">
                Beautifully crafted digital identities and interfaces engineered for technical authority.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-full min-h-[400px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full"></div>
              <img 
                alt="Abstract liquid metal 3D shape" 
                className="relative z-10 w-full h-auto object-contain mix-blend-lighten grayscale opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpJLsB3faiTy7a_3NVJ3eMwgci6G0VR_BqP50yWVTWFMmEXYIuZqmDF6t984xGPOCz9uk0s5QZKV_Xc3673v8yjElzt1ojyRWXvLf_lLJAsJwfDSW0DeEFuoFSGs6eAupYZpLlmcmSzDpe89CumANU3qm2dTeXcbFS4dL2sHR115J3My2oxy_OqDRByWXo47f1W0AR9XLiS_YpXgjx0uGK3kt_vadUcFMR_G8Dvx6J6SvkwXvaga9VfxYhMAUVDqIIK9g3HQxf_n28"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* Core Pillars Section (Asymmetric Bento Grid) */}
        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-outline mb-2">Core Pillars</h2>
              <div className="h-1 w-12 bg-secondary"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pillar 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface-container-high p-10 flex flex-col justify-between aspect-square group hover:bg-surface-bright transition-all duration-300 border border-outline-variant/5"
              >
                <div>
                  <Layout className="text-primary w-10 h-10 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">Interface Design</h3>
                  <ul className="space-y-3 text-on-surface-variant text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary"></span> High-fidelity technical UI
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary"></span> User-centric data flows
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary"></span> Complex design systems
                    </li>
                  </ul>
                </div>
              </motion.div>
              {/* Pillar 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-surface-container-lowest p-10 flex flex-col justify-between aspect-square group hover:bg-surface-container-high transition-all duration-300 border border-outline-variant/5"
              >
                <div>
                  <Fingerprint className="text-secondary w-10 h-10 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">Brand Identity</h3>
                  <ul className="space-y-3 text-on-surface-variant text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary"></span> Algorithmic logo systems
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary"></span> Technical typography
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary"></span> Brand DNA strategy
                    </li>
                  </ul>
                </div>
              </motion.div>
              {/* Pillar 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-surface-container-high p-10 flex flex-col justify-between aspect-square group hover:bg-surface-bright transition-all duration-300 border border-outline-variant/5"
              >
                <div>
                  <Box className="text-tertiary w-10 h-10 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">3D Visualization</h3>
                  <ul className="space-y-3 text-on-surface-variant text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-tertiary"></span> Spatial product renders
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-tertiary"></span> Abstract motion assets
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-tertiary"></span> Architectural concepts
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA & Consultation Form Section */}
        <section className="py-24 px-8 bg-surface">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl font-black tracking-tighter mb-6 uppercase">Start Designing?</h2>
                <p className="text-on-surface-variant mb-8 font-medium">
                  Transform your technical vision into a precision-crafted reality. Our consultation process analyzes your brand DNA to build high-performance interfaces.
                </p>
                <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 font-bold tracking-tight hover:brightness-110 transition-all flex items-center gap-3 rounded-none uppercase text-xs">
                  Initiate Project <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-surface-container-high p-8 border border-outline-variant/10">
                <h3 className="text-lg font-bold mb-6 text-primary flex items-center gap-2 uppercase tracking-tight">
                  Begin Consultation
                </h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-outline mb-1 font-bold">Email Address</label>
                    <input className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface p-3 outline-none" placeholder="precision@client.com" type="email"/>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-outline mb-1 font-bold">Project Scope</label>
                    <select className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface p-3 outline-none">
                      <option>Interface Design</option>
                      <option>Brand Identity</option>
                      <option>3D Visualization</option>
                      <option>Full System Overhaul</option>
                    </select>
                  </div>
                  <button className="w-full bg-secondary text-on-secondary font-black py-4 uppercase tracking-widest text-xs hover:brightness-110 transition-colors" type="submit">
                    Submit Request
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
              className="h-8 w-auto mb-4 opacity-80"
              src="/logo.png"
            />
            <p className="text-sm tracking-wide uppercase text-slate-500">© 2024 Relativ Connect.</p>
          </div>
          <div className="flex flex-wrap gap-8 text-sm tracking-wide uppercase">
            <button onClick={() => onNavigate('privacy-policy')} className="text-slate-500 hover:text-primary transition-colors opacity-80 hover:opacity-100">Privacy Policy</button>
            <button onClick={() => onNavigate('terms-of-service')} className="text-slate-500 hover:text-primary transition-colors opacity-80 hover:opacity-100">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesignCreativePage;
