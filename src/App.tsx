import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowRight, 
  Search, 
  Brain, 
  Layout, 
  Share2, 
  Mail, 
  Twitter 
} from "lucide-react";
import { useRef, useEffect, useState } from "react";
import * as React from "react";
import CaseStudyPage from "./CaseStudyPage";
import StrategyPage from "./StrategyPage";
import DesignCreativePage from "./DesignCreativePage";
import AISolutionsPage from "./AISolutionsPage";
import MarketingCommsPage from "./MarketingCommsPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import TermsOfServicePage from "./TermsOfServicePage";

const Navbar = ({ onNavigate }: { onNavigate: (page: 'home' | 'case-study' | 'strategy' | 'design-creative' | 'ai-solutions' | 'marketing-comms' | 'privacy-policy' | 'terms-of-service') => void }) => (
  <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
    <div className="flex justify-between items-center px-8 h-16 w-full max-w-screen-2xl mx-auto">
      <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
        <img src="/logo.png" alt="Relativ Connect" className="h-10 w-auto" />
      </div>
      <div className="hidden md:flex items-center gap-8 font-medium tracking-tight">
        <button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-slate-400 hover:text-slate-100 transition-colors">Capabilities</button>
        <button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-slate-400 hover:text-slate-100 transition-colors">Work</button>
        <button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-slate-400 hover:text-slate-100 transition-colors">Contact</button>
      </div>
      <button 
        onClick={() => {
          onNavigate('home');
          setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }} 
        className="hidden md:inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 font-bold tracking-tight active:scale-95 transition-transform rounded-none"
      >
        Get in Touch
      </button>
    </div>
  </nav>
);

const SPOT = 800;

