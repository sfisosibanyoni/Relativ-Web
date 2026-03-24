import { motion } from "motion/react";
import {
  ArrowRight,
  Tv,
  Globe,
  Cpu,
  Brain,
  Mail,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const SPOT = 800;

interface MediaPlacementPageProps {
  onNavigate: (page: 'home' | 'case-study' | 'strategy' | 'design-creative' | 'ai-solutions' | 'marketing-comms' | 'privacy-policy' | 'terms-of-service') => void;
}

const MediaPlacementPage = ({ onNavigate }: MediaPlacementPageProps) => {
  const [mouse, setMouse] = useState({ x: -SPOT, y: -SPOT });
  const handleMouseMove = (e: { currentTarget: HTMLElement; clientX: number; clientY: number }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const handleMouseLeave = () => setMouse({ x: -SPOT, y: -SPOT });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Precision Media Placement & Architecture | Relativ Connect";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Strategic media placement across OOH, TV, radio, digital, and programmatic channels — unified with Relativ Media's 900+ physical assets for true omni-channel reach.");
  }, []);

  return (
    <div className="bg-surface text-on-surface font-sans selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">

      <Navbar onNavigate={onNavigate} />

      <main className="flex-grow pt-16">

        {/* ── Hero ── */}
        <section
          className="relative min-h-[680px] flex items-center px-8 md:px-16 lg:px-24 overflow-hidden"
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
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-secondary"></span>
                <span className="text-secondary text-[10px] tracking-[0.35em] uppercase font-bold">Engineered Placement</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
                Precision<br />
                <span className="text-primary">Media</span><br />
                Architecture.
              </h1>

              <p className="text-xl leading-relaxed text-on-surface-variant max-w-2xl">
                Strategic media placement across traditional and digital landscapes, powered by architectural precision and real-time intelligence.
              </p>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
                className="inline-flex items-center gap-4 bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 font-bold text-sm tracking-widest uppercase hover:brightness-110 transition-all group"
              >
                Plan Your Placement
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* ── Service Pillars Bento Grid ── */}
        <section className="px-8 md:px-16 lg:px-24 py-24 bg-surface">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-1">

            {/* Pillar 1 — Traditional Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 bg-surface-container-low p-10 flex flex-col justify-between group hover:bg-surface-container-high transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <Tv className="text-primary w-9 h-9" />
                  <span className="text-[10px] uppercase tracking-widest text-outline">01 / Pillars</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-4">Traditional Media</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                  High-impact placement in OOH, Radio, and TV. We command attention where it matters most, leveraging physical presence to anchor brand identity.
                </p>
              </div>
              <div className="mt-10 flex gap-3">
                {['OOH', 'Radio', 'Television'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-surface-container-highest text-[10px] uppercase font-bold tracking-widest text-primary">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Pillar 2 — Digital & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 bg-primary p-10 flex flex-col justify-between"
            >
              <div>
                <Globe className="text-on-primary w-9 h-9 mb-10" />
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-4 text-on-primary">Digital &amp; Social</h3>
                <p className="text-on-primary/80 font-medium leading-relaxed">
                  Data-driven campaigns across Meta, Google, and emerging platforms with surgical targeting.
                </p>
              </div>
              <div className="mt-8">
                <div className="text-on-primary/20 text-6xl font-black tracking-tighter">↗</div>
              </div>
            </motion.div>

            {/* Pillar 3 — Programmatic Buying */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="md:col-span-4 bg-surface-container-highest p-10 flex flex-col justify-between border-l-4 border-secondary"
            >
              <div>
                <Cpu className="text-secondary w-9 h-9 mb-10" />
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-4">Programmatic Buying</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  AI-optimised real-time bidding for maximum efficiency. Every cent is allocated through algorithmic performance validation.
                </p>
              </div>
              <button
                onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
                className="mt-8 text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
              >
                Enquire <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>

            {/* Pillar 4 — Media Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-8 bg-surface-container-low p-10 flex flex-col md:flex-row gap-10 items-center"
            >
              <div className="flex-1">
                <Brain className="text-tertiary w-9 h-9 mb-10" />
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-4">Media Intelligence</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Using AI to predict trends and optimise ROI. Our intelligence layer sits above every placement, ensuring adaptive strategy in shifting markets.
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-surface-container-highest aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-black text-tertiary mb-2">AI</div>
                  <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Driven Insights</div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── Relativ Media Synergy ── */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-surface-container-lowest overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 skew-x-12 translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[2px] bg-primary"></span>
                <span className="text-primary text-[10px] tracking-[0.35em] uppercase font-bold">The Bridge</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight mb-8">
                Relativ Media<br />Synergy
              </h2>
              <p className="text-on-surface-variant text-xl leading-relaxed mb-4">
                Relativ Connect operates as the digital frontier for our mother agency, <span className="text-on-surface font-bold">Relativ Media</span>.
              </p>
              <p className="text-base leading-relaxed text-on-surface-variant mb-10">
                While Relativ Media dominates the physical world with large-format digital assets and premier OOH locations, Relativ Connect bridges the gap — unifying physical visibility with digital strategy to create a seamless omni-channel ecosystem for the modern brand.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-surface-container-high">
                  <div className="text-secondary text-3xl font-black mb-2">900+</div>
                  <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">OOH Assets</div>
                </div>
                <div className="p-6 bg-surface-container-high">
                  <div className="text-secondary text-3xl font-black mb-2">Omni</div>
                  <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Channel Bridge</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              <div className="relative bg-surface-container-high p-12 border border-outline-variant/20 w-full">
                <img
                  src="/relativ-media-logo.png"
                  alt="Relativ Media"
                  className="w-full max-w-xs mx-auto h-auto opacity-90"
                />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA / Form ── */}
        <section className="py-32 px-8 md:px-16 lg:px-24 bg-surface-container-lowest">
          <div className="max-w-screen-2xl mx-auto">
            <div className="bg-surface p-12 md:p-20 shadow-[0_0_64px_rgba(4,41,121,0.15)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                <div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-none">
                    Initiate<br /><span className="text-secondary">Strategy.</span>
                  </h2>
                  <p className="text-on-surface-variant mb-12 leading-relaxed">
                    Connect with our media architects to design your high-performance placement ecosystem.
                  </p>
                  <div className="space-y-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    <p className="flex items-center gap-4">
                      <Mail className="text-primary w-4 h-4 flex-shrink-0" />
                      solutions@relativconnect.com
                    </p>
                    <p className="flex items-center gap-4">
                      <Phone className="text-primary w-4 h-4 flex-shrink-0" />
                      +27 (0) 11 123 4567
                    </p>
                  </div>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Organisation</label>
                    <input
                      className="w-full bg-surface-container-high border-0 border-b border-outline-variant focus:border-primary focus:ring-0 outline-none text-on-surface p-3"
                      placeholder="Enter Company Name"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Primary Contact</label>
                    <input
                      className="w-full bg-surface-container-high border-0 border-b border-outline-variant focus:border-primary focus:ring-0 outline-none text-on-surface p-3"
                      placeholder="Email Address"
                      type="email"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Strategic Intent</label>
                    <textarea
                      className="w-full bg-surface-container-high border-0 border-b border-outline-variant focus:border-primary focus:ring-0 outline-none text-on-surface p-3 resize-none"
                      placeholder="How can we architect your media?"
                      rows={4}
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 font-black uppercase tracking-widest text-sm hover:brightness-110 active:scale-[0.98] transition-all"
                    type="submit"
                  >
                    Initiate Media Strategy
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

export default MediaPlacementPage;
