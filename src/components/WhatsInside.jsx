import React from 'react';
import { Compass, Wind, ShieldCheck, Sparkles, MessageSquareHeart, Leaf, Download, ArrowUpRight } from 'lucide-react';
import { CHAPTERS } from '../config';

const CHAPTER_ICONS = {
  Compass,
  Wind,
  ShieldCheck,
  Sparkles,
  MessageSquareHeart,
  Leaf,
};

export default function WhatsInside({ onOpenGuide }) {
  return (
    <section className="py-20 sm:py-28 bg-[#0b0c10] relative border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171821] border border-[#c5a059]/30 text-[#dfc58b] text-[11px] font-semibold tracking-widest uppercase">
            <span>CURRICULUM BREAKDOWN</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf9f4] tracking-tight">
            What's Inside <br className="hidden sm:inline" />
            <span className="gold-gradient-text">The Art of Stamina</span>
          </h2>

          <p className="text-sm sm:text-base text-[#b8b5ab] font-light leading-relaxed max-w-2xl mx-auto">
            Six comprehensive, practical chapters crafted to help you understand your physiology, master breath regulation, and approach intimacy with quiet confidence.
          </p>
        </div>

        {/* 6-Card Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CHAPTERS.map((item) => {
            const Icon = CHAPTER_ICONS[item.icon] || Sparkles;
            return (
              <div
                key={item.num}
                className="group relative bg-gradient-to-b from-[#151722] to-[#101118] border border-white/10 hover:border-[#c5a059]/50 rounded-xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Subtle internal gradient shine */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c5a059]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

                <div>
                  {/* Top Chapter Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#1a1c27] border border-[#c5a059]/30 flex items-center justify-center group-hover:border-[#c5a059] group-hover:bg-[#c5a059]/10 transition-colors">
                      <Icon className="w-5 h-5 text-[#dfc58b]" />
                    </div>
                    <span className="font-mono text-sm font-bold text-[#c5a059]/80 tracking-widest">
                      {item.num}
                    </span>
                  </div>

                  {/* Chapter Title */}
                  <h3 className="font-serif text-xl font-bold text-[#fbf9f4] mb-1 group-hover:text-[#dfc58b] transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#8e909a] uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#b0ada3] leading-relaxed font-light mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Key Insight Pill */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="text-[11px] text-[#8e909a] leading-relaxed italic bg-[#0d0e14] p-3 rounded-lg border border-white/5">
                    <span className="text-[#dfc58b] not-italic font-semibold block mb-0.5 text-[10px] uppercase tracking-wider">Key Takeaway:</span>
                    {item.keyInsight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA After What's Inside */}
        <div className="mt-14 sm:mt-18 text-center">
          <button
            onClick={onOpenGuide}
            id="whats-inside-cta"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-sm sm:text-base font-bold tracking-wider uppercase text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_4px_25px_rgba(197,160,89,0.3)] cursor-pointer"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>DOWNLOAD ALL 6 CHAPTERS FOR FREE</span>
          </button>
          
          <div className="mt-3 text-xs text-[#828493]">
            Instant PDF download • Full 68 pages • No registration required
          </div>
        </div>

      </div>
    </section>
  );
}
