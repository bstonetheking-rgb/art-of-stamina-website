import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Activity, 
  Wind, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  ShieldCheck,
  ArrowUpRight,
  BookOpen
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticleStamina({ post, onLockerClick }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedArousalLevel, setSelectedArousalLevel] = useState("7");

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="prose prose-invert max-w-none space-y-12 text-[#cbc7be] leading-relaxed text-base sm:text-[17px]">
      
      {/* TARGET KEYWORDS BADGES */}
      <div className="p-4 rounded-xl bg-[#12141d] border border-white/10 text-xs text-[#8e909a] flex flex-wrap items-center gap-2">
        <span className="text-[#dfc58b] font-semibold uppercase tracking-wider">Clinical Keywords:</span>
        {post.targetKeywords.split(',').map((kw, i) => (
          <span key={i} className="px-2.5 py-1 rounded-md bg-[#181a26] text-[#b8b5ab] border border-white/5">
            {kw.trim()}
          </span>
        ))}
      </div>

      {/* INTRODUCTION */}
      <section id="intro" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Introduction: The Modern Struggle
        </h2>
        <p>
          Sexual stamina is one of the most misunderstood aspects of male physiology. For decades, men have been told that lasting longer is simply a matter of "willpower," distracting oneself with baseball stats, or blindly clenching the pelvic muscles until exhaustion.
        </p>
        <p>
          In reality, modern clinical urology, pelvic physical therapy, and neuroscience paint a completely different picture. Early ejaculation and performance anxiety are rarely failures of character; they are <strong>autonomic and neuromuscular reflexes</strong> conditioned by habit, stress, and chronic pelvic hypertonicity (excessive muscular tightness).
        </p>
        
        {/* Highlight Callout Box */}
        <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-[#171a26] to-[#12141d] border-l-4 border-[#c5a059] shadow-md">
          <p className="font-serif italic text-lg sm:text-xl text-[#fbf9f4] leading-relaxed mb-2">
            "Control does not come from forcing your body into submission. It comes from tuning down sympathetic fight-or-flight activation and learning how to voluntarily release pelvic floor tension under arousal."
          </p>
          <div className="text-xs text-[#c5a059] font-semibold tracking-wider uppercase">— Bedroom IQ Physiological Research</div>
        </div>

        <p>
          When you understand the exact biological triggers behind the bulbospongiosus and pubococcygeus (PC) reflexes, you can replace panic with mindful, repeatable awareness.
        </p>
      </section>

      {/* CHAPTER 1 */}
      <section id="ch1" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 1</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          1. Understanding the Male Pelvic Floor
        </h2>
        <p>
          The pelvic floor is a hammock-like sling of muscles stretching from the pubic bone in front to the tailbone (coccyx) in the back. In men, these muscles support the bladder, bowel, and prostate, and wrap directly around the base of the penis.
        </p>

        {/* Featured Image 1: Pelvic Anatomy Diagram */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-[#13151f]">
          <img 
            src={post.images.pelvic} 
            alt="3D male pelvic floor anatomy diagram illustrating the pubococcygeus (PC) and bulbospongiosus muscles"
            referrerPolicy="no-referrer"
            className="w-full h-[280px] sm:h-[380px] object-cover object-center"
          />
          <div className="p-3.5 bg-[#10121a] border-t border-white/10 flex items-center justify-between text-xs text-[#8e909a]">
            <span>Anatomical visual: Pubococcygeus (PC), Bulbospongiosus &amp; Ischiocavernosus muscle hammock.</span>
            <span className="text-[10px] text-[#c5a059] uppercase tracking-wider font-semibold">Pelvic Anatomy</span>
          </div>
        </div>

        <p>
          During sexual arousal, as stimulation intensifies, the <em>bulbospongiosus</em> and <em>ischiocavernosus</em> muscles instinctively begin micro-contracting. If these muscles are chronically tight (hypertonic) due to prolonged desk sitting, heavy weightlifting without stretching, or chronic stress, they trigger the spinal ejaculatory reflex far too early.
        </p>
      </section>

      {/* CHAPTER 2 */}
      <section id="ch2" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 2</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          2. Arousal and the Nervous System
        </h2>
        <p>
          Your sexual response is governed by two branches of the Autonomic Nervous System (ANS):
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-xl bg-[#141620] border border-white/10">
            <div className="flex items-center gap-2 text-[#4ade80] font-semibold text-sm mb-2">
              <Heart className="w-4 h-4" />
              <span>Parasympathetic ("Point")</span>
            </div>
            <p className="text-xs text-[#b8b5ab] leading-relaxed">
              Responsible for relaxation, vasodilation, smooth muscle relaxation, and achieving strong, effortless erections.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#141620] border border-white/10">
            <div className="flex items-center gap-2 text-[#f87171] font-semibold text-sm mb-2">
              <Activity className="w-4 h-4" />
              <span>Sympathetic ("Shoot")</span>
            </div>
            <p className="text-xs text-[#b8b5ab] leading-relaxed">
              Responsible for the fight-or-flight state, elevated heart rate, rapid shallow breathing, and triggering the climax reflex.
            </p>
          </div>
        </div>

        {/* Featured Image 2: Autonomic Nervous System & Breath */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-[#13151f]">
          <img 
            src={post.images.autonomic} 
            alt="Male deep breathing meditation activating vagus nerve and down-regulating sympathetic arousal"
            referrerPolicy="no-referrer"
            className="w-full h-[280px] sm:h-[380px] object-cover object-center"
          />
          <div className="p-3.5 bg-[#10121a] border-t border-white/10 flex items-center justify-between text-xs text-[#8e909a]">
            <span>Autonomic down-regulation: Diaphragmatic breathing directly modulates vagal tone and heart rate.</span>
            <span className="text-[10px] text-[#c5a059] uppercase tracking-wider font-semibold">Nervous System</span>
          </div>
        </div>

        <p>
          When anxiety creeps in during intimacy ("Will I last?", "Am I doing okay?"), the sympathetic system fires prematurely. Your body misinterprets performance anxiety as a threat, rushing through the reproductive cycle to finish quickly. Down-regulating this surge is the key to effortless stamina.
        </p>
      </section>

      {/* CHAPTER 3 */}
      <section id="ch3" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 3</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          3. Why More Squeezing Is Not the Answer: The Reverse Kegel
        </h2>
        <p>
          For years, traditional advice told men to do hundreds of "Kegels" (contracting the pelvic floor upwards as if stopping urination). For a man already suffering from rapid arousal, <strong>standard Kegels often make the problem significantly worse</strong> because his pelvic muscles are already locked in a state of chronic spasm.
        </p>
        <p>
          The true breakthrough for most men is the <strong>Reverse Kegel</strong>. Rather than clenching up and in, a Reverse Kegel is an intentional, gentle expansion and release of the perineum and lower abdominal wall.
        </p>

        {/* Technique Comparison Box */}
        <div className="p-6 rounded-2xl bg-[#151724] border border-[#c5a059]/40 space-y-4 my-6">
          <div className="font-serif font-bold text-lg text-[#dfc58b]">
            How to Execute a Subtle Reverse Kegel
          </div>
          <ul className="space-y-3 text-sm text-[#eae8e3]">
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#c5a059]/20 text-[#dfc58b] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <span><strong>Inhale slowly into your lower belly:</strong> Let your diaphragm descend, pushing the abdominal wall outward gently.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#c5a059]/20 text-[#dfc58b] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <span><strong>Gently expand the perineum:</strong> Imagine sending a soft breath down to the space between your scrotum and anus, allowing it to drop and widen without straining.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#c5a059]/20 text-[#dfc58b] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <span><strong>Maintain normal tone:</strong> Do NOT push forcefully like bearing down during bowel movements. It should feel like a deep, relaxing sigh into your pelvic bowl.</span>
            </li>
          </ul>
        </div>

        {/* COMPANION INTERLINK: BIOMECHANICAL BLUEPRINT */}
        <div className="my-5 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Companion Masterclass</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Biomechanical Blueprint] Pelvic Floor Synergy &amp; The Kinetic Chain
            </div>
            <div className="text-xs text-[#8e909a]">
              Why the pelvic floor cannot be trained in isolation: Discover the TVA, glute scaffolding, and adductor slack.
            </div>
          </div>
          <Link
            to="/blog/pelvic-floor-synergy-functional-kinetic-chain-stamina"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Biomechanics Blueprint</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 4: AROUSAL SCALE */}
      <section id="ch4" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 4</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          4. Using an Arousal Scale (The 1 to 10 Gauge)
        </h2>
        <p>
          Mastering sexual stamina requires real-time calibration. Most men operate in binary: 0 (not aroused) and 10 (inevitable climax). To gain control, you must divide your sensory experience into a 1-to-10 scale.
        </p>

        {/* Interactive Arousal Scale Visualizer */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#181a28] to-[#10121b] border border-[#c5a059]/40 shadow-xl my-8">
          <div className="flex items-center justify-between mb-4">
            <span className="font-serif font-bold text-sm tracking-widest text-[#dfc58b] uppercase">Interactive Calibration Tool</span>
            <span className="text-xs text-[#8e909a]">Click level to inspect</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
            {post.arousalScaleLevels.map((lvl) => (
              <button
                key={lvl.level}
                onClick={() => setSelectedArousalLevel(lvl.level)}
                className={`py-3 px-2 rounded-xl text-center font-serif font-bold text-sm transition-all cursor-pointer border ${
                  selectedArousalLevel === lvl.level
                    ? 'bg-[#c5a059] text-black border-white shadow-lg scale-105'
                    : lvl.highlight 
                      ? 'bg-[#221f2d] border-[#c5a059] text-[#dfc58b]' 
                      : 'bg-[#141622] border-white/10 text-[#cbc7be] hover:bg-[#1e2232]'
                }`}
              >
                Level {lvl.level}
              </button>
            ))}
          </div>

          {(() => {
            const current = post.arousalScaleLevels.find(l => l.level === selectedArousalLevel) || post.arousalScaleLevels[2];
            return (
              <div className="p-5 rounded-xl bg-[#12141e] border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-serif font-bold text-lg text-[#fbf9f4]">
                    Level {current.level}: {current.label}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#222436] text-[#dfc58b] border border-[#c5a059]/30">
                    {current.state}
                  </span>
                </div>
                <p className="text-sm text-[#cbc7be] leading-relaxed pt-1">
                  {current.description}
                </p>
                {current.highlight && (
                  <div className="mt-3 text-xs text-[#dfc58b] font-medium bg-[#1e1c24] p-3 rounded-lg border border-[#c5a059]/30 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                    <span>Tactical rule: Never cross Level 7 without actively pausing, breathing deep, and dropping the pelvic floor.</span>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </section>

      {/* CHAPTER 5: 12-WEEK ROUTINE */}
      <section id="ch5" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 5</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          5. Practical 12-Week Awareness Routine
        </h2>
        <p>
          Neuromuscular re-education takes structured consistency. Here is the exact progressive 4-phase framework recommended by pelvic health specialists:
        </p>

        <div className="space-y-4 my-8">
          {post.twelveWeekPhases.map((ph, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#151724] border border-white/10 hover:border-[#c5a059]/40 transition-colors shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="font-serif font-bold text-lg text-[#fbf9f4] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#202436] text-[#dfc58b] text-xs flex items-center justify-center font-mono">{idx + 1}</span>
                  <span>{ph.phase}: {ph.title}</span>
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#1b1e2e] text-[#dfc58b] text-xs font-semibold">{ph.weeks}</span>
              </div>
              <p className="text-sm text-[#cbc7be] mb-3 leading-relaxed">
                <strong className="text-[#dfc58b]">Core Goal:</strong> {ph.goal}
              </p>
              <div className="p-3 bg-[#0f1118] rounded-xl border border-white/5 text-xs text-[#b8b5ab]">
                <strong className="text-white">Daily Protocol:</strong> {ph.protocol}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHAPTER 6 */}
      <section id="ch6" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 6</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          6. Breathing, Lifestyle, and Recovery
        </h2>
        <p>
          Your breath is the direct remote control for your autonomic nervous system. When arousal spikes, the natural human reaction is to hold the breath (apnea) or pant shallowly in the chest. This floods the bloodstream with epinephrine, immediately precipitating climax.
        </p>
        <p>
          By practicing slow, 4-second nasal inhalations with extended 6-second exhalations (the 4:6 physiological sigh pattern), you mechanically stimulate the vagus nerve, immediately slowing heart rate and resetting arousal back to Level 5 or 6.
        </p>
      </section>

      {/* CHAPTER 7 */}
      <section id="ch7" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 7</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          7. The Hip and Core Connection
        </h2>
        <p>
          The pelvic floor does not exist in isolation. It works in synergy with the hip rotators (obturator internus), glutes, and deep transverse abdominis. If you sit 8–10 hours a day at an office desk, your hip flexors shorten, your pelvis tilts anteriorly, and your pelvic floor remains under constant compressive strain.
        </p>
        <p>
          Incorporating deep bodyweight Asian squats (Malasana), 90/90 hip stretches, and foam rolling for the adductors creates physical space in the pelvis, immediately relieving pressure on the pudendal nerve.
        </p>
      </section>

      {/* CHAPTER 8 */}
      <section id="ch8" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 8</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          8. Escaping the Spectator Mindset
        </h2>
        <p>
          Pioneering sex researchers Masters and Johnson identified "spectatoring" as the primary psychological culprit behind male sexual dysfunction. Spectatoring is the act of mentally stepping outside your body to judge your own performance in real time.
        </p>
        <p>
          When you judge, your amygdala triggers stress hormones. Shifting focus away from "performance metrics" and grounding your senses in tactile sensations (skin contact, partner's breathing, ambient room sounds) interrupts the anxious self-monitoring feedback loop.
        </p>
      </section>

      {/* CHAPTER 9 */}
      <section id="ch9" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 9</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          9. Communicating With Your Partner
        </h2>
        <p>
          Secrecy and embarrassment amplify performance anxiety. When a man tries to silently hide his struggle, his internal tension doubles.
        </p>

        {/* Featured Image 3: Partner Intimacy */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-[#13151f]">
          <img 
            src={post.images.intimacy} 
            alt="Warm editorial photography depicting open communication and relaxed intimacy between partners"
            referrerPolicy="no-referrer"
            className="w-full h-[280px] sm:h-[380px] object-cover object-center"
          />
          <div className="p-3.5 bg-[#10121a] border-t border-white/10 flex items-center justify-between text-xs text-[#8e909a]">
            <span>Relational safety: Honest communication removes the pressure of time and performance.</span>
            <span className="text-[10px] text-[#c5a059] uppercase tracking-wider font-semibold">Intimacy &amp; Connection</span>
          </div>
        </div>

        <p>
          Framing stamina training as a shared journey of pleasure, sensual exploration, and pacing removes the artificial deadline of rapid performance. Partners overwhelmingly prefer a relaxed, attentive lover over a silent, tense partner preoccupied with internal counting.
        </p>
      </section>

      {/* CHAPTER 10: FAQS */}
      <section id="ch10" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 10</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          10. Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-3 my-6">
          {post.faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="rounded-xl bg-[#141622] border border-white/10 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-[#fbf9f4] hover:text-[#dfc58b] transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                {activeFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#8e909a] flex-shrink-0" />
                )}
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-4 pt-1 text-sm text-[#cbc7be] leading-relaxed border-t border-white/5 bg-[#0f1118]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONCLUSION */}
      <section id="conclusion" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Conclusion: Stamina Begins With Awareness
        </h2>
        <p>
          Lasting longer is not about numbing your body or fighting your natural reflexes. It is about understanding the delicate dance between your autonomic nervous system, your breath, and your pelvic floor muscles.
        </p>
        <p>
          By implementing the <strong>Reverse Kegel relaxation</strong>, pacing yourself with the <strong>1-to-10 Arousal Scale</strong>, and allowing your body to remain in a parasympathetic state, you replace anxiety with lasting confidence.
        </p>
      </section>

      {/* BOTTOM CONVERSION CARD */}
      <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#181a28] via-[#141622] to-[#0e1018] border border-[#c5a059]/50 shadow-2xl text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1f2334] border border-[#c5a059]/50 text-[#dfc58b] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>FREE COMPREHENSIVE COMPANION GUIDE</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#fbf9f4] leading-tight">
            Ready to Master Your Sexual Stamina?
          </h3>

          <p className="text-sm sm:text-base text-[#cbc7be] font-light leading-relaxed">
            Get the full 68-page digital edition of <strong>"The Art of Stamina"</strong> with step-by-step illustrations, audio pacing drills, and complete pelvic floor workout protocols.
          </p>

          <div className="my-6 flex justify-center cursor-pointer" onClick={onLockerClick}>
            <a href="javascript:void(0);" onClick={onLockerClick} className="no-underline">
              <BookMockup size="normal" />
            </a>
          </div>

          <div className="max-w-md mx-auto space-y-3">
            <a
              href="javascript:void(0);"
              onClick={onLockerClick}
              className="w-full py-4 px-6 rounded-xl text-base font-extrabold tracking-wider uppercase text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_8px_30px_rgba(197,160,89,0.35)] flex items-center justify-center gap-3 cursor-pointer no-underline"
            >
              <span>GET FREE BOOK NOW</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
