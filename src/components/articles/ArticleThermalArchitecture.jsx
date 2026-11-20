import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight, 
  BookOpen, 
  Sliders, 
  Layers, 
  RotateCcw, 
  Heart, 
  Clock, 
  Compass, 
  Check, 
  AlertCircle,
  HelpCircle,
  Flame,
  Zap,
  Wind,
  Moon,
  Thermometer,
  Droplets,
  Gauge,
  Sun,
  Snowflake,
  ShieldAlert,
  BrainCircuit,
  Waves
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticleThermalArchitecture({ post, onLockerClick }) {
  // Accordion FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  // 4-Week Progressive Routine active week step
  const [activeWeekStep, setActiveWeekStep] = useState(0);

  // Interactive Autonomic Comparator: Cold Shock vs Bedroom Arousal
  const [activeComparatorTab, setActiveComparatorTab] = useState('parallel'); // 'parallel' | 'reset-drill'

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const thermalWeeks = [
    {
      week: "Week 1",
      title: "The Cool-Shower Foundation",
      duration: "15–30 Seconds at End of Shower",
      temperature: "Comfortably Cool (approx. 20–24°C / 68–75°F)",
      target: "Familiarity without Shock",
      description: "Complete your standard warm shower. Then turn the dial to cool—not freezing cold. Allow the water to run over your chest and back for 15 to 30 seconds while consciously relaxing your shoulders and keeping your jaw unclenched.",
      breathingCue: "Avoid gasping or breath-holding. Maintain rhythmic, gentle nasal breathing (4-second inhale, 4-second exhale).",
      safetyNote: "If you feel dizzy, breathless, or lightheaded, step out immediately. Never force extreme shivering."
    },
    {
      week: "Week 2",
      title: "Building Neurological Consistency",
      duration: "30–60 Seconds",
      temperature: "Moderately Cool (approx. 18–22°C / 64–72°F)",
      target: "Extending Composure Duration",
      description: "Gradually extend the cool-water finish to 30–60 seconds across 4–5 showers this week. The sensation should feel invigorating and crisp, leaving you refreshed rather than physically shivering or exhausted.",
      breathingCue: "Focus on lengthening your exhalations (4-second inhale, 6-second exhale) to deliberately stimulate vagal motor output.",
      safetyNote: "Do not plunge straight into ice water. Consistency at moderate temperatures is superior to sporadic extreme cold."
    },
    {
      week: "Week 3",
      title: "Adding Conscious Down-Regulation",
      duration: "60 Seconds Shower + 5 Min Breathwork",
      temperature: "Cool Shower + Room Temperature Seated Recovery",
      target: "Decoupling Sensation from Anxiety",
      description: "Maintain your 60-second cool finish. After drying off, sit comfortably on a chair or cushion for 5 minutes. Close your eyes, notice any residual adrenaline, and consciously drop your pelvic floor, soften your abdominal wall, and slow your pulse.",
      breathingCue: "Practice the Physiological Sigh (two quick nasal inhales followed by one long, slow, audible oral exhale).",
      safetyNote: "Practice relaxation directly without requiring cold water to induce it. This builds voluntary neural control."
    },
    {
      week: "Week 4",
      title: "Sustainable Routine & Optional Sauna Integration",
      duration: "Lifestyle Maintenance (3–4x weekly)",
      temperature: "Moderate Contrast: 15 min Warm Sauna / 60s Cool Rinse",
      target: "Long-Term Autonomic Resilience",
      description: "Establish a balanced routine. If you have access to a sauna and no cardiovascular contraindications, consider 10–15 minutes of moderate dry sauna bathing, followed by room-temperature rest and a cool rinse.",
      breathingCue: "Steady nasal breathing throughout. Sip room-temperature water with electrolytes post-session.",
      safetyNote: "Always hydrate before and after heat exposure. Never combine extreme heat with breath-holding or alcohol."
    }
  ];

  return (
    <div className="space-y-12 text-[#cac5be] leading-relaxed font-sans text-base sm:text-lg">

      {/* ARTICLE INTRODUCTION */}
      <section id="thermal-intro" className="space-y-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#12141e] border border-[#c5a059]/25 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider mb-2">
            <Thermometer className="w-4 h-4 text-[#c5a059]" />
            <span>Thermal Hormesis &amp; Autonomic Inoculation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4] leading-tight mb-4">
            Introduction: Thermal Hormesis and the Architecture of Stress Inoculation
          </h2>
          <p className="text-[#a4a7b5] text-base sm:text-lg leading-relaxed mb-4">
            Modern life has made it easy to avoid discomfort. We work in air-conditioned offices, drive in temperature-controlled cars, and spend most of our time in environments where the ambient temperature rarely fluctuates.
          </p>
          <p className="text-[#a4a7b5] text-base sm:text-lg leading-relaxed">
            Comfort has its advantages, but learning how to respond calmly to manageable physical challenges can also be deeply transformative. This is where <strong className="text-[#fbf9f4]">thermal conditioning</strong> enters the arena of masculine stamina and neurological resilience.
          </p>
        </div>

        <p>
          Thermal conditioning involves controlled exposure to heat or cold, using practices such as sauna bathing, cool showers, and carefully managed cold-water immersion. These methods have attracted significant scientific attention because of their observable effects on microvascular circulation, subjective mood, physical recovery kinetics, and the autonomic nervous system’s acute stress response.
        </p>

        <p>
          For the <strong className="text-[#dfc58b]">Art of Stamina</strong> approach, the most intriguing connection is between thermal conditioning and <strong className="text-[#fbf9f4]">nervous-system awareness</strong>.
        </p>

        <div className="my-6 p-5 rounded-xl bg-[#171926] border-l-4 border-[#c5a059] text-sm sm:text-base">
          <p className="text-[#fbf9f4] font-medium italic">
            "Sexual arousal elevates your heart rate, alters your breathing pattern, and causes muscles across the pelvic floor and lower abdomen to brace. If you become startled or anxious about these escalating sensations, you lose cognitive and muscular composure. Thermal conditioning trains you to witness intense sensory input without triggering involuntary fight-or-flight panic."
          </p>
        </div>

        <p>
          However, an essential, evidence-informed distinction must be established from the outset:
        </p>

        <div className="p-4 rounded-xl bg-[#231818] border border-red-500/30 text-sm text-[#f6d0d0] flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-red-300 uppercase text-xs tracking-wider">Clinical Ground Rule:</span>
            <p>
              <strong>Cold plunges and saunas are not proven medical treatments for premature ejaculation or guaranteed methods to multiply sexual endurance.</strong> Their physiological value lies in systemic cardiovascular health, parasympathetic down-regulation, and stress-management habits that support a broader, grounded approach to sexual health.
            </p>
          </div>
        </div>

        <p>
          In this masterclass, we will examine the biological mechanisms linking temperature exposure, endothelial circulation, the autonomic nervous system, recovery kinetics, and practical protocols you can adopt without turning your bathroom into an extreme survival stunt.
        </p>

        {/* HERO VISUAL ASSET */}
        <div className="my-8 rounded-2xl overflow-hidden border border-[#c5a059]/30 shadow-2xl bg-[#12141f]">
          <img 
            src={post.images?.hero} 
            alt="Cold exposure, sauna contrast therapy, and autonomic conditioning for masculine stamina" 
            className="w-full h-auto object-cover max-h-[500px]"
          />
          <div className="p-4 bg-[#0d0e15] border-t border-white/10 text-xs text-[#8e909a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <strong className="text-[#dfc58b]">Figure 1: Thermal Composure &amp; Autonomic Balance.</strong> Controlled transition between heat and cold teaches conscious down-regulation under acute physiological stress.
            </div>
            <span className="text-[#c5a059] font-mono text-[11px]">Art of Stamina Recovery Lab</span>
          </div>
        </div>
      </section>

      {/* CHAPTER 1 */}
      <section id="thermal-ch1" className="space-y-6">
        <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
          <Gauge className="w-4 h-4 text-[#c5a059]" />
          <span>Chapter 1</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
          Vascular Health and the Mechanics of Contrast Therapy
        </h2>

        <p>
          Your cardiovascular system plays an indispensable role in erectile quality and physical stamina.
        </p>

        <p>
          An erection depends on coordinated neurovascular signaling, pristine arterial health, and the complete relaxation of vascular smooth muscle within the corpora cavernosa, allowing pressurized arterial blood to engorge erectile tissue while venous outflow is temporarily restricted. Conditions that compromise systemic endothelial health or microvascular compliance will inevitably undermine sexual performance.
        </p>

        <p>
          This physiological reality explains why structured aerobic conditioning, blood-pressure management, smoking cessation, and nutrient-dense eating are fundamental pillars of masculine vitality.
        </p>

        {/* COMPANION INTERLINK: NITRIC OXIDE BLUEPRINT */}
        <div className="my-6 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Companion Masterclass</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Nitric Oxide Blueprint] Dietary Nitrates &amp; Endothelial Health
            </div>
            <div className="text-xs text-[#8e909a]">
              Discover how polyphenols, citrulline, and endothelial nitric oxide synthase (eNOS) drive maximum vascular perfusion.
            </div>
          </div>
          <Link
            to="/blog/nitric-oxide-blueprint-nutrition"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Nitric Oxide Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          1.1 How Contrast Therapy Works: Vasodilation Meets Vasoconstriction
        </h3>

        <p>
          Contrast therapy involves alternating between warm and cool environments, such as a comfortably warm shower followed by a brief period of cool water, or alternating between a Finnish sauna and a cool plunge pool.
        </p>

        <ul className="space-y-3 pl-2">
          <li className="flex items-start gap-3">
            <Sun className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-[#fbf9f4]">Thermal Vasodilation (Heat Exposure):</strong> When exposed to elevated temperatures, thermal sensors trigger cutaneous vasodilation. Smooth muscle surrounding peripheral arterioles relaxes, blood vessels widen, and blood is directed toward the skin surface to radiate surplus heat. Heart rate rises modestly, mimicking mild aerobic exercise.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Snowflake className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <strong className="text-[#fbf9f4]">Peripheral Vasoconstriction (Cold Exposure):</strong> When confronted with cold water, the sympathetic nervous system triggers rapid vasoconstriction in cutaneous and peripheral arterioles. Blood is shunted away from the periphery back toward core organs to preserve internal homeostatic temperature.
            </div>
          </li>
        </ul>

        {/* IMAGE 2: VASCULAR HEMODYNAMICS */}
        <div className="my-8 rounded-2xl overflow-hidden border border-[#c5a059]/30 shadow-2xl bg-[#12141f]">
          <img 
            src={post.images?.vascular} 
            alt="Vasodilation vs vasoconstriction hemodynamics in heat and cold contrast therapy" 
            className="w-full h-auto object-cover max-h-[480px]"
          />
          <div className="p-4 bg-[#0d0e15] border-t border-white/10 text-xs text-[#8e909a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <strong className="text-[#dfc58b]">Figure 2: Microvascular Hemodynamics.</strong> Cutaneous vasodilation under heat (38–42°C) expands the capillary bed, while cool exposure (15–20°C) activates precapillary sphincter shunting.
            </div>
            <span className="text-[#c5a059] font-mono text-[11px]">Endothelial Biology</span>
          </div>
        </div>

        <p>
          Some athletes find contrast showers invigorating after heavy training, while others prize them for subjective recovery. However, clinical evidence that contrast therapy directly increases penile capillary density or magically delays ejaculatory reflex thresholds remains limited.
        </p>

        <p>
          You do not need extreme, freezing temperatures to explore this biological phenomenon. Start with a standard warm shower and conclude with 15–30 seconds of comfortable cool water. The objective is to cultivate calm familiarity with sensory shifts, not to brutalize your physiology.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          1.2 Supporting Long-Term Vascular Health
        </h3>

        <p>
          Healthy cardiovascular function is constructed through sustained daily habits rather than a dramatic weekend ice plunge:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
          <div className="p-4 rounded-xl bg-[#171926] border border-white/10 space-y-2">
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-red-400" />
              <span>Zone 2 Cardio</span>
            </div>
            <p className="text-xs text-[#a4a7b5] leading-relaxed">
              150 minutes weekly of low-intensity aerobic exercise builds capillary density, lowers resting blood pressure, and preserves endothelial flexibility.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#171926] border border-white/10 space-y-2">
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Compound Resistance</span>
            </div>
            <p className="text-xs text-[#a4a7b5] leading-relaxed">
              Progressive strength training enhances insulin sensitivity, stimulates natural androgen pathways, and strengthens pelvic biomechanical support.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#171926] border border-white/10 space-y-2">
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
              <Moon className="w-3.5 h-3.5 text-indigo-400" />
              <span>Restorative Sleep</span>
            </div>
            <p className="text-xs text-[#a4a7b5] leading-relaxed">
              Deep slow-wave sleep drives nocturnal penile tumescence (NPT), oxygenating cavernous tissue and resetting neurochemical sensitivity.
            </p>
          </div>
        </div>

        <p>
          If you experience chronic erection difficulties, do not assume that cold plunging is an effective remedy. Erectile dysfunction is frequently an early warning indicator of endothelial dysfunction or metabolic disease; consult a physician for a thorough evaluation.
        </p>
      </section>

      {/* CHAPTER 2 */}
      <section id="thermal-ch2" className="space-y-6">
        <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
          <BrainCircuit className="w-4 h-4 text-[#c5a059]" />
          <span>Chapter 2</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
          Cold Exposure and Nervous-System Regulation
        </h2>

        <p>
          When unconditioned skin contacts cold water, the human body produces an instantaneous, primitive survival reaction: the <strong className="text-[#fbf9f4]">cold-shock response</strong>.
        </p>

        <p>
          Cutaneous cold receptors fire thousands of urgent action potentials into the spinal cord and brainstem. In a fraction of a second:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-[#a4a7b5]">
          <li>An involuntary inspiratory gasp occurs, followed by rapid, shallow hyperventilation.</li>
          <li>Sympathetic tone spikes, releasing epinephrine and norepinephrine.</li>
          <li>Peripheral vessels constrict, driving heart rate and blood pressure upward.</li>
          <li>Skeletal muscles instinctively brace, curling inward into protective flexion.</li>
        </ul>

        {/* IMAGE 3: AUTONOMIC STRESS BRIDGE */}
        <div className="my-8 rounded-2xl overflow-hidden border border-[#c5a059]/30 shadow-2xl bg-[#12141f]">
          <img 
            src={post.images?.autonomic} 
            alt="Autonomic stress inoculation mechanism: from acute sympathetic surge to vagal recovery and composure" 
            className="w-full h-auto object-cover max-h-[500px]"
          />
          <div className="p-4 bg-[#0d0e15] border-t border-white/10 text-xs text-[#8e909a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <strong className="text-[#dfc58b]">Figure 3: The Stress Inoculation Mechanism.</strong> Conscious vagal nerve activation (CN X) overrides the amygdala's panic loop via slow exhalation, mirroring bedroom arousal control.
            </div>
            <span className="text-[#c5a059] font-mono text-[11px]">Autonomic Neurobiology</span>
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          2.1 Learning to Stay Calm During Discomfort: Stress Inoculation
        </h3>

        <p>
          The true benefit of cold exposure is not how freezing you can make the water or how much suffering you endure. Its authentic utility lies in the <strong className="text-[#dfc58b]">conscious cognitive override</strong>: noticing your instinctual panic reaction and deliberately choosing composure instead.
        </p>

        <p>
          In a cool shower, you observe your shoulders hitching toward your ears, your jaw clenching, and your breathing becoming ragged. Instead of battling the sensation or tensing against the water, you execute a conscious down-regulation sequence:
        </p>

        <div className="p-4 rounded-xl bg-[#161826] border border-[#c5a059]/30 text-sm space-y-2">
          <div className="font-bold text-[#dfc58b] text-xs uppercase tracking-wider">The Down-Regulation Protocol:</div>
          <ol className="list-decimal pl-5 space-y-1.5 text-[#cac5be]">
            <li>Drop your shoulders down and away from your ears.</li>
            <li>Part your teeth, soften your jaw, and let your tongue rest on the floor of your mouth.</li>
            <li>Override the gasp reflex with a long, slow 6-second nasal exhalation.</li>
            <li>Release any guarding in your abdominal wall and allow your pelvic floor to relax downward.</li>
          </ol>
        </div>

        <p>
          This is classic <strong className="text-[#fbf9f4]">Stress Inoculation Training</strong>.
        </p>

        <p>
          This identical neural skill is directly applicable to the bedroom. During intense intimacy, as physical stimulation escalates toward Level 7 or 8 on the Arousal Scale, an unconditioned man's nervous system mirrors the cold-shock response: breathing turns shallow, thighs and glutes lock, and the pelvic floor clenches spasmodically, triggering the involuntary ejaculatory reflex.
        </p>

        <p>
          When you have trained your prefrontal cortex to remain calm in the presence of cold water, you can instantly apply that somatic awareness during intimacy: recognize the tension spike, slow your breath, soften your pelvic floor, and remain completely composed.
        </p>

        {/* COMPANION INTERLINK: BREATH MASTERY */}
        <div className="my-6 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <Wind className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Breathing Architecture</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Respiratory Engine] The Breath of Stamina: Arousal Control
            </div>
            <div className="text-xs text-[#8e909a]">
              Master diaphragmatic respiration, the physiological sigh, and the pelvic-diaphragmatic piston.
            </div>
          </div>
          <Link
            to="/blog/the-breath-of-stamina-arousal-control-breathwork"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Explore Breath Mastery</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          2.2 Understanding the Vagus Nerve and Parasympathetic Tone
        </h3>

        <p>
          The <strong className="text-[#fbf9f4]">vagus nerve</strong> (Cranial Nerve X) constitutes the main highway of the parasympathetic nervous system, innervating the heart, lungs, and digestive tract. When vagal tone is elevated, heart rate decelerates, heart rate variability (HRV) increases, and the body shifts into "rest, digest, and relate" physiology.
        </p>

        <p>
          Prolonged, gentle exhalations stimulate the pulmonary stretch receptors, recruiting the vagus nerve to slow sinoatrial node firing in the heart.
        </p>

        <p>
          However, extreme cold immersion does not grant you instant voluntary mastery over your vagal nerve. In fact, sudden ice baths trigger severe sympathetic tachycardia. If your objective is simply learning autonomic calming, begin with quiet, slow diaphragmatic breathing in a comfortable chair. You do not need an ice barrel to develop deep parasympathetic control.
        </p>
      </section>

      {/* CHAPTER 3 */}
      <section id="thermal-ch3" className="space-y-6">
        <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
          <Zap className="w-4 h-4 text-[#c5a059]" />
          <span>Chapter 3</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
          The Neurochemical Response to Cold: Dopamine, Norepinephrine, and Focus
        </h2>

        <p>
          Cold exposure stimulates profound alterations in circulating neurochemicals and catecholamines.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          3.1 Dopamine and Alertness
        </h3>

        <p>
          Research examining cold-water immersion (such as subjects immersed in 14°C water for prolonged laboratory durations) has documented substantial elevations in plasma concentrations of <strong className="text-[#fbf9f4]">norepinephrine</strong> and sustained increases in <strong className="text-[#fbf9f4]">dopamine</strong>.
        </p>

        <p>
          Dopamine regulates motivation, reward anticipation, and focus, while norepinephrine drives acute vigilance and energetic readiness. This neurochemical release explains why individuals report feeling acutely energized, mentally sharp, and invigorated following a cold rinse.
        </p>

        <p>
          Nonetheless, individual results vary widely depending on water temperature, immersion duration, and personal adaptation. A brief 30-second cool shower does not replicate a clinical one-hour cold plunge, nor does it guarantee a specific hormonal boost. Enjoy the clean alertness of a cool shower without attributing supernatural powers to it.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          3.2 Does Cold Exposure Reset Dopamine Receptors?
        </h3>

        <p>
          There is no clinical evidence demonstrating that ice baths or cold plunges "reset" down-regulated D2 dopamine receptors or cure porn-induced sexual difficulties.
        </p>

        <p>
          If digital over-stimulation, algorithmic scrolling, or chronic pornography consumption has desensitized your reward circuits, physical temperature is not a magic eraser. True neurological recovery requires behavioral discipline:
        </p>

        {/* COMPANION INTERLINK: DOPAMINE RESET */}
        <div className="my-6 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <BrainCircuit className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Neurobiology Guide</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Neural Reset] Dopamine Fasting &amp; Neurological Desensitization
            </div>
            <div className="text-xs text-[#8e909a]">
              The 30-day clinical protocol to restore D2 receptor sensitivity and master neurological composure.
            </div>
          </div>
          <Link
            to="/blog/dopamine-fasting-neurological-desensitization-stamina"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Dopamine Reset</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p>
          Use cool showers as a supplementary tool for waking up your senses and anchoring your morning routine—not as an excuse to avoid behavioral habit restructuring.
        </p>
      </section>

      {/* CHAPTER 4 */}
      <section id="thermal-ch4" className="space-y-6">
        <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
          <Flame className="w-4 h-4 text-[#c5a059]" />
          <span>Chapter 4</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
          Heat Shock Proteins and the Benefits of Sauna Use
        </h2>

        <p>
          Heat exposure initiates a distinct, restorative cascade of physiological adaptations.
        </p>

        <p>
          When core body temperature increases during a 15-minute sauna session, the cardiovascular system works actively to dissipate heat. At the cellular tier, thermal stress triggers the expression of <strong className="text-[#fbf9f4]">Heat Shock Proteins (HSPs)</strong>, notably HSP70 and HSP90.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          4.1 What Heat Shock Proteins Do
        </h3>

        <p>
          Heat shock proteins act as cellular chaperones. When proteins become denatured or damaged by oxidative stress, high temperatures, or metabolic waste products, HSPs assist in refolding those proteins into their functional three-dimensional conformations, preventing cellular degradation.
        </p>

        <div className="p-4 rounded-xl bg-[#171926] border border-white/10 text-sm space-y-2">
          <div className="font-bold text-[#dfc58b] text-xs uppercase tracking-wider">Cellular Benefits of Thermal Hormesis:</div>
          <ul className="list-disc pl-5 space-y-1.5 text-[#a4a7b5]">
            <li>Assists cellular maintenance and repair during recovery periods.</li>
            <li>Stimulates endothelial nitric oxide synthase (eNOS), promoting vascular elasticity.</li>
            <li>Reduces systemic inflammatory markers (such as C-reactive protein) over sustained multi-week protocols.</li>
          </ul>
        </div>

        <p>
          It is essential, however, to remain scientifically grounded: sauna sessions do not selectively repair penile tissues or guarantee miraculous improvements in bedroom performance. They are systemic health enhancers, not targeted pharmacological agents.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          4.2 Sauna Use and Cardiovascular Fitness
        </h3>

        <p>
          Extensive prospective observational data from Finland has shown strong correlations between frequent sauna use (4–7 sessions per week) and reduced risks of cardiovascular disease and all-cause mortality.
        </p>

        <p>
          A hot sauna raises heart rate to 100–140 beats per minute, mimicking moderate brisk walking. Yet sitting in a heated room cannot replace active muscular contraction. Walking, cycling, rowing, and resistance training build muscular mitochondria, bone density, and mechanical power in ways passive heat can never replicate.
        </p>

        <p>
          Treat the sauna as a luxurious recovery ritual, not a substitute for sweat earned through athletic exertion.
        </p>
      </section>

      {/* CHAPTER 5 */}
      <section id="thermal-ch5" className="space-y-6">
        <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
          <Activity className="w-4 h-4 text-[#c5a059]" />
          <span>Chapter 5</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
          Testicular Temperature and Hormonal Health
        </h2>

        <p>
          Male evolutionary biology positioned the testes outside the abdominal cavity within the scrotum for a precise physiological reason: <strong className="text-[#fbf9f4]">spermatogenesis thrives at a temperature approximately 2°C to 4°C below core body temperature</strong>.
        </p>

        <p>
          The cremaster and dartos muscles dynamically contract or relax to position the testes closer to or further from the body in response to environmental temperatures.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          5.1 Heat and Male Fertility
        </h3>

        <p>
          Frequent, prolonged testicular heating—such as daily prolonged hot-tub soaking, resting heavy heated laptops directly on the groin, or wearing excessively tight synthetic undergarments—can temporarily reduce sperm count, motility, and morphology.
        </p>

        <p>
          Crucially, spermatogenesis (sperm production in the seminiferous tubules) is regulated differently than steroidogenesis (testosterone synthesis in Leydig cells). While sperm cells are highly sensitive to thermal stress, Leydig cells are significantly more resilient. Moderate, intermittent sauna bathing does not collapse male testosterone levels.
        </p>

        {/* COMPANION INTERLINK: ENDOCRINE ARCHITECTURE */}
        <div className="my-6 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Hormonal Health</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Endocrine Architecture] The Testosterone-Stamina Axis
            </div>
            <div className="text-xs text-[#8e909a]">
              The biological mechanisms of Leydig cells, free testosterone, cortisol balance, and sleep.
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

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          5.2 Does Cooling the Testicles Increase Testosterone?
        </h3>

        <p>
          Internet biohacking forums frequently promote icing the scrotum to stimulate superhuman testosterone levels.
        </p>

        <p>
          <strong className="text-[#dfc58b]">There is no robust clinical evidence supporting the claim that applying ice or freezing packs to the scrotum elevates systemic testosterone or cures premature ejaculation.</strong>
        </p>

        <p>
          Direct application of ice to scrotal tissue risks skin burn, tissue damage, and reactive inflammation. For everyday hormonal optimization, the solution is simple: wear breathable, non-restrictive clothing, avoid hours of uninterrupted seated groin compression, and maintain cool bedroom sleep temperatures.
        </p>
      </section>

      {/* CHAPTER 6 */}
      <section id="thermal-ch6" className="space-y-6">
        <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
          <Compass className="w-4 h-4 text-[#c5a059]" />
          <span>Chapter 6</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
          The Thermal Bridge — Bringing Calm Into the Bedroom
        </h2>

        <p>
          The most practical lesson from thermal conditioning is that you can perceive intense physical sensations without automatically panicking, bracing, or losing cognitive control.
        </p>

        <p>
          That exact capacity transforms your sexual stamina.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          6.1 Recognizing Your Early Arousal Signals
        </h3>

        <p>
          During intimate encounters, pay close attention to your body's early physiological warning signs:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 text-sm">
          <div className="p-3.5 rounded-xl bg-[#171926] border border-white/5 flex items-start gap-3">
            <Wind className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#fbf9f4]">Thoracic Breathing:</strong> Breathing shifts from deep belly expansion into shallow, rapid chest gasps.
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#171926] border border-white/5 flex items-start gap-3">
            <Layers className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#fbf9f4]">Pelvic Floor Bracing:</strong> Unconscious clenching of the bulbospongiosus and levator ani muscles.
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#171926] border border-white/5 flex items-start gap-3">
            <Zap className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#fbf9f4]">Peripheral Tension:</strong> Jaw clenching, toes gripping the bedsheets, buttocks squeezed tight.
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#171926] border border-white/5 flex items-start gap-3">
            <Heart className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#fbf9f4]">Acoustic Racing:</strong> Heart rate accelerating past comfortable pacing into anticipatory panic.
            </div>
          </div>
        </div>

        <p>
          These cues are not signs that you are broken. They are simply neutral data points signaling that your autonomic nervous system is climbing the Arousal Scale.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          6.2 The 5-Step Calm-Response Technique
        </h3>

        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#181a28] to-[#12141f] border border-[#c5a059]/40 space-y-4">
          <div className="font-serif font-bold text-lg text-[#fbf9f4] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#c5a059]" />
            <span>The 5-Step In-the-Moment Reset Protocol</span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#c5a059] text-black font-bold flex items-center justify-center flex-shrink-0 text-xs">1</span>
              <div>
                <strong className="text-[#fbf9f4]">Relax your shoulders and jaw:</strong> Consciously unclamp teeth, drop shoulders, and soften facial expression.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#c5a059] text-black font-bold flex items-center justify-center flex-shrink-0 text-xs">2</span>
              <div>
                <strong className="text-[#fbf9f4]">Slow your respiratory cadence:</strong> Inhale smoothly into the lower abdomen; extend your exhale without holding your breath.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#c5a059] text-black font-bold flex items-center justify-center flex-shrink-0 text-xs">3</span>
              <div>
                <strong className="text-[#fbf9f4]">Release involuntary pelvic gripping:</strong> Perform a gentle Reverse Kegel—expand the perineum downward as if blowing a gentle bubble.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#c5a059] text-black font-bold flex items-center justify-center flex-shrink-0 text-xs">4</span>
              <div>
                <strong className="text-[#fbf9f4]">Modulate rhythm and pause:</strong> If arousal crosses Level 7, adjust stroke cadence, alter positioning, or pause completely.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#c5a059] text-black font-bold flex items-center justify-center flex-shrink-0 text-xs">5</span>
              <div>
                <strong className="text-[#fbf9f4]">Stay emotionally grounded with your partner:</strong> Maintain eye contact, touch, and verbal intimacy. Sex is shared connection, not a solitary timed exam.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 7 & INTERACTIVE 4-WEEK PROTOCOL */}
      <section id="thermal-ch7" className="space-y-6">
        <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
          <Sliders className="w-4 h-4 text-[#c5a059]" />
          <span>Chapter 7</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
          A Four-Week Progressive Thermal Routine
        </h2>

        <p>
          You do not need to dive into frozen alpine lakes to build real autonomic resilience. The following framework is built around gradual progression, comfort, and parasympathetic training rather than extreme, hazardous cold.
        </p>

        {/* IMAGE 4: 4-WEEK INFOGRAPHIC */}
        <div className="my-8 rounded-2xl overflow-hidden border border-[#c5a059]/30 shadow-2xl bg-[#12141f]">
          <img 
            src={post.images?.routine} 
            alt="4-week thermal conditioning and autonomic recovery protocol for men" 
            className="w-full h-auto object-cover max-h-[500px]"
          />
          <div className="p-4 bg-[#0d0e15] border-t border-white/10 text-xs text-[#8e909a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <strong className="text-[#dfc58b]">Figure 4: The 4-Week Conditioning Architecture.</strong> Progressive transition from cool finishes to autonomic down-regulation and sustainable lifestyle recovery.
            </div>
            <span className="text-[#c5a059] font-mono text-[11px]">Training Protocols</span>
          </div>
        </div>

        {/* INTERACTIVE 4-WEEK STEPPER TOOL */}
        <div id="thermal-interactive" className="my-8 p-6 sm:p-8 rounded-2xl bg-[#141624] border border-[#c5a059]/40 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="text-xs text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-[#c5a059]" />
                <span>Interactive Protocol Explorer</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fbf9f4]">
                The 4-Week Thermal Progression Routine
              </h3>
            </div>
            <span className="text-xs text-[#8e909a] font-mono">Click Week to View Protocol</span>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {thermalWeeks.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveWeekStep(idx)}
                className={`py-3 px-3 rounded-xl text-left border transition-all cursor-pointer ${
                  activeWeekStep === idx
                    ? 'bg-[#c5a059] text-black font-bold border-[#c5a059] shadow-lg'
                    : 'bg-[#1a1d2d] text-[#8e909a] border-white/5 hover:border-white/20 hover:text-[#fbf9f4]'
                }`}
              >
                <div className="text-[10px] uppercase tracking-wider opacity-80">{item.week}</div>
                <div className="text-xs font-semibold truncate">{item.title}</div>
              </button>
            ))}
          </div>

          {/* Active Card Content */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#0e101a] border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div>
                <span className="text-[11px] font-mono text-[#c5a059] uppercase tracking-wider font-bold">
                  {thermalWeeks[activeWeekStep].week} — Primary Focus
                </span>
                <h4 className="text-lg font-serif font-bold text-[#fbf9f4]">
                  {thermalWeeks[activeWeekStep].title}
                </h4>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded bg-[#1f2337] text-[#dfc58b] border border-white/10">
                  {thermalWeeks[activeWeekStep].duration}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#141726] border border-white/5">
                <span className="text-[#8e909a] block font-mono">TARGET TEMPERATURE:</span>
                <span className="text-[#fbf9f4] font-medium">{thermalWeeks[activeWeekStep].temperature}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#141726] border border-white/5">
                <span className="text-[#8e909a] block font-mono">AUTONOMIC OBJECTIVE:</span>
                <span className="text-[#dfc58b] font-medium">{thermalWeeks[activeWeekStep].target}</span>
              </div>
            </div>

            <p className="text-sm text-[#cac5be] leading-relaxed">
              {thermalWeeks[activeWeekStep].description}
            </p>

            <div className="p-3.5 rounded-lg bg-[#171a2c] border-l-4 border-cyan-400 text-xs text-[#a4c7e6] space-y-1">
              <strong className="text-cyan-300 flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5" />
                <span>Breathwork &amp; Mental Focus:</span>
              </strong>
              <p>{thermalWeeks[activeWeekStep].breathingCue}</p>
            </div>

            <div className="p-3 rounded-lg bg-[#241717] border border-red-500/20 text-xs text-[#f1c1c1] flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>{thermalWeeks[activeWeekStep].safetyNote}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 8 */}
      <section id="thermal-ch8" className="space-y-6">
        <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          <span>Chapter 8</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
          Safety, Contraindications, and Training Timing
        </h2>

        <p>
          Thermal conditioning carries genuine physiological risks when performed aggressively. Sudden cold exposure causes an acute surge in systemic vascular resistance and cardiac workload, while extreme heat induces rapid fluid loss, hypotension, and syncope.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div className="p-5 rounded-xl bg-[#1c1417] border border-red-500/30 space-y-3">
            <h4 className="font-serif font-bold text-base text-red-300 flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-cyan-400" />
              <span>Cold-Water Safety Essentials</span>
            </h4>
            <ul className="text-xs text-[#d8c3c3] space-y-2 list-disc pl-4 leading-relaxed">
              <li><strong>Never hyperventilate or hold your breath</strong> prior to entering cold water. Doing so creates shallow-water blackout risks and cardiac arrhythmias.</li>
              <li>Avoid unsupervised extreme plunges in open natural water.</li>
              <li>If you have diagnosed cardiovascular disease, severe hypertension, Raynaud's phenomenon, or arrhythmias, avoid intense cold exposure without direct medical approval.</li>
              <li>Exit water immediately if you experience chest pain, numbness, blue lips, or confusion.</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-[#1c1814] border border-amber-500/30 space-y-3">
            <h4 className="font-serif font-bold text-base text-amber-300 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Sauna Safety Precautions</span>
            </h4>
            <ul className="text-xs text-[#d8cebe] space-y-2 list-disc pl-4 leading-relaxed">
              <li>Start with shorter durations (10–15 minutes) at 70–80°C before attempting hotter sessions.</li>
              <li>Exit immediately if dizziness, palpitations, or lightheadedness arise.</li>
              <li>Hydrate generously with water and electrolytes before and after sessions.</li>
              <li>Never consume alcohol before or during sauna use. Alcohol impairs thermoregulation and causes severe hypotensive collapse.</li>
            </ul>
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          8.3 Cold Exposure After Strength Training
        </h3>

        <p>
          If hypertrophy (muscle building) and maximal strength are your athletic priorities, timing matters.
        </p>

        <p>
          Repeated studies show that substantial cold-water immersion (ice baths) performed within 4 hours following resistance training blunts the intracellular signaling cascades (such as mTOR) that govern muscle protein synthesis, reducing long-term muscle gains.
        </p>

        <p>
          A brief 30-second cool shower will not destroy your gains. However, if you practice dedicated cold immersions, schedule them on rest days or at least 4 to 6 hours after your weightlifting sessions.
        </p>
      </section>

      {/* CHAPTER 9 */}
      <section id="thermal-ch9" className="space-y-6">
        <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
          <Droplets className="w-4 h-4 text-[#c5a059]" />
          <span>Chapter 9</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
          Brown Fat, Metabolism, and Physical Stamina
        </h2>

        <p>
          Cold exposure stimulates the recruitment of <strong className="text-[#fbf9f4]">Brown Adipose Tissue (BAT)</strong>.
        </p>

        <p>
          Unlike white adipose tissue, which primarily functions as an inert energy storage depot, brown fat is packed with iron-rich mitochondria expressing Uncoupling Protein 1 (UCP-1). When activated by norepinephrine, brown fat burns fatty acids and glucose directly to generate heat—a phenomenon termed <strong className="text-[#dfc58b]">non-shivering thermogenesis</strong>.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          9.1 What Brown Fat Means for Stamina
        </h3>

        <p>
          BAT activation improves systemic insulin sensitivity and energy expenditure, but it does not magically melt thirty pounds of visceral fat or automatically guarantee you can last twenty minutes in bed.
        </p>

        <p>
          True physical stamina during lovemaking is built on:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-[#a4a7b5]">
          <li><strong>Mitochondrial efficiency</strong> developed through consistent aerobic Zone 2 cardio.</li>
          <li><strong>Hip and pelvic core stability</strong> developed through deadlifts, squats, and functional mobility.</li>
          <li><strong>Autonomic breath mastery</strong> that keeps heart rate out of the red zone.</li>
        </ul>

        <p>
          Consider cold exposure an intriguing metabolic polish, not the cornerstone of athletic endurance.
        </p>
      </section>

      {/* CHAPTER 10: FAQ */}
      <section id="thermal-faq" className="space-y-6">
        <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
          <HelpCircle className="w-4 h-4 text-[#c5a059]" />
          <span>Chapter 10</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
          Frequently Asked Questions: Thermal Conditioning &amp; Sexual Performance
        </h2>

        <p className="text-[#a4a7b5]">
          Clear, evidence-grounded answers to the most common questions regarding cold plunges, saunas, and bedroom stamina.
        </p>

        <div className="space-y-3 pt-2">
          {[
            {
              q: "How quickly will cold therapy improve my bedroom endurance?",
              a: "There is no scientific timeline because cold therapy has not been demonstrated to directly treat premature ejaculation or multiply ejaculatory latency. You may notice that cool showers improve morning alertness and breath awareness within days, but treating bedroom anxiety requires conscious pelvic floor relaxation, pacing, and behavioral communication."
            },
            {
              q: "Should I take a cold shower immediately before intimacy?",
              a: "No. A cold shower right before intimacy is counterproductive. Cold water causes peripheral vasoconstriction, tightens scrotal tissues, and stimulates sympathetic adrenaline—the opposite of the relaxed, warm parasympathetic state optimal for strong erections and comfortable pacing. Warmth, emotional connection, and calm breathing are far superior."
            },
            {
              q: "Can sauna use replace cardiovascular training?",
              a: "No. While sauna bathing raises your heart rate through thermal stress, it does not involve skeletal muscle contractions, joint loading, or eccentric work. Walking briskly, cycling, swimming, and weight training deliver metabolic, vascular, and hormonal adaptations that sitting in a sauna cannot replace."
            },
            {
              q: "Does icing the scrotum increase testosterone or help stamina?",
              a: "There is zero clinical evidence supporting scrotal icing for testosterone elevation. Furthermore, applying ice packs directly to delicate scrotal skin carries risks of frostbite, tissue necrosis, and nerve irritation. Avoid this internet myth."
            },
            {
              q: "What is the single most valuable takeaway from cold exposure for stamina?",
              a: "Stress Inoculation. Learning to witness intense physical sensation (cold water) without gasping, clenching your jaw, or tensing your pelvic floor. That exact skill allows you to stay calm when sexual excitement intensifies during intimacy."
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="rounded-xl bg-[#141624] border border-white/10 overflow-hidden transition-all"
            >
              <button
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

      {/* CONCLUSION & MASTER BRIDGE */}
      <section id="thermal-conclusion" className="space-y-6 pt-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#181a28] to-[#10121d] border border-[#c5a059]/40 space-y-5">
          <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Conclusion</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Conclusion: The Calm and Capable Body
          </h2>

          <p className="text-[#cac5be]">
            The <strong className="text-[#dfc58b]">Art of Stamina</strong> is not about proving that you can endure the most agonizing ice bath or survive the hottest sauna. It is about understanding your biological responses and learning to meet physical sensations with measured, conscious composure.
          </p>

          <p className="text-[#cac5be]">
            Cold water can be bracing. Heat can be restorative. Slow breathing grounds your nervous system. Regular exercise strengthens your heart and vascular bed. Each modality serves a precise purpose, and none requires extreme exaggeration to be valuable.
          </p>

          <div className="my-4 p-4 rounded-xl bg-[#12141f] border-l-4 border-[#c5a059] text-base text-[#fbf9f4] font-serif italic">
            "True stamina is not the absence of sensation. It is the ability to respond to your body without unnecessary panic, bracing, or tension."
          </div>

          <p className="text-[#cac5be]">
            You do not need to shock your nervous system into submission. Start with small, sustainable adjustments. Move your body daily. Breathe deeply. Pay attention to muscular tension before it spirals.
          </p>
        </div>

        {/* MASTER BRIDGE TO THE EBOOK */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#141624] border-2 border-[#c5a059]/50 shadow-2xl space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-[11px] font-mono text-[#dfc58b] uppercase tracking-widest font-bold">
              THE COMPLETE ART OF STAMINA SYSTEM
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Unlock the Full Stamina Mastery Manual
            </h3>
            <p className="text-xs sm:text-sm text-[#8e909a] leading-relaxed">
              Thermal conditioning is merely one facet of autonomic self-mastery. In the comprehensive 68-page <strong>Stamina Mastery Manual</strong>, you will discover clinical pelvic drills, respiratory pacing sequences, and autonomic down-regulation protocols designed for permanent bedroom confidence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2">
            <div className="cursor-pointer" onClick={onLockerClick}>
              <BookMockup size="compact" />
            </div>

            <div className="space-y-4 max-w-sm text-center sm:text-left">
              <div className="space-y-2 text-xs text-[#a4a7b5]">
                <div className="flex items-center gap-2 justify-center sm:justify-start text-[#fbf9f4]">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  <span>Reverse Kegel Pacing &amp; Biofeedback Protocols</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start text-[#fbf9f4]">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  <span>The 1–10 Arousal Scale Mastery Chart</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start text-[#fbf9f4]">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  <span>Neurovascular Endothelial Restoration Guide</span>
                </div>
              </div>

              <a
                href="javascript:void(0);"
                onClick={onLockerClick}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#c5a059] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all no-underline shadow-lg cursor-pointer"
              >
                <span>DOWNLOAD FREE MASTERY MANUAL (PDF)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="text-[11px] text-[#71737e] text-center italic pt-2">
            Educational disclaimer: This article is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Thermal conditioning carries risks, particularly for people with cardiovascular or other medical conditions. Seek professional advice before attempting intense heat or cold exposure.
          </div>
        </div>
      </section>

    </div>
  );
}
