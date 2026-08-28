import React from 'react';
import { X, ShieldAlert, FileText, Mail, Lock } from 'lucide-react';
import { BRAND } from '../config';

export default function LegalModals({ activeModal, onClose }) {
  if (!activeModal) return null;

  const contentMap = {
    privacy: {
      title: "Privacy Policy",
      icon: Lock,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#b8b5ab] leading-relaxed">
          <p>
            At <strong>{BRAND.name}</strong>, we hold your personal discretion and privacy in the highest regard. This policy outlines how information is handled when you interact with our website and request our educational guides.
          </p>
          <h4 className="font-serif text-sm font-bold text-[#eae8e3]">1. Information Collection</h4>
          <p>
            We only collect basic contact information (such as your email address) when you voluntarily submit it to request educational resources such as <em>The Art of Stamina</em>. We do not collect sensitive medical data or financial billing credentials for free resources.
          </p>
          <h4 className="font-serif text-sm font-bold text-[#eae8e3]">2. Use of Information</h4>
          <p>
            Your information is used strictly to deliver the requested digital guide and send periodic educational wellness insights from Art of Stamina. You may unsubscribe from any communications at any time with a single click.
          </p>
          <h4 className="font-serif text-sm font-bold text-[#eae8e3]">3. Confidentiality &amp; Third Parties</h4>
          <p>
            We never sell, rent, or trade your personal details to third-party marketing brokers or advertisers. All transmissions are processed over encrypted SSL protocols.
          </p>
        </div>
      ),
    },
    terms: {
      title: "Terms of Service",
      icon: FileText,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#b8b5ab] leading-relaxed">
          <p>
            Welcome to <strong>{BRAND.name}</strong>. By accessing our website and downloading our free digital guides, you agree to comply with the following terms.
          </p>
          <h4 className="font-serif text-sm font-bold text-[#eae8e3]">1. Educational Content</h4>
          <p>
            All materials published by Art of Stamina, including <em>The Art of Stamina</em>, are provided exclusively for personal educational and informational purposes.
          </p>
          <h4 className="font-serif text-sm font-bold text-[#eae8e3]">2. Intellectual Property</h4>
          <p>
            All book text, layout designs, diagrams, brand assets, and code are the intellectual property of Art of Stamina. Content may not be redistributed, resold, or repackaged without prior written consent.
          </p>
          <h4 className="font-serif text-sm font-bold text-[#eae8e3]">3. Age Requirement</h4>
          <p>
            This website and its associated wellness materials are intended exclusively for consenting adults aged 18 years and older.
          </p>
        </div>
      ),
    },
    disclaimer: {
      title: "Medical & Educational Disclaimer",
      icon: ShieldAlert,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#b8b5ab] leading-relaxed">
          <div className="bg-[#1e202d] border border-[#c5a059]/40 p-3.5 rounded-lg text-[#dfc58b] text-xs">
            <strong>Important Notice:</strong> The materials provided by Art of Stamina are not medical advice, clinical diagnostics, or pharmacological prescriptions.
          </div>
          <p>
            The content provided in <em>The Art of Stamina</em> and on this website is for educational and informational purposes only. It explores natural physiological concepts, breathwork, relaxation exercises, and partner communication frameworks.
          </p>
          <p>
            Individual experiences and physiological responses vary naturally. Nothing contained herein should be interpreted as a medical diagnosis, treatment plan, or guarantee of specific outcomes.
          </p>
          <p>
            Always consult a licensed medical professional, urologist, or qualified healthcare provider regarding any persistent physiological symptoms or questions regarding your personal health.
          </p>
        </div>
      ),
    },
    contact: {
      title: "Contact & Editorial Office",
      icon: Mail,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#b8b5ab] leading-relaxed">
          <p>
            Have feedback on <em>The Art of Stamina</em>, questions about our educational guides, or press inquiries? We are here to help.
          </p>
          <div className="bg-[#141620] border border-white/10 rounded-lg p-4 space-y-2">
            <div className="text-xs text-[#828493] uppercase tracking-wider">Editorial &amp; Reader Support:</div>
            <div className="text-sm font-semibold text-[#dfc58b]">contact@artofstamina.com</div>
            <div className="text-xs text-[#a5a39c]">Response time: Within 24-48 business hours</div>
          </div>
          <p className="text-xs text-[#828493]">
            For privacy inquiries or data management requests, please include "Privacy Request" in your subject line.
          </p>
        </div>
      ),
    },
  };

  const modal = contentMap[activeModal] || contentMap.disclaimer;
  const Icon = modal.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#14151e] border border-white/15 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl z-10 text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#8e909a] hover:text-[#eae8e3] hover:bg-white/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-[#dfc58b] mb-4">
          <div className="w-8 h-8 rounded-lg bg-[#1e202d] border border-[#c5a059]/40 flex items-center justify-center">
            <Icon className="w-4 h-4 text-[#c5a059]" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#fbf9f4]">
            {modal.title}
          </h3>
        </div>

        <div className="max-h-[60vh] overflow-y-auto pr-1">
          {modal.body}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#232534] text-xs font-semibold uppercase tracking-wider text-[#eae8e3] hover:bg-[#2d3042] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
