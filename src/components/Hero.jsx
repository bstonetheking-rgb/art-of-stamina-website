import React from 'react';
import { Download, ChevronDown, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import BookMockup from './BookMockup';
import { BRAND } from '../config';

export default function Hero({ onOpenGuide }) {
  const scrollToNext = () => {
    const el = document.getElementById('pain-points');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden bg-radial-subtle">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-[#c5a059]/10 via-[#171822]/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#dfc58b]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Copy & High-Converting CTA */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-7">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171821] border border-[#c5a059]/35 text-[#dfc58b] text-xs font-semibold tracking-wider uppercase shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{BRAND.guideBadge}</span>
              <span className="w-1 h-1 rounded-full bg-[#c5a059]/60" />
              <span className="text-[#a5a39c] font-normal">INSTANT ACCESS</span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#fbf9f4] leading-[1.12] tracking-tight">
              Want Better Control, <br className="hidden sm:inline" />
              Confidence &amp; <span className="gold-gradient-text">Stamina in Bed?</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-[#cbc7be] font-sans font-light leading-relaxed max-w-2xl">
              Discover the natural principles behind better sexual endurance, confidence, and intimacy in this free guide from Art of Stamina.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-[#dedbd2]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <span>Breathwork &amp; autonomic control</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <span>Natural pacing without numbing sprays</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <span>Eliminate bedroom performance anxiety</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <span>Private, dignified &amp; 100% free PDF</span>
              </div>
            </div>

            {/* Primary CTA Area */}
            <div className="pt-2 sm:pt-4 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenGuide}
                  id="hero-primary-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-sm sm:text-base font-bold tracking-wider uppercase text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_6px_30px_rgba(197,160,89,0.35)] cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  <span>GET THE FREE GUIDE</span>
                </button>
              </div>

              {/* Secondary CTA Copy */}
              <p className="text-xs sm:text-sm text-[#b8b5ab] font-normal">
                Learn the natural approach to better sexual stamina, confidence and intimacy.
              </p>

              {/* Small Reassurance Text */}
              <div className="flex items-center gap-3 text-xs text-[#828493] pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                  Free digital guide • Instant access
                </span>
                <span>•</span>
                <span>No credit card required</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Book Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center py-6 sm:py-8 lg:py-0">
            <div className="cursor-pointer group" onClick={onOpenGuide}>
              <BookMockup size="large" />
              <div className="text-center mt-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfc58b] tracking-wider uppercase group-hover:text-white transition-colors">
                  <BookOpen className="w-4 h-4 text-[#c5a059]" />
                  <span>Click cover to open free guide</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <div className="w-full flex justify-center pt-8 pb-2">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-1.5 text-xs text-[#828493] hover:text-[#dfc58b] transition-colors focus:outline-none cursor-pointer group"
          aria-label="Scroll to learn more"
        >
          <span className="tracking-widest uppercase text-[10px] font-medium">Explore The Framework</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#c5a059]" />
        </button>
      </div>
    </section>
  );
}
