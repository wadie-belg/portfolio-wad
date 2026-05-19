# PROJECT_STATE.md

> ملف حالة المشروع — يُقرأ أولاً في كل جلسة.

---

## PROJECT OVERVIEW

This is a **static portfolio website** for **Wadie Belgacem** — Sports Scientist & Professional Coach based in Gafsa, Tunisia.

The project is a **pure static site** (HTML + CSS + JS) with **embedded bilingual data** — no server required. Opening `index.html` in a browser is enough to run the full site.

### Goals:
- Showcase a sports professional's career, achievements, education, and publications
- Premium dark-mode design with glassmorphism
- Smooth cinematic animations (Three.js + GSAP + Particles.js)
- Full Arabic/English bilingual support with RTL layout
- Fast loading, clean architecture, maintainable code
- AI-agent friendly project structure

### Design Identity:
- **Theme:** Dark premium (deep navy/black backgrounds)
- **Accent colors:** Cyan `#06b6d4`, Purple `#a78bfa`, Emerald `#34d399`, Amber `#fbbf24`
- **Style:** Glassmorphism (blur + transparency), gradient text, animated borders, hover glow effects
- **Typography:** Google Fonts (Arabic + Latin compatible)
- **Vibe:** Modern sports branding, clean, professional, cinematic

---

## MAIN OBJECTIVES

1. Deliver a polished, production-ready portfolio website
2. Maintain clean separation: data (JSON) ↔ presentation (CSS) ↔ logic (JS)
3. Keep animations performant and GPU-friendly
4. Support seamless language switching (AR ↔ EN) without page reload
5. Ensure full responsiveness across mobile, tablet, and desktop
6. Keep the project lightweight (no build tools, no frameworks)
7. Make the project AI-agent friendly with structured documentation

---

## TECH STACK

**Static Frontend:**
- HTML5 (semantic structure)
- CSS3 (custom properties, grid, flexbox, animations, keyframes)
- Vanilla JavaScript (ES6+)

**External Libraries (CDN):**
- **Three.js** — 3D background scene
- **Particles.js** — Interactive particle system
- **GSAP + ScrollTrigger** — Scroll-driven cinematic animations

**Data Layer:**
- `script.js` `PORTFOLIO_DATA` object — All portfolio content embedded (~635 lines for data, ~449 lines for functions)
- `data/lang/ar.json` / `data/lang/en.json` — UI translations (21 keys each)

**Tooling:**
- **SigMap** — Code signatures & context generation (`.github/copilot-instructions.md`)
- Git version control
- No build tools, no frameworks, no bundlers

---

## PROJECT STRUCTURE

```
portfolio_wad_cv/
├── index.html              ← HTML5 structure (359 lines)
├── style.css               ← Design system & animations (3,117 lines)
├── script.js               ← Logic, rendering, animations (1,084 lines)
├── three-init.js           ← Three.js 3D scene initialization (555 lines)
├── sw.js                   ← Service Worker (offline support) — NEW
├── debug.html              ← Debug/testing page
├── todo.md                 ← Prioritized task list (22 tasks, 4 phases)
├── decision-log.md         ← Decision records
├── PROJECT_DESCRIPTION.md  ← Detailed technical breakdown (300 lines)
├── PROJECT_STATE.md        ← This file (session state)
├── data/
│   └── lang/
│       ├── ar.json         ← Arabic UI translations
│       └── en.json         ← English UI translations
├── assets/                 ← Static assets (images, fonts, etc.)
├── backup_v1_20260512_145604/  ← Snapshot backup
├── .github/
│   └── copilot-instructions.md  ← SigMap code signatures
├── .gitignore
└── .git/
```

**Total lines of code:** ~5,115 lines

---

## IMPORTANT COMPONENTS