const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 200]);

  const [mouse, setMouse] = useState({ x: -SPOT, y: -SPOT });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setMouse({ x: -SPOT, y: -SPOT });
  };

  return (
    <section
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center px-8 py-16 lg:py-24 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full"
          style={{ backgroundImage: 'url(/hero-bg.png)', backgroundRepeat: 'repeat', backgroundSize: '2400px auto' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60 z-10"></div>
      </motion.div>

      <div
        className="absolute pointer-events-none z-[15] rounded-full"
        style={{
          width: SPOT,
          height: SPOT,
          top: 0,
          left: 0,
          background: 'radial-gradient(circle, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)',
          transform: `translate(${mouse.x - SPOT / 2}px, ${mouse.y - SPOT / 2}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      
      <motion.div 
        className="relative z-20 w-full max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
      >
        <div>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] uppercase tracking-[0.35em] text-secondary mb-4 block font-bold opacity-80"
          >
            Full-Service Marketing Agency
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
          >
            CREATIVE <br/>
            STRATEGY. <br/>
            <span className="text-primary">AI POWERED.</span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl"
        >
          <div className="space-y-6">
            <p className="text-on-surface-variant text-xl leading-relaxed">
              We solve modern communication needs by combining strategic insight with generative AI, beautiful design, and high-end production.
            </p>
            <p className="text-on-surface-variant/60 text-base leading-relaxed">
              A 360° approach backed by full production capacity and unique access to outdoor media through Relativ Media.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const CapabilityCard = ({ icon: Icon, title, description, colorClass, onClick }: { icon: any, title: string, description: string, colorClass: string, onClick?: () => void }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    onClick={onClick}
    className={`p-10 bg-surface-container-highest border border-transparent hover:border-${colorClass}/20 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden cursor-pointer`}
  >
    <div className={`absolute inset-0 bg-${colorClass}/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl -z-10`} />
    <div>
      <Icon className={`text-${colorClass} w-10 h-10 mb-8`} />
      <h4 className="text-xl font-black mb-4 tracking-tight uppercase">{title}</h4>
      <p className="text-on-surface-variant leading-relaxed text-sm">{description}</p>
    </div>
    <div className={`mt-8 flex items-center gap-2 text-${colorClass} font-bold uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0`}>
      View More <ArrowRight className="w-3 h-3" />
    </div>
  </motion.div>
);

const Capabilities = ({ onNavigate }: { onNavigate: (page: 'home' | 'case-study' | 'strategy' | 'design-creative' | 'ai-solutions' | 'marketing-comms' | 'privacy-policy' | 'terms-of-service') => void }) => (
  <section id="capabilities" className="py-24 px-8 bg-surface-container-low">
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-on-surface-variant mb-2">Our Capabilities</p>
          <h2 className="text-4xl font-black tracking-tighter uppercase">What We Do</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <CapabilityCard 
          icon={Search} 
          title="Strategy" 
          description="We build practical roadmaps that help your business grow using the right technology at the right time."
          colorClass="primary"
          onClick={() => onNavigate('strategy')}
        />
        <CapabilityCard
          icon={Share2}
          title="Marketing & Comms"
          description="360° marketing and communications — brand strategy, PR, social media, events, influencer management, design, and everything in between."
          colorClass="primary"
          onClick={() => onNavigate('marketing-comms')}
        />
        <CapabilityCard
          icon={Layout}
          title="Media Placement"
          description="Precision media architecture across OOH, TV, radio, digital, and programmatic — unified with Relativ Media's 900+ physical assets."
          colorClass="tertiary"
          onClick={() => onNavigate('design-creative')}
        />
        <CapabilityCard
          icon={Brain}
          title="Generative AI"
          description="Culturally accurate, on-brand AI creative at scale — bespoke image libraries, on-brand systems, and AI strategy consulting for brands and agencies."
          colorClass="secondary"
          onClick={() => onNavigate('ai-solutions')}
        />
      </div>
    </div>
  </section>
);

const CaseStudySection = ({ onNavigate }: { onNavigate: (page: 'home' | 'case-study' | 'strategy' | 'design-creative' | 'ai-solutions' | 'marketing-comms' | 'privacy-policy' | 'terms-of-service') => void }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="work" ref={ref} className="relative py-32 px-8 overflow-hidden bg-surface-container-lowest border-t border-outline-variant/10">
      <motion.div style={{ y }} className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/d/1A_r_2_W-2_W-2_W-2_W-2_W-2_W-2_W-2_W"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-surface-container-lowest/80 to-surface-container-lowest"></div>
      </motion.div>
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="asymmetric-grid items-center gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-secondary"></span>
              <span className="text-secondary text-[10px] uppercase tracking-[0.35em] font-bold">Global Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">Case Study: IATF 2025</h2>
            <h3 className="text-xl text-on-surface-variant font-medium mb-10">Pan-African Trade Promotion</h3>
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-xl">
              <div>
                <div className="text-4xl font-black text-primary mb-1">$48B</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Trade deals facilitated</div>
              </div>
              <div className="border-l border-outline-variant/30 pl-8">
                <div className="text-4xl font-black text-primary mb-1">4M+</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Verified DOOH Impressions</div>
              </div>
              <div className="border-l border-outline-variant/30 pl-8">
                <div className="text-4xl font-black text-primary mb-1">100K+</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Visitors online and in-person</div>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('case-study')}
              className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-on-primary font-bold hover:brightness-110 transition-all group uppercase tracking-widest text-sm rounded-none"
            >
              Read Case Study
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] group overflow-hidden border border-outline-variant/20"
          >
            <img
              src="/iatf-casestudy.jpg"
              alt="IATF 2025 Case Study"
              className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MotherAgencyBanner = () => (
  <section id="mother-agency" className="py-10 px-8 bg-surface-container-low border-t border-outline-variant/10">
    <div className="max-w-screen-2xl mx-auto">
      <div className="glass-panel p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 border border-white/5 relative overflow-hidden group">
        {/* Subtle Red Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e31e24]/10 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="bg-white/5 backdrop-blur-md p-6 flex items-center justify-center border border-white/10 group-hover:border-[#e31e24]/30 transition-colors duration-500">
            <img
              alt="Relativ Media logo"
              className="w-56 h-auto opacity-70 group-hover:opacity-100 transition-all duration-500"
              src="/relativ-media-logo.png"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#e31e24]"></span>
              <span className="text-[#e31e24] font-bold uppercase tracking-[0.3em] text-[10px]">Mother Agency</span>
            </div>
            <h3 className="text-4xl font-black tracking-tighter text-on-surface uppercase mb-4">Visit Relativ Media</h3>
            <p className="text-on-surface-variant max-w-lg leading-relaxed text-sm md:text-base">
              Relativ Media is South Africa's premier independent out-of-home media provider, offering high-impact digital and static advertising platforms that command attention across the continent.
            </p>
          </div>
        </div>

        <a
          href="https://www.relativmedia.co.za"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center gap-4 px-12 py-6 bg-[#e31e24] text-white font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(227,30,36,0.3)] hover:brightness-110 transition-all group rounded-none"
        >
          Explore Website
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 px-8 bg-surface relative overflow-hidden">
    {/* Subtle background element */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-screen-xl pointer-events-none opacity-20">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
    </div>

    <div className="max-w-5xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] uppercase tracking-[0.35em] font-bold mb-4 block"
          >
            Get in touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]"
          >
            Let's work <br/>
            <span className="text-on-surface-variant/50 italic">together</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl leading-relaxed text-on-surface-variant mb-10 max-w-md"
          >
            Have a project in mind or just want to learn more? We're here to help you grow your business and reach your goals.
          </motion.p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Email us</div>
                <div className="font-medium">hello@relativconnect.com</div>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-6 md:p-10 border border-white/5 relative"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="relative group">
                <input 
                  className="w-full bg-transparent border-b border-outline-variant/30 py-2.5 focus:border-primary transition-colors outline-none peer placeholder:text-transparent" 
                  placeholder="Your Name" 
                  id="name"
                  type="text"
                />
                <label 
                  htmlFor="name"
                  className="absolute left-0 top-2.5 text-on-surface-variant/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Your Name
                </label>
              </div>
              
              <div className="relative group">
                <input 
                  className="w-full bg-transparent border-b border-outline-variant/30 py-2.5 focus:border-primary transition-colors outline-none peer placeholder:text-transparent" 
                  placeholder="Email Address" 
                  id="email"
                  type="email"
                />
                <label 
                  htmlFor="email"
                  className="absolute left-0 top-2.5 text-on-surface-variant/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  className="w-full bg-transparent border-b border-outline-variant/30 py-2.5 focus:border-primary transition-colors outline-none peer placeholder:text-transparent resize-none" 
                  placeholder="Tell us about your project" 
                  id="message"
                  rows={2}
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-0 top-2.5 text-on-surface-variant/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Tell us about your project
                </label>
              </div>
            </div>

            <button className="group relative w-full py-4 bg-primary text-on-primary font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = ({ onNavigate }: { onNavigate: (page: 'home' | 'case-study' | 'strategy' | 'design-creative' | 'ai-solutions' | 'marketing-comms' | 'privacy-policy' | 'terms-of-service') => void }) => (
  <footer className="bg-black border-t border-slate-800/30">
    <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-screen-2xl mx-auto">
      <div className="mb-8 md:mb-0">
        <img src="/logo.png" alt="Relativ Connect" className="h-8 w-auto mb-3 opacity-80" />
        <p className="text-xs uppercase tracking-widest font-bold text-slate-500">© 2024 Relativ Connect.</p>
      </div>
      <div className="flex flex-wrap gap-8 text-sm tracking-wide uppercase">
        <button onClick={() => onNavigate('privacy-policy')} className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors opacity-80 hover:opacity-100">Privacy Policy</button>
        <button onClick={() => onNavigate('terms-of-service')} className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors opacity-80 hover:opacity-100">Terms of Service</button>
      </div>
    </div>
  </footer>
);

type Page = 'home' | 'case-study' | 'strategy' | 'design-creative' | 'ai-solutions' | 'marketing-comms' | 'privacy-policy' | 'terms-of-service';

const pathToPage: Record<string, Page> = {
  '/': 'home',
  '/case-study': 'case-study',
  '/strategy': 'strategy',
  '/design-creative': 'design-creative',
  '/ai-solutions': 'ai-solutions',
  '/marketing-comms': 'marketing-comms',
  '/privacy-policy': 'privacy-policy',
  '/terms-of-service': 'terms-of-service',
};

const pageToPath: Record<Page, string> = {
  'home': '/',
  'case-study': '/case-study',
  'strategy': '/strategy',
  'design-creative': '/design-creative',
  'ai-solutions': '/ai-solutions',
  'marketing-comms': '/marketing-comms',
  'privacy-policy': '/privacy-policy',
  'terms-of-service': '/terms-of-service',
};

function getPageFromPath(): Page {
  return pathToPage[window.location.pathname] ?? 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromPath);

  const navigate = (page: Page) => {
    window.history.pushState({ page }, '', pageToPath[page]);
    setCurrentPage(page);
  };

  useEffect(() => {
    const onPop = (e: PopStateEvent) => {
      const page: Page = (e.state?.page as Page) ?? getPageFromPath();
      setCurrentPage(page);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    if (currentPage === 'home') {
      document.title = "Relativ Connect | Full-Service Marketing Agency | South Africa";
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", "Relativ Connect is a full-service marketing agency combining creative strategy, generative AI, media placement, and integrated communications. Pan-African reach backed by Relativ Media's 900+ OOH assets.");
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) { element.scrollIntoView({ behavior: 'smooth' }); return; }
      }
    }
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (currentPage === 'case-study') {
    return <CaseStudyPage onNavigate={navigate} />;
  }

  if (currentPage === 'strategy') {
    return <StrategyPage onNavigate={navigate} />;
  }

  if (currentPage === 'design-creative') {
    return <DesignCreativePage onNavigate={navigate} />;
  }

  if (currentPage === 'ai-solutions') {
    return <AISolutionsPage onNavigate={navigate} />;
  }

  if (currentPage === 'marketing-comms') {
    return <MarketingCommsPage onNavigate={navigate} />;
  }

  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicyPage onNavigate={navigate} />;
  }

  if (currentPage === 'terms-of-service') {
    return <TermsOfServicePage onNavigate={navigate} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={navigate} />
      <main className="pt-20">
        <Hero />
        <Capabilities onNavigate={navigate} />
        <CaseStudySection onNavigate={navigate} />
        <MotherAgencyBanner />
        <Contact />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
