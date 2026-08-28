import React from 'react';
import { BookOpen, ShieldCheck, Heart, Sparkles, TrendingUp } from 'lucide-react';

export default function SocialProofShift({ onOpenGuide }) {
  return (
    <section className="py-20 sm:py-28 bg-[#0e0f16] relative border-t border-b border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171821] border border-[#c5a059]/30 text-[#dfc58b] text-[11px] font-semibold tracking-widest uppercase">
            <span>A MODERN CULTURAL SHIFT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf9f4] tracking-tight">
            Why Men Are Looking for <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Better Answers</span>
          </h2>

          <p className="text-base sm:text-lg text-[#cbc7be] font-light leading-relaxed max-w-2xl mx-auto">
            Men everywhere are moving away from superficial gimmicks, harsh chemicals, and anxiety-driven fixes in favor of natural body awareness and genuine understanding.
          </p>
        </div>

        {/* 3 Thematic Cards Grid (No fake numbers, pure educational value) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Better Understanding */}
          <div className="bg-gradient-to-b from-[#151722] to-[#101118] border border-white/10 hover:border-[#c5a059]/40 rounded-xl p-8 space-y-4 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1b1e2c] border border-[#c5a059]/30 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#dfc58b]" />
              </div>

              <div className="text-xs font-mono text-[#c5a059] uppercase tracking-wider">Pillar I</div>

              <h3 className="font-serif text-2xl font-bold text-[#fbf9f4]">
                Better Understanding
              </h3>

              <p className="text-sm text-[#a8a69d] font-light leading-relaxed">
                Knowledge dissolves mystery. When you clearly understand the physiological signals preceding peak arousal, you stop feeling out of control and start recognizing the natural pacing levers available to you.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 text-xs text-[#dfc58b] font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Autonomic awareness replaced guesswork</span>
            </div>
          </div>

          {/* Card 2: More Confidence */}
          <div className="bg-gradient-to-b from-[#151722] to-[#101118] border border-[#c5a059]/30 rounded-xl p-8 space-y-4 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_25px_rgba(197,160,89,0.06)]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1b1e2c] border border-[#c5a059]/50 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#dfc58b]" />
              </div>

              <div className="text-xs font-mono text-[#c5a059] uppercase tracking-wider">Pillar II</div>

              <h3 className="font-serif text-2xl font-bold text-[#fbf9f4]">
                More Confidence
              </h3>

              <p className="text-sm text-[#a8a69d] font-light leading-relaxed">
                True confidence is quiet. It is not about proving something under immense pressure, but feeling grounded in your own body, breath, and pacing regardless of the scenario.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 text-xs text-[#dfc58b] font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Grounded composure over performance dread</span>
            </div>
          </div>

          {/* Card 3: Healthier Intimacy */}
          <div className="bg-gradient-to-b from-[#151722] to-[#101118] border border-white/10 hover:border-[#c5a059]/40 rounded-xl p-8 space-y-4 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1b1e2c] border border-[#c5a059]/30 flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#dfc58b]" />
              </div>

              <div className="text-xs font-mono text-[#c5a059] uppercase tracking-wider">Pillar III</div>

              <h3 className="font-serif text-2xl font-bold text-[#fbf9f4]">
                Healthier Intimacy
              </h3>

              <p className="text-sm text-[#a8a69d] font-light leading-relaxed">
                Intimacy thrives when both partners feel safe, unhurried, and attuned. Moving away from solitary anxiety creates room for deeper emotional connection and shared pleasure.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 text-xs text-[#dfc58b] font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Deeper connection &amp; unhurried presence</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