### `index.html` — Page Structure
- `<nav>` — Fixed glassmorphism navigation bar (7 links + language toggle)
- `#home` — Hero section (Three.js canvas + particles + gradient text)
- `.info-bar` — Bento grid personal info cards (6 cards)
- `.stats-section` — Animated counters (4 stats)
- `#achievements` — Achievement cards grid (6 cards)
- `#about` — Personal bio section
- `#experience` — Professional experience (3 categories)
- `#education` — Academic degrees (6 entries)
- `#conferences` — Conference participation (10+ items with colored badges)
- `#skills` — Interactive skill tags (languages + technical skills)
- `#extra` — Dual panel: publications + hobbies
- `#contact` — Contact card with email/phone/address
- `<footer>` — Footer with credits
- `.scroll-top-btn` — Floating scroll-to-top button

### `script.js` — Core Logic
- `PORTFOLIO_DATA` — Embedded JSON data object
- `getProp(obj, path, lang)` — Nested data accessor with language support
- `getI18nText(trans, key, lang)` — Translation lookup
- `setupLanguage()` — Language initialization
- `updateLanguageUI(lang)` — Full UI language switch (no reload)
- `renderAll(lang)` — Dynamic content rendering from JSON
- `initParticles()` — Particles.js configuration
- `initAnimations()` — GSAP + ScrollTrigger setup
- `initScrollTop()` — Scroll-to-top button logic
- `initStatsCounter()` — Animated number counters
- Critical fallback: forces opacity on critical selectors after 1.5s

### `style.css` — Design System
- **CSS Variables:** 30+ custom properties for colors, spacing, glass effects
- **Glassmorphism:** `backdrop-filter: blur(10-20px)` on 10+ elements
- **Animations:** 15+ keyframes (gridMove, pulse, borderGlow, heroTextGlow, etc.)
- **Responsive:** Breakpoints at 1024px and 768px
- **RTL Support:** 12+ RTL-specific CSS rules
- **Print Styles:** Hides animations for print
- **Accessibility:** `:focus-visible` outlines, semantic HTML5

### `three-init.js` — 3D Background
- Three.js scene initialization
- Geometric shapes as background elements
- Mouse + scroll parallax effects
- Wireframe overlays for depth
- Limited to 25-35 objects for performance

### `sw.js` — Service Worker (NEW)
- Cache-first strategy for offline support
- Caches all static assets (HTML, CSS, JS, JSON, SVG, PDF)
- Automatic cache cleanup on activation
- SW registration with update detection

---

## AI AGENT RULES

The AI agent must:

1. **Read PROJECT_STATE.md first** in every new session
2. Read `todo.md` and `decision-log.md` if they exist
3. **Never read the entire codebase** unless explicitly requested or absolutely necessary
4. Use `search_files` or targeted `read_file` with offset/limit
5. Focus only on files relevant to the current task
6. Keep responses concise — no full file dumps in replies
7. Preserve architecture consistency (no framework migration without approval)
8. Avoid unnecessary rewrites of existing working code
9. Reuse existing patterns, CSS variables, and JS functions
10. Avoid duplicate components or functions
11. Never break responsive behavior or RTL support
12. Update this file after every major change

---

## CONTEXT MANAGEMENT RULES

To reduce token usage:

- Never load the whole codebase in one read
- Retrieve only related files for the current task
- Summarize before large refactors
- Use architecture-aware reasoning (data ↔ CSS ↔ JS separation)
- Keep task scope limited and focused
- Update this file after major changes
- Log decisions in `decision-log.md` when warranted

---

## CURRENT ARCHITECTURE SUMMARY

**Architecture Pattern:** Static site with embedded data (no server)
- Data flows: `PORTFOLIO_DATA` (embedded in `script.js`) → DOM rendering
- Styling: CSS custom properties + utility-first approach
- Animation: GSAP ScrollTrigger + Three.js + Particles.js (independent systems)
- Language: Client-side switching via `updateLanguageUI()` — no page reload
- Responsive: Mobile-first with 768px and 1024px breakpoints
- **Offline Support:** Service Worker with cache-first strategy (T16)

**State Management:** None needed — pure static rendering from JSON data

**Performance:**
- Three.js limited to 25-35 objects
- Animations use GPU-friendly transforms (translate, scale, opacity)
- No heavy client-side bundles
- CDN-loaded libraries (no local copies)

