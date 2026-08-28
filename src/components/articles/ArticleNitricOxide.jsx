import React, { useState } from 'react';
import { 
  Heart, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Utensils, 
  Droplet, 
  Wind, 
  ChevronDown, 
  ChevronUp, 
  Apple, 
  Zap, 
  AlertCircle, 
  Flame,
  Dumbbell
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticleNitricOxide({ post, onLockerClick }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeMealTab, setActiveMealTab] = useState(0);

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
      <section id="no-intro" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Introduction: The Often-Overlooked Role of Blood Flow
        </h2>
        <p>
          When men think about sexual stamina, they usually think about control. They think about lasting longer, managing sensation, controlling arousal, or avoiding the point where ejaculation becomes difficult to delay.
        </p>
        <p>
          Those things matter. But there is another part of sexual performance that is often overlooked: <strong>circulation</strong>.
        </p>
        <p>
          An erection is a complex biological process involving the brain, nerves, hormones, blood vessels, and smooth muscle. You can have strong desire and still struggle if your cardiovascular system is not functioning optimally. Good blood flow does not guarantee sexual stamina, but healthy circulation plays an important role in achieving and maintaining erections.
        </p>
        <p>
          One of the key molecules involved in this process is <strong>nitric oxide</strong>, often shortened to <strong>NO</strong>.
        </p>

        {/* Highlight Callout Box */}
        <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-[#171a26] to-[#12141d] border-l-4 border-[#c5a059] shadow-md">
          <p className="font-serif italic text-lg sm:text-xl text-[#fbf9f4] leading-relaxed mb-2">
            "Nitric oxide is produced naturally in the body and helps signal blood vessels to relax and widen. This process, called vasodilation, allows blood to move more freely through the circulatory system."
          </p>
          <div className="text-xs text-[#c5a059] font-semibold tracking-wider uppercase">— Bedroom IQ Cardiovascular Physiology Team</div>
        </div>

        <p>
          During sexual arousal, nitric oxide signaling is one of several important mechanisms involved in increasing blood flow to erectile tissue. That is why nutrition and lifestyle deserve a place in any serious discussion about male sexual wellness.
        </p>
        <p>
          This does not mean that eating a beetroot salad will magically transform your performance overnight. Sexual function is influenced by many factors, including cardiovascular health, stress, sleep, medications, hormones, relationship dynamics, and psychological wellbeing.
        </p>
        <p>
          What nutrition can do is <strong>support the systems your body already uses</strong>.
        </p>
        <p>
          In this guide, we will explore the connection between nitric oxide, blood flow, food, exercise, hydration, and sexual stamina. You will learn about nitrate-rich foods, the difference between L-citrulline and L-arginine, habits that may interfere with nitric oxide pathways, and practical ways to build a more circulation-friendly lifestyle.
        </p>
        <p className="text-sm bg-[#141622] p-4 rounded-xl border border-white/10 text-[#9e9fad]">
          <strong className="text-[#dfc58b]">Core Philosophy:</strong> The goal is not to chase a miracle food. The goal is to support the entire biological system.
        </p>
      </section>

      {/* CHAPTER 1: VASODILATION & NITRIC OXIDE */}
      <section id="no-ch1" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 1</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Understanding Nitric Oxide and Vasodilation
        </h2>
        <p>
          To understand why nitric oxide matters, you first need to understand what happens inside a blood vessel.
        </p>
        <p>
          The inside of your blood vessels is lined by a thin layer of cells known as the <strong>endothelium</strong>. For many years, scientists thought this layer was mainly a passive barrier. Today, we know it plays an active role in regulating vascular function.
        </p>
        <p>
          One of its important jobs is helping regulate when blood vessels relax and when they constrict. Nitric oxide is one of the signaling molecules involved in this process.
        </p>

        {/* Featured Image 2: Vasodilation 3D Diagram */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-[#13151f]">
          <img 
            src={post.images.vasodilation} 
            alt="3D medical visualization of endothelial nitric oxide signaling and blood vessel vasodilation"
            referrerPolicy="no-referrer"
            className="w-full h-[280px] sm:h-[380px] object-cover object-center"
          />
          <div className="p-3.5 bg-[#10121a] border-t border-white/10 flex items-center justify-between text-xs text-[#8e909a]">
            <span>Vascular physiology: Endothelial nitric oxide synthase (eNOS) triggering smooth muscle vasodilation.</span>
            <span className="text-[10px] text-[#c5a059] uppercase tracking-wider font-semibold">Vascular Science</span>
          </div>
        </div>

        <h3 className="font-serif text-xl font-bold text-[#dfc58b] mt-6">
          How the Process Works
        </h3>
        <p>
          During sexual arousal, signals from the nervous system contribute to a chain of events that encourages smooth muscle in erectile tissue to relax. Nitric oxide is involved in activating pathways that allow increased blood flow into the penis.
        </p>
        <p>
          As blood enters the erectile tissue, pressure changes help create and maintain an erection. This is why blood vessel health matters.
        </p>
        <p>
          If the vascular system is not functioning well, it can become more difficult to achieve or maintain a reliable erection. That is also one reason erectile difficulties can sometimes be associated with broader cardiovascular health concerns.
        </p>
        <p className="text-sm bg-[#161826] p-4 rounded-xl border border-white/10 text-[#9e9fad]">
          <strong className="text-[#dfc58b]">Clinical Note:</strong> It is important, however, not to oversimplify this relationship. Erectile dysfunction can have many possible causes, and persistent symptoms should not be self-diagnosed as a nitric oxide problem.
        </p>

        <h3 className="font-serif text-xl font-bold text-[#dfc58b] mt-6">
          The Bigger Picture of Sexual Stamina
        </h3>
        <p>
          Good circulation supports erections, but stamina involves more than blood flow.
        </p>
        <p>
          A man may have excellent cardiovascular health and still struggle with early ejaculation because of anxiety, sensitivity, learned habits, or pelvic floor tension. Likewise, someone may have good arousal control but experience difficulty maintaining an erection because of stress, fatigue, medication effects, or vascular issues.
        </p>

        {/* 4 Pillars of Stamina System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-[#141622] border border-[#c5a059]/40">
            <div className="text-xs font-mono text-[#c5a059] uppercase">Pillar 1: Hardware</div>
            <div className="font-serif font-bold text-base text-[#fbf9f4] mt-1">Blood Flow &amp; Nitric Oxide</div>
            <p className="text-xs text-[#b8b5ab] mt-1.5">Delivers oxygen and vascular pressure to support firm erections.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#141622] border border-[#c5a059]/40">
            <div className="text-xs font-mono text-[#c5a059] uppercase">Pillar 2: Signal Regulation</div>
            <div className="font-serif font-bold text-base text-[#fbf9f4] mt-1">Nervous System Balance</div>
            <p className="text-xs text-[#b8b5ab] mt-1.5">Regulates sympathetic vs. parasympathetic tone during arousal.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#141622] border border-[#c5a059]/40">
            <div className="text-xs font-mono text-[#c5a059] uppercase">Pillar 3: Control Mechanism</div>
            <div className="font-serif font-bold text-base text-[#fbf9f4] mt-1">Pelvic Floor Awareness</div>
            <p className="text-xs text-[#b8b5ab] mt-1.5">Allows voluntary relaxation of the PC muscle to delay climax reflexes.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#141622] border border-[#c5a059]/40">
            <div className="text-xs font-mono text-[#c5a059] uppercase">Pillar 4: Psychological State</div>
            <div className="font-serif font-bold text-base text-[#fbf9f4] mt-1">Mindset &amp; Presence</div>
            <p className="text-xs text-[#b8b5ab] mt-1.5">Eliminates the "spectator" performance anxiety loop during intimacy.</p>
          </div>
        </div>

        <p>
          Nutrition is one important piece of that larger biological puzzle.
        </p>
      </section>

      {/* CHAPTER 2: THE BIG THREE FOODS */}
      <section id="no-ch2" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 2</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          The Big Three Foods for Supporting Nitric Oxide Pathways
        </h2>
        <p>
          There is no single “best food” for sexual stamina. However, some foods contain compounds that can support nitric oxide production or the pathways associated with healthy blood flow.
        </p>

        {/* Big Three Breakdown Cards */}
        <div className="space-y-4 my-8">
          {post.bigThreeFoods.map((food, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#151724] border border-[#c5a059]/40 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="font-serif font-bold text-lg text-[#fbf9f4] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#202436] text-[#dfc58b] text-xs flex items-center justify-center font-mono">{idx + 1}</span>
                  <span>{food.name}</span>
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#221f2d] text-[#dfc58b] text-xs font-semibold">{food.nutrient}</span>
              </div>
              <p className="text-sm text-[#cbc7be] mb-3 leading-relaxed">
                <strong className="text-[#dfc58b]">Mechanism:</strong> {food.mechanism}
              </p>
              <div className="p-3 bg-[#0f1118] rounded-xl border border-white/5 text-xs text-[#b8b5ab]">
                <strong className="text-white">Culinary Integration:</strong> {food.culinaryUse}
              </div>
            </div>
          ))}
        </div>

        <p>
          Arugula, spinach, and other leafy greens can also provide dietary nitrates. These foods are not only relevant to nitric oxide pathways; they also contain a range of vitamins, minerals, and plant compounds that support general cardiovascular health.
        </p>
        <p>
          Rather than searching for one “superfood,” aim to eat a variety of vegetables regularly. <strong>Consistency is usually more important than one perfect meal.</strong>
        </p>
      </section>

      {/* CHAPTER 3: HABITS AGAINST BLOOD FLOW */}
      <section id="no-ch3" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 3</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Habits That Can Work Against Healthy Blood Flow
        </h2>
        <p>
          Improving nitric oxide pathways is not only about what you add to your diet. It is also worth looking at habits that can negatively affect cardiovascular health.
        </p>

        <h3 className="font-serif text-xl font-bold text-[#dfc58b] mt-6">
          1. Smoking and Vascular Health
        </h3>
        <p>
          Smoking is strongly associated with damage to blood vessels and poorer cardiovascular health. Nicotine and other chemicals can affect circulation and vascular function.
        </p>
        <p>
          If sexual performance is one of your motivations for improving your health, smoking cessation may be far more important than finding another exotic supplement.
        </p>

        <h3 className="font-serif text-xl font-bold text-[#dfc58b] mt-6">
          2. High Blood Sugar and Poor Dietary Patterns
        </h3>
        <p>
          Frequently consuming large amounts of highly processed, sugary foods can contribute to poor metabolic health over time.
        </p>
        <p>
          The occasional dessert is not the enemy. The bigger concern is a long-term pattern of poor nutrition, excessive calorie intake, inactivity, and unstable blood sugar. A healthier approach focuses on the overall quality of your diet:
        </p>
        <ul className="space-y-2 text-sm text-[#eae8e3] my-4">
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c5a059]" /> More vegetables and fruits</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c5a059]" /> Adequate quality protein</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c5a059]" /> Fibre-rich whole grains</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c5a059]" /> Healthy omega fats and olive oil</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c5a059]" /> Fewer heavily processed industrial foods</li>
        </ul>
        <p>
          Your blood vessels do not judge your health based on one meal. They respond to patterns over time.
        </p>

        <h3 className="font-serif text-xl font-bold text-[#dfc58b] mt-6">
          3. Chronic Stress
        </h3>
        <p>
          When you are constantly anxious or under pressure, your body may spend more time in a heightened state of alertness. This can affect sleep, blood pressure, muscle tension, and sexual desire.
        </p>
        <p>
          Performance anxiety can become particularly frustrating because the fear of something going wrong may contribute to the very problem you are trying to avoid.
        </p>
      </section>

      {/* CHAPTER 4: CITRULLINE VS ARGININE */}
      <section id="no-ch4" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 4</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          L-Citrulline vs. L-Arginine
        </h2>
        <p>
          These two amino acids are frequently discussed in nitric oxide supplements.
        </p>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-xl bg-[#141620] border border-white/10">
            <div className="font-serif font-bold text-base text-[#dfc58b] mb-1">L-Arginine</div>
            <div className="text-xs text-[#8e909a] uppercase tracking-wider mb-3">Direct Precursor</div>
            <p className="text-sm text-[#b8b5ab] leading-relaxed">
              Directly involved in the biochemical pathway used to produce nitric oxide. However, much of dietary L-arginine is broken down by the enzyme arginase in the liver before reaching systemic circulation (low oral bioavailability).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#161a28] border border-[#c5a059]/40 shadow-inner">
            <div className="font-serif font-bold text-base text-[#fbf9f4] mb-1">L-Citrulline</div>
            <div className="text-xs text-[#c5a059] uppercase tracking-wider font-semibold mb-3">Superior Bioavailability</div>
            <p className="text-sm text-[#eae8e3] leading-relaxed">
              Bypasses liver arginase degradation and is efficiently converted to L-arginine by the kidneys. Clinical research indicates oral L-citrulline raises plasma arginine levels more reliably than taking L-arginine directly.
            </p>
          </div>
        </div>

        <p>
          The important point is that supplements are not automatically necessary. Before adding them to your routine, consider your existing diet, any medications you take, your blood pressure, and existing health conditions.
        </p>
        <p className="text-sm bg-[#161824] p-4 rounded-xl border border-white/10 text-[#9e9fad]">
          <strong className="text-[#dfc58b]">Medical Caution:</strong> If you have cardiovascular disease, kidney problems, low blood pressure, or take prescription medications (such as nitrates or PDE5 inhibitors), speak with a healthcare professional before experimenting with nitric-oxide-related supplements. <em>More is not always better.</em>
        </p>
      </section>

      {/* CHAPTER 5: PERFORMANCE-FRIENDLY NUTRITION DAY */}
      <section id="no-ch5" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 5</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          A Practical Day of Performance-Friendly Nutrition
        </h2>
        <p>
          Instead of following an extreme “24-hour stamina diet,” focus on a balanced day of eating that supports energy, cardiovascular health, and recovery.
        </p>

        {/* Featured Image 3: Performance Meal Bowl */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-[#13151f]">
          <img 
            src={post.images.meal} 
            alt="Healthy performance meal bowl with wild salmon, spinach, beets, avocado, and whole grains"
            referrerPolicy="no-referrer"
            className="w-full h-[280px] sm:h-[380px] object-cover object-center"
          />
          <div className="p-3.5 bg-[#10121a] border-t border-white/10 flex items-center justify-between text-xs text-[#8e909a]">
            <span>Cardiovascular nutrition: Rich in wild omega-3s, dietary nitrates, polyphenols, and micronutrients.</span>
            <span className="text-[10px] text-[#c5a059] uppercase tracking-wider font-semibold">Nutrition Blueprint</span>
          </div>
        </div>

        {/* Interactive Meal Plan Visualizer */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#181a28] to-[#10121b] border border-[#c5a059]/40 shadow-xl my-8">
          <div className="flex items-center justify-between mb-4">
            <span className="font-serif font-bold text-sm tracking-widest text-[#dfc58b] uppercase">Sample Performance Protocol</span>
            <span className="text-xs text-[#8e909a]">Whole food foundation</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {post.mealPlan.map((m, idx) => (
              <button
                key={m.meal}
                onClick={() => setActiveMealTab(idx)}
                className={`py-2.5 px-2 rounded-xl text-center font-serif font-bold text-xs transition-all cursor-pointer border ${
                  activeMealTab === idx
                    ? 'bg-[#c5a059] text-black border-white shadow-md'
                    : 'bg-[#141622] border-white/10 text-[#cbc7be] hover:bg-[#1e2232]'
                }`}
              >
                {m.meal}
              </button>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-[#12141e] border border-white/10 space-y-3">
            <div className="font-serif font-bold text-base text-[#fbf9f4]">
              {post.mealPlan[activeMealTab].title}
            </div>
            <ul className="space-y-2 text-sm text-[#cbc7be]">
              {post.mealPlan[activeMealTab].items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p>
          The goal is not to eat like you are preparing for a laboratory experiment. It is to give your body consistent access to the nutrients it needs.
        </p>
      </section>

      {/* CHAPTER 6: FLAVONOIDS & DARK CHOCOLATE */}
      <section id="no-ch6" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 6</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Flavonoids and Dark Chocolate
        </h2>
        <p>
          Dark chocolate is another food often associated with vascular health because cocoa contains <strong>flavonoids</strong>.
        </p>
        <p>
          These plant compounds have been studied for their potential effects on blood vessel function and cardiovascular health. However, there is an important difference between a small serving of high-cocoa dark chocolate and eating large amounts of sugar-filled candy.
        </p>
        <p>
          If you enjoy dark chocolate, choose a product with a <strong>higher cocoa content (80%+)</strong> and consume it in moderation. You do not need to treat it like a medicine. A healthy diet should still be built around whole foods rather than relying on one “performance snack.”
        </p>
      </section>

      {/* CHAPTER 7: HYDRATION */}
      <section id="no-ch7" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 7</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Hydration and Physical Performance
        </h2>
        <p>
          Hydration affects how your body functions, particularly during exercise and physical activity. Being dehydrated can contribute to fatigue, headaches, reduced exercise performance, and an overall feeling of low energy.
        </p>
        <p>
          However, you do not need to force yourself to drink an arbitrary amount of water every day. Your hydration needs can vary based on:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4 text-xs font-medium text-center">
          <div className="p-3 bg-[#141622] rounded-xl border border-white/10">Body Size &amp; Composition</div>
          <div className="p-3 bg-[#141622] rounded-xl border border-white/10">Climate &amp; Humidity</div>
          <div className="p-3 bg-[#141622] rounded-xl border border-white/10">Daily Physical Activity</div>
          <div className="p-3 bg-[#141622] rounded-xl border border-white/10">Dietary Mineral Balance</div>
        </div>
        <p>
          A simple approach is to drink water regularly, pay attention to thirst, and increase fluids appropriately during hot weather or heavy exercise. Fruits and vegetables also contribute significantly to cellular hydration.
        </p>
        <p>
          Sexual stamina is partly physical, so taking care of your general energy and recovery can make a difference. You are unlikely to feel at your best after several nights of poor sleep, dehydration, heavy alcohol consumption, and no physical activity—regardless of how many nitric-oxide foods you eat.
        </p>
      </section>

      {/* CHAPTER 8: NASAL BREATHING */}
      <section id="no-ch8" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 8</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Breathing and the Nasal Connection
        </h2>
        <p>
          The body can produce nitric oxide in the nasal and sinus passages, which has led to interest in the role of nasal breathing.
        </p>
        <p>
          When possible, breathing comfortably through the nose is a normal and useful part of healthy breathing. During sexual activity, breathing often becomes shallow as arousal increases.
        </p>
        <p>
          Learning to maintain calmer, more controlled breathing can support relaxation and body awareness.
        </p>

        {/* Breathing Tactical Cue */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#171a26] to-[#12141c] border border-[#c5a059]/40 my-6">
          <div className="flex items-center gap-2 text-[#dfc58b] font-serif font-bold text-sm tracking-wider uppercase mb-3">
            <Wind className="w-4 h-4 text-[#c5a059]" />
            <span>Nasal Breath &amp; Parasympathetic Anchor</span>
          </div>
          <ul className="space-y-2 text-sm text-[#eae8e3]">
            <li>1. Take a comfortable, silent breath in through the nose.</li>
            <li>2. Allow your lower abdomen to expand naturally.</li>
            <li>3. Exhale slowly without forcing air out.</li>
            <li>4. Avoid holding your breath as arousal rises.</li>
            <li>5. Relax your shoulders, jaw, and pelvic floor.</li>
          </ul>
        </div>

        <p>
          Breathing will not eliminate sexual arousal, and it should not be treated as a guaranteed method for preventing ejaculation. But it can be a useful tool for reducing unnecessary tension and staying connected to your body.
        </p>
      </section>

      {/* CHAPTER 9: EXERCISE & ENDOTHELIAL HEALTH */}
      <section id="no-ch9" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 9</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Exercise and Endothelial Health
        </h2>
        <p>
          If you want to support circulation, exercise deserves serious attention. Regular physical activity benefits cardiovascular health and can support healthy blood vessel function.
        </p>

        {/* Featured Image 4: Cardio Endurance & Training */}
        <div className="my-8 rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-[#13151f]">
          <img 
            src={post.images.cardio} 
            alt="Athletic cardiovascular outdoor endurance training at sunrise"
            referrerPolicy="no-referrer"
            className="w-full h-[280px] sm:h-[380px] object-cover object-center"
          />
          <div className="p-3.5 bg-[#10121a] border-t border-white/10 flex items-center justify-between text-xs text-[#8e909a]">
            <span>Cardiovascular conditioning: Enhances systemic shear stress, promoting natural endothelial nitric oxide release.</span>
            <span className="text-[10px] text-[#c5a059] uppercase tracking-wider font-semibold">Endothelial Conditioning</span>
          </div>
        </div>

        <p>
          You do not need to become a professional athlete. A well-rounded routine may include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 text-sm">
          <div className="p-4 rounded-xl bg-[#141622] border border-white/10">
            <strong className="text-[#dfc58b]">Regular Daily Walking:</strong> 7,000–10,000 steps daily promotes steady circulatory flow and metabolic health.
          </div>
          <div className="p-4 rounded-xl bg-[#141622] border border-white/10">
            <strong className="text-[#dfc58b]">Resistance Training:</strong> 2–4 sessions per week supports testosterone regulation and muscle insulin sensitivity.
          </div>
          <div className="p-4 rounded-xl bg-[#141622] border border-white/10">
            <strong className="text-[#dfc58b]">Zone 2 Cardio:</strong> Moderate aerobic running/cycling enhances cardiac output and arterial compliance.
          </div>
          <div className="p-4 rounded-xl bg-[#141622] border border-white/10">
            <strong className="text-[#dfc58b]">Hip &amp; Pelvic Mobility:</strong> Prevents muscular bracing and hip tightness caused by prolonged sitting.
          </div>
        </div>
        <p>
          The best exercise program is usually the one you can maintain. Before beginning a new intense exercise program, especially if you have been inactive or have a medical condition, consult a qualified healthcare professional.
        </p>
      </section>

      {/* CHAPTER 10: FAQS */}
      <section id="no-ch10" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <div className="inline-block text-xs font-serif font-bold text-[#c5a059] tracking-widest uppercase">Chapter 10</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Frequently Asked Questions
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
      <section id="no-conclusion" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Conclusion: Build the System, Not a Shortcut
        </h2>
        <p>
          Sexual stamina is not created by one food, one supplement, or one exercise. It is built through the interaction of your cardiovascular health, nervous system, pelvic awareness, mindset, physical fitness, and lifestyle.
        </p>
        <p>
          Nitric oxide is an important part of the blood-flow system, and a diet rich in vegetables, fruits, leafy greens, and other nutrient-dense foods can support the body's overall health.
        </p>
        <p>
          <strong>But the biggest lesson is to stop looking for magic.</strong> You do not need a mysterious “forbidden foods” list. You need sustainable habits.
        </p>
        <p>
          Eat a varied diet. Move your body. Manage stress. Get enough sleep. Stay hydrated. Pay attention to your cardiovascular health. Avoid habits that damage your circulation.
        </p>
        <p>
          Then combine that foundation with the breathing, arousal-awareness, and pelvic-control techniques that help you understand your own body.
        </p>
        <p className="text-[#dfc58b] font-serif italic text-lg">
          The Art of Stamina is not about forcing your body to perform. It is about giving your body the conditions it needs to function at its best.
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
            Ready to Take Your Training Further?
          </h3>

          <p className="text-sm sm:text-base text-[#cbc7be] font-light leading-relaxed">
            Nutrition provides the foundation, but lasting control comes from combining circulation support with pelvic floor awareness and arousal pacing. Download the complete 68-page book <strong>"The Art of Stamina"</strong> now for free.
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
