import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  Lock,
  FileText,
  ArrowRight,
  ChevronRight,
  Link2,
  Copy,
  Check
} from 'lucide-react';
import BookMockup from './BookMockup';
import { BRAND } from '../config';
import { BLOG_POSTS } from '../data/blogData';
import { triggerContentLocker } from '../utils/locker';

/**
 * Direct-Response E-Book Hero Landing Page
 * Clean, hyper-focused hero layout for the free guide "The Art of Stamina".
 */
export default function FunnelLanding({ onOpenGuide, onOpenLegal }) {
  const [copiedSlug, setCopiedSlug] = useState(null);

  const handleLockerClick = (e) => {
    triggerContentLocker(e);
  };

  const handleCopy = (slug, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (typeof window !== 'undefined' && navigator.clipboard) {
      const fullUrl = `${window.location.origin}/blog/${slug}`;
      navigator.clipboard.writeText(fullUrl);
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0b0c10] text-[#eae8e3] font-sans antialiased selection:bg-[#c5a059]/30 selection:text-[#fbf9f4]">
      
      <div>
        {/* 1. Top Urgency / Announcement Bar */}
        <div className="bg-gradient-to-r from-[#141620] via-[#202230] to-[#141620] border-b border-[#c5a059]/30 py-2.5 px-4 text-center">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#dfc58b]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0 animate-pulse" />
            <span>FREE DIGITAL BOOK — INSTANT ACCESS FOR MEN</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline text-[#b8b5ab] font-normal">NO EMAIL REQUIRED</span>
          </div>
        </div>

        {/* 2. Clean Minimal Header */}
        <header className="py-5 px-4 sm:px-6 max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2.5 no-underline group">
            <div className="w-8 h-8 rounded border border-[#c5a059]/60 flex items-center justify-center bg-[#151722] shadow-sm group-hover:border-[#c5a059] transition-colors">
              <span className="font-serif font-bold text-xs text-[#dfc58b]">AS</span>
            </div>
            <div className="font-serif font-bold text-sm tracking-[0.2em] text-[#eae8e3] uppercase">
              {BRAND.name}
            </div>
          </Link>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#dfc58b] bg-[#161823] border border-[#c5a059]/40 hover:bg-[#202232] active:scale-95 transition-all shadow-sm no-underline"
            >
              <FileText className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>BLOG &amp; ARTICLES</span>
            </Link>

            <a
              href="javascript:void(0);"
              onClick={handleLockerClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer no-underline"
            >
              <Download className="w-3.5 h-3.5" />
              <span>GET FREE BOOK</span>
            </a>
          </div>
        </header>

        {/* 3. MAIN HERO / DIRECT SQUEEZE SECTION */}
        <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-14 sm:pb-20 text-center">
          
          {/* Guide Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171821] border border-[#c5a059]/40 text-[#dfc58b] text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-6 shadow-inner">
            <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>FREE DIGITAL BOOK</span>
            <span className="text-[#8e909a] font-normal">• 68 PAGES</span>
          </div>

          {/* Main Compelling Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#fbf9f4] leading-[1.14] tracking-tight mb-5 max-w-2xl mx-auto">
            Want Better Control, <br className="hidden sm:inline" />
            Confidence &amp; <span className="gold-gradient-text">Stamina in Bed?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-[#cbc7be] font-light leading-relaxed max-w-xl mx-auto mb-8">
            Discover the natural physiological principles behind sexual endurance, autonomic nervous system control, and confidence in this free book.
          </p>

          {/* 3D Realistic Book Mockup */}
          <div className="my-8 flex justify-center cursor-pointer" onClick={handleLockerClick}>
            <a href="javascript:void(0);" onClick={handleLockerClick} className="relative group no-underline inline-block">
              <BookMockup size="large" />
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#dfc58b] tracking-wider uppercase group-hover:text-white transition-colors">
                <Download className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Click book cover to get free book</span>
              </div>
            </a>
          </div>

          {/* Primary CTA Direct Box */}
          <div className="max-w-md mx-auto bg-gradient-to-b from-[#181a24] to-[#121319] border border-white/15 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-4 text-center">
            <a
              href="javascript:void(0);"
              onClick={handleLockerClick}
              id="funnel-hero-cta"
              className="w-full py-4 sm:py-4.5 px-6 rounded-xl text-base sm:text-lg font-extrabold tracking-wider uppercase text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_8px_30px_rgba(197,160,89,0.35)] flex items-center justify-center gap-3 cursor-pointer no-underline"
            >
              <Download className="w-5 h-5" />
              <span>GET FREE BOOK</span>
            </a>

            <p className="text-xs sm:text-sm text-[#b8b5ab] font-normal leading-relaxed">
              Learn the natural approach to sexual stamina, breath control, and intimacy.
            </p>

            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 text-[11px] text-[#8e909a]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                Free digital book
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#c5a059]" />
                No email or sign-up required
              </span>
            </div>
          </div>

          {/* Featured Authority Blog Guides Teasers with direct Multipage links */}
          <div className="mt-12 max-w-4xl mx-auto space-y-3">
            <div className="flex items-center justify-between pb-1">
              <div className="text-[10px] text-[#c5a059] font-bold tracking-widest uppercase flex items-center gap-1.5">
                <Link2 className="w-3.5 h-3.5" />
                <span>DIRECT SCIENTIFIC GUIDES</span>
              </div>
              <Link to="/blog" className="text-xs text-[#dfc58b] hover:underline flex items-center gap-1 no-underline font-semibold">
                <span>View Full Library (/blog)</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
              {BLOG_POSTS.map((p, idx) => (
                <div key={p.id} className="p-3.5 rounded-xl bg-[#141622] border border-[#c5a059]/30 hover:border-[#c5a059] transition-all group flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="text-[9px] text-[#dfc58b] font-mono uppercase">
                      Guide {idx + 1} • {p.category.split('&')[0].trim()}
                    </div>
                    <Link to={`/blog/${p.slug}`} className="no-underline">
                      <h3 className="font-serif font-bold text-xs sm:text-[13px] text-[#fbf9f4] group-hover:text-[#dfc58b] transition-colors line-clamp-2 leading-tight">
                        {p.title}
                      </h3>
                    </Link>
                    <code className="text-[9px] text-[#787a88] font-mono block select-all truncate">
                      /blog/{p.slug}
                    </code>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                    <button
                      onClick={(e) => handleCopy(p.slug, e)}
                      className="text-[#8e909a] hover:text-white flex items-center gap-1 cursor-pointer text-[10px]"
                    >
                      {copiedSlug === p.slug ? (
                        <Check className="w-3 h-3 text-[#4ade80]" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                      <span>{copiedSlug === p.slug ? 'Copied' : 'Copy'}</span>
                    </button>

                    <Link 
                      to={`/blog/${p.slug}`}
                      className="text-[#dfc58b] font-bold flex items-center gap-1 no-underline group-hover:translate-x-0.5 transition-transform text-[11px]"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

      {/* DISCREET COMPLIANT FOOTER */}
      <footer className="bg-[#08090c] border-t border-white/10 py-8 text-center text-xs text-[#6e7080]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="font-serif font-bold text-sm tracking-widest text-[#eae8e3] uppercase">
              {BRAND.name}
            </span>
            <span>•</span>
            <span className="font-serif italic text-xs text-[#c5a059]">"{BRAND.tagline}"</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-[#8e909a]">
            <Link to="/blog" className="hover:text-[#dfc58b] font-medium no-underline">Blog / Articles</Link>
            <span>•</span>
            <Link to="/privacy-policy" className="hover:text-white no-underline">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-of-service" className="hover:text-white no-underline">Terms</Link>
            <span>•</span>
            <Link to="/medical-disclaimer" className="hover:text-white no-underline">Disclaimer</Link>
            <span>•</span>
            <button onClick={() => onOpenLegal && onOpenLegal('contact')} className="hover:text-white cursor-pointer">Contact</button>
          </div>

          <p className="text-[11px] text-[#5e6070] leading-relaxed max-w-md mx-auto">
            This content is for educational and informational purposes only and is not medical advice. Individual experiences may vary.
          </p>

          <div className="text-[10px] text-[#4d4f5d]">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
