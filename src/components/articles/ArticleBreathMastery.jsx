import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Wind, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  Heart,
  RotateCcw,
  Moon,
  Droplets,
  Brain,
  ShieldCheck,
  Zap,
  Clock,
  BatteryCharging,
  Sliders,
  Scale,
  Play,
  Pause,
  Compass,
  Layers,
  ArrowUpRight,
  BookOpen
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticleBreathMastery({ post, onLockerClick }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('360');
  
  // Interactive Breathing Visualizer State
  const [isPacing, setIsPacing] = useState(false);
  const [pacerMode, setPacerMode] = useState('extendedExhale'); // 'extendedExhale' | 'box' | 'physioSigh'
  const [timerText, setTimerText] = useState('Ready');
  const [progress, setProgress] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Breath pacing animation loop
  useEffect(() => {
    let interval = null;
    let seconds = 0;

    if (isPacing) {
      interval = setInterval(() => {
        seconds = (seconds + 1) % (pacerMode === 'extendedExhale' ? 10 : pacerMode === 'box' ? 16 : 8);

        if (pacerMode === 'extendedExhale') {
          // 4s Inhale, 6s Exhale
          if (seconds < 4) {
            setTimerText(`Inhale gently through nose (${4 - seconds}s)`);
            setProgress((seconds / 4) * 100);
          } else {
            const exSec = seconds - 4;
            setTimerText(`Exhale slowly through parted lips (${6 - exSec}s)`);
            setProgress(100 - (exSec / 6) * 100);
          }
        } else if (pacerMode === 'box') {
          // 4s Inhale, 4s Hold, 4s Exhale, 4s Hold
          if (seconds < 4) {
            setTimerText(`Inhale (${4 - seconds}s)`);
            setProgress((seconds / 4) * 100);
          } else if (seconds < 8) {
            setTimerText(`Hold Calmly (${8 - seconds}s)`);
            setProgress(100);
          } else if (seconds < 12) {
            setTimerText(`Exhale (${12 - seconds}s)`);
            setProgress(100 - ((seconds - 8) / 4) * 100);
          } else {
            setTimerText(`Hold Empty (${16 - seconds}s)`);
            setProgress(0);
          }
        } else if (pacerMode === 'physioSigh') {
          // 3s Inhale 1, 1s Inhale 2, 4s Long Exhale
          if (seconds < 3) {
            setTimerText(`Deep Inhale (${3 - seconds}s)`);
            setProgress((seconds / 3) * 80);
          } else if (seconds < 4) {
            setTimerText(`Top-off Inhale (Sniff)`);
            setProgress(100);
          } else {
            const exSec = seconds - 4;
            setTimerText(`Long, Slow Exhale (${4 - exSec}s)`);
            setProgress(100 - (exSec / 4) * 100);
          }
        }
      }, 1000);
    } else {
      setTimerText('Paused');
      setProgress(0);
    }

    return () => clearInterval(interval);
  }, [isPacing, pacerMode]);

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
      <section id="breath-intro" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Introduction: Your Breath May Be the Most Underrated Tool for Arousal Control
        </h2>
        <p>
          When men think about improving sexual stamina, breathing is usually not the first thing that comes to mind.
        </p>
        <p>
          They think about exercises. Supplements. Pelvic floor training. Special foods. Techniques. Positions. Maybe even complicated routines that promise dramatic results in a few days.
        </p>
        <p>
          But one of the simplest tools you have is with you every second of the day.
        </p>
        <p className="text-lg font-serif font-bold text-[#dfc58b]">
          Your breath.
        </p>
        <p>
          Breathing sits in an interesting place within the human body. Most of the time, you do not have to think about it. Your body handles it automatically. Yet you can also consciously slow your breathing, change your rhythm, pause briefly, or take a deeper breath whenever you choose.
        </p>
        <p>
          That makes breathing a useful bridge between your conscious mind and your body's automatic stress and arousal responses.
        </p>
        <p>
          This matters because sexual arousal does not happen only in the genitals.
        </p>
        <p>
          Your brain is involved. Your nervous system is involved. Your heart rate changes. Your muscles respond. Your attention narrows. Your breathing often changes as excitement increases.
        </p>
        <p>
          For many men, one of the clearest signs that arousal is rising quickly is a change in breathing.
        </p>
        
        <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-1.5 font-mono text-xs sm:text-sm text-[#dedad2]">
          <div className="text-[#dfc58b] font-semibold">The Unconscious Escalation Pattern:</div>
          <div>• The breaths become shorter.</div>
          <div>• The cadence becomes faster.</div>
          <div>• Inhales become more irregular and shallow.</div>
          <div>• You hold your breath unconsciously right before the point of no return.</div>
        </div>

        <p>
          As intensity rises, the rest of the body may follow. The jaw tightens. The shoulders rise. The stomach becomes tense. The thighs or pelvic area may begin contracting. What started as enjoyable excitement can gradually become a feeling of urgency.
        </p>
        <p>
          And once you are already overwhelmed, trying to regain control can be difficult.
        </p>
        <p>
          This is where breath awareness becomes useful.
        </p>
        <p>
          The goal is not to claim that one breathing technique can give you unlimited stamina or allow you to control every part of your sexual response on command. Human sexuality is far too complex for that.
        </p>
        <p>
          Breathing exercises cannot guarantee that you will never ejaculate early. They cannot permanently override biology. And there is no proven “secret breath” that can instantly double your sexual performance.
        </p>
        <p>
          What breathing <em>can</em> do is give you something practical to pay attention to as arousal rises.
        </p>

        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#dedad2]">
          <li>It can help you notice when you are becoming tense.</li>
          <li>It can give you a moment to slow down.</li>
          <li>It can support parasympathetic relaxation.</li>
          <li>And when combined with other skills—such as arousal awareness, pacing, pelvic floor relaxation, stress management, and healthy lifestyle habits—it may become part of a broader approach to better sexual control.</li>
        </ul>

        {/* Highlight Quote Box */}
        <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-[#171a26] to-[#12141d] border-l-4 border-[#c5a059] shadow-md">
          <p className="font-serif italic text-lg sm:text-xl text-[#fbf9f4] leading-relaxed mb-2">
            "Think of your breath as an anchor. When everything else is becoming intense, returning your attention to a calm rhythm interrupts the automatic rush."
          </p>
          <div className="text-xs text-[#c5a059] font-semibold tracking-wider uppercase">— Art of Stamina Neural-Pulmonic Lab</div>
        </div>

        {/* INLINE IMAGE 1 */}
        {post.images?.hero && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.hero} 
              alt="Neural-pulmonic diaphragmatic breathwork, autonomic down-regulation, and arousal control"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[460px] object-cover"
            />
            <div className="p-3.5 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 1: Mindful diaphragmatic respiratory anchoring and autonomic nervous system regulation</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Art of Stamina Diagnostic</span>
            </div>
          </div>
        )}
      </section>

      {/* CHAPTER 1 */}
      <section id="breath-ch1" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 1: The Anatomy of a Better Breath
        </h2>
        <p>
          To understand why breathing may matter for sexual stamina, it helps to understand the difference between shallow breathing and diaphragmatic breathing.
        </p>
        <p>
          The diaphragm is a large muscle located beneath the lungs. When it contracts during an inhale, it moves downward and creates space for the lungs to expand.
        </p>
        <p>
          A relaxed breath can involve movement through the lower ribcage and abdomen, not just the upper chest.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Diaphragm and the Pelvic Floor
        </h3>
        <p>
          The diaphragm and pelvic floor are part of the body's pressure-management system.
        </p>
        <p>
          During normal relaxed breathing, the movement of the diaphragm can be accompanied by changes in the pelvic floor. These structures work together with the abdominal muscles to manage pressure inside the torso.
        </p>
        <p>
          For some people, a relaxed inhale may be associated with a subtle feeling of expansion or release through the lower abdomen and pelvic area. During an exhale, the system naturally changes again.
        </p>
        <p>
          This is why breathing awareness can be useful when learning to relax excessive pelvic tension.
        </p>
        <p>
          The goal is not to aggressively push the pelvic floor down every time you inhale. You should not strain or force a “reverse Kegel” with every breath.
        </p>

        {/* COMPANION INTERLINK: BIOMECHANICAL BLUEPRINT */}
        <div className="my-5 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Full Biomechanical Kinetic Chain</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Biomechanical Blueprint] Pelvic Floor Synergy
            </div>
            <div className="text-xs text-[#8e909a]">
              See how diaphragmatic excursion links with the Transverse Abdominis and the Deep Front Line myofascial sling.
            </div>
          </div>
          <Link
            to="/blog/pelvic-floor-synergy-functional-kinetic-chain-stamina"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Explore Biomechanical Blueprint</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* INLINE IMAGE 2 */}
        {post.images?.diaphragmLoop && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.diaphragmLoop} 
              alt="360-degree diaphragmatic expansion and pelvic floor synchronization loop"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 2: The anatomical synergy between diaphragmatic depression, intra-abdominal pressure, and pelvic floor release</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Neural-Pulmonic Mechanics</span>
            </div>
          </div>
        )}

        <div className="p-5 rounded-2xl bg-[#141624] border border-[#c5a059]/40 space-y-3">
          <div className="text-xs text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#c5a059]" />
            <span>The 4-Point Tension Check on Inhale:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#dedad2]">
            <div className="p-2.5 rounded bg-[#181a28] border border-white/5">Are you clenching your jaw?</div>
            <div className="p-2.5 rounded bg-[#181a28] border border-white/5">Holding your stomach rigid?</div>
            <div className="p-2.5 rounded bg-[#181a28] border border-white/5">Squeezing your glutes?</div>
            <div className="p-2.5 rounded bg-[#181a28] border border-white/5">Involuntarily tightening the pelvic floor?</div>
          </div>
          <p className="text-xs text-[#8e909a] italic">
            If so, a comfortable, unhurried breath gives you the biofeedback window to consciously let that tension go.
          </p>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Difference Between Chest and Diaphragmatic Breathing
        </h3>
        <p>
          There is nothing inherently wrong with your chest moving when you breathe. Your ribcage is supposed to move.
        </p>
        <p>
          The problem is when your breathing becomes chronically shallow, rushed, or dominated by upper-body tension.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
            <div className="text-xs uppercase font-bold text-rose-400">High-Stress Breathing Pattern</div>
            <ul className="space-y-1 text-xs text-[#cbc7be] list-disc pl-4">
              <li>Shoulders visibly rising toward ears</li>
              <li>Upper chest working excessively hard</li>
              <li>Short, rapid, shallow gasps</li>
              <li>Rigid, braced abdominal wall</li>
              <li>Clenched jaw and facial grimacing</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
            <div className="text-xs uppercase font-bold text-emerald-400">360-Degree Diaphragmatic Pattern</div>
            <ul className="space-y-1 text-xs text-[#cbc7be] list-disc pl-4">
              <li>Expansion through lower lateral ribs</li>
              <li>Gentle softening of lower abdomen</li>
              <li>Relaxed trapezius and shoulder girdle</li>
              <li>Unclenched jaw with smooth nasal flow</li>
              <li>Natural subtle release of the pelvic floor</li>
            </ul>
          </div>
        </div>

        <p>
          Imagine that instead of forcing your stomach outward, you are allowing the entire lower ribcage to gently expand in multiple directions: forward, to the sides, and slightly through the back. The movement does not need to be exaggerated. Natural and comfortable is better than dramatic.
        </p>
      </section>

      {/* CHAPTER 2 */}
      <section id="breath-ch2" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 2: Why Your Breathing Changes When Arousal Rises
        </h2>
        <p>
          Think about what happens when something suddenly scares you. Your breathing may change immediately.
        </p>
        <p>
          The same can happen when you become excited. The nervous system responds to changes in emotion and physical intensity. Sexual arousal naturally increases heart rate and breathing rate, particularly as excitement peaks.
        </p>
        <p>
          That is completely normal. The goal is not to remain perfectly calm and breathe like a monk during passionate intimacy. Sexual activity naturally involves changing levels of excitement.
        </p>
        <p>
          The skill is learning to notice when your breathing becomes so rushed that it is adding unnecessary tension.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Escalation Pattern
        </h3>
        <p>
          For many men, arousal can rise through a predictable cascade:
        </p>

        <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-2 font-mono text-xs sm:text-sm text-[#dfc58b]">
          <div className="flex items-center gap-2"><span>1.</span><span>Pleasure increases rapidly</span></div>
          <div className="flex items-center gap-2"><span>2.</span><span>You unconsciously speed up cadence</span></div>
          <div className="flex items-center gap-2"><span>3.</span><span>Breaths become shorter and panting</span></div>
          <div className="flex items-center gap-2"><span>4.</span><span>Muscles in pelvic floor and thighs clamp</span></div>
          <div className="flex items-center gap-2"><span>5.</span><span>Sensory urgency becomes overwhelming</span></div>
          <div className="flex items-center gap-2 text-rose-400"><span>6.</span><span>Point of Ejaculatory Inevitability reached prematurely</span></div>
        </div>

        <p>
          When you notice yourself panting, holding your breath, or rapidly increasing your breathing rate, ask yourself:
        </p>
        <div className="p-4 rounded-xl bg-[#181a28] border-l-2 border-[#dfc58b] text-[#fbf9f4] font-serif italic text-base">
          “What else is my body doing right now?”
        </div>
        <p>
          You may discover that your whole body is speeding up together. That awareness creates an opportunity to intervene earlier: slow the pace, pause if necessary, relax your jaw, release your shoulders, and take a comfortable breath.
        </p>
      </section>

      {/* CHAPTER 3 */}
      <section id="breath-ch3" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 3: CO₂, Breathing, and the Importance of Avoiding Over-Breathing
        </h2>
        <p>
          Carbon dioxide, or CO₂, is often misunderstood. Many people assume that CO₂ is simply a toxic waste product that needs to be blown off as quickly as possible.
        </p>
        <p>
          In reality, your body carefully regulates CO₂ levels, and carbon dioxide plays an essential role in breathing regulation, cellular oxygen delivery (the Bohr Effect), and autonomic stability.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          What Is Over-Breathing?
        </h3>
        <p>
          Over-breathing, or hyperventilation, occurs when you breathe more volume than your body's current metabolic state requires. This causes CO₂ levels in the blood to plummet, constricting blood vessels and causing:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-[#dedad2]">
          <li>Light-headedness and perceptual tunnel vision</li>
          <li>Tingling sensations in the extremities</li>
          <li>Acute spikes in sympathetic nervous system panic</li>
          <li>Muscular spasming and heightened pelvic tension</li>
        </ul>
        <p>
          This is one reason taking huge, dramatic gulps of air when you are already anxious does not calm you down. <strong>More air is not always the answer.</strong>
        </p>
      </section>

      {/* CHAPTER 4 */}
      <section id="breath-ch4" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 4: Nasal Breathing — Useful, but Not a Religion
        </h2>
        <p>
          Nasal breathing has become extremely popular in modern sports and wellness culture. And there are good reasons to pay attention to it: your nose filters, warms, and humidifies air, while releasing endogenous nitric oxide from the paranasal sinuses.
        </p>
        <p>
          However, it is important not to turn nasal breathing into an ideological dogma.
        </p>
        <p>
          During intense sexual moments, physical demands increase and mouth breathing can become completely normal. What matters most is not whether air passes exclusively through the nose, but whether your breathing feels <strong>controlled and smooth</strong> rather than chaotic and gasping.
        </p>
      </section>

      {/* INTERACTIVE PACER TOOL */}
      <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#161928] via-[#121420] to-[#0e1017] border-2 border-[#c5a059]/40 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-[#c5a059]" />
              <span>Interactive Training Terminal</span>
            </div>
            <h4 className="font-serif font-bold text-xl text-[#fbf9f4]">
              Real-Time Respiratory Cadence Pacer
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setPacerMode('extendedExhale'); setIsPacing(false); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                pacerMode === 'extendedExhale' ? 'bg-[#c5a059] text-black border-[#dfc58b]' : 'bg-[#181a26] text-[#8e909a] border-white/10'
              }`}
            >
              4-6 Extended Exhale
            </button>
            <button
              onClick={() => { setPacerMode('box'); setIsPacing(false); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                pacerMode === 'box' ? 'bg-[#c5a059] text-black border-[#dfc58b]' : 'bg-[#181a26] text-[#8e909a] border-white/10'
              }`}
            >
              4-4-4-4 Box
            </button>
            <button
              onClick={() => { setPacerMode('physioSigh'); setIsPacing(false); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                pacerMode === 'physioSigh' ? 'bg-[#c5a059] text-black border-[#dfc58b]' : 'bg-[#181a26] text-[#8e909a] border-white/10'
              }`}
            >
              Physiological Sigh
            </button>
          </div>
        </div>

        {/* Breathing Circle Graphic */}
        <div className="flex flex-col items-center justify-center py-6 space-y-4">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-white/10 bg-[#0e1017] flex items-center justify-center shadow-inner overflow-hidden">
            {/* Animated Expanding Aura */}
            <div 
              className="absolute rounded-full bg-gradient-to-tr from-[#c5a059]/30 to-[#dfc58b]/10 transition-all duration-1000 ease-out"
              style={{
                width: `${Math.max(20, progress)}%`,
                height: `${Math.max(20, progress)}%`,
              }}
            />
            {/* Center Text */}
            <div className="relative z-10 text-center px-4">
              <div className="text-xs text-[#c5a059] font-mono uppercase tracking-wider mb-1">
                {isPacing ? (pacerMode === 'extendedExhale' ? 'Parasympathetic' : pacerMode === 'box' ? 'Focus Alignment' : 'Emergency Reset') : 'Standby'}
              </div>
              <div className="text-sm sm:text-base font-bold text-[#fbf9f4] font-serif">
                {timerText}
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={() => setIsPacing(!isPacing)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            {isPacing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPacing ? 'Pause Pacing' : 'Start Cadence Guide'}</span>
          </button>
        </div>
      </div>

      {/* CHAPTER 5 */}
      <section id="breath-ch5" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 5: The Practical Stamina Breath Routine
        </h2>
        <p>
          Now let us make this practical. The following routine is not a magic formula. Think of it as a daily practice for becoming more aware of how your body responds to breathing and relaxation.
        </p>

        <div className="space-y-4 my-6">
          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-serif font-bold text-base text-[#dfc58b] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#c5a059]/20 text-[#dfc58b] flex items-center justify-center text-xs font-mono">1</span>
              <span>Step 1: Learn 360-Degree Expansion</span>
            </div>
            <p className="text-sm text-[#cbc7be]">
              Sit or lie down in a comfortable position. Place one hand on your lower abdomen and another around your lower ribs. Take a comfortable inhale. Notice gentle expansion through the sides and back rather than forcing the belly outward.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-serif font-bold text-base text-[#dfc58b] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#c5a059]/20 text-[#dfc58b] flex items-center justify-center text-xs font-mono">2</span>
              <span>Step 2: Use a Slightly Longer Exhale (4-Inhale / 6-Exhale)</span>
            </div>
            <p className="text-sm text-[#cbc7be]">
              Inhale comfortably for around 4 seconds, then exhale gently for 6 seconds. The extended exhale stimulates vagal tone, lowering resting heart rate and counteracting adrenaline spikes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-serif font-bold text-base text-[#dfc58b] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#c5a059]/20 text-[#dfc58b] flex items-center justify-center text-xs font-mono">3</span>
              <span>Step 3: Pause Naturally, If Comfortable</span>
            </div>
            <p className="text-sm text-[#cbc7be]">
              After exhaling, allow a brief natural gap before the next breath. This simple pause teaches your nervous system that you do not need to constantly strain or brace.
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTER 6 */}
      <section id="breath-ch6" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 6: Synchronizing Breath and Pelvic Relaxation
        </h2>
        <p>
          For men learning about pelvic floor control, breathing provides a critical somatic anchor.
        </p>
        <p>
          The key word is <strong>relaxation</strong>. Many men hear about pelvic floor training and immediately begin clenching as hard as possible. But a hypertonic, chronically contracted pelvic floor is one of the primary drivers of premature ejaculation. Constant tension is not strength.
        </p>

        {/* INLINE IMAGE 3 */}
        {post.images?.breathTension && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.breathTension} 
              alt="Athletic man performing somatic whole-body tension release and relaxed jaw posture"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 3: Somatic whole-body tension release (Jaw, Trapezius, Abdomen, and Pelvic Floor)</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Bio-Somatic Calibration</span>
            </div>
          </div>
        )}

        <div className="p-5 rounded-2xl bg-[#121522] border border-[#c5a059]/30 space-y-3">
          <div className="font-serif font-bold text-base text-[#fbf9f4]">The Inhale-Release Synchronization Technique:</div>
          <p className="text-sm text-[#cbc7be]">
            During a comfortable inhale, imagine allowing the lower abdomen and pelvic area to soften and drop. Do not push downward aggressively. Simply notice if you are clenching, and let the tension dissolve. During the exhale, allow the pelvic floor to return to a neutral, resting state.
          </p>
        </div>
      </section>

      {/* CHAPTER 7 */}
      <section id="breath-ch7" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 7: The “Emergency Reset” When Arousal Feels Too High
        </h2>
        <p>
          Imagine you are already highly aroused. Your breathing is accelerating, your body feels tight, and you are approaching the point where you usually struggle to slow down.
        </p>
        <p>
          What should you do? First, do not panic. Panic floods your bloodstream with norepinephrine, accelerating the reflex.
        </p>

        {/* INLINE IMAGE 4 */}
        {post.images?.physioSigh && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.physioSigh} 
              alt="Physiological sigh waveform and box breathing pacing visualization"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 4: The double-inhale physiological sigh biofeedback waveform for rapid down-regulation</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Autonomic Resets</span>
            </div>
          </div>
        )}

        <div className="p-5 rounded-2xl bg-[#151828] border border-[#c5a059]/40 space-y-3">
          <div className="text-xs text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#c5a059]" />
            <span>The 7-Step In-the-Moment Emergency Reset:</span>
          </div>
          <ol className="space-y-2 text-sm text-[#dedad2] list-decimal pl-5">
            <li><strong>Pause or reduce stimulation immediately</strong> — do not try to "power through".</li>
            <li><strong>Consciously unclench your jaw and separate teeth</strong>.</li>
            <li><strong>Drop your shoulders away from your ears</strong>.</li>
            <li><strong>Let your lower abdomen expand and soften completely</strong>.</li>
            <li><strong>Take one comfortable deep inhale</strong> through the nose.</li>
            <li><strong>Follow with a small top-off sniff</strong> (the Physiological Sigh).</li>
            <li><strong>Exhale slowly and smoothly through relaxed lips</strong> until arousal settles.</li>
          </ol>
        </div>
      </section>

      {/* CHAPTER 8 & 9 */}
      <section id="breath-ch8" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 8 &amp; 9: Box Breathing, Mental Focus &amp; Daily Training
        </h2>
        <p>
          Sometimes performance anxiety creates a destructive mental loop known as <strong>“spectatoring”</strong>—becoming an anxious observer of your own sexual performance instead of remaining present in your body.
        </p>
        <p>
          Structured box breathing (4-4-4-4: Inhale 4s, Hold 4s, Exhale 4s, Hold 4s) gives your conscious mind a focused task, pulling your attention out of panic and anchoring you in the present moment.
        </p>
        <p>
          The best way to make these skills feel natural is to practice them when nothing is at stake: 3–5 minutes while sitting quietly, after work, or before sleep. Consistency matters far more than intensity.
        </p>
      </section>

      {/* CHAPTER 10: COMMON MISTAKES */}
      <section id="breath-ch10" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 10: Common Mistakes With Breathwork
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
          {[
            {
              title: "1. Taking Huge, Gulping Breaths",
              desc: "Over-breathing drops CO₂ and causes dizziness. Keep breaths natural, relaxed, and smooth."
            },
            {
              title: "2. Forcing Long Breath Holds",
              desc: "Deliberate oxygen deprivation increases sympathetic panic and muscular tension."
            },
            {
              title: "3. Holding Breath Unconsciously",
              desc: "The moment you notice breath-holding during high arousal, immediately exhale smoothly."
            },
            {
              title: "4. Turning Breathing Into a Test",
              desc: "Obsessing over perfect counts defeats the purpose of relaxation. Keep it effortless."
            },
            {
              title: "5. Ignoring the Rest of the Body",
              desc: "Breathing must be paired with releasing jaw, shoulder, and pelvic floor tension."
            },
            {
              title: "6. Over-Pushing the Pelvic Floor",
              desc: "Do not aggressively force a 'reverse Kegel'. A gentle softening is all that is required."
            }
          ].map((m, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#141624] border border-white/5 space-y-1">
              <div className="font-serif font-bold text-sm text-[#dfc58b]">{m.title}</div>
              <p className="text-xs text-[#8e909a] leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHAPTER 11: FAQ */}
      <section id="breath-faq" className="scroll-mt-24 space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          FAQ: Breathing for Better Sexual Control
        </h2>

        <div className="space-y-3">
          {[
            {
              q: "Should I breathe through my nose during sex?",
              a: "Nasal breathing can be comfortable during lower-intensity moments, but there is no need to force yourself to breathe only through your nose. During greater physical intensity, mouth breathing is completely normal. Focus on avoiding frantic, uncontrolled breathing."
            },
            {
              q: "Should I hold my breath to last longer?",
              a: "Generally, intentionally holding your breath during sexual activity is not a reliable stamina technique. Breath-holding spikes internal tension and triggers rapid escalation. A smoother, extended exhale is far more effective."
            },
            {
              q: "Can breathing exercises cure premature ejaculation?",
              a: "Not necessarily. While breathwork is a powerful behavioral tool for managing nervous system excitement, premature ejaculation often involves multiple factors. Persistent concerns should be evaluated by a healthcare professional."
            },
            {
              q: "How long does it take to improve?",
              a: "Many men notice heightened bodily awareness within their very first few practice sessions. Ingraining automatic relaxation responses during high arousal usually develops steadily over several weeks of consistent practice."
            },
            {
              q: "What if I feel dizzy while practicing?",
              a: "Stop the exercise immediately and return to normal breathing. Dizziness indicates hyperventilation (over-breathing). Relax and make your breaths smaller and slower."
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
      <section id="breath-conclusion" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Conclusion: The Goal Is Not to Control Everything
        </h2>
        <p>
          The deepest lesson in breathwork is not that you can become the absolute commander of every biological process in your body. Sexual response is not a machine that can be coded with a simple breathing algorithm.
        </p>
        <p>
          The real benefit of breath awareness is that it gives you a way to participate consciously in the process: noticing arousal before it overwhelms you, dropping tension from your jaw and shoulders, and giving yourself room to choose what happens next.
        </p>

        {/* READY TO BUILD STAMINA SYSTEM CTA BOX */}
        <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1b1e2c] via-[#12141f] to-[#1a1c2b] border-2 border-[#c5a059] shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#dfc58b] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Complete Curriculum</span>
          </div>
          <h3 className="font-serif font-bold text-2xl text-[#fbf9f4]">
            Ready to Build a More Complete Stamina System?
          </h3>
          <p className="text-sm text-[#cbc7be] leading-relaxed">
            Breathing is one piece of the larger picture. Greater sexual confidence and control can also involve understanding your arousal patterns, learning to manage unnecessary tension, improving lifestyle habits, developing pelvic awareness, and reducing performance anxiety.
          </p>
          <p className="text-sm text-[#cbc7be] leading-relaxed">
            The complete <strong>Art of Stamina Mastery eBook</strong> brings these areas together into one structured system designed to help men develop greater awareness, confidence, and control over time.
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
          <strong>Medical Disclaimer:</strong> This article is for educational purposes only and does not replace professional medical advice. If you experience persistent premature ejaculation, erectile difficulties, breathing problems, pelvic pain, or other ongoing sexual health concerns, consult a qualified healthcare professional.
        </div>
      </section>

    </div>
  );
}
