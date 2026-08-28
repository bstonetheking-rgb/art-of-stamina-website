import React, { useState } from 'react';
import { 
  X, 
  Download, 
  BookOpen, 
  ChevronRight, 
  ChevronLeft, 
  Printer, 
  CheckCircle2, 
  Shield, 
  Compass, 
  Wind, 
  ShieldCheck, 
  Sparkles, 
  MessageSquareHeart, 
  Leaf 
} from 'lucide-react';
import { BRAND, CHAPTERS } from '../config';
import { downloadBookPdf } from '../utils/generatePdf';

const FULL_CHAPTER_CONTENT = [
  {
    num: "01",
    title: "Understanding Sexual Stamina",
    subtitle: "The Physiology of Arousal & Timing",
    icon: Compass,
    content: `
### 1. The Autonomic Nervous System
Sexual stamina is fundamentally a neurological and autonomic process, not a mechanical endurance contest. 

The human nervous system operates in two key modes during intimacy:
- **The Sympathetic Branch:** The "fight, flight, or high-arousal" system. When excitement surges, adrenaline rises, breathing becomes shallow, and heart rate accelerates. In this state, the body accelerates toward climax as an involuntary reflex.
- **The Parasympathetic Branch:** The "rest, digest, and connected" state. This branch maintains steady blood flow, physical calm, and neurological composure.

### 2. The 1-to-10 Arousal Scale
To control timing, you must build awareness of your arousal thresholds:
- **Level 1–4:** Baseline attraction and gentle sensory arousal.
- **Level 5–6:** Engaged, rhythmic pleasure. Full physical responsiveness.
- **Level 7:** The Golden Zone. Maximum sustained intimacy where pacing can be maintained indefinitely.
- **Level 8.5:** The Involuntary Plateau. If arousal crosses this point, the ejaculatory reflex activates automatically.

**Core Practice:** Train yourself to notice when you enter Level 7. When you reach 7, down-shift your breathing and muscle tension before crossing Level 8.
    `,
    keyTakeaways: [
      "Climax is an autonomic reflex governed by sympathetic nervous spikes.",
      "Calmness and relaxation physically prolong stamina; tension shortens it.",
      "Stay in the 6–7 arousal zone by modulating breath and pacing."
    ]
  },
  {
    num: "02",
    title: "Breathing & Relaxation",
    subtitle: "The Diaphragmatic Breath Anchor",
    icon: Wind,
    content: `
### 1. Why Breath Dictates Timing
When men feel high arousal or anxiety, they instinctively hold their breath or breathe shallowly from the upper chest. This starves the body of oxygen and sends an emergency signal to the sympathetic nervous system, triggering an immediate climax surge.

### 2. The 4-4 Diaphragmatic Anchor
Practice this rhythmic breathing cycle:
1. **Inhale (4 Seconds):** Breathe deeply down into your lower abdomen. Allow your belly and pelvic floor to expand softly without forcing.
2. **Exhale (4–6 Seconds):** Release the breath slowly through relaxed lips. Feel the tension draining from your shoulders and pelvic floor.

### 3. Application During Intimacy
When sensations intensify, do not freeze or hold your breath. Instead, deepen your exhalations. A slow, continuous breath pattern immediately signals your heart rate and nervous system to stay steady.
    `,
    keyTakeaways: [
      "Never hold your breath during heightened pleasure.",
      "Deep diaphragmatic breathing lowers heart rate within 3 breath cycles.",
      "Exhale tension downward to keep the pelvic area relaxed."
    ]
  },
  {
    num: "03",
    title: "Body Awareness & Control",
    subtitle: "Pelvic Floor Tension vs. Freedom",
    icon: ShieldCheck,
    content: `
### 1. The Subconscious Clenching Reflex
Most men unknowingly clench their pelvic floor (the PC / pubococcygeus muscle) when pleasure rises. While many are taught to do "Kegels" (clenching), excessive tension actually triggers premature climax.

### 2. The Reverse Kegel (Pelvic Relaxation)
To sustain control, you must learn to relax the pelvic floor:
- Imagine the sensation of releasing a gentle sigh through your lower pelvis.
- When breathing into the lower belly, feel the perineum (the space between scrotum and anus) drop and widen slightly.
- This creates space for blood flow without creating the muscular spasm that leads to involuntary release.

### 3. The 30-Second Body Scan
Periodically scan these three tension zones:
1. **Jaw & Neck:** Are you gritting your teeth? Soften your mouth.
2. **Shoulders:** Drop them away from your ears.
3. **Pelvic Floor:** Release any clenching or tightness.
    `,
    keyTakeaways: [
      "Involuntary clenching accelerates climax; pelvic relaxation extends duration.",
      "Master the Reverse Kegel: gently dropping and expanding the pelvic floor.",
      "Relax your jaw and neck—tension in the upper body directly mirrors the pelvis."
    ]
  },
  {
    num: "04",
    title: "Building Sexual Confidence",
    subtitle: "Eliminating Performance Anxiety",
    icon: Sparkles,
    content: `
### 1. Decoupling Worth from Clocks
Performance anxiety is the single greatest cause of bedroom stress. Worrying about "how long I will last" puts the mind into spectator mode, increasing adrenaline and triggering the very outcome you fear.

### 2. Shifting to Sensory Presence
Intimacy is an experiential art, not a test with a score. Shift your focus:
- From *"How am I performing?"* to *"What does this skin feel like?"*
- From *"Will I last?"* to *"How connected are we right now?"*

When your attention is on the richness of touch, warmth, and mutual pleasure, fear disappears, and the nervous system remains in a relaxed, high-stamina parasympathetic state.
    `,
    keyTakeaways: [
      "Anxiety creates adrenaline; adrenaline triggers early climax.",
      "Stop evaluating yourself in real time. Focus 100% on touch and connection.",
      "Confidence comes from understanding your body, not from tension."
    ]
  },
  {
    num: "05",
    title: "Better Communication & Intimacy",
    subtitle: "Synchronizing With Your Partner",
    icon: MessageSquareHeart,
    content: `
### 1. Pacing as Foreplay
You do not need to hide rhythm changes or pauses. Changing pace, shifting positions, or focusing on kissing and partner touch are not interruptions—they enhance pleasure for both partners.

### 2. Smooth Transitions
Instead of abruptly stopping:
- Slow your movement into gentle, subtle circles.
- Transition attention to her neck, chest, or kissing.
- Take three slow, synchronous deep breaths together.

### 3. Honest, Confident Expression
A relaxed partner is magnetic. Communicating "I want to slow down and enjoy this with you" communicates high confidence, deep care, and mastery.
    `,
    keyTakeaways: [
      "Pauses and pace changes enhance romantic tension and partner pleasure.",
      "Use kissing and full-body touch during pacing adjustments.",
      "Calm communication reflects confidence, not hesitation."
    ]
  },
  {
    num: "06",
    title: "Natural Wellness Habits",
    subtitle: "Daily Lifestyle, Nutrition & Movement",
    icon: Leaf,
    content: `
### 1. Circulation & Cardiovascular Health
Natural stamina is backed by healthy blood flow and nitric oxide production:
- **Hydration:** Drink ample water throughout the day. Dehydration reduces blood volume and raises resting heart rate.
- **Whole Foods:** Leafy greens (arugula, spinach), beets, pomegranate, and citrus support healthy endothelial function and circulation.

### 2. Sleep & Restorative Recovery
Chronic sleep deprivation elevates baseline cortisol (stress hormone), making your nervous system hyper-reactive. Aim for 7–8 hours of quality rest.

### 3. Daily Pelvic & Hip Mobility
Spend 5 minutes daily doing deep squats, butterfly stretches, and child's pose to release hip tightness and promote healthy pelvic circulation.
    `,
    keyTakeaways: [
      "Circulation, hydration, and sleep build the physiological foundation of vitality.",
      "Daily hip and pelvic mobility releases chronic muscular tension.",
      "Consistency in natural lifestyle habits yields effortless long-term stamina."
    ]
  }
];

