---
version: alpha
name: portfolio-wad-design-system
description: >
  A warm, modern CV portfolio design system for Wad's personal portfolio website.
  The system anchors on a warm cream canvas with elegant serif display headlines,
  coral accent CTAs, and dark navy product surfaces. Brand identity emphasizes
  readability, professionalism, and a warm editorial voice — distinct from the
  cold tech-blue portfolios common in the industry.
---

## Overview

This portfolio is a **personal CV/portfolio website** designed to showcase
Wad's professional identity, skills, experience, and projects in a clean,
modern, and memorable way. The design language follows a **warm editorial
aesthetic** — combining a tinted cream canvas, serif display typography,
and coral accent colors — creating a distinctive brand presence that feels
personal, human, and professional.

The system is built for **static deployment** (no server required) with
embedded data — all content lives in the HTML/CSS/JS files directly.

### Design Philosophy

- **Warmth over coldness:** The canvas is cream-tinted (#faf9f5), not pure
  white. This is the single most important brand decision — it differentiates
  from the sea of cold-gray tech portfolios.
- **Editorial over corporate:** Serif display headlines give a literary,
  considered voice. Body text uses a clean humanist sans-serif.
- **Sparse accent usage:** Coral (#cc785c) is used sparingly on CTAs and
  key moments — never as a background everywhere.
- **Cream ↔ Dark rhythm:** Pages alternate between cream sections and dark
  navy product surfaces for visual pacing.
- **Generous whitespace:** Internal card padding is 32px; section spacing
  is 96px. Content breathes.

### Key Characteristics

- Warm cream canvas (#faf9f5) with warm dark ink (#141413)
- Coral primary accent (#cc785c) — warm, muted, never cyan/blue
- Slab-serif display headlines (Copernicus / Tiempos Headline or Cormorant Garamond fallback)
- Humanist sans-serif body (StyreneB / Inter)
- Dark navy product surfaces (#181715) for code/project showcases and footer
- Hierarchical border radius: 8px buttons, 12px cards, 16px hero containers, pill badges
- Section rhythm at 96px; card internal padding at 32px
- Flat elevation — color-block depth, no shadows

## Colors

### Brand & Accent

| Token | Hex | Use |
|---|---|---|
| `primary` | `#cc785c` | Signature coral — primary CTAs, brand wordmark accent, active states |
| `primary-active` | `#a9583e` | Pressed/hover darker variant of coral |
| `primary-disabled` | `#e6dfd8` | Desaturated cream-tinted disabled state |
| `accent-teal` | `#5db8a6` | Secondary accent — status indicators, skill tags |
| `accent-amber` | `#e8a55a` | Companion warm tone — category badges, highlights |

### Surface

| Token | Hex | Use |
|---|---|---|
| `canvas` | `#faf9f5` | Default page floor — warm cream, never pure white |
| `surface-soft` | `#f5f0e8` | Section dividers, soft band backgrounds |
| `surface-card` | `#efe9de` | Feature card backgrounds — one step darker than canvas |
| `surface-cream-strong` | `#e8e0d2` | Emphasized section bands, category tabs |
| `surface-dark` | `#181715` | Code mockups, project showcases, footer |
| `surface-dark-elevated` | `#252320` | Elevated cards inside dark bands |
| `surface-dark-soft` | `#1f1e1b` | Code block backgrounds inside dark cards |
| `hairline` | `#e6dfd8` | 1px border tone on cream surfaces |
| `hairline-soft` | `#ebe6df` | Barely-visible dividers |

### Text

| Token | Hex | Use |
|---|---|---|
| `ink` | `#141413` | Primary headlines and body text — warm dark, slightly off-black |
| `body-strong` | `#252523` | Emphasized paragraphs, lead text |
| `body` | `#3d3d3a` | Default running text |
| `muted` | `#6c6a64` | Sub-headings, breadcrumbs, secondary text |
| `muted-soft` | `#8e8b82` | Captions, fine print, copyright |
| `on-primary` | `#ffffff` | Text on coral buttons |
| `on-dark` | `#faf9f5` | Cream-tinted white on dark surfaces |
| `on-dark-soft` | `#a09d96` | Footer body text, secondary labels in dark |

### Semantic

| Token | Hex | Use |
|---|---|---|
| `success` | `#5db872` | Green status indicators |
| `warning` | `#d4a017` | Warning callouts |
| `error` | `#c64545` | Validation errors |

## Typography

### Font Families

| Role | Primary | Fallback Stack |
|---|---|---|
| Display (h1–h3) | Copernicus / Tiempos Headline | Cormorant Garamond, EB Garamond, serif |
| Body / UI | StyreneB / Inter | Inter, -apple-system, BlinkMacSystemFont, sans-serif |
| Code | JetBrains Mono | ui-monospace, SF Mono, monospace |

### Typography Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `display-xl` | 64px | 400 | 1.05 | -1.5px | Hero h1 |
| `display-lg` | 48px | 400 | 1.1 | -1px | Section heads |
| `display-md` | 36px | 400 | 1.15 | -0.5px | Sub-section heads |
| `display-sm` | 28px | 400 | 1.2 | -0.3px | CTA headlines, tier names |
| `title-lg` | 22px | 500 | 1.3 | 0 | Plan labels, section subtitles |
| `title-md` | 18px | 500 | 1.4 | 0 | Card titles, feature headings |
| `title-sm` | 16px | 500 | 1.4 | 0 | List labels, connector titles |
| `body-md` | 16px | 400 | 1.55 | 0 | Default running text |
| `body-sm` | 14px | 400 | 1.55 | 0 | Footer text, fine print |
| `caption` | 13px | 500 | 1.4 | 0 | Badge labels, captions |
| `caption-uppercase` | 12px | 500 | 1.4 | 1.5px | Category tags, "NEW" badges |
| `code` | 14px | 400 | 1.6 | 0 | Code blocks |
| `button` | 14px | 500 | 1.0 | 0 | Button labels |
| `nav-link` | 14px | 500 | 1.4 | 0 | Navigation menu items |

### Typography Principles

- Display headlines use **weight 400 (regular)**, never bold. Negative
  letter-spacing (-0.3 to -1.5px) is essential.
- Body text stays at weight 400 for paragraphs, 500 for labels.
- The serif/sans split is unbreakable — serif for display, sans for body.
- Never use geometric sans (Helvetica, Arial) for display — it breaks the
  warm editorial voice.

## Layout

### Spacing System

| Token | Value | Use |
|---|---|---|
| `xxs` | 4px | Tiny gaps, badge padding |
| `xs` | 8px | Small spacing, button internal |
| `sm` | 12px | Badge padding, tight gaps |
| `md` | 16px | Standard gap |
| `lg` | 24px | Code card padding, connector tiles |
| `xl` | 32px | Feature card padding, content cards |
| `xxl` | 48px | Callout card internal padding |
| `section` | 96px | Major section spacing |

### Grid & Container

- **Max content width:** 1200px centered
- **Hero layout:** 6-6 split (content left, illustration/mockup right)
- **Feature/project grids:** 3-up desktop, 2-up tablet, 1-up mobile
- **Skills grid:** Flexible wrap, 2-4 columns depending on content
- **Footer:** 4-column link grid at desktop → 1-column mobile

### Whitespace Philosophy

The cream canvas + serif display + generous padding create an **editorial
pacing** — the portfolio reads like a well-designed magazine profile rather
than a corporate template. Section spacing is uniform at 96px; card padding
is generous at 32px.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, hero bands |
| Hairline | 1px `hairline` border | Inputs, category tabs |
| Cream card | `surface-card` background, no shadow | Feature cards, about cards |
| Dark surface card | `surface-dark` background, no shadow | Code mockups, project showcases |
| Subtle shadow | `0 1px 3px rgba(20,20,19,0.08)` | Hover-elevated states (rare) |

**Elevation philosophy: color-block first, shadow rare.** Most depth comes
from cream-vs-dark surface contrast. Shadows are minimal and used sparingly.

## Shapes & Border Radius

| Token | Value | Use |
|---|---|---|
| `xs` | 4px | Badge accents, tiny dropdowns |
| `sm` | 6px | Small inline buttons |
| `md` | 8px | Primary buttons, text inputs, category tabs |
| `lg` | 12px | Content cards, feature cards, project cards |
| `xl` | 16px | Hero illustration container, marquee components |
| `pill` | 9999px | Badge pills, tags |
| `full` | 50% | Avatar circles, icon buttons |

## Components

### Top Navigation

**`top-nav`** — Cream nav bar, 64px tall, `canvas` background.
- Left: Brand name / logo
- Center: Navigation links (About, Skills, Projects, Experience, Contact)
- Right: Primary CTA button (coral)
- Links use `nav-link` typography (14px / 500)
- Collapses to hamburger menu on mobile (< 768px)

### Hero Section

**`hero-band`** — Cream-canvas hero with 6-6 grid.
- Left: Display h1 headline, sub-headline paragraph, CTA button row
- Right: Hero illustration card or avatar mockup
- Vertical padding: `section` (96px)
- On mobile: stacks to single column, content first, illustration below

### Buttons

**`button-primary`**
- Background: `primary` (#cc785c)
- Text: `on-primary` (white)
- Typography: `button` (14px / 500)
- Padding: 12px × 20px, height: 40px
- Rounded: `md` (8px)
- Active: background shifts to `primary-active` (#a9583e)

**`button-secondary`**
- Background: `canvas` (cream)
- Text: `ink`
- Border: 1px hairline
- Same padding/height/radius as primary

**`button-text-link`**
- No background, inline text button
- Text color: `ink`

### Cards

**`feature-card`**
- Background: `surface-card` (#efe9de)
- Rounded: `lg` (12px)
- Padding: `xl` (32px)
- Contains: icon at top, title (`title-md`), description (`body-md`)
- Used in 3-up grids

**`project-card-dark`**
- Background: `surface-dark` (#181715)
- Text: `on-dark`
- Rounded: `lg` (12px)
- Padding: `xl` (32px)
- Contains: project title, tech stack badges, description, link
- Used for project showcases

**`code-window-card`**
- Background: `surface-dark`
- Text: `on-dark`
- Code font: `code` (JetBrains Mono, 14px)
- Rounded: `lg` (12px)
- Padding: `lg` (24px)
- Contains: syntax-highlighted code block, line numbers optional
- Horizontal scroll on mobile (no line wrapping)

**`timeline-card`**
- Background: `surface-card` or `canvas`
- Rounded: `lg` (12px)
- Padding: `xl` (32px)
- Contains: role title, company, date range, description
- Used for experience section

### Tags & Badges

**`badge-pill`**
- Background: `surface-card`
- Text: `ink`
- Typography: `caption` (13px / 500)
- Rounded: `pill` (9999px)
- Padding: 4px × 12px

**`badge-coral`**
- Background: `primary` (#cc785c)
- Text: `on-primary` (white)
- Typography: `caption-uppercase` (12px / 500 / 1.5px tracking)
- Rounded: `pill` (9999px)
- Padding: 4px × 12px
- Used for "NEW", "FEATURED", "HIRE_ME" labels

### Input & Forms

**`text-input`**
- Background: `canvas`
- Text: `ink`
- Typography: `body-md` (16px)
- Rounded: `md` (8px)
- Padding: 10px × 14px, height: 40px
- Border: 1px `hairline`

**`text-input-focused`**
- Border shifts to `primary` (coral)
- 3px coral-at-15%-alpha outer ring

### CTA Band

**`cta-band-coral`**
- Full-width coral fill
- Background: `primary` (#cc785c)
- Text: `on-primary` (white)
- Rounded: `lg` (12px)
- Padding: `xxl` (48px)
- Contains: display-sm headline, sub-line, cream-button CTA

**`cta-band-dark`**
- Alternative dark CTA band
- Background: `surface-dark`
- Text: `on-dark`
- Padding: 64px

### Footer

**`footer`**
- Background: `surface-dark` (#181715)
- Text: `on-dark-soft`
- 4-column link grid at desktop
- Vertical padding: 64px
- Brand mark + copyright at bottom

## Do's and Don'ts

### Do
- Anchor every page on the cream canvas (`canvas` — #faf9f5)
- Use serif display for every headline. Pair with sans body.
- Negative letter-spacing on display sizes is non-negotiable.
- Reserve `primary` (coral) for CTAs and full-bleed callout moments.
- Alternate cream sections with dark navy surfaces for pacing.
- Use generous padding (32px inside cards, 96px between sections).
- Keep display headlines at weight 400 — never bold.
- Use `surface-card` for content cards, `surface-dark` for product/code showcases.

### Don't
- Don't use pure white or cool grays for the canvas — cream is the brand.
- Don't bold serif display weight — weight 400 only.
- Don't use cool blue or saturated cyan as brand accent — coral is the accent.
- Don't spread coral everywhere — use it sparsely on buttons and key moments.
- Don't use sans-serif for display headlines — serif is the brand voice.
- Don't repeat the same surface mode in consecutive bands — alternate cream ↔ dark.
- Don't add hover effects beyond what's encoded — primary darkens on press only.
- Don't wrap code lines on mobile — use horizontal scroll instead.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 64→32px; grids 1-up; footer 1 col |
| Tablet | 768–1024px | Feature cards 2-up; connector tiles 3-up; pricing 2-up |
| Desktop | 1024–1440px | Full nav; 3-up feature cards; 4-up connector tiles; 3-up pricing |
| Wide | > 1440px | Same as desktop, more outer breathing room; max width 1200px |

### Touch Targets
- Primary buttons: minimum 40 × 40px
- Text inputs: height 40px
- Card areas: entire card is tappable (effective tap area >> 44px)

### Collapsing Strategy
- Top nav collapses to hamburger at < 768px
- Hero band stacks to single column on mobile
- Grids reduce columns rather than scaling cards down
- Code blocks allow horizontal scroll on mobile (no wrapping)

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key
   (`feature-card`, `project-card-dark`, `button-primary`).
2. Variants of an existing component (`-active`, `-disabled`, `-focused`)
   live as separate entries in the `components` section.
3. Use `{token.refs}` everywhere — never inline hex values in CSS/JS.
4. Never document hover states — only default and Active/Pressed.
5. Display headlines stay serif 400 with negative tracking. Body stays sans 400.
6. Cream + coral + dark navy is the trinity. Don't introduce a fourth
   surface tone (no purple cards, no green sections).
7. When in doubt about emphasis: bigger serif headline before bolder weight.

## Known Gaps

- Copernicus and StyreneB are licensed typefaces. Substitutes (Cormorant
  Garamond for serif, Inter for sans) are documented in the typography
  section and should be used in the actual implementation.
- Animation and transition timings are out of scope — focus on static
  layout and visual design first.
- The actual interactive behavior (form submission, mobile menu toggle,
  smooth scroll) is implementation detail, not design system.
- Dark mode / light mode toggle is not part of this design system — the
  cream canvas is the only theme.
