import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
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
  Eye,
  Activity,
  Compass,
  Layers,
  ThermometerSnowflake,
  Flame,
  Volume2,
  RefreshCw,
  ArrowUpRight,
  BookOpen
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticlePsychology({ post, onLockerClick }) {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Interactive Mental Reset Practice State
  const [activeThoughtPattern, setActiveThoughtPattern] = useState('performance');
  const [isGrounded, setIsGrounded] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const thoughtScenarios = {
    performance: {
      toxic: '"I have to last longer this time. If I finish in 2 minutes, my partner is going to be secretly disappointed and judge me."',
      physiologicalCost: 'Triggers amygdala threat response, norepinephrine surge, elevated heart rate, rapid breath holding, and pelvic clamping.',
      reframe: '"Arousal is rising naturally. I don\'t need to prove anything right now. I will slow my breathing, soften my jaw, and stay present in the sensation."',
      somaticCue: 'Exhale slowly (6s), drop shoulders, separate teeth.'
    },
    timer: {
      toxic: '"How many minutes has it been? It feels like it\'s already too close. I need to think about something boring like math or baseball to distract myself."',
      physiologicalCost: 'Severe sensory dissociation, loss of somatic feedback, followed by sudden unmonitored reflex threshold crossing.',
      reframe: '"Distraction pulls me out of my body. Instead of escaping, I will connect with my partner\'s touch, anchor in my breathing, and adjust my pacing smoothly."',
      somaticCue: 'Feel the temperature of partner’s skin, take 1 slow nasal breath.'
    },
    spectator: {
      toxic: '"Look at yourself. You are tense, breathing fast, and about to lose control. You are failing again."',
      physiologicalCost: 'Severe spectatoring loop, chronic self-monitoring, acute anxiety spike, acceleration of involuntary spinal ejaculation reflex.',
      reframe: '"I notice I am self-monitoring. That is just an old mental habit. I shift from judgment to observation: my breathing is fast, so I simply pause and reset."',
      somaticCue: 'Perform the 5-Point Tension Release (Jaw, Shoulders, Belly, Glutes, Pelvic Floor).'
    }
  };

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
      <section id="psych-intro" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Introduction: Your Mind Is Part of the Stamina System
        </h2>
        <p>
          When men start looking for ways to improve sexual stamina, most of them immediately focus on the physical side.
        </p>
        <p>
          They search for exercises. They look into supplements. They practice breathing techniques. They try pelvic floor exercises. They look for a position, technique, or secret trick that promises to help them last longer.
        </p>
        <p>
          Those things can be part of the bigger picture. But there is one area that is often overlooked:
        </p>
        <p className="text-lg font-serif font-bold text-[#dfc58b]">
          The mind.
        </p>
        <p>
          Sexual response does not happen in isolation. Your brain, nervous system, emotions, attention, expectations, and stress levels all play a role in how your body responds.
        </p>
        <p>
          This is why a man may have completely different experiences from one day to another.
        </p>
        <p>
          One night, he feels relaxed, connected, and naturally in control. Another night, he feels nervous, overly excited, distracted, or under pressure—and suddenly, his usual control seems to disappear.
        </p>
        <p>
          The physical body may not have changed very much. But his mental state has.
        </p>
        <p>
          That is the psychology of stamina.
        </p>
        <p>
          The goal of this guide is not to convince you that you can control every biological response through “mind power.” Human sexuality is more complicated than that. There is no single thought that guarantees perfect control, and persistent problems with ejaculation or sexual function may sometimes require professional medical support.
        </p>
        <p>
          But your mental state matters.
        </p>
        <p>
          Performance anxiety can affect sexual response. Constant self-monitoring can pull you out of the experience. Stress can increase physical tension. Unrealistic expectations can turn intimacy into an exam you feel you have to pass.
        </p>
        <p>
          And once sex starts feeling like a test, the pressure can become part of the problem.
        </p>
        <p>
          This guide explores the psychological side of the <strong>Art of Stamina</strong>. We will look at performance anxiety, the nervous system, the habit of “spectatoring,” mindfulness, conditioned sexual responses, breathing, visualization, communication, and practical ways to become less trapped inside your own head.
        </p>

        {/* Highlight Quote Box */}
        <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-[#171a26] to-[#12141d] border-l-4 border-[#c5a059] shadow-md">
          <p className="font-serif italic text-lg sm:text-xl text-[#fbf9f4] leading-relaxed mb-2">
            "Stop treating every intimate experience as a performance you can fail. Learn to become more present, notice tension earlier, and work with your body instead of panicking when arousal rises."
          </p>
          <div className="text-xs text-[#c5a059] font-semibold tracking-wider uppercase">— Art of Stamina Neuro-Psychology Lab</div>
        </div>

        {/* INLINE IMAGE 1: HERO */}
        {post.images?.hero && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.hero} 
              alt="Neural-psychological mindfulness, presence, and arousal regulation for male stamina"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[460px] object-cover"
            />
            <div className="p-3.5 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 1: Neurological presence, amygdala down-regulation, and the psychology of calm mastery</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Cognitive Architecture</span>
            </div>
          </div>
        )}
      </section>

      {/* CHAPTER 1 */}
      <section id="psych-ch1" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 1: Performance Anxiety and the Brain's Threat Response
        </h2>
        <p>
          Imagine two situations.
        </p>
        <p>
          In the first, you feel relaxed. You feel comfortable with your partner. You are not watching the clock. You are not trying to prove anything. You are simply present.
        </p>
        <p>
          In the second, your thoughts are racing:
        </p>
        <div className="p-4 rounded-xl bg-[#141624] border border-rose-500/20 space-y-1 font-mono text-xs sm:text-sm text-rose-300">
          <div>• “I have to last longer this time.”</div>
          <div>• “What if I finish too quickly?”</div>
          <div>• “Am I doing a good job?”</div>
          <div>• “What if my partner is secretly disappointed?”</div>
        </div>
        <p>
          Your body experiences these two situations very differently.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          When Sex Starts Feeling Like a Test
        </h3>
        <p>
          The brain is constantly evaluating environmental and emotional safety. When something feels safe, the parasympathetic nervous system remains dominant, allowing relaxed blood flow and balanced arousal pacing.
        </p>
        <p>
          When an experience feels threatening or high-pressure, the amygdala activates a threat response. The “threat” does not need to be a physical predator—it can be <strong>fear of embarrassment</strong>, <strong>fear of inadequacy</strong>, or <strong>fear of judgment</strong>.
        </p>
        <p>
          If you believe that your sexual duration determines your masculinity or worth, intimate encounters become high-stakes tests.
        </p>
        <p>
          This creates a difficult paradox:
        </p>
        <div className="p-4 rounded-xl bg-[#181a28] border-l-2 border-[#dfc58b] text-[#fbf9f4] font-serif italic text-base">
          “The harder you try not to finish, the more attention you focus on finishing. And the more you obsessively monitor your arousal, the more tension you create.”
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Goal Is Not to Eliminate Arousal
        </h3>
        <p>
          Arousal is not the enemy. Excitement is not the enemy. Pleasure is not the enemy.
        </p>
        <p>
          The problem occurs when your mind interprets rising arousal as an emergency.
        </p>
        <p>
          A healthier skill is learning to recognize: <em>“I am becoming more aroused,”</em> without immediately adding: <em>“Oh no, I'm losing control.”</em>
        </p>
        <p>
          One response triggers sympathetic panic; the other generates mindful observation and adaptive pacing.
        </p>

        {/* COMPANION INTERLINK: THE NEURAL RESET */}
        <div className="my-5 p-4 rounded-xl bg-[#141624] border border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Neurochemical Baseline Masterclass</span>
            </div>
            <div className="text-sm font-serif font-bold text-[#fbf9f4]">
              [The Neural Reset] Dopamine Fasting &amp; Neurological Desensitization
            </div>
            <div className="text-xs text-[#8e909a]">
              Why digital super-stimuli downregulate D2 receptors and trap men in spectatoring and rapid arousal loops.
            </div>
          </div>
          <Link
            to="/blog/dopamine-fasting-neurological-desensitization-stamina"
            className="flex-shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#c5a059]/20 hover:bg-[#c5a059] text-[#dfc58b] hover:text-black text-xs font-bold transition-all no-underline"
          >
            <span>Read Neural Reset Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CHAPTER 2 */}
      <section id="psych-ch2" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 2: The “Spectatoring” Trap
        </h2>
        <p>
          One of the most important psychological concepts in modern sexology is known as <strong>spectatoring</strong>.
        </p>
        <p>
          Originally identified in clinical sex therapy research by Masters and Johnson, spectatoring describes the destructive habit of mentally stepping outside your own body to observe, judge, and critique your own performance.
        </p>

        {/* INLINE IMAGE 2: SPECTATORING DIAGRAM */}
        {post.images?.spectatoringChart && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.spectatoringChart} 
              alt="Spectatoring performance anxiety loop vs mindful somatic presence diagram"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 2: The Cognitive Spectatoring Loop: From Performance Evaluation to Reflex Acceleration</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Cognitive Neuro-Loop</span>
            </div>
          </div>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Why Self-Monitoring Accelerates the Reflex
        </h3>
        <p>
          There is nothing wrong with being attuned to your partner. The problem is obsessive self-monitoring.
        </p>
        <p>
          When you are evaluating yourself like a third-party critic, intimacy feels like a live performance review:
        </p>
        <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-2 font-mono text-xs sm:text-sm text-[#dedad2]">
          <div>1. You worry about lasting long enough.</div>
          <div>2. You step outside yourself to judge your sensations.</div>
          <div>3. You notice every slight rise in arousal and panic.</div>
          <div>4. Anxiety triggers sympathetic adrenaline release.</div>
          <div>5. Pelvic floor muscles involuntarily clamp tight.</div>
          <div className="text-rose-400">6. The point of ejaculatory inevitability arrives prematurely.</div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Move From Judgment to Awareness
        </h3>
        <p>
          The solution is not to become numb or disconnected. The key distinction is between <strong>judgment</strong> and <strong>objective observation</strong>:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-1.5">
            <div className="text-xs uppercase font-bold text-rose-400">Judgment (Panic Generator)</div>
            <p className="text-xs text-[#cbc7be] italic">“This is terrible. I am clenching and failing again. I am going to ruin everything.”</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
            <div className="text-xs uppercase font-bold text-emerald-400">Observation (Biofeedback Anchor)</div>
            <p className="text-xs text-[#cbc7be] italic">“My breathing is getting slightly fast. My shoulders are tight. I will pause for 5 seconds and exhale smoothly.”</p>
          </div>
        </div>
      </section>

      {/* CHAPTER 3 */}
      <section id="psych-ch3" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 3: Arousal, Reward, and Why the Brain Feels Like It Is Rushing
        </h2>
        <p>
          Sexual arousal involves a sophisticated interplay between the brain, autonomic nervous system, dopamine, serotonin, oxytocin, and peripheral sensory nerves.
        </p>
        
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Conditioned Habit of Rushing
        </h3>
        <p>
          The human brain is an anticipation machine. In modern life, many men inadvertently train their brains through years of rushed solo sexual activity:
        </p>
        <div className="p-4 rounded-xl bg-[#141624] border border-white/10 font-mono text-xs sm:text-sm text-[#dfc58b] space-y-1">
          <div>High Stimulation → Maximum Friction → Rush to Finish → Instant Reward</div>
        </div>
        <p>
          When you practice rushing hundreds of times, your nervous system learns that the goal of sexual arousal is to reach the finish line as rapidly as possible.
        </p>
        <p>
          Fortunately, neuroplasticity works both ways. You can re-educate your nervous system to tolerate high levels of sensory pleasure without immediately triggering the ejaculatory reflex.
        </p>
      </section>

      {/* INTERACTIVE COGNITIVE REFRAME & GROUNDING TERMINAL */}
      <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#161928] via-[#121420] to-[#0e1017] border-2 border-[#c5a059]/40 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
              <Brain className="w-4 h-4 text-[#c5a059]" />
              <span>Cognitive Laboratory</span>
            </div>
            <h4 className="font-serif font-bold text-xl text-[#fbf9f4]">
              Real-Time Cognitive Reframe &amp; Somatic Anchor
            </h4>
          </div>
          <div className="flex gap-2">
            {[
              { id: 'performance', label: 'Fear of Disappointment' },
              { id: 'timer', label: 'Clock Watching & Distraction' },
              { id: 'spectator', label: 'Severe Self-Critique' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveThoughtPattern(tab.id); setIsGrounded(false); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  activeThoughtPattern === tab.id
                    ? 'bg-[#c5a059] text-black border-[#dfc58b]'
                    : 'bg-[#181a26] text-[#8e909a] border-white/10 hover:text-[#dedad2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Reframe Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Toxic Thought & Physiological Cost */}
          <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-3">
            <div className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>Unconscious Toxic Thought Loop:</span>
            </div>
            <p className="text-sm font-serif italic text-[#fbf9f4]">
              {thoughtScenarios[activeThoughtPattern].toxic}
            </p>
            <div className="p-3 rounded-lg bg-black/40 border border-rose-500/20 text-xs text-rose-300/80">
              <strong>Autonomic Consequence:</strong> {thoughtScenarios[activeThoughtPattern].physiologicalCost}
            </div>
          </div>

          {/* Calibrated Neuro Reframe */}
          <div className="p-5 rounded-2xl bg-[#121522] border border-[#c5a059]/40 space-y-3">
            <div className="text-xs font-bold text-[#dfc58b] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#c5a059]" />
              <span>Mindful Somatic Reframe:</span>
            </div>
            <p className="text-sm font-serif text-[#dedad2] leading-relaxed">
              {thoughtScenarios[activeThoughtPattern].reframe}
            </p>
            <div className="p-3 rounded-lg bg-[#181a28] border border-[#c5a059]/30 text-xs text-[#dfc58b]">
              <strong>Immediate Somatic Cue:</strong> {thoughtScenarios[activeThoughtPattern].somaticCue}
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => setIsGrounded(!isGrounded)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${isGrounded ? 'animate-spin' : ''}`} />
            <span>{isGrounded ? 'Somatic Reset Calibrated ✓' : 'Practice Grounding Reset'}</span>
          </button>
        </div>
      </div>

      {/* CHAPTER 4 */}
      <section id="psych-ch4" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 4: Mindfulness and Sensory Focus
        </h2>
        <p>
          Mindfulness is often misunderstood as sitting cross-legged for hours trying to empty your mind of all thoughts.
        </p>
        <p>
          In sexual physiology, mindfulness simply means <strong>anchoring your attention in real-time physical sensations</strong> without getting hijacked by judgment or future predictions.
        </p>

        {/* INLINE IMAGE 3: SENSORY FOCUS */}
        {post.images?.sensoryFocus && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.sensoryFocus} 
              alt="Sensory focus, mindful touch, and intimate connection for male sexual control"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 3: Sensory Grounding: Moving from Future-Oriented Anxiety to Present Somatic Awareness</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Sensory Physiology</span>
            </div>
          </div>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Feel Instead of Evaluating
        </h3>
        <p>
          When performance anxiety begins, your attention leaves the present moment and begins generating catastrophic future predictions: <em>“What if I finish right now? What if she thinks I'm inadequate?”</em>
        </p>
        <p>
          Sensory grounding interrupts this cycle by directing your conscious bandwidth to real physical data:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#dedad2]">
          <li>The temperature and texture of your partner's skin</li>
          <li>The sound and cadence of your shared breathing</li>
          <li>The physical sensation of weight and movement</li>
          <li>The relaxed release of your own abdominal wall</li>
        </ul>
      </section>

      {/* CHAPTER 5 */}
      <section id="psych-ch5" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 5: Breaking the Goal-Oriented Mindset
        </h2>
        <p>
          A primary driver of sexual performance anxiety is making a single arbitrary metric—such as surviving 30 minutes without stopping—the sole definition of success.
        </p>
        <p>
          When you turn intimacy into a timed endurance athletic event, you stop experiencing connection and start managing a high-stress crisis.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Process Awareness vs. Goal Orientation
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-bold text-xs uppercase text-[#dfc58b]">Goal Orientation (Tension)</div>
            <p className="text-xs text-[#8e909a]">“I must endure 25 minutes of continuous high-speed movement without pausing or showing weakness.”</p>
          </div>
          <div className="p-4 rounded-xl bg-[#141624] border border-[#c5a059]/40 space-y-2">
            <div className="font-bold text-xs uppercase text-emerald-400">Process Awareness (Control)</div>
            <p className="text-xs text-[#dedad2]">“I want to remain calm, breathe deeply, read my partner's cues, and modulate intensity so we both experience deep pleasure.”</p>
          </div>
        </div>
      </section>

      {/* CHAPTER 6 */}
      <section id="psych-ch6" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 6: Reconditioning Sexual Habits in Solo Practice
        </h2>
        <p>
          Your neural pathways are shaped by what you practice regularly.
        </p>
        <p>
          If your solo sessions consist of frantic stimulation with clutched breath, tense pelvic floor muscles, and a rush to ejaculate within 3 minutes, your nervous system learns that exact reflex cascade.
        </p>
        <p>
          Reconditioning means using solo practice as a biofeedback laboratory:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#dedad2]">
          <li><strong>Track your tension points:</strong> Notice when your jaw clenches, glutes squeeze, or breathing shallows.</li>
          <li><strong>Pause before level 7:</strong> Do not wait until level 9.5 (Point of Inevitability) to slow down. Intervene at level 6 or 7 on the 10-point arousal scale.</li>
          <li><strong>Practice breath anchoring:</strong> Take slow, 360-degree diaphragmatic breaths to down-regulate the nervous system before resuming.</li>
        </ul>
      </section>

      {/* CHAPTER 7 & 8 */}
      <section id="psych-ch7" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 7 &amp; 8: Breathing Resets, Visualization &amp; Mental Anchors
        </h2>
        <p>
          Breathing is the most accessible neurological lever you have to switch off fight-or-flight activation.
        </p>

        {/* INLINE IMAGE 4: MENTAL ANCHOR */}
        {post.images?.mentalAnchor && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.mentalAnchor} 
              alt="Somatic tactile anchoring and mental reset cues for male stamina"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 4: Establishing Somatic &amp; Tactile Anchors to Rapidly Interrupt Autonomic Escalation</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Tactile Calibration</span>
            </div>
          </div>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Cooling Visualization
        </h3>
        <p>
          When arousal feels like a raging fire building in the pelvis, visualize cool, blue, refreshing water or air flowing down from the crown of your head through your spine and diffusing excess heat throughout your entire body.
        </p>
        <p>
          This visualization replaces panicky internal commands (<em>“Don't finish! Don't finish!”</em>) with an expansive, calming physiological directive (<em>“Cool, soften, expand, breathe”</em>).
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Physical Anchor Cue
        </h3>
        <p>
          During daily meditation or relaxed breathing, establish a physical anchor—such as pressing your thumb and forefinger together while exhaling. Over repeated pairings, this physical cue acts as an instant neurological reminder to down-regulate tension during intimacy.
        </p>
      </section>

      {/* CHAPTER 9 & 10 */}
      <section id="psych-ch9" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 9 &amp; 10: Dismantling the “Perfect Performer” Myth &amp; Stopping Overthinking
        </h2>
        <p>
          Many men carry unrealistic expectations into the bedroom: they believe they must always be an unshakeable machine, never showing vulnerability, fatigue, or momentary loss of control.
        </p>
        <p>
          Real intimacy is a shared human connection, not an exam.
        </p>

        <div className="p-5 rounded-2xl bg-[#151828] border border-[#c5a059]/40 space-y-3">
          <div className="text-xs text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#c5a059]" />
            <span>The 5-Step In-the-Moment Mental Reset:</span>
          </div>
          <ol className="space-y-2 text-sm text-[#dedad2] list-decimal pl-5">
            <li><strong>Notice the anxious thought</strong> without judging yourself for having it.</li>
            <li><strong>Unclench one physical body part</strong> immediately (separate your teeth, drop your jaw).</li>
            <li><strong>Perform 1 extended exhale</strong> through relaxed, parted lips.</li>
            <li><strong>Redirect your senses</strong> to an external physical texture or your partner's breathing.</li>
            <li><strong>Communicate openly</strong>: <em>“Let’s slow down for a moment and enjoy this rhythm.”</em></li>
          </ol>
        </div>
      </section>

      {/* CHAPTER 11: FAQ */}
      <section id="psych-faq" className="scroll-mt-24 space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          FAQ: The Psychology of Sexual Stamina
        </h2>

        <div className="space-y-3">
          {[
            {
              q: "Is distraction (like thinking about baseball or math) a good way to last longer?",
              a: "While mental distraction can briefly reduce arousal in the short term, it severs your connection to your body and your partner. You lose somatic biofeedback, making it impossible to notice when you are crossing the point of no return. Mindful presence and pacing are vastly superior long-term strategies."
            },
            {
              q: "Can high work stress outside the bedroom ruin sexual stamina?",
              a: "Yes. Chronic workplace stress elevates baseline cortisol and sympathetic nervous system tone. When you enter intimacy with an overstimulated sympathetic nervous system, your ejaculatory threshold is significantly lowered."
            },
            {
              q: "Why do I feel completely in control with some partners, but finish rapidly with others?",
              a: "Novelty, emotional vulnerability, and perceived performance pressure all influence amygdala activation. When you feel a high need to impress a new partner, performance anxiety surges, triggering involuntary muscle tension and accelerated reflex firing."
            },
            {
              q: "Can psychological anxiety alone cause lifelong premature ejaculation?",
              a: "Anxiety is a primary exacerbating factor for acquired premature ejaculation, but lifelong PE often involves biological, neurochemical (serotonergic), and physiological variables. A comprehensive approach addresses both physical and psychological components."
            },
            {
              q: "How long does it take to rewire conditioned sexual habits?",
              a: "Most men begin experiencing noticeable cognitive shifts within 2 to 4 weeks of consistent mindful solo practice and somatic relaxation. Deep autonomic reconditioning typically solidifies over 8 to 12 weeks."
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
      <section id="psych-conclusion" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Conclusion: Mastering the Mind Means Working With Yourself
        </h2>
        <p>
          Sexual stamina is not purely physical. Your muscles matter. Your breathing matters. Your hormonal health matters.
        </p>
        <p>
          <strong>But your mind is the central operating system.</strong>
        </p>
        <p>
          If you enter every intimate encounter expecting failure, monitoring every sensation through a lens of fear, and judging yourself against unrealistic standards, your body will respond with fight-or-flight tension.
        </p>
        <p>
          When you stop treating intimacy like a performance you must survive, you create the internal space to genuinely experience and master it.
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
            Mental control is only one part of the bigger <strong>Art of Stamina</strong> approach. Better sexual confidence also involves understanding your arousal patterns, practicing diaphragmatic breathing, pelvic relaxation, physical fitness, communication, and healthier lifestyle habits.
          </p>
          <p className="text-sm text-[#cbc7be] leading-relaxed">
            The complete <strong>Art of Stamina Mastery eBook</strong> brings these principles together into one structured system designed to help you build greater body awareness, confidence, and practical control.
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
          <strong>Medical Disclaimer:</strong> This article is for educational purposes only and does not replace professional medical advice. If you experience persistent premature ejaculation, erectile difficulties, severe performance anxiety, or other ongoing sexual health concerns, consider speaking with a qualified healthcare professional.
        </div>
      </section>

    </div>
  );
}
