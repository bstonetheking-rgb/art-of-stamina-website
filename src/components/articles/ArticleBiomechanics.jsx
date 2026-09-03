import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Layers,
  RefreshCw,
  Award,
  TrendingUp,
  Compass,
  Target,
  ArrowUpRight,
  BookOpen,
  Dna,
  Play,
  Check
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticleBiomechanics({ post, onLockerClick }) {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Interactive Kinetic Chain Diagnostic State
  const [sittingHours, setSittingHours] = useState(8); // hours/day
  const [gluteActivity, setGluteActivity] = useState(2); // 1 to 5 scale
  const [adductorTightness, setAdductorTightness] = useState('moderate'); // low, moderate, high
  const [unconsciousBracing, setUnconsciousBracing] = useState(true); // boolean

  // Interactive 10-Minute Reset Step Tracker
  const [activeResetMinute, setActiveResetMinute] = useState(1);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Kinetic Chain Risk Score calculation
  const calculateCompensationRisk = () => {
    let score = 30;
    score += (sittingHours - 4) * 5; // sitting penalty
    score -= (gluteActivity - 2) * 8; // glute defense
    if (adductorTightness === 'high') score += 20;
    else if (adductorTightness === 'moderate') score += 10;
    if (unconsciousBracing) score += 15;
    return Math.min(100, Math.max(15, Math.round(score)));
  };

  const compensationRisk = calculateCompensationRisk();

  const resetMinutesData = [
    {
      minute: "Minute 1",
      title: "Relaxed Breathing in Standing",
      focus: "Respiratory & Nervous System Decoupling",
      cue: "Stand comfortably with soft knees. Inhale through the nose into 360-degree lower ribs; exhale effortlessly through parted lips without clenching your glutes or toes.",
      tag: "Autonomic Baseline"
    },
    {
      minute: "Minute 2",
      title: "Gentle Standing Hip Circles",
      focus: "Femoroacetabular Joint Lubrication",
      cue: "Place hands on hip bones. Draw wide, smooth circles with your pelvis. Feel the head of the femur glide inside the hip socket without straining your lower back.",
      tag: "Synovial Flow"
    },
    {
      minute: "Minutes 3–4",
      title: "Glute Bridges with Neutral Pelvis",
      focus: "Posterior Chain Awakening & Anterior Hip Opening",
      cue: "Lie supine with knees bent. Drive through midfoot and heels to raise hips until your torso forms a straight ramp. Squeeze glutes at the top without hyperextending your lumbar spine.",
      tag: "Glute Activation"
    },
    {
      minute: "Minutes 5–6",
      title: "Controlled 90/90 Hip Switches",
      focus: "Internal & External Rotator Calibration",
      cue: "Sit on the floor with knees bent at 90 degrees. Transition smoothly from left to right, focusing on slow, deliberate hip rotation rather than fast repetitions.",
      tag: "Deep Hip Rotators"
    },
    {
      minute: "Minutes 7–8",
      title: "Tactical Half-Kneeling Hip-Flexor Stretch",
      focus: "Psoas & Iliacus De-Tensioning",
      cue: "Tuck your pelvis into a gentle posterior tilt, squeeze the glute of the rear leg, and shift slightly forward until you feel a clean, tension-releasing stretch along the front of the hip.",
      tag: "Hip Flexor Slack"
    },
    {
      minute: "Minute 9",
      title: "Adductor Relaxation in Butterly / Recline",
      focus: "Inner Thigh Release & Pelvic Width",
      cue: "Lie on your back, bend knees and let them fall naturally slightly apart. Consciously invite your inner thighs to unclench. Inhale space; exhale tension.",
      tag: "Adductor Slack"
    },
    {
      minute: "Minute 10",
      title: "Hooklying Reset & Diaphragmatic Loop",
      focus: "Integrated Kinetic Settle",
      cue: "Feet flat, knees bent, jaw loose, tongue on roof of mouth. Take slow 4-second nasal inhales and 6-second soft exhales, dropping the pelvic floor completely.",
      tag: "Full-Body Reset"
    }
  ];

  return (
    <div className="prose prose-invert max-w-none space-y-12 text-[#cbc7be] leading-relaxed text-base sm:text-[17px]">
      
      {/* TARGET KEYWORDS BADGES */}
      <div className="p-4 rounded-xl bg-[#12141d] border border-white/10 text-xs text-[#8e909a] flex flex-wrap items-center gap-2">
        <span className="text-[#dfc58b] font-semibold uppercase tracking-wider">Clinical Biomechanics Focus:</span>
        {post.targetKeywords.split(',').map((kw, i) => (
          <span key={i} className="px-2.5 py-1 rounded-md bg-[#181a26] text-[#b8b5ab] border border-white/5">
            {kw.trim()}
          </span>
        ))}
      </div>

      {/* INTRODUCTION */}
      <section id="biomech-intro" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Introduction: Your Pelvic Floor Doesn't Work Alone
        </h2>
        <p>
          When most men first begin learning about sexual stamina, they naturally focus on one area: the pelvic floor.
        </p>
        <p>
          They learn about the PC muscles.
        </p>
        <p>
          They discover Kegels.
        </p>
        <p>
          They learn about the Reverse Kegel.
        </p>
        <p>
          They practice breathing.
        </p>
        <p>
          And for good reason. The pelvic floor plays an important role in sexual function and pelvic control.
        </p>
        <p className="text-lg font-serif font-bold text-[#dfc58b]">
          But there is a problem with treating it like an isolated muscle.
        </p>
        <p className="p-5 rounded-2xl bg-gradient-to-r from-[#171a26] to-[#12141d] border-l-4 border-[#c5a059] text-[#fbf9f4] font-serif italic text-lg sm:text-xl shadow-md">
          “Your pelvic floor does not operate alone. It is connected to the way you breathe, the way you stand, the way you move your hips, the strength of your core, the position of your pelvis, and the amount of tension you carry throughout your body.”
        </p>
        <p>
          Think about what happens when you try to lift something heavy.
        </p>
        <p>
          You don't consciously tell one tiny muscle to do all the work. Your feet connect with the ground. Your legs stabilize you. Your hips generate force. Your core creates stability. Your breathing changes. Your upper body completes the movement.
        </p>
        <p>
          Sexual performance works in a similar way.
        </p>
        <p>
          The pelvic floor is part of a larger <strong>functional kinetic chain</strong>.
        </p>
        <p>
          This is where the concept of <strong>Pelvic Floor Synergy</strong> comes in:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-1.5">
            <span className="text-[#dfc58b] font-bold block">1. Stiff Hips:</span>
            <p className="text-[#cbc7be]">If your hips lack mobility, your pelvic floor may compensate by over-gripping to stabilize your pelvis.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-1.5">
            <span className="text-[#dfc58b] font-bold block">2. Uncoordinated Core:</span>
            <p className="text-[#cbc7be]">If your core is poorly coordinated, your pelvic floor takes on additional stabilizing load during arousal.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-1.5">
            <span className="text-[#dfc58b] font-bold block">3. Inactive Glutes:</span>
            <p className="text-[#cbc7be]">If your glutes are dormant from prolonged sitting, your pelvis loses its primary posterior scaffolding.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-1.5">
            <span className="text-[#dfc58b] font-bold block">4. Tense Adductors:</span>
            <p className="text-[#cbc7be]">If your inner thighs are constantly clenching, tension radiates directly into the ischiocavernosus and bulbospongiosus.</p>
          </div>
        </div>

        <p>
          And if your breathing becomes shallow or you hold your breath whenever intensity rises, the entire system can become more rigid.
        </p>
        <p>
          This does not mean that every case of premature ejaculation is caused by poor posture, weak glutes, or tight hips. Sexual function is influenced by many physical and psychological factors.
        </p>
        <p>
          But understanding the relationship between these structures can give you another tool for improving body awareness and movement.
        </p>
        <p>
          In this guide, we're going beyond the isolated pelvic floor. We're going to look at the <strong>biomechanics of stamina</strong>—how your core, hips, inner thighs, breathing mechanics, and posture can work together to create a body that is strong without being unnecessarily tense.
        </p>
        <div className="p-4 rounded-xl bg-[#181a28] border border-[#c5a059]/40 font-serif font-bold text-center text-[#dfc58b] text-base sm:text-lg">
          Don't just train the muscle. Train the system.
        </div>

        {/* INLINE IMAGE 1: HERO */}
        {post.images?.hero && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.hero} 
              alt="Male functional biomechanics, pelvic floor kinetic chain, core stability and stamina"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[460px] object-cover"
            />
            <div className="p-3.5 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 1: The Functional Kinetic Chain of Stamina: Pelvic Floor Synergy in Action</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Functional Biomechanics</span>
            </div>
          </div>
        )}
      </section>

      {/* CHAPTER 1 */}
      <section id="biomech-ch1" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 1: The Deep Front Line — Your Body's Internal Highway
        </h2>
        <p>
          The human body is not simply a collection of individual muscles sitting next to each other. Muscles, connective tissues, joints, and nerves interact continuously as you move.
        </p>
        <p>
          One concept commonly used in movement and manual therapy is the idea of <strong>myofascial chains</strong>, sometimes described as lines of connected tissues that transmit forces throughout the body.
        </p>
        <p>
          One of the most discussed is the <strong>Deep Front Line</strong>. It includes structures around the deep neck, breathing system, spine, hips, pelvic region, and inner thigh.
        </p>
        <p>
          You don't need to memorize every anatomical structure to understand the important idea:
        </p>
        <p className="p-4 rounded-xl bg-[#151724] border-l-2 border-[#dfc58b] text-[#fbf9f4] font-serif font-semibold">
          Tension in one area can influence how you move somewhere else.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          1.1 From the Jaw to the Feet
        </h3>
        <p>
          Have you ever noticed how your entire body changes when you are stressed?
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#dedad2]">
          <li>Your jaw tightens.</li>
          <li>Your shoulders rise.</li>
          <li>Your breathing becomes shallow.</li>
          <li>Your stomach contracts.</li>
          <li>Your hips may become rigid.</li>
          <li>You may even clench your legs without realizing it.</li>
        </ul>
        <p>
          That's because the body responds as a connected system. This is especially important during sexual arousal.
        </p>
        <p>
          As intensity rises, some men unconsciously tighten their jaw, abdomen, buttocks, thighs, and pelvic floor. They think they're becoming more controlled. In reality, they may simply be accumulating tension.
        </p>
        <p>
          The objective is not to make your entire body completely limp. You still need stability and coordinated movement. The goal is <strong>appropriate tension</strong>: strong enough to support movement while remaining relaxed enough to avoid unnecessary muscular gripping.
        </p>

        {/* INLINE IMAGE 2: DEEP FRONT LINE DIAGRAM */}
        {post.images?.deepFrontLine && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.deepFrontLine} 
              alt="The Deep Front Line myofascial kinetic chain anatomical diagram"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 2: The Deep Front Line (DFL): Fascially Connecting Jaw, Diaphragm, Core, Pelvis &amp; Adductors</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Myofascial Anatomy</span>
            </div>
          </div>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          1.2 Fascial Mobility
        </h3>
        <p>
          The pelvic floor and surrounding structures are supported by connective tissue. When you spend most of your day sitting, barely moving, certain areas can become stiff and less mobile.
        </p>
        <p>
          That doesn't mean your fascia literally becomes “glued together” in the dramatic sense sometimes used online. But prolonged inactivity can absolutely contribute to reduced mobility and altered movement patterns.
        </p>
        <p>
          This is why mobility work can be useful. You are not trying to magically “unlock” your fascia; you're simply giving your body more opportunities to move through comfortable ranges of motion, making it easier to recognize and release unnecessary holding patterns.
        </p>

        {/* COMPANION INTERLINK: BREATHWORK MASTERCLASS */}
        <div className="my-4 p-4 rounded-xl bg-[#151826] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Companion Masterclass</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              The Breath of Stamina: Diaphragmatic Loop &amp; Autonomic Reset
            </div>
            <div className="text-xs text-[#8e909a]">
              Learn how the respiratory diaphragm directly mirrors and modulates pelvic floor elevation.
            </div>
          </div>
          <Link
            to="/blog/the-breath-of-stamina-arousal-control-breathwork"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Breath Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 2 */}
      <section id="biomech-ch2" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 2: The Transverse Abdominis — Your Internal Pressure Manager
        </h2>
        <p>
          Deep underneath the more visible abdominal muscles sits the <strong>Transverse Abdominis (TVA)</strong>. Unlike the muscles that create the familiar “six-pack,” the TVA wraps around the trunk like a natural anatomical corset.
        </p>
        <p>
          Its job is closely connected with trunk stability and intra-abdominal pressure management, making it essential when discussing breathing, movement, and pelvic floor coordination.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          2.1 Understanding Intra-Abdominal Pressure
        </h3>
        <p>
          Every time you breathe, lift, brace, cough, laugh, or move forcefully, pressure inside your abdomen changes. The diaphragm, abdominal wall, pelvic floor, and spinal muscles coordinate to manage these pressure shifts.
        </p>
        <p>
          The problem comes when you turn every movement into a maximum-effort brace. Some men unconsciously hold their breath and squeeze their entire midsection whenever they become excited or physically active, creating intense pressure and tension throughout the pelvis. Instead of eliminating intra-abdominal pressure, learn to <strong>manage it dynamically</strong>.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          2.2 Core Stability Doesn't Mean Constant Clenching
        </h3>
        <p>
          A strong core is not a stomach that is permanently sucked in. Real core control means being able to stabilize your trunk when necessary while still breathing and moving normally.
        </p>
        
        {/* EXERCISE BOX: TVA AWARENESS */}
        <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-3">
          <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-[#c5a059]" />
            <span>Try This Simple Core-Breathing Calibration:</span>
          </div>
          <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-[#cbc7be]">
            <li>Stand comfortably and take a normal, effortless breath.</li>
            <li>As you exhale, gently engage your abdominal wall without aggressively sucking your stomach inward.</li>
            <li>Now breathe again without letting go of the entire posture.</li>
            <li>Notice whether you can maintain soft trunk stability while still breathing comfortably.</li>
          </ol>
          <div className="text-xs text-[#8e909a] italic pt-1">
            That is functional core control: coordination without rigidity.
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          2.3 TVA and the Pelvic Floor
        </h3>
        <p>
          The abdominal wall and pelvic floor are part of the larger pressure-management canister. When they coordinate effectively, your pelvic region does not have to carry the entire burden of stabilization.
        </p>
        <p>
          This is one reason the <strong>Art of Stamina</strong> approach emphasizes the whole trunk instead of endless pelvic contractions. You are building a team, not asking one muscle to do every job.
        </p>
      </section>

      {/* CHAPTER 3 */}
      <section id="biomech-ch3" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 3: The Glute-Stamina Link — Building the Pelvic Scaffolding
        </h2>
        <p>
          Your glutes are among the largest and strongest muscles in your body. They are heavily involved in hip extension, walking, running, climbing, lifting, and maintaining pelvic stability.
        </p>
        <p>
          Yet modern life has created a strange problem: many men spend most of their day sitting on their glutes rather than using them. Desk. Car. Couch. Computer. Phone. Repeat. Over time, this contributes to weakness, poor movement habits, and reduced hip mobility.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          3.1 The “Dead Butt” Problem (Gluteal Amnesia)
        </h3>
        <p>
          When the glutes are not contributing appropriately during movement, other structures must compensate: the lower back works harder, the hamstrings take over, the hip flexors tighten, and the pelvis tips forward into an anterior tilt.
        </p>
        <p>
          Again, this doesn't mean glute weakness directly causes premature ejaculation; the human body doesn't work through one simple chain of cause and effect. But better hip and glute function creates a resilient, stable base for the pelvis, preventing pelvic floor overload.
        </p>

        {/* INLINE IMAGE 3: GLUTE & HIP MOBILITY */}
        {post.images?.hipMobility && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.hipMobility} 
              alt="Functional hip mobility 90-90 switches and glute activation for pelvic stability"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 3: 90/90 Hip Switches &amp; Glute Scaffolding for Pelvic Symmetry</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Hip Stability</span>
            </div>
          </div>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          3.2 The Gluteus Medius &amp; Simple Glute Builders
        </h3>
        <p>
          The <strong>gluteus medius</strong> sits on the outer side of the hip, stabilizing the pelvis during walking, stepping, and single-leg movements. When hips lack lateral stability, muscles around the pelvic floor frequently compensate.
        </p>
        
        <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-3">
          <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            <span>Essential Glute Builders (Consistent, Controlled Training):</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-[#cbc7be]">
            <div className="p-2.5 rounded-lg bg-[#0e1017] border border-white/5 text-center font-medium">Glute Bridges</div>
            <div className="p-2.5 rounded-lg bg-[#0e1017] border border-white/5 text-center font-medium">Hip Thrusts</div>
            <div className="p-2.5 rounded-lg bg-[#0e1017] border border-white/5 text-center font-medium">Bodyweight Squats</div>
            <div className="p-2.5 rounded-lg bg-[#0e1017] border border-white/5 text-center font-medium">Lateral Band Walks</div>
          </div>
        </div>
      </section>

      {/* CHAPTER 4 */}
      <section id="biomech-ch4" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 4: The Adductor Short-Circuit
        </h2>
        <p>
          Now we move to one of the most overlooked areas in male sexual performance: the <strong>inner thighs (adductors)</strong>.
        </p>
        <p>
          The adductor muscles pull your legs toward the center of your body and insert near the pubic bone, directly bordering pelvic floor musculature.
        </p>
        <div className="p-4 rounded-xl bg-[#141624] border border-white/10 text-xs sm:text-sm space-y-2">
          <strong className="text-[#dfc58b] block">Test This Yourself Right Now:</strong>
          <p>Sit or lie comfortably and intentionally squeeze your knees together tightly. What happens? You'll notice your inner thighs clamp down—and instantly feel your pelvic floor contract and elevate involuntarily.</p>
          <p>Now relax your legs and let them fall apart. The release in your pelvic floor is immediate.</p>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          4.1 Why Inner-Thigh Tension Matters
        </h3>
        <p>
          During intense physical intimacy, many men unconsciously squeeze their legs together. If you are already carrying chronic tension in your inner thighs, adding more pelvic contraction short-circuits your stamina, pushing you rapidly toward the ejaculatory point of no return.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          4.2 The “Adductor Slack” Principle
        </h3>
        <p>
          Lie on your back with knees bent. Allow your knees to fall slightly apart without forcing them—let gravity create space. Take a slow nasal breath, and as you exhale, consciously soften your inner thighs. This teaches your nervous system that you can be stimulated without gripping your legs.
        </p>
      </section>

      {/* CHAPTER 5 */}
      <section id="biomech-ch5" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 5: The Obturator Internus — The Hidden Hip Muscle
        </h2>
        <p>
          Deep within the hip sits the <strong>obturator internus</strong>, a deep external rotator of the hip. Fascial tissue from the obturator internus forms the tendinous arch from which the levator ani (pelvic floor) originates.
        </p>
        <p>
          Because of this intimate anatomical connection, restricted hip rotation directly impairs the pelvic floor's ability to lengthen and relax. Practicing <strong>90/90 hip switches</strong> restores multi-planar hip mobility, unburdening deep pelvic fascia.
        </p>
      </section>

      {/* INTERACTIVE COMPONENT: KINETIC CHAIN DIAGNOSTIC */}
      <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#161928] via-[#121420] to-[#0e1017] border-2 border-[#c5a059]/40 shadow-2xl space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#c5a059]" />
              <span>Biomechanical Diagnostic Engine</span>
            </div>
            <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#fbf9f4]">
              Kinetic Chain Compensation &amp; Tension Risk Index
            </h4>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[#1b1f30] border border-[#c5a059]/40 text-center">
            <span className="text-[11px] uppercase tracking-wider text-[#8e909a] block">Pelvic Strain Risk</span>
            <span className={`font-serif font-bold text-2xl ${compensationRisk > 65 ? 'text-rose-400' : compensationRisk > 40 ? 'text-[#dfc58b]' : 'text-emerald-400'}`}>
              {compensationRisk}%
            </span>
          </div>
        </div>

        {/* INTERACTIVE CONTROLS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sitting Hours */}
          <div className="space-y-2 p-4 rounded-xl bg-[#141624] border border-white/5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#fbf9f4]">Daily Sedentary Sitting Time</span>
              <span className="text-[#dfc58b]">{sittingHours} hrs / day</span>
            </div>
            <input 
              type="range" 
              min="2" 
              max="14" 
              step="1"
              value={sittingHours}
              onChange={(e) => setSittingHours(Number(e.target.value))}
              className="w-full accent-[#c5a059] bg-[#1e2234] rounded-lg h-2 cursor-pointer"
            />
            <p className="text-[11px] text-[#8e909a]">Shortens hip flexors, shuts down glute firing, and loads the pelvic floor passively.</p>
          </div>

          {/* Glute Activation */}
          <div className="space-y-2 p-4 rounded-xl bg-[#141624] border border-white/5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#fbf9f4]">Glute Activation &amp; Strength Level</span>
              <span className="text-[#dfc58b]">{gluteActivity === 1 ? 'Dormant' : gluteActivity === 3 ? 'Moderate' : 'Athletic'}</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="5" 
              step="1"
              value={gluteActivity}
              onChange={(e) => setGluteActivity(Number(e.target.value))}
              className="w-full accent-[#c5a059] bg-[#1e2234] rounded-lg h-2 cursor-pointer"
            />
            <p className="text-[11px] text-[#8e909a]">Strong glutes stabilize the sacrum and reduce involuntary pelvic floor clenching.</p>
          </div>

          {/* Adductor Tension */}
          <div className="space-y-2 p-4 rounded-xl bg-[#141624] border border-white/5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#fbf9f4]">Inner Thigh (Adductor) Tension</span>
              <span className="text-[#dfc58b] uppercase text-[11px]">{adductorTightness}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              {['low', 'moderate', 'high'].map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setAdductorTightness(lvl)}
                  className={`py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-all cursor-pointer capitalize ${
                    adductorTightness === lvl
                      ? 'bg-[#c5a059] text-black border-[#dfc58b]'
                      : 'bg-[#181a28] text-[#8e909a] border-white/10 hover:text-white'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-[#8e909a]">Tight adductors directly pull on pubic attachments and trigger premature spasms.</p>
          </div>

          {/* Unconscious Bracing */}
          <div className="space-y-2 p-4 rounded-xl bg-[#141624] border border-white/5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#fbf9f4]">Unconscious Jaw &amp; Breath Holding</span>
              <span className={unconsciousBracing ? 'text-rose-400' : 'text-emerald-400'}>
                {unconsciousBracing ? 'Detected' : 'Relaxed'}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => setUnconsciousBracing(true)}
                className={`py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                  unconsciousBracing
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/50'
                    : 'bg-[#181a28] text-[#8e909a] border-white/10'
                }`}
              >
                Yes, I Clench Under Stress
              </button>
              <button
                onClick={() => setUnconsciousBracing(false)}
                className={`py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                  !unconsciousBracing
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                    : 'bg-[#181a28] text-[#8e909a] border-white/10'
                }`}
              >
                No, Diaphragm Remains Soft
              </button>
            </div>
            <p className="text-[11px] text-[#8e909a]">Jaw clenching activates trigeminal reflexes that stiffen the entire Deep Front Line.</p>
          </div>
        </div>

        {/* DYNAMIC DIAGNOSTIC PRESCRIPTION */}
        <div className="p-4 rounded-2xl bg-[#141724] border border-[#c5a059]/30 text-xs sm:text-sm text-[#cbc7be] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#dfc58b] flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#dfc58b] block mb-1">Biomechanics Prescription:</strong>
            {compensationRisk > 65 ? (
              <span>Your pelvic floor is currently acting as a primary structural stabilizer to compensate for dormant glutes and chronic sitting. Prioritize the 10-Minute Kinetic Chain Reset daily before intimate encounters.</span>
            ) : compensationRisk > 40 ? (
              <span>Moderate kinetic chain load. You have good baseline capacity, but inner thigh tension or subtle breath holding during excitement can cause sudden arousal spikes. Focus on the Full-Body Reverse Kegel.</span>
            ) : (
              <span>Excellent kinetic chain equilibrium. Your glutes and diaphragm successfully offload tension from your pelvic floor, allowing deep voluntary relaxation and prolonged endurance.</span>
            )}
          </div>
        </div>
      </div>

      {/* CHAPTER 6 */}
      <section id="biomech-ch6" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 6: The Full-Body Reverse Kegel
        </h2>
        <p>
          Most men learn the Reverse Kegel as an isolated pelvic-floor exercise. But once you understand the kinetic chain, you can think about it differently: as part of a broader, systemic relaxation pattern.
        </p>

        {/* 5 STEPS OF FULL BODY REVERSE KEGEL */}
        <div className="space-y-3 my-4">
          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-1">
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#c5a059] text-black text-[11px] font-bold flex items-center justify-center">1</span>
              <span>Step 1: Relax the Jaw</span>
            </div>
            <p className="text-xs sm:text-sm text-[#cbc7be]">Let your teeth separate slightly. Allow your tongue to rest comfortably on the palate. You don't need to force your mouth open; simply remove unnecessary facial clenching.</p>
          </div>

          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-1">
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#c5a059] text-black text-[11px] font-bold flex items-center justify-center">2</span>
              <span>Step 2: Breathe Into the Lower Ribs</span>
            </div>
            <p className="text-xs sm:text-sm text-[#cbc7be]">Take a comfortable nasal breath and allow your lower ribs and abdomen to expand naturally. Avoid forcing your stomach outward; breathe without creating pressure.</p>
          </div>

          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-1">
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#c5a059] text-black text-[11px] font-bold flex items-center justify-center">3</span>
              <span>Step 3: Find a Neutral Pelvis</span>
            </div>
            <p className="text-xs sm:text-sm text-[#cbc7be]">Avoid dramatically arching your lower back (anterior tilt) or aggressively tucking your pelvis (posterior tilt). Find a relaxed, comfortable middle position.</p>
          </div>

          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-1">
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#c5a059] text-black text-[11px] font-bold flex items-center justify-center">4</span>
              <span>Step 4: Soften the Inner Thighs</span>
            </div>
            <p className="text-xs sm:text-sm text-[#cbc7be]">Let your knees remain comfortable and avoid squeezing your legs together. Let gravity naturally open space between your knees.</p>
          </div>

          <div className="p-4 rounded-xl bg-[#141624] border border-[#c5a059]/40 space-y-1 bg-[#181a28]">
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#dfc58b] text-black text-[11px] font-bold flex items-center justify-center">5</span>
              <span>Step 5: Allow the Pelvic Floor to Relax</span>
            </div>
            <p className="text-xs sm:text-sm text-[#fbf9f4]">Rather than pushing aggressively downward, think about <strong>letting go</strong>. A Reverse Kegel should feel like releasing tension, never like straining.</p>
          </div>
        </div>

        {/* COMPANION INTERLINK: PELVIC FLOOR ARTICLE */}
        <div className="my-4 p-4 rounded-xl bg-[#151826] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>Foundation Guide</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              Pelvic Floor Control &amp; Reverse Kegels: The Mechanics of Endurance
            </div>
            <div className="text-xs text-[#8e909a]">
              Master isolated motor control of the bulbospongiosus and pubococcygeus muscles.
            </div>
          </div>
          <Link
            to="/blog/pelvic-floor-control-reverse-kegels"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-400 text-emerald-300 hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Explore Mechanics</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 7 */}
      <section id="biomech-ch7" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 7: Postural Biohacking Before the Bedroom
        </h2>
        <p>
          If you spend eight hours sitting at a desk, your body may feel very different by the end of the day. Your hips have remained bent. Your spine has been stationary. Your glutes have barely worked. Your breathing may have become shallow.
        </p>
        <p>
          Before expecting your body to suddenly move freely, give it a few minutes to reset.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Hooklying Reset
        </h3>
        <p>
          Lie on your back with knees bent and feet flat on the floor. Let your arms rest comfortably by your sides. This is known as the <strong>hooklying position</strong>.
        </p>
        <p>
          Spend several minutes simply breathing. Feel the back of your body against the floor. Allow your lower back to settle naturally without flattening it forcibly. Let your shoulders drop. Relax your jaw.
        </p>
        <p className="p-4 rounded-xl bg-[#141624] border-l-2 border-[#dfc58b] text-[#fbf9f4] font-serif italic text-sm sm:text-base">
          “Think of this as a transition: you are signaling to your body that the workday is finished, the sitting is finished, and now we move with ease.”
        </p>

        {/* INLINE IMAGE 4: HOOKLYING RESET */}
        {post.images?.hooklying && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.hooklying} 
              alt="Hooklying position for pelvic floor release, diaphragmatic breathing and lumbar settle"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[460px] object-cover"
            />
            <div className="p-3.5 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 4: The Hooklying Restorative Position: De-loading the Spine and Pelvic Floor</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Postural Reset</span>
            </div>
          </div>
        )}
      </section>

      {/* CHAPTER 8 */}
      <section id="biomech-ch8" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 8: Mobility for Stamina — The Prestige Protocol
        </h2>
        <p>
          If you want your body to move as a coordinated system, mobility should become part of your daily routine. You don't need a 60-minute stretching session every night; a few carefully selected movements maintain your functional range.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <strong className="text-xs font-bold text-[#dfc58b] uppercase block">1. Frog Stretch</strong>
            <p className="text-xs text-[#cbc7be]">Targets the inner thighs and adductors, creating space around the pelvic floor. Move gently into the stretch on an exhale—never force range.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <strong className="text-xs font-bold text-[#dfc58b] uppercase block">2. Tactical Lunge</strong>
            <p className="text-xs text-[#cbc7be]">Opens the anterior hip flexors (psoas). Keep your torso tall and avoid letting your lower back hyperextend into a swayback arch.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <strong className="text-xs font-bold text-[#dfc58b] uppercase block">3. 90/90 Hip Switches</strong>
            <p className="text-xs text-[#cbc7be]">Practices controlled internal and external hip rotation, freeing the obturator internus and deep lateral pelvic stabilizers.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <strong className="text-xs font-bold text-[#dfc58b] uppercase block">4. Deep Squat</strong>
            <p className="text-xs text-[#cbc7be]">Challenges ankle, knee, hip, and trunk mobility simultaneously, allowing the pelvic floor to fully lengthen at the bottom position.</p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#181a28] border border-white/5 text-xs text-[#dfc58b] italic">
          <strong>The Rule of Mobility:</strong> You should feel a gentle stretch or movement challenge—not sharp pain. Pain causes the nervous system to brace, which defeats the entire purpose.
        </div>

        {/* COMPANION INTERLINK: PELVIC FREEDOM YOGA & MYOFASCIAL RELEASE */}
        <div className="my-5 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Dedicated Asana &amp; Fascia Masterclass</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Elastic Architecture] Pelvic Freedom: Yoga and Myofascial Release for Infinite Stamina
            </div>
            <div className="text-xs text-[#8e909a]">
              The complete 15-minute daily Open-Flow routine, Elite Five asanas, and targeted massage-ball protocols for supple hip mobility.
            </div>
          </div>
          <Link
            to="/blog/pelvic-freedom-yoga-myofascial-release-stamina"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Explore Pelvic Freedom</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 9 */}
      <section id="biomech-ch9" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 9: Neural Integration — Teaching Your Body to Work Together
        </h2>
        <p>
          The final step is integration. It is one thing to have strong glutes, another to have a strong core, and another to have good hip mobility. The real goal is getting these systems to cooperate simultaneously.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Plank-Drop Concept
        </h3>
        <p>
          One powerful drill to explore this coordination is the <strong>Plank-Drop Concept</strong>:
        </p>
        <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-2 text-xs sm:text-sm text-[#cbc7be]">
          <div>1. Set up in a comfortable forearm plank.</div>
          <div>2. Engage your core just enough to maintain a level, stable posture.</div>
          <div>3. Activate your glutes without squeezing with 100% maximum tension.</div>
          <div>4. Continue slow, steady nasal breathing.</div>
          <div>5. Now, while maintaining the plank, focus on <strong>relaxing and dropping your pelvic floor</strong>.</div>
        </div>
        <p>
          This is challenging because your trunk is under load. Developing this motor skill proves to your brain that <strong>core stability and pelvic relaxation do not have to be opposites</strong>.
        </p>

        {/* COMPANION INTERLINK: SOLO LAB ARTICLE */}
        <div className="my-4 p-4 rounded-xl bg-[#151826] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#4ade80] font-bold uppercase tracking-wider flex items-center gap-1">
              <Target className="w-3.5 h-3.5 text-[#4ade80]" />
              <span>Biofeedback Practice</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              The Solo Laboratory: Retraining the Ejaculatory Reflex
            </div>
            <div className="text-xs text-[#8e909a]">
              Apply the Plank-Drop and Reverse Kegel during calibrated solo arousal biofeedback sessions.
            </div>
          </div>
          <Link
            to="/blog/solo-laboratory-ejaculatory-reflex-control"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-400 text-emerald-300 hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Enter Solo Lab</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* COMPANION INTERLINK: NEURAL RESET */}
        <div className="my-4 p-4 rounded-xl bg-[#151826] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Central Nervous System Reset</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Neural Reset] Dopamine Fasting &amp; Neurological Desensitization
            </div>
            <div className="text-xs text-[#8e909a]">
              Why motor control drills must be paired with reduced digital super-stimuli to stop involuntary autonomic spikes.
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

      {/* CHAPTER 10 & INTERACTIVE PROTOCOL */}
      <section id="biomech-ch10" className="scroll-mt-24 space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 10: The 10-Minute Kinetic Chain Reset
        </h2>
        <p>
          You don't need an elaborate routine to start applying these principles. The 10-Minute Kinetic Chain Reset creates a daily signal to your nervous system: <strong>Move. Breathe. Stabilize. Relax.</strong>
        </p>

        {/* INTERACTIVE 10-MINUTE STEP-BY-STEP TRACKER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#131624] border-2 border-[#c5a059]/40 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <span className="text-xs text-[#dfc58b] font-bold uppercase tracking-wider">Interactive Protocol Navigator</span>
              <h4 className="font-serif font-bold text-xl text-[#fbf9f4]">Daily 10-Minute Kinetic Chain Routine</h4>
            </div>
            <span className="text-xs font-mono text-[#c5a059] px-3 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30">
              Step {activeResetMinute} of 7
            </span>
          </div>

          {/* Quick Minute Selector Chips */}
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {resetMinutesData.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveResetMinute(idx + 1)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  activeResetMinute === idx + 1
                    ? 'bg-[#c5a059] text-black border-[#dfc58b]'
                    : 'bg-[#181a28] text-[#8e909a] border-white/10 hover:text-white'
                }`}
              >
                {item.minute}
              </button>
            ))}
          </div>

          {/* Active Minute Display Card */}
          {(() => {
            const currentStep = resetMinutesData[activeResetMinute - 1];
            return (
              <div className="p-5 rounded-2xl bg-[#0f1118] border border-white/10 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h5 className="font-serif font-bold text-lg text-[#dfc58b]">{currentStep.title}</h5>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {currentStep.tag}
                  </span>
                </div>
                <div className="text-xs text-[#8e909a] uppercase tracking-wider font-semibold">
                  Focus: {currentStep.focus}
                </div>
                <p className="text-sm text-[#dedad2] leading-relaxed bg-[#151826] p-3.5 rounded-xl border border-white/5">
                  {currentStep.cue}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={activeResetMinute === 1}
                    onClick={() => setActiveResetMinute(p => Math.max(1, p - 1))}
                    className="text-xs font-bold text-[#8e909a] hover:text-white disabled:opacity-30 cursor-pointer"
                  >
                    ← Previous Minute
                  </button>
                  <button
                    disabled={activeResetMinute === resetMinutesData.length}
                    onClick={() => setActiveResetMinute(p => Math.min(resetMinutesData.length, p + 1))}
                    className="text-xs font-bold text-[#dfc58b] hover:underline disabled:opacity-30 cursor-pointer"
                  >
                    Next Minute →
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="biomech-faq" className="scroll-mt-24 space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          FAQ — Biomechanics and Sexual Stamina
        </h2>

        <div className="space-y-3">
          {[
            {
              q: "Can flat feet really affect sexual stamina?",
              a: "Foot position influences lower-limb alignment and kinetic chain mechanics, but the claim that flat feet directly cause premature ejaculation is overly simplistic. While foot mechanics affect how the knees, hips, and pelvis move, there is no direct single 'foot-to-pelvic-floor' pathway that determines sexual endurance."
            },
            {
              q: "Why does my lower back hurt when I try to last longer?",
              a: "When men try to prolong stamina through brute force, they often unconsciously tense their lumbar extensors, arch their lower back, or rely on spinal muscles for stabilization rather than engaging deep core breath control. Prolonged sitting and weak glutes exacerbate this compensation."
            },
            {
              q: "Is stomach vacuuming good for sexual stamina?",
              a: "Abdominal vacuum exercises can train awareness of the Transverse Abdominis (TVA). However, they are not a cure for premature ejaculation. In fact, if practiced as a habit of permanently sucking the stomach in, it creates chronic intra-abdominal pressure that forces the pelvic floor into a state of hypertonic strain."
            },
            {
              q: "Should I keep my pelvic floor tight during sex?",
              a: "No! The pelvic floor requires rhythmic contraction and relaxation. Constantly squeezing creates excessive local muscular fatigue, restricts venous return, and triggers the involuntary ejaculatory spinal reflex prematurely. True stamina comes from coordinated relaxation on demand."
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

      {/* CONCLUSION & EBOOK BRIDGE */}
      <section id="biomech-conclusion" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Conclusion: The Integrated Performer
        </h2>
        <p>
          The biggest lesson of the <strong>Art of Stamina</strong> is simple:
        </p>
        <p className="font-serif text-xl font-bold text-[#dfc58b]">
          Your pelvic floor is part of a system.
        </p>
        <p>
          Your hips matter. Your glutes matter. Your core matters. Your breathing matters. Your inner thighs matter. Your posture matters. Even your ability to relax your jaw can become a useful indicator of how much tension you are carrying.
        </p>
        <p>
          Instead of constantly asking: <em>“How can I squeeze my pelvic floor harder?”</em> start asking: <strong>“How can I make my whole body work better?”</strong>
        </p>
        <p>
          A strong pelvic floor sitting inside a poorly coordinated body is not the goal. The goal is <strong>synergy</strong>: a stable core that can still breathe, strong glutes that support the pelvis, mobile hips that move without compensation, relaxed inner thighs, and a nervous system that doesn't panic when intensity rises.
        </p>

        {/* READY TO BUILD STAMINA SYSTEM CTA BOX WITH BOOK MOCKUP */}
        <div className="my-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1b1e2c] via-[#12141f] to-[#1a1c2b] border-2 border-[#c5a059] shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center flex-shrink-0">
              <BookMockup />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#dfc58b] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>The Complete Master Curriculum</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#fbf9f4]">
                The Final Bridge to the Stamina Mastery eBook
              </h3>
              <p className="text-sm text-[#cbc7be] leading-relaxed">
                Biomechanics is the <strong>hardware</strong> of the elite performer. But hardware works best when you know how to operate it. Inside the complete <strong>Stamina Mastery eBook</strong>, you'll discover the complete <strong>Kinetic Chain Checklist</strong> and progressive 8-week routine to combine core stability with involuntary reflex control.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="javascript:void(0);"
                  onClick={onLockerClick}
                  className="w-full sm:w-auto text-center py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] text-[#0b0c10] font-extrabold text-xs tracking-wider uppercase shadow-xl hover:brightness-110 active:scale-95 transition-all no-underline cursor-pointer"
                >
                  DOWNLOAD FREE EBOOK (PDF)
                </a>
                <span className="text-xs text-[#8e909a]">Instant 68-page PDF download • Zero cost</span>
              </div>
            </div>
          </div>
        </div>

        {/* MEDICAL DISCLAIMER */}
        <div className="p-4 rounded-xl bg-[#0e1017] border border-white/5 text-[11px] text-[#6b6d76] leading-relaxed">
          <strong>Medical Disclaimer:</strong> This article is intended for educational purposes and is not a substitute for individualized medical or physical-therapy advice. If you experience persistent pelvic pain, urinary symptoms, sexual dysfunction, or significant pain during exercise, consult an appropriately qualified healthcare professional.
        </div>
      </section>

    </div>
  );
}
