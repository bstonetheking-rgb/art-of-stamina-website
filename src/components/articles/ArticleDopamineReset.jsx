import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight, 
  BookOpen, 
  Smartphone, 
  Eye, 
  RotateCcw, 
  Sliders, 
  Layers, 
  Pill, 
  AlertCircle,
  HelpCircle,
  Clock,
  Compass,
  Check
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticleDopamineReset({ post, onLockerClick }) {
  // Accordion FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  // Interactive Diagnostic State
  const [screenTime, setScreenTime] = useState(6); // hours
  const [pornFrequency, setPornFrequency] = useState(4); // times per week
  const [multiScreening, setMultiScreening] = useState(true); // scrolling while watching TV/eating
  const [urgeReaction, setUrgeReaction] = useState('immediate'); // 'immediate', 'few-mins', 'controlled'
  const [flatlineAnxiety, setFlatlineAnxiety] = useState(false);

  // 30-Day Interactive Tracker active phase
  const [activePhase, setActivePhase] = useState(1);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate Neural Saturation Index (0 - 100)
  const calculateSaturationScore = () => {
    let score = 20;
    score += Math.min(screenTime * 5, 35);
    score += Math.min(pornFrequency * 7, 25);
    if (multiScreening) score += 10;
    if (urgeReaction === 'immediate') score += 10;
    else if (urgeReaction === 'few-mins') score += 5;
    return Math.min(score, 100);
  };

  const saturationScore = calculateSaturationScore();

  return (
    <div className="space-y-12 text-[#cac5be] leading-relaxed font-sans text-base sm:text-lg">

      {/* ARTICLE INTRODUCTION */}
      <section id="neural-intro" className="space-y-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#12141e] border border-[#c5a059]/25 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider mb-2">
            <Brain className="w-4 h-4" />
            <span>Clinical Neurobiology &amp; Arousal Regulation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4] leading-tight mb-4">
            The Digital Overload Crisis: Why Modern Stamina Fails in the Prefrontal Cortex
          </h2>
          <p className="text-[#a4a7b5] text-base sm:text-lg leading-relaxed mb-4">
            There is something fundamentally different about the sensory environment the modern man inhabits. Human beings evolved across millennia where stimulation was scarce, sporadic, and metabolically expensive. Today, your nervous system experiences hundreds of digital pings, infinite algorithmic algorithmic feeds, high-definition gaming, and thousands of novel sexual partners streaming directly to your retina before you step out of bed.
          </p>
          <p className="text-[#a4a7b5] text-base sm:text-lg leading-relaxed">
            The core crisis is not simply technology. The evolutionary trap is <strong className="text-[#fbf9f4]">constant super-stimulation without biological recovery</strong>.
          </p>
        </div>

        <p>
          We live in an age of sensory <em className="text-[#dfc58b] font-medium">“super-stimuli”</em>—synthetic experiences engineered to trigger unusually intense, immediate, and repeated spikes in the brain's ventral tegmental reward loop.
        </p>

        <p>
          And for millions of men, the neurological fallout reveals itself in an unexpected sanctuary: the bedroom.
        </p>

        <p>
          You might boast an athletic physique. You might bench press double your bodyweight. You might eat clean, sleep eight hours, and religiously practice isolated pelvic floor contractions. Yet the second intimate skin-to-skin contact begins, your autonomic nervous system redlines into uncontrollable arousal within seconds. Or alternatively, you struggle to maintain focus and spontaneous hardness with a real human being.
        </p>

        <div className="my-6 p-5 rounded-xl bg-[#171926] border-l-4 border-[#c5a059] text-sm sm:text-base">
          <p className="text-[#fbf9f4] font-medium italic">
            "Sometimes the dysfunction is not within the pelvic floor musculature or the penile vasculature. It is inside the central nervous system command center orchestrating those muscles."
          </p>
        </div>

        <p>
          Your central nervous system controls sexual excitement, attentional filtering, sympathetic discharge, sensory anticipation, and somatic presence. When your baseline neurochemistry is trained on rapid novelty and instant gratification, intimate real-world touch feels either under-stimulating—or so hyper-reactive that the ejaculatory reflex fires before you can intervene.
        </p>

        <p>
          This is where <strong className="text-[#fbf9f4]">neurological desensitization</strong> becomes the ultimate biohack. The objective is not chemical castrative asceticism or moral suppression. The objective is resetting your neural baseline so your brain experiences profound, involuntary endurance at normal physiological levels of pleasure.
        </p>

        {/* HERO IMAGE */}
        {post.images?.hero && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-2xl">
            <img 
              src={post.images.hero} 
              alt="Dopamine fasting and neurological desensitization for elite sexual stamina"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[480px]"
            />
            <div className="p-4 bg-[#0d0f17] border-t border-white/5 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 1: Cortical &amp; Mesolimbic Regulation — Re-establishing Prefrontal Brake Systems over Subcortical Arousal Surges.</span>
              <span className="text-[#c5a059] font-mono font-bold">BIO-NEURO-01</span>
            </div>
          </div>
        )}
      </section>

      {/* CHAPTER 1: BIOLOGY OF THE REWARD CIRCUIT */}
      <section id="neural-ch1" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            01
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            The Biology of the Reward Circuit: Dopamine vs. Serotonin
          </h2>
        </div>

        <p>
          To command neurological arousal control, you must dissect the biochemical architecture of your reward pathway. Two primary neurotransmitters govern this continuum: <strong className="text-[#fbf9f4]">Dopamine and Serotonin</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
          <div className="p-6 rounded-xl bg-[#141624] border border-[#3b82f6]/30 space-y-3">
            <div className="flex items-center gap-2 text-[#60a5fa] font-bold text-sm uppercase">
              <Zap className="w-4 h-4" />
              <span>1.1 Dopamine: The "More" Molecule</span>
            </div>
            <p className="text-sm text-[#cac5be]">
              Dopamine does not signal satisfaction; it manufactures <strong className="text-[#fbf9f4]">anticipatory drive</strong>, reward prediction error, novelty hunger, and the biological urge to pursue. It is the evolutionary gas pedal designed to hunt, forage, and mate.
            </p>
            <div className="text-xs text-[#8e909a] bg-black/30 p-2.5 rounded-lg">
              <strong>Bedroom Impact:</strong> Drives visual hyper-arousal, rapid pulse acceleration, and fast-paced forward momentum. When uncalibrated, it bypasses the prefrontal cortex and directly ignites the spinal ejaculatory reflex.
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#141624] border border-[#10b981]/30 space-y-3">
            <div className="flex items-center gap-2 text-[#34d399] font-bold text-sm uppercase">
              <Sparkles className="w-4 h-4" />
              <span>1.2 Serotonin: The "Enough" Signal</span>
            </div>
            <p className="text-sm text-[#cac5be]">
              Serotonin delivers somatic tranquility, regulatory equilibrium, emotional contentment, and the feeling of <strong className="text-[#fbf9f4]">satiation</strong>. It tells the nervous system that you have arrived and can settle into present reality.
            </p>
            <div className="text-xs text-[#8e909a] bg-black/30 p-2.5 rounded-lg">
              <strong>Bedroom Impact:</strong> Anchors parasympathetic tone, stabilizes heart rate, maintains firm vascular tone without anxiety, and acts as the central neurotransmitter brake preventing premature climax.
            </div>
          </div>
        </div>

        <p>
          Think about the neurochemical sequence of a smartphone ping. Before you slide your thumb across the glass, your striatum releases a surge of dopamine:
        </p>

        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#a4a7b5]">
          <li><em className="text-[#fbf9f4]">Who replied?</em></li>
          <li><em className="text-[#fbf9f4]">What novel stimulation awaits?</em></li>
          <li><em className="text-[#fbf9f4]">How instantly can I consume it?</em></li>
        </ul>

        <p>
          Now scale this cycle across thousands of digital repetitions. You train your neural circuits to anticipate continuous, hyper-concentrated novel inputs. When transferred into intimacy, your nervous system treats partner touch not as a nuanced sensory exchange, but as an urgent digital feed that must be consumed at terminal velocity.
        </p>

        {/* INTERLINK COMPANION */}
        <div className="my-6 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Autonomic Neuro-Interlink</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Breath of Stamina] Autonomic Nervous System Calibration
            </div>
            <div className="text-xs text-[#8e909a]">
              Learn how dopamine surges trigger sympathetic fight-or-flight breathing—and how to brake with physiological sighs.
            </div>
          </div>
          <Link
            to="/blog/breathwork-autonomic-nervous-system-sexual-stamina"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Breath Protocol</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 2: DOWNREGULATION OF D2 RECEPTORS */}
      <section id="neural-ch2" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            02
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            The Downregulation of D2 Receptors: The Numbing Effect
          </h2>
        </div>

        <p>
          The central biological engine of dopamine desensitization is <strong className="text-[#fbf9f4]">neuroadaptation</strong>. The human brain is not hardwired in concrete; it is a dynamically re-architecting neuroplastic organ that constantly reshapes its synaptic densities based on environmental loading.
        </p>

        <div className="my-6 p-6 rounded-2xl bg-[#12141e] border border-white/10 space-y-4">
          <h3 className="text-lg font-serif font-bold text-[#dfc58b] flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#c5a059]" />
            <span>The Biological Noise Complaint: Why Receptors Retract</span>
          </h3>
          <p className="text-sm text-[#cac5be]">
            Imagine standing in a serene library with one person speaking softly. You can hear every breath and whisper clearly. Now imagine twenty rock band amplifiers blasting full volume in the same room. To protect its fragile auditory hair cells from traumatic destruction, your ear activates reflexive acoustic dampening.
          </p>
          <p className="text-sm text-[#cac5be]">
            Your central nervous system operates under the exact same defensive mandate. When bombarded by relentless supraphysiological dopamine floods (4K pornography, rapid social swiping, ultra-processed sugars, high-stimulant stacks), the postsynaptic neurons internalize and downregulate their <strong className="text-[#fbf9f4]">Dopamine D2 Receptors</strong>.
          </p>
        </div>

        {/* IMAGE: D2 RECEPTOR INFOGRAPHIC */}
        {post.images?.d2Receptor && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-2xl">
            <img 
              src={post.images.d2Receptor} 
              alt="Medical diagram of D2 receptor downregulation and mesolimbic pathway overload"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[480px]"
            />
            <div className="p-4 bg-[#0d0f17] border-t border-white/5 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 2: The Synaptic Cascade — Super-Stimulation Triggers Receptor Retraction, Creating Low Baseline Sensitivity &amp; Spastic Hyper-Arousal.</span>
              <span className="text-[#c5a059] font-mono font-bold">D2-PATHWAY-02</span>
            </div>
          </div>
        )}

        <div className="p-5 rounded-xl bg-[#171926] border border-[#c5a059]/20">
          <h4 className="font-bold text-[#fbf9f4] text-sm mb-2">The Dual Symptomatology of D2 Downregulation:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#a4a7b5]">
            <div className="p-3 bg-black/40 rounded-lg">
              <strong className="text-[#ef4444] block mb-1">State A: The Hypo-Sensory Fog</strong>
              Ordinary partner touch feels distant or unexciting. You need mental fantasies, specific angles, or intense tactile friction just to maintain an erection.
            </div>
            <div className="p-3 bg-black/40 rounded-lg">
              <strong className="text-[#eab308] block mb-1">State B: The Premature Surge</strong>
              Because your prefrontal inhibitory circuits are starved of dopamine control, any burst of sudden arousal hits like lightning, triggering immediate involuntary climax.
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 3: DELTA-FOSB */}
      <section id="neural-ch3" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            03
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Delta-FosB: The Molecular Epigenetic Switch of Compulsive Urges
          </h2>
        </div>

        <p>
          In performance neurobiology, few molecules are as revealing as <strong className="text-[#fbf9f4]">Delta-FosB (&Delta;FosB)</strong>. While standard transcription factors degrade within hours, truncated &Delta;FosB is uniquely stable—accumulating in the nucleus accumbens and dorsal striatum over weeks and months of repeated reward bingeing.
        </p>

        <p>
          Delta-FosB functions as a biological molecular memory footprint. It alters gene expression, prompts dendritic spine sprouting in the reward pathway, and hardwires a hair-trigger loop:
        </p>

        <div className="p-5 rounded-xl bg-[#141624] border border-white/10 font-mono text-xs sm:text-sm text-[#dfc58b] flex items-center justify-between overflow-x-auto">
          <span>Environmental Stress / Boredom</span>
          <span>&rarr;</span>
          <span>&Delta;FosB Sensitization</span>
          <span>&rarr;</span>
          <span>Involuntary Compulsion</span>
          <span>&rarr;</span>
          <span>Autonomic Spike</span>
        </div>

        <p>
          This explains why breaking compulsive digital or sexual habits is not a question of “weak willpower.” You are fighting an entrenched molecular footprint. To dissolve this footprint, you must enforce a period of metabolic silence where the loop ceases firing.
        </p>
      </section>

      {/* CHAPTER 4: THE PORN-INDUCED PARADOX */}
      <section id="neural-ch4" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            04
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            The Porn-Induced Sensitivity Paradox: The Coolidge Effect on Steroids
          </h2>
        </div>

        <p>
          Modern high-speed streaming pornography combines every sensory trigger known to evolutionary biology: extreme visual novelty, unlimited tab switching, rapid partner rotation, and frictionless accessibility.
        </p>

        <div className="p-6 rounded-xl bg-[#141624] border border-[#c5a059]/20 space-y-3">
          <h3 className="font-serif font-bold text-[#fbf9f4] text-lg">
            The Coolidge Effect in Evolutionary Ethology
          </h3>
          <p className="text-sm text-[#cac5be]">
            Biologists have long observed that a male mammal, completely exhausted and unresponsive after mating with a familiar female, will immediately regain full sexual vigor and ejaculatory drive when introduced to a novel female. This biological drive guaranteed genetic diversity.
          </p>
          <p className="text-sm text-[#cac5be]">
            Digital video feeds hijack this evolutionary mechanism. By swiping through dozens of new performers in twenty minutes, your nucleus accumbens is duped into believing you have encountered dozens of novel mates in a single sitting. The resulting dopamine spike dwarfs any natural human interaction.
          </p>
        </div>

        <p>
          When you transition into bed with a living, breathing human partner, reality operates on a radically different timescale. A human being is not an infinite algorithmic feed. There is subtle skin warmth, eye contact, emotional vulnerability, rhythmic breathing, and progressive sensory build.
        </p>

        <p>
          If your dopamine receptors are tuned to expect novel stimuli every 12 seconds, your brain perceives natural intimacy as an unbearable disconnect: it either shuts down arousal completely (erectile fade), or panics into immediate hyper-sympathetic climax.
        </p>

        {/* INTERLINK TO SOLO LAB */}
        <div className="my-5 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Tactile Rewiring Masterclass</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Solo Laboratory] Deconditioning Porn-Induced Masturbation Habits
            </div>
            <div className="text-xs text-[#8e909a]">
              Discover why speed and death-grip masturbation short-circuit the neurological arousal scale.
            </div>
          </div>
          <Link
            to="/blog/solo-training-masturbation-habits-sexual-stamina"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Solo Lab Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 5: THE 30-DAY PRESTIGE DOPAMINE RESET */}
      <section id="neural-ch5" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            05
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            The 30-Day "Prestige" Dopamine Reset Protocol
          </h2>
        </div>

        <p>
          A true dopamine reset is not a weekend gimmick or a temporary ascetic fast. It is a systematic, 3-phase biological re-sensitization protocol engineered to upregulate D2 receptor expression and clear &Delta;FosB accumulation.
        </p>

        {/* TIMELINE IMAGE */}
        {post.images?.timeline30Day && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-2xl">
            <img 
              src={post.images.timeline30Day} 
              alt="Editorial infographic of the 30-day dopamine reset roadmap for sexual stamina"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[480px]"
            />
            <div className="p-4 bg-[#0d0f17] border-t border-white/5 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 3: The 30-Day Neuro-Regeneration Timeline — Phased withdrawal, baseline normalization, and sensate recalibration.</span>
              <span className="text-[#c5a059] font-mono font-bold">RESET-ROADMAP-03</span>
            </div>
          </div>
        )}

        {/* INTERACTIVE 30-DAY PHASE EXPLORER */}
        <div className="p-6 rounded-2xl bg-[#12141e] border border-[#c5a059]/30 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-serif font-bold text-[#fbf9f4] flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#c5a059]" />
              <span>Interactive 30-Day Phase Explorer</span>
            </h3>
            <span className="text-xs px-2.5 py-1 rounded bg-[#c5a059]/20 text-[#dfc58b] font-mono">
              Phase {activePhase} of 3
            </span>
          </div>

          {/* Phase Selectors */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setActivePhase(1)}
              className={`p-3 rounded-xl text-left border transition-all ${
                activePhase === 1 
                  ? 'bg-[#c5a059]/20 border-[#c5a059] text-[#fbf9f4]' 
                  : 'bg-[#181a27] border-white/5 text-[#8e909a] hover:border-white/20'
              }`}
            >
              <div className="text-[11px] font-mono uppercase text-[#dfc58b]">Days 1–10</div>
              <div className="text-sm font-bold truncate">Phase 1: Withdrawal</div>
            </button>
            <button
              onClick={() => setActivePhase(2)}
              className={`p-3 rounded-xl text-left border transition-all ${
                activePhase === 2 
                  ? 'bg-[#c5a059]/20 border-[#c5a059] text-[#fbf9f4]' 
                  : 'bg-[#181a27] border-white/5 text-[#8e909a] hover:border-white/20'
              }`}
            >
              <div className="text-[11px] font-mono uppercase text-[#dfc58b]">Days 11–20</div>
              <div className="text-sm font-bold truncate">Phase 2: Baseline Shift</div>
            </button>
            <button
              onClick={() => setActivePhase(3)}
              className={`p-3 rounded-xl text-left border transition-all ${
                activePhase === 3 
                  ? 'bg-[#c5a059]/20 border-[#c5a059] text-[#fbf9f4]' 
                  : 'bg-[#181a27] border-white/5 text-[#8e909a] hover:border-white/20'
              }`}
            >
              <div className="text-[11px] font-mono uppercase text-[#dfc58b]">Days 21–30</div>
              <div className="text-sm font-bold truncate">Phase 3: Re-Sensitization</div>
            </button>
          </div>

          {/* Active Phase Content */}
          {activePhase === 1 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="p-4 rounded-xl bg-black/40 border-l-4 border-[#ef4444] space-y-2">
                <div className="font-bold text-[#fbf9f4] text-base">Phase 1: Sensory Quarantine &amp; The Boredom Gauntlet (Days 1–10)</div>
                <p className="text-xs sm:text-sm text-[#cac5be]">
                  The toughest hurdle. The brain experiences acute withdrawal from synthetic dopamine spikes. You will feel restless, irritable, and an almost magnetic pull to reach for your smartphone or search for visual stimulation.
                </p>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-[#a4a7b5]">
                  <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Sexual Super-Stimuli:</strong> Complete elimination of pornography, erotic feeds, suggestive algorithmic channels, and rapid masturbation.</span>
                </div>
                <div className="flex items-start gap-2 text-[#a4a7b5]">
                  <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span><strong>Screen-Free Morning Window:</strong> No phone, news, or notifications for the first 60 minutes after waking.</span>
                </div>
                <div className="flex items-start gap-2 text-[#a4a7b5]">
                  <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span><strong>Boredom Tolerance Training:</strong> 20 minutes daily sitting with no music, no podcasts, no screens. Allow your baseline to drop.</span>
                </div>
              </div>
            </div>
          )}

          {activePhase === 2 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="p-4 rounded-xl bg-black/40 border-l-4 border-[#eab308] space-y-2">
                <div className="font-bold text-[#fbf9f4] text-base">Phase 2: The Baseline Shift &amp; Subtle Reward Awakening (Days 11–20)</div>
                <p className="text-xs sm:text-sm text-[#cac5be]">
                  As D2 receptors start upregulating, ordinary experiences begin regaining their sensory flavor. Food tastes richer, acoustic music feels warmer, and physical workouts elicit natural endorphin satisfaction.
                </p>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-[#a4a7b5]">
                  <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span><strong>Micro-Pleasure Anchoring:</strong> Actively savor nuanced sensations: fresh coffee, hot water on your chest in the shower, the texture of crisp bedsheets.</span>
                </div>
                <div className="flex items-start gap-2 text-[#a4a7b5]">
                  <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span><strong>Aerobic Parasympathetic Grounding:</strong> Low-intensity Zone 2 cardio (hiking, brisk walking) with zero audio input. Let the mind wander and settle.</span>
                </div>
                <div className="flex items-start gap-2 text-[#a4a7b5]">
                  <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span><strong>Mono-Tasking Discipline:</strong> Eat without screens. Commute without frantic phone checks. Train your attentional muscle to stay unified.</span>
                </div>
              </div>
            </div>
          )}

          {activePhase === 3 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="p-4 rounded-xl bg-black/40 border-l-4 border-[#10b981] space-y-2">
                <div className="font-bold text-[#fbf9f4] text-base">Phase 3: Sensate Focus &amp; Prefrontal Arousal Mastery (Days 21–30)</div>
                <p className="text-xs sm:text-sm text-[#cac5be]">
                  The final stage re-introduces physical arousal under strict prefrontal executive governance. You transition from being a passenger of impulsive excitement to a master of your physiological arousal curves.
                </p>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-[#a4a7b5]">
                  <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span><strong>Sensate Focus Sessions:</strong> Slow, non-goal-oriented touch with your partner or self, focusing purely on skin temperature and breath without seeking climax.</span>
                </div>
                <div className="flex items-start gap-2 text-[#a4a7b5]">
                  <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span><strong>The 7-Out-of-10 Threshold Calibration:</strong> Recognizing when arousal shifts from Level 5 to Level 7 and effortlessly cooling it back to Level 4 via diaphragmatic resets.</span>
                </div>
                <div className="flex items-start gap-2 text-[#a4a7b5]">
                  <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span><strong>Permanent Digital Architecture:</strong> Setting permanent grayscale screen modes and notification locks to preserve your newly recovered neural sensitivity.</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CHAPTER 6: MICRO-DOSING PLEASURE & SENSATE FOCUS */}
      <section id="neural-ch6" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            06
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Micro-Dosing Pleasure: Sensate Focus 2.0 &amp; The "Boring" Session
          </h2>
        </div>

        <p>
          Once excessive super-stimuli have been stripped from your daily baseline, the next clinical phase is retraining your brain to register and celebrate <strong className="text-[#fbf9f4]">subtle somatic signals</strong>.
        </p>

        <p>
          In clinical sex therapy, pioneer researchers Masters and Johnson developed <strong className="text-[#fbf9f4]">Sensate Focus</strong>—a structured protocol removing the pressure of erection and climax by prohibiting genital touch and intercourse in early sessions, directing all cognitive focus toward physical texture, temperature, and breath.
        </p>

        <div className="p-6 rounded-xl bg-[#141624] border border-[#c5a059]/25 space-y-4">
          <h3 className="font-serif font-bold text-[#dfc58b] text-lg">
            6.1 The "Boring" Solo Session: Retuning the Arousal Curve
          </h3>
          <p className="text-sm text-[#cac5be]">
            Schedule 15 to 20 minutes in a quiet room with warm, dim lighting. No phone. No visual erotica. No mental fantasy loop. The explicit goal of the session is <strong className="text-[#fbf9f4]">not to achieve an orgasm</strong>.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#a4a7b5]">
            <li className="flex items-start gap-2">
              <span className="text-[#c5a059] font-bold">&bull;</span>
              <span><strong>Notice Heart Rate:</strong> Track the exact moment your pulse elevates in response to light tactile contact.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c5a059] font-bold">&bull;</span>
              <span><strong>Notice Unconscious Glute Bracing:</strong> Catch yourself clenching your pelvic floor or inner thighs to artificially accelerate arousal. Release them immediately.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c5a059] font-bold">&bull;</span>
              <span><strong>The Prefrontal Brake:</strong> When you feel the mental impulse to rush or stroke faster, freeze your hand for 30 seconds. Inhale deeply through your nose. Settle back down.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CHAPTER 7: DELAYED GRATIFICATION AS A STAMINA TOOL */}
      <section id="neural-ch7" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            07
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Delayed Gratification as a Stamina Tool: Strengthening the "Wait" Response
          </h2>
        </div>

        <p>
          Sexual endurance is not simply a physical capability; it is a profound <strong className="text-[#fbf9f4]">behavioral inhibition reflex</strong>. The man who cannot delay eating a cookie or looking at a buzzing smartphone when bored will rarely command the self-regulatory capacity to delay ejaculatory climax during high-intensity intimacy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <h4 className="font-bold text-[#fbf9f4] text-sm flex items-center gap-1.5">
              <RotateCcw className="w-4 h-4 text-[#ef4444]" />
              <span>The Subcortical Impulse: "I Want It Now"</span>
            </h4>
            <p className="text-xs text-[#a4a7b5]">
              Driven by the amygdala, striatum, and autonomic sympathetic surges. Highly reactive, impatient, and seeking immediate chemical closure regardless of longevity.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-[#c5a059]/30 space-y-2">
            <h4 className="font-bold text-[#fbf9f4] text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
              <span>The Prefrontal Executive: "I Can Wait"</span>
            </h4>
            <p className="text-xs text-[#a4a7b5]">
              Housed in the dorsolateral prefrontal cortex. Capable of top-down emotional suppression, somatic delay, strategic pacing, and voluntary parasympathetic buffering.
            </p>
          </div>
        </div>

        <p>
          You train this prefrontal muscle throughout your regular day. When an itch arises, wait sixty seconds before scratching. When you want to immediately look up a random trivia question on your phone, finish your current task first. These micro-victories in executive control deposit neurochemical dividends that become life-saving brakes in the bedroom.
        </p>
      </section>

      {/* CHAPTER 8: SUPPLEMENTS FOR NEURAL RECOVERY */}
      <section id="neural-ch8" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            08
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Supplements for Neural Recovery: Synaptic Support Stack
          </h2>
        </div>

        <p>
          While nutritional biochemistry cannot substitute for eliminating digital super-stimuli, targeted nootropic compounds can support neuronal cell membrane fluidity, receptor up-regulation, and prefrontal cognitive calm.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#fbf9f4] text-sm">Uridine Monophosphate</span>
              <span className="text-xs font-mono text-[#c5a059]">250–500 mg</span>
            </div>
            <p className="text-xs text-[#a4a7b5]">
              A fundamental nucleotide precursor for CDP-choline. Clinical neuro-research demonstrates uridine promotes synaptic membrane synthesis, increases neurite outgrowth, and supports dopamine receptor density.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#fbf9f4] text-sm">Sulbutiamine</span>
              <span className="text-xs font-mono text-[#c5a059]">200–400 mg</span>
            </div>
            <p className="text-xs text-[#a4a7b5]">
              A lipophilic synthetic derivative of thiamine (Vitamin B1) capable of crossing the blood-brain barrier. Extensively studied in Europe for chronic asthenia and regulating D1/D2 receptor density in the prefrontal cortex.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#fbf9f4] text-sm">L-Theanine</span>
              <span className="text-xs font-mono text-[#c5a059]">200 mg</span>
            </div>
            <p className="text-xs text-[#a4a7b5]">
              An amino acid found in green tea that readily crosses the blood-brain barrier. Generates calm, alert alpha brainwave activity, dampens glutamate excitotoxicity, and buffers sympathetic racing.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#fbf9f4] text-sm">High-DHA Omega-3 Fatty Acids</span>
              <span className="text-xs font-mono text-[#c5a059]">1,000+ mg DHA</span>
            </div>
            <p className="text-xs text-[#a4a7b5]">
              Docosahexaenoic acid (DHA) constitutes over 40% of the polyunsaturated fatty acids in the human brain, ensuring the structural integrity and fluidity of neural cell membranes and neurotransmitter receptor sites.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#1c1417] border border-red-500/20 text-xs text-[#e5a4a4] flex items-start gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400 mt-0.5" />
          <span>
            <em>Clinical disclaimer:</em> Always consult with a licensed physician or healthcare specialist prior to beginning any concentrated nootropic or botanical supplementation regimen.
          </span>
        </div>
      </section>

      {/* CHAPTER 9: MINDFUL CONSUMPTION & THE DIGITAL DIET */}
      <section id="neural-ch9" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            09
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Mindful Consumption &amp; The "Digital Diet"
          </h2>
        </div>

        <p>
          Completing a 30-day reset only to return to 8 hours of mindless evening scrolling and infinite browser tabs guarantees complete relapse of your neural sensitivity within 14 days. Stamina demands a permanent, defensive <strong className="text-[#fbf9f4]">Digital Diet</strong>.
        </p>

        {/* IMAGE: SENSATE FOCUS & MINDFULNESS */}
        {post.images?.sensateFocus && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-2xl">
            <img 
              src={post.images.sensateFocus} 
              alt="Mindful digital diet and quiet morning presence for neurological restoration"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[480px]"
            />
            <div className="p-4 bg-[#0d0f17] border-t border-white/5 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 4: The Digital Sanctuary — Cultivating screen-free analog spaces allows sensory thresholds to stabilize permanently.</span>
              <span className="text-[#c5a059] font-mono font-bold">DIGITAL-DIET-04</span>
            </div>
          </div>
        )}

        <div className="p-6 rounded-xl bg-[#12141e] border border-[#c5a059]/20 space-y-4">
          <h3 className="font-serif font-bold text-[#fbf9f4] text-lg flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-[#c5a059]" />
            <span>9.1 The Grayscale Hack &amp; Environmental Hygiene</span>
          </h3>
          <p className="text-sm text-[#cac5be]">
            Modern application design utilizes specialized casino-grade chromatic palettes (saturated reds, warm ambers, bright cyan badges) designed specifically to stimulate dopamine firing in the visual cortex.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#a4a7b5]">
            <div className="p-3 bg-black/40 rounded-lg">
              <strong className="text-[#dfc58b] block mb-1">Set Screen to Monochrome (Grayscale)</strong>
              On iOS: <em>Settings &rarr; Accessibility &rarr; Display &amp; Text Size &rarr; Color Filters &rarr; Grayscale</em>. Stripping color instantly cuts involuntary phone checking by up to 35%.
            </div>
            <div className="p-3 bg-black/40 rounded-lg">
              <strong className="text-[#dfc58b] block mb-1">Aggressive Notification Purge</strong>
              Turn off all notifications except direct one-to-one phone calls and immediate personal messages. Your phone should serve your deliberate queries, not interrupt your day.
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[#171926] border border-white/10 space-y-2">
          <h4 className="font-bold text-[#fbf9f4] text-sm">9.2 Eradicating Accidental Micro-Stimulation</h4>
          <p className="text-xs sm:text-sm text-[#a4a7b5]">
            Even if you do not actively type adult URLs into your browser, modern social media algorithms are explicitly designed to serve suggestive fitness, dancing, or lifestyle imagery to keep your thumb hooked. Unfollow, mute, or remove accounts that trigger involuntary erotic scanning. Guard your attentional focus with uncompromising discipline.
          </p>
        </div>
      </section>

      {/* INTERACTIVE ASSESSMENT TOOL */}
      <section id="neural-assessment" className="space-y-6 pt-6 border-t border-white/10">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#151726] to-[#0e1019] border border-[#c5a059]/40 shadow-2xl space-y-6">
          <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
            <Sliders className="w-4 h-4" />
            <span>Clinical Self-Diagnostic Engine</span>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fbf9f4]">
              The Neural Saturation &amp; Arousal Sensitivity Index
            </h3>
            <p className="text-xs sm:text-sm text-[#8e909a] mt-1">
              Calculate how heavily modern super-stimuli are impacting your D2 receptor sensitivity and baseline sexual stamina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Control 1: Screen Time */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-[#cac5be]">Daily Screen Time (Leisure/Phone):</span>
                <span className="font-mono font-bold text-[#c5a059]">{screenTime} hrs/day</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="12" 
                value={screenTime}
                onChange={(e) => setScreenTime(Number(e.target.value))}
                className="w-full accent-[#c5a059] bg-black/40 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Control 2: High Novelty Content */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-[#cac5be]">Weekly Super-Stimuli (Porn / Erotica / Gaming):</span>
                <span className="font-mono font-bold text-[#c5a059]">{pornFrequency}x / week</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="14" 
                value={pornFrequency}
                onChange={(e) => setPornFrequency(Number(e.target.value))}
                className="w-full accent-[#c5a059] bg-black/40 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Control 3: Multi-Screening */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm text-[#cac5be] block">Multi-Tasking Stimulation Habit:</span>
              <button
                onClick={() => setMultiScreening(!multiScreening)}
                className={`w-full py-2 px-3 rounded-lg text-xs font-bold border text-left transition-all ${
                  multiScreening 
                    ? 'bg-[#ef4444]/20 border-[#ef4444] text-[#f87171]' 
                    : 'bg-[#10b981]/20 border-[#10b981] text-[#34d399]'
                }`}
              >
                {multiScreening 
                  ? '⚠️ High: I scroll phone while watching TV or eating' 
                  : '✓ Low: I focus on one activity at a time'}
              </button>
            </div>

            {/* Control 4: Urge Reaction */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm text-[#cac5be] block">Urge Delay Threshold:</span>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'immediate', label: 'Immediate' },
                  { id: 'few-mins', label: '10 Mins' },
                  { id: 'controlled', label: 'Discipline' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setUrgeReaction(item.id)}
                    className={`py-2 px-2 text-center rounded-lg text-xs font-bold border transition-all ${
                      urgeReaction === item.id 
                        ? 'bg-[#c5a059] text-black border-[#c5a059]' 
                        : 'bg-black/40 text-[#8e909a] border-white/10 hover:border-white/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="p-5 rounded-xl bg-black/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs text-[#8e909a] uppercase tracking-wider font-mono">
                Computed Neural Saturation Score
              </div>
              <div className="text-3xl font-serif font-bold text-[#fbf9f4] flex items-center justify-center sm:justify-start gap-2">
                <span>{saturationScore} / 100</span>
                <span className={`text-xs px-2 py-0.5 rounded font-mono font-normal ${
                  saturationScore > 70 
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                    : saturationScore > 45 
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}>
                  {saturationScore > 70 ? 'Severely Desensitized' : saturationScore > 45 ? 'Moderate Receptor Strain' : 'Calibrated & Resilient'}
                </span>
              </div>
              <p className="text-xs text-[#a4a7b5]">
                {saturationScore > 70 
                  ? 'Your central reward circuit is running in hyper-novelty mode. Immediate 30-Day Protocol strongly indicated.'
                  : saturationScore > 45 
                  ? 'Mild downregulation detected. Focus on phone grayscale and 10-minute delayed gratification drills.'
                  : 'Optimal receptor density. Continue sensate focus drills to reinforce top-down autonomic composure.'}
              </p>
            </div>
            <button
              onClick={onLockerClick}
              className="flex-shrink-0 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#c5a059] to-[#dfc58b] text-black font-bold text-xs hover:brightness-110 transition-all shadow-lg shadow-[#c5a059]/20"
            >
              Get Full Reset Calendar &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* CHAPTER 10: FAQ */}
      <section id="neural-faq" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            10
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Frequently Asked Questions: Neurological Desensitization
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "Will I lose my libido during the 30-day reset?",
              a: "You may notice temporary changes in sexual desire when you dramatically reduce highly stimulating habits. Some men describe this as a 'flatline.' Do not panic or interpret this temporary drop as permanent dysfunction. Your brain is recalibrating away from artificial hyper-stimulation toward natural baseline equilibrium. It typically resolves within 10 to 18 days into cleaner, more sustainable spontaneous desire."
            },
            {
              q: "Can I still have sex with my partner during the reset?",
              a: "Yes. The goal is not monastic celibacy; it is reconnecting with organic human touch. Remove the performance pressure: focus on skin warmth, intimate conversation, eye contact, and mutual pleasure without treating every session like a race to climax. If arousal gets too intense, pause and breathe."
            },
            {
              q: "Is 'Death Grip' related to dopamine?",
              a: "Yes, deeply. While the physical aspect involves desensitizing penile nerve endings from excessive mechanical friction, the psychological aspect involves pairing that friction with hyper-novel pornography. The brain learns that climax is only permissible under extreme dual tactile-visual overload. Resetting dopamine restores your ability to climax from gentle, natural partner touch."
            },
            {
              q: "How long does it take for D2 receptors to upregulate?",
              a: "Positron Emission Tomography (PET) studies on neuroadaptation demonstrate measurable dopamine receptor upregulation begins within 14 to 21 days of removing super-stimuli, with substantial neural restructuring established by day 30 to 60."
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="rounded-xl bg-[#12141e] border border-white/5 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-[#fbf9f4] hover:text-[#dfc58b] transition-colors"
              >
                <span className="text-base sm:text-lg flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                  <span>{item.q}</span>
                </span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#8e909a] flex-shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-[#a4a7b5] border-t border-white/5 bg-black/20">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONCLUSION & FINAL BRIDGE */}
      <section id="neural-conclusion" className="space-y-6 pt-6 border-t border-white/10">
        <div className="p-8 rounded-2xl bg-gradient-to-b from-[#141624] to-[#0a0c14] border border-[#c5a059]/40 shadow-2xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Conclusion: Reclaiming the Neural Throne
          </h2>

          <p className="text-base sm:text-lg text-[#cac5be]">
            Your brain is an ongoing reflection of what you repeatedly feed it.
          </p>

          <p className="text-[#a4a7b5]">
            Every notification you chase. Every 2:00 AM hour you spend scrolling through video feeds. Every time you seek another instant hit of novelty instead of sitting with your own thoughts. Every time you surrender to immediate gratification over patient restraint—you are carving deep neural trenches in your reward pathways.
          </p>

          <p className="text-[#a4a7b5]">
            <strong>But the inverse is equally profound.</strong>
          </p>

          <p className="text-[#a4a7b5]">
            Every time you set your phone face down across the room. Every time you embrace thirty minutes of quiet analog boredom. Every time you practice delayed gratification. Every time you choose real-world intimacy over digital pixels—you are reclaiming executive prefrontal command.
          </p>

          <p className="text-[#fbf9f4] font-medium">
            The <strong className="text-[#dfc58b]">Art of Stamina</strong> is not simply physical endurance. It is developing total sovereignty over your attention, your dopamine, your impulses, and your physiological arousal curve.
          </p>

          {/* EBOOK BRIDGE CTA */}
          <div className="my-8 p-6 sm:p-8 rounded-2xl bg-[#0c0e17] border border-[#c5a059]/40 flex flex-col md:flex-row items-center gap-6 shadow-2xl">
            <div className="w-40 sm:w-48 flex-shrink-0">
              <BookMockup />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 text-[#dfc58b] text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>The Master Blueprint</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fbf9f4]">
                Unlock the 30-Day Digital Detox Calendar &amp; Neural Rewiring Drills
              </h3>
              <p className="text-xs sm:text-sm text-[#8e909a] leading-relaxed">
                Inside the <strong>Stamina Mastery Comprehensive eBook</strong>, get the full daily tracking schedules, neuro-cognitive exercises, sensate focus protocols, and autonomic reset routines designed to give you effortless command in the bedroom.
              </p>
              <button
                onClick={onLockerClick}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#dfc58b] text-black font-bold text-sm tracking-wide hover:brightness-110 transition-all shadow-xl shadow-[#c5a059]/20"
              >
                Start Your Neural Reset Today &rarr;
              </button>
            </div>
          </div>

          <div className="text-xs text-[#8e909a] italic border-t border-white/5 pt-4">
            Educational disclaimer: This masterclass is published for educational and scientific informational purposes and does not constitute medical diagnosis or clinical treatment. Always consult with a licensed healthcare provider for persistent sexual health or psychological concerns.
          </div>
        </div>
      </section>

    </div>
  );
}
