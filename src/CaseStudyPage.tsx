import { motion, useInView, useMotionValue, useTransform, animate, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import * as React from "react";
import Navbar from "./Navbar";
import {
  ArrowRight,
  CreditCard,
  Users,
  Globe,
  Radio,
  BookOpen,
  Layout,
  Instagram,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";

// ── Gallery images with tile layout spans ──────────────────────────────────
const galleryImages = [
  { src: "/gallery/iatf-01.jpg", alt: "IATF 2025 — Conference session",      col: "md:col-span-2", row: "md:row-span-2" },
  { src: "/gallery/iatf-02.jpg", alt: "IATF 2025 — Exhibition floor",        col: "md:col-span-1", row: "md:row-span-1" },
  { src: "/gallery/iatf-03.jpg", alt: "IATF 2025 — Panel discussion",        col: "md:col-span-1", row: "md:row-span-1" },
  { src: "/gallery/iatf-04.jpg", alt: "IATF 2025 — Trade delegates",         col: "md:col-span-1", row: "md:row-span-2" },
  { src: "/gallery/iatf-05.jpg", alt: "IATF 2025 — Opening ceremony",        col: "md:col-span-2", row: "md:row-span-1" },
  { src: "/gallery/iatf-06.jpg", alt: "IATF 2025 — Networking event",        col: "md:col-span-1", row: "md:row-span-1" },
  { src: "/gallery/iatf-07.jpg", alt: "IATF 2025 — Brand activation",        col: "md:col-span-1", row: "md:row-span-1" },
  { src: "/gallery/iatf-08.jpg", alt: "IATF 2025 — Keynote address",         col: "md:col-span-2", row: "md:row-span-1" },
  { src: "/gallery/iatf-09.jpg", alt: "IATF 2025 — Exhibit hall",            col: "md:col-span-1", row: "md:row-span-2" },
  { src: "/gallery/iatf-10.jpg", alt: "IATF 2025 — AfCFTA Marketplace",      col: "md:col-span-1", row: "md:row-span-1" },
  { src: "/gallery/iatf-11.jpg", alt: "IATF 2025 — Stage presentation",      col: "md:col-span-1", row: "md:row-span-1" },
  { src: "/gallery/iatf-12.jpg", alt: "IATF 2025 — Media coverage",          col: "md:col-span-2", row: "md:row-span-1" },
  { src: "/gallery/iatf-13.jpg", alt: "IATF 2025 — Business summit",         col: "md:col-span-1", row: "md:row-span-1" },
  { src: "/gallery/iatf-14.jpg", alt: "IATF 2025 — Award ceremony",          col: "md:col-span-1", row: "md:row-span-1" },
  { src: "/gallery/iatf-15.jpg", alt: "IATF 2025 — Trade facilitation",      col: "md:col-span-1", row: "md:row-span-1" },
  { src: "/gallery/iatf-16.jpg", alt: "IATF 2025 — Closing plenary",         col: "md:col-span-1", row: "md:row-span-1" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i! - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setLightbox((i) => (i! + 1) % galleryImages.length);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") setLightbox(null);
  };

  return (
    <section className="py-24">
      {/* Heading */}
      <div className="px-8 md:px-16 lg:px-24 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-primary"></span>
          <span className="text-primary text-[10px] tracking-[0.35em] uppercase font-bold">Event Photography</span>
        </div>
        <h2 className="text-4xl font-black tracking-tighter uppercase">Gallery</h2>
      </div>

      {/* Tiled grid */}
      <div className="px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-2">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              onClick={() => setLightbox(i)}
              className={`${img.col} ${img.row} relative overflow-hidden cursor-pointer group bg-surface-container-high`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 drop-shadow-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
          onKeyDown={handleKey}
          tabIndex={0}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image */}
          <motion.img
            key={lightbox}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-widest font-bold">
            {lightbox + 1} / {galleryImages.length}
          </div>
        </motion.div>
      )}
    </section>
  );
};

