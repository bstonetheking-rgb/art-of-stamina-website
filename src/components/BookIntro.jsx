import React from 'react';
import { Download, CheckCircle, ShieldCheck, FileCheck, Layers, BookCheck } from 'lucide-react';
import BookMockup from './BookMockup';
import { BRAND } from '../config';

export default function BookIntro({ onOpenGuide }) {
  const highlights = [
    { title: "Complete 68-Page Manual", desc: "Structured, non-technical chapters designed for easy reading and immediate application." },
    { title: "Diaphragmatic Breath Anchor", desc: "Step-by-step breathing drills to down-regulate sympathetic excitement surges in real time." },
    { title: "Reverse Pelvic Relaxation", desc: "Physical exercises to release chronic pelvic tension and prevent involuntary clenching." },
    { title: "Intimate Synchronization", desc: "Actionable partner communication and pacing cues to eliminate bedroom anxiety." },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-radial-center">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Larger Interactive Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-2 lg:order-1">
            <div className="cursor-pointer group" onClick={onOpenGuide}>
              <BookMockup size="large" />
            </div>

            {/* Micro specs under mockup */}
            <div className="mt-8 grid grid-cols-3 gap-3 w-full max-w-sm text-center">
              <div className="bg-[#151722] border border-white/10 rounded-lg p-2.5">
                <div className="text-xs sm:text-sm font-bold text-[#dfc58b]">{BRAND.pagesCount}</div>
                <div className="text-[10px] text-[#828493] uppercase tracking-wider">Length</div>
              </div>
              <div className="bg-[#151722] border border-white/10 rounded-lg p-2.5">
                <div className="text-xs sm:text-sm font-bold text-[#dfc58b]">{BRAND.readTime}</div>
                <div className="text-[10px] text-[#828493] uppercase tracking-wider">Fast Read</div>
              </div>
              <div className="bg-[#151722] border border-white/10 rounded-lg p-2.5">
                <div className="text-xs sm:text-sm font-bold text-[#dfc58b]">100% Free</div>
                <div className="text-[10px] text-[#828493] uppercase tracking-wider">Digital PDF</div>
              </div>
            </div>
          </div>

          {/* Right Column: Book Introduction Details */}
          <div className="lg:col-span-7 text-left space-y-6 order-1 lg:order-2">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1c26] border border-[#c5a059]/40 text-[#dfc58b] text-xs font-semibold tracking-wider uppercase">
              <BookCheck className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>FREE DIGITAL BOOK</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf9f4] tracking-tight leading-tight">
              Introducing <br />
              <span className="gold-gradient-text">The Art of Stamina</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#cbc7be] font-light leading-relaxed">
              A practical guide exploring natural approaches to sexual stamina, body awareness, breathing, relaxation, confidence and intimacy.
            </p>

            <p className="text-sm text-[#9f9d94] leading-relaxed">
              Created to strip away misleading internet myths and unrealistic expectations, this guide offers an intelligent, body-centered roadmap. You will discover how your autonomic nervous system controls timing, and how simple physical and mental adjustments unlock effortless endurance.
            </p>

            {/* Key Content Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="bg-[#13151f] border border-white/10 rounded-lg p-4 space-y-1">
                  <div className="flex items-center gap-2 text-[#dfc58b] font-semibold text-xs sm:text-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[#8e909a] pl-5 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="pt-4 space-y-3">
              <button
                onClick={onOpenGuide}
                id="book-intro-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-sm sm:text-base font-bold tracking-wider uppercase text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_4px_25px_rgba(197,160,89,0.3)] cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>GET MY FREE COPY</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-[#7d7f8d]">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span>Immediate download link • High-resolution PDF format</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
