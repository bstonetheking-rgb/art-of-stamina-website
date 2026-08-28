import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../config';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0b0c10] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171821] border border-[#c5a059]/30 text-[#dfc58b] text-[11px] font-semibold tracking-widest uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>TRANSPARENCY FIRST</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fbf9f4] tracking-tight">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-[#b8b5ab] font-light leading-relaxed max-w-xl mx-auto">
            Everything you need to know about the guide, format, privacy, and how Art of Stamina approaches men's wellness.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-gradient-to-b from-[#151722] to-[#101118] border border-white/10 hover:border-[#c5a059]/40 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#eae8e3]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#1c1e2b] border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#c5a059]/20 border-[#c5a059]/50' : ''}`}>
                    <ChevronDown className={`w-4 h-4 text-[#dfc58b] transition-colors`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#b0ada3] font-light leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