interface CaseStudyPageProps {
  onNavigate: (page: 'home' | 'case-study' | 'strategy' | 'design-creative' | 'ai-solutions' | 'marketing-comms' | 'privacy-policy' | 'terms-of-service') => void;
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

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "IATF 2025 Case Study — Pan-African Trade Campaign | Relativ Connect";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "How Relativ Connect served as lead marketing agency for IATF 2025, driving $48B in trade facilitation, 4M+ DOOH impressions, and 100K+ visitors across 132 countries.");
  }, []);

  return (
    <div className="bg-surface text-on-surface font-sans selection:bg-primary selection:text-on-primary">
      <Navbar onNavigate={onNavigate} />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">

          {/* Left — Copy */}
          <div className="relative z-10 flex flex-col justify-between w-full lg:w-1/2 px-8 md:px-16 lg:px-24 py-24 bg-surface">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 mb-10"
              >
                <span className="w-8 h-[2px] bg-primary"></span>
                <span className="text-[10px] uppercase tracking-[0.35em] text-primary font-bold">Project Case Study</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase mb-8"
              >
                IATF<br/>
                2025<br/>
                <span className="text-primary">Pan-African</span><br/>
                Trade.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl leading-relaxed text-on-surface-variant max-w-md mb-12"
              >
                Architecting the largest intra-African trade exchange through strategic marketing precision and continental reach.
              </motion.p>

              {/* Meta tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="flex flex-wrap gap-3"
              >
                {['Lead Marketing Agency', '55 Countries', 'B2B + B2C', 'IATF 2025'].map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-4 py-2 border border-outline-variant/30 text-on-surface-variant">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Bottom stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-12 mt-16 pt-8 border-t border-outline-variant/20"
            >
              <div>
                <div className="text-4xl font-black text-primary">$48B</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1">Trade Facilitated</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary">4M+</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1">DOOH Impressions</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary">132</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1">Countries</div>
              </div>
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen overflow-hidden"
          >
            <motion.img
              style={{ y: yBg }}
              src="/iatf-casestudy.jpg"
              alt="IATF 2025 — The AfCFTA Marketplace"
              className="absolute inset-0 w-full h-full object-cover scale-110"
            />
            {/* Edge gradient blending into left panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/10 to-transparent lg:block hidden"></div>
            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent"></div>

            {/* Floating label */}
            <div className="absolute bottom-8 right-8 bg-black/70 backdrop-blur-sm px-5 py-3 border border-white/10">
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Algiers, Algeria — 2025</p>
            </div>
          </motion.div>

        </section>

        {/* Role Overview */}
        <section className="px-8 py-24 md:px-16 lg:px-24 bg-surface-container-lowest">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.35em] text-secondary font-bold mb-8">Role Overview</h2>
              <div className="space-y-6">
                <div className="p-6 bg-surface-container-low border-l-4 border-primary">
                  <p className="text-[10px] uppercase text-on-surface-variant mb-2 font-bold tracking-widest">Agency Name</p>
                  <p className="text-xl font-black">Relativ Connect</p>
                </div>
                <div className="p-6 bg-surface-container-low border-l-4 border-secondary">
                  <p className="text-[10px] uppercase text-on-surface-variant mb-2 font-bold tracking-widest">Our Mandate</p>
                  <p className="text-xl font-black">Lead Marketing Agency</p>
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
          <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter uppercase">Key Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Large Primary Stat */}
            <div className="md:col-span-2 md:row-span-2 bg-primary-container p-12 flex flex-col justify-between group overflow-hidden relative">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/d/1E_r_2_W-2_W-2_W-2_W-2_W-2_W-2_W-2_W"
                alt=""
                aria-hidden="true"
              />
              <div className="relative z-10">
                <CreditCard className="w-12 h-12 mb-6 text-on-primary-container" />
                <h3 className="text-6xl md:text-8xl font-black text-primary tracking-tighter">
                  <Counter value={48} prefix="$" suffix="B" />
                </h3>
              </div>
              <p className="relative z-10 text-xl font-black text-on-primary-container max-w-xs uppercase tracking-tight">Trade deals facilitated through integrated promotion strategy.</p>
            </div>
            {/* Impressions */}
            <div className="bg-surface-container-high p-8 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">DOOH Visibility</p>
              <h3 className="text-4xl font-black text-secondary">
                <Counter value={4} suffix="M+" />
              </h3>
              <p className="text-sm text-on-surface-variant mt-2">Verified Airport impressions globally.</p>
            </div>
            {/* Countries */}
            <div className="bg-surface-container-high p-8 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Global Participation</p>
              <h3 className="text-4xl font-black">
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
                <p className="text-xl font-black uppercase tracking-tight">Total Attendance</p>
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
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase">Strategy & <br/><span className="text-secondary">Execution</span></h2>
                <div className="w-16 h-1 bg-secondary mb-8"></div>
                <p className="text-on-surface-variant leading-relaxed">
                  Our approach utilized a multi-layered media architecture, combining high-authority editorial with algorithmic digital precision.
                </p>
              </div>
              <div className="md:w-2/3 grid gap-4">
                <div className="bg-surface-container-highest p-8 flex gap-6">
                  <Radio className="text-primary w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="text-xl font-black mb-2 uppercase tracking-tight">Global Broadcast Reach</h4>
                    <p className="text-on-surface-variant">Domination of premium news channels including CNN Africa, BBC News, and Al Jazeera to establish continental authority.</p>
                  </div>
                </div>
                <div className="bg-surface-container-highest p-8 flex gap-6">
                  <BookOpen className="text-primary w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="text-xl font-black mb-2 uppercase tracking-tight">Trusted Editorial Authority</h4>
                    <p className="text-on-surface-variant">Strategic print and engagement partnerships with Forbes Afrique and The Guardian to capture the C-Suite and policy-makers.</p>
                  </div>
                </div>
                <div className="bg-surface-container-highest p-8 flex gap-6">
                  <Globe className="text-primary w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="text-xl font-black mb-2 uppercase tracking-tight">55-Nation Coordination</h4>
                    <p className="text-on-surface-variant">Executing a localized yet unified message across diverse linguistic and cultural markets within the African continent.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <GallerySection />

        {/* Contact CTA */}
        <section className="px-8 py-32 md:px-16 lg:px-24 bg-surface-container-lowest relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-32"></div>
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Ready to grow your business?</h2>
            <p className="text-xl text-on-surface-variant mb-12 max-w-2xl">
              We combine strategy and creative design to help you reach more customers and scale your brand. Let's talk about how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="bg-primary text-on-primary font-bold px-12 py-5 text-lg hover:brightness-110 transition-all rounded-none">GET IN TOUCH</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black w-full border-t border-slate-800/30">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-screen-2xl mx-auto">
          <div className="mb-8 md:mb-0">
            <img 
              alt="Relativ Connect logo" 
              className="h-8 w-auto mb-4 opacity-80"
              src="/logo.png"
            />
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">© 2025 Relativ Connect. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-8 justify-center">
            <button onClick={() => onNavigate('privacy-policy')} className="text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-primary transition-colors opacity-80 hover:opacity-100">Privacy Policy</button>
            <button onClick={() => onNavigate('terms-of-service')} className="text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-primary transition-colors opacity-80 hover:opacity-100">Terms of Service</button>
            <a className="text-slate-500 hover:text-primary transition-colors" href="#"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyPage;
