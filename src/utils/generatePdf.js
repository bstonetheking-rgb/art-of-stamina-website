import { jsPDF } from 'jspdf';
import { BRAND, CHAPTERS } from '../config';

const FULL_CHAPTER_CONTENT = [
  {
    num: "01",
    title: "Understanding Sexual Stamina",
    subtitle: "The Physiology of Arousal & Timing",
    content: [
      "1. The Autonomic Nervous System",
      "Sexual stamina is fundamentally a neurological and autonomic process, not a mechanical endurance contest.",
      "The human nervous system operates in two key modes during intimacy:",
      "• The Sympathetic Branch: The 'fight, flight, or high-arousal' system. When excitement surges, adrenaline rises, breathing becomes shallow, and heart rate accelerates. In this state, the body accelerates toward climax as an involuntary reflex.",
      "• The Parasympathetic Branch: The 'rest, digest, and connected' state. This branch maintains steady blood flow, physical calm, and neurological composure.",
      "",
      "2. The 1-to-10 Arousal Scale",
      "To control timing, you must build awareness of your arousal thresholds:",
      "• Level 1–4: Baseline attraction and gentle sensory arousal.",
      "• Level 5–6: Engaged, rhythmic pleasure. Full physical responsiveness.",
      "• Level 7: The Golden Zone. Maximum sustained intimacy where pacing can be maintained indefinitely.",
      "• Level 8.5: The Involuntary Plateau. If arousal crosses this point, the ejaculatory reflex activates automatically.",
      "",
      "Core Practice: Train yourself to notice when you enter Level 7. When you reach 7, down-shift your breathing and muscle tension before crossing Level 8."
    ],
    keyTakeaways: [
      "Climax is an autonomic reflex governed by sympathetic nervous spikes.",
      "Calmness and relaxation physically prolong stamina; tension shortens it.",
      "Stay in the 6–7 arousal zone by modulating breath and pacing."
    ]
  },
  {
    num: "02",
    title: "Breathing & Relaxation",
    subtitle: "The Diaphragmatic Breath Anchor",
    content: [
      "1. Why Breath Dictates Timing",
      "When men feel high arousal or anxiety, they instinctively hold their breath or breathe shallowly from the upper chest. This starves the body of oxygen and sends an emergency signal to the sympathetic nervous system, triggering an immediate climax surge.",
      "",
      "2. The 4-4 Diaphragmatic Anchor",
      "Practice this rhythmic breathing cycle:",
      "1. Inhale (4 Seconds): Breathe deeply down into your lower abdomen. Allow your belly and pelvic floor to expand softly without forcing.",
      "2. Exhale (4–6 Seconds): Release the breath slowly through relaxed lips. Feel the tension draining from your shoulders and pelvic floor.",
      "",
      "3. Application During Intimacy",
      "When sensations intensify, do not freeze or hold your breath. Instead, deepen your exhalations. A slow, continuous breath pattern immediately signals your heart rate and nervous system to stay steady."
    ],
    keyTakeaways: [
      "Never hold your breath during heightened pleasure.",
      "Deep diaphragmatic breathing lowers heart rate within 3 breath cycles.",
      "Exhale tension downward to keep the pelvic area relaxed."
    ]
  },
  {
    num: "03",
    title: "Body Awareness & Control",
    subtitle: "Pelvic Floor Tension vs. Freedom",
    content: [
      "1. The Subconscious Clenching Reflex",
      "Most men unknowingly clench their pelvic floor (the PC / pubococcygeus muscle) when pleasure rises. While many are taught to do 'Kegels' (clenching), excessive tension actually triggers premature climax.",
      "",
      "2. The Reverse Kegel (Pelvic Relaxation)",
      "To sustain control, you must learn to relax the pelvic floor:",
      "• Imagine the sensation of releasing a gentle sigh through your lower pelvis.",
      "• When breathing into the lower belly, feel the perineum (the space between scrotum and anus) drop and widen slightly.",
      "• This creates space for blood flow without creating the muscular spasm that leads to involuntary release.",
      "",
      "3. The 30-Second Body Scan",
      "Periodically scan these three tension zones: Jaw & Neck (soften mouth), Shoulders (drop away from ears), and Pelvic Floor (release clenching)."
    ],
    keyTakeaways: [
      "Involuntary clenching accelerates climax; pelvic relaxation extends duration.",
      "Master the Reverse Kegel: gently dropping and expanding the pelvic floor.",
      "Relax your jaw and neck—tension in the upper body directly mirrors the pelvis."
    ]
  },
  {
    num: "04",
    title: "Building Sexual Confidence",
    subtitle: "Eliminating Performance Anxiety",
    content: [
      "1. Decoupling Worth from Clocks",
      "Performance anxiety is the single greatest cause of bedroom stress. Worrying about 'how long I will last' puts the mind into spectator mode, increasing adrenaline and triggering the very outcome you fear.",
      "",
      "2. Shifting to Sensory Presence",
      "Intimacy is an experiential art, not a test with a score. Shift your focus:",
      "• From 'How am I performing?' to 'What does this skin feel like?'",
      "• From 'Will I last?' to 'How connected are we right now?'",
      "When your attention is on the richness of touch, warmth, and mutual pleasure, fear disappears, and the nervous system remains in a relaxed, high-stamina parasympathetic state."
    ],
    keyTakeaways: [
      "Anxiety creates adrenaline; adrenaline triggers early climax.",
      "Stop evaluating yourself in real time. Focus 100% on touch and connection.",
      "Confidence comes from understanding your body, not from tension."
    ]
  },
  {
    num: "05",
    title: "Better Communication & Intimacy",
    subtitle: "Synchronizing With Your Partner",
    content: [
      "1. Pacing as Foreplay",
      "You do not need to hide rhythm changes or pauses. Changing pace, shifting positions, or focusing on kissing and partner touch are not interruptions—they enhance pleasure for both partners.",
      "",
      "2. Smooth Transitions",
      "Instead of abruptly stopping, slow your movement into gentle, subtle circles and transition attention to kissing or neck caresses while taking slow, synchronized breaths together.",
      "",
      "3. Honest, Confident Expression",
      "A relaxed partner is magnetic. Communicating 'I want to slow down and enjoy this with you' communicates high confidence, deep care, and mastery."
    ],
    keyTakeaways: [
      "Pauses and pace changes enhance romantic tension and partner pleasure.",
      "Use kissing and full-body touch during pacing adjustments.",
      "Calm communication reflects confidence, not hesitation."
    ]
  },
  {
    num: "06",
    title: "Natural Wellness Habits",
    subtitle: "Daily Lifestyle, Nutrition & Movement",
    content: [
      "1. Circulation & Cardiovascular Health",
      "Natural stamina is backed by healthy blood flow and nitric oxide production. Stay hydrated with clean water and prioritize nitrate-rich whole foods like leafy greens (arugula, spinach), beets, and citrus.",
      "",
      "2. Sleep & Restorative Recovery",
      "Chronic sleep deprivation elevates baseline cortisol (stress hormone), making your nervous system hyper-reactive. Aim for 7–8 hours of quality rest.",
      "",
      "3. Daily Pelvic & Hip Mobility",
      "Spend 5 minutes daily doing deep bodyweight squats, butterfly stretches, and child's pose to release hip tightness and promote healthy pelvic circulation."
    ],
    keyTakeaways: [
      "Circulation, hydration, and sleep build the physiological foundation of vitality.",
      "Daily hip and pelvic mobility releases chronic muscular tension.",
      "Consistency in natural lifestyle habits yields effortless long-term stamina."
    ]
  }
];

