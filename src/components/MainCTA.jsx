import React from 'react';
import { Download, ShieldCheck, Sparkles, CheckCircle2, Lock } from 'lucide-react';
import BookMockup from './BookMockup';
import { BRAND } from '../config';

export default function MainCTA({ onOpenGuide }) {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-radial-center border-t border-b border-white/10">
      {/* Intense but elegant ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-r from-[#c5a059]/15 via-[#dfc58b]/10 to-[#b38e47]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181a24] border border-[#c5a059]/40 text-[#dfc58b] text-xs font-semibold tracking-widest uppercase mb-6 shadow-md">
          <Sparkles className="w-4 h-4 text-[#c5a059]" />
          <span>START YOUR MASTERY TODAY</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#fbf9f4] tracking-tight leading-[1.15] mb-6">
          Ready to Upgrade <br />
          <span className="gold-gradient-text">Your Stamina &amp; Control?</span>
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-[#cbc7be] font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Get your free copy of <em>{BRAND.bookTitle}</em> and start learning a more natural approach to sexual confidence and endurance.
        </p>

        {/* Compact Book Preview in CTA */}
        <div className="flex justify-center mb-10 cursor-pointer" onClick={onOpenGuide}>
          <BookMockup size="small" />
        </div>

        {/* Large High-Converting CTA Button */}
        <div className="max-w-md mx-auto space-y-4">
          <button
            onClick={onOpenGuide}
            id="main-cta-section-btn"
            className="w-full py-5 px-8 rounded-xl text-base sm:text-lg font-extrabold tracking-wider uppercase text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_10px_40px_rgba(197,160,89,0.4)] flex items-center justify-center gap-3 cursor-pointer"
          >
            <Download className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>GET THE FREE GUIDE</span>
          </button>

          {/* Under Button Reassurance Text */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#a5a39c] pt-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
              Free digital guide • No credit card required
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#c5a059]" />
              100% Discreet &amp; Instant Access
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
