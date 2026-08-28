# Bedroom IQ — "The Art of Stamina" Landing Page

A sleek, premium, conversion-focused landing page for men's sexual wellness brand **Bedroom IQ**, promoting the free digital guide ***The Art of Stamina: Natural Techniques for Better Sexual Confidence, Control & Endurance***.

Built with **React**, **JavaScript**, **Vite**, and **Tailwind CSS**. Designed for high conversion from mobile traffic (YouTube Shorts, TikTok, Instagram) and full-screen desktop browsers.

---

## ⚡ Quick Start

### 1. Installation
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the Vite dev URL) to view the site.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 🚀 How to Deploy to Netlify

This project includes a pre-configured `netlify.toml` file ready for one-click deployment.

### Option A: Via GitHub (Recommended)
1. Push this codebase to your GitHub repository.
2. Log in to [Netlify](https://app.netlify.com).
3. Click **"Add new site"** → **"Import an existing project"** → Choose **GitHub**.
4. Select your repository. Netlify will auto-detect the configuration:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. *(Optional)* Add your environment variable `VITE_GUIDE_URL` in **Site Configuration → Environment Variables**.
6. Click **Deploy Site**.

### Option B: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

---

## 🎯 How to Change the Guide URL (`GUIDE_URL`)

All "GET THE FREE GUIDE" buttons throughout the landing page connect to a single centralized configuration.

### In Production / Netlify:
Add an environment variable named `VITE_GUIDE_URL`:
- `VITE_GUIDE_URL=https://your-custom-content-locker.com`
- or `VITE_GUIDE_URL=https://your-download-link.com/the-art-of-stamina.pdf`

### In Local Development (`.env`):
Create or edit a `.env` file at the project root:
```env
VITE_GUIDE_URL="https://your-custom-content-locker.com"
```

*Note: If `VITE_GUIDE_URL` is empty or `#`, clicking any CTA button automatically opens an interactive modal with instant digital guide access.*

---

## ✏️ How to Edit Copy & Content

All textual content, titles, curriculum topics, FAQs, and pillars are centralized in `src/config.js`:

```javascript
// src/config.js

export const BRAND = {
  name: "Bedroom IQ",
  tagline: "Better Knowledge. Better Intimacy.",
  bookTitle: "The Art of Stamina",
  bookSubtitle: "Natural Techniques for Better Sexual Confidence, Control & Endurance",
  guideBadge: "FREE DIGITAL GUIDE",
  pagesCount: "68 Pages",
  readTime: "45 Min Read",
};
```

- **Book Title & Subtitle:** Edit `BRAND.bookTitle` and `BRAND.bookSubtitle` in `src/config.js`.
- **Pain Points:** Edit `PAIN_POINTS` array in `src/config.js`.
- **6-Chapter Grid:** Edit `CHAPTERS` array in `src/config.js`.
- **FAQs:** Edit `FAQS` array in `src/config.js`.
- **Sample Page Excerpts:** Edit `SAMPLE_PAGES` array in `src/config.js`.

---

## 🎨 Design System & Palette

- **Background:** Deep Charcoal & Near-Black (`#0b0c10`, `#121319`, `#171821`)
- **Typography:** Warm Ivory & Champagne (`#eae8e3`, `#fbf9f4`)
- **Accents:** Subtle Brushed Gold / Bronze (`#c5a059`, `#dfc58b`, `#b38e47`)
- **Typography Pairing:** *Cinzel* (Display Headings), *Plus Jakarta Sans* (Clean Body), *Cormorant Garamond* (Editorial Flourish)

---

## 📄 License & Disclaimer
This content is for educational and informational purposes only and does not constitute medical advice.
&copy; Bedroom IQ. All rights reserved.