---

## CURRENT TASKS

- [ ] See `todo.md` — 22 prioritized tasks across 4 phases
- [x] Phase 1 (Critical): T01-T03 ✅ مكتملة
- [x] Phase 2 (High): T04-T09 ✅ مكتملة
- [x] Phase 3 (Medium): T10-T15 ✅ مكتملة بالكامل
|- [ ] Phase 4 (Low): T16-T22 🔧 جارية — T16, T17, T18, T19, T20, T21 مكتمل

---

## COMPLETED TASKS

- ✅ Initial project scaffolding (HTML + CSS + JS structure)
- ✅ Three.js 3D background scene implemented
- ✅ Particles.js interactive particle system
- ✅ GSAP + ScrollTrigger scroll animations
- ✅ Full bilingual support (AR/EN) with RTL layout
- ✅ Backup system created (`backup_v1_20260512_145604/`)
- ✅ Git version control with 3 commits
- ✅ SigMap code signatures generated
- ✅ Animated stats counters
- ✅ Scroll-to-top button
- ✅ Critical opacity fallback system
- ✅ Print styles added
- ✅ Accessibility improvements (`:focus-visible`)
- ✅ Task tracking system: `todo.md` (22 tasks, 4 phases)
- ✅ Decision log: `decision-log.md`
- ✅ PROJECT_STATE.md updated with current roadmap
- ✅ T05 — Active Nav Link Highlighting (IntersectionObserver)
- ✅ T06 — SEO Meta Tags (description, keywords, OG, Twitter Cards, canonical)
- ✅ T07 — Structured Data (JSON-LD Person Schema)
- ✅ T08 — Download CV Button (Hero CTA + PDF placeholder + i18n keys)
- ✅ T09 — Social Media Links (LinkedIn, X/Twitter, ResearchGate + SVG icons + JSON-LD sameAs + AR/EN i18n)
- ✅ T10 — Loading Screen / Skeleton (overlay + spinner + skeleton cards + glassmorphism + i18n)
- ✅ T11 — Scroll Progress Indicator (fixed gradient bar with glow + rAF scroll listener)
- ✅ T12 — Timeline View (Experience & Education — vertical timeline with alternating cards, dots, year badges, RTL support)
- ✅ T13 — Skill Proficiency Bars (categorized progress bars with animation + RTL support + level percentages)
- ✅ T14 — Smooth Scroll for Nav Links (intercept clicks, scrollTo with nav offset + mobile menu close + history.pushState)
- ✅ T15 — Contact Form (validation + mailto: submit + error handling + success feedback + i18n + RTL)
- ✅ T16 — Service Worker (Offline Support — cache-first strategy + SW registration + assets caching)
|- ✅ T17 — Dark/Light Mode Toggle (theme switching + localStorage + prefers-color-scheme + RTL support)
||- ✅ T20 — README.md (project documentation: description, setup, structure, customization, deployment)
||- ✅ T21 — Data Validation (validateContent() — 11 checks: sections, personal, about, experience, education, conferences, skills levels, achievements, social URLs, translations, extra)
|- ✅ IMP-03 — Experience Section Visuals (gradient panels + SVG icons + flex layout + RTL support + responsive)
|- ✅ IMP-05 — AI & Sports Technology Section (full section with skills grid, tools grid, project cards + descriptions + tech tags + CSS styling + responsive + RTL + i18n)

---

## IMPORTANT FILES

| File | Purpose |
|------|---------|
| `index.html` | Page structure / DOM skeleton |
| `style.css` | Design system, animations, responsive |
| `script.js` | Logic, rendering, language switching, animations |
| `three-init.js` | Three.js 3D scene setup |
| `sw.js` | Service Worker — offline support (NEW) |
| `data/lang/ar.json` | Arabic UI translations |
| `data/lang/en.json` | English UI translations |
| `todo.md` | Prioritized task list (22 tasks, 4 phases) |
| `decision-log.md` | Decision records |
| `PROJECT_DESCRIPTION.md` | Detailed technical breakdown |
| `.github/copilot-instructions.md` | SigMap code signatures |

