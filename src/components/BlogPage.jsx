import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Download, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Activity, 
  Heart, 
  Wind, 
  Share2, 
  Bookmark, 
  Layers, 
  Zap, 
  Flame, 
  Utensils 
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { BRAND } from '../config';
import BookMockup from './BookMockup';
import ArticleNitricOxide from './articles/ArticleNitricOxide';
import ArticleStamina from './articles/ArticleStamina';
import ArticlePsychology from './articles/ArticlePsychology';
import ArticleLifestyle from './articles/ArticleLifestyle';
import ArticleSoloLab from './articles/ArticleSoloLab';
import ArticleRefractory from './articles/ArticleRefractory';
import ArticleBreathMastery from './articles/ArticleBreathMastery';
import ArticleEndocrine from './articles/ArticleEndocrine';
import ArticleLongevity from './articles/ArticleLongevity';
import ArticleBiomechanics from './articles/ArticleBiomechanics';
import ArticleDopamineReset from './articles/ArticleDopamineReset';
import { triggerContentLocker } from '../utils/locker';

export default function BlogPage({ onBackToHome, onOpenGuide, onOpenLegal, initialArticleId }) {
  const [selectedArticleId, setSelectedArticleId] = useState(initialArticleId || BLOG_POSTS[0].id);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTocId, setActiveTocId] = useState('');

  const currentArticle = BLOG_POSTS.find(p => p.id === selectedArticleId) || BLOG_POSTS[0];
  const currentIndex = BLOG_POSTS.findIndex(p => p.id === currentArticle.id);
  const nextArticle = BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length];
  const relatedArticles = BLOG_POSTS.filter(p => p.id !== currentArticle.id).slice(0, 3);

  // Scroll to top when switching articles
  const handleSelectArticle = (id) => {
    setSelectedArticleId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLockerClick = (e) => {
    triggerContentLocker(e);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentArticle.title,
        text: currentArticle.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveTocId(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#eae8e3] font-sans antialiased selection:bg-[#c5a059]/30 selection:text-[#fbf9f4]">
      
      {/* 1. TOP ANNOUNCEMENT HEADER */}
      <div className="bg-gradient-to-r from-[#141620] via-[#202230] to-[#141620] border-b border-[#c5a059]/30 py-2.5 px-4 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <button 
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-[#dfc58b] hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="font-semibold tracking-wider uppercase">BACK TO HOME</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-[#b8b5ab]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0 animate-pulse" />
            <span className="font-medium">ART OF STAMINA CLINICAL RESEARCH &amp; AUTHORITY GUIDES</span>
          </div>

          <a
            href="javascript:void(0);"
            onClick={handleLockerClick}
            className="inline-flex items-center gap-1 text-[#dfc58b] hover:underline font-bold uppercase tracking-wider"
          >
            <span>GET FREE BOOK</span>
            <ChevronRight className="w-3 h-3 text-[#c5a059]" />
          </a>
        </div>
      </div>

      {/* 2. MAIN STICKY SITE NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/10 py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={onBackToHome}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded border border-[#c5a059]/60 flex items-center justify-center bg-[#151722] shadow-sm group-hover:border-[#c5a059] transition-colors">
              <span className="font-serif font-bold text-xs text-[#dfc58b]">AS</span>
            </div>
            <div className="font-serif font-bold text-sm tracking-[0.2em] text-[#eae8e3] uppercase">
              {BRAND.name}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-[#181a26] border border-white/10 text-[#b8b5ab] hover:text-[#dfc58b] hover:border-[#c5a059]/40 transition-colors cursor-pointer"
              title="Share Guide"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <a
              href="javascript:void(0);"
              onClick={handleLockerClick}
              className="py-2 px-4 rounded-lg bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] text-[#0b0c10] font-extrabold text-xs tracking-wider uppercase shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CLAIM FREE GUIDE</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. ARTICLE SELECTOR TAB BAR */}
      <div className="bg-[#12141d] border-b border-white/10 px-4 py-3">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#dfc58b] font-semibold uppercase tracking-wider flex-shrink-0">
            <Layers className="w-4 h-4 text-[#c5a059]" />
            <span>Masterclass Library ({BLOG_POSTS.length}):</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
            {BLOG_POSTS.map((post, idx) => {
              const isSelected = selectedArticleId === post.id;
              return (
                <button
                  key={post.id}
                  onClick={() => handleSelectArticle(post.id)}
                  className={`px-3 py-1.5 rounded-xl text-left text-xs transition-all cursor-pointer border flex items-center gap-2 flex-shrink-0 ${
                    isSelected
                      ? 'bg-[#202436] border-[#c5a059] text-[#dfc58b] shadow-md font-semibold'
                      : 'bg-[#161824] border-white/10 text-[#a2a4b0] hover:bg-[#1c1f2e] hover:text-[#eae8e3]'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono font-bold flex-shrink-0 ${
                    isSelected ? 'bg-[#c5a059] text-black' : 'bg-[#26293a] text-[#a2a4b0]'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="truncate max-w-[180px] sm:max-w-[220px]">
                    {post.category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. ARTICLE HERO SECTION */}
      <section className="relative pt-10 pb-8 px-4 sm:px-8 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#141622] via-[#0f111a] to-[#0b0c10]">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          
          {/* Meta Tags */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-[#202334] text-[#dfc58b] border border-[#c5a059]/30 font-semibold tracking-wider uppercase">
              {currentArticle.category}
            </span>
            <div className="flex items-center gap-1.5 text-[#8e909a]">
              <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{currentArticle.publishedDate}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#8e909a]">
              <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{currentArticle.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#4ade80]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Medically Reviewed</span>
            </div>
          </div>

          {/* Article Main Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fbf9f4] leading-[1.15] tracking-tight">
            {currentArticle.fullTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#b8b5ab] font-light leading-relaxed">
            {currentArticle.subtitle}
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-3 pt-2 border-t border-white/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c5a059] to-[#8c6b2d] flex items-center justify-center font-bold text-black text-xs shadow-md">
              {currentArticle.author.avatar}
            </div>
            <div>
              <div className="font-serif font-bold text-sm text-[#fbf9f4]">
                {currentArticle.author.name}
              </div>
              <div className="text-xs text-[#8e909a]">
                {currentArticle.author.role}
              </div>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#141622]">
            <img 
              src={currentArticle.heroImage} 
              alt={currentArticle.heroImageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-[320px] sm:h-[440px] object-cover object-center"
            />
            <div className="p-4 bg-[#10121a] border-t border-white/10 flex items-center justify-between text-xs text-[#8e909a]">
              <span>Clinical editorial illustration for Bedroom IQ Masculine Physiology</span>
              <span className="text-[10px] text-[#c5a059] uppercase tracking-wider font-semibold">Evidence-Based</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. MAIN CONTENT LAYOUT WITH SIDEBAR */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT SIDEBAR: Table of Contents & Quick Conversion */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6">
            
            {/* Sticky Table of Contents Container */}
            <div className="sticky top-24 space-y-6">
              
              {/* Table of Contents Card */}
              <div className="p-6 rounded-2xl bg-[#12141e] border border-white/10 shadow-lg">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 font-serif font-bold text-sm tracking-wider uppercase text-[#dfc58b]">
                    <BookOpen className="w-4 h-4 text-[#c5a059]" />
                    <span>Table of Contents</span>
                  </div>
                  <span className="text-[11px] text-[#8e909a]">{currentArticle.toc.length} Chapters</span>
                </div>

                <nav className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 text-xs custom-scrollbar">
                  {currentArticle.toc.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left py-1.5 px-2.5 rounded-lg transition-colors cursor-pointer flex items-center justify-between group ${
                        activeTocId === item.id 
                          ? 'bg-[#c5a059]/20 text-[#dfc58b] font-semibold' 
                          : 'text-[#9e9fad] hover:text-[#eae8e3] hover:bg-[#181a28]'
                      }`}
                    >
                      <span className="truncate pr-2">{item.title}</span>
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#c5a059] transition-opacity flex-shrink-0" />
                    </button>
                  ))}
                </nav>
              </div>

              {/* Next Recommended Post Card */}
              <div className="p-5 rounded-2xl bg-[#141724] border border-[#c5a059]/30 shadow-md space-y-3">
                <div className="text-[10px] text-[#dfc58b] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#c5a059]" />
                  <span>Also Read In Authority Series</span>
                </div>
                <div className="font-serif font-bold text-sm text-[#fbf9f4] leading-snug">
                  {otherArticle.title}
                </div>
                <p className="text-xs text-[#8e909a] line-clamp-2">
                  {otherArticle.subtitle}
                </p>
                <button
                  onClick={() => handleSelectArticle(otherArticle.id)}
                  className="w-full py-2 px-3 rounded-lg bg-[#1f2334] hover:bg-[#c5a059] text-[#dfc58b] hover:text-black font-serif font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#c5a059]/40"
                >
                  <span>Switch To This Guide</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              {/* Sidebar Book Download Promo Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#181a28] to-[#0f1118] border border-[#c5a059]/40 shadow-xl text-center space-y-4">
                <div className="text-[11px] font-bold text-[#dfc58b] tracking-wider uppercase">
                  Free 68-Page Digital Book
                </div>
                <div className="font-serif font-bold text-lg text-[#fbf9f4]">
                  The Art of Stamina
                </div>
                <p className="text-xs text-[#9e9fad] leading-relaxed">
                  Complete biological protocols, audio pacing tracks, and pelvic floor routines.
                </p>
                
                <div className="py-2 flex justify-center cursor-pointer" onClick={handleLockerClick}>
                  <BookMockup size="compact" />
                </div>

                <a
                  href="javascript:void(0);"
                  onClick={handleLockerClick}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] text-[#0b0c10] font-bold text-xs tracking-wider uppercase hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD FREE NOW</span>
                </a>
              </div>

            </div>
          </aside>

          {/* MAIN ARTICLE BODY (RIGHT 8 COLS) */}
          <article className="lg:col-span-8">
            {selectedArticleId === 'dopamine-fasting-neurological-desensitization-stamina' ? (
              <ArticleDopamineReset post={currentArticle} onLockerClick={handleLockerClick} />
            ) : selectedArticleId === 'pelvic-floor-synergy-functional-kinetic-chain-stamina' ? (
              <ArticleBiomechanics post={currentArticle} onLockerClick={handleLockerClick} />
            ) : selectedArticleId === 'the-longevity-protocol-age-proofing-sexual-stamina' ? (
              <ArticleLongevity post={currentArticle} onLockerClick={handleLockerClick} />
            ) : selectedArticleId === 'the-psychology-of-stamina-rewiring-brain-performance' || selectedArticleId === 'psychology-of-stamina-mental-control' ? (
              <ArticlePsychology post={currentArticle} onLockerClick={handleLockerClick} />
            ) : selectedArticleId === 'the-endocrine-architecture-testosterone-stamina-axis' ? (
              <ArticleEndocrine post={currentArticle} onLockerClick={handleLockerClick} />
            ) : selectedArticleId === 'the-breath-of-stamina-arousal-control-breathwork' ? (
              <ArticleBreathMastery post={currentArticle} onLockerClick={handleLockerClick} />
            ) : selectedArticleId === 'elite-recovery-refractory-period-multi-round' ? (
              <ArticleRefractory post={currentArticle} onLockerClick={handleLockerClick} />
            ) : selectedArticleId === 'solo-laboratory-ejaculatory-reflex-control' ? (
              <ArticleSoloLab post={currentArticle} onLockerClick={handleLockerClick} />
            ) : selectedArticleId === 'stamina-lifestyle-daily-habits' ? (
              <ArticleLifestyle post={currentArticle} onLockerClick={handleLockerClick} />
            ) : selectedArticleId === 'nitric-oxide-blueprint-nutrition' ? (
              <ArticleNitricOxide post={currentArticle} onLockerClick={handleLockerClick} />
            ) : (
              <ArticleStamina post={currentArticle} onLockerClick={handleLockerClick} />
            )}

            {/* Cross-Article Switcher Card at bottom */}
            <div className="mt-12 p-6 rounded-2xl bg-[#141624] border border-[#c5a059]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs text-[#dfc58b] font-semibold uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Next Recommended Guide</span>
                </div>
                <div className="font-serif font-bold text-base text-[#fbf9f4]">
                  {nextArticle.title}
                </div>
                <div className="text-xs text-[#8e909a] line-clamp-1">
                  {nextArticle.subtitle}
                </div>
              </div>
              <button
                onClick={() => handleSelectArticle(nextArticle.id)}
                className="py-2.5 px-5 rounded-xl bg-[#c5a059] hover:bg-[#dfc58b] text-black font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer flex-shrink-0"
              >
                <span>Read Guide ({nextArticle.readTime})</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* COMPANION GUIDES GRID */}
            <div className="mt-8 space-y-4">
              <div className="font-serif font-bold text-lg text-[#fbf9f4] flex items-center gap-2 pb-2 border-b border-white/10">
                <Layers className="w-4 h-4 text-[#c5a059]" />
                <span>Companion Curriculum Guides</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedArticles.map(rel => (
                  <div
                    key={rel.id}
                    onClick={() => handleSelectArticle(rel.id)}
                    className="p-4 rounded-xl bg-[#12141f] border border-white/10 hover:border-[#c5a059]/50 transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <div className="text-[10px] text-[#dfc58b] font-medium uppercase">{rel.category}</div>
                      <div className="font-serif font-bold text-xs text-[#fbf9f4] group-hover:text-[#dfc58b] transition-colors leading-snug line-clamp-2">
                        {rel.title}
                      </div>
                    </div>
                    <div className="pt-2 text-[11px] text-[#c5a059] font-semibold flex items-center gap-1">
                      <span>Explore</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

        </div>
      </main>

      {/* 6. GLOBAL FOOTER */}
      <footer className="bg-[#07080a] border-t border-white/10 py-12 px-4 sm:px-8 text-xs text-[#7e808b]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-2 space-y-3">
            <div className="font-serif font-bold text-sm text-[#dfc58b] uppercase tracking-widest">
              Art of Stamina Publishing
            </div>
            <p className="leading-relaxed text-[#9e9fad] max-w-md">
              Evidence-informed education dedicated to male pelvic health, autonomic nervous system regulation, and cardiovascular vitality.
            </p>
            <p className="text-[11px] text-[#5e606a]">
              Disclaimer: The contents of this site are for educational purposes only and are not intended to substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Authority Guides</div>
            <ul className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {BLOG_POSTS.map(p => (
                <li key={p.id}>
                  <button 
                    onClick={() => handleSelectArticle(p.id)}
                    className="hover:text-[#dfc58b] transition-colors cursor-pointer text-left line-clamp-1 block text-xs"
                  >
                    {p.title}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button onClick={onBackToHome} className="text-[#dfc58b] hover:underline font-semibold transition-colors cursor-pointer">
                  Main Book Download Page →
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Legal &amp; Transparency</div>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onOpenLegal && onOpenLegal('privacy')} className="hover:text-[#dfc58b] transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal && onOpenLegal('terms')} className="hover:text-[#dfc58b] transition-colors cursor-pointer">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal && onOpenLegal('medical')} className="hover:text-[#dfc58b] transition-colors cursor-pointer">
                  Medical Disclaimer
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <span>© 2026 {BRAND.name}. All Rights Reserved.</span>
          <div className="flex items-center gap-4">
            <button onClick={onBackToHome} className="hover:text-[#dfc58b] transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={handleLockerClick} className="text-[#dfc58b] hover:underline font-bold cursor-pointer">
              Get Free Book
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
