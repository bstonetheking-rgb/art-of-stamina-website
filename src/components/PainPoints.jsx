import React from 'react';
import { Clock, ZapOff, Activity, HeartHandshake, ArrowRight, Shield } from 'lucide-react';
import { PAIN_POINTS } from '../config';

const ICON_MAP = {
  Clock,
  ZapOff,
  Activity,
  HeartHandshake,
};

export default function PainPoints({ onOpenGuide }) {
  return (
    <section id="pain-points" className="py-20 sm:py-28 bg-[#0e0f15] relative border-t border-b border-white/5">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1f212c]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171821] border border-[#c5a059]/30 text-[#dfc58b] text-[11px] font-semibold tracking-widest uppercase">
            <span>A GROUNDED PERSPECTIVE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf9f4] tracking-tight">
            Sexual Confidence Starts <br className="hidden sm:inline" />
            With <span className="gold-gradient-text">Understanding.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#b8b5ab] font-light leading-relaxed max-w-2xl mx-auto">
            Most men are never taught how their autonomic nervous system, muscular tension, and mental state interact during intimacy. You are not alone in facing these challenges.
          </p>
        </div>

        {/* 4 Empathetic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PAIN_POINTS.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || Activity;
            return (
              <div
                key={item.id}
                className="group relative bg-gradient-to-b from-[#151722] to-[#101118] border border-white/10 hover:border-[#c5a059]/40 rounded-xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Subtle card glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c5a059]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-[#1a1c27] border border-[#c5a059]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#c5a059] group-hover:bg-[#c5a059]/10 transition-colors">
                    <IconComponent className="w-6 h-6 text-[#dfc58b]" />
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#eae8e3] group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#828493] tracking-widest uppercase">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#a8a69d] leading-relaxed font-light">
                      {item.description}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-[11px] text-[#dfc58b] font-medium">
                      <Shield className="w-3 h-3 text-[#c5a059]" />
                      <span>Focus area: {item.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassuring Note & Secondary CTA */}
        <div className="mt-12 sm:mt-16 text-center bg-[#14151e] border border-white/10 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#fbf9f4]">
              Shift From Frustration to Mastery
            </h4>
            <p className="text-xs sm:text-sm text-[#a8a69d]">
              Learn how breath regulation and pelvic awareness transform your bedroom experience.
            </p>
          </div>

          <button
            onClick={onOpenGuide}
            className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] to-[#c5a059] hover:brightness-110 active:scale-[0.98] transition-all shadow-md cursor-pointer"
          >
            <span>GET THE FREE GUIDE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
