import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  Wind, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  ShieldAlert,
  Compass,
  Gauge,
  Flame,
  PauseCircle,
  PlayCircle,
  RotateCcw,
  Sliders,
  Calendar,
  Layers,
  Heart,
  ArrowUpRight,
  BookOpen
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticleSoloLab({ post, onLockerClick }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(7);
  const [activeStep, setActiveStep] = useState(1);
  const [checkedTension, setCheckedTension] = useState({});

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const toggleTensionCheck = (key) => {
    setCheckedTension(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const tensionChecklist = [
    { key: 'jaw', name: 'Jaw & Teeth Clenching', cue: 'Part teeth slightly, soften masseter muscles, and rest tongue on the floor of mouth.' },
    { key: 'shoulders', name: 'Shoulders & Neck', cue: 'Drop shoulders down and away from ears on a long, unforced exhale.' },
    { key: 'abdomen', name: 'Abdominal Wall Bracing', cue: 'Release rigid belly tension; allow the lower abdomen to gently expand on inhale.' },
    { key: 'glutes', name: 'Glutes & Thigh Squeeze', cue: 'Unclench buttocks and ease leg tension against the mattress or floor.' },
    { key: 'pelvic', name: 'Involuntary Pelvic Floor Contraction', cue: 'Consciously drop and widen the perineal floor (gentle reverse kegel release).' }
  ];

  const arousalScaleDetails = [
    { level: '1–3', label: 'Low Arousal', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20', desc: 'You feel interested or mentally stimulated, but physical arousal is low. Breathing is calm, muscles relaxed, little urgency.' },
    { level: '4–5', label: 'Moderate Arousal', color: 'border-blue-500/40 text-blue-400 bg-blue-950/20', desc: 'Physical pleasure becomes noticeable. Blood flow increases. You are aroused but comfortable and easily capable of changing pace.' },
    { level: '6–7', label: 'High but Manageable (Optimal Awareness Zone)', color: 'border-[#c5a059] text-[#dfc58b] bg-[#c5a059]/15', desc: 'Pleasure is strong, but you can still slow down, pause, change breathing, or redirect focus. Early tension signs appear here.', highlight: true },
    { level: '8', label: 'Approaching Threshold', color: 'border-amber-500/40 text-amber-400 bg-amber-950/20', desc: 'Increased urgency. Breathing speeds up. Strong urge to continue without stopping. This is the time to pause or reduce stimulation.' },
    { level: '9–10', label: 'Point of Inevitability / Climax', color: 'border-rose-500/40 text-rose-400 bg-rose-950/20', desc: 'Delaying ejaculation becomes much more difficult. Neuromuscular cascade triggers rhythmic contractions. Earlier awareness is key.' },
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
      <section id="solo-intro" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Introduction: Training Is Different From Performance
        </h2>
        <p>
          Imagine expecting to run a marathon without ever training.
        </p>
        <p>
          You would probably recognize how unrealistic that is. Athletes practice their skills repeatedly before competition. Musicians rehearse before performing in front of an audience. Yet many men expect to have complete control over their sexual response without ever taking time to understand how their own arousal works.
        </p>
        <p>
          For many people, solo sexual activity becomes a routine focused on one goal: <strong>reaching orgasm as quickly as possible</strong>.
        </p>
        <p>
          There is nothing inherently wrong with wanting a quick release. The problem is that, if every solo experience follows the exact same pattern—high stimulation, increasing speed, rising tension, and a rapid finish—you may never develop much awareness of the stages that happen in between.
        </p>
        <p>
          That is where the idea of the <strong>Solo Laboratory</strong> comes in.
        </p>
        <p>
          The Solo Laboratory is simply a structured way of paying attention to your own sexual response. Instead of treating every solo session as a race toward orgasm, you occasionally use the experience to learn your personal arousal signals, practice slowing down, notice unnecessary muscle tension, and become more familiar with the point at which your level of arousal begins to feel difficult to manage.
        </p>
        <p>
          This approach is closely related to behavioural techniques such as the stop-start method, which has been used in sex therapy for premature ejaculation. The goal is not to become a machine or promise yourself “infinite stamina.” It is to build better awareness and a greater ability to regulate your response.
        </p>
        <p>
          That distinction matters.
        </p>
        <p>
          There is no legitimate technique that can guarantee you will never reach orgasm, last for a specific number of minutes, or increase your sexual duration by 300 percent in 30 days. Sexual response varies from person to person and from one experience to another.
        </p>
        <p>
          What you can do is <strong>learn</strong>.
        </p>
        <p>
          You can discover what your body feels like when arousal is low, moderate, high, and approaching the point where stopping becomes difficult. You can identify habits that may be making you overly tense or training you to rush. You can practice slowing down without turning sex into a stressful examination.
        </p>
        <p>
          Think of it as learning the controls before you need them.
        </p>

        {/* Highlight Quote Box */}
        <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-[#171a26] to-[#12141d] border-l-4 border-[#c5a059] shadow-md">
          <p className="font-serif italic text-lg sm:text-xl text-[#fbf9f4] leading-relaxed mb-2">
            "The Solo Laboratory is not about fighting your body. It is about understanding it well enough to respond earlier."
          </p>
          <div className="text-xs text-[#c5a059] font-semibold tracking-wider uppercase">— Art of Stamina Neuromuscular &amp; Reflex Lab</div>
        </div>

        {/* INLINE IMAGE 1 */}
        {post.images?.hero && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.hero} 
              alt="Solo awareness, reflex biofeedback training and ejaculatory control"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[460px] object-cover"
            />
            <div className="p-3.5 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 1: The deliberate mindset of solo biofeedback training and self-observation</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Art of Stamina Science Lab</span>
            </div>
          </div>
        )}
      </section>

      {/* CHAPTER 1 */}
      <section id="solo-ch1" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 1: Understanding Learned Sexual Patterns
        </h2>
        <p>
          The human nervous system is capable of learning through repetition.
        </p>
        <p>
          When we repeatedly perform a behaviour in the same way, the brain becomes familiar with the pattern. This does not mean every sexual habit creates a permanent neurological pathway that can never change. But repeated experiences can influence expectations, habits, and behavioural responses.
        </p>
        <p>
          For example, imagine someone who has spent years masturbating in a hurry.
        </p>
        <p>
          Perhaps privacy was limited. Perhaps they were afraid someone would interrupt them. Perhaps they simply developed a habit of using fast, intense stimulation every time.
        </p>
        <p>
          Over time, the familiar pattern may become:
        </p>
        
        <div className="p-4 rounded-xl bg-[#151724] border border-[#c5a059]/30 text-center font-mono font-bold text-sm text-[#dfc58b]">
          Stimulation → Increase Intensity → Rush → Orgasm
        </div>

        <p>
          Again, this is not a diagnosis. It is simply a learned routine.
        </p>
        <p>
          The problem is that a routine can become automatic. You may become so focused on the destination that you barely notice the journey.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-4">
          Awareness Comes Before Control
        </h3>
        <p>
          One of the first steps in improving sexual control is learning to notice what happens before you reach a point where control feels difficult.
        </p>
        <p>
          Many men describe orgasm as though it suddenly appears without warning.
        </p>
        <p>
          But when they begin paying closer attention, they often notice earlier signs:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
          {[
            'Their breathing becomes faster and shallower',
            'Their abdomen tightens and braces',
            'Their thighs or glutes begin to tense',
            'Their pelvic muscles start contracting rhythmically',
            'They feel an involuntary urge to increase speed',
            'Their attention becomes intensely focused on climax',
            'A feeling of urgency begins to replace relaxed pleasure'
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-[#141622] border border-white/5 flex items-start gap-2.5 text-sm text-[#e0ded8]">
              <span className="w-5 h-5 rounded-full bg-[#c5a059]/20 text-[#dfc58b] flex items-center justify-center font-mono text-xs flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p>
          These signals may appear <em>before</em> the point of inevitability. That is the useful training zone.
        </p>
        <p>
          The purpose of solo practice is not to repeatedly push yourself as close to orgasm as possible. It is to become familiar enough with your own warning signs that you can make decisions before you feel overwhelmed.
        </p>
        <p>
          This is why the Solo Laboratory is better understood as a practice in awareness. You are collecting information:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#dedad2]">
          <li>What makes your arousal rise quickly?</li>
          <li>What happens to your breathing?</li>
          <li>Which muscles tense up?</li>
          <li>At what point do you begin feeling urgent?</li>
          <li>What helps you feel calmer?</li>
        </ul>
        <p>
          The answers will not be exactly the same for everyone. Your body is your laboratory.
        </p>

        {/* COMPANION INTERLINK: BIOMECHANICAL BLUEPRINT */}
        <div className="my-5 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Full-Body Muscular Synergy</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Biomechanical Blueprint] Pelvic Floor Synergy
            </div>
            <div className="text-xs text-[#8e909a]">
              Discover why involuntary thigh, glute, and core tension speeds up climax—and how to reset the kinetic chain.
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

      {/* CHAPTER 2 */}
      <section id="solo-ch2" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 2: Rethinking the “Death Grip” Habit
        </h2>
        <p>
          One of the terms often used online is “death grip syndrome.”
        </p>
        <p>
          This is not a formal medical diagnosis, but the phrase is commonly used to describe a pattern in which someone becomes accustomed to very tight pressure, intense friction, or a highly specific form of stimulation during masturbation.
        </p>
        <p>
          The concern is not that your penis has permanently “lost all sensation.”
        </p>
        <p>
          The more realistic issue is that your body may become accustomed to one particular style of stimulation. If your solo technique is consistently much tighter, faster, or more intense than the stimulation you experience with a partner, you may notice a difference when your environment changes.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Importance of Variety
        </h3>
        <p>
          Rather than using maximum pressure every time, consider experimenting with a lighter grip and slower pace. If you normally rely on high friction, using a suitable personal lubricant may make the experience smoother and reduce unnecessary irritation.
        </p>
        <p>
          The goal is not to make masturbation difficult. The goal is to avoid training yourself to believe that sexual stimulation only feels satisfying under one extremely specific set of conditions.
        </p>
        <p>
          Variety can improve awareness. Try changing:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 my-3 text-center">
          {['Grip Pressure', 'Speed', 'Rhythm', 'Muscle Tension', 'Body Position'].map((v, i) => (
            <div key={i} className="p-3 rounded-lg bg-[#181a26] border border-[#c5a059]/30 text-xs font-semibold text-[#dfc58b]">
              {v}
            </div>
          ))}
        </div>
        <p>
          Do not make every session identical. This can help you become more responsive to subtle changes rather than automatically seeking the highest possible level of stimulation.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Slow Down Before Your Body Forces You To
        </h3>
        <p>
          Many men only slow down when they are already extremely close to orgasm. By then, the process may be difficult to interrupt.
        </p>
        <p>
          A better approach is learning to change pace earlier. You do not have to wait until you feel like you are “about to lose control.” Slow down when you first notice your body becoming rushed.
        </p>
        <p>
          This may feel strange initially, especially if you are used to a fast routine. But learning to enjoy lower and moderate levels of arousal is an important part of developing awareness.
        </p>
      </section>

      {/* CHAPTER 3 */}
      <section id="solo-ch3" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 3: Creating the Right Environment for Practice
        </h2>
        <p>
          Your mental state can influence your sexual response.
        </p>
        <p>
          If you are rushed, worried about being interrupted, checking the clock, or feeling guilty and anxious, your body may not be in the best state for careful self-observation. That is why structured practice is different from a quick release.
        </p>
        <p>
          You do not need candles, special music, or an expensive “biohacking” setup. You simply need enough privacy and time to avoid rushing.
        </p>

        <div className="p-5 rounded-2xl bg-[#131520] border border-white/10 space-y-3">
          <div className="font-serif font-bold text-base text-[#fbf9f4] flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#c5a059]" />
            <span>A Simple Practice Setup</span>
          </div>
          <p className="text-sm text-[#8e909a]">Choose a practice window when:</p>
          <ul className="space-y-2 text-sm text-[#dedad2]">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>You have guaranteed privacy without risk of sudden interruption.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>You are not rushing to leave for work or another scheduled obligation.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>You feel reasonably physically comfortable and rested.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>You can focus your attention without repeatedly checking messages or notifications.</span>
            </li>
          </ul>
        </div>

        <p>
          The point is not to create a perfect environment. It is to remove unnecessary pressure.
        </p>
        <p>
          If your entire session is dominated by the thought, <em>“I only have three minutes,”</em> you are more likely to fall back into a rushed pattern.
        </p>
        <p>
          The Solo Laboratory works best when <strong>curiosity replaces urgency</strong>. You are there to learn what your body does—not to pass a test.
        </p>
      </section>

      {/* CHAPTER 4: AROUSAL SCALE */}
      <section id="solo-ch4" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 4: Using a Personal Arousal Scale
        </h2>
        <p>
          A simple arousal scale can be one of the most practical tools for building awareness.
        </p>
        <p>
          You can rate your arousal from 1 to 10. The exact numbers are not scientifically precise. They are simply a way of giving yourself a language for noticing change.
        </p>

        {/* INLINE IMAGE 2 */}
        {post.images?.arousal && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.arousal} 
              alt="Arousal Progression Scale and Biofeedback Awareness Line"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 2: The 1-to-10 Arousal Progression curve and the critical Level 6–7 regulation window</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Art of Stamina Diagnostic</span>
            </div>
          </div>
        )}

        {/* INTERACTIVE AROUSAL SCALE WIDGET */}
        <div className="my-8 p-6 rounded-2xl bg-[#121522] border border-[#c5a059]/40 shadow-xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
            <div>
              <div className="text-xs text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Gauge className="w-4 h-4 text-[#c5a059]" />
                <span>Interactive Clinical Metric</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#fbf9f4]">
                The 1–10 Arousal Calibration Framework
              </h3>
            </div>
            <div className="text-xs text-[#8e909a]">Select a level below to inspect physiological cues:</div>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {[1, 4, 7, 8, 9].map((lvl, idx) => {
              const ranges = ['1–3', '4–5', '6–7', '8', '9–10'];
              const isSel = selectedLevel === lvl || (lvl === 1 && selectedLevel <= 3) || (lvl === 4 && (selectedLevel === 4 || selectedLevel === 5)) || (lvl === 7 && (selectedLevel === 6 || selectedLevel === 7)) || (lvl === 8 && selectedLevel === 8) || (lvl === 9 && selectedLevel >= 9);
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`py-2.5 px-2 rounded-xl text-center border transition-all cursor-pointer ${
                    isSel 
                      ? 'bg-[#c5a059] text-black font-extrabold border-[#dfc58b] shadow-md scale-105' 
                      : 'bg-[#181b29] text-[#b8b5ab] border-white/10 hover:border-[#c5a059]/50'
                  }`}
                >
                  <div className="text-xs font-mono font-bold">{ranges[idx]}</div>
                  <div className="text-[10px] hidden sm:block truncate opacity-80">
                    {idx === 2 ? 'Threshold' : idx === 4 ? 'Climax' : `Zone ${idx + 1}`}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="space-y-3">
            {arousalScaleDetails.map((scale, i) => (
              <div key={i} className={`p-4 rounded-xl border ${scale.color} ${scale.highlight ? 'ring-1 ring-[#c5a059]/50' : ''}`}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="font-serif font-bold text-sm sm:text-base flex items-center gap-2">
                    <span className="font-mono font-extrabold">Level {scale.level}:</span>
                    <span>{scale.label}</span>
                  </div>
                  {scale.highlight && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#c5a059]/20 text-[#dfc58b] border border-[#c5a059]/40">
                      Ideal Training Zone
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-[#cbc7be] leading-relaxed">
                  {scale.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          The Goal Is Not to Live at Level 8
        </h3>
        <p>
          Some online advice encourages men to spend long periods constantly pushing themselves to the edge. That is not necessarily the best approach.
        </p>
        <p>
          The purpose of practice is not to repeatedly torture yourself with extreme arousal.
        </p>
        <p>
          A better goal is learning to recognize when your arousal is rising and discovering how changes in pace, stimulation, breathing, and tension affect you.
        </p>
        <p>
          The most valuable skill is not staying permanently on the edge. <strong>It is knowing when you are approaching it.</strong>
        </p>
      </section>

      {/* CHAPTER 5: PRACTICAL STOP-START METHOD */}
      <section id="solo-ch5" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 5: A More Practical Stop-Start Method
        </h2>
        <p>
          The stop-start method is relatively simple in principle.
        </p>
        <p>
          You stimulate yourself until you feel your arousal becoming very high, then stop or reduce stimulation before reaching the point where ejaculation feels inevitable. After your arousal decreases, you begin again.
        </p>
        <p>
          The difficulty is that many people misunderstand the timing. <strong>They wait too long.</strong>
        </p>

        {/* INLINE IMAGE 3 */}
        {post.images?.reflex && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.reflex} 
              alt="Neuromuscular reflex retraining and pelvic floor biofeedback loop"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 3: Neural biofeedback pathways and the reflexive pause down-regulation sequence</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Art of Stamina Science Lab</span>
            </div>
          </div>
        )}

        {/* 4 STEPS BREAKDOWN */}
        <div className="space-y-4 my-6">
          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-serif font-bold text-base text-[#dfc58b] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#c5a059]/20 text-[#dfc58b] flex items-center justify-center font-mono text-xs">1</span>
              <span>Step 1: Start Slowly</span>
            </div>
            <p className="text-sm text-[#cbc7be]">
              Begin with a comfortable pace. Avoid immediately using the fastest or most intense stimulation possible. Pay attention to breathing, pelvic tension, abdominal tension, speed, and your level of urgency. Ask yourself occasionally: <em>“Where am I on my arousal scale right now?”</em> (You do not need to ask this every ten seconds—just check in periodically).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-[#c5a059]/40 space-y-2">
            <div className="font-serif font-bold text-base text-[#dfc58b] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#c5a059]/20 text-[#dfc58b] flex items-center justify-center font-mono text-xs">2</span>
              <span>Step 2: Recognize Your Early Warning Zone</span>
            </div>
            <p className="text-sm text-[#cbc7be]">
              When you notice yourself moving from manageable arousal toward a level that feels increasingly urgent, reduce intensity. You can slow down, pause, use less pressure, change rhythm, or take a few comfortable breaths. <strong>The key is to act before you reach your personal point of no return.</strong>
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-serif font-bold text-base text-[#dfc58b] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#c5a059]/20 text-[#dfc58b] flex items-center justify-center font-mono text-xs">3</span>
              <span>Step 3: Pause Without Panicking</span>
            </div>
            <p className="text-sm text-[#cbc7be]">
              When you stop, do not immediately become frustrated. A pause is part of the practice. Allow your body to settle naturally. Focus on relaxing unnecessary tension. Some people find that a slow exhale helps them feel calmer. There is no prize for dropping your arousal from an 8 to a 2 as quickly as possible. The goal is simply to become comfortable with the fact that arousal can rise and fall—it does not always have to move in one direction.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-serif font-bold text-base text-[#dfc58b] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#c5a059]/20 text-[#dfc58b] flex items-center justify-center font-mono text-xs">4</span>
              <span>Step 4: Begin Again Gradually</span>
            </div>
            <p className="text-sm text-[#cbc7be]">
              When you resume, do not instantly return to the same speed that pushed you close to your limit. Start slower. Pay attention to whether your body responds differently. Over time, you may learn which changes in pace are most effective for you. This process is about experimentation, not perfection.
            </p>
          </div>
        </div>

        {/* MID-ARTICLE BOOK PROMO BANNER */}
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#171926] via-[#12141e] to-[#181a28] border border-[#c5a059]/40 shadow-2xl flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-shrink-0 cursor-pointer" onClick={onLockerClick}>
            <BookMockup size="compact" />
          </div>
          <div className="space-y-3 text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#dfc58b] text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#c5a059]" />
              <span>Full Educational Manual</span>
            </div>
            <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#fbf9f4]">
              Master the Complete Behavioral Protocols
            </h4>
            <p className="text-xs sm:text-sm text-[#9e9fad] leading-relaxed">
              Unlock the comprehensive 68-page PDF guide containing detailed step-by-step solo logs, pacing cues, and partner communication frameworks.
            </p>
            <a
              href="javascript:void(0);"
              onClick={onLockerClick}
              className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] text-[#0b0c10] font-extrabold text-xs tracking-wider uppercase shadow-lg hover:brightness-110 active:scale-95 transition-all no-underline cursor-pointer"
            >
              <span>DOWNLOAD FREE EBOOK (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* CHAPTER 6: BREATHING & TENSION */}
      <section id="solo-ch6" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 6: Breathing and Releasing Unnecessary Tension
        </h2>
        <p>
          Breathing is one of the easiest things to ignore during sexual arousal.
        </p>
        <p>
          Many people do not realize they are holding their breath until they consciously check. Others begin breathing rapidly as arousal increases. Neither pattern automatically causes ejaculation, but excessive tension can make you feel more rushed and reactive.
        </p>

        {/* INLINE IMAGE 4 */}
        {post.images?.breathing && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.breathing} 
              alt="Diaphragmatic breathing, conscious posture and whole-body muscle tension release"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 4: Somatic down-regulation through slow diaphragmatic exhalation and postural release</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Art of Stamina Somatic Lab</span>
            </div>
          </div>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          Check Your Whole Body
        </h3>
        <p>
          During solo practice, occasionally scan your physical anatomy to notice and release unneeded tension:
        </p>

        {/* INTERACTIVE BODY SCAN CHECKLIST */}
        <div className="my-6 p-6 rounded-2xl bg-[#12141e] border border-white/10 space-y-4">
          <div className="text-xs text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-2">
            <Wind className="w-4 h-4 text-[#c5a059]" />
            <span>Interactive Somatic Body Scan</span>
          </div>
          <p className="text-xs text-[#8e909a]">Click each muscle group to test your physical relaxation cue:</p>

          <div className="space-y-2.5">
            {tensionChecklist.map((item) => (
              <div 
                key={item.key}
                onClick={() => toggleTensionCheck(item.key)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                  checkedTension[item.key]
                    ? 'bg-[#1b2234] border-[#c5a059] text-white'
                    : 'bg-[#161824] border-white/5 text-[#b8b5ab] hover:border-white/20'
                }`}
              >
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                  checkedTension[item.key]
                    ? 'bg-[#c5a059] border-[#dfc58b] text-black'
                    : 'border-white/30 bg-[#0f1118]'
                }`}>
                  {checkedTension[item.key] && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <div className="space-y-0.5">
                  <div className="text-sm font-semibold text-[#eae8e3]">{item.name}</div>
                  <div className="text-xs text-[#8e909a]">{item.cue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p>
          You do not need to force every muscle to relax completely. The aim is to identify unnecessary tension.
        </p>
        <p>
          Try taking a slow, natural inhale. Then let your exhale be slightly longer and allow your shoulders, jaw, and abdomen to soften.
        </p>
        <p>
          If you have previously learned pelvic floor relaxation techniques, you may gently focus on releasing rather than repeatedly contracting the pelvic muscles. <strong>Do not force the muscles downward or strain.</strong>
        </p>
        
        <div className="p-4 rounded-xl bg-[#1c1815] border border-amber-500/30 text-xs text-amber-300 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <span>
            Pelvic floor training should not cause pain. If you experience persistent pelvic pain, discomfort, or difficulty relaxing your muscles, consider speaking with a qualified healthcare professional or pelvic health specialist.
          </span>
        </div>
      </section>

      {/* CHAPTER 7: PORNOGRAPHY & FANTASY */}
      <section id="solo-ch7" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 7: Pornography, Fantasy, and Attention
        </h2>
        <p>
          There is a lot of extreme information online about pornography. Some people claim it inevitably destroys sexual performance. Others insist it can never influence anyone negatively.
        </p>
        <p>
          Reality is usually more individual.
        </p>
        <p>
          Pornography does not automatically cause sexual dysfunction in everyone who watches it. However, some people may notice that frequent use, highly specific preferences, compulsive behaviour, or constantly escalating novelty affects their sexual expectations or ability to remain present during real-life intimacy.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          The Value of Practicing With Fewer Distractions
        </h3>
        <p>
          If your goal is to learn your physical arousal signals, it can be useful to occasionally practice without constantly changing videos or searching for increasingly stimulating material.
        </p>
        <p>
          This does not mean fantasy is forbidden. Fantasy is a normal part of human sexuality.
        </p>
        <p>
          But if you want to understand your body better, try placing more attention on physical sensations:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#dedad2]">
          <li>Notice what happens when you slow down.</li>
          <li>Notice when your muscles tense.</li>
          <li>Notice the difference between a thought that increases your arousal and a physical sensation that does.</li>
        </ul>
        <p>
          This can create a stronger awareness of your own response. The goal is not to become afraid of sexual thoughts—it is to become less dependent on maximum stimulation every time you practice.
        </p>
      </section>

      {/* CHAPTER 8: 30-DAY PLAN */}
      <section id="solo-ch8" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 8: A Realistic 30-Day Solo Awareness Plan
        </h2>
        <p>
          Thirty days will not guarantee a permanent transformation. But a month can be enough time to begin building a more intentional practice.
        </p>
        <p>
          Here is a structured 4-week progression:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="font-serif font-bold text-base text-[#fbf9f4]">Week 1: Learn Your Patterns</span>
              <span className="text-xs font-mono font-bold text-[#c5a059] px-2 py-0.5 rounded bg-[#c5a059]/10">Days 1–7</span>
            </div>
            <p className="text-xs text-[#8e909a]">
              Practice 2–3 times during the week. The focus is pure observation without lasting a specific number of minutes.
            </p>
            <ul className="text-xs text-[#dedad2] space-y-1 list-disc pl-4">
              <li>Track how quickly your arousal rises</li>
              <li>Identify your early warning somatic signs</li>
              <li>Notice which muscles tense automatically</li>
              <li>Observe changes in respiratory rate</li>
            </ul>
            <div className="text-[11px] text-[#c5a059] font-medium">Goal: Raw diagnostic data, not achievement.</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="font-serif font-bold text-base text-[#fbf9f4]">Week 2: Practice Earlier Pauses</span>
              <span className="text-xs font-mono font-bold text-[#c5a059] px-2 py-0.5 rounded bg-[#c5a059]/10">Days 8–14</span>
            </div>
            <p className="text-xs text-[#8e909a]">
              Begin experimenting with the stop-start approach before intensity peaks.
            </p>
            <ul className="text-xs text-[#dedad2] space-y-1 list-disc pl-4">
              <li>Slow down at Level 6–7 on your Arousal Scale</li>
              <li>Do not wait until the final possible second</li>
              <li>Practice recognizing the threshold between high arousal and "too late"</li>
              <li>Let your body settle with 3 slow, deep abdominal breaths</li>
            </ul>
            <div className="text-[11px] text-[#c5a059] font-medium">Goal: Voluntary reflex interruption before inevitability.</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="font-serif font-bold text-base text-[#fbf9f4]">Week 3: Practice Pace Changes</span>
              <span className="text-xs font-mono font-bold text-[#c5a059] px-2 py-0.5 rounded bg-[#c5a059]/10">Days 15–21</span>
            </div>
            <p className="text-xs text-[#8e909a]">
              Instead of always stopping completely, experiment with modulating speed and pressure.
            </p>
            <ul className="text-xs text-[#dedad2] space-y-1 list-disc pl-4">
              <li>Move slower and vary contact grip</li>
              <li>Take brief 5-second rhythmic pauses</li>
              <li>Remain comfortable at moderate-to-high arousal without rushing</li>
              <li>Maintain conscious jaw and abdominal relaxation</li>
            </ul>
            <div className="text-[11px] text-[#c5a059] font-medium">Goal: Dynamic pacing fluidity without full stops.</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#141624] border border-[#c5a059]/40 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="font-serif font-bold text-base text-[#fbf9f4]">Week 4: Integration & Positions</span>
              <span className="text-xs font-mono font-bold text-[#c5a059] px-2 py-0.5 rounded bg-[#c5a059]/10">Days 22–30</span>
            </div>
            <p className="text-xs text-[#8e909a]">
              Apply calibrated awareness across different comfortable body postures.
            </p>
            <ul className="text-xs text-[#dedad2] space-y-1 list-disc pl-4">
              <li>Test standing, seated, and supine positions</li>
              <li>Notice how hip and pelvic posture changes arousal rate</li>
              <li>Accept normal day-to-day autonomic variation</li>
              <li>Integrate breathing as an automatic reflex</li>
            </ul>
            <div className="text-[11px] text-[#dfc58b] font-medium">Goal: Confident body awareness in variable settings.</div>
          </div>
        </div>

        <p>
          Do not expect identical results every session. Some days your arousal may rise faster because of stress, excitement, fatigue, or other factors. That variation is part of learning.
        </p>
        <p>
          The goal of the 30-day plan is not to create a perfect body—it is to build a more informed relationship with your own sexual response.
        </p>
      </section>

      {/* CHAPTER 9: REFRACTORY PERIOD */}
      <section id="solo-ch9" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 9: Understanding the Refractory Period
        </h2>
        <p>
          The refractory period is the recovery time after orgasm before a person can become sexually responsive again.
        </p>
        <p>
          Its length varies widely. Age, health, stress, arousal, and individual biology can all influence it. Some people may recover relatively quickly; others need much longer. There is no universal “elite” recovery time.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-2">
          Do Not Turn Recovery Into Another Competition
        </h3>
        <p>
          Trying to force yourself into another sexual encounter immediately after orgasm does not necessarily build stamina. Your body may simply need time.
        </p>
        <p>
          <strong>Rest is not failure.</strong>
        </p>
        <p>
          Hydration, general cardiovascular health, adequate sleep, and overall fitness may support your general wellbeing, but there is no proven shortcut that guarantees an immediate return to full arousal.
        </p>
        <p>
          Instead of obsessing over how quickly you can perform again, pay attention to your body's natural recovery. The goal is healthy function—not turning your sexual response into a competition.
        </p>
      </section>

      {/* CHAPTER 10: FAQ */}
      <section id="solo-ch10" className="scroll-mt-24 space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 10: Common Questions About Solo Stamina Training
        </h2>

        <div className="space-y-3">
          {[
            {
              q: "What if I orgasm earlier than planned during practice?",
              a: "That is not a reason to give up. Instead, ask what happened: Did you miss your early warning signs? Did you increase speed too quickly? Were you distracted? Did you wait until you were already extremely close before trying to stop? Use the experience as information. The next session is another opportunity to practice awareness."
            },
            {
              q: "How often should I practice?",
              a: "There is no universal number. Three sessions per week may feel appropriate for one person and excessive for another. The goal is not to accumulate the highest possible number of practice sessions. If solo activity causes irritation, soreness, or becomes compulsive, take a break. Quality of awareness matters far more than quantity."
            },
            {
              q: "Should I always avoid orgasm during training?",
              a: "No. Turning every session into a frustrating attempt to avoid orgasm can create unnecessary pressure. You can choose to end some sessions with orgasm if you want. The useful skill is being able to recognize and influence your level of arousal—not permanently denying yourself release."
            },
            {
              q: "Can solo practice completely cure premature ejaculation?",
              a: "Not necessarily. Some men may benefit from behavioural techniques, while others may have contributing factors (such as thyroid imbalances, neurochemical sensitivity, or significant anxiety) that require professional assessment or medical treatment. If early ejaculation is persistent and causes distress, consult a qualified healthcare professional."
            },
            {
              q: "What if I feel pain?",
              a: "Stop immediately. Sexual practice should never involve pushing through persistent pain. Pain in the penis, pelvis, testicles, or during ejaculation should be evaluated by a qualified healthcare professional or urologist, especially if it continues or worsens."
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
      <section id="solo-conclusion" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Conclusion: Become a Student of Your Own Body
        </h2>
        <p>
          The Solo Laboratory is not about chasing “infinite stamina.” It is about replacing guesswork with awareness.
        </p>
        <p>
          For many men, sexual arousal feels like something that simply happens to them. It rises, becomes intense, and eventually reaches a point where they feel they have no influence over what happens next.
        </p>
        <p>
          <strong>But awareness can create more options:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#dedad2]">
          <li>When you learn your body's earlier signals, you have more time to respond.</li>
          <li>When you notice unnecessary tension, you can practice releasing it.</li>
          <li>When you recognize that you are speeding up automatically, you can change pace.</li>
          <li>When you understand that arousal rises and falls rather than moving in one straight line, you can stop treating every increase in intensity as a reason to panic.</li>
        </ul>
        <p>
          That is the real value of structured solo practice. You are not fighting pleasure—you are learning how your body experiences it. You are not trying to become numb—you are becoming more sensitive to your own warning signs. And you are not trying to guarantee perfection—you are building a skill.
        </p>
        <p>
          Like any skill, some days will feel easier than others. The important thing is consistency, curiosity, and patience. The more honestly you observe your own patterns, the easier it may become to recognize them when you are with a partner.
        </p>
        <p>
          The Solo Laboratory is where you can learn without the pressure of trying to impress anyone. No stopwatch. No audience. No need to prove anything. Just you, your body, and the opportunity to understand your own response a little better.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-4">
          Ready to Take Your Training Further?
        </h3>
        <p>
          Solo awareness can be one part of a broader approach to sexual confidence and control. When combined with healthy lifestyle habits, stress management, communication, pelvic awareness, and appropriate professional support when needed, it can help create a stronger foundation for improvement.
        </p>

        {/* BOTTOM FINAL CTA CARD */}
        <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1b1f30] via-[#141624] to-[#0f111a] border border-[#c5a059]/50 shadow-2xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#dfc58b] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Complete Digital Guide Available</span>
          </div>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#fbf9f4]">
            Download The Art of Stamina (Free PDF)
          </h3>
          <p className="text-sm text-[#a8a69d] max-w-xl mx-auto leading-relaxed">
            👉 Explore the complete <strong>The Art of Stamina eBook</strong> for a structured approach to arousal awareness, breathing, pelvic relaxation, lifestyle habits, and building greater sexual confidence over time.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href="javascript:void(0);"
              onClick={onLockerClick}
              className="py-4 px-8 rounded-xl text-base font-extrabold tracking-wider uppercase text-[#0b0c10] bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] hover:brightness-110 active:scale-95 transition-all shadow-[0_8px_30px_rgba(197,160,89,0.35)] flex items-center justify-center gap-3 cursor-pointer no-underline"
            >
              <span>GET THE FREE GUIDE NOW</span>
            </a>
          </div>
        </div>

        {/* MEDICAL DISCLAIMER */}
        <div className="p-5 rounded-xl bg-[#0e1017] border border-white/10 text-xs text-[#7e808c] leading-relaxed">
          <p>
            <strong>Medical Disclaimer:</strong> This article is for educational and informational purposes only and is not a substitute for medical advice, diagnosis, or clinical treatment. If you experience persistent premature ejaculation, erectile difficulties, pelvic pain, or other ongoing sexual health concerns, consult a qualified healthcare professional.
          </p>
        </div>
      </section>

    </div>
  );
}
