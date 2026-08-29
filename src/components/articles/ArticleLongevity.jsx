import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dna, 
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
  Activity,
  Flame,
  Layers,
  RefreshCw,
  Award,
  TrendingUp,
  Stethoscope,
  Target,
  ArrowUpRight,
  BookOpen
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticleLongevity({ post, onLockerClick }) {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Interactive Decade Explorer State
  const [selectedDecade, setSelectedDecade] = useState('40s');
  
  // Interactive Vascular & Longevity Score Calculator
  const [vascularExercise, setVascularExercise] = useState(3); // days/wk
  const [resistanceTraining, setResistanceTraining] = useState(2); // days/wk
  const [sleepScore, setSleepScore] = useState(7.5); // hrs/night
  const [metabolicHealth, setMetabolicHealth] = useState('good'); // optimal, good, suboptimal

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const decadeDetails = {
    '30s': {
      title: 'In Your 30s: Building the Metabolic & Cardiovascular Fortress',
      focus: 'Foundational Neuromuscular Calibration & Habit Hardening',
      description: 'Your 30s are the golden window to establish resilient baseline habits before age-related metabolic slowing begins. Prioritize heavy compound resistance training, high-capacity aerobic conditioning, deep sleep hygiene, and baseline biomarker testing.',
      priorities: [
        'Compound multi-joint resistance training 3x/week to preserve fast-twitch muscle fibers.',
        'Zone 2 aerobic conditioning (walking, rowing, cycling) for mitochondrial density.',
        'Establish baseline blood panel: Total/Free T, Lipids, Fasting Glucose, hs-CRP, Blood Pressure.',
        'Address alcohol and sleep deprivation before metabolic friction compounds.'
      ],
      biohack: 'Zone 2 cardio at 65–75% max heart rate 150 mins/week + consistent nasal breathing.'
    },
    '40s': {
      title: 'In Your 40s: Biomarker Vigilance & Vascular Protection',
      focus: 'Vascular Elasticity, Nitric Oxide Maintenance & Visceral Fat Control',
      description: 'In your 40s, vascular elasticity and metabolic flexibility become the primary determiners of sexual stamina and erectile rigidity. Monitor blood pressure and lipid sub-fractions closely; do not ignore subtle changes in morning vigor or recovery.',
      priorities: [
        'Routine vascular screening: Blood pressure (<120/80), ApoB / Non-HDL, HbA1c.',
        'Maintain lean muscle mass; keep visceral abdominal fat low to avoid aromatase upregulation.',
        'Nutritional emphasis on dietary nitrates (beets, arugula) and endothelial antioxidants.',
        'Incorporate diaphragmatic recovery breaks to counter peak career and family stressors.'
      ],
      biohack: 'Morning sunlight exposure + daily 8g L-Citrulline/dietary nitrate rich foods.'
    },
    '50s': {
      title: 'In Your 50s: Sarcopenia Defense & Prostate Stewardship',
      focus: 'Musculoskeletal Integrity, Pelvic Balance & Prostate Health',
      description: 'In your 50s, fighting sarcopenia (age-related muscle loss) and maintaining pelvic floor tone are critical. Shift from ego-lifting to joint-friendly progressive resistance. Stay alert to urinary symptoms without panicking.',
      priorities: [
        'Resistance training with focus on mobility, core stability, and eccentric control.',
        'Annual prostate and urinary health screening (PSA test, clinical urological review).',
        'Pelvic floor awareness: balance strength contractions with deep diaphragmatic pelvic relaxation.',
        'Dietary inclusion of cooked tomato lycopene, pumpkin seeds (zinc), and healthy omega-3 fats.'
      ],
      biohack: 'Cooked tomato paste (rich in bioavailable lycopene) with olive oil 3-4x weekly.'
    },
    '60s': {
      title: 'In Your 60s & Beyond: Active Vitality, Mastery & Somatic Presence',
      focus: 'Lifelong Engagement, Neuroplasticity & Meaningful Connection',
      description: 'In your 60s and beyond, sexual vitality is anchored in experience, intimacy depth, emotional security, and steady physical movement. Maintain daily walking, balance training, social connection, and an unhurried approach to intimacy.',
      priorities: [
        'Daily low-impact movement (brisk walking, swimming, light kettlebell complexes).',
        'Prioritize communication, prolonged foreplay, and sensory touch over clock-watching.',
        'Maintain active cognitive challenges and social connections to support neuroplasticity.',
        'Collaborate with healthcare professionals on individualized hormone optimization if needed.'
      ],
      biohack: 'Daily 45-minute brisk walking outdoors + daily 10-minute mindful breathing check-in.'
    }
  };

  // Longevity Index Calculation
  const calculateLongevityScore = () => {
    let score = 50;
    score += vascularExercise * 6; // up to +36
    score += resistanceTraining * 5; // up to +25
    score += (sleepScore - 6) * 6; // +/- based on sleep
    if (metabolicHealth === 'optimal') score += 15;
    else if (metabolicHealth === 'good') score += 8;
    else score -= 10;
    return Math.min(100, Math.max(30, Math.round(score)));
  };

  const longevityScore = calculateLongevityScore();

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
      <section id="longevity-intro" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Introduction: The Myth of the Inevitable Decline
        </h2>
        <p>
          As men get older, many begin to accept a story they have heard for most of their lives.
        </p>
        <p>
          The story goes like this:
        </p>
        <div className="p-4 rounded-xl bg-[#141624] border border-rose-500/20 font-serif italic text-sm sm:text-base text-rose-300 space-y-1">
          <div>“Your energy will inevitably disappear.”</div>
          <div>“Your body will become weaker.”</div>
          <div>“Your testosterone will collapse.”</div>
          <div>“Your sexual desire will fade.”</div>
          <div>“And eventually, the stamina you once had will become nothing more than a distant memory of your 20s.”</div>
        </div>
        <p>
          There is some truth hidden inside this narrative. Aging does bring real biological changes. Blood vessels can become less flexible. Muscle mass and strength can decline without regular activity. Recovery may take longer. Hormone levels can change. Medical conditions also become more common with age.
        </p>
        <p className="text-lg font-serif font-bold text-[#dfc58b]">
          But accepting that aging exists is very different from believing that decline is completely outside your control. It is not.
        </p>
        <p>
          You cannot stop time, but you can influence many of the factors that determine how well you age: the way you move, the way you eat, the quality of your sleep, your cardiovascular health, your body composition, your stress levels, and your willingness to stay physically and mentally engaged with life.
        </p>
        <p>
          At <strong>Art of Stamina</strong>, the goal is not to promise that a 60-year-old man can literally become biologically identical to his 20-year-old self. That is not how aging works. The real goal is far more useful:
        </p>
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#171a26] to-[#12141d] border-l-4 border-[#c5a059] shadow-md">
          <p className="font-serif italic text-lg sm:text-xl text-[#fbf9f4] leading-relaxed mb-2">
            “To help you become the healthiest, strongest, most capable version of yourself at every stage of life. In fact, an older man often has advantages his younger self lacked: superior body awareness, emotional composure, communication confidence, and freedom from rushed impulsivity.”
          </p>
          <div className="text-xs text-[#c5a059] font-semibold tracking-wider uppercase">— Art of Stamina Longevity &amp; Vitality Lab</div>
        </div>

        {/* INLINE IMAGE 1: HERO */}
        {post.images?.hero && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.hero} 
              alt="Male sexual longevity, lifelong vitality, and biological age optimization"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[460px] object-cover"
            />
            <div className="p-3.5 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 1: Peak Vitality and Composure in the Mature Male: The Longevity Protocol</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Longevity Architecture</span>
            </div>
          </div>
        )}
      </section>

      {/* CHAPTER 1 */}
      <section id="longevity-ch1" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 1: Biological Age vs. Chronological Age &amp; The Vascular Clock
        </h2>
        <p>
          The first step in thinking about longevity is understanding that your age is more than the number of candles on your birthday cake.
        </p>
        <p>
          Two men can both be 55 years old and have completely different levels of health. One may be physically active, maintain lean muscle mass, sleep 8 hours, keep his blood pressure at 115/75, and possess high cardiovascular fitness. The other may be sedentary, chronically stressed, sleep 5 hours, smoke, and live with untreated metabolic syndrome.
        </p>
        <p>
          Their chronological age is identical. Their biological function is separated by two decades.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Vascular Clock: Why Blood Vessels Dictate Stamina
        </h3>
        <p>
          One of the most sensitive barometers for male health is the cardiovascular endothelium. Healthy erectile rigidity and endurance depend on healthy, elastic blood vessels that produce robust amounts of nitric oxide upon autonomic signal.
        </p>
        <p>
          Because the penile arteries (helicine arterioles) measure only 1 to 2 mm in diameter—compared to the 3 to 4 mm coronary arteries and 5 to 7 mm carotid arteries—subtle changes in vascular elasticity often show up first in sexual performance.
        </p>

        {/* INLINE IMAGE 2: VASCULAR & MITOCHONDRIA INFOGRAPHIC */}
        {post.images?.vascularChart && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.vascularChart} 
              alt="Vascular endothelium elasticity and cellular mitochondrial ATP generation diagram"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 2: The Vascular Endothelium &amp; Mitochondrial Energy Cascade</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Vascular Science</span>
            </div>
          </div>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Long-Term Vascular Strategy
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-bold text-xs uppercase text-[#dfc58b] flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-[#c5a059]" />
              <span>Zone 2 Cardio</span>
            </div>
            <p className="text-xs text-[#cbc7be]">150–180 minutes per week of conversational cardio to expand capillary beds and stimulate endothelial nitric oxide synthase (eNOS).</p>
          </div>
          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-bold text-xs uppercase text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Biomarker Vigilance</span>
            </div>
            <p className="text-xs text-[#cbc7be]">Keep blood pressure strictly under 120/80 mmHg and manage fasting blood glucose, ApoB, and systemic inflammation (hs-CRP).</p>
          </div>
        </div>

        {/* COMPANION INTERLINK: NITRIC OXIDE BLUEPRINT */}
        <div className="my-5 p-4 rounded-xl bg-[#151826] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Companion Masterclass</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              The Nitric Oxide Nutrition &amp; Vasodilation Blueprint
            </div>
            <div className="text-xs text-[#8e909a]">
              Dive deep into nitrate pathways, citrulline dosing, and antioxidant cofactors for arterial elasticity.
            </div>
          </div>
          <Link
            to="/blog/nitric-oxide-blueprint-nutrition"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Blueprint</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 2 */}
      <section id="longevity-ch2" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 2: Muscle Mass, Sarcopenia &amp; The Pelvic Floor
        </h2>
        <p>
          Without deliberate resistance training and adequate dietary protein, adult men lose roughly 3% to 8% of muscle mass per decade after age 30—an age-related degenerative loss known as <strong>sarcopenia</strong>.
        </p>
        <p>
          Muscle is not just for physique aesthetics; it is your largest metabolic sink for glucose disposal, your primary defense against insulin resistance, and the structural chassis that supports testosterone production.
        </p>

        {/* INLINE IMAGE 3: STRENGTH TRAINING */}
        {post.images?.strengthTraining && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.strengthTraining} 
              alt="Mature man performing compound barbell resistance training for muscle longevity"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 3: Progressive Resistance Training as the Antidote to Sarcopenia</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Muscle Preservation</span>
            </div>
          </div>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Pelvic Floor: Strength vs. Coordination
        </h3>
        <p>
          A common mistake among aging men is assuming that the pelvic floor only needs more and more forceful Kegel contractions.
        </p>
        <p>
          In reality, many mature men suffer from a <strong>hypertonic (chronically tight)</strong> pelvic floor resulting from years of sitting, chronic stress, or over-clenching during solo habits. A chronically clamped pelvic floor restricts local venous drainage and accelerates involuntary ejaculatory reflex firing.
        </p>
        <p className="p-4 rounded-xl bg-[#181a28] border-l-2 border-[#dfc58b] text-[#fbf9f4] font-serif italic text-sm sm:text-base">
          “True pelvic health is not just about clenching power; it is about voluntary motor control—the ability to fully relax and drop the pelvic floor on demand using diaphragmatic breath.”
        </p>

        {/* COMPANION INTERLINKS: BREATHWORK & SOLO LAB */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <Link
            to="/blog/the-breath-of-stamina-arousal-control-breathwork"
            className="p-3.5 rounded-xl bg-[#141624] border border-white/10 hover:border-[#c5a059]/40 transition-all no-underline group block"
          >
            <div className="text-[10px] text-[#dfc58b] uppercase font-bold flex items-center justify-between">
              <span>Pelvic Calibration</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div className="font-serif font-bold text-xs sm:text-sm text-[#fbf9f4] group-hover:text-[#dfc58b] transition-colors mt-1">
              The Breath of Stamina: Diaphragmatic Loop
            </div>
          </Link>
          <Link
            to="/blog/solo-laboratory-ejaculatory-reflex-control"
            className="p-3.5 rounded-xl bg-[#141624] border border-white/10 hover:border-[#c5a059]/40 transition-all no-underline group block"
          >
            <div className="text-[10px] text-emerald-400 uppercase font-bold flex items-center justify-between">
              <span>Motor Control Protocol</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div className="font-serif font-bold text-xs sm:text-sm text-[#fbf9f4] group-hover:text-emerald-300 transition-colors mt-1">
              The Solo Laboratory: Reflex Training
            </div>
          </Link>
        </div>
      </section>

      {/* CHAPTER 3 */}
      <section id="longevity-ch3" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 3: Mitochondria — The Cellular Foundation of Energy
        </h2>
        <p>
          Every cellular process—from smooth muscle relaxation to neurotransmitter synthesis—requires biochemical energy in the form of <strong>adenosine triphosphate (ATP)</strong>, generated inside the mitochondria.
        </p>
        <p>
          As we age, mitochondrial density and efficiency can decline if not stimulated through regular physical exercise and mitochondrial biogenesis.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#dedad2]">
          <li><strong>Mitochondrial Biogenesis:</strong> Stimulated primarily by Zone 2 aerobic training and high-intensity interval bursts (HIIT), which trigger PGC-1alpha expression.</li>
          <li><strong>Mitochondrial Recovery:</strong> Deep slow-wave sleep is when cellular autophagy clears damaged mitochondria (mitophagy).</li>
          <li><strong>Nutritional Support:</strong> CoQ10 (Ubiquinol), Alpha-Lipoic Acid, Magnesium, and B-complex vitamins act as essential cofactors in the electron transport chain.</li>
        </ul>
      </section>

      {/* CHAPTER 4 */}
      <section id="longevity-ch4" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 4: Prostate Health and Long-Term Sexual Wellbeing
        </h2>
        <p>
          The prostate gland is an essential organ in the male reproductive system, wrapping around the urethra just beneath the bladder.
        </p>
        <p>
          By age 60, over 50% of men experience some degree of <strong>Benign Prostatic Hyperplasia (BPH)</strong>—non-cancerous prostate enlargement that can create urinary friction, night waking (nocturia), and pelvic fullness.
        </p>

        <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-3">
          <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
            <Stethoscope className="w-4 h-4 text-[#c5a059]" />
            <span>Prostate Health Stewardship Protocol:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#dedad2]">
            <div className="p-3 rounded-lg bg-[#0e1017] border border-white/5 space-y-1">
              <strong className="text-[#dfc58b] block">Dietary Lycopene</strong>
              <span>Cooked tomatoes, watermelon, and pink grapefruit provide bioavailable lycopene that concentrates in prostate tissue.</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0e1017] border border-white/5 space-y-1">
              <strong className="text-[#dfc58b] block">Zinc &amp; Phytosterols</strong>
              <span>Pumpkin seed oil and beta-sitosterol support normal urinary stream flow and local tissue balance.</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0e1017] border border-white/5 space-y-1">
              <strong className="text-[#dfc58b] block">Clinical Screenings</strong>
              <span>Do not guess: schedule annual PSA checks, digital exams, and urological assessments starting at age 45–50.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 5 */}
      <section id="longevity-ch5" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 5: Neuroplasticity &amp; The Brain-Body Connection
        </h2>
        <p>
          One of the greatest discoveries of modern neuroscience is <strong>neuroplasticity</strong>: your nervous system retains the capacity to form new synaptic connections and rewire ingrained reflexes throughout your entire life.
        </p>
        <p>
          You are not trapped by the rushed, anxiety-driven sexual habits you may have formed in your 20s or 30s. At 45, 55, or 65, your nervous system can learn sensory grounding, parasympathetic breath anchors, and calibrated pacing just as effectively as a young brain.
        </p>
      </section>

      {/* INTERACTIVE LONGEVITY SCORE & DECADE EXPLORER */}
      <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#161928] via-[#121420] to-[#0e1017] border-2 border-[#c5a059]/40 shadow-2xl space-y-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
              <Dna className="w-4 h-4 text-[#c5a059]" />
              <span>Longevity Bio-Calculator</span>
            </div>
            <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#fbf9f4]">
              Lifetime Stamina &amp; Vascular Resilience Index
            </h4>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[#1b1f30] border border-[#c5a059]/40 text-center">
            <span className="text-[11px] uppercase tracking-wider text-[#8e909a] block">Resilience Score</span>
            <span className="font-serif font-bold text-2xl text-[#dfc58b]">{longevityScore} / 100</span>
          </div>
        </div>

        {/* INTERACTIVE SLIDERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Cardiorespiratory Conditioning */}
          <div className="space-y-2 p-4 rounded-xl bg-[#141624] border border-white/5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#fbf9f4]">Zone 2 Cardio &amp; Aerobic Activity</span>
              <span className="text-[#dfc58b]">{vascularExercise} days / week</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="6" 
              step="1"
              value={vascularExercise}
              onChange={(e) => setVascularExercise(Number(e.target.value))}
              className="w-full accent-[#c5a059] bg-[#1e2234] rounded-lg h-2 cursor-pointer"
            />
            <p className="text-[11px] text-[#8e909a]">Expands capillary density and triggers endothelial nitric oxide synthase (eNOS).</p>
          </div>

          {/* Resistance Training */}
          <div className="space-y-2 p-4 rounded-xl bg-[#141624] border border-white/5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#fbf9f4]">Resistance Training (Sarcopenia Defense)</span>
              <span className="text-[#dfc58b]">{resistanceTraining} days / week</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="5" 
              step="1"
              value={resistanceTraining}
              onChange={(e) => setResistanceTraining(Number(e.target.value))}
              className="w-full accent-[#c5a059] bg-[#1e2234] rounded-lg h-2 cursor-pointer"
            />
            <p className="text-[11px] text-[#8e909a]">Preserves Type II fast-twitch muscle fibers, androgen receptors, and insulin sensitivity.</p>
          </div>

          {/* Sleep & Restorative Recovery */}
          <div className="space-y-2 p-4 rounded-xl bg-[#141624] border border-white/5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#fbf9f4]">Nightly Restorative Sleep</span>
              <span className="text-[#dfc58b]">{sleepScore} hrs / night</span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="9" 
              step="0.5"
              value={sleepScore}
              onChange={(e) => setSleepScore(Number(e.target.value))}
              className="w-full accent-[#c5a059] bg-[#1e2234] rounded-lg h-2 cursor-pointer"
            />
            <p className="text-[11px] text-[#8e909a]">Cellular mitochondrial mitophagy and nocturnal pulsatile androgen synthesis occur during slow-wave sleep.</p>
          </div>

          {/* Metabolic Health Tier */}
          <div className="space-y-2 p-4 rounded-xl bg-[#141624] border border-white/5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#fbf9f4]">Metabolic &amp; Blood Pressure Tier</span>
              <span className="text-[#dfc58b] uppercase text-[11px]">{metabolicHealth}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              {[
                { id: 'optimal', label: 'Optimal (<120/80)' },
                { id: 'good', label: 'Controlled' },
                { id: 'suboptimal', label: 'Elevated' }
              ].map(tier => (
                <button
                  key={tier.id}
                  onClick={() => setMetabolicHealth(tier.id)}
                  className={`py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                    metabolicHealth === tier.id
                      ? 'bg-[#c5a059] text-black border-[#dfc58b]'
                      : 'bg-[#181a28] text-[#8e909a] border-white/10 hover:text-white'
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-[#8e909a]">Protects microvascular helicine penile arteries from endothelial dysfunction.</p>
          </div>
        </div>

        {/* DECADE ROADMAP EXPLORER */}
        <div className="pt-4 border-t border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h5 className="font-serif font-bold text-lg text-[#fbf9f4] flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#dfc58b]" />
              <span>Decade-by-Decade Roadmap Selector</span>
            </h5>
            <div className="flex gap-1.5">
              {['30s', '40s', '50s', '60s'].map(dec => (
                <button
                  key={dec}
                  onClick={() => setSelectedDecade(dec)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                    selectedDecade === dec
                      ? 'bg-[#c5a059] text-black border-[#dfc58b]'
                      : 'bg-[#141624] text-[#8e909a] border-white/10 hover:text-white'
                  }`}
                >
                  {dec}
                </button>
              ))}
            </div>
          </div>

          {/* Active Decade Details Card */}
          <div className="p-5 rounded-2xl bg-[#121522] border border-[#c5a059]/30 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h6 className="font-serif font-bold text-base text-[#dfc58b]">
                {decadeDetails[selectedDecade].title}
              </h6>
              <span className="text-[11px] font-semibold text-[#8e909a] uppercase tracking-wider">
                {decadeDetails[selectedDecade].focus}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#cbc7be] leading-relaxed">
              {decadeDetails[selectedDecade].description}
            </p>
            <div className="space-y-1.5 pt-2">
              <div className="text-[11px] font-bold text-[#fbf9f4] uppercase tracking-wider">Key Decade Milestones:</div>
              {decadeDetails[selectedDecade].priorities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#dedad2]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 p-3 rounded-lg bg-[#181a28] border border-[#c5a059]/20 text-xs text-[#dfc58b]">
              <strong>Primary Protocol:</strong> {decadeDetails[selectedDecade].biohack}
            </div>
          </div>
        </div>
      </div>

      {/* INLINE IMAGE 4: DECADE ROADMAP */}
      {post.images?.decadeRoadmap && (
        <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
          <img 
            src={post.images.decadeRoadmap} 
            alt="Decade by decade longevity protocol roadmap for sexual stamina across life"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[460px] object-cover"
          />
          <div className="p-3.5 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
            <span>Figure 4: The Strategic Decade-by-Decade Framework for Male Sexual Longevity</span>
            <span className="text-[#dfc58b] font-medium hidden sm:inline">Longevity Roadmap</span>
          </div>
        </div>
      )}

      {/* CHAPTER 6 */}
      <section id="longevity-ch6" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 6: Advanced Vascular Maintenance — The Real “Clean Pipes” Protocol
        </h2>
        <p>
          There is a widespread marketing myth that arteries can be “flushed out” or “cleaned” overnight with a miracle supplement or detox tea.
        </p>
        <p>
          True vascular health is not a 3-day detox; it is the cumulative result of maintaining low arterial shear stress, preventing endothelial calcification, and minimizing oxidized low-density lipoproteins (oxLDL).
        </p>
        <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-2 text-xs sm:text-sm">
          <strong className="text-[#dfc58b] block text-sm">The 4 Pillars of Long-Term Vascular Elasticity:</strong>
          <div>1. <strong>Blood Pressure Stewardship:</strong> Chronically elevated systolic pressure causes micro-tears in the arterial intima.</div>
          <div>2. <strong>Endothelial Nitric Oxide Stimulation:</strong> Daily dietary nitrates (arugula, beets, spinach) and regular aerobic exercise.</div>
          <div>3. <strong>Vitamin K2 (MK-7) &amp; D3:</strong> Supports Matrix Gla Protein (MGP) activation, helping direct calcium to bone tissue rather than arterial walls.</div>
          <div>4. <strong>Fasting Glycemic Control:</strong> Minimizes Advanced Glycation End-products (AGEs) that stiffen blood vessel walls.</div>
        </div>
      </section>

      {/* CHAPTER 7 & 8 */}
      <section id="longevity-ch7" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 7 &amp; 8: Hormonal Longevity &amp; Regenerative Medicine Realities
        </h2>
        <p>
          While testosterone levels undergo a gradual average decline of ~1% per year after age 30, this decline is heavily mediated by lifestyle factors: body fat accumulation (aromatization of testosterone into estradiol), chronic sleep restriction, and metabolic dysfunction.
        </p>
        <p>
          Many men who maintain lean body mass, resistance train regularly, and sleep 7 to 8 hours maintain robust total and free testosterone well into their 60s and 70s without exogenous intervention.
        </p>

        {/* COMPANION INTERLINK: ENDOCRINE ARCHITECTURE */}
        <div className="my-4 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Companion Masterclass</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              The Endocrine Architecture: The Testosterone-Stamina Axis
            </div>
            <div className="text-xs text-[#8e909a]">
              Complete guide to SHBG, free testosterone, sleep pulses, and endocrine vitality.
            </div>
          </div>
          <Link
            to="/blog/the-endocrine-architecture-testosterone-stamina-axis"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Regenerative Therapies (Li-ESWT, PRP &amp; Stem Cells): Evidence vs. Hype
        </h3>
        <p>
          Modern urology is exploring technologies like <strong>Low-Intensity Extracorporeal Shockwave Therapy (Li-ESWT)</strong>, which uses acoustic pressure waves to stimulate local angiogenesis (new microvascular formation) in penile tissue.
        </p>
        <p>
          While clinical trials indicate potential benefit for specific men with mild-to-moderate vasculogenic erectile dysfunction, it is not a magic eraser that replaces sleep, exercise, and vascular health. Beware of predatory clinics promising to “turn back the clock 20 years” without addressing the foundational lifestyle pillars.
        </p>

        {/* COMPANION INTERLINK: REFRACTORY & MULTI-ROUND */}
        <div className="my-4 p-4 rounded-xl bg-[#141624] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#4ade80] font-bold uppercase tracking-wider flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5 text-[#4ade80]" />
              <span>Recovery Protocol</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              Elite Recovery: The Refractory Period &amp; Multi-Round Mastery
            </div>
            <div className="text-xs text-[#8e909a]">
              Neurotransmitter shifts, prolactin modulation, and accelerating recovery between rounds.
            </div>
          </div>
          <Link
            to="/blog/elite-recovery-refractory-period-multi-round"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-[#4ade80] text-white hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Recovery Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 9 & 10 */}
      <section id="longevity-ch9" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 9 &amp; 10: The Mature Man’s Mastery Mindset
        </h2>
        <p>
          Perhaps the greatest asset of the mature man is <strong>psychological liberation from the clock</strong>.
        </p>
        <p>
          In youth, intimacy is often driven by frantic urgency and performance anxiety. In maturity, you have the wisdom to understand that real sexual stamina is about sustained pleasure, rhythmic modulation, emotional attunement, and somatic presence.
        </p>

        {/* COMPANION INTERLINK: PSYCHOLOGY */}
        <div className="my-4 p-4 rounded-xl bg-[#151826] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Companion Masterclass</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              The Psychology of Stamina: Rewiring the Brain for Control
            </div>
            <div className="text-xs text-[#8e909a]">
              Dismantling spectatoring, breaking the goal-oriented rush, and sensory presence.
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

      {/* FAQ SECTION */}
      <section id="longevity-faq" className="scroll-mt-24 space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          FAQ: Age-Proofing Your Sexual Stamina
        </h2>

        <div className="space-y-3">
          {[
            {
              q: "Is it ever too late to improve sexual stamina and erectile quality?",
              a: "No. Studies consistently show that men in their 50s, 60s, and 70s who adopt progressive resistance training, improve cardiovascular fitness, and optimize nutrition experience significant improvements in vascular elasticity, libido, and sexual confidence within 8 to 16 weeks."
            },
            {
              q: "Does sexual desire and capability inevitably disappear with age?",
              a: "No. While biological changes occur, millions of men maintain healthy, active, and deeply fulfilling sexual lives well into their 70s and 80s. When decline occurs, it is far more frequently caused by sedentary lifestyles, untreated cardiovascular disease, medication side effects, or chronic stress than by biological age alone."
            },
            {
              q: "What is the single most important habit for lifelong sexual vitality?",
              a: "Protecting your vascular health. Regular cardiovascular exercise, maintaining blood pressure under 120/80 mmHg, avoiding smoking, and preserving lean muscle mass ensure your microvascular network can deliver the blood flow required for sustained performance."
            },
            {
              q: "How does prostate enlargement (BPH) affect sexual stamina?",
              a: "BPH itself does not directly stop erections, but the associated urinary urgency, frequent night waking, and pelvic tension can increase somatic anxiety and disrupt sleep quality. Managing prostate health through nutrition, exercise, and medical supervision keeps your pelvic system comfortable."
            },
            {
              q: "Should I take DHEA or testosterone supplements as I get older?",
              a: "Never self-prescribe hormones. Hormones operate in a finely tuned feedback loop. If you experience persistent fatigue, loss of muscle, or low libido, request a comprehensive morning blood panel with a qualified endocrinologist or urologist."
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

      {/* CONCLUSION & CTA */}
      <section id="longevity-conclusion" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Conclusion: Build a Legacy of Health, Not an Illusion of Youth
        </h2>
        <p>
          The goal of the <strong>Longevity Protocol</strong> is not to defeat the clock. Aging is a natural part of human life.
        </p>
        <p>
          The real goal is to age with profound strength, sharp awareness, vibrant cardiovascular health, and unwavering confidence.
        </p>
        <p>
          You do not need an expensive biohacking lab or unproven shortcuts. You simply need consistency in the foundational pillars: move your body, protect your blood vessels, defend your muscle mass, prioritize restorative sleep, nurture your relationships, and remain engaged with life.
        </p>

        {/* READY TO BUILD STAMINA SYSTEM CTA BOX */}
        <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1b1e2c] via-[#12141f] to-[#1a1c2b] border-2 border-[#c5a059] shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#dfc58b] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>The Complete Curriculum</span>
          </div>
          <h3 className="font-serif font-bold text-2xl text-[#fbf9f4]">
            Turn Longevity Knowledge Into a Lifetime Lifestyle
          </h3>
          <p className="text-sm text-[#cbc7be] leading-relaxed">
            You have now explored the core pillars of the <strong>Art of Stamina</strong>: body awareness, diaphragmatic breathing, psychological rewiring, endocrine balance, and lifelong vascular longevity.
          </p>
          <p className="text-sm text-[#cbc7be] leading-relaxed">
            The complete <strong>Art of Stamina Mastery eBook</strong> brings all these systems together into a structured, step-by-step 8-week progressive roadmap designed for men of all ages.
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
          <strong>Medical Disclaimer:</strong> This article is for educational purposes only and does not replace professional medical advice. Persistent changes in erectile function, ejaculation, libido, urinary function, testosterone, or overall health should be discussed with a qualified healthcare professional.
        </div>
      </section>

    </div>
  );
}