export function downloadBookPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;

  // --- COVER PAGE ---
  doc.setFillColor(11, 12, 16); // #0b0c10
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative Gold Border
  doc.setDrawColor(197, 160, 89); // Gold
  doc.setLineWidth(0.8);
  doc.rect(12, 12, pageWidth - 24, pageHeight - 24);
  doc.setLineWidth(0.3);
  doc.rect(14, 14, pageWidth - 28, pageHeight - 28);

  // Brand Name
  doc.setTextColor(223, 197, 139); // #dfc58b
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text(BRAND.name.toUpperCase(), pageWidth / 2, 45, { align: 'center' });

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(160, 163, 175);
  doc.text("MASCULINE WELLNESS & INTIMACY", pageWidth / 2, 52, { align: 'center' });

  // Title
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(251, 249, 244);
  doc.text("THE ART OF STAMINA", pageWidth / 2, 110, { align: 'center' });

  // Subtitle
  doc.setFontSize(12);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(197, 160, 89);
  const subtitleLines = doc.splitTextToSize("Natural Techniques for Better Sexual Confidence, Control & Endurance", contentWidth - 20);
  doc.text(subtitleLines, pageWidth / 2, 125, { align: 'center' });

  // Badge
  doc.setFillColor(23, 24, 33);
  doc.roundedRect(pageWidth / 2 - 35, 170, 70, 12, 3, 3, 'F');
  doc.setDrawColor(197, 160, 89);
  doc.roundedRect(pageWidth / 2 - 35, 170, 70, 12, 3, 3, 'S');

  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(223, 197, 139);
  doc.text("OFFICIAL DIGITAL EDITION", pageWidth / 2, 177.5, { align: 'center' });

  // Footer
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(140, 142, 150);
  doc.text("Free Comprehensive Guide • Art of Stamina", pageWidth / 2, 260, { align: 'center' });

  // --- CHAPTER PAGES ---
  FULL_CHAPTER_CONTENT.forEach((ch) => {
    doc.addPage();
    let y = margin + 5;

    // Header bar
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(197, 160, 89);
    doc.text(`ART OF STAMINA  |  THE ART OF STAMINA`, margin, y);
    doc.text(`CHAPTER ${ch.num}`, pageWidth - margin, y, { align: 'right' });

    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.3);
    doc.line(margin, y + 3, pageWidth - margin, y + 3);

    y += 15;

    // Chapter Title
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(20, 22, 30);
    doc.text(`Chapter ${ch.num}: ${ch.title}`, margin, y);

    y += 7;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(150, 120, 50);
    doc.text(ch.subtitle, margin, y);

    y += 10;

    // Content lines
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(50, 50, 50);

    ch.content.forEach((paragraph) => {
      if (paragraph === "") {
        y += 4;
        return;
      }

      if (paragraph.startsWith("1.") || paragraph.startsWith("2.") || paragraph.startsWith("3.") || paragraph.startsWith("Core Practice:")) {
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(30, 30, 30);
        y += 3;
      } else {
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(60, 60, 60);
      }

      const lines = doc.splitTextToSize(paragraph, contentWidth);
      if (y + (lines.length * 5) > pageHeight - 35) {
        doc.addPage();
        y = margin + 10;
      }
      doc.text(lines, margin, y);
      y += (lines.length * 5) + 2;
    });

    // Key Takeaways Box
    if (y > pageHeight - 55) {
      doc.addPage();
      y = margin + 10;
    } else {
      y += 6;
    }

    doc.setFillColor(248, 246, 240);
    doc.setDrawColor(197, 160, 89);
    doc.rect(margin, y, contentWidth, 26, 'FD');

    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(140, 100, 30);
    doc.text("KEY MASTERY PRINCIPLES:", margin + 5, y + 6);

    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    let takeawayY = y + 12;
    ch.keyTakeaways.forEach((t) => {
      doc.text(`• ${t}`, margin + 5, takeawayY);
      takeawayY += 4.5;
    });

    // Page footer
    doc.setFontSize(8);
    doc.setTextColor(160, 160, 160);
    doc.text(`Page ${doc.internal.getNumberOfPages()}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
  });

  // Save the PDF file directly to browser downloads
  doc.save('The-Art-of-Stamina-Guide.pdf');
}
