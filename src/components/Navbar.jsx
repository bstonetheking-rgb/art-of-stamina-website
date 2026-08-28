import React, { useState, useEffect } from 'react';
import { Download, Sparkles, Shield, BookOpen } from 'lucide-react';
import { BRAND } from '../config';

export default function Navbar({ onOpenGuide }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0b0c10]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group text-left">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md border border-[#c5a059]/50 flex items-center justify-center bg-gradient-to-br from-[#1b1d28] to-[#0f1016] group-hover:border-[#c5a059] transition-colors shadow-sm">
            <span className="font-serif font-bold text-xs sm:text-sm text-[#dfc58b] tracking-wider">AS</span>
          </div>
          <div className="font-serif font-bold text-sm sm:text-base tracking-[0.2em] text-[#eae8e3] uppercase group-hover:text-white transition-colors">
            {BRAND.name}
          </div>
        </a>

        {/* Middle Value Tag */}
        <div className="hidden md:flex items-center space-x-6 text-xs text-[#b8b5ab]">
          <span className="flex items-center gap-1.5 hover:text-[#eae8e3] transition-colors">
            <Shield className="w-3.5 h-3.5 text-[#c5a059]" />
            Discreet &amp; 100% Free
          </span>
          <span className="flex items-center gap-1.5 hover:text-[#eae8e3] transition-colors">
            <BookOpen className="w-3.5 h-3.5 text-[#dfc58b]" />
            The Art of Stamina Guide
          </span>
        </div>

        {/* Primary Header CTA */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenGuide}
            className="group relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(197,160,89,0.25)] cursor-pointer"
            id="nav-cta-btn"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>GET FREE GUIDE</span>
          </button>
        </div>
      </div>
    </header>
  );
}