---

## KNOWN ISSUES

- `initAnimations()` relies on `initParticles()` completing first — timing dependency
- Critical opacity fallback (`setTimeout 1500ms`) is a workaround for Three.js/Particles race condition
- Language toggle label has a typo in `content.json`: `"برint_email"` instead of `"البريد الإلكتروني"`
- Particles.js interactivity mode names use deprecated syntax (`"grab"`, `"push"` instead of `"grab"`, `"push"`)
- No formal test suite — relies on browser manual testing

---

## PERFORMANCE RULES

- Minimize DOM manipulations — batch updates
- Use `requestAnimationFrame` for custom animations
- Keep Three.js object count under 35
- Prefer CSS transforms over layout-triggering properties
- Lazy-load non-critical sections if needed
- Keep total page size under 500KB
- Avoid synchronous network requests

---

## CODING STYLE

- **HTML:** Semantic tags (`nav`, `section`, `footer`), clean indentation
- **CSS:** Custom properties for all colors/values, BEM-like naming, grouped by section
- **JS:** Vanilla ES6+, modular functions, no classes needed, JSDoc comments for complex logic
- **Data:** JSON with consistent structure, bilingual keys where applicable
- **Naming:** English variable/function names, Arabic content in data files
- **Comments:** Only when necessary for complex logic or architecture decisions

---

## RESPONSE STYLE FOR AI AGENTS

When working on tasks:

1. Read PROJECT_STATE.md first to understand context
2. Analyze only the relevant files (use offset/limit)
3. Explain planned modifications briefly
4. Apply focused changes only
5. Avoid broad rewrites
6. Summarize completed work
7. Update PROJECT_STATE.md if architecture or scope changes
8. Log decisions in decision-log.md if needed

---

## SESSION CONTINUITY

At the beginning of every new session:

1. ✅ Read PROJECT_STATE.md first
2. ✅ Understand current architecture
3. ✅ Review current tasks and completed tasks
4. ✅ Continue from latest state
5. ✅ Avoid asking for already documented information
6. ✅ Use SigMap commands if working with code context

---

## DESIGN SYSTEM

The project follows a **warm editorial design system** documented in `DESIGN.md`:

- **Canvas:** Warm cream (#faf9f5) — never pure white
- **Primary accent:** Coral (#cc785c) — warm, muted, used sparingly
- **Display typography:** Serif (Copernicus / Cormorant Garamond fallback) at weight 400 with negative letter-spacing
- **Body typography:** Humanist sans (Inter) at weight 400–500
- **Dark surfaces:** Navy (#181715) for code/project showcases and footer
- **Elevation:** Color-block first, shadow rare
- **Section rhythm:** 96px between sections, 32px inside cards
- **Border radius:** 8px buttons, 12px cards, 16px hero containers, pill badges

See `DESIGN.md` for the complete design token reference (colors, typography, spacing, components, Do's/Don'ts).

---

## LAST UPDATED

**Date:** 2026-05-17

**Last completed task:** IMP-05 — إضافة قسم "الذكاء الاصطناعي وتكنولوجيا الرياضة" — إنشاء قسم كامل يعرض المهارات التقنية، أدوات الذكاء الاصطناعي، وسرد المشاريع المميزة مع بطاقات تقنية ووسوم تقنية وتصميم متجاوب ودعم RTL وترجمة ثنائية.

**Current project status:** ✅ ALL TASKS COMPLETE — Portfolio is fully built with all 22 tasks done. Phase 2 improvements: IMP-01 ✅, IMP-02 ✅, IMP-03 ✅, IMP-05 ✅ completed.

**New:** `DESIGN.md` created — comprehensive design system reference for AI agents (colors, typography, spacing, components, responsive behavior, Do's/Don'ts).

**New:** `to_improve.md` created — Phase 2 improvement tasks (IMP-01 through IMP-05). IMP-01 ✅, IMP-02 ✅, IMP-03 ✅ completed.