export default function BookReaderModal({ isOpen, onClose }) {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  if (!isOpen) return null;

  const currentChapter = FULL_CHAPTER_CONTENT[activeChapterIndex];
  const IconComponent = currentChapter.icon;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#11121a] border border-[#c5a059]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#161822] border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#1e202e] border border-[#c5a059]/50 flex items-center justify-center text-[#dfc58b]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-sm sm:text-base text-[#fbf9f4] tracking-wide">
                {BRAND.bookTitle}
              </h2>
              <p className="text-[10px] sm:text-xs text-[#8e909a]">
                {BRAND.name} • Official Digital Edition (Free)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadBookPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] hover:brightness-110 active:scale-95 transition-all cursor-pointer shadow-sm"
              title="Download Free PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#dfc58b] bg-[#1d1f2b] border border-[#c5a059]/40 hover:bg-[#252838] transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#8e909a] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Close Reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chapter Navigation Tabs */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-white/10 bg-[#0d0e14] px-4 py-2 gap-2 text-xs">
          {FULL_CHAPTER_CONTENT.map((ch, idx) => (
            <button
              key={ch.num}
              onClick={() => setActiveChapterIndex(idx)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-lg font-semibold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeChapterIndex === idx
                  ? 'bg-gradient-to-r from-[#dfc58b] to-[#c5a059] text-[#0b0c10] shadow-sm'
                  : 'text-[#8e909a] hover:text-[#dfc58b] hover:bg-white/5'
              }`}
            >
              <span>CH {ch.num}</span>
              <span className="hidden md:inline font-normal text-[11px] opacity-85">
                • {ch.title}
              </span>
            </button>
          ))}
        </div>

        {/* Reader Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 text-[#eae8e3]">
          
          {/* Chapter Eyebrow & Title */}
          <div className="border-b border-white/10 pb-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#dfc58b] tracking-widest uppercase mb-2">
              <IconComponent className="w-4 h-4 text-[#c5a059]" />
              <span>CHAPTER {currentChapter.num}</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] mb-1">
              {currentChapter.title}
            </h1>
            <p className="font-serif italic text-base text-[#c5a059]">
              {currentChapter.subtitle}
            </p>
          </div>

          {/* Chapter Text Body */}
          <div className="prose prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-4 text-[#d4d1c9]">
            {currentChapter.content.split('\n\n').map((paragraph, pIdx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={pIdx} className="font-serif font-bold text-lg text-[#fbf9f4] text-[#dfc58b] pt-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={pIdx} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Key Insights Box */}
          <div className="bg-[#171924] border border-[#c5a059]/30 rounded-xl p-5 sm:p-6 space-y-3 shadow-inner">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#dfc58b]">
              <Sparkles className="w-4 h-4 text-[#c5a059]" />
              <span>Key Mastery Principles</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#cac7be]">
              {currentChapter.keyTakeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Chapter Paging */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#14151f] border-t border-white/10">
          <button
            onClick={() => setActiveChapterIndex(prev => Math.max(0, prev - 1))}
            disabled={activeChapterIndex === 0}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#eae8e3] bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Chapter</span>
          </button>

          <span className="text-xs text-[#8e909a]">
            Chapter {activeChapterIndex + 1} of {FULL_CHAPTER_CONTENT.length}
          </span>

          <button
            onClick={() => setActiveChapterIndex(prev => Math.min(FULL_CHAPTER_CONTENT.length - 1, prev + 1))}
            disabled={activeChapterIndex === FULL_CHAPTER_CONTENT.length - 1}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] to-[#c5a059] hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <span>Next Chapter</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
