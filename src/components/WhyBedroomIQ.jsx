import React from 'react';
import { Target, Feather, Lock, Check } from 'lucide-react';
import { CORE_PILLARS, BRAND } from '../config';

const PILLAR_ICONS = {
  Target,
  Feather,
  Lock,
};

export default function WhyBedroomIQ() {
  return (
    <section className="py-20 sm:py-28 bg-[#0e0f16] relative border-t border-b border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171821] border border-[#c5a059]/30 text-[#dfc58b] text-[11px] font-semibold tracking-widest uppercase">
            <span>THE ART OF STAMINA PHILOSOPHY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf9f4] tracking-tight">
            Less Hype. <span className="gold-gradient-text">More Understanding.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#cbc7be] font-light leading-relaxed max-w-2xl mx-auto">
            {BRAND.name} focuses on practical sexual-wellness education designed to help men understand themselves, communicate better and approach intimacy with greater confidence.
          </p>
        </div>

        {/* 3 Benefit Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_PILLARS.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[pillar.icon] || Target;
            return (
              <div
                key={pillar.title}
                className="relative bg-gradient-to-b from-[#161824] to-[#101118] border border-white/10 hover:border-[#c5a059]/40 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1b1e2c] border border-[#c5a059]/40 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#dfc58b]" />
                  </div>

                  <div className="text-xs font-mono font-semibold text-[#c5a059] uppercase tracking-widest mb-1">
                    0{idx + 1} — {pillar.tagline}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#fbf9f4] mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#b0ada3] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-xs text-[#dfc58b]">
                  <Check className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Art of Stamina Core Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
