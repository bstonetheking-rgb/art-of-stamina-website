import React, { useState } from 'react';
import { 
  Moon, 
  Sun, 
  Activity, 
  Heart, 
  Flame, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle, 
  Coffee, 
  BedDouble, 
  Dumbbell, 
  ShieldCheck, 
  Zap, 
  Wind 
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticleLifestyle({ post, onLockerClick }) {
  const [activeScheduleItem, setActiveScheduleItem] = useState(0);
  const [activeHabitTab, setActiveHabitTab] = useState('beneficial');

  const negativeHabits = [
    { habit: "Chronic Sleep Deprivation (<6 hrs)", impact: "Blunts nocturnal testosterone production, spikes baseline cortisol, elevates anxiety sensitivity." },
    { habit: "Nicotine / Vaping Exposure", impact: "Triggers acute systemic vasoconstriction, narrows microvasculature, impairs endothelial nitric oxide generation." },
    { habit: "Excessive Alcohol Consumption", impact: "Central nervous system depressant, impairs nerve conductivity, disrupts restorative REM sleep architecture." },
    { habit: "Prolonged Unbroken Sitting (8+ hrs)", impact: "Causes pelvic venous pooling, shortens hip flexors, contributes to chronic pelvic floor muscle guarding." },
    { habit: "Unmanaged Work-to-Bed Stress", impact: "Maintains high sympathetic (fight-or-flight) tone into intimate moments, leading to premature involuntary climax reflex." }
  ];

  const positiveHabits = [
    { habit: "7–8.5 Hours Restorative Sleep", impact: "Supports natural morning testosterone peaks and stabilizes autonomic nervous system baseline." },
    { habit: "Daily Hip & Pelvic Mobility", impact: "Releases chronically tight hip flexors and restores blood flow across the pelvic basin." },
    { habit: "Compound Strength & Zone 2 Cardio", impact: "Promotes vascular elasticity, mitochondrial efficiency, and endothelial health." },
    { habit: "Work-to-Intimacy Transition Ritual", impact: "Shifts the brain from executive problem-solving mode into relaxed somatic presence." },
    { habit: "Hydration & Nutrient-Dense Whole Foods", impact: "Provides electrolytes, dietary nitrates, and antioxidants necessary for sustained vascular health." }
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
      <section id="life-intro" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Introduction: Sexual Stamina Is Built Long Before the Bedroom
        </h2>
        <p>
          One of the biggest mistakes men make when trying to improve sexual stamina is treating sex as an isolated event.
        </p>
        <p>
          They start thinking about performance ten minutes before intimacy. They may look for a quick breathing technique, take a supplement, drink something they believe will help, or search for a last-minute trick that promises to make them last longer.
        </p>
        <p>
          But the truth is more complicated.
        </p>
        <p>
          Your sexual performance does not begin when you enter the bedroom. It is influenced by what has been happening in your body throughout the day—and often over many days, weeks, and months.
        </p>
        <p>
          The quality of your sleep can affect your energy, mood, and hormone regulation. Chronic stress can affect your nervous system and desire. Smoking and nicotine use can affect blood vessels. Heavy alcohol use can interfere with sexual function. Long periods of sitting can contribute to general physical stiffness and inactivity. Poor cardiovascular fitness can affect endurance, while overtraining can leave you exhausted rather than energized.
        </p>
        <p>
          This is why it can be useful to think of sexual stamina as part of your overall lifestyle, rather than a separate skill that only matters during sex.
        </p>
        <p>
          There is no single biohack that can guarantee perfect sexual performance. Your body is not a machine with one hidden button that instantly switches on “elite stamina.” Sexual function involves the interaction of the brain, nervous system, hormones, blood vessels, physical health, emotions, relationships, and individual patterns of arousal.
        </p>
        <p>
          Still, your daily habits matter.
        </p>
        <p>
          A man who is consistently sleeping poorly, living under intense stress, barely moving, relying heavily on nicotine, and regularly drinking to excess should not expect a supplement or bedroom technique to completely cancel out those habits.
        </p>

        {/* Highlight Quote Box */}
        <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-[#171a26] to-[#12141d] border-l-4 border-[#c5a059] shadow-md">
          <p className="font-serif italic text-lg sm:text-xl text-[#fbf9f4] leading-relaxed mb-2">
            “The techniques you use during intimacy are important. But your lifestyle determines the condition of the body using those techniques. This is the Stamina Lifestyle.”
          </p>
          <div className="text-xs text-[#c5a059] font-semibold tracking-wider uppercase">— Bedroom IQ Physiology & Lifestyle Research</div>
        </div>

        <p>
          The goal of this guide is not to create an impossible lifestyle where every hour is perfectly optimized. It is to help you understand which everyday habits can support better energy, cardiovascular health, stress regulation, and sexual wellbeing.
        </p>
      </section>

      {/* CHAPTER 1: SLEEP-HORMONE-RECOVERY */}
      <section id="life-ch1" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 1</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          The Sleep–Hormone–Recovery Connection
        </h2>
        <p>
          If there is one lifestyle habit that deserves more attention from men concerned about sexual health, it is sleep.
        </p>
        <p>
          Sleep is not simply the period when your body “shuts down.” It is an active biological process involved in recovery, memory, metabolism, immune function, hormone regulation, and overall physical performance.
        </p>
        <p>
          When you consistently sleep poorly, you usually feel the effects everywhere. Your concentration drops. Your mood becomes less stable. Exercise can feel harder. Stress may feel more intense. Your motivation can decline. Sexual wellbeing can also be affected.
        </p>

        {/* Featured Image 1: Sleep Architecture & Recovery */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#0f1118] shadow-xl">
          <div className="aspect-[16/9] w-full overflow-hidden bg-black/40">
            <img 
              src={post.images.sleep} 
              alt="Restorative sleep environment for testosterone synthesis and nervous system recovery" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-[#141724] border-t border-white/10 text-xs text-[#9fa2b3] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span><strong>Figure 1.1:</strong> Sleep Environment &amp; Endocrine Recovery — Cool, dark sleeping quarters optimize nocturnal REM cycles and androgen synthesis.</span>
            <span className="text-[#dfc58b] font-mono text-[11px]">CIRCADIAN RECOVERY</span>
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          Why Sleep Matters for Testosterone
        </h3>
        <p>
          Testosterone levels naturally fluctuate and are closely connected to normal sleep patterns. Research has found that significant sleep restriction can reduce daytime testosterone levels in healthy young men.
        </p>
        <p>
          However, it is important not to oversimplify this into the idea that “one bad night destroys your testosterone.” Your body is resilient.
        </p>
        <p>
          The bigger concern is chronic sleep deprivation. Consistently sleeping five hours because you are occasionally busy is different from spending months or years regularly depriving yourself of adequate sleep.
        </p>

        <div className="p-5 rounded-xl bg-[#141724] border border-white/10 space-y-3">
          <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-2">
            <Moon className="w-4 h-4 text-[#c5a059]" />
            <span>Chronic Sleep Deprivation Impairs 6 Core Systems:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-[#b8b5ab]">
            <div className="p-2.5 rounded-lg bg-[#10121a] border border-white/5">• Energy levels</div>
            <div className="p-2.5 rounded-lg bg-[#10121a] border border-white/5">• Mood stability</div>
            <div className="p-2.5 rounded-lg bg-[#10121a] border border-white/5">• Sexual desire</div>
            <div className="p-2.5 rounded-lg bg-[#10121a] border border-white/5">• Exercise recovery</div>
            <div className="p-2.5 rounded-lg bg-[#10121a] border border-white/5">• Stress regulation</div>
            <div className="p-2.5 rounded-lg bg-[#10121a] border border-white/5">• Hormonal balance</div>
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          Sleep and the Nervous System
        </h3>
        <p>
          There is another important reason sleep matters: your nervous system.
        </p>
        <p>
          When you are exhausted, you are often more emotionally reactive. Small problems feel bigger. Anxiety becomes easier to trigger. Your ability to regulate attention may decrease.
        </p>
        <p>
          This can matter during sex. If you are already mentally exhausted and anxious, you may find it harder to stay present. You may become more focused on performance, more reactive to physical sensations, or more easily distracted.
        </p>
        <p>
          Remember: <strong>sexual stamina is not only about muscles. It is also about your ability to regulate arousal without panicking when intensity increases.</strong>
        </p>
        <p>
          Good sleep gives your brain and body a better foundation for that process.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          A Practical Sleep Routine
        </h3>
        <ul className="space-y-2 pl-6 list-disc marker:text-[#c5a059]">
          <li>Aim for a consistent sleep and wake time when possible.</li>
          <li>Give yourself enough time in bed to get adequate sleep.</li>
          <li>Keep the bedroom comfortably cool and dark.</li>
          <li>Avoid heavy meals immediately before lying down if they disturb your sleep.</li>
          <li>Reduce stimulating work and stressful activities close to bedtime.</li>
          <li>Limit screen use before bed if scrolling keeps your brain alert.</li>
          <li>Get daylight exposure during the day to support a healthy circadian rhythm.</li>
        </ul>
      </section>

      {/* CHAPTER 2: NICOTINE, SMOKING, VAPING */}
      <section id="life-ch2" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 2</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Nicotine, Smoking, Vaping, and Blood Flow
        </h2>
        <p>
          Many people associate smoking with lung problems and heart disease. What receives less attention is the relationship between nicotine use and sexual health.
        </p>
        <p>
          Erections depend heavily on healthy communication between the nervous system and blood vessels. When the body becomes sexually aroused, blood flow to erectile tissue increases through a complex process involving nerves, smooth muscle, and chemical signals such as nitric oxide.
        </p>
        <p>
          Anything that negatively affects vascular health can potentially affect this process.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          Nicotine and Vasoconstriction
        </h3>
        <p>
          Nicotine can cause blood vessels to constrict.
        </p>
        <p>
          This means that shortly after nicotine exposure, blood vessels can temporarily become narrower. Over time, smoking is also strongly associated with damage to cardiovascular and vascular health.
        </p>
        <p>
          Vaping should not automatically be viewed as harmless simply because it does not involve burning tobacco. While the risks differ from traditional cigarettes, nicotine itself remains biologically active and can affect the cardiovascular system.
        </p>

        <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-xs sm:text-sm text-[#d4cfc3] space-y-1.5">
          <div className="font-bold text-red-400 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4" />
            <span>Vascular Impact of Nicotine</span>
          </div>
          <div>Nicotine acts directly on vascular receptors, inducing acute sympathetic tone elevation, vasoconstriction, and impaired endothelial nitric oxide delivery to smooth muscles.</div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          The Bigger Vascular Picture
        </h3>
        <p>
          Healthy erections are partly a circulation issue. Maintaining healthy blood vessels gives your body a stronger foundation:
        </p>
        <ul className="space-y-1.5 pl-6 list-disc marker:text-[#c5a059] text-sm">
          <li>Avoiding smoking</li>
          <li>Reducing or quitting nicotine when possible</li>
          <li>Exercising regularly</li>
          <li>Managing blood pressure</li>
          <li>Eating a generally heart-healthy diet</li>
          <li>Managing conditions such as diabetes with professional care</li>
        </ul>
      </section>

      {/* CHAPTER 3: ALCOHOL AND THE FALSE PROMISE */}
      <section id="life-ch3" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 3</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Alcohol and the False Promise of “Lasting Longer”
        </h2>
        <p>
          Alcohol has a complicated relationship with sexual performance.
        </p>
        <p>
          Some men believe drinking helps them last longer because it lowers anxiety or dulls physical sensation. In some situations, alcohol may temporarily reduce inhibitions or make a person feel less self-conscious.
        </p>
        <p>
          But there is a difference between feeling more relaxed and performing better.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          The Alcohol Paradox
        </h3>
        <p>
          A small amount of alcohol may make someone feel more confident. Larger amounts, however, can interfere with sexual function: judgment, coordination, nervous system function, hydration, sleep quality, and erectile firmness.
        </p>
        <p>
          This creates a common paradox: <strong>a man may feel mentally more confident after drinking but physically less capable of responding normally.</strong>
        </p>
        <p>
          That is why alcohol should not become your primary sexual-performance tool. If you need several drinks before every intimate experience because you are overwhelmed by anxiety, the real issue may not be stamina. It may be the anxiety itself.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          Alcohol and Hydration
        </h3>
        <p>
          Alcohol can increase fluid loss, which may contribute to dehydration. Do not expect peak physical performance from a body you have spent the night dehydrating and exhausting. If you drink alcohol, moderation matters.
        </p>
      </section>

      {/* CHAPTER 4: THE SITTING PROBLEM AND MOVEMENT */}
      <section id="life-ch4" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 4</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          The Sitting Problem and the Importance of Movement
        </h2>
        <p>
          Modern life has created a strange problem: many people spend hours sitting at desks, in cars, on sofas, and in front of screens. You can exercise for one hour and still spend most of the remaining day barely moving.
        </p>

        {/* Featured Image 2: Movement & Hip Mobility */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#0f1118] shadow-xl">
          <div className="aspect-[16/9] w-full overflow-hidden bg-black/40">
            <img 
              src={post.images.movement} 
              alt="Functional movement and hip flexor mobility training for pelvic health" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-[#141724] border-t border-white/10 text-xs text-[#9fa2b3] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span><strong>Figure 4.1:</strong> Daily Mobility &amp; Pelvic Unloading — Breaking up sedentary sitting with hip flexor stretches and deep squats.</span>
            <span className="text-[#dfc58b] font-mono text-[11px]">MOBILITY &amp; BLOOD FLOW</span>
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          What Sitting Can Do
        </h3>
        <p>
          Long periods of sitting may contribute to general stiffness, reduced daily physical activity, tight-feeling hip muscles, and lower cardiovascular fitness.
        </p>
        <p>
          Some people also become accustomed to constantly holding tension in their hips, abdomen, glutes, and pelvic area. This is particularly relevant if you are learning techniques involving pelvic floor relaxation:
        </p>
        <div className="p-4 rounded-xl bg-[#141622] border border-white/10 text-center font-serif text-base sm:text-lg text-[#dfc58b] italic">
          “You cannot expect to spend twelve hours clenching, bracing, and sitting without movement, then suddenly have perfect body awareness at the exact moment you need it.”
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          Hip Mobility and Pelvic Awareness
        </h3>
        <p>
          Gentle mobility work may also help you become more aware of your hips and lower body:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-[#d4cfc3]">
          <div className="p-3 rounded-lg bg-[#11131c] border border-white/5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
            <span>Hip flexor lunges</span>
          </div>
          <div className="p-3 rounded-lg bg-[#11131c] border border-white/5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
            <span>Pigeon-pose stretches</span>
          </div>
          <div className="p-3 rounded-lg bg-[#11131c] border border-white/5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
            <span>Gentle deep squats</span>
          </div>
          <div className="p-3 rounded-lg bg-[#11131c] border border-white/5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
            <span>Glute bridges</span>
          </div>
          <div className="p-3 rounded-lg bg-[#11131c] border border-white/5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
            <span>Hamstring openers</span>
          </div>
          <div className="p-3 rounded-lg bg-[#11131c] border border-white/5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
            <span>Brisk daily walking</span>
          </div>
        </div>
      </section>

      {/* CHAPTER 5: EXERCISE FOR CIRCULATION & CONFIDENCE */}
      <section id="life-ch5" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 5</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Exercise for Energy, Circulation, and Confidence
        </h2>
        <p>
          Regular physical activity supports cardiovascular health, strength, metabolic health, mood, and stress management.
        </p>
        <p>
          One mistake men make is replacing inactivity with obsession. Too much training without adequate food, sleep, and recovery can leave you exhausted.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          Build a Balanced Routine
        </h3>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#141724] border border-white/10 space-y-2">
            <div className="font-bold text-[#dfc58b] flex items-center gap-2 text-sm">
              <Dumbbell className="w-4 h-4" />
              <span>1. Strength Training (2–4 Sessions/Week)</span>
            </div>
            <p className="text-xs text-[#b8b5ab]">Focus on compound movements: squats, deadlifts, push-ups/presses, rows, and lunges. Train to become stronger without over-taxing your nervous system.</p>
          </div>

          <div className="p-4 rounded-xl bg-[#141724] border border-white/10 space-y-2">
            <div className="font-bold text-[#dfc58b] flex items-center gap-2 text-sm">
              <Heart className="w-4 h-4" />
              <span>2. Cardiovascular Exercise</span>
            </div>
            <p className="text-xs text-[#b8b5ab]">Walking, cycling, swimming, or jogging supports heart and vascular health. If you dislike punishing HIIT, stick with steady-state cardio you can maintain consistently.</p>
          </div>

          <div className="p-4 rounded-xl bg-[#141724] border border-white/10 space-y-2">
            <div className="font-bold text-[#dfc58b] flex items-center gap-2 text-sm">
              <BedDouble className="w-4 h-4" />
              <span>3. Recovery Days</span>
            </div>
            <p className="text-xs text-[#b8b5ab]">Your body adapts during recovery. Sleep well, eat adequately, and honor rest days. Stamina is not built by destroying yourself in the gym.</p>
          </div>
        </div>
      </section>

      {/* CHAPTER 6: COLD SHOWERS & BIOHACKING */}
      <section id="life-ch6" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 6</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Cold Showers and “Biohacking” Without the Hype
        </h2>
        <p>
          Cold showers and cold exposure have become popular in the world of biohacking. But it is important to separate reasonable practice from exaggerated claims.
        </p>
        <p>
          Cold exposure does not “hack” your vagus nerve into giving you unlimited sexual stamina. It does not permanently reset your hormones, nor replace sleep, exercise, or medical care.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          The Skill of Staying Calm During Discomfort
        </h3>
        <p>
          One interesting benefit is psychological. When you enter cold water, your initial reaction may be to tense up and breathe rapidly. With practice, you can learn to regulate your breathing and avoid panicking.
        </p>
        <p>
          That skill—<strong>recognizing a stress response and returning to calmer breathing</strong>—can be useful during rising sexual arousal.
        </p>
      </section>

      {/* MID-ARTICLE CTA BOX */}
      <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#181a26] via-[#12141f] to-[#0c0d14] border-2 border-[#c5a059]/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
          <div className="w-32 flex-shrink-0 cursor-pointer" onClick={onLockerClick}>
            <BookMockup size="compact" />
          </div>

          <div className="space-y-3 text-center sm:text-left flex-1">
            <span className="text-[11px] font-serif font-bold text-[#dfc58b] tracking-widest uppercase">
              COMPLETE 68-PAGE CLINICAL SYSTEM
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#fbf9f4] leading-snug">
              Master the Stamina Lifestyle &amp; Neuromuscular Control
            </h3>
            <p className="text-xs sm:text-sm text-[#8e909a] leading-relaxed">
              Download the complete guide with daily habit blueprints, reverse kegel routines, nutrition protocols, and autonomic pacing drills.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onLockerClick}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#c5a059] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg"
              >
                Instant Free Access (PDF)
              </button>
              <span className="text-[11px] text-[#7d808f]">100% Free · Unabridged Edition</span>
            </div>
          </div>
        </div>
      </div>

      {/* CHAPTER 7: CHRONIC STRESS AND TRANSITIONS */}
      <section id="life-ch7" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 7</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Chronic Stress and the Sexual System
        </h2>
        <p>
          Stress is one of the most underestimated factors in sexual wellbeing. Your body does not always separate “work stress” from “bedroom stress.”
        </p>
        <p>
          You can physically be in bed while mentally still sitting at your desk—replaying arguments, checking notifications, worrying about finances, and trying to solve problems.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          Create a Transition Ritual
        </h3>
        <p>
          One of the most useful habits is creating a deliberate separation between work and rest:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
          <div className="p-3.5 rounded-xl bg-[#11131c] border border-white/10 text-xs text-[#d4cfc3] flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
            <span>Take a 10-minute walk immediately after work</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#11131c] border border-white/10 text-xs text-[#d4cfc3] flex items-center gap-2.5">
            <Wind className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
            <span>Practice 2 minutes of relaxed diaphragmatic breathing</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#11131c] border border-white/10 text-xs text-[#d4cfc3] flex items-center gap-2.5">
            <Activity className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
            <span>Take a warm shower to physically wash away the day</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#11131c] border border-white/10 text-xs text-[#d4cfc3] flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
            <span>Put phones in another room before intimacy</span>
          </div>
        </div>
      </section>

      {/* CHAPTER 8: STAMINA-OPTIMIZED DAILY ROUTINE (INTERACTIVE SCHEDULE) */}
      <section id="life-ch8" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 8</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          The Stamina-Optimized Daily Routine
        </h2>
        <p>
          A lifestyle does not need to be complicated to be effective. Here is an example of what a realistic day looks like:
        </p>

        {/* Featured Image 3: Daily Routine Flatlay */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#0f1118] shadow-xl">
          <div className="aspect-[16/9] w-full overflow-hidden bg-black/40">
            <img 
              src={post.images.routine} 
              alt="Daily wellness and stamina lifestyle routine elements" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-[#141724] border-t border-white/10 text-xs text-[#9fa2b3] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span><strong>Figure 8.1:</strong> Integrated Daily Routine — Aligning morning sunlight, regular hydration, structured movement, and recovery.</span>
            <span className="text-[#dfc58b] font-mono text-[11px]">DAILY PROTOCOL</span>
          </div>
        </div>

        {/* Interactive Schedule Component */}
        <div className="my-6 p-6 rounded-2xl bg-[#141724] border border-[#c5a059]/30 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c5a059]" />
              <span>Interactive Daily Timeline</span>
            </span>
            <span className="text-xs text-[#8e909a]">Select time block</span>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {post.dailySchedule?.map((block, idx) => {
              const isActive = activeScheduleItem === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveScheduleItem(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#1e2335] border-[#c5a059] shadow-md' 
                      : 'bg-[#10121a] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <span className="text-xs font-mono text-[#dfc58b] font-bold">{block.time}</span>
                    <span className="text-xs font-semibold text-[#fbf9f4]">{block.phase}</span>
                  </div>
                  <p className="text-xs text-[#b8b5ab] leading-relaxed">{block.action}</p>
                  {isActive && (
                    <div className="mt-2.5 pt-2 border-t border-white/10 text-[11px] text-[#c5a059] flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 flex-shrink-0" />
                      <span><strong>Physiological Benefit:</strong> {block.benefit}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHAPTER 9: PORNOGRAPHY & EXPECTATIONS */}
      <section id="life-ch9" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 9</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Pornography, Digital Stimulation, and Sexual Expectations
        </h2>
        <p>
          This subject deserves a balanced discussion. Pornography affects different people differently. The brain does not work like a phone battery that can simply be drained by too much stimulation.
        </p>
        <p>
          However, some people notice that their patterns of pornography use affect their expectations, arousal habits, relationships, or ability to stay present.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          When Digital Habits Become a Problem
        </h3>
        <ul className="space-y-1.5 pl-6 list-disc marker:text-[#c5a059] text-xs sm:text-sm">
          <li>You feel unable to control your use.</li>
          <li>You regularly need increasingly specific or intense content.</li>
          <li>It interferes with relationships or responsibilities.</li>
          <li>You feel disconnected during real-life intimacy.</li>
          <li>You use it mainly as a way to escape stress or difficult emotions.</li>
          <li>Your sexual expectations are becoming increasingly unrealistic.</li>
        </ul>
        <p>
          In these situations, taking a break may be useful. Ask yourself: <em>Are your solo sexual habits training you to rush toward orgasm rather than notice your body's gradual rise in arousal?</em>
        </p>
      </section>

      {/* CHAPTER 10: CAFFEINE & BODY WEIGHT */}
      <section id="life-ch10" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 10</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Caffeine, Body Weight, and Everyday Habits
        </h2>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8]">
          Does Caffeine Affect Sexual Performance?
        </h3>
        <p>
          Caffeine affects people differently. For some, moderate amounts improve alertness and energy. For others, too much caffeine increases anxiety, heart rate, jitters, and muscle tension.
        </p>
        <p>
          If caffeine leaves you feeling wired and anxious, taking more before intimacy is unlikely to improve your control. Pay attention to your personal response.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e6e2d8] mt-6">
          Does Excess Body Fat Matter?
        </h3>
        <p>
          Excess abdominal fat is associated with broader metabolic and cardiovascular health concerns and can influence hormone metabolism.
        </p>
        <p>
          But avoid turning this into shame. You do not need visible abs to have a healthy sex life. The goal should be improving health—not chasing an unrealistic body image:
        </p>
        <ul className="space-y-1 pl-6 list-disc marker:text-[#c5a059] text-xs sm:text-sm">
          <li>Eat mostly nutritious foods.</li>
          <li>Maintain adequate protein.</li>
          <li>Move more and strength train.</li>
          <li>Sleep well.</li>
          <li>Avoid extreme crash diets.</li>
        </ul>
      </section>

      {/* CONCLUSION */}
      <section id="life-conclusion" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Conclusion</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Build the Lifestyle, Then Build the Skill
        </h2>
        <p>
          The Art of Stamina is not a magic trick. It is not one pill, one food, one stretch, or one breathing technique.
        </p>
        <p>
          Sexual stamina is influenced by a complete system:
        </p>

        <div className="my-6 p-6 rounded-2xl bg-gradient-to-r from-[#171a26] to-[#12141f] border-l-4 border-[#c5a059] space-y-3">
          <h4 className="font-serif font-bold text-lg text-[#fbf9f4]">The Core System Interactions:</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-[#d4cfc3] list-disc pl-5 marker:text-[#c5a059]">
            <li>Your sleep affects your recovery and hormone synthesis.</li>
            <li>Your stress affects your autonomic nervous system and climax trigger.</li>
            <li>Your cardiovascular health affects pelvic blood flow and erectile capacity.</li>
            <li>Your movement habits affect hip mobility and pelvic floor freedom.</li>
            <li>Your mental habits affect how you respond to pressure.</li>
            <li>And your bedroom techniques help you use all of those systems with greater awareness.</li>
          </ul>
        </div>

        <p className="font-serif text-lg text-[#dfc58b] italic font-semibold">
          Every walk, every good night's sleep, every workout, every healthier meal, and every step away from chronic stress can become part of taking better care of yourself.
        </p>

        {/* READY TO TAKE TRAINING FURTHER CTA */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#141724] border border-[#c5a059]/40 space-y-4">
          <h3 className="font-serif font-bold text-xl text-[#fbf9f4]">
            Ready to Take Your Training Further?
          </h3>
          <p className="text-xs sm:text-sm text-[#b8b5ab] leading-relaxed">
            Lifestyle is the foundation, but practical improvement comes from combining that foundation with skills you can practice consistently. Discover how to integrate your daily habits with practical techniques for better awareness, control, and sexual confidence.
          </p>
          <div className="pt-2">
            <button
              onClick={onLockerClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c5a059] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore the Full Stamina Mastery eBook (Free PDF)</span>
            </button>
          </div>
        </div>

        {/* MEDICAL DISCLAIMER */}
        <p className="text-[11px] text-[#7d808f] italic border-t border-white/10 pt-4">
          *This article is for educational purposes and does not replace medical advice. Persistent concerns involving erections, ejaculation, pelvic pain, hormones, or other aspects of sexual health should be discussed with a qualified healthcare professional.
        </p>
      </section>

    </div>
  );
}
