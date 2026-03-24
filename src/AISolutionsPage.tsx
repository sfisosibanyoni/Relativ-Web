import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  ImageIcon,
  SlidersHorizontal,
  Globe,
  Users,
  LineChart,
} from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const SPOT = 800;

interface AISolutionsPageProps {
  onNavigate: (page: 'home' | 'case-study' | 'strategy' | 'design-creative' | 'ai-solutions' | 'marketing-comms' | 'privacy-policy' | 'terms-of-service') => void;
}

const pillars = [
  {
    icon: Sparkles,
    title: "AI-Powered Visual Content",
    body: "Premium visuals for marketing, campaign imagery, and high-performance social content designed to convert.",
  },
  {
    icon: ImageIcon,
    title: "Bespoke Image Libraries",
    body: "Custom visual banks tailored specifically to your unique brand identity, target market, and audience segments.",
  },
  {
    icon: SlidersHorizontal,
    title: "On-Brand Systems",
    body: "Proprietary workflows and technical prompt systems fine-tuned to maintain absolute brand consistency.",
  },
  {
    icon: Globe,
    title: "Cultural Accuracy",
    body: "Authentic, regionally aware imagery that respects nuance — especially tailored for diverse African markets.",
  },
  {
    icon: Users,
    title: "Full-Service Support",
    body: "The best of both worlds: combining human creative direction and expert curation with rapid AI generation.",
  },
  {
    icon: LineChart,
    title: "AI Strategy Consulting",
    body: "Advisory services focused on seamlessly integrating AI tools into your existing production and creative workflows.",
  },
];


const AISolutionsPage = ({ onNavigate }: AISolutionsPageProps) => {
  const [mouse, setMouse] = useState({ x: -SPOT, y: -SPOT });
  const handleMouseMove = (e: { currentTarget: HTMLElement; clientX: number; clientY: number }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const handleMouseLeave = () => setMouse({ x: -SPOT, y: -SPOT });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Generative AI Creative Services | Relativ Connect";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Culturally accurate, on-brand AI creative at scale. Bespoke image libraries, on-brand prompt systems, and AI strategy consulting for brands and agencies across Africa.");
  }, []);

  return (
    <div className="bg-surface text-on-surface font-sans selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">

      <Navbar onNavigate={onNavigate} />

      <main className="flex-grow pt-16">

        {/* ── Hero ── */}
        <section
          className="relative min-h-[680px] flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden"
          onMouseMove={handleMouseMove as any}
          onMouseLeave={handleMouseLeave}
        >
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full" style={{ backgroundImage: 'url(/hero-bg.png)', backgroundRepeat: 'repeat', backgroundSize: '2400px auto' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60"></div>
          </div>
          {/* Spotlight */}
          <div
            className="absolute pointer-events-none z-[15] rounded-full"
            style={{
              width: SPOT, height: SPOT, top: 0, left: 0,
              background: 'radial-gradient(circle, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)',
              transform: `translate(${mouse.x - SPOT / 2}px, ${mouse.y - SPOT / 2}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          />

          <div className="relative z-20 max-w-screen-2xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl space-y-8"
            >
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[2px] bg-secondary"></span>
                <span className="text-secondary text-[10px] tracking-[0.35em] uppercase font-bold">Generative AI Offering</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.92] text-on-surface uppercase">
                Culturally Accurate,<br />
                <span className="text-primary">On-Brand</span> AI<br />
                Creative at Scale.
              </h1>

              <p className="text-xl leading-relaxed text-on-surface-variant max-w-2xl">
                A creative and strategy-led generative AI offering for brands, agencies, and communications teams.
              </p>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
                className="inline-flex items-center gap-4 bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 font-bold text-sm tracking-widest uppercase hover:brightness-110 transition-all group"
              >
                Build Your AI Workflow
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* ── Core Capacities (6 Pillars) ── */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-secondary"></span>
                <span className="text-secondary text-[10px] tracking-[0.35em] uppercase font-bold">Core Capacities</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Bridging Visual Production &amp; AI Enablement</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/10">
              {pillars.map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group p-10 bg-surface-container-high hover:bg-surface-bright transition-colors border-l-2 border-transparent hover:border-secondary"
                >
                  <Icon className="text-primary w-8 h-8 mb-6" />
                  <h3 className="text-lg font-black mb-3 tracking-tight uppercase">{title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-32 px-8 md:px-16 lg:px-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
          <div className="max-w-screen-2xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-tight">
                Ready to Architect Your<br />
                <span className="text-secondary">AI Content Strategy?</span>
              </h2>
              <p className="text-xl leading-relaxed text-on-surface-variant mb-10 max-w-md">
                Get in touch to schedule a demo of our custom brand-trained systems and explore how we can scale your production.
              </p>
              <button
                onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
                className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-on-primary font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all group rounded-none"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="bg-surface-container-high p-10 border-l-4 border-secondary">
              <h3 className="text-xl font-black tracking-tighter uppercase mb-8">Initialize Consultation</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">First Name</label>
                    <input className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary text-sm px-4 py-3 outline-none placeholder:text-outline/40" placeholder="First name" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Last Name</label>
                    <input className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary text-sm px-4 py-3 outline-none placeholder:text-outline/40" placeholder="Last name" type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Business Email</label>
                  <input className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary text-sm px-4 py-3 outline-none placeholder:text-outline/40" placeholder="you@company.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Project Inquiry</label>
                  <textarea className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary text-sm px-4 py-3 outline-none resize-none placeholder:text-outline/40" placeholder="How can we help you scale your creative?" rows={4}></textarea>
                </div>
                <button className="w-full bg-secondary text-on-secondary font-black py-4 text-xs tracking-[0.2em] uppercase hover:brightness-110 transition-colors" type="submit">
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
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

    </div>
  );
};

export default AISolutionsPage;
