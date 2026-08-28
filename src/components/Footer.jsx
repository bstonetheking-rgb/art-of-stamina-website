import React from 'react';
import { Shield, BookOpen, Heart } from 'lucide-react';
import { BRAND } from '../config';

export default function Footer({ onOpenLegal, onOpenGuide }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08090c] border-t border-white/10 pt-16 pb-12 text-[#828493] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand & Slogan */}
          <div className="md:col-span-6 space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded border border-[#c5a059]/60 flex items-center justify-center bg-[#181a24]">
                <span className="font-serif font-bold text-xs text-[#dfc58b]">AS</span>
              </div>
              <span className="font-serif font-bold text-base tracking-[0.2em] text-[#eae8e3] uppercase">
                {BRAND.name}
              </span>
            </div>

            <p className="font-serif italic text-sm text-[#c5a059]">
              "{BRAND.tagline}"
            </p>

            <p className="text-xs text-[#787a88] max-w-md font-light leading-relaxed">
              Art of Stamina provides discreet, natural physiology and endurance education designed to help men develop understanding, relaxation, and genuine bedroom confidence.
            </p>
          </div>

          {/* Guide Quick Access */}
          <div className="md:col-span-3 space-y-3 text-left">
            <div className="text-xs font-semibold text-[#dfc58b] uppercase tracking-wider">
              Free Guide
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={onOpenGuide}
                  className="hover:text-[#eae8e3] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>The Art of Stamina (PDF)</span>
                </button>
              </li>
              <li>
                <span className="text-[#646675]">68-Page Comprehensive Edition</span>
              </li>
              <li>
                <span className="text-[#646675]">100% Free Instant Download</span>
              </li>
            </ul>
          </div>

          {/* Legal / Institutional Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <div className="text-xs font-semibold text-[#dfc58b] uppercase tracking-wider">
              Discreet &amp; Legal
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#eae8e3] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-[#eae8e3] transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal('disclaimer')}
                  className="hover:text-[#eae8e3] transition-colors cursor-pointer"
                >
                  Medical Disclaimer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal('contact')}
                  className="hover:text-[#eae8e3] transition-colors cursor-pointer"
                >
                  Contact &amp; Support
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer Row */}
        <div className="pt-8 space-y-4 text-left">
          <div className="p-4 rounded-lg bg-[#0e0f15] border border-white/5 text-[11px] leading-relaxed text-[#6f7180]">
            <strong className="text-[#8e909a]">Discreet Disclaimer:</strong> This content is for educational and informational purposes only and is not medical advice. Individual experiences may vary. The Art of Stamina explores natural physiology, mindfulness, breath techniques, and communication frameworks.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#626473] pt-2">
            <div>
              &copy; {currentYear} {BRAND.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <Shield className="w-3 h-3 text-[#c5a059]" />
              <span>Discreet Packaging &amp; Secure Digital Distribution</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
