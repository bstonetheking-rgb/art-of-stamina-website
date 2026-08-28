import React, { useState } from 'react';
import { 
  Brain, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  Wind, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  ShieldAlert,
  Compass,
  Volume2,
  Heart,
  Hand,
  Layers,
  Smile
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticlePsychology({ post, onLockerClick }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeGroundingStep, setActiveGroundingStep] = useState(0);
  const [checkedTension, setCheckedTension] = useState({});

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const toggleTensionCheck = (key) => {
    setCheckedTension(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const tensionAreas = [
    { key: 'jaw', name: 'Jaw & Facial Muscles', cue: 'Part teeth slightly and allow tongue to rest softly on floor of mouth.' },
    { key: 'shoulders', name: 'Shoulders & Trapezius', cue: 'Drop shoulders down and away from ears on a long, slow exhale.' },
    { key: 'hands', name: 'Hands & Grip', cue: 'Uncurl tight fingers and let palms soften naturally.' },
    { key: 'abdomen', name: 'Lower Abdomen', cue: 'Release abdominal bracing; let belly expand gently with breath.' },
    { key: 'glutes', name: 'Glutes & Thighs', cue: 'Unclench buttocks and ease leg tension.' },
    { key: 'pelvic', name: 'Pelvic Floor / Perineum', cue: 'Drop down and widen the pelvic diaphragm like a gentle reverse kegel.' }
  ];

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
      <section id="psy-intro" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Introduction: The Brain Is Part of the Equation
        </h2>
        <p>
          When men want to improve sexual stamina, they often focus on the physical side first.
        </p>
        <p>
          They search for exercises. They try supplements. They change their diet. They learn breathing techniques. They may practice pelvic floor exercises and look for ways to control their level of arousal.
        </p>
        <p>
          All of these things can play a role.
        </p>
        <p>
          But there is another part of the equation that cannot be ignored: <strong>the mind</strong>.
        </p>
        <p>
          Sexual response does not happen independently of the brain. Arousal, attention, emotion, anxiety, anticipation, and past experiences can all influence how a person experiences sex. This is one reason two sexual experiences can feel completely different even when the physical circumstances appear similar.
        </p>
        <p>
          One night, you may feel relaxed and naturally in control. Another time, you may be exhausted, anxious, distracted, or under pressure, and suddenly everything feels harder to manage.
        </p>
        <p>
          That does not necessarily mean something is physically wrong with you.
        </p>
        <p>
          Sometimes the problem is the mental environment you are bringing into the experience.
        </p>
        <p>
          Performance anxiety can create a particularly frustrating cycle. You worry about finishing too quickly. That worry makes you more alert and tense. You start monitoring every sensation. The more closely you watch yourself, the more pressure you feel. Eventually, sex begins to feel less like a shared experience and more like a test you are afraid of failing.
        </p>

        {/* Highlight Callout Box */}
        <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-[#171a26] to-[#12141d] border-l-4 border-[#c5a059] shadow-md">
          <p className="font-serif italic text-lg sm:text-xl text-[#fbf9f4] leading-relaxed mb-2">
            "The goal is not to become emotionless or suppress arousal. It is about learning to become more aware of your thoughts, reducing unnecessary pressure, and staying connected to the present moment."
          </p>
          <div className="text-xs text-[#c5a059] font-semibold tracking-wider uppercase">— Bedroom IQ Neurobiology & Psychology Lab</div>
        </div>

        <p>
          This guide explores the psychological side of sexual stamina. It is not about becoming emotionless or suppressing arousal. It is about learning to become more aware of your thoughts, reducing unnecessary pressure, and staying connected to the present moment.
        </p>
        <p>
          The goal is not perfection.
        </p>
        <p>
          The goal is <strong>greater awareness and better self-regulation</strong>.
        </p>
      </section>

      {/* CHAPTER 1: UNDERSTANDING STRESS & SEXUAL RESPONSE */}
      <section id="psy-ch1" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 1</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Understanding Stress and the Sexual Response
        </h2>
        <p>
          Your brain and body are constantly communicating.
        </p>
        <p>
          When you feel calm and safe, your body tends to function differently than when you feel threatened, rushed, embarrassed, or highly anxious.
        </p>
        <p>
          The body's stress response can influence heart rate, breathing, muscle tension, and attention. During sexual activity, excessive anxiety can make it difficult to stay present.
        </p>

        {/* Featured Image 1: Brain Neurobiology Diagram */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#0f1118] shadow-xl">
          <div className="aspect-[16/9] w-full overflow-hidden bg-black/40">
            <img 
              src={post.images.brain} 
              alt="Anatomical visualization of amygdala stress network vs prefrontal cortex control" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-[#141724] border-t border-white/10 text-xs text-[#9fa2b3] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span><strong>Figure 1.1:</strong> Neural Circuitry of Performance Stress — Amygdala alarm activation vs. Prefrontal executive down-regulation.</span>
            <span className="text-[#dfc58b] font-mono text-[11px]">NEUROBIOLOGY DIAGRAM</span>
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          The Brain's Alarm System
        </h3>
        <p>
          The amygdala is one of several brain regions involved in processing emotionally significant or potentially threatening situations. It is often discussed in relation to fear and stress responses.
        </p>
        <p>
          Here is where sexual performance can become complicated.
        </p>
        <p>
          Your body may not literally see your bedroom as a dangerous place, but your mind can still treat <strong>performance pressure</strong> as a serious threat.
        </p>
        
        <div className="p-5 rounded-xl bg-[#161826] border border-white/10 space-y-3">
          <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span>Common Stress-Triggering Mental Loops</span>
          </div>
          <ul className="space-y-2 text-sm text-[#b8b5ab] pl-4 list-disc marker:text-[#c5a059]">
            <li><em>“What if I finish too quickly?”</em></li>
            <li><em>“What if my partner is disappointed?”</em></li>
            <li><em>“What if I lose my erection?”</em></li>
            <li><em>“What if this happens again?”</em></li>
          </ul>
        </div>

        <p>
          Once your attention becomes dominated by fear, your body can respond with increased tension and physiological arousal.
        </p>
        <p>
          This is why telling yourself to simply <strong>“relax”</strong> rarely works.
        </p>
        <p>
          Real relaxation usually requires you to notice what is happening and give yourself something practical to do instead of continuing the mental spiral.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          The Role of Attention and Self-Regulation
        </h3>
        <p>
          The prefrontal cortex is involved in functions such as attention, planning, and decision-making. It is not a simple “control centre” that can switch sexual responses on and off, but our ability to regulate attention can make a difference.
        </p>
        <p>
          When you become overwhelmed, your focus can narrow:
        </p>
        <ul className="space-y-2 pl-6 list-disc marker:text-[#c5a059]">
          <li>You may stop noticing your breathing.</li>
          <li>You may clench your muscles without realizing it.</li>
          <li>You may become completely focused on one thought: <strong>“Don't finish.”</strong></li>
        </ul>
        <p>
          Ironically, repeatedly focusing on the thing you are trying to avoid can make it feel even more dominant.
        </p>
        <p>
          A better approach is learning to redirect attention rather than fighting your thoughts.
        </p>
      </section>

      {/* CHAPTER 2: ESCAPING THE SPECTATORING TRAP */}
      <section id="psy-ch2" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 2</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Escaping the Spectatoring Trap
        </h2>
        <p>
          One of the most damaging mental habits during sex is often called <strong>spectatoring</strong>.
        </p>
        <p>
          This happens when you mentally step outside the experience and begin watching and judging yourself as though you are a critic reviewing your own performance.
        </p>
        <p>
          Instead of being present, you start asking questions:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
          {[
            "“How am I doing?”",
            "“Is this lasting long enough?”",
            "“What does my partner think?”",
            "“Am I about to finish?”",
            "“How long has it been?”"
          ].map((q, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-[#11131c] border border-white/10 text-sm text-[#d4cfc3] italic flex items-center gap-2.5">
              <Eye className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>{q}</span>
            </div>
          ))}
        </div>

        <p>
          At first, these questions may seem harmless. But when they repeat continuously, they can pull you out of the experience.
        </p>
        <p>
          You are no longer participating naturally. You are monitoring yourself.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          Why Self-Monitoring Creates More Pressure
        </h3>
        <p>
          Imagine trying to have a normal conversation while constantly evaluating every word before you say it. You would probably become awkward.
        </p>
        <p>
          Sex can work similarly.
        </p>
        <p>
          When you continuously judge yourself, you divide your attention between the actual experience and your internal commentary. That commentary can quickly become negative.
        </p>
        <p>
          One sensation becomes evidence that you are “losing control.” A small change in your erection becomes proof that something is wrong. A moment of increased arousal becomes a reason to panic.
        </p>
        <p>
          This is where many men accidentally make the situation worse. They are not responding to what is actually happening. They are responding to what they <strong>fear might happen</strong>.
        </p>

        {/* Comparison Table */}
        <div className="my-6 p-6 rounded-2xl bg-[#12141f] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#dfc58b] uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Spectatoring Mode vs. Grounded Mindful Presence</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-[#8e909a]">
                  <th className="pb-3 pr-4 font-semibold">Aspect</th>
                  <th className="pb-3 px-4 text-red-400 font-semibold">The Spectatoring Trap</th>
                  <th className="pb-3 pl-4 text-emerald-400 font-semibold">Mindful Presence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {post.spectatoringComparison?.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-3 pr-4 font-medium text-[#fbf9f4]">{row.aspect}</td>
                    <td className="py-3 px-4 text-[#b8b5ab] bg-red-950/20 rounded-l-lg">{row.spectatoring}</td>
                    <td className="py-3 pl-4 text-[#d4cfc3] bg-emerald-950/20 rounded-r-lg">{row.mindful}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          Moving From Analysis to Experience
        </h3>
        <p>
          The alternative is not to become mentally empty. It is to return your attention to direct experience.
        </p>
        <ul className="space-y-2 pl-6 list-disc marker:text-[#c5a059]">
          <li>Notice your breathing.</li>
          <li>Notice physical sensations without immediately judging them.</li>
          <li>Pay attention to connection, touch, warmth, movement, and the overall experience.</li>
        </ul>
        <p>
          If your mind says, <em>“You're going to finish too soon,”</em> you do not need to argue with it for five minutes. Simply notice the thought. Then return to what you can actually feel in the present moment.
        </p>
        <p>
          This takes practice, but over time, you may become less reactive to every thought that appears.
        </p>
      </section>

      {/* CHAPTER 3: AROUSAL IS NOT THE ENEMY */}
      <section id="psy-ch3" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 3</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Arousal Is Not the Enemy
        </h2>
        <p>
          Many men who struggle with stamina begin treating arousal itself as a problem. The moment they feel intense pleasure, they panic.
        </p>
        <p>
          But arousal is not the enemy. The challenge is learning to recognize how your arousal is changing.
        </p>
        <p>
          Instead of thinking in terms of <strong>control or failure</strong>, think of arousal as a spectrum. You might use a simple scale from 1 to 10.
        </p>

        {/* Arousal Scale Interactive / Visual Bar */}
        <div className="p-6 rounded-2xl bg-[#141624] border border-white/10 space-y-4">
          <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center justify-between">
            <span>The 1–10 Arousal Awareness Spectrum</span>
            <span className="text-[#8e909a] font-mono text-[11px]">AUTONOMIC SCALE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#10121a] border border-white/10 space-y-1.5">
              <div className="font-bold text-[#dfc58b]">Levels 1 to 3</div>
              <div className="text-[#8e909a] font-medium">Calm Baseline</div>
              <p className="text-[#cbc7be] text-[11px]">Minimal physiological stimulation. Heart rate calm, pelvic floor resting.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#10121a] border border-white/10 space-y-1.5">
              <div className="font-bold text-[#dfc58b]">Levels 4 to 6</div>
              <div className="text-[#8e909a] font-medium">Controlled Arousal</div>
              <p className="text-[#cbc7be] text-[11px]">Strongly aroused while still feeling physically and mentally in control.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#231b12] border-2 border-[#c5a059] space-y-1.5 shadow-md">
              <div className="font-bold text-[#f5d78e] flex items-center gap-1">
                <span>Level 7</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#c5a059] text-black font-bold uppercase">Key Pivot</span>
              </div>
              <div className="text-[#c5a059] font-medium">Golden Threshold</div>
              <p className="text-[#e2ded5] text-[11px]">Notice intensity building. Slow down, breathe deeply, relax tension, reduce stimulation.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#211214] border border-red-500/30 space-y-1.5">
              <div className="font-bold text-red-400">Levels 8 to 9</div>
              <div className="text-[#8e909a] font-medium">Point of Inevitability</div>
              <p className="text-[#cbc7be] text-[11px]">Delaying ejaculation becomes difficult. Neurological trigger is imminent.</p>
            </div>
          </div>
        </div>

        <p>
          The exact numbers do not matter. <strong>The awareness does.</strong>
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          Learn Your Personal Warning Signs
        </h3>
        <p>
          Everyone experiences rising arousal differently. Your warning signs might include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4">
          {[
            "Faster, shallow breathing in upper chest",
            "Tension in your abdomen and hip flexors",
            "Involuntary clenching of the pelvic floor / perineum",
            "Tightening in your jaw and clenched teeth",
            "A sudden urge or impulse to move faster",
            "A feeling of internal urgency and narrowing focus",
            "Difficulty paying attention to anything else"
          ].map((sign, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-[#12141f] border border-white/5 text-xs text-[#d4cfc3] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              <span>{sign}</span>
            </div>
          ))}
        </div>

        <p>
          The goal is to notice these signals before they become overwhelming. You are training awareness, not trying to become numb.
        </p>
      </section>

      {/* CHAPTER 4: MINDFULNESS AND SENSORY FOCUS */}
      <section id="psy-ch4" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 4</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Mindfulness and Sensory Focus
        </h2>
        <p>
          Mindfulness is often misunderstood. It does not mean forcing your mind to become completely blank.
        </p>
        <p>
          It means paying attention to the present moment without constantly judging what you are experiencing.
        </p>
        <p>
          In the context of sexual stamina, mindfulness can help you shift from <strong>“What does this mean?”</strong> to <strong>“What am I feeling right now?”</strong>
        </p>
        <p>
          That difference can be powerful.
        </p>

        {/* Featured Image 2: Sensory Mindfulness & Diaphragmatic Breath */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#0f1118] shadow-xl">
          <div className="aspect-[16/9] w-full overflow-hidden bg-black/40">
            <img 
              src={post.images.mindful} 
              alt="Mindful sensory grounding and autonomic nervous system regulation" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-[#141724] border-t border-white/10 text-xs text-[#9fa2b3] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span><strong>Figure 4.1:</strong> Diaphragmatic Breathing &amp; Sensory Grounding — Shifting from internal mental review to grounded bodily presence.</span>
            <span className="text-[#dfc58b] font-mono text-[11px]">SENSORY FOCUS</span>
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          Goal-Oriented vs. Process-Oriented Sex
        </h3>
        <p>
          Many men approach sex with a hidden checklist:
        </p>
        <div className="p-4 rounded-xl bg-[#1a1315] border border-red-500/20 text-xs sm:text-sm text-[#b8b5ab] space-y-1.5">
          <div className="font-bold text-red-400">The Performance Review Checklist (Anxiety Inducing):</div>
          <div>Get an erection → Maintain it → Last a certain amount of time → Perform perfectly → Make sure your partner is satisfied → Do not make a mistake.</div>
        </div>
        <p>
          This turns intimacy into a performance review. A more process-oriented mindset asks a different question:
        </p>
        <div className="p-5 rounded-xl bg-gradient-to-r from-[#171c26] to-[#12141f] border-l-4 border-emerald-400 font-serif text-lg text-[#fbf9f4] italic">
          “Can I stay present and responsive to what is happening?”
        </div>
        <p>
          This does not mean ignoring your partner's needs or pretending that stamina does not matter. It means understanding that a stopwatch is not the only measure of a positive sexual experience.
        </p>
        <p>
          Connection, communication, responsiveness, pleasure, and comfort matter too.
        </p>

        {/* INTERACTIVE 5-4-3-2-1 GROUNDING PROTOCOL */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          A Simple Grounding Exercise (The 5-4-3-2-1 Shift)
        </h3>
        <p>
          If you notice yourself spiralling into overthinking, gently return to your senses:
        </p>

        <div className="my-6 p-6 rounded-2xl bg-[#141724] border border-[#c5a059]/30 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#c5a059]" />
              <span>Interactive Sensory Grounding Tool</span>
            </span>
            <span className="text-xs text-[#8e909a]">Click each step to focus</span>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {post.groundingSteps?.map((item, idx) => {
              const isActive = activeGroundingStep === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveGroundingStep(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isActive 
                      ? 'bg-[#1e2335] border-[#c5a059] shadow-md' 
                      : 'bg-[#10121a] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-sm flex-shrink-0 ${
                    isActive ? 'bg-[#c5a059] text-black' : 'bg-[#1a1d2c] text-[#dfc58b]'
                  }`}>
                    {item.step}
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-[#fbf9f4] flex items-center gap-2">
                      <span>{item.sense}</span>
                      {isActive && <span className="text-[10px] px-2 py-0.5 rounded bg-[#c5a059]/20 text-[#dfc58b]">ACTIVE CUE</span>}
                    </div>
                    <p className="text-xs text-[#b8b5ab] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-[11px] text-[#7d808f] italic pt-1">
            *You do not need to perform this like a military drill. The purpose is simply to interrupt the mental loop and reconnect with the present.
          </p>
        </div>
      </section>

      {/* MID-ARTICLE PROMOTION CALLOUT */}
      <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#181a26] via-[#12141f] to-[#0c0d14] border-2 border-[#c5a059]/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
          <div className="w-32 flex-shrink-0 cursor-pointer" onClick={onLockerClick}>
            <BookMockup size="compact" />
          </div>

          <div className="space-y-3 text-center sm:text-left flex-1">
            <span className="text-[11px] font-serif font-bold text-[#dfc58b] tracking-widest uppercase">
              COMPLETE 68-PAGE CLINICAL GUIDEBOOK
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#fbf9f4] leading-snug">
              Master the Neuromuscular &amp; Psychological Stamina System
            </h3>
            <p className="text-xs sm:text-sm text-[#8e909a] leading-relaxed">
              Download the official, unabridged digital book complete with daily pelvic rehabilitation charts, autonomic arousal pacing drills, and evidence-backed neuro-anchors.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onLockerClick}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#c5a059] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg"
              >
                Instant Free Access (PDF)
              </button>
              <span className="text-[11px] text-[#7d808f]">100% Free · No Payment Required</span>
            </div>
          </div>
        </div>
      </div>

      {/* CHAPTER 5: PAST HABITS AND RESPONSES */}
      <section id="psy-ch5" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 5</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          How Past Habits Can Shape Your Response
        </h2>
        <p>
          Your sexual habits can become learned patterns.
        </p>
        <p>
          For example, some men may have spent years masturbating quickly, rushing because they were worried about privacy, or focusing entirely on reaching orgasm as fast as possible.
        </p>
        <p>
          Over time, the brain can become familiar with a certain pattern:
        </p>
        <div className="p-4 rounded-xl bg-[#141724] border border-white/10 text-center font-serif text-base sm:text-lg text-[#dfc58b]">
          Stimulation → Urgency → Climax
        </div>
        <p>
          That does not mean the pattern is permanent. But changing it may require conscious practice.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          Slow Down the Routine
        </h3>
        <p>
          If you are practicing solo, you can experiment with paying attention to the progression of your arousal.
        </p>
        <p>
          Instead of immediately pursuing the strongest possible stimulation, notice when your arousal begins to rise.
        </p>
        <p>
          Pause when necessary. Breathe. Allow the intensity to decrease before continuing.
        </p>
        <p>
          The purpose is not to turn masturbation into a stressful training session. It is to become familiar with your own responses.
        </p>
        <p>
          You are learning that sexual arousal does not always have to move in a straight line toward orgasm. It can rise, settle, rise again, and change over time.
        </p>
        <p className="text-xs bg-[#141622] p-4 rounded-xl border border-white/10 text-[#8e909a]">
          <em>*Note: If you experience pain, distress, or persistent sexual difficulties, speak with a qualified healthcare professional rather than forcing yourself through an uncomfortable training routine.</em>
        </p>
      </section>

      {/* CHAPTER 6: BREATHING AS A BRIDGE BETWEEN MIND AND BODY */}
      <section id="psy-ch6" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 6</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Breathing as a Bridge Between Mind and Body
        </h2>
        <p>
          One of the fastest ways to notice anxiety is to pay attention to your breathing.
        </p>
        <p>
          When people are nervous, they often breathe more quickly and shallowly. Some hold their breath completely when they become highly focused or stimulated.
        </p>
        <p>
          During sex, this can contribute to a feeling of urgency.
        </p>
        <p>
          Try paying attention to your breath before arousal becomes intense.
        </p>
        <ul className="space-y-2 pl-6 list-disc marker:text-[#c5a059]">
          <li>Inhale comfortably through the nose.</li>
          <li>Allow your abdomen and lower ribs to move naturally.</li>
          <li>Exhale slowly and smoothly through the mouth or nose.</li>
          <li>Do not force huge breaths or hyperventilate. Just aim for steady, natural breathing.</li>
        </ul>

        {/* INTERACTIVE MUSCLE TENSION MAP */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          The Connection to Muscle Tension
        </h3>
        <p>
          Breathing can also help you notice the rest of your body. As you exhale, check these key areas:
        </p>

        <div className="my-6 p-6 rounded-2xl bg-[#141724] border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full-Body Neuromuscular Tension Scan</span>
            </span>
            <span className="text-xs text-[#8e909a]">Check off relaxed zones</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tensionAreas.map((area) => {
              const isChecked = checkedTension[area.key];
              return (
                <div 
                  key={area.key}
                  onClick={() => toggleTensionCheck(area.key)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isChecked 
                      ? 'bg-emerald-950/30 border-emerald-500/50' 
                      : 'bg-[#10121a] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`w-5 h-5 rounded flex items-center justify-center mt-0.5 flex-shrink-0 ${
                    isChecked ? 'bg-emerald-500 text-black' : 'border border-white/20 bg-black/40'
                  }`}>
                    {isChecked && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-[#fbf9f4]">{area.name}</div>
                    <div className="text-[#9fa2b3] leading-relaxed">{area.cue}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-[11px] text-[#7d808f] italic pt-1">
            *The goal is not to become completely limp. Some tension is natural. The goal is to eliminate <strong>unnecessary tension caused by panic</strong>.
          </p>
        </div>
      </section>

      {/* CHAPTER 7: THE PRESSURE TO PERFORM PERFECTLY */}
      <section id="psy-ch7" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 7</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          The Pressure to Perform Perfectly
        </h2>
        <p>
          Modern expectations around sex can create unrealistic standards.
        </p>
        <p>
          Pornography, social media, jokes between friends, and exaggerated stories can all create the impression that men are supposed to perform perfectly every time:
        </p>
        <ul className="space-y-1.5 pl-6 list-disc marker:text-red-400 text-sm text-[#a8abb8]">
          <li>They are supposed to last indefinitely.</li>
          <li>They are never supposed to feel nervous.</li>
          <li>They are never supposed to lose an erection.</li>
          <li>They are always supposed to know exactly what their partner wants.</li>
        </ul>
        <p>
          Real life is more complicated.
        </p>
        <p>
          Bodies change from day to day. Stress changes. Energy changes. Confidence changes.
        </p>
        <p>
          Trying to become a machine can actually make you less relaxed.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          The Paradox of Trying Too Hard
        </h3>
        <p>
          The harder you try to prove that you are performing well, the more pressure you may create.
        </p>
        <p>
          This does not mean you should stop caring about your partner or stop trying to improve. It means you need to separate <strong>growth</strong> from <strong>self-punishment</strong>.
        </p>
        <p>
          You can work on your stamina without deciding that one difficult experience defines you.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-center space-y-1">
            <span className="text-[11px] uppercase font-bold text-red-400">Harmful Mindset</span>
            <div className="font-serif text-base text-[#fbf9f4] italic">“I have to prove myself tonight.”</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-center space-y-1">
            <span className="text-[11px] uppercase font-bold text-emerald-400">Growth Mindset</span>
            <div className="font-serif text-base text-[#fbf9f4] italic">“I am learning my body.”</div>
          </div>
        </div>

        <p>
          That shift alone can remove a surprising amount of pressure.
        </p>
      </section>

      {/* CHAPTER 8: MENTAL ANCHORS AND VISUALIZATION */}
      <section id="psy-ch8" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 8</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Mental Anchors and Visualization
        </h2>
        <p>
          Visualization can be a useful way to support relaxation.
        </p>
        <p>
          The goal is not to convince yourself that your brain has supernatural powers. It is simply to use mental imagery as a cue.
        </p>
        <p>
          For example, when you notice yourself becoming tense, you might imagine your body becoming heavier and more relaxed. Some people visualize a wave moving downward through the body. Others imagine warmth in the shoulders and a softening of the abdomen and pelvic area.
        </p>

        {/* Featured Image 3: Mental Anchoring Gesture */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#0f1118] shadow-xl">
          <div className="aspect-[16/9] w-full overflow-hidden bg-black/40">
            <img 
              src={post.images.anchor} 
              alt="Physical neuro-anchor touching thumb and forefinger for mindful somatic calm" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-[#141724] border-t border-white/10 text-xs text-[#9fa2b3] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span><strong>Figure 8.1:</strong> Somatic Neuro-Anchor — Tactile cueing (thumb and index finger) linked with slow diaphragmatic exhalations.</span>
            <span className="text-[#dfc58b] font-mono text-[11px]">CALM ANCHOR</span>
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          Creating a Calm Anchor
        </h3>
        <p>
          You can also create a simple physical reminder of calm:
        </p>
        <div className="p-5 rounded-xl bg-[#141724] border border-white/10 space-y-3">
          <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-2">
            <Hand className="w-4 h-4 text-[#c5a059]" />
            <span>The 4-Step Neuro-Anchor Protocol</span>
          </div>
          <ol className="space-y-2 text-xs sm:text-sm text-[#b8b5ab] pl-5 list-decimal marker:text-[#c5a059]">
            <li>During a relaxed, non-sexual moment, sit comfortably and breathe slowly.</li>
            <li>Gently touch your thumb and forefinger together while exhaling deeply.</li>
            <li>Repeat this regularly over several weeks while you are genuinely calm.</li>
            <li>In the bedroom, use this same subtle gesture as a physical cue to slow down, drop tension, and return to breath.</li>
          </ol>
        </div>
        <p>
          The gesture itself is not magic. Its value comes from repetition and association. Over time, it becomes a personal cue that reminds you: <strong>Slow down. Breathe. Relax. Pay attention.</strong>
        </p>
      </section>

      {/* CHAPTER 9: COMMUNICATION REDUCES PRESSURE */}
      <section id="psy-ch9" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 9</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Communication Can Reduce Performance Pressure
        </h2>
        <p>
          Silence can make performance anxiety worse.
        </p>
        <p>
          If you are struggling internally but trying to hide every sign of it, the pressure can build.
        </p>
        <p>
          Communication gives you another option. You do not need to announce every thought in your head. But you can make slowing down feel normal:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div className="p-4 rounded-xl bg-[#12141f] border border-white/10 text-center font-serif text-sm text-[#dfc58b] italic">
            “Let's slow down for a moment.”
          </div>
          <div className="p-4 rounded-xl bg-[#12141f] border border-white/10 text-center font-serif text-sm text-[#dfc58b] italic">
            “I want to take my time with you.”
          </div>
          <div className="p-4 rounded-xl bg-[#12141f] border border-white/10 text-center font-serif text-sm text-[#dfc58b] italic">
            “Let's enjoy this pace.”
          </div>
        </div>

        <p>
          A supportive sexual experience does not require nonstop intensity.
        </p>
        <ul className="space-y-2 pl-6 list-disc marker:text-[#c5a059]">
          <li>Taking a break is not failure.</li>
          <li>Changing pace is not failure.</li>
          <li>Communicating your needs is not failure.</li>
        </ul>
        <p>
          In fact, being able to communicate can often make the experience more relaxed for both people.
        </p>
        <p>
          Sex is shared. You do not have to carry the entire experience like a solo performance.
        </p>
      </section>

      {/* CHAPTER 10: FAQS ACCORDION */}
      <section id="psy-ch10" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 10</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Common Questions About the Psychology of Stamina
        </h2>

        <div className="space-y-3 mt-4">
          {post.faqs?.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index}
                className="rounded-xl border border-white/10 bg-[#12141e] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-[#fbf9f4] hover:text-[#dfc58b] transition-colors cursor-pointer"
                >
                  <span className="font-serif font-bold text-sm sm:text-base">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8e909a] flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#b8b5ab] leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CONCLUSION */}
      <section id="psy-conclusion" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Conclusion</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Stop Treating Sex Like a Test
        </h2>
        <p>
          The psychology of stamina may be one of the most overlooked parts of sexual performance.
        </p>
        <p>
          You can improve your diet. You can exercise. You can practice pelvic awareness. You can learn breathing techniques.
        </p>
        <p>
          But if every sexual experience begins with the thought, <strong>“I hope I don't fail,”</strong> you may still be creating the pressure that works against you.
        </p>
        <p>
          The solution is not to stop caring. It is to stop treating intimacy as an exam.
        </p>
        
        <div className="my-6 p-6 rounded-2xl bg-gradient-to-r from-[#171a26] to-[#12141f] border-l-4 border-[#c5a059] space-y-3">
          <h4 className="font-serif font-bold text-lg text-[#fbf9f4]">The Core Takeaways:</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-[#d4cfc3] list-disc pl-5 marker:text-[#c5a059]">
            <li>You do not need to be perfect.</li>
            <li>You do not need to monitor every second.</li>
            <li>You do not need to panic every time arousal increases.</li>
            <li>Instead, learn your body's signals. Recognize when tension is building. Slow down when needed. Breathe naturally. Communicate with your partner. Bring your attention back to the present.</li>
          </ul>
        </div>

        <p>
          Real control is not about suppressing every sensation. It is about staying aware enough to respond before panic takes over.
        </p>
        <p>
          The body and mind work together. When you learn to calm unnecessary mental pressure, you give yourself a better opportunity to use the physical skills you are developing.
        </p>
        
        <p className="font-serif text-lg text-[#dfc58b] italic font-semibold">
          The Art of Stamina is not about becoming a machine. It is about becoming more present, more aware, and more confident in your ability to understand your own body.
        </p>

        {/* READY TO BUILD ON THIS FOUNDATION CTA */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#141724] border border-[#c5a059]/40 space-y-4">
          <h3 className="font-serif font-bold text-xl text-[#fbf9f4]">
            Ready to Build on This Foundation?
          </h3>
          <p className="text-xs sm:text-sm text-[#b8b5ab] leading-relaxed">
            Mental awareness is one important piece of a larger approach to sexual confidence and control. Combine psychological skills with healthy lifestyle habits, good communication, and practical body awareness.
          </p>
          <div className="pt-2">
            <button
              onClick={onLockerClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c5a059] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Complete Art of Stamina Program (Free PDF)</span>
            </button>
          </div>
        </div>

        {/* MEDICAL DISCLAIMER FOOTER NOTE */}
        <p className="text-[11px] text-[#7d808f] italic border-t border-white/10 pt-4">
          *This article is for educational purposes and is not a substitute for professional medical or mental health advice. If sexual anxiety or performance concerns are persistent or significantly affecting your wellbeing or relationships, consider speaking with a qualified healthcare professional.
        </p>
      </section>

    </div>
  );
}
