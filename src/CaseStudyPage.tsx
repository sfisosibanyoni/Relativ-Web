import { motion, useInView, useMotionValue, useTransform, animate, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { 
  ArrowRight, 
  CreditCard, 
  Users, 
  Globe, 
  Radio, 
  BookOpen, 
  Layout,
  Linkedin,
  Instagram
} from "lucide-react";

interface CaseStudyPageProps {
  onNavigate: (page: 'home' | 'case-study') => void;
}

const Counter = ({ value, duration = 2, prefix = "", suffix = "" }: { value: number, duration?: number, prefix?: string, suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayValue(latest);
  });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration, ease: "easeOut" });
    }
  }, [isInView, count, value, duration]);

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
};

const CaseStudyPage = ({ onNavigate }: CaseStudyPageProps) => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yText = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <div className="bg-surface text-on-surface font-sans selection:bg-primary selection:text-on-primary">
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
            <a className="text-slate-400 hover:text-slate-100 transition-colors" href="#capabilities" onClick={() => onNavigate('home')}>Capabilities</a>
            <a className="text-slate-400 hover:text-slate-100 transition-colors" href="#work" onClick={() => onNavigate('home')}>Work</a>
            <a className="text-slate-400 hover:text-slate-100 transition-colors" href="#contact" onClick={() => onNavigate('home')}>Contact</a>
          </div>
          <a href="#contact" onClick={() => onNavigate('home')} className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 font-bold tracking-tight active:scale-95 transition-transform rounded-none inline-block">
            Start a Project
          </a>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[921px] flex items-end overflow-hidden">
          <motion.div 
            style={{ y: yBg }}
            className="absolute inset-0 z-0"
          >
            <img 
              className="w-full h-full object-cover opacity-50 scale-110" 
              src="https://lh3.googleusercontent.com/d/1D_r_2_W-2_W-2_W-2_W-2_W-2_W-2_W-2_W"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          </motion.div>
          <div className="relative z-10 w-full px-8 pb-24 md:px-16 lg:px-24">
            <motion.div 
              style={{ y: yText, opacity: opacityText }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-4 max-w-5xl"
            >
              <span className="text-xs text-secondary uppercase tracking-[0.2em] font-semibold">Project Case Study</span>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none text-on-background">
                IATF 2025 <br/>
                <span className="text-primary">PAN-AFRICAN</span> TRADE.
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mt-6">
                Architecting the largest intra-African trade exchange through strategic marketing precision and continental reach.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Role Overview */}
        <section className="px-8 py-24 md:px-16 lg:px-24 bg-surface-container-lowest">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="text-xs uppercase tracking-widest text-secondary font-bold mb-8">Role Overview</h2>
              <div className="space-y-6">
                <div className="p-6 bg-surface-container-low border-l-4 border-primary">
                  <p className="text-[10px] uppercase text-on-surface-variant mb-2 font-bold tracking-widest">Agency Name</p>
                  <p className="text-xl font-bold">Relativ Connect</p>
                </div>
                <div className="p-6 bg-surface-container-low border-l-4 border-secondary">
                  <p className="text-[10px] uppercase text-on-surface-variant mb-2 font-bold tracking-widest">Our Mandate</p>
                  <p className="text-xl font-bold">Lead Marketing Agency</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="bg-surface-container-low p-12">
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-on-surface">
                  Tasked with orchestrating a complex <span className="text-primary font-bold">B2B and B2C campaign</span> spanning all 55 African countries, Relativ Connect leveraged a high-performance technical framework to drive cross-border engagement and economic acceleration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Results Bento Grid */}
        <section className="px-8 py-24 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold mb-12 tracking-tight">Key Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Large Primary Stat */}
            <div className="md:col-span-2 md:row-span-2 bg-primary-container p-12 flex flex-col justify-between group overflow-hidden relative">
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/d/1E_r_2_W-2_W-2_W-2_W-2_W-2_W-2_W-2_W"
              />
              <div className="relative z-10">
                <CreditCard className="w-12 h-12 mb-6 text-on-primary-container" />
                <h3 className="text-6xl md:text-8xl font-black text-primary tracking-tighter">
                  <Counter value={48} prefix="$" suffix="B" />
                </h3>
              </div>
              <p className="relative z-10 text-2xl font-bold text-on-primary-container max-w-xs">Trade deals facilitated through integrated promotion strategy.</p>
            </div>
            {/* Impressions */}
            <div className="bg-surface-container-high p-8 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">DOOH Visibility</p>
              <h3 className="text-4xl font-bold text-secondary">
                <Counter value={4} suffix="M+" />
              </h3>
              <p className="text-sm text-on-surface-variant mt-2">Verified Airport impressions globally.</p>
            </div>
            {/* Countries */}
            <div className="bg-surface-container-high p-8 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Global Participation</p>
              <h3 className="text-4xl font-bold text-on-background">
                <Counter value={132} />
              </h3>
              <p className="text-sm text-on-surface-variant mt-2">Participating countries and territories.</p>
            </div>
            {/* Attendance */}
            <div className="md:col-span-2 bg-surface-container-lowest p-8 flex flex-row items-center gap-8 border-t-2 border-primary/20">
              <div className="text-6xl font-black text-primary/30">
                <Counter value={112} suffix="K" />
              </div>
              <div>
                <p className="text-xl font-bold">Total Attendance</p>
                <p className="text-on-surface-variant">Stakeholders, exhibitors, and delegates engaged across physical and digital touchpoints.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy & Execution */}
        <section className="px-8 py-24 md:px-16 lg:px-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3 sticky top-32">
                <h2 className="text-4xl font-bold tracking-tighter mb-6">Strategy & <br/><span className="text-secondary">Execution</span></h2>
                <div className="w-16 h-1 bg-secondary mb-8"></div>
                <p className="text-on-surface-variant leading-relaxed">
                  Our approach utilized a multi-layered media architecture, combining high-authority editorial with algorithmic digital precision.
                </p>
              </div>
              <div className="md:w-2/3 grid gap-4">
                <div className="bg-surface-container-highest p-8 flex gap-6">
                  <Radio className="text-primary w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Global Broadcast Reach</h4>
                    <p className="text-on-surface-variant">Domination of premium news channels including CNN Africa, BBC News, and Al Jazeera to establish continental authority.</p>
                  </div>
                </div>
                <div className="bg-surface-container-highest p-8 flex gap-6">
                  <BookOpen className="text-primary w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Trusted Editorial Authority</h4>
                    <p className="text-on-surface-variant">Strategic print and engagement partnerships with Forbes Afrique and The Guardian to capture the C-Suite and policy-makers.</p>
                  </div>
                </div>
                <div className="bg-surface-container-highest p-8 flex gap-6">
                  <Globe className="text-primary w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">55-Nation Coordination</h4>
                    <p className="text-on-surface-variant">Executing a localized yet unified message across diverse linguistic and cultural markets within the African continent.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24">
          <div className="px-8 mb-12">
            <h2 className="text-4xl font-bold tracking-tighter uppercase">Gallery</h2>
            <div className="w-16 h-1 bg-primary mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8">
            <div className="bg-surface-container-high overflow-hidden border border-outline-variant/10">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                src="/api/attachments/12345"
                alt="IATF 2025 Event Highlights"
              />
            </div>
            <div className="bg-surface-container-high overflow-hidden border border-outline-variant/10">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                src="/api/attachments/67890"
                alt="IATF 2025 Marketing Collateral"
              />
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-8 py-32 md:px-16 lg:px-24 bg-surface-container-lowest relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-32"></div>
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Ready to grow your business?</h2>
            <p className="text-xl text-on-surface-variant mb-12 max-w-2xl">
              We combine strategy and creative design to help you reach more customers and scale your brand. Let's talk about how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-on-primary font-bold px-12 py-5 text-lg hover:bg-white hover:text-on-primary transition-colors rounded-none">START A PROJECT</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 w-full border-t border-slate-800/30">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-screen-2xl mx-auto">
          <div className="mb-8 md:mb-0">
            <img 
              alt="Relativ Connect logo" 
              className="h-8 w-auto mb-4 brightness-0 invert opacity-80" 
              src="/api/attachments/1742638035189"
            />
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">© 2025 Relativ Connect. All rights reserved. Built for technical authority.</p>
          </div>
          <div className="flex flex-wrap gap-8 justify-center">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((link) => (
              <a key={link} className="text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">{link}</a>
            ))}
            <a className="text-slate-500 hover:text-primary transition-colors" href="#"><Linkedin className="w-4 h-4" /></a>
            <a className="text-slate-500 hover:text-primary transition-colors" href="#"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyPage;
