import React, { useState } from 'react';
import { BookOpen, Eye, Lock, Download, ArrowRight, Sparkles, Check } from 'lucide-react';
import { SAMPLE_PAGES, BRAND } from '../config';

export default function BookPreview({ onOpenGuide }) {
  const [activeTab, setActiveTab] = useState(0);
  const activePage = SAMPLE_PAGES[activeTab];

  return (
    <section className="py-20 sm:py-28 bg-[#0b0c10] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171821] border border-[#c5a059]/30 text-[#dfc58b] text-[11px] font-semibold tracking-widest uppercase">
            <Eye className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>SAMPLE CHAPTER PREVIEWS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf9f4] tracking-tight">
            Inside the guide <br className="hidden sm:inline" />
            <span className="gold-gradient-text">you'll discover...</span>
          </h2>

          <p className="text-sm sm:text-base text-[#b8b5ab] font-light leading-relaxed max-w-2xl mx-auto">
            Take a look inside the layout and clear, practical writing of <em>{BRAND.bookTitle}</em>.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {SAMPLE_PAGES.map((page, idx) => (
            <button
              key={page.chapter}
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wider transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-[#dfc58b] to-[#c5a059] text-[#0b0c10] shadow-lg'
                  : 'bg-[#151722] text-[#8e909a] hover:text-[#eae8e3] border border-white/10 hover:border-white/20'
              }`}
            >
              <span>{page.chapter}: {page.title}</span>
            </button>
          ))}
        </div>

        {/* Realistic Page Spread Container */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#181a24] to-[#12131a] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle page header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-xs text-[#828493]">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-[#dfc58b] tracking-wider uppercase">{BRAND.name}</span>
              <span>•</span>
              <span className="font-serif italic text-[#dedbd2]">{BRAND.bookTitle}</span>
            </div>
            <div className="font-mono text-[#c5a059] font-medium">
              {activePage.pageNumber}
            </div>
          </div>

          {/* Page Content Layout */}
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#c5a059] uppercase tracking-widest block">
                {activePage.chapter}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
                {activePage.title}
              </h3>
            </div>

            {/* Clear readable opening text */}
            <p className="text-sm sm:text-base text-[#eae8e3] font-serif leading-relaxed italic border-l-2 border-[#c5a059] pl-4 py-1">
              "{activePage.excerpt}"
            </p>

            {/* Blurred continued text section simulating locked deep content */}
            <div className="relative pt-2 pb-4">
              <div className="space-y-3 blur-[3px] select-none opacity-40 text-xs sm:text-sm text-[#b8b5ab] font-sans leading-relaxed">
                <p>
                  To effectively synchronize the autonomic nervous system, one must understand the transition boundary between sympathetic stimulation and parasympathetic recovery. When deep pelvic tension remains unreleased, afferent neural pathways trigger reflex arcs far earlier than necessary.
                </p>
                <p>
                  By implementing the 4-step diaphragmatic relaxation protocol outlined in diagram 3.2, you immediately quiet the pelvic muscle contractions, creating sustained stamina that feels relaxed rather than strained.
                </p>
              </div>

              {/* Overlay unlock badge */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-gradient-to-t from-[#12131a] via-[#12131a]/80 to-transparent">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1b1e2c] border border-[#c5a059]/40 text-[#dfc58b] text-xs font-semibold uppercase tracking-wider mb-2 shadow-lg">
                  <Lock className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Full Chapter in Free PDF</span>
                </div>
                <p className="text-xs text-[#cbc7be] max-w-sm">
                  Download the complete guide to unlock all illustrations, breath diagrams, and practice frameworks.
                </p>
              </div>
            </div>

            {/* Chapter Takeaway Box */}
            <div className="bg-[#10121a] border border-[#c5a059]/30 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
              <div className="w-8 h-8 rounded bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4 text-[#dfc58b]" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#dfc58b]">
                  Core Chapter Takeaway
                </div>
                <p className="text-xs sm:text-sm text-[#dedbd2] font-light">
                  {activePage.takeaway}
                </p>
              </div>
            </div>

            {/* Action button inside preview */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#828493]">
                Free instant download • High-resolution PDF e-book
              </span>

              <button
                onClick={onOpenGuide}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] to-[#c5a059] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>UNLOCK FULL CHAPTER (FREE)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
