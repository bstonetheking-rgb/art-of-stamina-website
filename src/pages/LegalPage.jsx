import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, AlertTriangle, Download, ChevronRight } from 'lucide-react';
import { BRAND } from '../config';
import { triggerContentLocker } from '../utils/locker';

export default function LegalPage({ onOpenGuide }) {
  const location = useLocation();
  const path = location.pathname;

  const handleLockerClick = (e) => {
    triggerContentLocker(e);
  };

  let title = "Legal Information";
  let content = null;

  if (path.includes('privacy')) {
    title = "Privacy Policy";
    content = (
      <div className="space-y-6 text-[#b8b5ab] text-sm leading-relaxed">
        <p>Last updated: August 2026</p>
        <h3 className="text-lg font-bold text-white font-serif">1. Overview</h3>
        <p>Art of Stamina ("we", "our", or "us") is dedicated to protecting user privacy. This website does not require mandatory account registration or personal medical record submissions to read our free educational content or access complimentary digital publications.</p>
        <h3 className="text-lg font-bold text-white font-serif">2. Information We Collect</h3>
        <p>We may receive standard non-personally identifiable technical data such as browser type, operating system, approximate region, and referring URL strictly to optimize layout responsiveness and server performance.</p>
        <h3 className="text-lg font-bold text-white font-serif">3. Third-Party Services</h3>
        <p>Third-party content distribution and verification networks (including CPA distribution networks) may set anonymous cookies to verify offer completion before unlocking digital download links. We do not sell or trade any personal information.</p>
        <h3 className="text-lg font-bold text-white font-serif">4. Data Security</h3>
        <p>We deploy standard SSL encryption and industry-standard security practices to protect website visitors.</p>
      </div>
    );
  } else if (path.includes('terms')) {
    title = "Terms of Service";
    content = (
      <div className="space-y-6 text-[#b8b5ab] text-sm leading-relaxed">
        <p>Last updated: August 2026</p>
        <h3 className="text-lg font-bold text-white font-serif">1. Acceptance of Terms</h3>
        <p>By accessing or utilizing the Art of Stamina website, digital guides, articles, or downloadable PDFs, you agree to comply with and be bound by these Terms of Service.</p>
        <h3 className="text-lg font-bold text-white font-serif">2. Educational Use Only</h3>
        <p>All materials published on Art of Stamina are provided exclusively for informational, educational, and personal enrichment purposes. They do not constitute formal medical, psychiatric, or diagnostic advice.</p>
        <h3 className="text-lg font-bold text-white font-serif">3. Intellectual Property</h3>
        <p>All texts, diagrams, custom illustrations, and original monographs are protected under international copyright law. Unauthorized mass republication without attribution is prohibited.</p>
      </div>
    );
  } else {
    title = "Medical & Health Disclaimer";
    content = (
      <div className="space-y-6 text-[#b8b5ab] text-sm leading-relaxed">
        <p>Last updated: August 2026</p>
        <div className="p-4 rounded-xl bg-[#2a1717] border border-[#f87171]/40 text-[#fca5a5] flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-bold">Not a Substitute for Professional Medical Care</div>
            <div className="text-xs mt-1">Always seek the advice of your physician or qualified health provider regarding any medical condition.</div>
          </div>
        </div>
        <h3 className="text-lg font-bold text-white font-serif">1. No Doctor-Patient Relationship</h3>
        <p>The information, exercises (including pelvic floor relaxation and Reverse Kegels), dietary concepts (such as nitric oxide nutrition), and pacing protocols provided by Art of Stamina are intended solely for general adult wellness and educational awareness.</p>
        <h3 className="text-lg font-bold text-white font-serif">2. Individual Physiological Variations</h3>
        <p>Every human body responds uniquely. If you experience persistent pelvic pain, erectile dysfunction, urinary symptoms, or cardiovascular discomfort, consult a board-certified urologist, pelvic physical therapist, or primary physician immediately.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#eae8e3] font-sans antialiased selection:bg-[#c5a059]/30 selection:text-[#fbf9f4]">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/10 py-4 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfc58b] hover:text-white no-underline">
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO HOME</span>
          </Link>
          <div className="font-serif font-bold text-sm text-[#eae8e3]">
            {BRAND.name} LEGAL
          </div>
          <Link to="/blog" className="text-xs text-[#b8b5ab] hover:text-[#dfc58b] no-underline">
            Articles
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#13151f] border border-white/10 shadow-2xl space-y-6">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-4">
            {title}
          </h1>
          {content}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#07080a] border-t border-white/10 py-8 text-center text-xs text-[#6e7080]">
        <div className="max-w-2xl mx-auto px-4 space-y-3">
          <div className="flex justify-center gap-4 text-xs text-[#8e909a]">
            <Link to="/" className="hover:text-[#dfc58b] no-underline">Home</Link>
            <span>•</span>
            <Link to="/blog" className="hover:text-[#dfc58b] no-underline">Blog</Link>
            <span>•</span>
            <Link to="/privacy-policy" className="hover:text-white no-underline">Privacy</Link>
            <span>•</span>
            <Link to="/terms-of-service" className="hover:text-white no-underline">Terms</Link>
            <span>•</span>
            <Link to="/medical-disclaimer" className="hover:text-white no-underline">Disclaimer</Link>
          </div>
          <p>© 2026 {BRAND.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
