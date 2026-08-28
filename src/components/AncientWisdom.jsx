import React from 'react';
import { Compass, Sparkles, Wind, Eye, Shield, Check } from 'lucide-react';

export default function AncientWisdom({ onOpenGuide }) {
  return (
    <section className="py-20 sm:py-28 bg-[#0b0c10] relative overflow-hidden">
      {/* Subtle oriental/zen circular breath motif backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full border border-[#c5a059]/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full border border-dashed border-[#c5a059]/15 pointer-events-none animate-[spin_120s_linear_infinite]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171821] border border-[#c5a059]/40 text-[#dfc58b] text-[11px] font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>HISTORICAL WELLNESS TRADITIONS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf9f4] tracking-tight">
            Ancient Ideas. <span className="gold-gradient-text">Modern Perspective.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#cbc7be] font-light leading-relaxed max-w-2xl mx-auto">
            Across history, different wellness traditions explored breathing, relaxation, mindfulness and body awareness. The Art of Stamina explores these ideas through a modern sexual-wellness lens.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Breath & Jing Regulation */}
          <div className="bg-gradient-to-b from-[#161822] to-[#0f1016] border border-white/10 hover:border-[#c5a059]/40 rounded-xl p-8 space-y-4 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#1d1f2c] border border-[#c5a059]/30 flex items-center justify-center">
              <Wind className="w-6 h-6 text-[#dfc58b]" />
            </div>
            <div className="text-xs font-mono text-[#c5a059] uppercase tracking-wider">01 — Breath Mastery (Qi)</div>
            <h3 className="font-serif text-2xl font-bold text-[#eae8e3]">
              The Power of Breath Regulation
            </h3>
            <p className="text-xs sm:text-sm text-[#a8a69d] font-light leading-relaxed">
              Historical traditions recognized that rapid, shallow chest respiration accelerates tension and loss of control. Practicing deep lower-abdominal respiration was traditionally used to calm inner excitation.
            </p>
            <div className="pt-2 text-[11px] text-[#dfc58b] italic">
              Modern lens: Diaphragmatic breathing actively stimulates the vagus nerve and down-regulates autonomic arousal.
            </div>
          </div>

          {/* Card 2: Mind-Body Harmony (Shen) */}
          <div className="bg-gradient-to-b from-[#161822] to-[#0f1016] border border-[#c5a059]/30 rounded-xl p-8 space-y-4 relative shadow-[0_4px_30px_rgba(197,160,89,0.08)]">
            <div className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-widest text-[#dfc58b] px-2 py-0.5 rounded bg-[#c5a059]/15 border border-[#c5a059]/30">
              CORE PRINCIPLE
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#1d1f2c] border border-[#c5a059]/50 flex items-center justify-center">
              <Eye className="w-6 h-6 text-[#dfc58b]" />
            </div>
            <div className="text-xs font-mono text-[#c5a059] uppercase tracking-wider">02 — Present Awareness</div>
            <h3 className="font-serif text-2xl font-bold text-[#fbf9f4]">
              Presence Over Performance
            </h3>
            <p className="text-xs sm:text-sm text-[#a8a69d] font-light leading-relaxed">
              Ancient texts discouraged treating intimacy as an anxious race to a singular endpoint. Cultivating sensory presence and mutual connection was viewed as the true source of vital energy and longevity.
            </p>
            <div className="pt-2 text-[11px] text-[#dfc58b] italic">
              Modern lens: Cognitive refocusing reduces performance anxiety loops and allows natural stamina to emerge.
            </div>
          </div>

          {/* Card 3: Physical Equilibrium */}
          <div className="bg-gradient-to-b from-[#161822] to-[#0f1016] border border-white/10 hover:border-[#c5a059]/40 rounded-xl p-8 space-y-4 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#1d1f2c] border border-[#c5a059]/30 flex items-center justify-center">
              <Compass className="w-6 h-6 text-[#dfc58b]" />
            </div>
            <div className="text-xs font-mono text-[#c5a059] uppercase tracking-wider">03 — Body Integration</div>
            <h3 className="font-serif text-2xl font-bold text-[#eae8e3]">
              Muscular Softness &amp; Flow
            </h3>
            <p className="text-xs sm:text-sm text-[#a8a69d] font-light leading-relaxed">
              Rather than tightening muscles in a frantic attempt to hold back, classical masters taught deep pelvic release and total physical relaxation to allow vital energy to circulate smoothly through the whole body.
            </p>
            <div className="pt-2 text-[11px] text-[#dfc58b] italic">
              Modern lens: Releasing pelvic floor hypertonicity prevents involuntary contraction triggers.
            </div>
          </div>

        </div>

        {/* Responsible Disclaimer Box */}
        <div className="mt-12 bg-[#12131a] border border-white/10 rounded-xl p-5 sm:p-6 text-center max-w-3xl mx-auto">
          <p className="text-xs text-[#828493] leading-relaxed">
            <strong className="text-[#a8a69d]">Context Note:</strong> Art of Stamina explores traditional historical philosophies purely for educational perspective and mindful wellness framing. These concepts are presented as complementary mindfulness practices and are not intended as medical claims or guaranteed clinical outcomes.
          </p>
        </div>

      </div>
    </section>
  );
}
