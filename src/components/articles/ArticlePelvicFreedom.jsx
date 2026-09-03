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
  Wind
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticlePelvicFreedom({ post, onLockerClick }) {
  // Accordion FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  // 15-Minute Routine active minute step
  const [activeRoutineStep, setActiveRoutineStep] = useState(0);

  // Interactive Diagnostic state: Pelvic Tension & Mobility Audit
  const [sittingHours, setSittingHours] = useState(8);
  const [deepSquatAbility, setDeepSquatAbility] = useState('partial'); // 'flat', 'heels-up', 'partial', 'cannot'
  const [adductorTightness, setAdductorTightness] = useState('moderate'); // 'supple', 'moderate', 'rigid'
  const [unconsciousClench, setUnconsciousClench] = useState(true);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate Hypertonicity & Stiffness Score (0 - 100)
  const calculateTensionScore = () => {
    let score = 20;
    score += Math.min(sittingHours * 4, 35);
    if (deepSquatAbility === 'cannot') score += 20;
    else if (deepSquatAbility === 'partial') score += 15;
    else if (deepSquatAbility === 'heels-up') score += 10;
    
    if (adductorTightness === 'rigid') score += 20;
    else if (adductorTightness === 'moderate') score += 10;

    if (unconsciousClench) score += 15;
    return Math.min(score, 100);
  };

  const tensionScore = calculateTensionScore();

  const routineSteps = [
    {
      timing: "Minutes 1–3",
      title: "Gluteal & Adductor Myofascial Release",
      tool: "Lacrosse Ball / Foam Roller",
      description: "Sit on a dense massage ball placed under your piriformis and gluteus medius. Breathe slowly into tender trigger points for 60 seconds per side. Roll the upper adductor seam toward the knee with moderate pressure.",
      benefit: "Inhibits overactive external rotators and reduces resting baseline tone in the pelvic bowl."
    },
    {
      timing: "Minutes 4–6",
      title: "Anjaneyasana — Crescent Lunge",
      tool: "Mat / Yoga Blocks",
      description: "Step right foot forward into a low lunge with back knee grounded. Keep ribs stacked directly over your pelvis without hyper-extending the lumbar spine. Inhale into the anterior left hip flexor and psoas for 60 seconds, then switch sides.",
      benefit: "Restores anterior hip extension tolerance lost from chronic seated desk posture."
    },
    {
      timing: "Minutes 7–10",
      title: "Eka Pada Rajakapotasana (Pigeon) or Figure-Four",
      tool: "Mat / Support Pillow",
      description: "Bring right shin parallel to the top of the mat (or cross right ankle over left knee in a reclined figure-four). Square hips and descend with long, 6-second exhalations. Hold 90 seconds per side without grimacing.",
      benefit: "Decompresses the sciatic nerve pathway, opens deep obturator internus and piriformis muscles."
    },
    {
      timing: "Minutes 11–13",
      title: "Mandukasana — Frog Pose",
      tool: "Double Mat / Floor Blankets",
      description: "Kneel with knees wide, inner edges of feet grounded. Slowly slide knees outward until a gentle tension is felt in the groin and inner thighs. Rest on forearms. Breathe softly into the pelvic floor without forcing depth.",
      benefit: "Releases chronically spastic adductor brevis and longus fascial bands connected to the pubic ramus."
    },
    {
      timing: "Minutes 14–15",
      title: "Supported Malasana (Deep Yogi Squat)",
      tool: "Yoga Block / Wall Support",
      description: "Squat down with feet slightly wider than shoulders, toes angled out 30 degrees. Place elbows against inner knees, palms in prayer. Inhale through nose allowing the pelvic floor to expand downward like a gentle bloom. Exhale softly.",
      benefit: "Full-excursion pelvic drop that re-teaches the autonomic nervous system voluntary relaxation."
    }
  ];

  return (
    <div className="space-y-12 text-[#cac5be] leading-relaxed font-sans text-base sm:text-lg">

      {/* ARTICLE INTRODUCTION */}
      <section id="freedom-intro" className="space-y-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#12141e] border border-[#c5a059]/25 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4" />
            <span>Elastic Kinematics &amp; Pelvic Autonomy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4] leading-tight mb-4">
            The "Stiff Man" Epidemic: Why Strength Without Elastic Freedom Destroys Stamina
          </h2>
          <p className="text-[#a4a7b5] text-base sm:text-lg leading-relaxed mb-4">
            There is a strange and damaging contradiction in modern masculine fitness culture. Men are relentlessly conditioned to become harder, tighter, heavier, and more muscular. We load maximum iron on the barbell, sit immobilised behind desk monitors for ten hours a day, and spend 90% of our waking existence in the same rigid, flexed hip angles.
          </p>
          <p className="text-[#a4a7b5] text-base sm:text-lg leading-relaxed">
            Raw muscular strength is valuable. But in the physiology of sexual stamina, rigidity is an energetic dead end. Your body does not simply require force—it requires <strong className="text-[#fbf9f4]">supple, elastic mobility</strong>.
          </p>
        </div>

        <p>
          Imagine driving an elite sports car with 600 horsepower, but your foot is continuously pressing the accelerator and the emergency brake simultaneously. You have immense mechanical torque, yet the transmission overheats, smoke pours from the wheel wells, and the chassis shudders.
        </p>

        <p>
          This is the exact biomechanical state of the modern man's pelvis.
        </p>

        <div className="my-6 p-5 rounded-xl bg-[#171926] border-l-4 border-[#c5a059] text-sm sm:text-base">
          <p className="text-[#fbf9f4] font-medium italic">
            "A chronically contracted pelvic floor, locked hips, rigid psoas sheaths, and shallow breathing do not create sexual stamina. They lock your nervous system into hypertonic tension, transforming slight sexual arousal into an involuntary, premature reflex."
          </p>
        </div>

        <p>
          When you enter the bedroom with high emotional stakes and performance anxiety, that structural stiffness acts as an acoustic amplifier for autonomic stress. The solution is never mindless aggressive stretching or brute force.
        </p>

        <p>
          The master goal is <strong className="text-[#dfc58b]">Supple Strength</strong>: an elastic musculoskeletal system capable of generating explosive stability on demand—and instantly dissolving into complete neuromuscular relaxation the moment decompression is required.
        </p>

        {/* HERO IMAGE */}
        {post.images?.hero && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-2xl">
            <img 
              src={post.images.hero} 
              alt="Pelvic freedom, yoga mobility and myofascial release for male sexual endurance"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[480px]"
            />
            <div className="p-4 bg-[#0d0f17] border-t border-white/5 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 1: The Supple Architecture — Dissolving Pelvic Hypertonicity via Deep Asana and Restorative Breath Expansion.</span>
              <span className="text-[#c5a059] font-mono font-bold">FASCIA-HERO-01</span>
            </div>
          </div>
        )}
      </section>

      {/* CHAPTER 1: BIO-TENSEGRITY & THE FASCIAL WETSUIT */}
      <section id="freedom-ch1" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            01
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Bio-Tensegrity and the Fascial "Wetsuit"
          </h2>
        </div>

        <p>
          To understand why tightness in your outer hip or groin dictates how long you last in bed, you must discard the archaic 19th-century view of the body as a stack of isolated bones and levered muscles.
        </p>

        <p>
          Your body operates under the biological physics of <strong className="text-[#fbf9f4]">Bio-Tensegrity</strong> (tensional integrity)—a continuous network of tensioned cables (fascia, tendons, ligaments) holding compressive struts (bones) in suspension.
        </p>

        <div className="p-6 rounded-2xl bg-[#141624] border border-[#c5a059]/30 space-y-4">
          <h3 className="text-lg font-serif font-bold text-[#dfc58b] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#c5a059]" />
            <span>1.1 The Fascial Suit: Why Your Pelvic Floor Doesn't Live in Isolation</span>
          </h3>
          <p className="text-sm text-[#cac5be]">
            Envision your entire muscular system encased within an unbroken, continuous, pressurized neoprene wetsuit. If someone takes a fistful of fabric at the front of your right hip or inner thigh and twists it tightly into a knot, what happens?
          </p>
          <p className="text-sm text-[#cac5be]">
            The tension does not stay contained in the hip. The entire suit pulls diagonally across the groin, drags down on the lower lumbar vertebrae, compresses the sacroiliac joint, and mechanically yanks the levator ani and bulbocavernosus muscles into a permanent, defensive spasm.
          </p>
        </div>

        {/* IMAGE: BIO-TENSEGRITY DIAGRAM */}
        {post.images?.bioTensegrity && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-2xl">
            <img 
              src={post.images.bioTensegrity} 
              alt="Medical 3D rendering of pelvic biotensegrity and myofascial sling network"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[480px]"
            />
            <div className="p-4 bg-[#0d0f17] border-t border-white/5 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 2: The Pelvic Biotensegrity Network — Force Vectors Transmitted Across the Psoas, Obturator Internus, and Pelvic Floor.</span>
              <span className="text-[#c5a059] font-mono font-bold">TENSEGRITY-02</span>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <h4 className="font-bold text-[#fbf9f4] text-base">1.2 Hydration and Tissue Gliding Quality</h4>
          <p className="text-sm sm:text-base text-[#a4a7b5]">
            Healthy fascial tissue is comprised of hyaluronic acid and water-rich extracellular matrix, allowing individual muscular bundles to glide smoothly past one another like oiled silk.
          </p>
          <p className="text-sm sm:text-base text-[#a4a7b5]">
            When you sit motionless for 8 to 10 hours daily, that fluid ground substance dehydrates into a sticky, viscous glue (cross-linking adhesions). When you suddenly ask that locked tissue to move rhythmically during intimacy, your nervous system interprets the lack of glide as a mechanical emergency, firing protective muscular contractions that accelerate climax.
          </p>
        </div>

        {/* INTERLINK TO KINETIC CHAIN */}
        <div className="my-6 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Full-Body Biomechanics Blueprint</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Biomechanical Blueprint] Pelvic Floor Synergy &amp; Kinetic Chain
            </div>
            <div className="text-xs text-[#8e909a]">
              Discover how Thomas Myers' Deep Front Line (DFL) links the adductors, pelvic bowl, and respiratory diaphragm.
            </div>
          </div>
          <Link
            to="/blog/pelvic-floor-synergy-functional-kinetic-chain-stamina"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Biomechanics Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 2: THE HIP-STAMINA AXIS */}
      <section id="freedom-ch2" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            02
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            The Hip-Stamina Axis: The Psoas and Deep Gluteal Web
          </h2>
        </div>

        <p>
          Your hip joints are the primary multi-axial ball-and-socket junctions of the human body. They transmit massive dynamic forces between your torso and your legs. When your hips lose internal rotation, external rotation, or extension, your pelvic floor is forced to become a surrogate stabilizer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
          <div className="p-6 rounded-xl bg-[#141624] border border-[#c5a059]/30 space-y-3">
            <div className="flex items-center gap-2 text-[#dfc58b] font-bold text-sm uppercase">
              <Zap className="w-4 h-4 text-[#c5a059]" />
              <span>2.1 The Psoas Major: The Primary Hip Flexor</span>
            </div>
            <p className="text-sm text-[#cac5be]">
              The psoas originates along the transverse processes of T12 through L5, diving deep through the pelvic basin over the femoral head to attach at the lesser trochanter.
            </p>
            <div className="text-xs text-[#8e909a] bg-black/40 p-3 rounded-lg leading-relaxed">
              <strong>Stamina Consequence:</strong> Because the psoas blends directly into the crus of the respiratory diaphragm, a chronically shortened psoas pulls the pelvis into anterior pelvic tilt, compresses the pudendal nerve, and forces shallow chest breathing during intimacy.
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#141624] border border-[#c5a059]/30 space-y-3">
            <div className="flex items-center gap-2 text-[#dfc58b] font-bold text-sm uppercase">
              <Activity className="w-4 h-4 text-[#c5a059]" />
              <span>2.2 The Glutes &amp; Deep Rotator Web</span>
            </div>
            <p className="text-sm text-[#cac5be]">
              Underneath the gluteus maximus sits an intricate fan of deep external rotators: the piriformis, gemelli, quadratus femoris, and the <strong className="text-[#fbf9f4]">obturator internus</strong>.
            </p>
            <div className="text-xs text-[#8e909a] bg-black/40 p-3 rounded-lg leading-relaxed">
              <strong>Stamina Consequence:</strong> The obturator internus shares a direct fascial insertion with the arcus tendineus of the levator ani. When your hips are tight and locked, this muscle goes into chronic spasm, directly pulling the pelvic floor into a clenched clamp.
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[#171926] border border-white/10 text-xs sm:text-sm text-[#a4a7b5]">
          <strong className="text-[#fbf9f4] block mb-1">Clinical Safety Warning:</strong>
          Do not attempt to solve deep pelvic tightness by violently mashing hard lacrosse balls directly into the perineum or sacral plexus. Aggressive focal pressure can inflame the pudendal nerve. Our protocol works by releasing the lateral glutes, psoas, and adductors—allowing the pelvic floor to release reflexively from the outside in.
        </div>
      </section>

      {/* CHAPTER 3: YOGA AS NEURAL-MECHANICAL TRAINING */}
      <section id="freedom-ch3" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            03
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Yoga as Neural-Mechanical Training: Training Calm Under Intensity
          </h2>
        </div>

        <p>
          Most men treat yoga either as esoteric spiritual mysticism or as an easy stretching workout for women. Both assumptions are deeply flawed.
        </p>

        <p>
          True asana practice is sophisticated <strong className="text-[#fbf9f4]">neural-mechanical calibration</strong>. When you hold an intense stretch—such as an open Pigeon or deep Frog pose—your autonomic nervous system screams an alarm:
        </p>

        <div className="my-4 p-4 rounded-xl bg-black/40 border-l-4 border-red-500/50 font-mono text-xs sm:text-sm text-[#f87171]">
          "Tissue tension detected! Abort! Clench jaw, hold breath, elevate heart rate, fire sympathetic emergency response!"
        </div>

        <p>
          This is the exact same internal biological alarm that fires during the 8-out-of-10 threshold of sexual arousal.
        </p>

        <p>
          Yoga trains you to do the impossible: while the physical sensation is screaming at full intensity, you consciously soften your jaw, drop your shoulders away from your ears, lengthen your nasal exhale to 6 seconds, and signal your vagus nerve: <em className="text-[#dfc58b] font-medium">“I am safe. Maintain parasympathetic tone.”</em>
        </p>

        <p>
          When you master calmness under physical intensity on the yoga mat, remaining composed at high arousal levels during intimacy becomes second nature.
        </p>
      </section>

      {/* CHAPTER 4: THE PRESTIGE ASANA PROTOCOL - THE ELITE FIVE */}
      <section id="freedom-ch4" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            04
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            The "Prestige" Asana Protocol: The Elite Five
          </h2>
        </div>

        <p>
          You do not need to master 84 esoteric contortionist poses. Five targeted biomechanical postures provide 90% of the pelvic opening and parasympathetic de-loading required for stamina mastery.
        </p>

        {/* IMAGE: ELITE FIVE ASANAS INFOGRAPHIC */}
        {post.images?.eliteFive && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-2xl">
            <img 
              src={post.images.eliteFive} 
              alt="Editorial illustrated guide to the Elite Five male yoga mobility poses for sexual stamina"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[480px]"
            />
            <div className="p-4 bg-[#0d0f17] border-t border-white/5 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 3: The Elite Five Asana Blueprint — Malasana, Pigeon, Frog, Crescent Lunge, and Supta Baddha Konasana.</span>
              <span className="text-[#c5a059] font-mono font-bold">ASANA-ELITE-03</span>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <h4 className="font-bold text-[#fbf9f4] text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center text-xs font-mono">1</span>
              <span>Malasana — The Deep Supported Yogi Squat</span>
            </h4>
            <p className="text-sm text-[#cac5be]">
              The gold-standard posture for pelvic floor lengthening. In full hip and knee flexion, the sit-bones naturally widen, creating maximum structural space for the levator ani to descend and decompress.
            </p>
            <div className="text-xs text-[#dfc58b] bg-black/40 p-2.5 rounded-lg">
              <strong>Cue:</strong> Place a yoga block under your sacrum if ankles lift. On each 4-second nasal inhale, visualize your perineum blooming downward like an umbrella opening.
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <h4 className="font-bold text-[#fbf9f4] text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center text-xs font-mono">2</span>
              <span>Eka Pada Rajakapotasana — The Pigeon Pose</span>
            </h4>
            <p className="text-sm text-[#cac5be]">
              Targets the piriformis, gluteus medius, and deep lateral rotators. Releasing these lateral anchors removes the lateral outward drag on the coccyx and sacrum.
            </p>
            <div className="text-xs text-[#dfc58b] bg-black/40 p-2.5 rounded-lg">
              <strong>Cue:</strong> Never force the front knee into rotational torque. If knee pinch occurs, transition onto your back into a Reclined Figure-Four with hands clasped behind the thigh.
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <h4 className="font-bold text-[#fbf9f4] text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center text-xs font-mono">3</span>
              <span>Mandukasana — The Frog Pose</span>
            </h4>
            <p className="text-sm text-[#cac5be]">
              The undisputed king of adductor decompression. The adductor magnus, longus, and gracilis attach directly to the pubic ramus adjacent to the penile crus. Decompressing this line instantly eliminates involuntary pelvic clenching during thrusting.
            </p>
            <div className="text-xs text-[#dfc58b] bg-black/40 p-2.5 rounded-lg">
              <strong>Cue:</strong> Pad knees with folded towels. Slide forearms forward. Only travel into 60% of your maximum stretch. Breathe slowly into the pubic seam.
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <h4 className="font-bold text-[#fbf9f4] text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center text-xs font-mono">4</span>
              <span>Anjaneyasana — The Low Crescent Lunge</span>
            </h4>
            <p className="text-sm text-[#cac5be]">
              Direct psoas and rectus femoris elongation. Re-teaches the hip joint to extend backward without pulling the lumbar spine into a hyperextended arch.
            </p>
            <div className="text-xs text-[#dfc58b] bg-black/40 p-2.5 rounded-lg">
              <strong>Cue:</strong> Tuck your tailbone slightly (posterior pelvic tilt) before lunging forward. You will feel a precise, laser-focused stretch directly over the front of the hip socket.
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <h4 className="font-bold text-[#fbf9f4] text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center text-xs font-mono">5</span>
              <span>Supta Baddha Konasana — Reclined Bound Angle</span>
            </h4>
            <p className="text-sm text-[#cac5be]">
              The ultimate parasympathetic recovery pose. Lie flat on your back, soles of feet touching, knees resting wide supported by yoga blocks or pillows.
            </p>
            <div className="text-xs text-[#dfc58b] bg-black/40 p-2.5 rounded-lg">
              <strong>Cue:</strong> Place one hand on your heart and one hand on your lower belly. Practice complete surrender. Zero muscular engagement.
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 5: MYOFASCIAL RELEASE */}
      <section id="freedom-ch5" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            05
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Myofascial Release: Tools and Tactics for Elastic Regeneration
          </h2>
        </div>

        <p>
          While yoga postures stretch global muscular chains, chronic adhesions and hyper-irritable trigger points often require focal mechanical shear to release. This is where <strong className="text-[#fbf9f4]">Self-Myofascial Release (SMR)</strong> enters the stamina toolkit.
        </p>

        {/* IMAGE: MYOFASCIAL RELEASE IN ACTION */}
        {post.images?.myofascialRelease && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-2xl">
            <img 
              src={post.images.myofascialRelease} 
              alt="Myofascial release using massage ball and foam roller on hip rotators and adductors"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[480px]"
            />
            <div className="p-4 bg-[#0d0f17] border-t border-white/5 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 4: Targeted Trigger Point Decompression — Releasing Gluteal and Adductor Fascia with Dense Massage Balls.</span>
              <span className="text-[#c5a059] font-mono font-bold">SMR-TACTIC-04</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 rounded-xl bg-[#141624] border border-white/10 space-y-3">
            <h4 className="font-bold text-[#fbf9f4] text-base">5.1 The Lacrosse Ball on Deep Gluteal Seams</h4>
            <p className="text-xs sm:text-sm text-[#cac5be]">
              Place a dense rubber lacrosse ball under the fleshy meat of your lateral glute (between the iliac crest and the greater trochanter). Slowly cross your ankle over the opposite knee.
            </p>
            <p className="text-xs text-[#a4a7b5]">
              When you locate a hot, tender nodule, pause immediately. Do not grind frantically. Simply apply sustained, steady compression while taking 5 deep diaphragmatic breaths until the knot softens by 50%.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141624] border border-white/10 space-y-3">
            <h4 className="font-bold text-[#fbf9f4] text-base">5.2 Foam Rolling the Adductor Seam</h4>
            <p className="text-xs sm:text-sm text-[#cac5be]">
              Lie prone (belly to floor), extending one leg out to the side at a 90-degree angle. Place a firm high-density foam roller parallel to your torso under your inner thigh.
            </p>
            <p className="text-xs text-[#a4a7b5]">
              Roll slowly from 2 inches above the knee toward the upper groin. Avoid direct pressure on the inguinal lymph nodes or pubic bone. Spend 60 seconds mobilizing each leg to break up fibrous inner-thigh friction.
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTER 6: DYNAMIC VS STATIC */}
      <section id="freedom-ch6" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            06
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Dynamic vs. Static Stretching for Performance: Timing Is Everything
          </h2>
        </div>

        <p>
          When you stretch is just as critical as how you stretch. Applying the wrong modality at the wrong moment degrades performance rather than enhancing it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-xl bg-[#141624] border border-[#3b82f6]/30 space-y-2">
            <span className="text-xs font-bold text-[#60a5fa] uppercase tracking-wider block">Dynamic Mobility — Pre-Activity</span>
            <p className="text-xs sm:text-sm text-[#cac5be]">
              Never perform long 2-minute passive static stretches immediately prior to heavy weightlifting or intimate encounters. Passive static stretching temporarily diminishes motor unit recruitment and neural drive.
            </p>
            <div className="text-xs text-[#8e909a] bg-black/40 p-2 rounded">
              <strong>Use:</strong> Leg swings, hip circles, walking lunge with torso twist, and bodyweight squats to lubricate joint capsules.
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-[#10b981]/30 space-y-2">
            <span className="text-xs font-bold text-[#34d399] uppercase tracking-wider block">Static Recovery — Post-Workout &amp; Bedtime</span>
            <p className="text-xs sm:text-sm text-[#cac5be]">
              Sustained 60 to 90-second static holds belong at the end of the day or post-exercise. This triggers the Golgi tendon organ reflex, sending inhibitory signals to calm muscle spindles and dissolve resting muscle tone.
            </p>
            <div className="text-xs text-[#8e909a] bg-black/40 p-2 rounded">
              <strong>Use:</strong> Pigeon, Frog, and Supported Malasana with slow 6-second nasal exhalations to shift the body into deep parasympathetic restoration.
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 7: BREATHING THROUGH THE STRETCH */}
      <section id="freedom-ch7" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            07
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Breathing Through the Stretch: The Respiratory-Pelvic Piston
          </h2>
        </div>

        <p>
          The true secret of pelvic mobility lies in coordinating the <strong className="text-[#fbf9f4]">Respiratory-Pelvic Loop</strong>.
        </p>

        <p>
          Your respiratory diaphragm and your pelvic floor diaphragm are anatomical twins. They are wired to move in seamless synchronized harmony:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#a4a7b5]">
          <li>
            <strong className="text-[#fbf9f4]">On the Inhalation:</strong> The thoracic diaphragm contracts and descends downward into the abdominal cavity. To accommodate the visceral contents without increasing pressure, the pelvic floor must simultaneously <strong className="text-[#dfc58b]">descend, widen, and relax</strong>.
          </li>
          <li>
            <strong className="text-[#fbf9f4]">On the Exhalation:</strong> Both diaphragms gently recoil upward back to resting position.
          </li>
        </ul>

        <p>
          If you hold your breath or breathe shallowly into your upper chest while stretching, your pelvic floor remains defensively locked in an upward spasm. Every stretch in this protocol must be accompanied by deep, 360-degree lower-rib and belly breathing.
        </p>

        {/* INTERLINK COMPANION TO BREATHWORK */}
        <div className="my-5 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <Wind className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Autonomic Neuro-Interlink</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Breath of Stamina] Respiratory Diaphragm Control &amp; Reverse Kegels
            </div>
            <div className="text-xs text-[#8e909a]">
              Master the exact mechanics of the physiological sigh to drop pelvic tension mid-intercourse.
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

      {/* CHAPTER 8: THE 15-MINUTE "OPEN-FLOW" ROUTINE */}
      <section id="freedom-ch8" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            08
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            The 15-Minute "Open-Flow" Routine: Interactive Exercise Breakdown
          </h2>
        </div>

        <p>
          You do not need 90 minutes in an incense-filled yoga studio to achieve total pelvic liberation. Consistency beats duration every time. Perform this focused 15-minute sequence 4 to 5 times per week.
        </p>

        {/* INTERACTIVE ROUTINE TRACKER */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#12141e] border border-[#c5a059]/40 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <div className="text-xs font-mono uppercase text-[#dfc58b] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Step-by-Step Interactive Flow</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#fbf9f4] mt-0.5">
                {routineSteps[activeRoutineStep].timing}: {routineSteps[activeRoutineStep].title}
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#dfc58b] self-start sm:self-center">
              Exercise {activeRoutineStep + 1} of 5
            </span>
          </div>

          {/* Quick Step Selector Buttons */}
          <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
            {routineSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveRoutineStep(idx)}
                className={`py-2 px-1 text-center rounded-lg text-xs font-bold transition-all border ${
                  activeRoutineStep === idx 
                    ? 'bg-[#c5a059] text-black border-[#c5a059] shadow-lg' 
                    : 'bg-[#181a27] text-[#8e909a] border-white/5 hover:border-white/20'
                }`}
              >
                <span className="hidden sm:inline">Part </span>{idx + 1}
              </button>
            ))}
          </div>

          {/* Detailed Active Step Card */}
          <div className="p-5 rounded-xl bg-[#181a28] border border-white/10 space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between text-xs text-[#8e909a]">
              <span>Required Tool: <strong className="text-[#fbf9f4]">{routineSteps[activeRoutineStep].tool}</strong></span>
              <span className="text-[#c5a059] font-mono">{routineSteps[activeRoutineStep].timing}</span>
            </div>

            <p className="text-sm sm:text-base text-[#cac5be] leading-relaxed">
              {routineSteps[activeRoutineStep].description}
            </p>

            <div className="p-3 bg-black/40 rounded-lg border-l-2 border-[#c5a059] text-xs sm:text-sm text-[#dfc58b]">
              <strong>Primary Stamina Benefit:</strong> {routineSteps[activeRoutineStep].benefit}
            </div>
          </div>

          {/* Routine Navigation Buttons */}
          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setActiveRoutineStep(Math.max(0, activeRoutineStep - 1))}
              disabled={activeRoutineStep === 0}
              className="px-4 py-2 rounded-lg bg-[#181a27] border border-white/10 text-xs font-bold text-[#cac5be] hover:text-white disabled:opacity-30 disabled:pointer-events-none"
            >
              &larr; Previous Exercise
            </button>
            <button
              onClick={() => setActiveRoutineStep(Math.min(routineSteps.length - 1, activeRoutineStep + 1))}
              disabled={activeRoutineStep === routineSteps.length - 1}
              className="px-4 py-2 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] border border-[#c5a059]/40 text-[#dfc58b] hover:text-black text-xs font-bold transition-all disabled:opacity-30 disabled:pointer-events-none"
            >
              Next Exercise &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* CHAPTER 9: STRESS DUMPING & EMOTIONAL LINK */}
      <section id="freedom-ch9" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            09
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            The Emotional-Physical Link: Somatic Stress Dumping
          </h2>
        </div>

        <p>
          Stress and muscular hypertonicity are inseparable neurological counterparts. When you navigate an infuriating corporate workday, absorb financial panic, or suffer relationship tension, your brain does not compartmentalize stress into an abstract thought bubble.
        </p>

        <p>
          It dumps sympathetic motor tone directly into the physical body:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center my-4">
          <div className="p-3.5 rounded-xl bg-[#141624] border border-white/5">
            <span className="text-[#ef4444] font-bold block text-sm">Locked Jaw</span>
            <span className="text-[11px] text-[#8e909a]">Masseter clenching</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#141624] border border-white/5">
            <span className="text-[#ef4444] font-bold block text-sm">Raised Traps</span>
            <span className="text-[11px] text-[#8e909a]">Shoulders at ears</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#141624] border border-white/5">
            <span className="text-[#ef4444] font-bold block text-sm">Apnea</span>
            <span className="text-[11px] text-[#8e909a]">Shallow breath holds</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#141624] border border-white/5">
            <span className="text-[#ef4444] font-bold block text-sm">Clamped Pelvis</span>
            <span className="text-[11px] text-[#8e909a]">Hypertonic spasm</span>
          </div>
        </div>

        <p>
          If you transition directly from 10 hours of corporate combat into the bedroom without a somatic decompression ritual, your body remains trapped in a defensive survival posture. Real pelvic freedom means building a 15-minute decompression bridge between your workday and intimacy.
        </p>
      </section>

      {/* INTERACTIVE ASSESSMENT: PELVIC TENSION AUDIT */}
      <section id="freedom-assessment" className="space-y-6 pt-6 border-t border-white/10">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#151726] to-[#0e1019] border border-[#c5a059]/40 shadow-2xl space-y-6">
          <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
            <Sliders className="w-4 h-4" />
            <span>Clinical Self-Diagnostic Engine</span>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fbf9f4]">
              The Pelvic Hypertonicity &amp; Hip Restriction Audit
            </h3>
            <p className="text-xs sm:text-sm text-[#8e909a] mt-1">
              Evaluate how your daily movement patterns and postural stiffness are compressing your pelvic floor and accelerating ejaculatory reflexes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Control 1: Daily Sitting Duration */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-[#cac5be]">Daily Seated Desk / Driving Time:</span>
                <span className="font-mono font-bold text-[#c5a059]">{sittingHours} hrs/day</span>
              </div>
              <input 
                type="range" 
                min="2" 
                max="14" 
                value={sittingHours}
                onChange={(e) => setSittingHours(Number(e.target.value))}
                className="w-full accent-[#c5a059] bg-black/40 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Control 2: Deep Squat Capacity */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm text-[#cac5be] block">Deep Malasana Squat Mobility:</span>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'flat', label: 'Flat-Foot Easy' },
                  { id: 'heels-up', label: 'Heels Lift Up' },
                  { id: 'partial', label: 'Tight / Half Depth' },
                  { id: 'cannot', label: 'Fall Backwards' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setDeepSquatAbility(item.id)}
                    className={`py-2 px-2 text-center rounded-lg text-xs font-bold border transition-all ${
                      deepSquatAbility === item.id 
                        ? 'bg-[#c5a059] text-black border-[#c5a059]' 
                        : 'bg-black/40 text-[#8e909a] border-white/10 hover:border-white/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Adductor Tightness */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm text-[#cac5be] block">Inner-Thigh (Adductor) Resistance:</span>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'supple', label: 'Supple' },
                  { id: 'moderate', label: 'Moderate' },
                  { id: 'rigid', label: 'Rigid / Painful' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setAdductorTightness(item.id)}
                    className={`py-2 px-2 text-center rounded-lg text-xs font-bold border transition-all ${
                      adductorTightness === item.id 
                        ? 'bg-[#c5a059] text-black border-[#c5a059]' 
                        : 'bg-black/40 text-[#8e909a] border-white/10 hover:border-white/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 4: Unconscious Pelvic Clenching */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm text-[#cac5be] block">Unconscious Clenching at Work/Traffic:</span>
              <button
                onClick={() => setUnconsciousClench(!unconsciousClench)}
                className={`w-full py-2 px-3 rounded-lg text-xs font-bold border text-left transition-all ${
                  unconsciousClench 
                    ? 'bg-[#ef4444]/20 border-[#ef4444] text-[#f87171]' 
                    : 'bg-[#10b981]/20 border-[#10b981] text-[#34d399]'
                }`}
              >
                {unconsciousClench 
                  ? '⚠️ High: I catch myself clenching jaw, glutes, or groin' 
                  : '✓ Low: Pelvis remains relaxed throughout the day'}
              </button>
            </div>
          </div>

          {/* Results Score */}
          <div className="p-5 rounded-xl bg-black/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs text-[#8e909a] uppercase tracking-wider font-mono">
                Computed Pelvic Restriction Risk
              </div>
              <div className="text-3xl font-serif font-bold text-[#fbf9f4] flex items-center justify-center sm:justify-start gap-2">
                <span>{tensionScore}/100</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-sans uppercase font-bold ${
                  tensionScore > 70 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                    : tensionScore > 45 
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {tensionScore > 70 ? 'Severe Hypertonicity' : tensionScore > 45 ? 'Moderate Restriction' : 'Elastic Baseline'}
                </span>
              </div>
            </div>

            <div className="text-xs text-[#cac5be] max-w-sm sm:text-right">
              {tensionScore > 70 ? (
                <span>Your hips and pelvic bowl are locked into defensive contraction. Daily 15-minute Open-Flow sessions plus lacrosse ball glute release are urgent prerequisites for sexual control.</span>
              ) : tensionScore > 45 ? (
                <span>Moderate fascial tension. Focus specifically on your inner adductor foam rolling and deep supported Malasana breathing.</span>
              ) : (
                <span>Healthy fascial elasticity. Maintain supple joint mobility with dynamic warm-ups and weekly restorative yoga.</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 10: FAQ ACCORDION */}
      <section id="freedom-faq" className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center font-bold text-sm">
            10
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Frequently Asked Questions: Pelvic Freedom &amp; Asana Training
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "Can I stretch too much or over-mobilize the pelvis?",
              a: "Absolutely. Flexibility without stability is a recipe for joint instability and injury. The objective of stamina mobility is not becoming a circus contortionist; it is achieving functional symmetry and supple elasticity. Always balance mobility sessions with functional glute and deep transverse abdominis strength."
            },
            {
              q: "Why do my inner thighs and legs shake uncontrollably during Frog or Pigeon?",
              a: "Tremoring (neurogenic tremoring) during deep stretches is a well-documented physiological response. When you place a chronically shortened muscle under novel stretch, muscle spindles and Golgi tendon organs experience rapid autonomic recalibration. It is completely benign provided there is no sharp joint pain."
            },
            {
              q: "Is yoga too 'feminine' for serious male athletic training?",
              a: "Yoga is a biomechanical movement discipline, exactly like sprinting, wrestling, or Brazilian Jiu-Jitsu. The ancient warriors of India developed these exact postures to withstand brutal combat campaigns. Today, elite NFL athletes, Olympic lifters, and special forces operators use targeted asanas to bulletproof their joints and command autonomic nervous system control."
            },
            {
              q: "How long before I notice a difference in my sexual stamina from yoga?",
              a: "Most men report a measurable drop in pelvic clenching and improved respiratory control within 10 to 14 days of daily 15-minute sessions. Deep structural remodel of dehydrated fascial tissues typically matures between weeks 4 and 8."
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="rounded-xl bg-[#141624] border border-white/10 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
              >
                <span className="font-serif font-bold text-[#fbf9f4] text-base sm:text-lg">
                  {item.q}
                </span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-[#c5a059] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#8e909a] flex-shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-sm sm:text-base text-[#a4a7b5] border-t border-white/5 pt-3 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONCLUSION & EBOOK MASTERCLASS CTA */}
      <section id="freedom-conclusion" className="space-y-6 pt-6 border-t border-white/10">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#181a28] to-[#0d0f17] border border-[#c5a059]/40 shadow-2xl space-y-6">
          <div className="flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Mastery Synthesis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fbf9f4]">
            Conclusion: The Fluid Man — Controlled Supple Mastery
          </h2>
          <p className="text-sm sm:text-base text-[#cac5be] leading-relaxed">
            The true <strong className="text-[#fbf9f4]">Art of Stamina</strong> is never about becoming permanently rigid or squeezing every muscle until you turn purple.
          </p>
          <p className="text-sm sm:text-base text-[#cac5be] leading-relaxed">
            True mastery is knowing precisely when to contract, when to stabilize, and when to completely dissolve into effortless, fluid relaxation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            <div className="p-3 bg-black/40 rounded-lg text-center border border-white/5">
              <span className="text-[#dfc58b] font-bold block text-sm">Not Rigid</span>
              <span className="text-xs text-[#8e909a]">No hypertonic spasm</span>
            </div>
            <div className="p-3 bg-black/40 rounded-lg text-center border border-white/5">
              <span className="text-[#dfc58b] font-bold block text-sm">Not Weak</span>
              <span className="text-xs text-[#8e909a]">Dynamic stability intact</span>
            </div>
            <div className="p-3 bg-black/40 rounded-lg text-center border border-white/5">
              <span className="text-[#dfc58b] font-bold block text-sm">Controlled</span>
              <span className="text-xs text-[#8e909a]">Voluntary autonomic command</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#cac5be] leading-relaxed">
            Start small. Dedicate 15 minutes each evening to the Open-Flow protocol. Release your lateral glutes. Expand your inner adductors. Breathe down into your pelvic floor in Malasana. The results will transform not only how you move through the world, but how you command your endurance in the bedroom.
          </p>

          {/* EBOOK BRIDGE CARD */}
          <div className="p-6 rounded-xl bg-black/60 border border-[#c5a059]/50 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-28 sm:w-36 flex-shrink-0">
              <BookMockup />
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <div className="text-xs text-[#dfc58b] font-bold uppercase tracking-wider font-mono">
                The Definitive Training Manual
              </div>
              <h4 className="text-lg sm:text-xl font-serif font-bold text-[#fbf9f4]">
                The Art of Stamina: The Complete Neuromuscular &amp; Fascial System
              </h4>
              <p className="text-xs sm:text-sm text-[#a4a7b5]">
                Inside the full Stamina Mastery Guide, you will unlock comprehensive video-guided asana sequences, pelvic floor biofeedback drills, and the 30-day structural transformation calendar.
              </p>
              <button
                onClick={onLockerClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#dfc58b] text-black font-bold text-xs sm:text-sm transition-all shadow-lg"
              >
                <span>Unlock Full Mastery eBook on Homepage</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-[11px] text-[#6b6e7b] italic border-t border-white/5 pt-3">
            Educational disclaimer: This article is for general educational and mobility fitness purposes only and does not substitute for licensed medical or physical therapy diagnosis. Persistent pelvic discomfort, numbness, or pain should always be evaluated by a certified pelvic health specialist.
          </div>
        </div>
      </section>

    </div>
  );
}
