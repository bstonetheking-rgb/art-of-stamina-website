import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  Download, 
  Share2, 
  Check, 
  Layers, 
  Menu, 
  X,
  FileText,
  Bookmark,
  ExternalLink,
  Link2,
  Copy
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { BRAND } from '../config';
import ArticleNitricOxide from '../components/articles/ArticleNitricOxide';
import ArticleStamina from '../components/articles/ArticleStamina';
import ArticlePsychology from '../components/articles/ArticlePsychology';
import ArticleLifestyle from '../components/articles/ArticleLifestyle';
import ArticleSoloLab from '../components/articles/ArticleSoloLab';
import ArticleRefractory from '../components/articles/ArticleRefractory';
import ArticleBreathMastery from '../components/articles/ArticleBreathMastery';
import ArticleEndocrine from '../components/articles/ArticleEndocrine';
import ArticleLongevity from '../components/articles/ArticleLongevity';
import ArticleBiomechanics from '../components/articles/ArticleBiomechanics';
import ArticleDopamineReset from '../components/articles/ArticleDopamineReset';
import BookMockup from '../components/BookMockup';
import { triggerContentLocker } from '../utils/locker';

export default function BlogPostPage({ onOpenGuide }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  // Find post by slug or fallback
  const post = BLOG_POSTS.find(p => p.slug === slug || p.id === slug) || BLOG_POSTS[0];

  // Derive current clean URL
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  const directCleanUrl = typeof window !== 'undefined' ? `${currentOrigin}/blog/${post.slug}` : `/blog/${post.slug}`;

  // Update dynamic document title
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | ${BRAND.name} Scientific Library`;
    }
    return () => {
      document.title = `${BRAND.name} - The Art of Stamina (Free PDF)`;
    };
  }, [post]);

  const handleLockerClick = (e) => {
    triggerContentLocker(e);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(directCleanUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Find next article in sequence for circular recommendation
  const currentIndex = BLOG_POSTS.findIndex(p => p.id === post.id);
  const nextPost = BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length] || BLOG_POSTS[0];
  
  // Other companion articles excluding current
  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0b0c10] text-[#eae8e3] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif text-3xl font-bold mb-4">Guide Not Found</h1>
        <p className="text-[#8e909a] mb-6">The requested scientific article could not be located.</p>
        <Link to="/blog" className="px-6 py-3 rounded-xl bg-[#c5a059] text-black font-bold no-underline">
          Return to Blog Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#eae8e3] font-sans antialiased selection:bg-[#c5a059]/30 selection:text-[#fbf9f4]">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-[#141620] via-[#202230] to-[#141620] border-b border-[#c5a059]/30 py-2.5 px-4 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-1.5 text-[#dfc58b] hover:text-white transition-colors no-underline font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="font-semibold tracking-wider uppercase">ALL GUIDES</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-[#b8b5ab]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0" />
            <span>AUTHORITY CLINICAL MONOGRAPH • {post.category.toUpperCase()}</span>
          </div>

          <a
            href="javascript:void(0);"
            onClick={handleLockerClick}
            className="inline-flex items-center gap-1 text-[#dfc58b] hover:underline font-bold uppercase tracking-wider no-underline cursor-pointer"
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
          <div className="flex items-center gap-3 sm:gap-4">
            <Link 
              to="/" 
              className="text-xs text-[#b8b5ab] hover:text-[#dfc58b] font-medium transition-colors hidden sm:block no-underline"
            >
              Main Book
            </Link>
            <Link 
              to="/blog" 
              className="text-xs text-[#dfc58b] font-bold transition-colors hidden sm:block no-underline"
            >
              All Articles
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 py-2 px-3 rounded-lg bg-[#181a26] border border-[#c5a059]/40 text-xs text-[#dfc58b] hover:text-white hover:bg-[#222638] transition-all cursor-pointer shadow-sm"
              title="Copy direct link to this guide"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#4ade80]" />
                  <span className="text-[#4ade80] font-bold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Link2 className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span className="hidden sm:inline">Copy Article Link</span>
                  <span className="sm:hidden">Share</span>
                </>
              )}
            </button>

            <a
              href="javascript:void(0);"
              onClick={handleLockerClick}
              className="py-2 px-3.5 sm:px-4 rounded-lg bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] text-[#0b0c10] font-extrabold text-xs tracking-wider uppercase shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 no-underline cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CLAIM BOOK</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. BREADCRUMBS & DIRECT PERMALINK URL BAR */}
      <div className="bg-[#0e1017] border-b border-white/5 py-2.5 px-4 sm:px-8 text-xs text-[#8e909a]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          
          {/* Breadcrumb links */}
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#dfc58b] transition-colors no-underline">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-[#dfc58b] transition-colors no-underline">Blog Library</Link>
            <span>/</span>
            <span className="text-[#dfc58b] font-medium truncate max-w-[200px] sm:max-w-[340px]">
              {post.title}
            </span>
          </div>

          {/* Direct Permalink pill */}
          <div className="flex items-center gap-2 self-start sm:self-auto text-[11px]">
            <span className="text-[#707380] font-mono">Direct URL:</span>
            <code className="px-2 py-0.5 rounded bg-[#161824] border border-white/10 text-[#dfc58b] font-mono text-[10px] select-all truncate max-w-[220px] sm:max-w-[300px]">
              {directCleanUrl}
            </code>
            <button
              onClick={handleShare}
              className="p-1 rounded bg-[#1c1f2e] hover:bg-[#25293d] text-[#b8b5ab] hover:text-white transition-colors"
              title="Copy direct permanent URL"
            >
              {copied ? <Check className="w-3 h-3 text-[#4ade80]" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>

        </div>
      </div>

      {/* 4. ARTICLE HEADER HERO */}
      <section className="pt-8 sm:pt-12 pb-8 px-4 sm:px-8 border-b border-white/10 bg-gradient-to-b from-[#141624] via-[#0e1018] to-[#0b0c10]">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-[#1e2233] border border-[#c5a059]/40 text-[#dfc58b] font-semibold tracking-wider uppercase">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-[#8e909a]">
              <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{post.readTime}</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-1.5 text-[#8e909a]">
              <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Published {post.publishedDate}</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-1.5 text-[#4ade80]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Peer-Reviewed Clinical Data</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#fbf9f4] leading-[1.2] tracking-tight">
            {post.fullTitle || post.title}
          </h1>

          {/* Subtitle / Executive Abstract */}
          <p className="text-base sm:text-xl text-[#cbc7be] font-light leading-relaxed">
            {post.subtitle}
          </p>

          {/* PERMALINK & SHARING ACTION CARD */}
          <div className="p-4 rounded-xl bg-[#141724] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-1">
              <div className="text-[10px] text-[#dfc58b] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Link2 className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>DIRECT STANDALONE PAGE PERMALINK</span>
              </div>
              <div className="font-mono text-[11px] text-[#b8b5ab] select-all break-all">
                {directCleanUrl}
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleShare}
                className="flex-1 sm:flex-none py-2 px-3.5 rounded-lg bg-[#c5a059] text-black font-bold text-xs flex items-center justify-center gap-1.5 hover:brightness-110 transition-all cursor-pointer shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied URL!' : 'Copy Direct URL'}</span>
              </button>

              <a
                href={directCleanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-lg bg-[#1e2234] border border-white/10 text-[#dfc58b] hover:text-white hover:border-[#c5a059] text-xs flex items-center gap-1 transition-all no-underline"
                title="Open this direct article in a new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open in New Tab</span>
              </a>
            </div>
          </div>

          {/* Author Row */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#202436] border border-[#c5a059]/50 flex items-center justify-center font-bold text-xs text-[#dfc58b]">
                {post.author.avatar}
              </div>
              <div>
                <div className="font-serif font-bold text-sm text-[#fbf9f4]">{post.author.name}</div>
                <div className="text-xs text-[#8e909a]">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileTocOpen(!mobileTocOpen)}
                className="lg:hidden inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#181a26] border border-[#c5a059]/40 text-xs text-[#dfc58b]"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Table of Contents</span>
              </button>
            </div>
          </div>

          {/* Large Hero Editorial Image */}
          <div className="pt-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#141622]">
              <img 
                src={post.heroImage} 
                alt={post.heroImageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[500px] object-cover object-center"
              />
              <div className="p-3 bg-[#0d0e14]/90 border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
                <span>Clinical Illustration: {post.heroImageAlt}</span>
                <span className="text-[#dfc58b] font-medium hidden sm:inline">Bedroom IQ Science Lab</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. MAIN ARTICLE LAYOUT WITH STICKY TOC SIDEBAR */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT SIDEBAR: Table of Contents & Quick Book CTA (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              
              {/* Table of Contents Card */}
              <div className="p-6 rounded-2xl bg-[#12141e] border border-white/10 shadow-xl space-y-4">
                <div className="font-serif font-bold text-base text-[#fbf9f4] flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-[#c5a059]" />
                    <span>Table of Contents</span>
                  </span>
                  <span className="text-xs text-[#8e909a]">{post.toc?.length || 0} Sections</span>
                </div>

                <nav className="space-y-1.5 max-h-[380px] overflow-y-auto pr-2 text-xs">
                  {post.toc?.map((item, idx) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block py-1.5 px-2.5 rounded-lg text-[#b8b5ab] hover:text-[#dfc58b] hover:bg-[#1c1f2d] transition-all no-underline leading-snug"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Sidebar Direct Permalink Box */}
              <div className="p-5 rounded-2xl bg-[#12141e] border border-white/10 shadow-xl space-y-3">
                <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Link2 className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Article Permalink</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5 font-mono text-[11px] text-[#9fa2b3] break-all select-all">
                  {directCleanUrl}
                </div>
                <button
                  onClick={handleShare}
                  className="w-full py-2 px-3 rounded-lg bg-[#1d202f] hover:bg-[#25293d] border border-white/10 text-xs text-[#dfc58b] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#4ade80]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Link Copied!' : 'Copy Link to Clipboard'}</span>
                </button>
              </div>

              {/* Masterclass Series Navigator */}
              <div className="p-6 rounded-2xl bg-[#12141e] border border-white/10 shadow-xl space-y-4">
                <div className="font-serif font-bold text-base text-[#fbf9f4] flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#c5a059]" />
                    <span>Complete Curriculum</span>
                  </span>
                  <span className="text-[11px] text-[#dfc58b] font-mono">{BLOG_POSTS.length} Guides</span>
                </div>

                <div className="space-y-1.5 max-h-[320px] overflow-y-auto pr-1 text-xs">
                  {BLOG_POSTS.map((p, idx) => {
                    const isCurrent = p.id === post.id;
                    return (
                      <Link
                        key={p.id}
                        to={`/blog/${p.slug}`}
                        className={`flex items-start gap-2 p-2 rounded-lg no-underline transition-all ${
                          isCurrent
                            ? 'bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#dfc58b] font-semibold'
                            : 'text-[#9fa2b3] hover:text-[#fbf9f4] hover:bg-[#181a28]'
                        }`}
                      >
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isCurrent ? 'bg-[#c5a059] text-black font-bold' : 'bg-white/5 text-[#8e909a]'}`}>
                          0{idx + 1}
                        </span>
                        <span className="line-clamp-2 leading-tight">{p.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar Book Promotion */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#181a28] to-[#12141f] border border-[#c5a059]/40 shadow-xl text-center space-y-4">
                <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-widest">
                  COMPLIMENTARY ACCESS
                </div>
                <div className="font-serif font-bold text-lg text-white">
                  The Art of Stamina
                </div>
                <p className="text-xs text-[#8e909a] font-light">
                  Get the complete 68-page practical manual with clinical pacing drills and pelvic regimens.
                </p>
                <div className="flex justify-center cursor-pointer" onClick={handleLockerClick}>
                  <BookMockup size="compact" />
                </div>
                <a
                  href="javascript:void(0);"
                  onClick={handleLockerClick}
                  className="block w-full py-3 rounded-xl bg-[#c5a059] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all no-underline cursor-pointer shadow-md"
                >
                  DOWNLOAD FREE PDF
                </a>
              </div>

            </div>
          </aside>

          {/* MOBILE TOC DRAWER (if toggled) */}
          {mobileTocOpen && (
            <div className="lg:hidden col-span-1 p-5 rounded-2xl bg-[#141622] border border-[#c5a059]/40 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="font-serif font-bold text-sm text-[#dfc58b]">Jump to Section</span>
                <button onClick={() => setMobileTocOpen(false)} className="text-[#8e909a]">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-1.5 text-xs max-h-60 overflow-y-auto">
                {post.toc?.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileTocOpen(false)}
                    className="block py-1 px-2 rounded text-[#b8b5ab] hover:text-white no-underline"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* MAIN ARTICLE BODY (8 Columns on desktop) */}
          <article className="lg:col-span-8 space-y-12">
            
            {/* Conditional Rendering of Specific Full Article */}
            {post.id === 'dopamine-fasting-neurological-desensitization-stamina' ? (
              <ArticleDopamineReset post={post} onLockerClick={handleLockerClick} />
            ) : post.id === 'pelvic-floor-synergy-functional-kinetic-chain-stamina' ? (
              <ArticleBiomechanics post={post} onLockerClick={handleLockerClick} />
            ) : post.id === 'the-longevity-protocol-age-proofing-sexual-stamina' ? (
              <ArticleLongevity post={post} onLockerClick={handleLockerClick} />
            ) : post.id === 'the-psychology-of-stamina-rewiring-brain-performance' || post.id === 'psychology-of-stamina-mental-control' ? (
              <ArticlePsychology post={post} onLockerClick={handleLockerClick} />
            ) : post.id === 'the-endocrine-architecture-testosterone-stamina-axis' ? (
              <ArticleEndocrine post={post} onLockerClick={handleLockerClick} />
            ) : post.id === 'the-breath-of-stamina-arousal-control-breathwork' ? (
              <ArticleBreathMastery post={post} onLockerClick={handleLockerClick} />
            ) : post.id === 'elite-recovery-refractory-period-multi-round' ? (
              <ArticleRefractory post={post} onLockerClick={handleLockerClick} />
            ) : post.id === 'solo-laboratory-ejaculatory-reflex-control' ? (
              <ArticleSoloLab post={post} onLockerClick={handleLockerClick} />
            ) : post.id === 'stamina-lifestyle-daily-habits' ? (
              <ArticleLifestyle post={post} onLockerClick={handleLockerClick} />
            ) : post.id === 'nitric-oxide-blueprint-nutrition' ? (
              <ArticleNitricOxide post={post} onLockerClick={handleLockerClick} />
            ) : (
              <ArticleStamina post={post} onLockerClick={handleLockerClick} />
            )}

            {/* AUTHOR BIO CARD */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#12141e] border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="w-16 h-16 rounded-full bg-[#1e2234] border-2 border-[#c5a059] flex items-center justify-center font-serif font-bold text-xl text-[#dfc58b] flex-shrink-0">
                {post.author.avatar}
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <h4 className="font-serif font-bold text-lg text-[#fbf9f4]">{post.author.name}</h4>
                  <span className="text-xs text-[#c5a059] font-medium">{post.author.role}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#8e909a] leading-relaxed">
                  The Art of Stamina Clinical Research &amp; Physiology Lab synthesizes the latest peer-reviewed studies in neuromuscular pelvic rehabilitation, autonomic nervous system down-regulation, and cardiovascular endothelial biology for evidence-based male intimacy health.
                </p>
              </div>
            </div>

            {/* NEXT RECOMMENDED GUIDE (Multipage direct link) */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#171926] to-[#12141f] border border-white/10 hover:border-[#c5a059]/50 transition-all space-y-4">
              <div className="text-[11px] text-[#dfc58b] font-bold uppercase tracking-widest flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Next Recommended Authority Guide</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="w-full sm:w-40 h-28 rounded-xl overflow-hidden bg-black/40 flex-shrink-0">
                  <img 
                    src={nextPost.heroImage} 
                    alt={nextPost.heroImageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2 flex-1 text-center sm:text-left">
                  <Link to={`/blog/${nextPost.slug}`} className="no-underline">
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#fbf9f4] hover:text-[#dfc58b] transition-colors leading-snug">
                      {nextPost.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-[#8e909a] line-clamp-2">
                    {nextPost.subtitle}
                  </p>
                  <div className="pt-2 flex items-center gap-3">
                    <Link 
                      to={`/blog/${nextPost.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#dfc58b] hover:underline no-underline"
                    >
                      <span>Read Full Guide ({nextPost.readTime})</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* COMPANION MASTERCLASSES GRID */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <h4 className="font-serif font-bold text-lg text-[#fbf9f4] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#c5a059]" />
                  <span>Explore Companion Masterclasses</span>
                </h4>
                <Link to="/blog" className="text-xs text-[#dfc58b] hover:underline no-underline font-semibold">
                  View All ({BLOG_POSTS.length}) →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedPosts.map(rel => (
                  <Link 
                    key={rel.id} 
                    to={`/blog/${rel.slug}`} 
                    className="p-4 rounded-xl bg-[#12141f] border border-white/10 hover:border-[#c5a059]/40 transition-all flex flex-col justify-between group no-underline"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-[#dfc58b] font-medium uppercase">{rel.category}</span>
                        <span className="text-[#8e909a]">{rel.readTime}</span>
                      </div>
                      <h5 className="font-serif font-bold text-sm text-[#fbf9f4] group-hover:text-[#dfc58b] transition-colors leading-snug line-clamp-2">
                        {rel.title}
                      </h5>
                    </div>
                    <div className="pt-3 flex items-center gap-1 text-[11px] text-[#c5a059] font-semibold">
                      <span>Read Guide</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* BOTTOM BOOK DOWNLOAD PROMO */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-b from-[#1c1f2e] via-[#141622] to-[#0e1018] border border-[#c5a059]/60 shadow-2xl text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202538] border border-[#c5a059]/40 text-[#dfc58b] text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>CLAIM YOUR FREE COPY</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
                Ready to Master Lasting Stamina &amp; Complete Control?
              </h3>

              <p className="text-sm text-[#cbc7be] font-light max-w-xl mx-auto leading-relaxed">
                Download the complete 68-page <strong>"The Art of Stamina"</strong> book today for free. Includes the 12-Week Progressive Regimen, Audio-Paced Breathing Exercises, and Partner Communication Playbooks.
              </p>

              <div className="my-6 flex justify-center cursor-pointer" onClick={handleLockerClick}>
                <BookMockup size="normal" />
              </div>

              <div className="max-w-md mx-auto">
                <a
                  href="javascript:void(0);"
                  onClick={handleLockerClick}
                  className="w-full py-4 px-6 rounded-xl text-sm sm:text-base font-extrabold tracking-wider uppercase text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_8px_30px_rgba(197,160,89,0.35)] flex items-center justify-center gap-2 cursor-pointer no-underline"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD FREE 68-PAGE BOOK</span>
                </a>
              </div>
            </div>

          </article>
        </div>
      </main>

      {/* 6. FOOTER */}
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
              Disclaimer: The contents of this article are for educational purposes only and are not intended to substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Direct Page Links</div>
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
              <li>
                <Link to="/blog" className="hover:text-[#dfc58b] transition-colors no-underline block">
                  All Blog Articles Index
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
