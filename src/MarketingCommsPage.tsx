import { motion } from "motion/react";
import { 
  ArrowRight, 
  Rocket, 
  Calendar, 
  Users, 
  Camera,
  Mail,
  Instagram
} from "lucide-react";
import { useEffect } from "react";

interface MarketingCommsPageProps {
  onNavigate: (page: 'home' | 'case-study' | 'strategy' | 'design-creative' | 'ai-solutions' | 'marketing-comms') => void;
}

const MarketingCommsPage = ({ onNavigate }: MarketingCommsPageProps) => {
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
            <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-slate-100 transition-colors">Capabilities</button>
            <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-slate-100 transition-colors">Work</button>
            <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-slate-100 transition-colors">Contact</button>
          </div>
          <button onClick={() => onNavigate('home')} className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 font-bold tracking-tight active:scale-95 transition-transform rounded-none inline-block">
            Start a Project
          </button>
        </div>
      </nav>

      <main className="pt-16 min-h-screen">
        {/* Hero Section: Asymmetric Architect Layout */}
        <section className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] border-b border-outline-variant/15">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-12 md:p-24 flex flex-col justify-center bg-surface"
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="h-px w-8 bg-secondary"></span>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">Marketing & Communications</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-on-surface leading-none mb-8 uppercase">
              360 Full <br/>Production
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-lg font-light leading-relaxed">
              Impactful narratives delivered with technical authority. We architect influence through precision execution.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-[400px] bg-surface-container-low overflow-hidden"
          >
            <img 
              alt="Production Visual" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIcN0-LTxGDaM-NAEgxeX-UX9MX7Ct2FslidLS0uys2XP55LsLXTtkWlomIa8BIIEclhphmqzOSDIW3gQxbSBCdAstDHeKUjJrkOFso3Q3O-i_fsuxDRDb_mQOm6ETGXnWyfbW7UrHAUxTFZbBcXSaewXq7P_udjRnBpQfIJlHOjTIeBMdB7M4CvicTT3J1jRRvM5xnP5FNePGk9JplZSoXm2Dvr59dH8QzCQc2x6B3Th-S4AVCGmbE6BwH3ugWhG5UoWwxWrjgide"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          </motion.div>
        </section>

        {/* Section 1: Core Pillars (Bento-style Minimalist) */}
        <section className="px-8 py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4 border border-outline-variant/10">
              {/* Activations */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface p-12 hover:bg-surface-container-high transition-all duration-300 group"
              >
                <div className="mb-12">
                  <Rocket className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight text-primary uppercase">Activations</h3>
                <ul className="space-y-4 text-on-surface-variant font-medium text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">/</span>
                    Brand immersive experiences designed for conversion.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">/</span>
                    Strategic consumer touchpoints in high-traffic digital landscapes.
                  </li>
                </ul>
              </motion.div>
              {/* Events */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-surface p-12 hover:bg-surface-container-high transition-all duration-300 group border-l border-outline-variant/10 md:border-l-0 md:border-x border-outline-variant/10"
              >
                <div className="mb-12">
                  <Calendar className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight text-primary uppercase">Events</h3>
                <ul className="space-y-4 text-on-surface-variant font-medium text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">/</span>
                    High-precision corporate summits and technical showcases.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">/</span>
                    End-to-end logistical management with zero-latency execution.
                  </li>
                </ul>
              </motion.div>
              {/* Influencer Management */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-surface p-12 hover:bg-surface-container-high transition-all duration-300 group"
              >
                <div className="mb-12">
                  <Users className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight text-primary uppercase">Influencer Management</h3>
                <ul className="space-y-4 text-on-surface-variant font-medium text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">/</span>
                    Data-driven selection of authority voices in your niche.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">/</span>
                    Performance-tracked campaign reporting and ROI analysis.
                  </li>
                </ul>
              </motion.div>
              {/* Photography & Videography */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-surface p-12 hover:bg-surface-container-high transition-all duration-300 group border-l border-outline-variant/10 lg:border-l"
              >
                <div className="mb-12">
                  <Camera className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight text-primary uppercase">Photography & Videography</h3>
                <ul className="space-y-4 text-on-surface-variant font-medium text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">/</span>
                    High-end corporate photography
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">/</span>
                    Premium brand videography
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">/</span>
                    Event coverage and documentation
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Ready to Launch? (CTA + Form) */}
        <section className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] bg-surface border-t border-outline-variant/15">
          <div className="p-12 md:p-24 bg-surface-container-low flex flex-col justify-center">
            <h2 className="text-5xl font-black tracking-tighter mb-6 uppercase">Ready to <br/><span className="text-tertiary">Launch?</span></h2>
            <p className="text-on-surface-variant mb-12 max-w-sm font-medium">
              Connect with our technical architects to define your next production phase. Precise strategies for global impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-10 py-4 font-bold tracking-tight hover:brightness-110 transition-all uppercase text-xs rounded-none">
                Consult Now
              </button>
              <button className="border border-outline-variant/30 px-10 py-4 font-bold tracking-tight hover:bg-surface-container-highest transition-all uppercase text-xs rounded-none">
                View Portfolio
              </button>
            </div>
          </div>
          <div className="p-12 md:p-24 bg-surface-container-lowest border-l border-outline-variant/15">
            <div className="max-w-md mx-auto">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-12">Begin Consultation</h4>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="group border-b border-outline-variant/30 focus-within:border-primary transition-all">
                  <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary font-bold">Entity Name</label>
                  <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface placeholder-outline-variant/50 outline-none" placeholder="Organization / Brand" type="text"/>
                </div>
                <div className="group border-b border-outline-variant/30 focus-within:border-primary transition-all">
                  <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary font-bold">Objective</label>
                  <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface placeholder-outline-variant/50 outline-none" placeholder="Product Launch / Event / Activation" type="text"/>
                </div>
                <div className="group border-b border-outline-variant/30 focus-within:border-primary transition-all">
                  <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary font-bold">Contact Signature</label>
                  <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface placeholder-outline-variant/50 outline-none" placeholder="architect@company.com" type="email"/>
                </div>
                <div className="pt-4">
                  <button className="w-full bg-surface-container-high border border-outline-variant/20 py-4 text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all rounded-none" type="submit">
                    Initialize Request
                  </button>
                </div>
              </form>
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

export default MarketingCommsPage;
