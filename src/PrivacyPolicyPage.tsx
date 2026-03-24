import * as React from "react";
import Navbar from "./Navbar";

interface LegalPageProps {
  onNavigate: (page: 'home' | 'case-study' | 'strategy' | 'design-creative' | 'ai-solutions' | 'marketing-comms' | 'privacy-policy' | 'terms-of-service') => void;
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-on-surface uppercase tracking-widest mb-4 border-l-4 border-primary pl-4">{title}</h2>
    <div className="text-on-surface-variant leading-relaxed space-y-3 text-sm md:text-base">{children}</div>
  </div>
);

export default function PrivacyPolicyPage({ onNavigate }: LegalPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy | Relativ Connect";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Relativ Connect's Privacy Policy — how we collect, use, and protect your personal information in accordance with South Africa's POPIA legislation.");
  }, []);

  return (
    <div className="bg-surface text-on-surface font-sans min-h-screen">
      <Navbar onNavigate={onNavigate} />

      <main className="pt-32 pb-24 px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold block mb-4">Legal</span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-4">Privacy Policy</h1>
            <p className="text-on-surface-variant text-sm">Last updated: March 2026 &nbsp;·&nbsp; Relativ Connect (Pty) Ltd</p>
          </div>

          <Section title="1. Introduction">
            <p>
              Relativ Connect (Pty) Ltd ("Relativ Connect", "we", "us", or "our") is committed to protecting your personal information in accordance with the <strong className="text-on-surface">Protection of Personal Information Act 4 of 2013 (POPIA)</strong> and all applicable South African data protection legislation.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with our website, services, or communications.
            </p>
          </Section>

          <Section title="2. Who We Are">
            <p>
              Relativ Connect (Pty) Ltd is a full-service marketing agency registered in South Africa. We are a subsidiary of Relativ Media (Pty) Ltd. Our registered office is in Johannesburg, South Africa.
            </p>
            <p>
              For the purposes of POPIA, Relativ Connect is the <strong className="text-on-surface">Responsible Party</strong> for the personal information we process.
            </p>
          </Section>

          <Section title="3. Information We Collect">
            <p>We may collect the following categories of personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-on-surface">Contact information:</strong> name, email address, phone number, job title, and company name.</li>
              <li><strong className="text-on-surface">Communication data:</strong> messages, enquiries, and feedback you send us.</li>
              <li><strong className="text-on-surface">Usage data:</strong> IP address, browser type, pages visited, and time spent on our website (via cookies and analytics tools).</li>
              <li><strong className="text-on-surface">Business information:</strong> information provided as part of a business engagement or proposal process.</li>
            </ul>
            <p>We do not intentionally collect sensitive personal information (as defined in POPIA) unless strictly necessary and with your explicit consent.</p>
          </Section>

          <Section title="4. How We Use Your Information">
            <p>We process your personal information for the following lawful purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to enquiries and provide our services.</li>
              <li>To send marketing communications where you have opted in or where a legitimate interest exists.</li>
              <li>To improve our website and service offerings.</li>
              <li>To comply with legal obligations under South African law.</li>
              <li>To manage and fulfil contractual obligations with clients and partners.</li>
            </ul>
          </Section>

          <Section title="5. Sharing of Information">
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers and operators acting on our behalf (e.g. email platforms, analytics providers), who are contractually bound to protect your data.</li>
              <li>Our parent company, Relativ Media (Pty) Ltd, where relevant to a shared service or engagement.</li>
              <li>Regulatory authorities or law enforcement where required by South African law.</li>
            </ul>
            <p>
              Where personal information is transferred outside of South Africa, we ensure adequate protections are in place as required by POPIA Section 72.
            </p>
          </Section>

          <Section title="6. Cookies">
            <p>
              Our website uses cookies to enhance your browsing experience and gather anonymous analytics data. You may disable cookies through your browser settings, though some features of the site may be affected.
            </p>
            <p>
              We do not use cookies to build personal profiles or serve targeted advertising without your consent.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable South African legislation. Once no longer required, personal information is securely deleted or anonymised.
            </p>
          </Section>

          <Section title="8. Your Rights Under POPIA">
            <p>As a data subject, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to your personal information held by us.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Request deletion of your personal information (subject to legal retention requirements).</li>
              <li>Object to the processing of your personal information.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Lodge a complaint with the <strong className="text-on-surface">Information Regulator of South Africa</strong> at <span className="text-primary">inforeg.org.za</span>.</li>
            </ul>
            <p>To exercise any of these rights, please contact our Information Officer (details below).</p>
          </Section>

          <Section title="9. Information Officer">
            <p>
              In terms of POPIA, Relativ Connect has appointed an Information Officer responsible for overseeing compliance with data protection obligations.
            </p>
            <p>
              <strong className="text-on-surface">Contact:</strong> info@relativconnect.co.za
            </p>
          </Section>

          <Section title="10. Security">
            <p>
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on our website with a revised date. We encourage you to review this page periodically.
            </p>
          </Section>

          <div className="mt-12 pt-8 border-t border-outline-variant/20">
            <p className="text-on-surface-variant text-xs uppercase tracking-widest">© 2026 Relativ Connect (Pty) Ltd · Johannesburg, South Africa</p>
          </div>
        </div>
      </main>
    </div>
  );
}
