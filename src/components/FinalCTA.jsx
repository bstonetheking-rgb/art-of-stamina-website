import React from 'react';
import { Download, Sparkles, BookOpen } from 'lucide-react';
import { BRAND } from '../config';

export default function FinalCTA({ onOpenGuide }) {
  return (
    <section className="py-20 sm:py-24 bg-[#0e0f16] border-t border-white/5 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="w-10 h-10 rounded-full border border-[#c5a059]/40 bg-[#c5a059]/10 mx-auto flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-[#dfc58b]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf9f4] tracking-tight">
          Better Knowledge. <br className="hidden sm:inline" />
          <span className="gold-gradient-text">Better Intimacy.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#b8b5ab] font-light max-w-xl mx-auto leading-relaxed">
          Download <em>{BRAND.bookTitle}</em> today and discover natural, body-centered techniques for sustained bedroom stamina.
        </p>

        <div className="pt-4">
          <button
            onClick={onOpenGuide}
            id="final-cta-btn"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-lg text-sm sm:text-base font-bold tracking-wider uppercase text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_4px_30px_rgba(197,160,89,0.35)] cursor-pointer"
          >
            <Download className="w-5 h-5" />
            <span>GET THE FREE GUIDE</span>
          </button>
        </div>

        <div className="text-xs text-[#828493] pt-2">
          Free digital guide • Instant PDF access • No credit card
        </div>

      </div>
    </section>
  );
}
