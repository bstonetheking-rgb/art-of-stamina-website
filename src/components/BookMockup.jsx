import React from 'react';
import { BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../config';

/**
 * 3D Realistic Digital Book Cover Mockup
 * Crafted with pure CSS 3D transforms, gold foil accents, spine lighting, and paper edge depths.
 */
export default function BookMockup({ size = "large", interactive = true, className = "" }) {
  const isLarge = size === "large";

  return (
    <div className={`relative perspective-1200 flex items-center justify-center ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#c5a059]/20 via-[#dfc58b]/10 to-transparent rounded-full blur-2xl -z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

      {/* Book Container with 3D rotation */}
      <div 
        className={`relative transform-style-3d transition-transform duration-500 ease-out select-none
          ${interactive ? 'hover:[transform:rotateY(-12deg)_rotateX(4deg)_scale(1.02)]' : ''}
          ${isLarge ? 'w-[280px] sm:w-[320px] md:w-[360px] h-[400px] sm:h-[460px] md:h-[510px]' : 'w-[220px] sm:w-[260px] h-[310px] sm:h-[370px]'}
          [transform:rotateY(-18deg)_rotateX(6deg)]`}
      >
        {/* Book Spine (Left 3D side) */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-[30px] sm:w-[36px] bg-gradient-to-r from-[#090a0d] via-[#1a1b24] to-[#121319] origin-left [transform:rotateY(-90deg)] flex flex-col justify-between items-center py-6 text-center border-l border-white/10"
        >
          <div className="text-[9px] uppercase tracking-[0.25em] text-[#dfc58b]/70 [writing-mode:vertical-rl] rotate-180 font-serif font-semibold">
            BEDROOM IQ
          </div>
          <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#eae8e3] [writing-mode:vertical-rl] rotate-180 font-serif font-medium">
            THE ART OF STAMINA
          </div>
          <div className="w-2 h-2 rounded-full border border-[#c5a059]/40 bg-[#c5a059]/20" />
        </div>

        {/* Book Pages Edge (Right 3D side) */}
        <div 
          className="absolute right-0 top-1 bottom-1 w-[24px] sm:w-[30px] bg-gradient-to-r from-[#ece7db] via-[#dcd5c5] to-[#f4efe4] origin-right [transform:rotateY(90deg)] rounded-r-xs shadow-inner"
          style={{
            backgroundImage: 'repeating-linear-gradient(to bottom, #d8d0bf 0px, #f4efe4 2px, #c8beaa 3px)',
          }}
        />

        {/* Book Front Cover */}
        <div 
          className="w-full h-full rounded-r-lg rounded-l-xs bg-gradient-to-br from-[#181a24] via-[#111219] to-[#0a0b0f] border-t border-r border-b border-white/15 p-6 sm:p-8 flex flex-col justify-between book-shadow relative overflow-hidden text-left"
        >
          {/* Subtle linen texture overlay */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '12px 12px',
            }}
          />

          {/* Book Spine Crease & Sheen Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/60 via-white/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />

          {/* Top Brand Header */}
          <div className="relative z-10">
            <div className="flex items-center justify-between border-b border-[#c5a059]/25 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded border border-[#c5a059]/60 flex items-center justify-center bg-[#c5a059]/10">
                  <span className="text-[10px] font-serif font-bold text-[#dfc58b]">IQ</span>
                </div>
                <span className="text-[11px] sm:text-xs font-serif font-bold tracking-[0.25em] text-[#e8e4dc] uppercase">
                  {BRAND.name}
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#c5a059] px-2 py-0.5 rounded border border-[#c5a059]/30 bg-[#c5a059]/10">
                SPECIAL EDITION
              </span>
            </div>

            {/* Emblem Watermark */}
            <div className="mt-4 flex justify-center opacity-40">
              <div className="w-10 h-10 rounded-full border border-[#c5a059]/40 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#dfc58b]" />
              </div>
            </div>
          </div>

          {/* Center Book Title Block */}
          <div className="relative z-10 my-auto text-center px-1">
            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#dfc58b]/80 mb-2 font-medium">
              THE DEFINITIVE GUIDE
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl md:text-[34px] leading-[1.1] font-bold tracking-tight text-[#fbf9f4] drop-shadow-md">
              THE ART OF <br />
              <span className="gold-gradient-text tracking-wide">STAMINA</span>
            </h3>

            <div className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mx-auto my-3" />

            <p className="text-[11px] sm:text-xs text-[#cbc7be] font-sans leading-relaxed max-w-[240px] mx-auto font-light tracking-wide">
              Natural Techniques for Better Sexual Confidence, Control &amp; Endurance
            </p>
          </div>

          {/* Bottom Badge & Footer */}
          <div className="relative z-10 border-t border-white/10 pt-3 flex items-center justify-between">
            <div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-[#8e909a] font-medium">
                DIGITAL RELEASE
              </div>
              <div className="text-[10px] font-semibold text-[#eae8e3] flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3 h-3 text-[#c5a059]" />
                Complete 68-Page PDF
              </div>
            </div>

            <div className="px-2.5 py-1 rounded bg-gradient-to-r from-[#c5a059]/20 to-[#dfc58b]/20 border border-[#c5a059]/40 text-[#fbf9f4] text-[10px] font-bold tracking-wider uppercase shadow-sm">
              FREE
            </div>
          </div>
        </div>
      </div>

      {/* Floating Free Badge on Corner */}
      <div className="absolute -top-3 -right-2 sm:-top-4 sm:right-2 z-20 bg-gradient-to-r from-[#c5a059] to-[#dfc58b] text-[#0b0c10] font-sans font-extrabold text-[10px] sm:text-xs tracking-wider uppercase py-1 px-3 rounded-full shadow-xl border border-white/30 flex items-center gap-1.5 animate-pulse">
        <BookOpen className="w-3 h-3" />
        <span>100% FREE GUIDE</span>
      </div>
    </div>
  );
}
