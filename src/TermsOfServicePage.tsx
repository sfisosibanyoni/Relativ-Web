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

export default function TermsOfServicePage({ onNavigate }: LegalPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service | Relativ Connect";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Terms of Service for Relativ Connect (Pty) Ltd — governing the use of our website and services under South African law including the CPA and ECTA.");
  }, []);

  return (
    <div className="bg-surface text-on-surface font-sans min-h-screen">
      <Navbar onNavigate={onNavigate} />

      <main className="pt-32 pb-24 px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold block mb-4">Legal</span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-4">Terms of Service</h1>
            <p className="text-on-surface-variant text-sm">Last updated: March 2026 &nbsp;·&nbsp; Relativ Connect (Pty) Ltd</p>
          </div>

          <Section title="1. Introduction">
            <p>
              These Terms of Service ("Terms") govern your use of the Relativ Connect website and any services provided by <strong className="text-on-surface">Relativ Connect (Pty) Ltd</strong>, a company registered in South Africa ("Relativ Connect", "we", "us", or "our").
            </p>
            <p>
              By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.
            </p>
          </Section>

          <Section title="2. Services">
            <p>
              Relativ Connect provides full-service marketing, strategy, design, AI solutions, and communications services. The specific scope, deliverables, timelines, and fees for any engagement will be agreed upon in a separate written agreement or proposal ("Service Agreement") between Relativ Connect and the client.
            </p>
            <p>
              Nothing on this website constitutes a binding offer to provide services. All engagements are subject to a signed Service Agreement.
            </p>
          </Section>

          <Section title="3. Intellectual Property">
            <p>
              All content on this website — including text, graphics, logos, images, and software — is the property of Relativ Connect (Pty) Ltd or its licensors and is protected by South African copyright law and applicable international treaties.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.
            </p>
            <p>
              Work product created for clients under a Service Agreement remains the property of Relativ Connect until full payment is received, unless otherwise agreed in writing.
            </p>
          </Section>

          <Section title="4. Use of the Website">
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the website for any unlawful purpose or in violation of any applicable South African or international law.</li>
              <li>Attempt to gain unauthorised access to any part of the website or its underlying systems.</li>
              <li>Transmit any harmful, offensive, or malicious content via the website.</li>
              <li>Use automated tools to scrape, crawl, or extract data from the website without our written consent.</li>
            </ul>
          </Section>

          <Section title="5. Disclaimers">
            <p>
              The information on this website is provided for general informational purposes only. While we endeavour to keep information accurate and up to date, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, or reliability of any content.
            </p>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of those websites.
            </p>
          </Section>

          <Section title="6. Limitation of Liability">
            <p>
              To the maximum extent permitted by South African law, Relativ Connect shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or our services.
            </p>
            <p>
              Our total aggregate liability to you in connection with any claim arising from these Terms or your use of our services shall not exceed the amount paid by you to us in the three (3) months preceding the claim.
            </p>
          </Section>

          <Section title="7. Confidentiality">
            <p>
              Any confidential information shared between Relativ Connect and a client in the course of a service engagement shall be treated as confidential by both parties. This obligation survives the termination of any Service Agreement.
            </p>
          </Section>

          <Section title="8. Payment Terms">
            <p>
              Unless otherwise specified in a Service Agreement, invoices are due within <strong className="text-on-surface">30 days</strong> of the invoice date. Late payments may be subject to interest at the rate prescribed under the <strong className="text-on-surface">Prescribed Rate of Interest Act 55 of 1975</strong>, as amended.
            </p>
            <p>
              Relativ Connect reserves the right to suspend services where invoices remain unpaid beyond agreed terms.
            </p>
          </Section>

          <Section title="9. Termination">
            <p>
              Either party may terminate a Service Agreement in accordance with the notice provisions set out therein. In the absence of specific provisions, either party may terminate with <strong className="text-on-surface">30 days' written notice</strong>.
            </p>
            <p>
              Upon termination, any outstanding fees for work completed to date remain payable.
            </p>
          </Section>

          <Section title="10. Governing Law & Jurisdiction">
            <p>
              These Terms are governed by the laws of the <strong className="text-on-surface">Republic of South Africa</strong>. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of South Africa, with the parties consenting to jurisdiction in the Gauteng Division, Johannesburg.
            </p>
          </Section>

          <Section title="11. Consumer Protection">
            <p>
              Where applicable, these Terms are subject to the <strong className="text-on-surface">Consumer Protection Act 68 of 2008 (CPA)</strong> and the <strong className="text-on-surface">Electronic Communications and Transactions Act 25 of 2002 (ECTA)</strong>. Nothing in these Terms is intended to limit any rights you may have under applicable South African consumer protection legislation.
            </p>
          </Section>

          <Section title="12. Changes to These Terms">
            <p>
              We may update these Terms from time to time. Updated Terms will be posted on our website with a revised date. Continued use of the website or our services after any changes constitutes acceptance of the updated Terms.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>
              For any questions regarding these Terms, please contact us at:
            </p>
            <p>
              <strong className="text-on-surface">Relativ Connect (Pty) Ltd</strong><br />
              Johannesburg, South Africa<br />
              <span className="text-primary">info@relativconnect.co.za</span>
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
