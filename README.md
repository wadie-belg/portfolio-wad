# Portfolio — Wadie Belgacem

> **Sports Scientist & Professional Coach** — Gafsa, Tunisia

A premium, fully responsive portfolio website with **bilingual support (AR/EN)**, **dark/light mode**, **3D animations**, and **offline capability** — all in a static site with no server required.

---

## 🚀 Quick Start

| Action | Command / Step |
|--------|---------------|
| **Run locally** | Open `index.html` in any modern browser |
| **Deploy to GitHub Pages** | Push to a repo → Settings → Pages → Source: main branch |
| **Deploy to Netlify** | Drag & drop the project folder to [app.netlify.com/drop](https://app.netlify.com/drop) |
| **Deploy to Vercel** | `npx vercel` or import the repo at vercel.com |

> **No build tools. No frameworks. No server.** Just open `index.html`.

---

## 📁 Project Structure

```
portfolio_wad_cv/
├── index.html              # Main page (semantic HTML5, ~226 lines)
├── style.css               # Design system & animations (~2,017 lines)
├── script.js               # Core logic, rendering, language switching (~564 lines)
├── three-init.js           # Three.js 3D background scene (~555 lines)
├── sw.js                   # Service Worker — offline support
├── favicon.svg             # Favicon (WB monogram in accent colors)
├── debug.html              # Debug/testing page
├── decision-log.md         # Architecture decision records
├── todo.md                 # Prioritized task list (22 tasks, 4 phases)
├── PROJECT_DESCRIPTION.md  # Detailed technical breakdown
├── PROJECT_STATE.md        # Session state & current roadmap
├── assets/                 # Static assets (images, fonts, CV PDF)
├── data/
│   └── lang/
│       ├── ar.json         # Arabic UI translations (21 keys)
│       └── en.json         # English UI translations (21 keys)
├── .github/
│   └── copilot-instructions.md  # SigMap code signatures
├── .gitignore
└── .git/
```

**Total lines of code:** ~4,030 lines

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **🌐 Bilingual** | Full Arabic/English support with instant language switching (no reload) |
| **📐 RTL Layout** | Automatic layout direction change when switching to Arabic |
| **🌙 Dark/Light Mode** | Toggle with localStorage persistence + system preference detection |
| **🎬 3D Background** | Three.js geometric scene with mouse + scroll parallax |
| **✨ Particles** | Interactive particle system (Particles.js) |
| **📜 Scroll Animations** | GSAP ScrollTrigger for cinematic section reveals |
| **📊 Animated Counters** | Stats with animated number counting |
| **📅 Timeline View** | Elegant vertical timeline for experience & education |
| **📈 Skill Bars** | Categorized proficiency bars with fill animation |
| **📝 Contact Form** | Validation + mailto: submission + i18n + RTL |
| **🔍 SEO** | Meta tags, Open Graph, Twitter Cards, JSON-LD structured data |
| **♿ Accessibility** | ARIA labels, skip-to-content, role attributes, focus-visible |
| **📴 Offline Support** | Service Worker with cache-first strategy |
| **🖨️ Print Styles** | Clean print layout (animations hidden) |
| **📱 Responsive** | Mobile-first design with breakpoints at 768px and 1024px |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **HTML** | HTML5 (semantic structure) |
| **CSS** | CSS3 (custom properties, grid, flexbox, keyframe animations) |
| **JS** | Vanilla ES6+ (no frameworks) |
| **3D** | Three.js (CDN) |
| **Particles** | Particles.js (CDN) |
| **Animations** | GSAP + ScrollTrigger (CDN) |
| **Fonts** | Google Fonts (Arabic + Latin compatible) |
| **Data** | JSON (embedded in script.js as PORTFOLIO_DATA object) |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| **Background** | Deep navy/black (`#0a0e27`, `#0d1117`) |
| **Cyan Accent** | `#06b6d4` |
| **Purple Accent** | `#a78bfa` |
| **Emerald Accent** | `#34d399` |
| **Amber Accent** | `#fbbf24` |
| **Glass Effect** | `backdrop-filter: blur(10-20px)` + transparency |
| **Typography** | Google Fonts (Cairo for Arabic, Inter/Space Grotesk for Latin) |

---

## 📝 How to Customize

### Changing Personal Information

Edit `PORTFOLIO_DATA` object in `script.js` — this is the **single source of truth** for all portfolio content:

```js
const PORTFOLIO_DATA = {
    content: {
        personal: { ... },
        about: { ... },
        experience: [ ... ],
        education: [ ... ],
        achievements: [ ... ],
        skills: { ... }
    }
};
```

### Updating Translations

Edit `data/lang/ar.json` and `data/lang/en.json`:

```json
{
  "nav_home": "الرئيسية",
  "nav_about": "عني",
  "nav_experience": "الخبرة",
  // ... 21 keys total
}
```

### Adding a New Section

1. Add HTML structure to `index.html` (follow existing section pattern)
2. Add CSS styles to `style.css` (follow existing section pattern)
3. Add render function to `script.js` (follow existing rendering pattern)
4. Add data to `PORTFOLIO_DATA.content` in `script.js`

### Changing Colors

Edit CSS custom properties in `style.css` (top of file):

```css
:root {
  --color-cyan: #06b6d4;
  --color-purple: #a78bfa;
  --color-emerald: #34d399;
  --color-amber: #fbbf24;
  /* ... */
}
```

---

## 🚢 Deployment

### GitHub Pages

```bash
# 1. Create a new repo on GitHub
# 2. Push the project
git remote add origin https://github.com/USERNAME/repo.git
git branch -M main
git push -u origin main

# 3. Enable Pages
# Settings → Pages → Source: main branch → / (root)
# Your site will be live at: https://USERNAME.github.io/repo
```

### Netlify (Drag & Drop)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `portfolio_wad_cv/` folder
3. Done — site is live instantly

### Netlify (CLI)

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

### Vercel

```bash
npx vercel        # Deploy
vercel --prod     # Production deploy
```

---

## 📊 Performance

| Metric | Target |
|--------|--------|
| Total page size | < 500KB |
| Three.js objects | 25-35 max |
| Animations | GPU-friendly (translate, scale, opacity) |
| Load strategy | CDN-loaded libraries |
| Build tools | None |

---

## 📋 Task Tracking

| Phase | Priority | Tasks | Status |
|-------|----------|-------|--------|
| Phase 1 | 🔴 Critical | T01-T03 | ✅ Complete |
| Phase 2 | 🟠 High | T04-T09 | ✅ Complete |
| Phase 3 | 🟡 Medium | T10-T15 | ✅ Complete |
| Phase 4 | 🟢 Low | T16-T22 | ✅ Complete |

See [`todo.md`](todo.md) for the full task list.

---

## 📄 License

This project is a personal portfolio. All rights reserved.

---

## 👤 Author

**Wadie Belgacem** — Sports Scientist & Professional Coach  
📍 Gafsa, Tunisia  
📧 [Contact via portfolio](https://wadie-belgacem.github.io)

---

*Built with ❤️ using vanilla HTML, CSS, and JavaScript.*
