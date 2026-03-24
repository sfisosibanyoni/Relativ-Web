import { motion } from "motion/react";
import {
  ArrowRight,
  Compass,
  Megaphone,
  Palette,
  Globe,
  Calendar,
  Users,
  Camera,
  MessageSquare,
  Newspaper,
  Share2,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { useEffect } from "react";

interface MarketingCommsPageProps {
  onNavigate: (page: 'home' | 'case-study' | 'strategy' | 'design-creative' | 'ai-solutions' | 'marketing-comms' | 'privacy-policy' | 'terms-of-service') => void;
}

// ── Service definitions ───────────────────────────────────────────────────────
const services = [
  {
    icon: Compass,
    title: "Brand Strategy & Positioning",
    body: "We figure out who you are, what you stand for, and how you want to show up in the world. Brand architecture, tone of voice, messaging frameworks. The stuff that holds everything else together.",
    tags: ["Brand Audits", "Positioning", "Tone of Voice", "Brand Architecture"],
    bg: "bg-primary-container",
    iconColor: "text-on-primary-container",
    tagColor: "bg-primary/20 text-primary",
    col: "md:col-span-2",
    row: "md:row-span-1",
  },
  {
    icon: Megaphone,
    title: "Campaign Management",
    body: "Full-funnel ATL, BTL, and TTL campaigns, planned and executed from insight to impact. We handle the strategy, the buying, the execution, and the tracking.",
    tags: ["ATL / BTL / TTL", "Media Planning", "Campaign Tracking"],
    bg: "bg-surface-container-high",
    iconColor: "text-secondary",
    tagColor: "bg-secondary/10 text-secondary",
    col: "md:col-span-1",
    row: "md:row-span-1",
  },
  {
    icon: Palette,
    title: "Design & Creative Production",
    body: "Visuals that actually stop people mid-scroll. Brand collateral, campaign artwork, motion graphics, and print, all produced to a high standard without cutting corners.",
    tags: ["Brand Collateral", "Motion Graphics", "Print & Digital"],
    bg: "bg-surface-container-high",
    iconColor: "text-tertiary",
    tagColor: "bg-tertiary/10 text-tertiary",
    col: "md:col-span-1",
    row: "md:row-span-1",
  },
  {
    icon: Globe,
    title: "Digital & Web",
    body: "We design, build, and optimise your digital presence across websites and social ecosystems. Built to be found, built to convert, and built to grow with your business.",
    tags: ["Web Design & Dev", "SEO & SEM", "Email Marketing", "Landing Pages"],
    bg: "bg-surface-container-lowest",
    iconColor: "text-primary",
    tagColor: "bg-primary/10 text-primary",
    col: "md:col-span-1",
    row: "md:row-span-1",
  },
  {
    icon: Calendar,
    title: "Events & Activations",
    body: "End-to-end event production, from intimate boardroom briefings to large-scale continental summits. We handle the logistics, the creative direction, and the on-ground execution.",
    tags: ["Corporate Events", "Brand Activations", "Launches", "Exhibitions"],
    bg: "bg-secondary/10",
    iconColor: "text-secondary",
    tagColor: "bg-secondary/20 text-secondary",
    col: "md:col-span-2",
    row: "md:row-span-1",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    body: "High-quality visual content for brand, campaign, and event use. Our in-house production team delivers broadcast-quality output at any scale.",
    tags: ["Brand Photography", "Corporate Video", "Event Coverage"],
    bg: "bg-surface-container-high",
    iconColor: "text-tertiary",
    tagColor: "bg-tertiary/10 text-tertiary",
    col: "md:col-span-1",
    row: "md:row-span-1",
  },
  {
    icon: MessageSquare,
    title: "Internal Communications",
    body: "Clear and engaging communication for your people. From CEO messaging and staff newsletters to change management campaigns, we make sure the right message actually lands.",
    tags: ["Staff Newsletters", "CEO Comms", "Change Management", "Intranet Content"],
    bg: "bg-primary/10",
    iconColor: "text-primary",
    tagColor: "bg-primary/15 text-primary",
    col: "md:col-span-1",
    row: "md:row-span-1",
  },
  {
    icon: Newspaper,
    title: "PR & Media Relations",
    body: "We build your credibility through earned media. Strong narratives, real journalist relationships, and strategic placement in the conversations your audience is already having.",
    tags: ["Press Releases", "Media Pitching", "Crisis Comms", "Thought Leadership"],
    bg: "bg-surface-container-lowest",
    iconColor: "text-secondary",
    tagColor: "bg-secondary/10 text-secondary",
    col: "md:col-span-1",
    row: "md:row-span-1",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    body: "Consistent, always-on presence across all major platforms. Content calendars, community management, paid social, and monthly performance reporting so you always know what's working.",
    tags: ["Content Strategy", "Community Mgmt", "Paid Social", "Analytics"],
    bg: "bg-surface-container-high",
    iconColor: "text-tertiary",
    tagColor: "bg-tertiary/10 text-tertiary",
    col: "md:col-span-1",
    row: "md:row-span-1",
  },
  {
    icon: Users,
    title: "Influencer Management",
    body: "We match your brand with the right voices, from micro to macro creators, based on genuine audience alignment rather than follower counts. Every partnership is tracked for real results.",
    tags: ["Talent Sourcing", "Brief & Contract", "Performance Reporting"],
    bg: "bg-surface-container-high",
    iconColor: "text-primary",
    tagColor: "bg-primary/10 text-primary",
    col: "md:col-span-1",
    row: "md:row-span-1",
  },
];

const process = [
  { step: "01", title: "Discover", body: "We get under the skin of your brand, your audience, and the competitive landscape." },
  { step: "02", title: "Strategise", body: "We build a clear, practical plan that's tied to your actual business goals." },
  { step: "03", title: "Create", body: "We produce the content and assets your campaign needs, across every format." },
  { step: "04", title: "Deploy", body: "We get it live across every channel, at the right time, to the right people." },
  { step: "05", title: "Measure", body: "We track what's working, report back honestly, and keep optimising." },
];

// ─────────────────────────────────────────────────────────────────────────────

const MarketingCommsPage = ({ onNavigate }: MarketingCommsPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marketing & Communications | Relativ Connect";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Full-service 360 degree marketing and communications agency. Brand strategy, campaigns, design, digital, events, PR, internal communications and more.");
  }, []);

  const goContact = () => {
    onNavigate('home');
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <div className="bg-surface text-on-surface font-sans selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">

      {/* Navbar */}
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
          <button onClick={goContact} className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 font-bold tracking-tight active:scale-95 transition-transform rounded-none inline-block">
            Get in Touch
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-16">

        {/* ── Hero ── */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-surface-container-lowest">
          {/* Ambient glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]"></div>
          </div>

          <div className="relative z-10 max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">

            {/* Left copy */}
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-3 mb-8">
                <span className="w-8 h-[2px] bg-secondary"></span>
                <span className="text-secondary text-[10px] tracking-[0.35em] uppercase font-bold">Marketing & Communications</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase mb-8">
                Where<br />
                Strategy<br />
                <span className="text-primary">Meets</span><br />
                Story.
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl text-on-surface-variant max-w-lg leading-relaxed mb-10">
                We're a full-service marketing and communications partner. Brand strategy, creative production, digital, PR, events, internal communications and everything in between. One agency, every touchpoint.
              </motion.p>

              <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} onClick={goContact} className="inline-flex items-center gap-4 bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 font-bold text-sm tracking-widest uppercase hover:brightness-110 transition-all group">
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>

            {/* Right — service pill grid */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="grid grid-cols-2 gap-3">
              {[
                { label: "Brand Strategy",        color: "border-primary/40 text-primary" },
                { label: "Campaign Mgmt",         color: "border-secondary/40 text-secondary" },
                { label: "Design & Creative",     color: "border-tertiary/40 text-tertiary" },
                { label: "Digital & Web",         color: "border-primary/40 text-primary" },
                { label: "Events & Activations",  color: "border-secondary/40 text-secondary" },
                { label: "Photography & Video",   color: "border-tertiary/40 text-tertiary" },
                { label: "Internal Comms",        color: "border-primary/40 text-primary" },
                { label: "PR & Media Relations",  color: "border-secondary/40 text-secondary" },
                { label: "Social Media",          color: "border-tertiary/40 text-tertiary" },
                { label: "Influencer Mgmt",       color: "border-primary/40 text-primary" },
              ].map(({ label, color }, i) => (
                <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.05 }} className={`border ${color} px-4 py-3 text-xs font-bold uppercase tracking-widest`}>
                  {label}
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* ── Services Bento Grid ── */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16">
              <p className="text-[10px] uppercase tracking-[0.35em] text-on-surface-variant font-bold mb-3">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Our Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
              {services.map(({ icon: Icon, title, body, tags, bg, iconColor, tagColor, col }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`${col} ${bg} p-8 flex flex-col justify-between group hover:brightness-110 transition-all duration-300 border border-white/5`}
                >
                  <div>
                    <Icon className={`${iconColor} w-8 h-8 mb-6`} />
                    <h3 className="text-lg font-black tracking-tight uppercase mb-3">{title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{body}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className={`${tagColor} text-[10px] uppercase tracking-widest font-bold px-2 py-1`}>{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Approach ── */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-surface-container-lowest border-y border-outline-variant/10">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16">
              <p className="text-[10px] uppercase tracking-[0.35em] text-on-surface-variant font-bold mb-3">How We Work</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Our Approach</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-1">
              {process.map(({ step, title, body }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-8 bg-surface-container-high border border-outline-variant/10 group hover:bg-surface-container-highest transition-colors"
                >
                  <div className="text-5xl font-black text-primary/15 mb-6 leading-none">{step}</div>
                  <h3 className="text-lg font-black uppercase tracking-tight mb-3 text-on-surface">{title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{body}</p>
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-10 text-outline-variant">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Relativ Connect ── */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-surface">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[10px] uppercase tracking-[0.35em] text-secondary font-bold mb-4">Why Us</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
                One Partner.<br /><span className="text-primary">Every Channel.</span>
              </h2>
              <p className="text-xl leading-relaxed text-on-surface-variant mb-6">
                Most agencies do one or two things well. We handle the full picture. Strategy, creative, digital, production, and communications all sit under the same roof, which means your brand stays consistent and your team stops chasing five different suppliers.
              </p>
              <p className="text-base leading-relaxed text-on-surface-variant mb-10">
                We also have direct access to Relativ Media's 900+ OOH assets, making us one of the few agencies that can connect your digital strategy to large-format physical media at a continental scale.
              </p>
              <button onClick={goContact} className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-on-primary font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all group rounded-none">
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 gap-3">
              {[
                { icon: TrendingUp,    color: "text-secondary", bg: "bg-secondary/10",  label: "Measurable ROI on every engagement" },
                { icon: CheckCircle,   color: "text-primary",   bg: "bg-primary/10",    label: "Integrated strategy across all channels" },
                { icon: Palette,       color: "text-tertiary",  bg: "bg-tertiary/10",   label: "In-house creative production, no outsourcing" },
                { icon: Globe,         color: "text-secondary", bg: "bg-secondary/10",  label: "Digital-first, pan-African in reach" },
                { icon: MessageSquare, color: "text-primary",   bg: "bg-primary/10",    label: "Internal and external comms under one roof" },
                { icon: Share2,        color: "text-tertiary",  bg: "bg-tertiary/10",   label: "Omni-channel execution backed by Relativ Media OOH" },
              ].map(({ icon: Icon, color, bg, label }, i) => (
                <motion.div key={label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-center gap-5 p-5 bg-surface-container-low border border-outline-variant/10 hover:border-outline-variant/30 transition-colors">
                  <div className={`${bg} p-3 flex-shrink-0`}>
                    <Icon className={`${color} w-5 h-5`} />
                  </div>
                  <span className="font-medium text-sm">{label}</span>
                </motion.div>
              ))}
            </motion.div>

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

export default MarketingCommsPage;
