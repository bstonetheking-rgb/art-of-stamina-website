import React, { useState } from 'react';
import { 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  Heart,
  Moon,
  Zap,
  Clock,
  BatteryCharging,
  Sliders,
  Scale,
  ShieldCheck,
  Dna,
  Dumbbell,
  Flame,
  Info,
  TrendingUp,
  Award,
  Layers,
  ThermometerSun,
  Pill,
  Sun
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticleEndocrine({ post, onLockerClick }) {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Interactive Endocrine Assessment State
  const [sleepHours, setSleepHours] = useState(7);
  const [stressLevel, setStressLevel] = useState('moderate'); // 'low' | 'moderate' | 'high'
  const [trainingType, setTrainingType] = useState('compound'); // 'none' | 'cardioOnly' | 'compound' | 'overtraining'
  const [nutritionScore, setNutritionScore] = useState('balanced'); // 'lowNutrient' | 'balanced' | 'optimized'

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Calculate estimated endocrine axis health score
  const calculateScore = () => {
    let score = 50;
    
    // Sleep impact
    if (sleepHours >= 7 && sleepHours <= 9) score += 20;
    else if (sleepHours === 6) score += 10;
    else score -= 15;

    // Stress impact
    if (stressLevel === 'low') score += 15;
    else if (stressLevel === 'moderate') score += 5;
    else score -= 15;

    // Training impact
    if (trainingType === 'compound') score += 15;
    else if (trainingType === 'cardioOnly') score += 5;
    else if (trainingType === 'overtraining') score -= 10;
    else score -= 5;

    // Nutrition impact
    if (nutritionScore === 'optimized') score += 15;
    else if (nutritionScore === 'balanced') score += 10;
    else score -= 10;

    return Math.max(20, Math.min(98, score));
  };

  const currentScore = calculateScore();

  return (
    <div className="prose prose-invert max-w-none space-y-12 text-[#cbc7be] leading-relaxed text-base sm:text-[17px]">
      
      {/* TARGET KEYWORDS BADGES */}
      <div className="p-4 rounded-xl bg-[#12141d] border border-white/10 text-xs text-[#8e909a] flex flex-wrap items-center gap-2">
        <span className="text-[#dfc58b] font-semibold uppercase tracking-wider">Clinical Focus:</span>
        {post.targetKeywords.split(',').map((kw, i) => (
          <span key={i} className="px-2.5 py-1 rounded-md bg-[#181a26] text-[#b8b5ab] border border-white/5">
            {kw.trim()}
          </span>
        ))}
      </div>

      {/* INTRODUCTION */}
      <section id="endocrine-intro" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Introduction: The Hormonal Foundation Behind Stamina
        </h2>
        <p>
          When most men think about improving sexual stamina, they immediately focus on technique.
        </p>
        <p>
          They think about breathing exercises, pelvic floor training, positions, supplements, or trying to find a secret trick that will help them last longer.
        </p>
        <p>
          Those things may play a role for some people. But there is another part of the picture that is often overlooked: your overall hormonal and physical health.
        </p>
        <p>
          Your body does not separate sexual health from the rest of your life.
        </p>
        <p>
          The way you sleep, train, eat, recover, manage stress, and care for your general health can all influence your energy, mood, libido, and sexual function.
        </p>
        <p className="text-lg font-serif font-bold text-[#dfc58b]">
          And at the center of many of these conversations is testosterone.
        </p>
        <p>
          Testosterone is often discussed online as though it were a magic “manliness hormone.” That is an oversimplification. It is an important hormone, but it is not the only factor that determines sexual performance, confidence, muscle growth, or masculinity.
        </p>
        <p>
          Still, testosterone does play important roles in male sexual desire, reproductive function, body composition, and overall wellbeing.
        </p>
        <p>
          When testosterone levels are clinically low, some men may experience symptoms such as reduced libido, lower energy, changes in mood, or difficulties with sexual function. However, sexual stamina is not determined by testosterone alone. A man with normal testosterone can still struggle with anxiety, stress, poor sleep, relationship issues, cardiovascular health, or learned arousal patterns.
        </p>
        <p>
          That is why the <strong>Testosterone-Stamina Axis</strong> should not be viewed as a single hormone switch.
        </p>
        <p>
          It is better understood as part of a larger system.
        </p>
        <p>
          Your brain communicates with your nervous system. Your hormones interact with your tissues. Your cardiovascular system supports blood flow. Your sleep influences recovery. Your stress levels can affect mood and desire.
        </p>
        <p>
          Everything is connected.
        </p>
        <p>
          The goal, then, is not to become obsessed with chasing the highest possible testosterone number. The goal is to support healthy hormonal function.
        </p>
        <p>
          This guide explores the broader <strong>Endocrine Architecture</strong> behind male vitality. We will look at testosterone, stress, cortisol, free versus total testosterone, SHBG, nutrition, strength training, sleep, estrogen balance, environmental exposures, and the importance of using real medical testing instead of guessing.
        </p>

        {/* Highlight Quote Box */}
        <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-[#171a26] to-[#12141d] border-l-4 border-[#c5a059] shadow-md">
          <p className="font-serif italic text-lg sm:text-xl text-[#fbf9f4] leading-relaxed mb-2">
            "Real hormonal optimization is not about becoming an extreme biohacker. It is about giving your body the conditions it needs to function at its highest biological baseline."
          </p>
          <div className="text-xs text-[#c5a059] font-semibold tracking-wider uppercase">— Art of Stamina Endocrine &amp; Metabolic Lab</div>
        </div>

        {/* INLINE IMAGE 1: HERO */}
        {post.images?.hero && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.hero} 
              alt="Male endocrine vitality, hormonal architecture, and androgen health"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[460px] object-cover"
            />
            <div className="p-3.5 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 1: The biological architecture of male endocrine vitality and baseline autonomic stability</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Endocrine Blueprint</span>
            </div>
          </div>
        )}
      </section>

      {/* CHAPTER 1 */}
      <section id="endocrine-ch1" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 1: Testosterone, the Brain, and Sexual Drive
        </h2>
        <p>
          Testosterone affects more than muscles.
        </p>
        <p>
          It is also involved in the complex biological systems that influence sexual desire and arousal.
        </p>
        <p>
          Your brain plays a major role in sexual response. Hormones, emotions, sensory information, memories, attraction, stress, and physical stimulation all interact to influence what happens.
        </p>
        <p>
          Testosterone is one part of this process.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Role of Androgen Receptors
        </h3>
        <p>
          Testosterone works by interacting with structures known as <strong>androgen receptors</strong>, which are found throughout the body.
        </p>
        <p>
          These receptors help cells respond to androgens, including testosterone. The effects are not limited to one organ. Testosterone influences tissues throughout the body, including the brain, muscles, bones, and reproductive system.
        </p>
        <p>
          When hormone levels are healthy, the body's normal systems can function as intended. But when testosterone is genuinely low, some men may notice changes in libido, energy, motivation, or sexual interest.
        </p>
        <p>
          That does not mean every difficult sexual experience is caused by low testosterone. A man can have completely normal hormone levels and still struggle with performance anxiety. Likewise, someone with low testosterone may not experience every possible symptom. This is why symptoms and laboratory results should always be evaluated together.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Testosterone and Blood Flow
        </h3>
        <p>
          Healthy sexual function also depends heavily on blood flow. An erection is a vascular event involving blood vessels, smooth muscle, nerves, and chemical signaling.
        </p>
        <p>
          Nitric oxide is one of the important molecules involved in this process because it helps blood vessels relax and dilate. Testosterone may influence aspects of the systems involved in erectile physiology, but it is inaccurate to think of it as a direct on-off switch for erections.
        </p>
        <p>
          Low testosterone does not automatically mean erectile dysfunction, and high testosterone does not guarantee perfect sexual performance. Cardiovascular health, diabetes, smoking, medication use, psychological factors, and many other conditions can affect erectile function.
        </p>
        <div className="p-4 rounded-xl bg-[#141624] border-l-2 border-[#dfc58b] text-[#fbf9f4] font-serif italic text-base">
          “Healthy hormones support the system, but they are only one part of the system.”
        </div>
      </section>

      {/* CHAPTER 2 */}
      <section id="endocrine-ch2" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 2: Stress, Cortisol, and the Stamina Problem
        </h2>
        <p>
          If testosterone represents one side of the hormonal conversation, <strong>cortisol</strong> is often discussed on the other.
        </p>
        <p>
          Cortisol is commonly called the “stress hormone,” but cortisol itself is not the enemy. You need cortisol. It helps regulate metabolism, immune function, blood pressure, and the body's response to acute challenges.
        </p>
        <p>
          The problem is not having cortisol. The problem is <strong>chronic unmanaged stress</strong>.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          When Stress Never Switches Off
        </h3>
        <p>
          Your body is designed to respond to acute challenges: a stressful situation occurs, your body reacts, the situation passes, and your system eventually returns toward baseline.
        </p>
        <p>
          Modern stress, however, can be relentless: difficult emails, financial pressure, relationship tension, poor sleep, constant notifications, and long work hours. You may not be running from a physical predator, but your sympathetic nervous system spends much of the day in an elevated state of alert.
        </p>
        <p>
          Chronic stress can affect sleep, mood, energy, and sexual desire. It also contributes to anxiety during intimacy. And for many men, this is where the stamina problem becomes psychological as much as physical.
        </p>

        <div className="p-5 rounded-2xl bg-[#141624] border border-rose-500/20 space-y-3 font-mono text-xs sm:text-sm text-[#dedad2]">
          <div className="text-rose-400 font-semibold uppercase tracking-wider">The Performance Anxiety Loop:</div>
          <div>• “Am I going to perform well tonight?”</div>
          <div>• “What if I finish too early and disappoint my partner?”</div>
          <div>• “What is my partner thinking right now?”</div>
          <div className="text-xs text-[#8e909a] italic pt-1 border-t border-white/5">
            This internal dialogue triggers adrenaline and cortisol, shifting autonomic tone toward sympathetic dominance and accelerating ejaculatory reflex timing.
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Testosterone and Cortisol Are Not a Simple See-Saw
        </h3>
        <p>
          It is tempting to say that every increase in cortisol causes testosterone to fall and every reduction in stress automatically boosts testosterone. Human endocrinology is far more nuanced.
        </p>
        <p>
          For example, intense exercise can temporarily increase cortisol as part of a normal physiological adaptation response. That does not mean exercise is harmful. The real concern is prolonged, unmanaged stress combined with inadequate recovery.
        </p>
        <p>
          Instead of trying to “eliminate cortisol,” focus on improving your capacity for recovery: sleep, movement, time away from screens, social connection, relaxation, and healthy boundaries.
        </p>
      </section>

      {/* CHAPTER 3 */}
      <section id="endocrine-ch3" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 3: Total Testosterone vs. Free Testosterone &amp; SHBG
        </h2>
        <p>
          One of the most common mistakes men make when reviewing hormone tests is focusing on a single number.
        </p>
        <p>
          They see their total testosterone level and immediately decide they are either completely healthy or in crisis. But hormones are more complicated than a single laboratory readout.
        </p>

        {/* INLINE IMAGE 2: AXIS INFOGRAPHIC */}
        {post.images?.axisChart && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.axisChart} 
              alt="Testosterone-Stamina Axis showing Total Testosterone, Free Testosterone, SHBG, and Cortisol interactions"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 2: The Endocrine Ratio: Total Testosterone, SHBG Binding Affinity, Free Bioavailable T, and Cortisol HPA Axis</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Clinical Biomarkers</span>
            </div>
          </div>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          What Is Total Testosterone?
        </h3>
        <p>
          <strong>Total testosterone</strong> refers to the entire pool of testosterone circulating in the bloodstream:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#dedad2]">
          <li><strong>SHBG-Bound (~40–65%):</strong> Tightly bound to Sex Hormone-Binding Globulin and generally not readily bioavailable to cellular receptors.</li>
          <li><strong>Albumin-Bound (~30–50%):</strong> Loosely bound to albumin proteins and can dissociate to become bioavailable.</li>
          <li><strong>Free Testosterone (~1–3%):</strong> Unbound fraction circulating freely in plasma, immediately accessible to androgen receptors.</li>
        </ul>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Understanding SHBG (Sex Hormone-Binding Globulin)
        </h3>
        <p>
          SHBG is a liver-produced glycoprotein that binds sex hormones. Its concentration influences how testosterone values are interpreted.
        </p>
        <p>
          Two men with identical total testosterone of 650 ng/dL may experience completely different biological androgen signaling if one has high SHBG (yielding low free T) while the other has moderate SHBG (yielding optimal free T).
        </p>
        <p>
          This is why comprehensive medical evaluation looks beyond a single metric to include Total T, Free T, SHBG, Albumin, LH, FSH, Prolactin, and Thyroid panels.
        </p>
      </section>

      {/* INTERACTIVE ENDOCRINE ASSESSMENT TERMINAL */}
      <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#161928] via-[#121420] to-[#0e1017] border-2 border-[#c5a059]/40 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
              <Dna className="w-4 h-4 text-[#c5a059]" />
              <span>Diagnostic Terminal</span>
            </div>
            <h4 className="font-serif font-bold text-xl text-[#fbf9f4]">
              Hormonal Architecture &amp; Vitality Calculator
            </h4>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-[#181a26] border border-white/10 text-xs font-mono text-[#dfc58b]">
            Baseline Score: <span className="font-bold text-[#fbf9f4]">{currentScore}/100</span>
          </div>
        </div>

        {/* Sliders and Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs text-[#cbc7be]">
          
          {/* Sleep Hours Slider */}
          <div className="p-4 rounded-xl bg-[#141624] border border-white/5 space-y-2">
            <div className="flex justify-between items-center text-[#dedad2] font-semibold">
              <span className="flex items-center gap-1.5"><Moon className="w-3.5 h-3.5 text-[#c5a059]" /> Daily Sleep Duration:</span>
              <span className="text-[#dfc58b] font-mono">{sleepHours} Hours / Night</span>
            </div>
            <input 
              type="range" 
              min="4" 
              max="10" 
              step="1"
              value={sleepHours}
              onChange={(e) => setSleepHours(Number(e.target.value))}
              className="w-full accent-[#c5a059] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#8e909a]">
              <span>4 hrs (Severe Deficit)</span>
              <span>7-9 hrs (Optimal)</span>
              <span>10 hrs</span>
            </div>
          </div>

          {/* Stress Level */}
          <div className="p-4 rounded-xl bg-[#141624] border border-white/5 space-y-2">
            <div className="flex justify-between items-center text-[#dedad2] font-semibold">
              <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-[#c5a059]" /> Chronic Stress Burden:</span>
              <span className="text-[#dfc58b] font-mono capitalize">{stressLevel}</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              {['low', 'moderate', 'high'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setStressLevel(lvl)}
                  className={`py-1.5 px-2 rounded-lg text-center font-medium capitalize transition-all cursor-pointer ${
                    stressLevel === lvl 
                      ? 'bg-[#c5a059] text-black font-bold shadow' 
                      : 'bg-[#181a26] text-[#8e909a] hover:text-[#dedad2]'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Training Modality */}
          <div className="p-4 rounded-xl bg-[#141624] border border-white/5 space-y-2">
            <div className="flex justify-between items-center text-[#dedad2] font-semibold">
              <span className="flex items-center gap-1.5"><Dumbbell className="w-3.5 h-3.5 text-[#c5a059]" /> Physical Training Pattern:</span>
            </div>
            <select
              value={trainingType}
              onChange={(e) => setTrainingType(e.target.value)}
              className="w-full p-2 rounded-lg bg-[#181a28] border border-white/10 text-xs text-[#dedad2] focus:outline-none focus:border-[#c5a059]"
            >
              <option value="compound">Compound Heavy Resistance (Squat, Deadlift, Press + Rest)</option>
              <option value="cardioOnly">Moderate Cardiovascular Only</option>
              <option value="none">Sedentary (No regular physical stimulus)</option>
              <option value="overtraining">Excessive Overtraining (Daily high-volume without recovery)</option>
            </select>
          </div>

          {/* Nutrition Quality */}
          <div className="p-4 rounded-xl bg-[#141624] border border-white/5 space-y-2">
            <div className="flex justify-between items-center text-[#dedad2] font-semibold">
              <span className="flex items-center gap-1.5"><Sun className="w-3.5 h-3.5 text-[#c5a059]" /> Micronutrient &amp; Fat Intake:</span>
            </div>
            <select
              value={nutritionScore}
              onChange={(e) => setNutritionScore(e.target.value)}
              className="w-full p-2 rounded-lg bg-[#181a28] border border-white/10 text-xs text-[#dedad2] focus:outline-none focus:border-[#c5a059]"
            >
              <option value="optimized">High-Nutrient (Adequate Zinc, Magnesium, Vit D3, Healthy Fats)</option>
              <option value="balanced">Standard Balanced Whole-Food Diet</option>
              <option value="lowNutrient">Ultra-Processed / Very Low Fat / Severe Caloric Deficit</option>
            </select>
          </div>

        </div>

        {/* Diagnostic Output Gauge */}
        <div className="p-5 rounded-2xl bg-[#0f1118] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs text-[#dfc58b] font-semibold uppercase tracking-wider">Endocrine Resilience Index</div>
            <div className="font-serif font-bold text-lg text-[#fbf9f4]">
              {currentScore >= 80 ? 'Optimal Hormonal & Recovery Environment' : currentScore >= 60 ? 'Moderate Foundation (Room for Optimization)' : 'High Endocrine Friction / Recovery Deficit'}
            </div>
            <p className="text-xs text-[#8e909a]">
              {currentScore >= 80 
                ? 'Your sleep, physical stimulus, and stress parameters support healthy endogenous testosterone pulsatility and parasympathetic tone.'
                : currentScore >= 60 
                ? 'Focus on sleep duration and stabilizing cortisol to remove friction from your bioavailable testosterone response.'
                : 'Elevated stress and deficient recovery can elevate SHBG and lower free testosterone, exacerbating performance anxiety.'}
            </p>
          </div>
          <div className="w-20 h-20 rounded-full border-4 border-[#c5a059] flex items-center justify-center font-serif font-bold text-2xl text-[#dfc58b] bg-[#141624] flex-shrink-0 shadow-lg">
            {currentScore}
          </div>
        </div>
      </div>

      {/* CHAPTER 4 */}
      <section id="endocrine-ch4" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 4: The Nutritional Foundation for Healthy Hormones
        </h2>
        <p>
          There is no food that instantly transforms you into a high-testosterone machine.
        </p>
        <p>
          You do not need to eat raw liver every morning, force down a kilogram of red meat daily, or survive on eggs alone. And you certainly do not need to buy every “herbal testosterone booster” advertised on social media.
        </p>
        <p>
          Hormonal health is supported by consistent, foundational nutrition.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-serif font-bold text-base text-[#dfc58b] flex items-center gap-2">
              <Sun className="w-4 h-4 text-[#c5a059]" />
              <span>Vitamin D3</span>
            </div>
            <p className="text-xs text-[#cbc7be] leading-relaxed">
              Acts as a seco-steroid hormone. Adequate serum levels (40–60 ng/mL) correlate with healthy Leydig cell function and baseline testosterone synthesis.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-serif font-bold text-base text-[#dfc58b] flex items-center gap-2">
              <BatteryCharging className="w-4 h-4 text-[#c5a059]" />
              <span>Magnesium</span>
            </div>
            <p className="text-xs text-[#cbc7be] leading-relaxed">
              Involved in over 300 enzymatic reactions. Supports neuromuscular relaxation, deep slow-wave sleep, and helps prevent excessive SHBG binding.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-serif font-bold text-base text-[#dfc58b] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
              <span>Zinc</span>
            </div>
            <p className="text-xs text-[#cbc7be] leading-relaxed">
              An essential co-factor for the 17β-HSD enzyme in androgen synthesis and aromatase regulation. Severe deficiency impairs sperm motility and testosterone production.
            </p>
          </div>
        </div>

        <p>
          The “Big Three” are not magical. They are foundational nutrients. And foundations matter.
        </p>
      </section>

      {/* CHAPTER 5 */}
      <section id="endocrine-ch5" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 5: Strength Training, Movement, and Hormonal Health
        </h2>
        <p>
          Regular exercise is one of the most powerful things you can do for your overall health.
        </p>
        <p>
          Strength training improves muscle mass, insulin sensitivity, bone mineral density, metabolic flexibility, and psychological self-efficacy. It also supports healthy hormonal signaling.
        </p>

        {/* INLINE IMAGE 3: TRAINING */}
        {post.images?.training && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.training} 
              alt="Compound barbell strength training for neuromuscular and endocrine health"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 3: Multi-joint compound resistance training (Squats, Deadlifts, Overhead Presses) for metabolic &amp; endocrine signaling</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Physical Calibration</span>
            </div>
          </div>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Compound Exercises Are Efficient
        </h3>
        <p>
          Multi-joint compound movements—such as squats, deadlifts, barbell rows, pull-ups, and overhead presses—recruit massive amounts of motor units. This stimulates acute neuromuscular adaptation and androgen receptor upregulation.
        </p>
        <p>
          However, you do not need to perform a dangerous maximum-effort lift to prove masculinity. Consistency and progressive overload without injury will always yield superior long-term results compared to reckless overexertion.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Avoiding the Overtraining Pitfall
        </h3>
        <p>
          Exercise creates acute physiological stress. That stress produces positive adaptation only when paired with adequate recovery.
        </p>
        <p>
          Excessive training volume combined with calorie deficits, sleep restriction, and work stress can cause chronic suppression of the hypothalamic-pituitary-gonadal (HPG) axis.
        </p>
        <div className="p-4 rounded-xl bg-[#181a28] border-l-2 border-[#dfc58b] text-[#fbf9f4] font-serif italic text-base">
          “The golden rule of endocrine conditioning: Train hard enough to stimulate adaptation, but recover thoroughly enough to thrive.”
        </div>
      </section>

      {/* CHAPTER 6 */}
      <section id="endocrine-ch6" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 6: Sleep — The True Engine of Testosterone Production
        </h2>
        <p>
          If there is one lifestyle habit that deserves paramount attention in male vitality, it is <strong>sleep</strong>.
        </p>
        <p>
          The vast majority of daily testosterone release occurs during deep, uninterrupted REM and slow-wave sleep. If you sleep 4 to 5 hours per night, your body never completes its standard nocturnal pulsatile secretory cycles.
        </p>

        {/* INLINE IMAGE 4: SLEEP RECOVERY */}
        {post.images?.sleepRecovery && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.sleepRecovery} 
              alt="Restorative sleep environment and circadian recovery for endocrine stability"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 4: Circadian alignment, dark sleep architecture, and nocturnal testosterone pulsatility</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Circadian Science</span>
            </div>
          </div>
        )}

        <div className="p-5 rounded-2xl bg-[#151828] border border-[#c5a059]/40 space-y-3">
          <div className="text-xs text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-2">
            <Moon className="w-4 h-4 text-[#c5a059]" />
            <span>The 5 Rules of Sleep Architecture:</span>
          </div>
          <ol className="space-y-2 text-sm text-[#dedad2] list-decimal pl-5">
            <li><strong>Anchor your wake-up time</strong> within a 30-minute window 7 days a week to set circadian rhythm.</li>
            <li><strong>Get 10–15 minutes of outdoor sunlight</strong> into your eyes within an hour of waking.</li>
            <li><strong>Keep your sleeping environment cool</strong> (around 65–68°F / 18–20°C) and completely dark.</li>
            <li><strong>Cease caffeine consumption 8–10 hours</strong> before your target bedtime.</li>
            <li><strong>Avoid heavy alcohol close to bed</strong>; while it induces sedation, it severely fragments REM sleep architecture.</li>
          </ol>
        </div>
      </section>

      {/* CHAPTER 7 */}
      <section id="endocrine-ch7" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 7: Estrogen Is Not the Enemy — The Importance of Balance
        </h2>
        <p>
          One of the most damaging myths in online fitness culture is the belief that estrogen is a “female hormone” that men should drive to zero.
        </p>
        <p>
          Men need estrogen. Specifically, <strong>estradiol (E2)</strong> is essential in men for bone mineral density, neuroprotection, cardiovascular endothelial health, joint lubrication, cognitive function, and healthy libido.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Aromatase Process
        </h3>
        <p>
          In men, testosterone is naturally converted into estradiol via the <strong>aromatase enzyme</strong>, predominantly in adipose tissue and the brain.
        </p>
        <p>
          When men inappropriately use black-market aromatase inhibitors (like Anastrozole) to crush their estrogen levels, they frequently experience erectile failure, joint pain, depression, and loss of stamina.
        </p>
        <p>
          Healthy endocrine function is always about <strong>proportional balance</strong>, never artificial extremes.
        </p>
      </section>

      {/* CHAPTER 8 & 9 */}
      <section id="endocrine-ch8" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 8 &amp; 9: Environmental Exposures &amp; The Psychology of Confidence
        </h2>
        <p>
          Modern life presents various synthetic exposures, including phthalates and bisphenols (BPA/BPS). Taking reasonable precautions—such as not microwaving food in plastic containers and filtering drinking water—is sensible.
        </p>
        <p>
          However, fear itself creates chronic stress. Do not let micro-paranoia about every plastic object sabotage your peace of mind.
        </p>
        
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Building Confidence Through Real Mastery
        </h3>
        <p>
          True sexual confidence does not come from pretending to be an aggressive “alpha male.”
        </p>
        <p>
          Real confidence is quieter. It comes from knowing how your body works, understanding your arousal sensations, communicating with your partner, and maintaining consistent health habits.
        </p>
      </section>

      {/* CHAPTER 10: MEDICAL TESTING & TRT */}
      <section id="endocrine-ch10" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 10: When to Test Your Hormones and Understanding TRT
        </h2>
        <p>
          If you consistently experience persistent symptoms such as:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-[#dedad2]">
          <li>Significantly reduced or absent libido</li>
          <li>Ongoing, unexplained chronic fatigue</li>
          <li>Changes in erectile quality or complete loss of morning erections</li>
          <li>Loss of lean muscle mass and sudden increase in visceral adiposity</li>
          <li>Persistent brain fog or depressive mood changes</li>
        </ul>
        <p>
          It is well worth discussing your health with a qualified urologist or endocrinologist.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          What About Testosterone Replacement Therapy (TRT)?
        </h3>
        <p>
          TRT is a legitimate, evidence-based medical treatment for men clinically diagnosed with hypogonadism.
        </p>
        <p>
          It is not a casual lifestyle hack or a quick stamina shortcut. TRT requires ongoing medical supervision, blood monitoring (hematocrit, PSA, lipids, liver enzymes), and consideration of fertility implications.
        </p>
        <p>
          First understand your actual physiology through proper morning lab work, and always make informed, physician-guided decisions.
        </p>
      </section>

      {/* CHAPTER 11: FAQ */}
      <section id="endocrine-faq" className="scroll-mt-24 space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          FAQ: Hormones, Testosterone &amp; Sexual Stamina
        </h2>

        <div className="space-y-3">
          {[
            {
              q: "Does high testosterone guarantee that I will last longer in bed?",
              a: "No. While adequate testosterone supports healthy libido and energy, ejaculatory latency is heavily governed by the autonomic nervous system, arousal awareness, pelvic floor muscular tension, and psychological relaxation. Men with very high testosterone can still experience rapid ejaculation if they lack arousal control skills."
            },
            {
              q: "Can chronic stress and high cortisol ruin sexual performance?",
              a: "Yes. Elevated sympathetic stress activates fight-or-flight signaling, which shunts blood away from the reproductive organs, constricts blood vessels, and accelerates ejaculatory reflex timing."
            },
            {
              q: "What is more important: Total Testosterone or Free Testosterone?",
              a: "Both provide essential clinical context. Total Testosterone reflects the overall hormone produced, while Free Testosterone represents the unbound fraction immediately capable of binding to androgen receptors. SHBG levels determine the balance between the two."
            },
            {
              q: "Does frequent ejaculation permanently damage or lower testosterone?",
              a: "No. Scientific research shows that regular sexual activity or masturbation does not permanently reduce baseline testosterone production. Hormone levels fluctuate naturally throughout the day according to circadian rhythms."
            },
            {
              q: "What is the most effective natural way to optimize hormones?",
              a: "The most impactful evidence-backed foundation is consistent 7–9 hours of dark restorative sleep, heavy compound strength training 3–4 times per week, balanced nutrition with adequate healthy fats and micronutrients (Zinc, Magnesium, Vitamin D3), and active stress management."
            }
          ].map((faq, idx) => (
            <div 
              key={idx} 
              className="rounded-xl border border-white/10 bg-[#12141e] overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#181a28] transition-colors cursor-pointer"
              >
                <span className="font-serif font-bold text-base sm:text-lg text-[#fbf9f4]">
                  {faq.q}
                </span>
                <span className="p-1 rounded-md bg-[#1e2234] text-[#c5a059] flex-shrink-0">
                  {activeFaq === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>
              
              {activeFaq === idx && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-sm sm:text-base text-[#cbc7be] leading-relaxed border-t border-white/5 bg-[#0f1118]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONCLUSION */}
      <section id="endocrine-conclusion" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Conclusion: Build the System, Not the Hype
        </h2>
        <p>
          The biggest mistake in men's hormone culture is searching for one powerful shortcut: one magic supplement, one secret food, or one extreme biohack.
        </p>
        <p>
          Real health does not work that way.
        </p>
        <p>
          Your hormones exist within an interconnected biological network. Sleep fuels recovery. Stress regulation stabilizes your autonomic nervous system. Nutrition supplies the essential raw biochemical building blocks. Strength training preserves muscular and metabolic vitality.
        </p>
        <p>
          The <strong>Art of Stamina</strong> is about establishing a resilient, sustainable foundation that supports your confidence, sexual health, and longevity for decades to come.
        </p>

        {/* READY TO BUILD STAMINA SYSTEM CTA BOX */}
        <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1b1e2c] via-[#12141f] to-[#1a1c2b] border-2 border-[#c5a059] shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#dfc58b] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Complete Curriculum</span>
          </div>
          <h3 className="font-serif font-bold text-2xl text-[#fbf9f4]">
            Ready to Build Your Complete Stamina Foundation?
          </h3>
          <p className="text-sm text-[#cbc7be] leading-relaxed">
            Hormonal health is only one part of the bigger <strong>Art of Stamina</strong> system. Better sexual confidence and control also involve arousal awareness, breathing, stress management, pelvic relaxation, physical fitness, communication, and healthier lifestyle habits.
          </p>
          <p className="text-sm text-[#cbc7be] leading-relaxed">
            The complete <strong>Art of Stamina Mastery eBook</strong> brings these principles together into one structured guide designed to help you understand your body and build healthier habits for confidence and performance over time.
          </p>
          
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="javascript:void(0);"
              onClick={onLockerClick}
              className="w-full sm:w-auto text-center py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] text-[#0b0c10] font-extrabold text-xs tracking-wider uppercase shadow-xl hover:brightness-110 active:scale-95 transition-all no-underline cursor-pointer"
            >
              DOWNLOAD FREE EBOOK (PDF)
            </a>
            <span className="text-xs text-[#8e909a]">Includes complete 68-page PDF, worksheets &amp; routines</span>
          </div>
        </div>

        {/* MEDICAL DISCLAIMER */}
        <div className="p-4 rounded-xl bg-[#0e1017] border border-white/5 text-[11px] text-[#6b6d76] leading-relaxed">
          <strong>Medical Disclaimer:</strong> This article is for educational purposes only and does not replace professional medical advice. If you are concerned about testosterone, erectile function, libido, fertility, or other hormonal or sexual health issues, consult a qualified healthcare professional before starting hormone therapy or high-dose supplementation.
        </div>
      </section>

    </div>
  );
}
