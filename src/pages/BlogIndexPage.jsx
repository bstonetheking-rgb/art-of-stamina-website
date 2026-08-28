import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  Download, 
  Search, 
  Layers, 
  Heart, 
  Activity, 
  Zap, 
  CheckCircle2, 
  Share2,
  Link2,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { BRAND } from '../config';
import BookMockup from '../components/BookMockup';
import { triggerContentLocker } from '../utils/locker';

export default function BlogIndexPage({ onOpenGuide }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedSlug, setCopiedSlug] = useState(null);

  const categories = ['All', 'Lifestyle & Daily Physiology', 'Mindset & Autonomic Psychology', 'Performance Nutrition & Circulation', 'Masculine Health & Intimacy'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.targetKeywords.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLockerClick = (e) => {
    triggerContentLocker(e);
  };

  const handleCopyLink = (slug) => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      const fullUrl = `${window.location.origin}/blog/${slug}`;
      navigator.clipboard.writeText(fullUrl);
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#eae8e3] font-sans antialiased selection:bg-[#c5a059]/30 selection:text-[#fbf9f4]">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-[#141620] via-[#202230] to-[#141620] border-b border-[#c5a059]/30 py-2.5 px-4 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <Link 
            to="/"
            className="inline-flex items-center gap-1.5 text-[#dfc58b] hover:text-white transition-colors no-underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="font-semibold tracking-wider uppercase">BACK TO HOME</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-[#b8b5ab]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0 animate-pulse" />
            <span className="font-medium">ART OF STAMINA CLINICAL RESEARCH &amp; SCIENTIFIC LIBRARY</span>
          </div>

          <a
            href="javascript:void(0);"
            onClick={handleLockerClick}
            className="inline-flex items-center gap-1 text-[#dfc58b] hover:underline font-bold uppercase tracking-wider no-underline"
          >
            <span>GET FREE BOOK</span>
            <ChevronRight className="w-3 h-3 text-[#c5a059]" />
          </a>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="sticky top-0 z-40 bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/10 py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-2.5 no-underline group">
            <div className="w-8 h-8 rounded border border-[#c5a059]/60 flex items-center justify-center bg-[#151722] shadow-sm group-hover:border-[#c5a059] transition-colors">
              <span className="font-serif font-bold text-xs text-[#dfc58b]">AS</span>
            </div>
            <div className="font-serif font-bold text-sm tracking-[0.2em] text-[#eae8e3] uppercase">
              {BRAND.name}
            </div>
          </Link>

          {/* Nav Links & CTA */}
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="text-xs text-[#b8b5ab] hover:text-[#dfc58b] font-medium transition-colors hidden sm:block no-underline"
            >
              Main Book
            </Link>
            <Link 
              to="/blog" 
              className="text-xs text-[#dfc58b] font-bold transition-colors hidden sm:block no-underline border-b border-[#dfc58b] pb-0.5"
            >
              All Guides
            </Link>
            <a
              href="javascript:void(0);"
              onClick={handleLockerClick}
              className="py-2 px-4 rounded-lg bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] text-[#0b0c10] font-extrabold text-xs tracking-wider uppercase shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 no-underline cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CLAIM FREE BOOK</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO BANNER */}
      <section className="relative pt-12 pb-10 px-4 sm:px-8 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#141622] via-[#0f111a] to-[#0b0c10]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1f2334] border border-[#c5a059]/40 text-[#dfc58b] text-xs font-semibold tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>EDITORIAL &amp; CLINICAL GUIDES</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fbf9f4] tracking-tight">
            Scientific Insights on Sexual Stamina &amp; Circulation
          </h1>

          <p className="text-base sm:text-lg text-[#b8b5ab] font-light max-w-2xl mx-auto leading-relaxed">
            Evidence-grounded guides exploring the autonomic nervous system, endothelial vasodilation, pelvic floor biomechanics, and nutrition for lasting male vitality.
          </p>

          {/* Search & Filter Controls */}
          <div className="pt-4 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#8e909a] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g., Nitric Oxide, Reverse Kegel, L-Citrulline)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#141622] border border-white/10 text-xs text-white placeholder-[#70727e] focus:outline-none focus:border-[#c5a059]"
              />
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 rounded-xl text-xs whitespace-nowrap font-medium transition-all cursor-pointer border ${
                    selectedCategory === cat
                      ? 'bg-[#c5a059] text-black border-white font-bold shadow-sm'
                      : 'bg-[#141622] border-white/10 text-[#b8b5ab] hover:bg-[#1f2334]'
                  }`}
                >
                  {cat === 'All' ? 'All Posts' : cat.split('&')[0].trim()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ARTICLES GRID & DIRECT URLS DIRECTORY */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-12">
        
        {/* DIRECT URLS DIRECTORY BAR */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#131622] border border-[#c5a059]/40 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Link2 className="w-4 h-4 text-[#c5a059]" />
              <span className="font-serif font-bold text-sm text-[#fbf9f4]">
                Direct Standalone Page URLs (Click to copy or visit)
              </span>
            </div>
            <span className="text-[11px] text-[#8e909a]">
              Dedicated permalinks for each monograph
            </span>
          </div>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {BLOG_POSTS.map(p => {
              const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}/blog/${p.slug}` : `/blog/${p.slug}`;
              const isCopied = copiedSlug === p.slug;
              return (
                <div key={p.id} className="p-3 rounded-xl bg-[#0c0e15] border border-white/10 flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-white truncate">{p.title}</div>
                    <code className="text-[10px] text-[#dfc58b] font-mono select-all truncate block">
                      {fullUrl}
                    </code>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      onClick={() => handleCopyLink(p.slug)}
                      className="px-2.5 py-1 rounded bg-[#1e2234] hover:bg-[#282d45] text-[11px] text-[#b8b5ab] hover:text-white flex items-center gap-1 transition-colors"
                      title="Copy URL"
                    >
                      {isCopied ? <Check className="w-3 h-3 text-[#4ade80]" /> : <Copy className="w-3 h-3" />}
                      <span>{isCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                    <Link
                      to={`/blog/${p.slug}`}
                      className="px-2.5 py-1 rounded bg-[#c5a059] text-black font-bold text-[11px] hover:brightness-110 transition-all no-underline"
                    >
                      Visit
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION HEADER */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="font-serif font-bold text-lg text-[#fbf9f4] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#c5a059]" />
            <span>Published Authority Posts ({filteredPosts.length})</span>
          </div>
          <span className="text-xs text-[#8e909a]">Select an article to read</span>
        </div>

        {/* ARTICLES CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => {
            const isCopied = copiedSlug === post.slug;
            return (
              <article 
                key={post.id}
                className="rounded-3xl bg-[#13151f] border border-white/10 hover:border-[#c5a059]/60 transition-all duration-300 overflow-hidden flex flex-col group shadow-xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Article Image Container */}
                <Link to={`/blog/${post.slug}`} className="block relative h-60 sm:h-72 overflow-hidden bg-[#181a26]">
                  <img 
                    src={post.heroImage} 
                    alt={post.heroImageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#0b0c10]/80 backdrop-blur-md text-[#dfc58b] text-[11px] font-semibold tracking-wider uppercase border border-[#c5a059]/40">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] text-[#cbc7be] flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#c5a059]" />
                    <span>{post.readTime}</span>
                  </div>
                </Link>

                {/* Article Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-[#8e909a]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>{post.publishedDate}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1 text-[#4ade80]">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Evidence-Based</span>
                      </div>
                    </div>

                    <Link to={`/blog/${post.slug}`} className="no-underline block group-hover:text-[#dfc58b] transition-colors">
                      <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#fbf9f4] leading-snug group-hover:text-[#dfc58b] transition-colors">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-sm text-[#b8b5ab] font-light leading-relaxed line-clamp-3">
                      {post.subtitle}
                    </p>

                    {/* Direct permalink chip on card */}
                    <div className="pt-2 flex items-center justify-between text-[11px] text-[#8e909a] font-mono bg-black/30 p-2 rounded-lg border border-white/5">
                      <span className="truncate">URL: /blog/{post.slug}</span>
                      <button
                        onClick={() => handleCopyLink(post.slug)}
                        className="text-[#dfc58b] hover:underline flex items-center gap-1 flex-shrink-0 cursor-pointer ml-2"
                      >
                        {isCopied ? <Check className="w-3 h-3 text-[#4ade80]" /> : <Copy className="w-3 h-3" />}
                        <span>{isCopied ? 'Copied' : 'Copy Link'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-[#8e909a]">
                      <div className="w-6 h-6 rounded-full bg-[#24283b] text-[#dfc58b] flex items-center justify-center font-bold text-[10px]">
                        {post.author.avatar}
                      </div>
                      <span className="truncate max-w-[140px]">{post.author.name}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="py-1.5 px-3 rounded-lg bg-[#c5a059] text-black font-serif font-bold text-xs hover:brightness-110 transition-all no-underline inline-flex items-center gap-1 shadow-sm"
                      >
                        <span>Read Full Guide</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM GLOBAL BOOK CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#181a28] via-[#141622] to-[#0e1018] border border-[#c5a059]/50 shadow-2xl text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1f2334] border border-[#c5a059]/50 text-[#dfc58b] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>THE COMPLETE STAMINA MASTERCLASS</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#fbf9f4] leading-tight">
              Looking for the Complete Physical &amp; Neurological Protocol?
            </h3>

            <p className="text-sm sm:text-base text-[#cbc7be] font-light leading-relaxed">
              These authority articles provide foundational education. For the full 68-page practical training guide with audio pacing drills and progressive pelvic routines, get <strong>"The Art of Stamina"</strong> now for free.
            </p>

            <div className="my-6 flex justify-center cursor-pointer" onClick={handleLockerClick}>
              <BookMockup size="normal" />
            </div>

            <div className="max-w-md mx-auto space-y-3">
              <a
                href="javascript:void(0);"
                onClick={handleLockerClick}
                className="w-full py-4 px-6 rounded-xl text-base font-extrabold tracking-wider uppercase text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_8px_30px_rgba(197,160,89,0.35)] flex items-center justify-center gap-3 cursor-pointer no-underline"
              >
                <span>DOWNLOAD FREE 68-PAGE BOOK</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* 5. FOOTER */}
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
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Direct Page Guides</div>
            <ul className="space-y-2">
              {BLOG_POSTS.map(p => (
                <li key={p.id}>
                  <Link to={`/blog/${p.slug}`} className="hover:text-[#dfc58b] transition-colors text-left no-underline block">
                    {p.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/" className="hover:text-[#dfc58b] transition-colors no-underline block">
                  Main Book Download (Home)
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Legal</div>
            <ul className="space-y-1.5">
              <li>
                <Link to="/privacy-policy" className="hover:text-[#dfc58b] transition-colors no-underline block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-[#dfc58b] transition-colors no-underline block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/medical-disclaimer" className="hover:text-[#dfc58b] transition-colors no-underline block">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <span>© 2026 {BRAND.name}. All Rights Reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-[#dfc58b] transition-colors no-underline">
              Home
            </Link>
            <Link to="/blog" className="hover:text-[#dfc58b] transition-colors no-underline">
              Blog Hub
            </Link>
            <a href="javascript:void(0);" onClick={handleLockerClick} className="text-[#dfc58b] hover:underline font-bold no-underline cursor-pointer">
              Get Free Book
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
