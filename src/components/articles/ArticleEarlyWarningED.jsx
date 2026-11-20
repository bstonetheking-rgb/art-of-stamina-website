import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowUpRight,
  BatteryCharging,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Compass,
  Droplets,
  Eye,
  Heart,
  HeartPulse,
  HelpCircle,
  Layers,
  Moon,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Wind,
  Zap
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticleEarlyWarningED({ post, onLockerClick }) {
  // Accordion FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  // Interactive Erection Hardness Score (EHS) Explorer state
  const [selectedEhsLevel, setSelectedEhsLevel] = useState(3);

  // Interactive Early-Warning Pattern Self-Check state
  const [morningWoodFreq, setMorningWoodFreq] = useState('sometimes'); // 'regular' | 'sometimes' | 'rare'
  const [positionalFade, setPositionalFade] = useState('occasional'); // 'never' | 'occasional' | 'frequent'
  const [sleepQuality, setSleepQuality] = useState('6-7'); // '7plus' | '6-7' | 'under6'
  const [sittingHours, setSittingHours] = useState(7);
  const [mentalSpectatoring, setMentalSpectatoring] = useState('moderate'); // 'low' | 'moderate' | 'high'

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const ehsLevels = [
    {
      level: 1,
      metaphor: 'Tofu',
      clinicalLabel: 'Severe Softness',
      statusColor: 'text-rose-400',
      borderColor: 'border-rose-500/40',
      summary: 'The penis increases in size and fullness, but does not become firm.',
      physiologicalNote:
        'Indicates initial arterial inflow without sufficient smooth muscle relaxation or venous occlusion to trap pressure inside the corpora cavernosa.',
      nextStep:
        'If this occurs persistently rather than after severe fatigue or alcohol, schedule a medical evaluation covering blood pressure, glucose, lipids, and medications.'
    },
    {
      level: 2,
      metaphor: 'Peeled Banana',
      clinicalLabel: 'Mild Rigidity',
      statusColor: 'text-amber-400',
      borderColor: 'border-amber-500/40',
      summary: 'The penis becomes somewhat hard, yet remains too pliable for comfortable penetration.',
      physiologicalNote:
        'Partial arterial dilation is occurring, but elevated sympathetic tone (adrenaline/anxiety), suboptimal endothelial nitric oxide signaling, or distraction interrupts full engorgement.',
      nextStep:
        'Track whether morning erections remain firm. Combine consistent brisk walking and sleep protection with a clinician review.'
    },
    {
      level: 3,
      metaphor: 'Unpeeled Banana',
      clinicalLabel: 'Functional — Sub-Maximal',
      statusColor: 'text-[#dfc58b]',
      borderColor: 'border-[#c5a059]/60',
      summary: 'Firm enough for penetration, but noticeably less rigid than your historical baseline.',
      physiologicalNote:
        'Many men get stuck at Level 3 silently. Often linked to chronic sleep debt, high daily sitting volume, subtle vascular stiffness, or low-grade performance anxiety.',
      nextStep:
        'A prime window for early lifestyle intervention: 30-minute daily brisk walking, pelvic floor relaxation breathing, hydration, and reducing performance monitoring.'
    },
    {
      level: 4,
      metaphor: 'Cucumber',
      clinicalLabel: 'Optimal Rigidity',
      statusColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/40',
      summary: 'The penis is completely hard, rigid, and resilient throughout changes in position.',
      physiologicalNote:
        'Reflects synchronized parasympathetic activation, healthy nitric oxide-mediated arterial inflow, relaxed trabecular smooth muscle, and effective venous trapping.',
      nextStep:
        'Maintain vascular foundations (Zone 2 movement, sleep hygiene, whole foods, stress recovery) to protect arterial elasticity long-term.'
    }
  ];

  const computePatternProfile = () => {
    let vascularWeight = 0;
    let psychWeight = 0;

    if (morningWoodFreq === 'rare') vascularWeight += 35;
    else if (morningWoodFreq === 'sometimes') vascularWeight += 15;

    if (positionalFade === 'frequent') {
      vascularWeight += 25;
      psychWeight += 20;
    } else if (positionalFade === 'occasional') {
      psychWeight += 15;
    }

    if (sleepQuality === 'under6') vascularWeight += 25;
    else if (sleepQuality === '6-7') vascularWeight += 10;

    if (sittingHours >= 8) vascularWeight += 15;

    if (mentalSpectatoring === 'high') psychWeight += 40;
    else if (mentalSpectatoring === 'moderate') psychWeight += 20;

    let profileTitle = 'Balanced Baseline';
    let recommendation =
      'Your answers point toward mostly healthy function with minor lifestyle tuning opportunities. Continue daily movement, hydration, and 7–9 hours of sleep.';
    let accent = 'text-emerald-400';

    if (vascularWeight >= 50 && psychWeight >= 35) {
      profileTitle = 'Mixed Vascular & Autonomic Stress Pattern';
      recommendation =
        'Both physical recovery factors (sleep, sedentary compression, reduced morning erections) and mental performance pressure appear active. Address sleep and daily brisk walking while booking a routine cardiovascular check-up.';
      accent = 'text-amber-300';
    } else if (vascularWeight >= 45) {
      profileTitle = 'Physical / Lifestyle-Driven Warning Pattern';
      recommendation =
        'Reduced nocturnal/morning erections combined with sleep debt or high sitting hours suggest physical factors deserve attention. Prioritize Zone 2 walking, sleep restoration, pelvic relaxation, and ask a clinician to screen blood pressure, fasting glucose, and lipids.';
      accent = 'text-rose-300';
    } else if (psychWeight >= 35) {
      profileTitle = 'Sympathetic / Spectatoring Pressure Pattern';
      recommendation =
        'Because anxiety and self-monitoring appear prominent, adrenaline spikes may be interrupting relaxation during intimacy. Shift focus away from checking firmness toward sensory connection, slow nasal exhalations, and unhurried pacing.';
      accent = 'text-[#dfc58b]';
    }

    return {
      vascularWeight: Math.min(vascularWeight, 100),
      psychWeight: Math.min(psychWeight, 100),
      profileTitle,
      recommendation,
      accent
    };
  };

  const patternProfile = computePatternProfile();

  const faqs = [
    {
      q: 'Can masturbation cause erectile dysfunction?',
      a: 'Masturbation itself is not considered a direct cause of erectile dysfunction. However, some men notice that their sexual response changes depending on their habits, stimulation preferences, or anxiety. If you experience discomfort or reduced sensitivity, consider using lubrication and avoiding excessive pressure. If difficulties continue, seek professional advice.'
    },
    {
      q: 'Will taking blue pills cure my ED?',
      a: 'Medications such as sildenafil and tadalafil can help many men achieve and maintain erections. They work by improving the blood-flow response during sexual stimulation. They do not automatically cure the underlying cause, but they are legitimate treatments rather than simply temporary bandages. They are not suitable for everyone, particularly people using nitrate medications. Always consult a healthcare professional before taking them.'
    },
    {
      q: 'How long does it take to improve erection quality naturally?',
      a: 'There is no guaranteed timeline. Some men notice improvements in energy, confidence, or sexual function after improving sleep, exercise, and stress management. Others need medical treatment for an underlying condition. The timeline depends on the cause, your general health, and the changes you make.'
    },
    {
      q: 'Does alcohol make ED worse?',
      a: 'Yes, particularly when consumed heavily. Alcohol can affect the nervous system, reduce sexual responsiveness, and make it harder to achieve or maintain an erection. Regular heavy drinking can also contribute to longer-term health problems that affect sexual function.'
    },
    {
      q: 'Can I get harder erections naturally?',
      a: 'Many men can support healthier erections through regular exercise, better sleep, balanced nutrition, avoiding smoking, limiting alcohol, and managing stress. However, persistent ED may require medical treatment. Natural habits are helpful, but they should not replace an assessment when symptoms continue.'
    },
    {
      q: 'When should I see a doctor about erectile dysfunction?',
      a: 'If erection difficulties keep happening, last for several weeks, or affect your confidence and relationships, arrange a medical appointment. Seek urgent medical attention if you experience chest pain, severe shortness of breath, or other serious symptoms during sexual activity. An erection lasting more than four hours also requires emergency care.'
    }
  ];

  return (
    <div className="space-y-12 text-[#cac5be] leading-relaxed font-sans text-base sm:text-lg">
      {/* ARTICLE INTRODUCTION */}
      <section id="ed-intro" className="scroll-mt-24 space-y-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#12141e] border border-[#c5a059]/25 shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-[#c5a059] font-semibold text-xs uppercase tracking-wider">
            <Stethoscope className="w-4 h-4 text-[#c5a059]" />
            <span>Early Detection &amp; Vascular Awareness</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4] leading-tight text-balance">
            Introduction: It Doesn’t Happen Overnight
          </h2>
          <p className="text-[#a4a7b5] text-base sm:text-lg leading-relaxed">
            Most men think erectile dysfunction (ED) happens like an on-and-off switch. One day everything is working perfectly, and the next day, without warning, they suddenly struggle to get or maintain an erection.
          </p>
          <p className="text-[#a4a7b5] text-base sm:text-lg leading-relaxed">
            But that is not always how it happens.
          </p>
        </div>

        <p>
          For many men, erectile dysfunction develops gradually. The changes can be so small at first that they are easy to dismiss. You might notice that your erections are not as firm as they used to be. Perhaps you lose your erection when changing positions, or it takes longer than usual to get fully hard. You may even realise that morning erections, which used to happen regularly, have become less frequent.
        </p>

        <p>
          These changes do not automatically mean you have ED. Occasional erection difficulties are normal, especially when you are tired, stressed, anxious, or have consumed too much alcohol. However, when the problem becomes frequent, it deserves attention.
        </p>

        <div className="p-5 sm:p-6 rounded-xl bg-[#161824] border border-white/10 space-y-2">
          <p className="font-serif italic text-lg text-[#fbf9f4]">
            “An erection depends on several systems working together: your brain, nerves, hormones, blood vessels, and pelvic muscles. A problem affecting any of these systems can interfere with your sexual performance.”
          </p>
          <p className="text-xs text-[#c5a059] uppercase tracking-wider font-semibold">
            Art of Stamina Clinical Overview
          </p>
        </div>

        <p>
          The good news is that many contributing factors can be improved. Better sleep, regular exercise, healthier eating, stress management, and appropriate medical care can all make a difference.
        </p>

        <p>
          In this guide, we will explore the symptoms of erectile dysfunction, explain what may be causing them, and discuss practical ways to support healthier erections naturally.
        </p>

        {/* FIGURE 1: HERO EDITORIAL IMAGE */}
        {post.images?.hero && (
          <figure className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img
              src={post.images.hero}
              alt={post.heroImageAlt || 'Early morning reflection and masculine vascular vitality'}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[480px] object-cover object-center"
            />
            <figcaption className="p-4 bg-[#0d0f17] border-t border-white/10 text-xs text-[#8e909a] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>
                <strong className="text-[#dfc58b]">Figure 1:</strong> Subtle morning and vascular changes often appear gradually—early awareness provides the best window for natural lifestyle recovery.
              </span>
              <span className="text-[#c5a059] font-mono text-[11px] shrink-0">Vascular &amp; Clinical Health</span>
            </figcaption>
          </figure>
        )}
      </section>

      {/* CHAPTER 1: ERECTION HARDNESS SCORE */}
      <section id="ed-ch1" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">
          Chapter 1
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4] text-balance">
          The Hardness Scale — How Hard Are You Really?
        </h2>

        <p>
          One way to understand erection quality is through the <strong className="text-[#fbf9f4]">Erection Hardness Score (EHS)</strong>, a four-level scale used to describe how firm an erection becomes. Think of it as a simple way to assess what your body is doing.
        </p>

        {/* INTERACTIVE EHS SCALE EXPLORER */}
        <div className="my-6 p-6 sm:p-7 rounded-2xl bg-[#141624] border border-[#c5a059]/35 shadow-xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
            <div>
              <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-[#c5a059]" />
                <span>Interactive Clinical Reference</span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#fbf9f4]">
                Erection Hardness Score (EHS) Explorer
              </h3>
            </div>
            <span className="text-xs text-[#8e909a]">Select a level to inspect physiology</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {ehsLevels.map((item) => {
              const isSelected = selectedEhsLevel === item.level;
              return (
                <button
                  key={item.level}
                  type="button"
                  onClick={() => setSelectedEhsLevel(item.level)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#c5a059] text-black border-[#dfc58b] shadow-md'
                      : 'bg-[#0e1018] text-[#b8b5ab] border-white/10 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <div className="text-[11px] font-mono tabular-nums uppercase opacity-80">
                    Level {item.level}
                  </div>
                  <div className="text-sm font-serif font-bold">{item.metaphor}</div>
                </button>
              );
            })}
          </div>

          {(() => {
            const active = ehsLevels.find((l) => l.level === selectedEhsLevel) || ehsLevels[2];
            return (
              <div className={`p-5 rounded-xl bg-[#0e1018] border ${active.borderColor} space-y-3`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-serif font-bold text-lg text-[#fbf9f4]">
                    Level {active.level} – {active.metaphor}
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-wider ${active.statusColor}`}>
                    {active.clinicalLabel}
                  </span>
                </div>
                <p className="text-sm text-[#eae8e3]">{active.summary}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="p-3 rounded-lg bg-[#141724] border border-white/5 space-y-1">
                    <span className="text-[#dfc58b] font-semibold block">What Happens Physiologically</span>
                    <span className="text-[#a4a7b5] leading-relaxed block">{active.physiologicalNote}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#141724] border border-white/5 space-y-1">
                    <span className="text-[#dfc58b] font-semibold block">Recommended Action</span>
                    <span className="text-[#a4a7b5] leading-relaxed block">{active.nextStep}</span>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        <ul className="space-y-2.5 pl-1 text-sm sm:text-base">
          <li className="flex items-start gap-2.5">
            <span className="font-mono text-xs text-[#c5a059] font-bold pt-1 shrink-0">01.</span>
            <span><strong className="text-[#fbf9f4]">Level 1 – Tofu:</strong> The penis becomes larger but does not become hard.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="font-mono text-xs text-[#c5a059] font-bold pt-1 shrink-0">02.</span>
            <span><strong className="text-[#fbf9f4]">Level 2 – Peeled Banana:</strong> The penis becomes hard but is not firm enough for penetration.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="font-mono text-xs text-[#c5a059] font-bold pt-1 shrink-0">03.</span>
            <span><strong className="text-[#fbf9f4]">Level 3 – Unpeeled Banana:</strong> The penis is firm enough for penetration but not completely rigid.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="font-mono text-xs text-[#c5a059] font-bold pt-1 shrink-0">04.</span>
            <span><strong className="text-[#fbf9f4]">Level 4 – Cucumber:</strong> The penis is fully hard and completely rigid.</span>
          </li>
        </ul>

        {/* FIGURE 2: EHS & VASCULAR REGULATION */}
        {post.images?.ehsChart && (
          <figure className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img
              src={post.images.ehsChart}
              alt="Erection Hardness Score Levels 1 to 4 and vascular smooth muscle regulation diagram"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[500px] object-cover"
            />
            <figcaption className="p-4 bg-[#0d0f17] border-t border-white/10 text-xs text-[#8e909a] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>
                <strong className="text-[#dfc58b]">Figure 2: Erection Hardness Score (EHS) &amp; Vascular Cascade.</strong> Nitric oxide (NO) and cGMP relax corpora cavernosa smooth muscle to allow arterial filling and veno-occlusion.
              </span>
              <span className="text-[#c5a059] font-mono text-[11px] shrink-0">Hemodynamic Scale</span>
            </figcaption>
          </figure>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          Understanding the Level 3 Experience
        </h3>

        <p>
          Some men notice that they can still have sex but their erections do not feel as firm as they once did. They may describe this as being stuck at Level 3.
        </p>
        <p>
          This is worth paying attention to, particularly if you previously experienced consistently firmer erections. However, Level 3 does not automatically mean you have erectile dysfunction. Erection firmness naturally varies depending on arousal, stress, fatigue, alcohol consumption, and other circumstances.
        </p>
        <p>
          The important thing is to recognise a persistent change from your usual experience. If your erections are regularly less firm, take longer to develop, or disappear before you want them to, it may be time to investigate what is happening.
        </p>
      </section>

      {/* CHAPTER 2: THE 5 EARLY WARNING SIGNS */}
      <section id="ed-ch2" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">
          Chapter 2
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4] text-balance">
          The 5 Early Warning Signs Most Men Ignore
        </h2>

        <p>
          Erectile dysfunction does not always begin with a complete inability to get an erection. Sometimes, the first symptoms are subtle changes that become more noticeable over time. Here are five signs worth understanding.
        </p>

        <div className="space-y-5">
          {/* Sign 1 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#131520] border border-white/10 space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#fbf9f4] flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#c5a059] tabular-nums">01.</span>
              <span>Losing Hardness When Changing Positions</span>
            </h3>
            <p className="text-sm sm:text-base text-[#cac5be]">
              You begin intimacy with a firm erection, but when you change positions, pause, or reach for protection, you notice that your erection starts fading.
            </p>
            <p className="text-sm sm:text-base text-[#a4a7b5]">
              This can happen occasionally without indicating a medical problem. Arousal can decrease during interruptions, and some men need continued stimulation to maintain an erection. However, if it happens regularly and becomes frustrating, anxiety, reduced sexual stimulation, fatigue, medication side effects, and difficulties maintaining blood flow can all contribute. Pay attention to how frequently it happens and whether it occurs in different situations.
            </p>
          </div>

          {/* Sign 2 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#131520] border border-white/10 space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#fbf9f4] flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#c5a059] tabular-nums">02.</span>
              <span>It Takes Much Longer to Get Ready</span>
            </h3>
            <p className="text-sm sm:text-base text-[#cac5be]">
              Perhaps you remember a time when getting an erection felt almost effortless. Now, you need more time, stimulation, or concentration before your body responds.
            </p>
            <p className="text-sm sm:text-base text-[#a4a7b5]">
              Age, stress, relationship difficulties, poor sleep, alcohol, and certain medications can affect sexual response. Conditions such as diabetes and high blood pressure can also interfere with the blood vessels and nerves involved in erections. If the change is persistent, it is worth discussing with a healthcare professional rather than assuming it is simply part of getting older.
            </p>
          </div>

          {/* Sign 3 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#131520] border border-white/10 space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#fbf9f4] flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#c5a059] tabular-nums">03.</span>
              <span>The Soft Tip Problem</span>
            </h3>
            <p className="text-sm sm:text-base text-[#cac5be]">
              Some men notice that the head of the penis does not feel as firm as the shaft during an erection.
            </p>
            <p className="text-sm sm:text-base text-[#a4a7b5]">
              The glans, or head of the penis, has a different anatomical structure from the erectile tissue in the shaft. Because of this, firmness can vary. A softer glans does not automatically indicate poor circulation or erectile dysfunction—arousal, stimulation, temperature, and individual anatomy all influence how it feels. However, if you notice a consistent change in erection quality, especially alongside other symptoms, consider getting it checked.
            </p>
          </div>

          {/* Sign 4 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#131520] border border-white/10 space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#fbf9f4] flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#c5a059] tabular-nums">04.</span>
              <span>Your Erection Fades When Stimulation Stops</span>
            </h3>
            <p className="text-sm sm:text-base text-[#cac5be]">
              You become erect, but as soon as physical stimulation pauses, your erection begins to disappear.
            </p>
            <p className="text-sm sm:text-base text-[#a4a7b5]">
              This can happen because erections are closely connected to sexual arousal. Some men naturally need continued stimulation to maintain firmness. But if you repeatedly lose your erection very quickly, even when you are comfortable and interested, it may be related to anxiety, reduced arousal, medication effects, hormonal issues, or physical health conditions.
            </p>
          </div>

          {/* Sign 5 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#131520] border border-white/10 space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#fbf9f4] flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#c5a059] tabular-nums">05.</span>
              <span>Inconsistent Performance</span>
            </h3>
            <p className="text-sm sm:text-base text-[#cac5be]">
              One day everything works perfectly. Another day, you struggle to get or maintain an erection.
            </p>
            <p className="text-sm sm:text-base text-[#a4a7b5]">
              This inconsistency is common, particularly when stress, tiredness, alcohol, or performance anxiety are involved. However, repeated difficulties should not be ignored simply because you occasionally have a successful experience. Take note of the circumstances—poor sleep, nervousness, or new medications—to help identify the underlying cause.
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTER 3: MORNING WOOD */}
      <section id="ed-ch3" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">
          Chapter 3
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4] text-balance">
          What Happened to Your Morning Wood?
        </h2>

        <p>
          Morning erections are one of the most noticeable signs of normal sexual functioning. These erections are part of a natural process called <strong className="text-[#fbf9f4]">nocturnal penile tumescence (NPT)</strong>. They commonly occur during REM sleep, the stage associated with vivid dreaming and changes in brain activity.
        </p>

        <p>
          You may wake up with an erection because one happened shortly before you opened your eyes. Morning erections are not necessarily connected to sexual thoughts or dreams—they occur naturally during sleep.
        </p>

        {/* FIGURE 3: REM SLEEP & NPT CHART */}
        {post.images?.remSleepChart && (
          <figure className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img
              src={post.images.remSleepChart}
              alt="8-hour sleep architecture and nocturnal penile tumescence during REM cycles"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[480px] object-cover"
            />
            <figcaption className="p-4 bg-[#0d0f17] border-t border-white/10 text-xs text-[#8e909a] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>
                <strong className="text-[#dfc58b]">Figure 3: Nocturnal Penile Tumescence &amp; Sleep Cycles.</strong> Healthy REM intervals trigger cyclical vascular engorgement that oxygenates erectile tissue overnight.
              </span>
              <span className="text-[#c5a059] font-mono text-[11px] shrink-0">Circadian Physiology</span>
            </figcaption>
          </figure>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          Why Morning Erections May Become Less Frequent
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
              <Moon className="w-4 h-4 text-[#c5a059]" />
              <span>1. Poor Sleep Quality</span>
            </div>
            <p className="text-xs sm:text-sm text-[#a4a7b5]">
              Interrupted sleep, insufficient sleep, and sleep disorders can affect normal sleep cycles. Since nighttime erections are associated with REM sleep, poor sleep may reduce how often you experience them.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#c5a059]" />
              <span>2. Hormonal Changes</span>
            </div>
            <p className="text-xs sm:text-sm text-[#a4a7b5]">
              Testosterone plays an important role in sexual desire and erectile function. Low testosterone can contribute to reduced libido and erection difficulties, although morning erections alone cannot confirm a hormone problem.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
              <HeartPulse className="w-4 h-4 text-[#c5a059]" />
              <span>3. Blood Vessel &amp; Circulation Problems</span>
            </div>
            <p className="text-xs sm:text-sm text-[#a4a7b5]">
              Healthy blood vessels are essential for erections. Conditions such as diabetes, high blood pressure, and cardiovascular disease can affect the circulation needed for normal erectile function.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-[#c5a059]" />
              <span>4. Medication &amp; Lifestyle Factors</span>
            </div>
            <p className="text-xs sm:text-sm text-[#a4a7b5]">
              Some antidepressants, blood pressure medications, and other prescription drugs can affect sexual function. Smoking, heavy alcohol consumption, and ongoing stress may also contribute.
            </p>
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          Does Losing Morning Wood Mean You Have ED?
        </h3>
        <p>
          Not necessarily. Morning erections naturally vary—you might experience them frequently for several weeks and then notice fewer for a while. However, if morning erections have become consistently less frequent and you are also struggling during sexual activity, it is worth speaking with a healthcare professional. Morning erections are useful clues, but they are not a standalone test for determining whether erectile dysfunction is physical or psychological.
        </p>

        {/* COMPANION INTERLINK: ENDOCRINE ARCHITECTURE */}
        <div className="my-5 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Hormonal &amp; Sleep Science</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Endocrine Architecture] The Testosterone-Stamina Axis
            </div>
            <div className="text-xs text-[#8e909a]">
              Understand how nocturnal slow-wave sleep, cortisol, SHBG, and free testosterone influence morning vitality.
            </div>
          </div>
          <Link
            to="/blog/the-endocrine-architecture-testosterone-stamina-axis"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Explore Endocrine Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 4: HEAD VS BODY */}
      <section id="ed-ch4" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">
          Chapter 4
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4] text-balance">
          Is It in Your Head or in Your Body?
        </h2>

        <p>
          Understanding the possible cause of erection difficulties is an important step towards finding the right solution. ED can involve psychological factors, physical conditions, or a combination of both.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#dfc58b] flex items-center gap-2">
              <Brain className="w-4 h-4 text-[#c5a059]" />
              <span>Psychological Causes</span>
            </h3>
            <p className="text-sm text-[#cac5be]">
              Stress, anxiety, depression, relationship problems, and fear of sexual failure can all interfere with erections. Imagine having one difficult sexual experience: the next time you are intimate, you start worrying that the same thing will happen again. Instead of enjoying the moment, your attention shifts towards monitoring your erection, increasing stress and making it harder to respond.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#dfc58b] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#c5a059]" />
              <span>Physical Causes</span>
            </h3>
            <ul className="space-y-1.5 text-sm text-[#cac5be] list-disc pl-5 marker:text-[#c5a059]">
              <li>Diabetes and high blood sugar</li>
              <li>High blood pressure &amp; cardiovascular disease</li>
              <li>Hormonal conditions, including low testosterone</li>
              <li>Nerve damage or pelvic compression</li>
              <li>Obesity and physical inactivity</li>
              <li>Certain prescription medications</li>
            </ul>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#12141e]">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#181b29] border-b border-white/10 text-[#dfc58b]">
                <th className="py-3.5 px-4 font-serif font-bold">Symptom Pattern</th>
                <th className="py-3.5 px-4 font-serif font-bold">May Suggest Psychological Factors</th>
                <th className="py-3.5 px-4 font-serif font-bold">May Suggest Physical Factors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-[#cac5be]">
              <tr>
                <td className="py-3 px-4 font-semibold text-[#fbf9f4]">How it started</td>
                <td className="py-3 px-4">Sometimes begins suddenly</td>
                <td className="py-3 px-4">May develop gradually</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#fbf9f4]">Morning erections</td>
                <td className="py-3 px-4">May remain present</td>
                <td className="py-3 px-4">May become less frequent</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#fbf9f4]">Solo performance</td>
                <td className="py-3 px-4">May be easier in some situations</td>
                <td className="py-3 px-4">May also be affected</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#fbf9f4]">Different situations</td>
                <td className="py-3 px-4">May vary with stress or partner</td>
                <td className="py-3 px-4">May be more consistent</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#fbf9f4]">During intimacy</td>
                <td className="py-3 px-4">Anxiety and overthinking may be noticeable</td>
                <td className="py-3 px-4">Physical response remains difficult despite feeling relaxed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#8e909a] italic">
          Note: These are only general clinical patterns. They cannot diagnose the underlying cause on their own.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          The First Bad Night Trap
        </h3>
        <p>
          Sometimes, erectile difficulties begin with one ordinary experience. You may have been exhausted, had too much alcohol, or felt nervous with a new partner. You struggle to get an erection, and the experience leaves you embarrassed.
        </p>
        <p>
          The next time, you begin thinking, <em>“What if it happens again?”</em> That fear triggers an adrenaline stress response, making it harder for the body to remain in the relaxed parasympathetic state that supports an erection. Breaking this cycle often involves reducing performance pressure, improving communication with your partner, and addressing the original stressor.
        </p>

        {/* COMPANION INTERLINK: PSYCHOLOGY OF STAMINA */}
        <div className="my-5 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <Brain className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Cognitive Performance Guide</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              The Psychology of Stamina: Breaking Performance Anxiety &amp; Spectatoring
            </div>
            <div className="text-xs text-[#8e909a]">
              Learn how to calm the amygdala threat response and replace self-monitoring with grounded sensory focus.
            </div>
          </div>
          <Link
            to="/blog/the-psychology-of-stamina-rewiring-brain-performance"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Psychology Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 5: HIDDEN PHYSICAL CAUSES */}
      <section id="ed-ch5" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">
          Chapter 5
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4] text-balance">
          The Hidden Physical Causes of Weak Erections
        </h2>

        <p>
          If your symptoms are persistent, it is important to look beyond the bedroom. Several physical conditions can affect erection quality:
        </p>

        <div className="space-y-5">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#131520] border border-white/10 space-y-2.5">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#fbf9f4]">
              1. Poor Blood Vessel Health
            </h3>
            <p className="text-sm sm:text-base text-[#cac5be]">
              An erection depends on blood flowing into the penis and the erectile tissue expanding to hold that blood. When you become sexually aroused, signals from your nervous system help relax the smooth muscles in the penile blood vessels. Conditions that damage blood vessels—including diabetes, high blood pressure, high cholesterol, and smoking—can interfere with this process.
            </p>
            <div className="pt-1">
              <Link
                to="/blog/nitric-oxide-blueprint-nutrition"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#dfc58b] hover:underline no-underline"
              >
                <span>See how dietary nitrates &amp; L-citrulline support nitric oxide blood flow</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#131520] border border-white/10 space-y-2.5">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#fbf9f4]">
              2. Pelvic Floor Muscle Problems
            </h3>
            <p className="text-sm sm:text-base text-[#cac5be]">
              The pelvic floor is a group of muscles that support the bladder, bowel, and sexual organs, playing a direct role in erection and ejaculation. Some men may have pelvic floor weakness, while others experience excessive tension or difficulty relaxing the muscles. That is why doing hundreds of Kegels is not automatically the answer—if your pelvic muscles are already tense, repeated squeezing may worsen discomfort. Learning to relax them through controlled breathing and appropriate pelvic floor exercises may be more useful.
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <Link
                to="/blog/pelvic-floor-reverse-kegel-stamina"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#dfc58b] hover:underline no-underline"
              >
                <span>Read: Pelvic Floor Awareness &amp; Reverse Kegels</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/blog/pelvic-freedom-yoga-myofascial-release-stamina"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#dfc58b] hover:underline no-underline"
              >
                <span>Read: Pelvic Freedom Mobility Protocol</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#131520] border border-white/10 space-y-2.5">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#fbf9f4]">
              3. Low Testosterone
            </h3>
            <p className="text-sm sm:text-base text-[#cac5be]">
              Testosterone is important for sexual desire and normal male reproductive function. When testosterone levels are genuinely low, some men experience reduced libido, fatigue, changes in mood, and difficulty with erections. However, not every man with ED has low testosterone—many men have normal hormone levels but struggle because of vascular disease, stress, or medication effects. A blood test interpreted by a healthcare professional is required to assess testosterone properly.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#131520] border border-white/10 space-y-2.5">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#fbf9f4]">
              4. Nerve Irritation and Prolonged Sitting
            </h3>
            <p className="text-sm sm:text-base text-[#cac5be]">
              The nerves involved in sexual sensation and erection function can be affected by diabetes, pelvic injuries, and certain surgical procedures. Prolonged pressure on the perineal area, including from poorly fitted bicycle saddles or long unbroken hours sitting, can also contribute to numbness or discomfort. Take regular movement breaks, and seek medical advice if you experience persistent genital numbness or pain.
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTER 6: MENTAL TRAPS */}
      <section id="ed-ch6" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">
          Chapter 6
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4] text-balance">
          The Mental Traps That Can Affect Your Firmness
        </h2>

        <p>
          Your brain processes arousal, emotion, sensation, and the signals that initiate an erection. When your mind is overwhelmed by stress or self-judgment, your body may struggle to respond.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          The Spectator Effect
        </h3>
        <p>
          Have you ever been intimate while mentally checking whether your erection is still strong?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-5 rounded-xl bg-[#141624] border border-white/10 font-mono text-xs sm:text-sm text-[#e5b3b3]">
          <div>“Is it staying hard?”</div>
          <div>“What if I lose it?”</div>
          <div>“Does my partner notice?”</div>
          <div>“Am I taking too long?”</div>
        </div>

        <p>
          This is called <strong className="text-[#fbf9f4]">spectatoring</strong>. Instead of experiencing intimacy, you become an outside observer judging your performance. That pressure increases anxiety and dampens sexual response. Shift your attention away from performing like an examination and back toward physical sensation, communication, closeness, and enjoyment.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          The Digital Stimulation Question
        </h3>
        <p>
          Some men worry that frequent pornography use has affected their ability to become aroused with a real partner. Research is still developing: some studies suggest associations between problematic use, sexual dissatisfaction, or situational difficulties, while others do not find a single universal causal rule. It is inaccurate to claim that pornography permanently damages every man’s brain. However, if you notice your habits interfere with real-life connection, try reducing screen-based stimulation or speaking with a qualified therapist.
        </p>

        {/* COMPANION INTERLINK: DOPAMINE RESET */}
        <div className="my-5 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Neurobiology &amp; Sensate Focus</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Neural Reset] Dopamine Fasting &amp; Neurological Desensitization
            </div>
            <div className="text-xs text-[#8e909a]">
              A balanced 30-day framework to reduce super-stimuli overload and rebuild responsiveness to natural intimacy.
            </div>
          </div>
          <Link
            to="/blog/dopamine-fasting-neurological-desensitization-stamina"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Neural Reset</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 7: HEART WARNING */}
      <section id="ed-ch7" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">
          Chapter 7
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4] text-balance">
          Why Your Erection Is an Early Warning for Your Heart
        </h2>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#1d1518] border border-rose-500/30 flex items-start gap-3.5">
          <HeartPulse className="w-6 h-6 text-rose-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-2 text-sm sm:text-base text-[#f1d5d8]">
            <div className="font-serif font-bold text-base sm:text-lg text-[#fbf9f4]">
              Small Arteries Show Vascular Stress First
            </div>
            <p>
              The blood vessels involved in erections are relatively small. Because of this, conditions such as atherosclerosis, diabetes, high blood pressure, and high cholesterol can sometimes become noticeable through erection difficulties before other cardiovascular symptoms appear.
            </p>
          </div>
        </div>

        <p>
          That does not mean every erection problem signals heart disease—psychological stress, medications, and hormonal shifts also play major roles. Still, if you develop persistent erection difficulties without an obvious explanation, a medical assessment is worthwhile. Checking blood pressure, blood sugar, cholesterol, and medication history protects both your sexual vitality and your long-term cardiovascular health.
        </p>

        {/* COMPANION INTERLINK: LONGEVITY PROTOCOL */}
        <div className="my-5 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Long-Term Vascular Protection</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              The Longevity Protocol: Age-Proofing Your Vascular Clock &amp; Stamina
            </div>
            <div className="text-xs text-[#8e909a]">
              Understand the vascular clock, biomarker screening targets, and lifelong endothelial protection.
            </div>
          </div>
          <Link
            to="/blog/the-longevity-protocol-age-proofing-sexual-stamina"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Longevity Protocol</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 8: DAILY HABITS */}
      <section id="ed-ch8" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">
          Chapter 8
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4] text-balance">
          Simple Daily Habits to Support Healthier Erections
        </h2>

        <p>
          Lifestyle changes cannot guarantee that erectile dysfunction will disappear, especially when medical conditions are present. But they reliably improve several of the core physiological factors that support firmer, more dependable erections.
        </p>

        {/* FIGURE 4: FOUR DAILY HABITS */}
        {post.images?.habitsChart && (
          <figure className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img
              src={post.images.habitsChart}
              alt="Four daily habits for vascular and erectile health: hydration, brisk walking, pelvic relaxation breathing, and deep sleep"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[500px] object-cover"
            />
            <figcaption className="p-4 bg-[#0d0f17] border-t border-white/10 text-xs text-[#8e909a] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>
                <strong className="text-[#dfc58b]">Figure 4: Four Daily Restoration Pillars.</strong> Consistent hydration, aerobic walking, pelvic floor relaxation, and 7–9 hours of sleep build systemic vascular resilience.
              </span>
              <span className="text-[#c5a059] font-mono text-[11px] shrink-0">Daily Protocol</span>
            </figcaption>
          </figure>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-2.5">
            <div className="flex items-center gap-2 text-[#dfc58b] font-serif font-bold text-lg">
              <Droplets className="w-5 h-5 text-[#c5a059]" />
              <span>1. Stay Properly Hydrated</span>
            </div>
            <p className="text-sm text-[#a4a7b5]">
              Dehydration can make you feel tired and affect normal circulation, particularly when it becomes significant. Drink water regularly throughout the day based on your body size, climate, and activity level rather than forcing arbitrary extreme amounts.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-2.5">
            <div className="flex items-center gap-2 text-[#dfc58b] font-serif font-bold text-lg">
              <Activity className="w-5 h-5 text-[#c5a059]" />
              <span>2. Make Walking Part of Your Routine</span>
            </div>
            <p className="text-sm text-[#a4a7b5]">
              A brisk 30-minute walk supports cardiovascular health, helps manage blood pressure, improves insulin sensitivity, and supports healthy body weight. If you have been inactive or have a medical condition, consult your clinician about an appropriate pace.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-2.5">
            <div className="flex items-center gap-2 text-[#dfc58b] font-serif font-bold text-lg">
              <Wind className="w-5 h-5 text-[#c5a059]" />
              <span>3. Learn to Relax Your Pelvic Floor</span>
            </div>
            <p className="text-sm text-[#a4a7b5]">
              Sit or lie comfortably, breathe slowly into your abdomen, and gently release unnecessary tension in your stomach, buttocks, and pelvic area as you exhale—without forcefully straining downward. A pelvic floor specialist can guide you if pain or urinary symptoms exist.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-2.5">
            <div className="flex items-center gap-2 text-[#dfc58b] font-serif font-bold text-lg">
              <Moon className="w-5 h-5 text-[#c5a059]" />
              <span>4. Protect Your Sleep</span>
            </div>
            <p className="text-sm text-[#a4a7b5]">
              Adults generally need around 7 to 9 hours of sleep each night. Keep a consistent bedtime, dim late-night screens, and ask a doctor about sleep apnoea if you snore heavily or wake up exhausted.
            </p>
          </div>
        </div>

        {/* COMPANION INTERLINK: STAMINA LIFESTYLE */}
        <div className="my-5 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Daily Lifestyle Architecture</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              The Stamina Lifestyle: Sleep, Nicotine, Alcohol &amp; Daily Routine
            </div>
            <div className="text-xs text-[#8e909a]">
              Build a complete 24-hour recovery schedule covering caffeine cutoffs, movement breaks, and circadian sleep hygiene.
            </div>
          </div>
          <Link
            to="/blog/stamina-lifestyle-daily-habits"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Stamina Lifestyle</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* INTERACTIVE EARLY-WARNING SELF-REFLECTION TOOL */}
      <section id="ed-assessment" className="scroll-mt-24 pt-6 border-t border-white/10">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#141624] border border-[#c5a059]/40 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div>
              <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#c5a059]" />
                <span>Self-Reflection Tool (Non-Diagnostic)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fbf9f4]">
                Early-Warning Pattern Self-Check
              </h3>
            </div>
            <div className="text-xs text-[#8e909a]">
              Helps organize symptoms before speaking with a clinician
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Morning Erections */}
            <div className="p-4 rounded-xl bg-[#0e1018] border border-white/10 space-y-2.5">
              <div className="font-semibold text-[#fbf9f4]">Morning Erection Frequency</div>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'regular', label: 'Regular' },
                  { id: 'sometimes', label: 'Reduced' },
                  { id: 'rare', label: 'Rare / Gone' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setMorningWoodFreq(opt.id)}
                    className={`py-2 px-2 rounded-lg font-medium border transition-colors cursor-pointer ${
                      morningWoodFreq === opt.id
                        ? 'bg-[#c5a059] text-black border-[#dfc58b] font-bold'
                        : 'bg-[#161926] text-[#a4a7b5] border-white/5 hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Positional Fade */}
            <div className="p-4 rounded-xl bg-[#0e1018] border border-white/10 space-y-2.5">
              <div className="font-semibold text-[#fbf9f4]">Losing Firmness on Position Change</div>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'never', label: 'Rarely' },
                  { id: 'occasional', label: 'Sometimes' },
                  { id: 'frequent', label: 'Frequently' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPositionalFade(opt.id)}
                    className={`py-2 px-2 rounded-lg font-medium border transition-colors cursor-pointer ${
                      positionalFade === opt.id
                        ? 'bg-[#c5a059] text-black border-[#dfc58b] font-bold'
                        : 'bg-[#161926] text-[#a4a7b5] border-white/5 hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sleep Duration */}
            <div className="p-4 rounded-xl bg-[#0e1018] border border-white/10 space-y-2.5">
              <div className="font-semibold text-[#fbf9f4]">Typical Nightly Sleep</div>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: '7plus', label: '7–9 hrs' },
                  { id: '6-7', label: '6–7 hrs' },
                  { id: 'under6', label: '< 6 hrs' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSleepQuality(opt.id)}
                    className={`py-2 px-2 rounded-lg font-medium border transition-colors cursor-pointer ${
                      sleepQuality === opt.id
                        ? 'bg-[#c5a059] text-black border-[#dfc58b] font-bold'
                        : 'bg-[#161926] text-[#a4a7b5] border-white/5 hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Spectatoring Pressure */}
            <div className="p-4 rounded-xl bg-[#0e1018] border border-white/10 space-y-2.5">
              <div className="font-semibold text-[#fbf9f4]">Overthinking / Checking Firmness</div>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'low', label: 'Low' },
                  { id: 'moderate', label: 'Moderate' },
                  { id: 'high', label: 'High' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setMentalSpectatoring(opt.id)}
                    className={`py-2 px-2 rounded-lg font-medium border transition-colors cursor-pointer ${
                      mentalSpectatoring === opt.id
                        ? 'bg-[#c5a059] text-black border-[#dfc58b] font-bold'
                        : 'bg-[#161926] text-[#a4a7b5] border-white/5 hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Daily Sitting Slider */}
          <div className="p-4 rounded-xl bg-[#0e1018] border border-white/10 space-y-2 text-xs">
            <div className="flex justify-between font-semibold">
              <span className="text-[#fbf9f4]">Daily Unbroken Sitting Time</span>
              <span className="text-[#dfc58b] font-mono tabular-nums">{sittingHours} hours / day</span>
            </div>
            <input
              type="range"
              min="2"
              max="14"
              step="1"
              value={sittingHours}
              onChange={(e) => setSittingHours(Number(e.target.value))}
              className="w-full accent-[#c5a059] cursor-pointer"
            />
          </div>

          {/* Pattern Summary */}
          <div className="p-5 rounded-xl bg-[#0e1018] border border-[#c5a059]/30 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className={`font-serif font-bold text-lg ${patternProfile.accent}`}>
                {patternProfile.profileTitle}
              </div>
              <div className="text-xs font-mono tabular-nums text-[#8e909a]">
                Physical Load: {patternProfile.vascularWeight}% · Mental Pressure: {patternProfile.psychWeight}%
              </div>
            </div>
            <p className="text-sm text-[#cac5be] leading-relaxed">
              {patternProfile.recommendation}
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTER 9: FAQ */}
      <section id="ed-faq" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">
          Chapter 9
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4] text-balance">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#141624] border border-white/10 overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
              >
                <span className="font-serif font-bold text-sm sm:text-base text-[#fbf9f4]">
                  {item.q}
                </span>
                <span className="p-1 rounded bg-[#1e2234] text-[#dfc58b] flex-shrink-0">
                  {openFaq === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#a4a7b5] leading-relaxed border-t border-white/5 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONCLUSION */}
      <section id="ed-conclusion" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#171926] to-[#10121b] border border-[#c5a059]/35 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4] text-balance">
            Conclusion: Take Back Your Command
          </h2>
          <p className="text-[#cac5be]">
            Experiencing weak erections, losing firmness during intimacy, or noticing that morning erections have become less frequent can be frustrating. It can affect your confidence and make you worry about your future sexual health.
          </p>
          <p className="text-[#cac5be]">
            But these symptoms do not mean your best days are behind you. Erection difficulties can have many causes, including stress, poor sleep, cardiovascular conditions, diabetes, hormonal changes, and medication side effects. Understanding the cause is much more useful than blaming yourself or buying random supplements that promise instant results.
          </p>
          <p className="text-[#cac5be]">
            Start with the basics. Move your body regularly, eat a balanced diet, get enough sleep, avoid smoking, limit alcohol, and make time to manage stress. Pay attention to changes in your sexual health, and do not be embarrassed to discuss persistent problems with a healthcare professional.
          </p>
          <p className="text-[#dfc58b] font-serif italic text-lg">
            Most importantly, remember that erectile dysfunction is a common and treatable health concern. Taking action early gives you a better opportunity to understand what is happening and choose the right approach.
          </p>
        </div>

        {/* UNLOCK THE COMPLETE NATURAL RESTORATION BLUEPRINT */}
        <div className="mt-10 p-6 sm:p-10 rounded-3xl bg-[#141624] border-2 border-[#c5a059]/50 shadow-2xl space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-mono text-[#dfc58b] uppercase tracking-widest font-bold">
              STAMINA MASTERY GUIDE
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#fbf9f4] text-balance">
              Unlock the Complete Natural Restoration Blueprint
            </h3>
            <p className="text-xs sm:text-sm text-[#a4a7b5] leading-relaxed">
              Spotting the early warning signs is only the beginning. Building healthier habits and understanding how your body works are the next steps. Inside our <strong>Stamina Mastery Guide</strong>, you will find practical information designed to help you improve your daily habits, support better circulation, and build a healthier approach to sexual wellness.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-2">
            <div className="cursor-pointer flex-shrink-0" onClick={onLockerClick}>
              <BookMockup size="normal" />
            </div>

            <div className="space-y-4 max-w-md text-left">
              <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider">
                Inside the guide, you’ll discover:
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#dedad2]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span>The morning habits that help you start the day with more energy.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span>Practical breathing techniques to release unnecessary pelvic tension.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span>Foods and everyday nutrition habits that support cardiovascular health.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span>Ways to improve sleep, manage stress, and support healthy hormone function.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span>Simple lifestyle changes that can help you build confidence and endurance.</span>
                </li>
              </ul>

              <a
                href="javascript:void(0);"
                onClick={onLockerClick}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#c5a059] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all no-underline shadow-lg cursor-pointer"
              >
                <span>UNLOCK THE FULL GUIDE ON OUR HOMEPAGE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="text-[11px] text-[#71737e] text-center italic pt-2">
            Educational disclaimer: This article is for general informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional regarding persistent erectile difficulties or cardiovascular symptoms.
          </p>
        </div>
      </section>
    </div>
  );
}
