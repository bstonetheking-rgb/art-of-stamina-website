import React, { useState } from 'react';
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
  Scale
} from 'lucide-react';
import BookMockup from '../BookMockup';

export default function ArticleRefractory({ post, onLockerClick }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedFactor, setSelectedFactor] = useState('dopamine');
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState('Inhale 1 (Nose)');

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const neuroFactors = {
    dopamine: {
      name: 'Dopamine & Reward Reset',
      desc: 'During sexual arousal, dopamine drives intense motivation and focus. Post-orgasm, dopamine drops sharply while inhibitory signalling increases, creating the natural desire to rest rather than immediately continue.',
      cue: 'Why you feel a sudden drop in urgency and desire directly following climax.'
    },
    prolactin: {
      name: 'Prolactin Shift',
      desc: 'Prolactin surges acutely post-ejaculation. Research suggests this neurohormone contributes to satiety, muscle relaxation, and the transient downregulation of sexual receptivity.',
      cue: 'The biochemical signal that marks sexual completion and deep physical tranquility.'
    },
    parasympathetic: {
      name: 'Autonomic System Transition',
      desc: 'The intense sympathetic ("fight-or-flight" excitation) surge during orgasm quickly gives way to a dominant parasympathetic ("rest-and-digest") state, softening heart rate and dilating peripheral vessels.',
      cue: 'The physiological mechanism driving whole-body relaxation and restorative recovery.'
    },
    oxytocin: {
      name: 'Oxytocin & Bonding Neuromodulation',
      desc: 'Post-climax oxytocin release fosters emotional closeness, empathy, and comfort, encouraging non-demanding physical touch and deep connection over hurried physical re-stimulation.',
      cue: 'Why gentle cuddling, warmth, and close presence feel deeply restorative.'
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
      <section id="refractory-intro" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Introduction: Beyond the “One and Done” Philosophy
        </h2>
        <p>
          For many men, sex is viewed as a single event with a very clear beginning and end.
        </p>
        <p>
          Arousal builds. The experience becomes more intense. Orgasm happens. Then, almost immediately, the body seems to switch off.
        </p>
        <p>
          Desire may disappear for a while. The erection may fade. You may feel deeply relaxed, tired, sensitive, or simply uninterested in continuing right away.
        </p>
        <p>
          This recovery phase is known as the <strong>refractory period</strong>.
        </p>
        <p>
          For some men, it lasts only a few minutes. For others, it can last hours. In some cases, especially as people get older, the body may need much longer before another erection or orgasm is possible.
        </p>
        <p>
          This variation is completely normal.
        </p>
        <p>
          However, the refractory period is often misunderstood. Some men assume that if they cannot immediately perform again, something is wrong with them. Others are drawn to unrealistic promises claiming that they can “eliminate” the refractory period entirely and become capable of unlimited rounds.
        </p>
        <p>
          Neither extreme is particularly helpful.
        </p>
        <p>
          The goal is not to fight your biology or force your body to perform when it needs rest. Instead, it is to understand what happens after orgasm and learn which lifestyle, psychological, and physical factors may support healthy recovery.
        </p>
        <p>
          That is where the advanced side of the <strong>Art of Stamina</strong> begins.
        </p>
        <p>
          Stamina is not only about how long you last before ejaculation. It is also about understanding your overall sexual response.
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#dedad2]">
          <li>How does your body recover?</li>
          <li>What makes you feel ready again?</li>
          <li>What makes recovery slower?</li>
          <li>How do stress, sleep, fitness, alcohol, age, and mental pressure affect you?</li>
        </ul>
        <p>
          The answers will not be exactly the same for every man.
        </p>
        <p>
          Your sexual response is influenced by your nervous system, hormones, cardiovascular health, arousal, emotional state, medications, age, relationship context, and many other individual factors.
        </p>
        <p>
          This guide explores the refractory period from a practical perspective. You will learn what happens after climax, why recovery varies, how to support your body, and how to approach multi-round intimacy without turning it into another stressful performance competition.
        </p>
        <p>
          Because sometimes, the real sign of confidence is not forcing yourself to go again as quickly as possible.
        </p>
        <p>
          <strong>Sometimes, it is understanding your body well enough to know when it is ready.</strong>
        </p>

        {/* Highlight Quote Box */}
        <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-[#171a26] to-[#12141d] border-l-4 border-[#c5a059] shadow-md">
          <p className="font-serif italic text-lg sm:text-xl text-[#fbf9f4] leading-relaxed mb-2">
            "Real stamina is understanding your body well enough to work with it instead of constantly fighting against it."
          </p>
          <div className="text-xs text-[#c5a059] font-semibold tracking-wider uppercase">— Art of Stamina Recovery &amp; Neuro-Autonomic Lab</div>
        </div>

        {/* INLINE IMAGE 1 */}
        {post.images?.hero && (
          <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.hero} 
              alt="Physiological recovery, masculine relaxation, and calm intimacy after physical exertion"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[460px] object-cover"
            />
            <div className="p-3.5 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 1: The physiological calm and restorative state of post-orgasmic parasympathetic recovery</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Art of Stamina Science Lab</span>
            </div>
          </div>
        )}
      </section>

      {/* CHAPTER 1 */}
      <section id="refractory-ch1" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 1: What Actually Happens After Orgasm?
        </h2>
        <p>
          The male sexual response does not simply stop because you mentally decide that you are finished.
        </p>
        <p>
          After ejaculation and orgasm, several physical and neurological changes occur. The body moves from a highly aroused state toward a period of recovery.
        </p>
        <p>
          This is the refractory period.
        </p>
        <p>
          During this time, many men experience some combination of:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
          {[
            'Reduced sexual desire and urgency',
            'Natural loss of penile tumescence / erection',
            'Increased glans sensitivity and tenderness',
            'Deep somatic and muscular relaxation',
            'Post-exertion sleepiness or physical fatigue',
            'Reduced interest in further tactile stimulation'
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-lg bg-[#141622] border border-white/5 flex items-start gap-2.5 text-sm text-[#e0ded8]">
              <span className="w-5 h-5 rounded-full bg-[#c5a059]/20 text-[#dfc58b] flex items-center justify-center font-mono text-xs flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p>
          The intensity and duration of these changes vary widely.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          The Role of Brain Chemistry
        </h3>
        <p>
          Sexual arousal involves several neurochemicals, including dopamine, which plays an important role in motivation and reward.
        </p>
        <p>
          After orgasm, the brain and body undergo a shift.
        </p>
        <p>
          Prolactin levels also change after orgasm, and researchers believe this may be one of several factors associated with the post-orgasmic refractory period. Oxytocin and other neurochemical processes may also contribute to feelings of relaxation and bonding.
        </p>
        <p>
          But it is important to avoid oversimplifying this process. Your sexual recovery is not controlled by one single hormone that you can simply “switch off.”
        </p>

        {/* INLINE IMAGE 2 */}
        {post.images?.neuro && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.neuro} 
              alt="Neurochemical post-orgasmic transition curves of dopamine, prolactin, and autonomic nervous system"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 2: Neurochemical post-orgasmic transition curves (Dopamine, Prolactin, Oxytocin &amp; Autonomic Tone)</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Art of Stamina Diagnostic</span>
            </div>
          </div>
        )}

        {/* INTERACTIVE NEUROCHEMICAL EXPLORER */}
        <div className="my-6 p-6 rounded-2xl bg-[#121522] border border-[#c5a059]/40 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <div className="text-xs text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Brain className="w-4 h-4 text-[#c5a059]" />
                <span>Biological Calibration Explorer</span>
              </div>
              <h4 className="font-serif font-bold text-lg text-[#fbf9f4]">
                The Post-Orgasm Neurochemical Transition
              </h4>
            </div>
            <div className="text-xs text-[#8e909a] hidden sm:block">Select mechanism:</div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {Object.keys(neuroFactors).map((key) => {
              const item = neuroFactors[key];
              const isSel = selectedFactor === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedFactor(key)}
                  className={`p-3 rounded-xl text-center border transition-all cursor-pointer ${
                    isSel 
                      ? 'bg-[#c5a059] text-black font-extrabold border-[#dfc58b] shadow-md' 
                      : 'bg-[#181b29] text-[#b8b5ab] border-white/10 hover:border-[#c5a059]/50'
                  }`}
                >
                  <div className="text-xs font-semibold">{item.name.split(' ')[0]}</div>
                  <div className="text-[10px] opacity-75">{item.name.split('&')[1] || item.name.split(' ')[1]}</div>
                </button>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-[#171a28] border border-white/10 space-y-2">
            <div className="font-serif font-bold text-base text-[#dfc58b]">
              {neuroFactors[selectedFactor].name}
            </div>
            <p className="text-xs sm:text-sm text-[#cbc7be] leading-relaxed">
              {neuroFactors[selectedFactor].desc}
            </p>
            <div className="text-xs text-[#c5a059] font-medium pt-1">
              Clinical Context: {neuroFactors[selectedFactor].cue}
            </div>
          </div>
        </div>

        <p>
          There is no magic dopamine button. There is no guaranteed supplement that can instantly cancel the effects of orgasm. The refractory period is a complex biological process.
        </p>
        <p>
          That said, understanding that your body is naturally changing states can help reduce unnecessary anxiety. You are not necessarily “broken” because you do not immediately feel ready for another round.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Why the Sudden Change Can Feel So Dramatic
        </h3>
        <p>
          Before orgasm, your body may be highly focused on sexual stimulation. Your heart rate increases. Blood flow changes. Breathing becomes faster. Your attention narrows.
        </p>
        <p>
          After orgasm, that intensity can drop quickly. For some men, the contrast feels dramatic. One moment, they feel intensely focused on sex. The next, they want to lie down, breathe, cuddle, sleep, or simply do nothing.
        </p>
        <p>
          That does not mean you have suddenly lost your masculinity or sexual ability. It is a normal part of the sexual response cycle for many people.
        </p>
        <p>
          The first step toward mastering recovery is accepting that the recovery phase exists. You cannot intelligently work with your body if you are constantly fighting what it is naturally doing.
        </p>
      </section>

      {/* CHAPTER 2 */}
      <section id="refractory-ch2" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 2: Why the Refractory Period Is Different for Every Man
        </h2>
        <p>
          One of the biggest mistakes men make is comparing their recovery time to other people.
        </p>
        <p>
          Someone online claims he can go five times in one night. A friend exaggerates his sexual adventures. A movie or pornographic video creates unrealistic expectations.
        </p>
        <p>
          Suddenly, you start wondering whether your own recovery time is “normal.”
        </p>
        <p>
          <strong>There is no single universal number.</strong>
        </p>
        <p>
          A young man may sometimes recover quickly. Another young man may need hours. A man in his forties may occasionally be ready for another round relatively soon. Another may need until the next day. Even the same person can experience different recovery times on different days.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Factors That Can Affect Recovery
        </h3>
        <p>
          Your refractory period may be influenced by:
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-3">
          {[
            'Biological Age',
            'General Health & Cardio',
            'Sleep Quality & Duration',
            'Allostatic Stress Load',
            'Level of True Arousal',
            'Emotional Connection',
            'Physical Fitness',
            'Alcohol or Drug Use',
            'Medications (e.g. SSRIs)',
            'Hormonal Profile',
            'Fatigue & Circadian Rhythms',
            'Performance Pressure'
          ].map((f, i) => (
            <div key={i} className="p-3 rounded-lg bg-[#161826] border border-white/5 text-xs text-[#dfc58b] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
              <span>{f}</span>
            </div>
          ))}
        </div>

        <p>
          This means that your recovery time is not necessarily fixed. It can change.
        </p>
        <p>
          You may recover more quickly on a relaxed weekend after good sleep than you do after a stressful week of work. You may feel ready for another round quickly when you are highly excited, but much slower when you are exhausted.
        </p>
        <p>
          The goal should not be to force your body into someone else's timeline. The goal is to understand your own baseline.
        </p>
      </section>

      {/* CHAPTER 3 */}
      <section id="refractory-ch3" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 3: The Psychology of “Round Two”
        </h2>
        <p>
          The mind plays an important role in sexual recovery.
        </p>
        <p>
          Many men unconsciously decide that sex is completely finished the moment they orgasm. They immediately disconnect. They grab their phone. They turn away. They begin thinking about work. They mentally shift from intimacy into “post-sex mode.”
        </p>
        <p>
          That is perfectly fine if both partners are satisfied and want to rest. But if you hope to continue intimacy later, immediately disconnecting may not be the most helpful mental approach.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Think “Pause,” Not “Performance Failure”
        </h3>
        <p>
          A healthier mindset can be to see orgasm as one part of the experience rather than the final judgment of your sexual ability.
        </p>
        <p>
          You do not have to immediately announce that you are “done for the night.” You also do not have to promise another round. Simply allow the experience to continue naturally.
        </p>
        <p>
          You might:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#dedad2]">
          <li>Stay close to your partner</li>
          <li>Continue affectionate, non-demanding touch</li>
          <li>Talk and connect emotionally</li>
          <li>Kiss without urgency</li>
          <li>Cuddle and share warmth</li>
          <li>Slow your breathing</li>
          <li>Rest without rushing toward another erection</li>
        </ul>
        <p>
          The important point is that <strong>intimacy can continue even while your body is recovering</strong>.
        </p>
        <p>
          This can remove a great deal of pressure. A common mistake is trying to immediately force another erection because you are worried about proving something. That pressure can work against you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-1">
            <div className="text-xs uppercase font-bold text-rose-400">Ineffective Pressure Mindset</div>
            <p className="text-sm italic text-[#fbf9f4]">“I have to get ready again right now or I'm failing.”</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
            <div className="text-xs uppercase font-bold text-emerald-400">Calm Recovery Mindset</div>
            <p className="text-sm italic text-[#fbf9f4]">“My body is recovering. We can stay connected and see how things naturally develop.”</p>
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Connection Without a Stopwatch
        </h3>
        <p>
          Multi-round intimacy does not have to mean:
        </p>
        <div className="p-3.5 rounded-xl bg-[#141622] border border-white/10 font-mono text-xs text-[#8e909a] space-y-1">
          <div>Round One ends at 10:05.</div>
          <div>Round Two begins at 10:20.</div>
          <div>Round Three must happen before midnight.</div>
        </div>
        <p>
          That is not intimacy. That is a performance schedule.
        </p>
        <p>
          Recovery is personal. The more you obsessively check whether your body is ready, the more pressure you may create. <strong>Confidence means giving yourself permission to recover.</strong>
        </p>
      </section>

      {/* CHAPTER 4 */}
      <section id="refractory-ch4" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 4: Breathing and the Post-Orgasm Reset
        </h2>
        <p>
          After sex, your breathing and heart rate may remain elevated for a short period.
        </p>
        <p>
          One of the simplest things you can do is allow your body to gradually settle. There is no secret breathing pattern that guarantees an instant return to sexual arousal. However, slow, comfortable breathing can help support relaxation.
        </p>

        {/* INLINE IMAGE 3 */}
        {post.images?.breathing && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.breathing} 
              alt="Physiological sigh and diaphragmatic breath reset in a calm bedroom"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 3: Somatic post-climax down-regulation using the double-inhale physiological sigh</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Art of Stamina Breath Lab</span>
            </div>
          </div>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Try a Slow-Exhale Reset
        </h3>
        <p>
          After orgasm, instead of immediately jumping up or mentally rushing toward the next round, try this:
        </p>

        <div className="p-5 rounded-2xl bg-[#141624] border border-[#c5a059]/40 space-y-3">
          <div className="text-xs text-[#dfc58b] font-bold uppercase tracking-wider flex items-center gap-2">
            <Wind className="w-4 h-4 text-[#c5a059]" />
            <span>The 5-Step Post-Climax Reset Sequence</span>
          </div>
          <ol className="space-y-2 text-sm text-[#dedad2] list-decimal pl-5">
            <li><strong>Breathe in comfortably through your nose</strong> — allow the belly to soften.</li>
            <li><strong>Avoid forcing a huge inhale</strong> — keep the inhalation gentle and unhurried.</li>
            <li><strong>Exhale slowly and gently through parted lips</strong> — make the exhale twice as long as the inhale.</li>
            <li><strong>Consciously drop shoulders and unclench your jaw</strong>.</li>
            <li><strong>Repeat for 4–6 comfortable cycles</strong>.</li>
          </ol>
        </div>

        <p>
          The goal is not to hyperventilate or manipulate your nervous system like a machine. You are simply allowing your body to transition from intense activity toward a calmer state.
        </p>
        <p>
          Some people enjoy a “physiological sigh,” which involves a normal inhale followed by a smaller second inhale and a long, slow exhale. Others prefer regular slow breathing. Use whatever feels comfortable.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Relaxation Can Support Recovery
        </h3>
        <p>
          One of the ironies of multi-round performance is that trying too hard can sometimes make it more difficult.
        </p>
        <p>
          You may be thinking: <em>“Come on. Get hard again. Why isn't it happening yet? I need to be ready.”</em>
        </p>
        <p>
          That mental pressure can keep your attention focused on failure rather than recovery. A better approach is patience. Stay relaxed. Let your body settle. Do not treat every minute of recovery as evidence of success or failure.
        </p>
      </section>

      {/* CHAPTER 5 */}
      <section id="refractory-ch5" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 5: Hydration, Food, and Post-Sex Energy
        </h2>
        <p>
          Sex is physical activity. Depending on intensity and duration, you may sweat, lose fluids, and feel tired afterward.
        </p>
        <p>
          This is one reason basic hydration matters. You do not need a special “inter-round recovery drink” containing ten exotic ingredients. Water is often enough.
        </p>
        <p>
          If you have been exercising heavily, sweating significantly, or are already dehydrated, appropriate fluids and electrolytes may be useful.
        </p>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Avoid Overcomplicating the Nutrition Side
        </h3>
        <p>
          There is a lot of marketing around foods and supplements that supposedly provide an instant sexual “recharge.” The reality is less dramatic.
        </p>
        <p>
          Eating a few squares of dark chocolate will not guarantee an erection. Taking one amino acid will not guarantee that you are ready again in ten minutes. Sexual recovery is not like filling a video game energy bar.
        </p>
        <p>
          Your general nutrition over time matters more than finding a miracle food after orgasm. A healthy dietary pattern that supports cardiovascular and metabolic health may also support overall sexual wellbeing:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
          {[
            'Adequate continuous hydration throughout the day',
            'Sufficient complete dietary protein',
            'Polyphenol-rich fruits and dark vegetables',
            'Healthy sources of fats (olive oil, avocados, nuts)',
            'Whole-food complex carbohydrates',
            'Maintaining a healthy overall caloric balance'
          ].map((nutr, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-[#141624] border border-white/5 flex items-center gap-2.5 text-xs sm:text-sm text-[#e0ded8]">
              <Droplets className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>{nutr}</span>
            </div>
          ))}
        </div>

        <p>
          If you are hungry after physical activity, eat. If you are thirsty, drink. The fundamentals are rarely as exciting as “biohacks,” but they are usually more sustainable.
        </p>
      </section>

      {/* MID-ARTICLE PROMO BANNER */}
      <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#171926] via-[#12141e] to-[#181a28] border border-[#c5a059]/40 shadow-2xl flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-shrink-0 cursor-pointer" onClick={onLockerClick}>
          <BookMockup size="compact" />
        </div>
        <div className="space-y-3 text-center sm:text-left flex-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#dfc58b] text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-[#c5a059]" />
            <span>Complete Mastery Guide</span>
          </div>
          <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#fbf9f4]">
            Master the Full Sexual Stamina &amp; Recovery Blueprint
          </h4>
          <p className="text-xs sm:text-sm text-[#9e9fad] leading-relaxed">
            Unlock the comprehensive 68-page PDF manual covering autonomic recovery protocols, pelvic relaxation drills, nitric oxide nutrition, and partner communication scripts.
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

      {/* CHAPTER 6 */}
      <section id="refractory-ch6" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 6: The Role of Sleep in Multi-Round Stamina
        </h2>
        <p>
          If your goal is to improve your overall sexual energy, sleep deserves serious attention.
        </p>
        <p>
          Many men want to find a supplement that can compensate for:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm text-[#8e909a]">
          <li>Five hours of fragmented sleep</li>
          <li>A stressful work week</li>
          <li>Heavy alcohol intake</li>
          <li>Poor nutrition</li>
          <li>Zero cardiovascular exercise</li>
        </ul>
        <p>
          Unfortunately, the body does not work that way. Chronic sleep deprivation can affect mood, energy, stress regulation, and hormone function. It can also leave you physically and mentally exhausted.
        </p>
        <p>
          If you are constantly tired, it makes sense that your interest in sex—or your ability to recover from physical exertion—may sometimes suffer.
        </p>

        <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-3">
          <div className="font-serif font-bold text-base text-[#fbf9f4] flex items-center gap-2">
            <Moon className="w-4 h-4 text-[#c5a059]" />
            <span>Build a Better Recovery Foundation</span>
          </div>
          <ul className="space-y-2 text-sm text-[#dedad2]">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>Maintain a consistent sleep-wake schedule (±30 minutes daily).</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>Target 7–9 hours of unfragmented, restorative sleep.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>Reduce excessive alcohol before bed to prevent REM disruption.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>Establish a screen-free wind-down routine 45 minutes before sleep.</span>
            </li>
          </ul>
        </div>

        <p>
          One good night may not transform your sexual performance. But consistent sleep gives your body a better chance to recover from everything—including exercise, stress, and daily physical demands.
        </p>
      </section>

      {/* CHAPTER 7 */}
      <section id="refractory-ch7" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 7: Supplements and the Truth About “Biohacking”
        </h2>
        <p>
          This is where many men become vulnerable to exaggerated promises. Search for “shorten refractory period,” and you will find countless products claiming to manipulate dopamine, testosterone, prolactin, nitric oxide, and nearly every other part of male biology.
        </p>
        <p>
          Some of these products contain ingredients with legitimate physiological effects. That does not mean they are proven to shorten the refractory period safely or reliably in healthy men.
        </p>

        <div className="space-y-4 my-6">
          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-serif font-bold text-base text-[#dfc58b] flex items-center justify-between">
              <span>Vitamin B6</span>
              <span className="text-xs text-amber-400 font-mono">High-Dose Caution</span>
            </div>
            <p className="text-sm text-[#cbc7be]">
              Vitamin B6 is an essential nutrient, and it plays important roles in the body. High-dose vitamin B6 has been studied in certain medical contexts, including situations involving elevated prolactin. But that does <strong>not</strong> mean healthy men should take large doses simply to try to go multiple rounds. High doses of vitamin B6 can cause serious problems, including peripheral neuropathy and nerve damage. More is not always better.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-serif font-bold text-base text-[#dfc58b] flex items-center justify-between">
              <span>Mucuna Pruriens (L-DOPA)</span>
              <span className="text-xs text-amber-400 font-mono">Pharmacological Risk</span>
            </div>
            <p className="text-sm text-[#cbc7be]">
              Mucuna pruriens contains L-DOPA, a direct metabolic precursor involved in dopamine production. Because it can have potent pharmacological effects, it should not be treated like a harmless sexual candy. It may interact with prescription medications, affect blood pressure, and is not appropriate for unguided use.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141624] border border-white/10 space-y-2">
            <div className="font-serif font-bold text-base text-[#dfc58b] flex items-center justify-between">
              <span>Zinc and Magnesium</span>
              <span className="text-xs text-emerald-400 font-mono">Essential Micronutrients</span>
            </div>
            <p className="text-sm text-[#cbc7be]">
              Both are essential minerals. If you have an existing nutritional deficiency, correcting it supports baseline endocrine health. However, taking more than your body needs will not automatically boost testosterone above normal levels or instantly speed sexual recovery.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#151724] border border-[#c5a059]/30 text-center font-serif font-bold text-sm sm:text-base text-[#dfc58b]">
          The smartest approach: Do not build your sexual confidence around a supplement stack. Lifestyle first. Medical advice when necessary.
        </div>
      </section>

      {/* CHAPTER 8 */}
      <section id="refractory-ch8" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 8: The “Second Round Advantage”
        </h2>
        <p>
          There is one reason some men find a second round easier from a stamina perspective.
        </p>
        <p>
          After the first orgasm, penile sensitivity may temporarily change. Some men feel less physically sensitive during the second round, which can make it easier for them to maintain arousal without feeling as close to ejaculation immediately.
        </p>
        <p>
          But this is not universal. Some men remain too sensitive to enjoy continued stimulation. Others cannot get another erection for a while. Both experiences can be normal.
        </p>

        {/* INLINE IMAGE 4 */}
        {post.images?.secondRound && (
          <div className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#12141e] shadow-xl">
            <img 
              src={post.images.secondRound} 
              alt="Calm masculine intimacy and multi-round sexual confidence without performance pressure"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[440px] object-cover"
            />
            <div className="p-3 bg-[#0e1017] border-t border-white/10 text-xs text-[#8e909a] flex items-center justify-between">
              <span>Figure 4: Intimacy without performance anxiety — emotional connection supports natural re-arousal</span>
              <span className="text-[#dfc58b] font-medium hidden sm:inline">Art of Stamina Psychology Lab</span>
            </div>
          </div>
        )}

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#fbf9f4] pt-3">
          Less Pressure Can Mean Better Control
        </h3>
        <p>
          There may also be a psychological advantage. After the first orgasm, some men no longer feel the same intense fear of “finishing too quickly.” The pressure has decreased.
        </p>
        <p>
          They are no longer thinking: <em>“This has to be perfect.”</em>
        </p>
        <p>
          That relaxation can make the next experience feel more controlled. The important lesson is not that everyone must have a second round. The lesson is that performance anxiety can influence sexual control.
        </p>
        <p>
          <strong>Sometimes reducing the pressure to perform is more valuable than adding another technique.</strong>
        </p>
      </section>

      {/* CHAPTER 9 */}
      <section id="refractory-ch9" className="scroll-mt-24 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 9: Age, Health, and Realistic Expectations
        </h2>
        <p>
          Age can affect sexual response. For many men, the refractory period tends to become longer with age. That does not mean every older man will have a long recovery period, and it does not mean every younger man will recover quickly. Individual differences are significant.
        </p>
        <p>
          The problem begins when people start believing that a “biohack” can make a 50-year-old body function exactly like a 20-year-old body. Healthy habits can support better health. They cannot erase biology.
        </p>

        <div className="p-5 rounded-2xl bg-[#131520] border border-white/10 space-y-3">
          <div className="font-serif font-bold text-base text-[#fbf9f4] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            <span>Focus on Biological Health, Not Fantasy</span>
          </div>
          <p className="text-sm text-[#8e909a]">You can support healthy aging and sexual vitality by:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#dedad2]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>Exercising regularly (cardio &amp; resistance)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>Maintaining endothelial and vascular health</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>Sleeping 7–9 hours consistently</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>Actively managing chronic stress</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>Avoiding nicotine and smoking</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              <span>Limiting excessive alcohol consumption</span>
            </div>
          </div>
        </div>

        <p>
          This can support energy and sexual wellbeing. But the goal should be healthy function—not chasing an unrealistic promise of permanent youth.
        </p>
        <p>
          Your sexual ability is not measured by how many rounds you can complete. Connection, communication, pleasure, and satisfaction matter too.
        </p>
      </section>

      {/* CHAPTER 10: FAQ */}
      <section id="refractory-ch10" className="scroll-mt-24 space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4] border-b border-white/10 pb-3">
          Chapter 10: Common Questions About the Refractory Period
        </h2>

        <div className="space-y-3">
          {[
            {
              q: "How long is a normal refractory period?",
              a: "There is no single “normal” number. Recovery can range from minutes to many hours, depending on age, health, stress, and circumstances. Rather than comparing yourself with other men, pay attention to your own typical pattern."
            },
            {
              q: "Can I completely eliminate my refractory period?",
              a: "For most men, no. The refractory period is a normal biological part of the male sexual response cycle. Some men naturally recover faster than others, but there is no proven universal method that eliminates the recovery process."
            },
            {
              q: "Can medication help?",
              a: "Some prescription medications may affect erectile function or other aspects of sexual health, but they should only be used under appropriate medical guidance. Do not use prescription drugs simply because someone online promised they would help you perform multiple rounds."
            },
            {
              q: "Does a faster recovery mean better sexual performance?",
              a: "Not necessarily. A man who needs several hours to recover can still have an exceptionally healthy, satisfying, and fulfilling sex life. There is no scoreboard in genuine intimacy."
            },
            {
              q: "What if my recovery time suddenly changes?",
              a: "If you notice a major or persistent change in sexual function, especially alongside erectile difficulties, low libido, pelvic pain, or other symptoms, speak with a qualified healthcare professional or urologist."
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
      <section id="refractory-conclusion" className="scroll-mt-24 space-y-6 pt-6 border-t border-white/10">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf9f4]">
          Conclusion: Recovery Is Part of the Art
        </h2>
        <p>
          The refractory period is not a sign of weakness. It is not proof that you are “one and done.” It is a normal biological recovery phase that varies from person to person.
        </p>
        <p>
          The real value of mastering recovery is not forcing your body to ignore its limits. It is understanding what supports your overall sexual health.
        </p>
        
        <div className="p-6 rounded-2xl bg-[#141624] border border-[#c5a059]/30 space-y-4">
          <div className="text-xs text-[#dfc58b] font-bold uppercase tracking-wider">The Sustainable Stamina Pillars:</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#dedad2]">
            <div className="p-2.5 rounded bg-[#181a28] border border-white/5 text-center">Consistent Sleep</div>
            <div className="p-2.5 rounded bg-[#181a28] border border-white/5 text-center">Stress Management</div>
            <div className="p-2.5 rounded bg-[#181a28] border border-white/5 text-center">Cardio Fitness</div>
            <div className="p-2.5 rounded bg-[#181a28] border border-white/5 text-center">True Communication</div>
          </div>
        </div>

        <p>
          You may not be able to command your body to become ready again on demand. But you can create better conditions for healthy function.
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#dedad2]">
          <li>You can learn to stop panicking during recovery.</li>
          <li>You can stay connected with your partner instead of treating orgasm as the automatic end of intimacy.</li>
          <li>You can allow yourself to rest without seeing it as failure.</li>
          <li>And when your body naturally becomes ready again, you can approach the next experience with less pressure and greater awareness.</li>
        </ul>
        <p>
          That is a more sustainable definition of stamina. Not unlimited rounds. Not miracle supplements. Not impossible promises.
        </p>
        <p className="font-serif font-bold text-lg text-[#dfc58b]">
          Real stamina is understanding your body well enough to work with it instead of constantly fighting against it.
        </p>

        {/* READY TO BUILD STAMINA SYSTEM CTA BOX */}
        <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1b1e2c] via-[#12141f] to-[#1a1c2b] border-2 border-[#c5a059] shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#dfc58b] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Comprehensive Educational Curriculum</span>
          </div>
          <h3 className="font-serif font-bold text-2xl text-[#fbf9f4]">
            Ready to Build a More Complete Stamina System?
          </h3>
          <p className="text-sm text-[#cbc7be] leading-relaxed">
            The refractory period is just one part of the bigger picture. Building better sexual confidence involves understanding arousal, managing performance anxiety, improving lifestyle habits, developing body awareness, and learning how your own sexual response works.
          </p>
          <p className="text-sm text-[#cbc7be] leading-relaxed">
            The complete <strong>Art of Stamina</strong> approach brings these areas together into one structured system designed to help men develop greater awareness, confidence, and control over time.
          </p>
          
          <div className="pt-2">
            <a
              href="javascript:void(0);"
              onClick={onLockerClick}
              className="inline-flex items-center gap-2.5 py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#dfc58b] via-[#c5a059] to-[#b38e47] text-[#0b0c10] font-black text-sm tracking-wider uppercase shadow-xl hover:brightness-110 active:scale-95 transition-all no-underline cursor-pointer"
            >
              <span>👉 Explore the full Stamina Mastery eBook (PDF)</span>
            </a>
          </div>
        </div>

        {/* MEDICAL DISCLAIMER */}
        <div className="p-4 rounded-xl bg-[#0f1118] border border-white/5 text-xs text-[#71737e] italic leading-relaxed">
          *This article is for educational purposes only and is not a substitute for professional medical advice. If you experience persistent changes in erections, ejaculation, sexual desire, pain, or other sexual health concerns, consult a qualified healthcare professional.*
        </div>
      </section>

    </div>
  );
}
