# MAITEA Website - Comprehensive Typography Audit Report

**Generated:** Full CSS & HTML audit across 28 CSS files and 5 HTML pages  
**Scope:** Every typography-related CSS rule in the entire project

---

## Table of Contents

1. [Font Families & Loading](#1-font-families--loading)
2. [Font-Size Inventory](#2-font-size-inventory)
3. [Font-Weight Values](#3-font-weight-values)
4. [Line-Height Values](#4-line-height-values)
5. [Letter-Spacing Values](#5-letter-spacing-values)
6. [Heading Hierarchy & HTML Structure](#6-heading-hierarchy--html-structure)
7. [Body & Paragraph Sizes](#7-body--paragraph-sizes)
8. [!important Override Audit](#8-important-override-audit)
9. [Modular Scale Analysis](#9-modular-scale-analysis)
10. [Conflicting / Overriding Values](#10-conflicting--overriding-values)
11. [CSS Load Order Per Page](#11-css-load-order-per-page)
12. [Summary of Critical Issues](#12-summary-of-critical-issues)

---

## 1. Font Families & Loading

### Google Fonts Load
```
Raleway: weights 200, 300, 400, 600
Manrope: weights 400, 500, 600
```

### Intended Usage
| Font | Role | Notes |
|------|------|-------|
| `'Raleway', sans-serif` | Display / Headings | Used for h1-h6, wordmark, step-number, page-title, concept-title, gallery-section-title |
| `'Manrope', sans-serif` | Body / UI | Used for body text, nav links, buttons, form inputs, descriptors |

### Font-Family Override Conflicts
| Selector | File | font-family | Issue |
|----------|------|-------------|-------|
| `.statement-title` | index-mobile-luxury.css (≤1023px) | `'Manrope' !important` | **Changes from Raleway to Manrope** on mobile only - converted to "pills" |
| `.step-number` | index-mobile-luxury.css (≤1023px) | `'Manrope' !important` | **Changes from Raleway to Manrope** on mobile |
| `.step-number` | process-editorial.css | `'Manrope'` | Changes to Manrope (no !important) |
| `.concept-title` | unified-premium-polish.css | `'Raleway', serif !important` | Overrides serif fallback - inconsistent: Raleway declared with `serif` fallback while elsewhere it's `sans-serif` |
| `.form-input, .form-textarea` | unified-premium-polish.css | `'Manrope', sans-serif !important` | Explicit override |
| `.nav-link` (mobile) | hero-mobile-premium.css | `'Raleway' !important` | Changes mobile nav from Manrope to Raleway |
| `.lang-btn` (mobile) | hero-mobile-premium.css | `'Raleway' !important` | Changes lang buttons from Manrope to Raleway |

---

## 2. Font-Size Inventory

### Design System Tokens (design-system.css)
```css
--text-xs:    0.6875rem   /* 11px */
--text-sm:    0.8125rem   /* 13px */
--text-base:  1rem        /* 16px */
--text-lg:    1.125rem    /* 18px */
--text-xl:    1.375rem    /* 22px */
--heading-sm: clamp(1.25rem, 3vw, 1.5rem)     /* 20-24px */
--heading-md: clamp(1.75rem, 4vw, 2.25rem)     /* 28-36px */
--heading-lg: clamp(2.25rem, 5vw, 3rem)        /* 36-48px */
--heading-xl: clamp(3rem, 8vw, 5rem)           /* 48-80px */
```

### HTML Root Font-Size
| Breakpoint | File | Value |
|------------|------|-------|
| Default (mobile) | style.css | `16px` |
| ≥768px | style.css | `17px` |
| ≥1024px | style.css | `18px` |

> **Impact:** ALL rem-based sizes scale up by 6.25% at 768px and 12.5% at 1024px. This compounds with clamp() values.

### Complete Font-Size Map by Element

#### `.hero-headline`
| File | Size | Breakpoint | !important |
|------|------|------------|------------|
| style.css (inline) | `clamp(2rem, 5vw, 3.5rem)` | base | no |
| style.css | `clamp(2.5rem, 10vw, 5rem)` (as h1) | base | no |
| narrative-structure.css | `clamp(2.25rem, 7vw, 5rem)` | base | no |
| homepage-polish.css | `clamp(2.25rem, 8vw, 4.5rem)` | base | no |
| homepage-polish.css | `5.5rem` | ≥1440px | no |
| hero-refinement.css | (inherits h1 clamp) | base | no |
| hero-mobile-premium.css | `2.75rem` | ≤768px | **YES** |
| hero-mobile-premium.css | `3rem` | 414-768px | **YES** |
| index-mobile-luxury.css | `clamp(2.25rem, 9.5vw, 3.25rem)` | ≤1023px | **YES** |

**Result:** 6+ competing definitions. Final winner depends on CSS load order + specificity + !important.

#### `.page-title`
| File | Size | Breakpoint | !important |
|------|------|------------|------------|
| style.css | (inherits h1: `clamp(2.5rem, 10vw, 5rem)`) | base | no |
| page-header-system.css | `clamp(2rem, 6vw, 2.75rem)` | base | no |
| page-header-system.css | `clamp(2.25rem, 5vw, 3rem)` | ≥768px | no |
| page-header-system.css | `3rem` | ≥1024px | no |
| gallery-premium.css | `clamp(2rem, 6vw, 2.75rem)` | base | no |
| gallery-premium.css | `clamp(2.25rem, 5vw, 3rem)` | ≥768px | no |
| gallery-premium.css | `3rem` | ≥1024px | no |
| services-page-polish.css | `clamp(2rem, 6vw, 2.75rem)` | base | no |
| services-page-polish.css | `3rem` | ≥1024px | no |
| services-page-polish.css | `2rem` | ≤430px | **YES** |
| about-page-polish.css | `clamp(2rem, 6vw, 2.75rem)` | base | no |
| about-page-polish.css | `3rem` | ≥1024px | no |
| about-page-polish.css | `2rem` | ≤480px | **YES** |
| contact-premium-polish.css | `clamp(2rem, 6vw, 2.75rem)` | base | no |
| contact-premium-polish.css | `3rem` | ≥1024px | no |
| contact-premium-polish.css | `2rem` | ≤430px | **YES** |
| unified-premium-polish.css | `clamp(2rem, 5vw, 3rem)` | base | **YES** |
| luxury-corrections.css | `clamp(2rem, 6vw, 3.25rem)` | base | **YES** |

**Observations:**
- Page-specific polish files all duplicate the same `clamp(2rem, 6vw, 2.75rem)` - no need for 4 copies
- unified-premium-polish uses slightly different clamp: `5vw` instead of `6vw`, max `3rem` instead of `2.75rem`
- luxury-corrections.css uses max `3.25rem` - yet another variation
- All with !important, so the last-loaded wins

#### `.section-title`
| File | Size | Breakpoint | !important |
|------|------|------------|------------|
| design-system.css | `var(--heading-lg)` = `clamp(2.25rem, 5vw, 3rem)` | base | no |
| homepage-polish.css | `clamp(1.125rem, 3vw, 1.375rem)` | base | no |
| homepage-polish.css | `1.5rem` | ≥1440px | no |
| process-editorial.css | `0.875rem` | base | no |
| process-editorial.css | `0.9375rem` | ≥1024px | no |
| unified-premium-polish.css | `clamp(1.75rem, 4vw, 2.5rem)` | base | **YES** |
| luxury-corrections.css | `0.875rem` | base | **YES** |
| luxury-corrections.css | `0.9375rem` | ≥1024px | **YES** |
| index-mobile-luxury.css | `0.875rem` | ≤1023px | **YES** |
| unified-premium-polish.css (§9) | `clamp(1.75rem, 4vw, 2.5rem)` (non-index pages) | ≤1023px | **YES** |

**CRITICAL CONFLICT:** `.section-title` ranges from `0.875rem` (14px) to `clamp(2.25rem, 5vw, 3rem)` (36-48px). On mobile index.html it's used as a tiny label; on inner pages it's a large heading. This is **architecturally incoherent** - same class, wildly different treatment.

#### `.service-title`
| File | Size | Breakpoint | !important |
|------|------|------------|------------|
| style.css | `1.35rem` | base | no |
| design-system.css | `var(--text-xl)` = `1.375rem` | base | no |
| homepage-polish.css | `1.25rem` | base | no |
| unified-premium-polish.css | `1.125rem` | base | **YES** |
| luxury-corrections.css | `1.125rem` | base | **YES** |
| index-mobile-luxury.css | `1.125rem` | ≤1023px | **YES** |
| hero-mobile-premium.css | `1.25rem` | ≤768px | **YES** |
| style.css | `1.5rem` (`.service-featured`) | base | no |

#### `.step-number`
| File | Size | Breakpoint | !important |
|------|------|------------|------------|
| style.css | `2.5rem` | base | no |
| design-system.css | `var(--heading-lg)` = `clamp(2.25rem, 5vw, 3rem)` | base | no |
| homepage-polish.css | `3rem` | base | no |
| homepage-polish.css | `4rem` | ≥1440px | no |
| process-editorial.css | `0.8125rem` | base | no |
| process-editorial.css | `0.875rem` | ≥1024px | no |
| unified-premium-polish.css | `1.75rem` | base | **YES** |
| luxury-corrections.css | `3rem` | base | **YES** |
| luxury-corrections.css | `3.5rem` | ≥768px | **YES** |
| index-mobile-luxury.css | `0.6875rem` | ≤1023px | **YES** |
| hero-mobile-premium.css | `2rem` | ≤768px | **YES** |
| services-page-polish.css | `0.7rem` | base (services) | no |
| services-page-polish.css | `0.875rem` | ≤430px (services) | **YES** |

**CRITICAL CONFLICT:** `.step-number` ranges from `0.6875rem` (11px) to `4rem` (64px). On the index mobile it's a tiny label; on desktop homepage it's a large decorative number; on services-page-polish.css it's 0.7rem. Complete design incoherence.

#### `.step-title`
| File | Size | Breakpoint | !important |
|------|------|------------|------------|
| style.css | `1.15rem` | base | no |
| design-system.css | `var(--text-xl)` = `1.375rem` | base | no |
| homepage-polish.css | `clamp(1.125rem, 3vw, 1.375rem)` | base | no |
| process-editorial.css | `1.25rem` | base | no |
| process-editorial.css | `1.375rem` | ≥1024px | no |
| process-editorial.css | `1.5rem` | ≥1440px | no |
| unified-premium-polish.css | `1.125rem` | base | **YES** |
| luxury-corrections.css | `1.25rem` | base | **YES** |
| index-mobile-luxury.css | `1.125rem` | ≤1023px | **YES** |
| hero-mobile-premium.css | `1.125rem` | ≤768px | **YES** |
| services-page-polish.css | `clamp(1.15rem, 2.5vw, 1.35rem)` | base | no |
| services-page-polish.css | `1.125rem` | ≤430px | **YES** |

#### `.cta-title`
| File | Size | Breakpoint | !important |
|------|------|------------|------------|
| style.css | `clamp(1.5rem, 6vw, 2.25rem)` | base | no |
| narrative-structure.css | `clamp(1.75rem, 4vw, 2.5rem)` | base | no |
| homepage-polish.css | `clamp(1.5rem, 4vw, 2.25rem)` | base | no |
| about-page-polish.css | `clamp(1.5rem, 4vw, 2.25rem)` | base | no |
| about-page-polish.css | `1.625rem` | ≤480px | **YES** |
| about-page-polish.css | `2.5rem` | ≥1024px | no |
| about-page-polish.css | `2.75rem` | ≥1440px | no |
| unified-premium-polish.css | `clamp(1.75rem, 4vw, 2.5rem)` | base | **YES** |
| hero-mobile-premium.css | `1.625rem` | ≤768px | **YES** |
| index-mobile-luxury.css | `clamp(1.5rem, 6vw, 2rem)` | ≤1023px | **YES** |

#### `.wordmark`
| File | Size | Breakpoint | !important |
|------|------|------------|------------|
| style.css (inline) | `1.5rem` | base | no |
| style.css | `1.25rem` | base | no |
| navigation-desktop-premium.css | `1.5rem` | ≥1024px | no |
| navigation-desktop-premium.css | `1.6rem` | ≥1280px | no |
| navigation-desktop-premium.css | `1.65rem` | ≥1440px | no |
| navigation-mobile-premium.css | `1.25rem` (.nav-mobile-logo) | ≤1023px | no |
| hero-mobile-premium.css | `1.0625rem` | ≤768px | **YES** |
| footer-refinement.css | `clamp(1.5rem, 4vw, 1.75rem)` | footer | no |
| footer-refinement.css | `1.875rem` | ≥1440px footer | no |
| luxury-corrections.css | `1.25rem` | footer | **YES** |
| hero-mobile-premium.css | `1.125rem` | ≤768px footer | **YES** |
| services-page-polish.css | `1.25rem` | ≤430px footer | **YES** |
| about-page-polish.css | `1.125rem` | ≤480px footer | **YES** |
| contact-premium-polish.css | `1.25rem` | ≤430px footer | **YES** |

#### `.nav-link`
| File | Size | Breakpoint | !important |
|------|------|------------|------------|
| style.css (inline) | `0.9375rem` | base | no |
| style.css | `1.1rem` | base | no |
| style.css | `0.95rem` | ≥768px | no |
| navigation-desktop-premium.css | `0.9rem` | ≥1024px | no |
| navigation-desktop-premium.css | `0.92rem` | ≥1280px | no |
| navigation-desktop-premium.css | `0.94rem` | ≥1440px | no |
| navigation-mobile-premium.css | `1.35rem` | ≤1023px | no |
| hero-mobile-premium.css | `1.625rem` | ≤768px | **YES** |
| luxury-corrections.css | `1.25rem` | ≤1023px mobile | **YES** |
| luxury-corrections.css | `0.9rem` | ≥1024px desktop | **YES** |

**CONFLICT:** Mobile nav-link: `1.625rem` vs `1.35rem` vs `1.25rem` - three different values fighting.

#### `.btn` / `.btn-primary`
| File | Size | Breakpoint | !important |
|------|------|------------|------------|
| style.css | `0.95rem` | base | no |
| design-system.css | `0.8125rem` (--cta-font-size) | base | no |
| unified-premium-polish.css | `0.8125rem` | base | **YES** |
| luxury-corrections.css | `0.8125rem` | both | **YES** |
| hero-mobile-premium.css | `0.875rem` | ≤768px | **YES** |
| index-mobile-luxury.css | `0.8125rem` | ≤1023px | **YES** |
| about-page-polish.css | `0.875rem` | base | no |
| about-page-polish.css | `0.9375rem` | ≥1024px | no |
| contact-premium-polish.css | `0.875rem` | base | no |
| services-page-polish.css | `0.9375rem` | ≤430px CTA | **YES** |

#### Footer Elements
| Element | File | Size | !important |
|---------|------|------|------------|
| `.footer-title` | style.css | `1rem` | no |
| `.footer-title` | footer-refinement.css | `0.875rem` | no |
| `.footer-title` | footer-premium-polish.css | `0.8rem` | no |
| `.footer-title` | unified-premium-polish.css | `0.75rem` | **YES** |
| `.footer-title` | luxury-corrections.css | `0.8125rem` | **YES** |
| `.footer-title` | index-mobile-luxury.css | `0.75rem` | **YES** |
| `.footer-title` | services-page-polish.css (≤430) | `0.875rem` | **YES** |
| `.footer-title` | about-page-polish.css (≤480) | `0.875rem` | **YES** |
| `.footer-title` | contact-premium-polish.css (≤430) | `0.875rem` | **YES** |
| `.footer-brand-statement` | footer-premium-polish.css | `0.75rem` | no |
| `.footer-brand-statement` | footer-refinement.css | `0.8125rem` | no |
| `.footer-brand-statement` | luxury-corrections.css | `0.8125rem` | **YES** |
| `.footer-brand-statement` | unified-premium-polish.css | `0.8125rem` | **YES** |
| `.footer-brand-statement` | footer-premium-polish.css | `0.8125rem` | ≥1440px, no |
| `.footer-bottom p` | style.css | `0.875rem` | no |
| `.footer-bottom p` | footer-premium-polish.css | `0.6875rem` | no |
| `.footer-bottom p` | footer-refinement.css | `0.8125rem` | no |
| `.footer-bottom p` | unified-premium-polish.css | `0.8125rem` | **YES** |
| `.footer-bottom p` | luxury-corrections.css | `0.8125rem` | **YES** |
| `.footer-bottom p` | hero-mobile-premium.css (≤768) | `0.75rem` | **YES** |

---

## 3. Font-Weight Values

### Weight Map Across Project

| Weight | Token | Usage |
|--------|-------|-------|
| `200` | (ultralight) | h1, h2, hero-headline, wordmark, .step-number (some files), gallery-section-title, lang-divider |
| `300` | `--weight-light` | page-title, cta-title, concept-title, hero-headline (some files), logo-text, value-title (style.css) |
| `400` | `--weight-regular` | body, paragraphs, h3-h6, nav-link (some files), section-title (some files), hero-eyebrow, step-title (some files) |
| `500` | `--weight-medium` | nav-link (some files), btn, service-link, form-label, value-title (about-polish-mobile), step-title (luxury-corrections), contact-card-title |
| `600` | `--weight-semibold` | footer-title (style.css, footer-refinement.css), form-label (contact-premium-polish.css), service-detail-subtitle (unified-premium-polish) |

### Font-Weight Conflicts

| Element | Files Competing | Values |
|---------|----------------|--------|
| `.hero-headline` | style.css, narrative-structure.css, hero-refinement.css, homepage-polish.css, index-mobile-luxury.css | **200** vs **300** |
| `.service-title` | style.css (200), homepage-polish (400), unified-premium-polish (400), luxury-corrections (500), index-mobile-luxury (500) | **200 → 400 → 500** |
| `.step-title` | style.css (400), process-editorial (400), luxury-corrections (500!), index-mobile-luxury (500!) | **400 vs 500** |
| `.value-title` | style.css (200), about-page-polish (400), unified-premium-polish (400), luxury-corrections (500!), about-page-polish mobile (500!) | **200 → 400 → 500** |
| `.footer-title` | style.css (600), footer-refinement (600), luxury-corrections (500!), unified-premium-polish (500!), index-mobile-luxury (500!) | **600 vs 500** |
| `.nav-link` | style.css (500), navigation-desktop (400), hero-mobile-premium mobile (300!), navigation-mobile-premium (400), luxury-corrections (400!) | **300 → 400 → 500** |
| `.section-title` | design-system (300/light), homepage-polish (400), luxury-corrections (400!), process-editorial (400) | **300 vs 400** |
| `.form-label` | style.css (500), contact-premium-polish (600), unified-premium-polish (500!) | **500 vs 600** |
| `.service-detail-subtitle` | services-refinement (500), unified-premium-polish (600!) | **500 vs 600** |

---

## 4. Line-Height Values

### Design System Tokens
```css
--leading-tight:    1.2
--leading-snug:     1.4
--leading-normal:   1.6
--leading-relaxed:  1.7
```

### Unique Line-Height Values Used
```
1.0, 1.05, 1.1, 1.12, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4,
1.5, 1.6, 1.65, 1.68, 1.7, 1.75, 1.8, 1.85, 1.9
```

**19 distinct line-height values.** The design system defines only 4 tokens. The remaining 15 are ad-hoc values scattered across polish files.

### Line-Height Conflicts Per Element

| Element | Files | Values Competing |
|---------|-------|------------------|
| `.hero-headline` | hero-refinement (1.05), homepage-polish (1.12), hero-mobile-premium (1.1), narrative-structure (1.1), index-mobile-luxury (1.15) | **5 values: 1.05, 1.1, 1.12, 1.15** |
| `.hero-descriptor` | narrative-structure (1.7), homepage-polish (1.75), hero-mobile-premium (1.6) | **3 values: 1.6, 1.7, 1.75** |
| `.service-text` | style.css (1.8), homepage-polish (1.7), hero-mobile-premium (1.6!), unified-premium-polish (1.65!), luxury-corrections (1.65!) | **4 values: 1.6, 1.65, 1.7, 1.8** |
| `.step-text` | style.css (1.7), hero-mobile-premium (1.65!), unified-premium-polish (1.65!), luxury-corrections (1.7!), services-page-polish (1.75), services-page-polish mobile (1.65!) | **4 values: 1.65, 1.7, 1.75** |
| `body / p` | style.css (1.7), design-system (--leading-relaxed: 1.7) | Consistent: 1.7 |
| `.content-text p` | style.css (1.9), about-page-polish (1.85), about-page-polish mobile (1.65!) | **3 values: 1.65, 1.85, 1.9** |

---

## 5. Letter-Spacing Values

### Design System Tokens
```css
--tracking-tighter: -0.02em
--tracking-tight:   -0.01em
--tracking-normal:   0
--tracking-wide:     0.04em
--tracking-wider:    0.08em
--tracking-widest:   0.12em
```

### Unique Letter-Spacing Values Used Across All Files
```
Negative: -0.03em, -0.025em, -0.02em, -0.015em, -0.01em, -0.005em, -0.003em
Zero: 0
Positive: 0.01em, 0.015em, 0.02em, 0.025em, 0.03em, 0.04em, 0.05em, 0.06em,
          0.08em, 0.1em, 0.12em, 0.15em, 0.18em, 0.2em, 0.22em, 0.25em, 0.3em
```

**27 distinct letter-spacing values.** The design system defines only 6 tokens. The remaining 21 are ad-hoc.

### Notable Letter-Spacing Conflicts

| Element | File | Value | !important |
|---------|------|-------|------------|
| `.wordmark` | style.css | `0.25em` | no |
| `.wordmark` | inline style (index.html) | `0.15em` | no |
| `.wordmark` | hero-mobile-premium.css | `0.18em` | **YES** |
| `.wordmark` | navigation-desktop-premium.css | `0.15em` → `0.18em` → `0.2em` | no |
| `.section-title` | design-system.css | `var(--tracking-widest)` = `0.12em` | no |
| `.section-title` | homepage-polish.css | `0.15em` | no |
| `.section-title` | luxury-corrections.css | `0.18em` | **YES** |
| `.section-title` | index-mobile-luxury.css | `0.18em` | **YES** |
| `.section-title` | process-editorial.css | `0.2em` → `0.25em` | no |
| `.section-title` | unified-premium-polish.css | `-0.01em` | **YES** |

**CRITICAL:** `.section-title` letter-spacing ranges from `-0.01em` to `0.25em` - from tight negative tracking to extremely wide positive tracking. This alone indicates no unified system.

---

## 6. Heading Hierarchy & HTML Structure

### index.html (Homepage)
```
h1.hero-headline    → "Gde estetika sreće ukus"
  h2.statement-title  → "Estetika." / "Ukus." / "Pouzdanost." (philosophy pills)
  h2.concepts-intro-title → "Dva koncepta. Jedan cilj."
    h3.concept-title  → "CENTERFEAST" / "LAYERS of FEAST"
  h2.section-title    → "Naši klijenti"
  h2.cta-title        → "Spremni za nezaboravan događaj?"
```
✅ Valid h1→h2→h3 hierarchy

### o-nama.html (About)
```
h1.page-title       → "O nama"
  h2.section-title   → "Naša priča" / "Naše vrednosti" / "Naš pristup"
    h3.value-title   → (4 value items)
  h2.cta-title       → "Voleli bismo da vas upoznamo"
```
✅ Valid hierarchy

### usluge.html (Services)
```
h1.page-title           → "Naše usluge"
  h3.service-title      → (4 service cards) ⚠️ SKIPS h2!
  h2.service-detail-title → (4 detail sections)
    h3.service-detail-subtitle → (sub-headings)
  h2.section-title      → (work-process)
    h3.step-title       → (process steps)
  h2.cta-title          → (CTA)
```
⚠️ **Issue:** Service cards use `<h3>` directly under `<h1>`, skipping `<h2>`. This breaks heading hierarchy for screen readers.

### galerija.html (Gallery)
```
h1.page-title              → "Galerija"
  p.page-subtitle          → (descriptive text - NOT a heading)
  h2.gallery-section-title → "CENTERFEAST" / "LAYERS of FEAST"
```
✅ Valid hierarchy (page-subtitle is correctly a `<p>`)

### kontakt.html (Contact)
```
h1.page-title           → "Kontakt"
  h2.contact-card-title → "Telefon" / "Email" / "Lokacija"
  h2.section-title      → "Pošaljite upit"
```
✅ Valid hierarchy

### Visual Size vs. Semantic Level Issues

| Element | HTML Level | Visual Size (desktop) | Expected Size |
|---------|------------|----------------------|---------------|
| `.statement-title` | h2 | 0.75rem (pill) on mobile | Much larger - h2 should be prominent |
| `.section-title` (index mobile) | h2 | 0.875rem (label) | Much larger - h2 should be prominent |
| `.service-title` (cards) | h3 | 1.125rem-1.25rem | Appropriate for h3 |
| `.service-detail-title` | h2 | clamp(1.5rem-2rem) | Appropriate |
| `.gallery-section-title` | h2 | clamp(1.6rem-2.2rem) | Appropriate |

**Key Issue:** On mobile, several h2 elements are visually styled as tiny labels (0.75-0.875rem), creating a semantic/visual disconnect.

---

## 7. Body & Paragraph Sizes

### Base Body Typography
```css
/* style.css */
body {
    font-family: 'Manrope', sans-serif;
    font-size: 1rem;    /* 16px → 17px @768 → 18px @1024 */
    line-height: 1.7;
    font-weight: 400;
}
```

### Paragraph Variants

| Class/Context | File | Size | line-height | Weight |
|---------------|------|------|-------------|--------|
| `p` (default) | style.css | 1rem | 1.7 | 400 |
| `.hero-text` | style.css | 1rem | 1.9 | 300 |
| `.hero-text` | hero-refinement.css | 0.95rem | 1.8 | - |
| `.hero-descriptor` | narrative-structure.css | clamp(0.875rem, 1.8vw, 1rem) | 1.7 | 400 |
| `.hero-descriptor` | homepage-polish.css | clamp(1rem, 2vw, 1.125rem) | 1.75 | 400 |
| `.hero-descriptor` | hero-mobile-premium.css | 0.9375rem | 1.6 | - |
| `.service-text` | style.css | 0.9rem | 1.8 | - |
| `.service-text` | homepage-polish.css | 0.9375rem | 1.7 | - |
| `.service-text` | unified-premium-polish.css | 0.9375rem! | 1.65! | - |
| `.step-text` | style.css | 0.9rem | 1.7 | - |
| `.step-text` | unified-premium-polish.css | 0.9375rem! | 1.65! | - |
| `.value-text` | style.css | 0.9rem | 1.8 | - |
| `.value-text` | about-page-polish.css | 0.9375rem | 1.7 | - |
| `.value-text` | about-page-polish.css (≤480) | 0.875rem! | 1.6! | - |
| `.content-text p` | style.css | 1.05rem | 1.9 | - |
| `.content-text p` | about-page-polish.css | 1rem | 1.85 | - |
| `.content-text p` | about-page-polish.css (≤480) | 0.9375rem! | 1.65! | - |
| `.content-text p` | about-page-polish.css (≥1024) | 1.0625rem | - | - |
| `.page-intro` | page-header-system.css | clamp(0.95rem, 2vw, 1.05rem) | 1.6 | 400 |
| `.page-intro` | page-header-system.css (≥768) | 1.08rem | - | - |
| `.page-intro` | page-header-system.css (≥1024) | 1.1rem | 1.65 | - |
| `.cta-text` | style.css | 1rem | - | - |
| `.cta-text` | unified-premium-polish.css | 1rem! | 1.65! | - |
| `.cta-text` | hero-mobile-premium.css (≤768) | 0.9375rem! | 1.6! | - |
| `.section-intro` | style.css | 0.95rem | 1.8 | - |
| `.lead-text` | style.css | 1.25rem | 1.8 | 400 |
| `.lead-text` | about-page-polish.css | 1.0625rem! | 1.75! | 500! |
| `.lead-text` | about-page-polish.css (≤480) | 1rem! | - | 500! |
| `.service-detail-lead` | style.css | 1.05rem | - | 500 |
| `.service-detail-lead` | services-page-polish.css | clamp(1.08rem, 2.5vw, 1.25rem) | 1.68 | 400 |
| `.service-detail-text p` | style.css | 0.95rem | - | - |
| `.service-detail-text p` | services-page-polish.css (≤430) | 0.9375rem! | 1.65! | - |
| `.form-input` | style.css | 1rem | - | - |
| `.form-input` | unified-premium-polish.css | 1rem! | - | - |
| `.form-input` | contact-premium-polish.css | 0.9375rem | - | - |
| `.form-input` | contact-premium-polish.css (≤430) | 1rem! | - | - |

**Observation:** Body/paragraph text clusters around 0.875-1.0625rem, but uses 8+ distinct sizes and numerous line-height variations where 2-3 would suffice.

---

## 8. !important Override Audit

### Files Using !important for Typography

| File | Approx. !important Count (typography only) | Purpose |
|------|------|---------|
| hero-mobile-premium.css | ~40+ | Mobile hero/nav/footer overrides |
| index-mobile-luxury.css | ~50+ | Index page mobile luxury treatment |
| unified-premium-polish.css | ~60+ | Cross-page premium polish |
| luxury-corrections.css | ~50+ | "Corrections" layer |
| services-page-polish.css | ~30+ | Services mobile optimization |
| about-page-polish.css | ~30+ | About mobile optimization |
| contact-premium-polish.css | ~30+ | Contact mobile optimization |

### Files NOT Using !important for Typography
- style.css
- design-system.css
- narrative-structure.css
- hero-refinement.css (minimal)
- homepage-polish.css
- concepts-sections.css
- page-header-system.css
- footer-refinement.css
- footer-polish.css
- footer-premium-polish.css
- process-editorial.css
- navigation-desktop-premium.css
- navigation-mobile-premium.css
- gallery-premium.css

### !important Cascade Problem

The CSS loaded on index.html has this cascade:
```
1. style.css                    ← base (no !important)
2. design-system.css            ← tokens (no !important)
3. narrative-structure.css      ← base (no !important)
4. hero-refinement.css          ← base (minimal !important)
5. homepage-polish.css          ← polish (no !important)
6. hero-mobile-premium.css      ← OVERRIDE (heavy !important)
7. process-editorial.css        ← base (no !important)
8. footer-refinement.css        ← base (no !important)
9. footer-polish.css            ← base (no !important)
10. footer-premium-polish.css   ← base (no !important)
11. navigation-desktop-premium.css ← base (no !important)
12. navigation-mobile-premium.css  ← base (no !important)
13. index-mobile-luxury.css     ← OVERRIDE (heavy !important)
14. luxury-corrections.css      ← OVERRIDE (heavy !important)
15. premium-polish-final.css    ← no typography
16. concepts-sections.css       ← base (no !important)
17. performance-optimizations.css ← no typography
18. unified-premium-polish.css  ← OVERRIDE (heavy !important - LAST WINS)
19. hero-slider.css             ← colors only
```

**Result:** `unified-premium-polish.css` loads LAST and uses `!important`, so its values override everything else that also uses `!important`. But `luxury-corrections.css` loads at position 14 - its `!important` values are overridden by #18. Meanwhile, `index-mobile-luxury.css` (#13) is overridden by both #14 and #18.

Yet on inner pages, unified-premium-polish.css is also last, but page-specific polishes (about-page-polish, services-page-polish, contact-premium-polish) load BEFORE it, meaning their mobile `!important` values (in media queries with same specificity) get overridden by unified-premium-polish's values.

**This is an !important arms race with no clear winner protocol.**

---

## 9. Modular Scale Analysis

### Intended Scale (from design-system.css)
The design tokens suggest a roughly **1.25x (Major Third)** scale:
```
0.6875 × 1.18 ≈ 0.8125
0.8125 × 1.23 ≈ 1.0
1.0    × 1.125 ≈ 1.125
1.125  × 1.22 ≈ 1.375
```

The heading tokens use clamp() but their max values suggest:
```
1.5rem → 2.25rem → 3rem → 5rem
(×1.5)   (×1.33)  (×1.67)
```

This is not a consistent scale. The jumps are 1.5×, 1.33×, then 1.67×.

### Actual Sizes Used (sorted ascending, all unique rem values observed)

```
0.625   - footer-bottom (mobile, footer-premium-polish)
0.65    - trust-label (hero-refinement)
0.6875  - text-xs, step-number (index-mobile), footer-bottom (footer-premium-polish)
0.7     - hero-eyebrow, step-number (services-page-polish)
0.75    - trust-logo, footer-brand, footer-bottom, brand-signature, lang-divider, footer-title (index-mobile)
0.8     - hero-link-secondary, footer-title (footer-premium-polish)
0.8125  - text-sm, btn, service-link, footer-bottom, concept-subtitle, form-label, lang-btn, brand-signature (mobile), step-number (process-editorial), footer-tagline (mobile)
0.875   - hero-descriptor (narrative min), btn (hero-mobile), footer-title, step-number, form-label, footer-cta btn, service-link, client-logo
0.9     - nav-link (desktop), value-text (mobile), card-text
0.9375  - nav-link (inline), service-text, step-text, body paragraph (universal mobile size), form-input (contact), cta-text (mobile), value-text
0.95    - form-label, btn, page-intro (min), hero-text
1.0     - body base, hero-text, cta-text, value-text (desktop), service-detail-lead (mobile), form-input
1.0625  - content-text opening, concepts-intro-text (max), contact-link (mobile), content-text p (desktop)
1.08    - page-intro (tablet)
1.1     - nav-link, page-intro (desktop)
1.125   - btn-large, service-title, step-title, value-title (desktop), footer-wordmark (mobile), step-title
1.15    - step-title (style.css)
1.25    - wordmark, step-title (luxury), hero-descriptor (desktop max), service-title (homepage), footer-wordmark, value-title (desktop), nav-link (mobile luxury)
1.35    - service-title (style.css), nav-link (mobile nav), step-title
1.375   - text-xl, section-title (homepage max), step-title (desktop), statement-title (mobile)
1.5     - wordmark (desktop), heading-sm max, cta-title (min), section-title (1440px), service-detail-title, step-title (1440px)
1.625   - nav-link (mobile hero), cta-title (mobile), wordmark (desktop)
1.65    - wordmark (1440px)
1.75    - section-title, service-detail-title, work-process title (mobile), step-number (unified)
1.875   - wordmark (footer 1440px)
2.0     - page-title mobile, step-number (hero-mobile), service-detail-title (mobile), concept-title
2.25    - heading-lg min, hero-headline (min), cta-title
2.5     - heading-md max, hero-headline, statement-title, cta-title, section-title, concept-intro
2.75    - page-title, section-title (about/services desktop), page-intro title, hero-headline mobile (414+)
3.0     - heading-lg max, step-number (homepage/luxury), page-title (desktop), hero-headline mobile (414+)
3.25    - page-title (luxury max), hero-headline (index-mobile max)
3.5     - step-number (luxury ≥768), hero-headline (inline max)
4.0     - step-number (homepage 1440px)
4.5     - hero-headline (homepage max)
5.0     - heading-xl max, hero-headline (style.css/narrative max)
5.5     - hero-headline (homepage 1440px)
```

**Total: 42+ unique font-size values.** A well-structured system should have 8-12.

---

## 10. Conflicting / Overriding Values

### Severity Levels
- 🔴 **CRITICAL** - Same selector, dramatically different visual outcome
- 🟡 **WARNING** - Same selector, subtle differences that create inconsistency  
- 🟢 **MINOR** - Intentional responsive/page-specific variation

### 🔴 CRITICAL Conflicts

#### 1. `.section-title` - Identity Crisis
```
design-system.css:           clamp(2.25rem, 5vw, 3rem), weight 300, tracking 0.12em, uppercase
homepage-polish.css:         clamp(1.125rem, 3vw, 1.375rem), weight 400, tracking 0.15em, uppercase
process-editorial.css:       0.875rem, weight 400, tracking 0.2em, uppercase
luxury-corrections.css:      0.875rem!, weight 400!, tracking 0.18em!, uppercase
index-mobile-luxury.css:     0.875rem!, weight 400!, tracking 0.18em!, uppercase
unified-premium-polish.css:  clamp(1.75rem, 4vw, 2.5rem)!, weight 300!, tracking -0.01em!, NO uppercase!
```
**The same class serves as a 48px heading AND a 14px label.** The unified-premium-polish removes uppercase and uses negative tracking, while all others use positive tracking and uppercase.

#### 2. `.step-number` - 10× Size Range
```
Smallest: 0.6875rem (11px) - index-mobile-luxury mobile
Largest:  4rem (64px) - homepage-polish 1440px
```
**Factor of ~6× between smallest and largest use.** Also switches font-family between Raleway and Manrope depending on file.

#### 3. `.statement-title` - Structural Transformation
```
narrative-structure.css: clamp(2rem, 4vw, 3.5rem), weight 300, tracking 0.12em (large heading)
homepage-polish.css:     clamp(1.75rem, 5vw, 2.5rem), weight 400, tracking 0.02em
index-mobile-luxury.css: font-family MANROPE!, 0.75rem!, weight 400!, tracking 0.08em! (tiny pill)
```
**An h2 heading gets transformed into a 12px pill label on mobile.** This changes both the font-family and makes it semantically misleading.

#### 4. `.value-title` - Weight Swing
```
style.css:              weight 200, 1.25rem, tracking 0.2em, uppercase
about-page-polish.css:  weight 400, 1.125rem, tracking -0.01em, NO uppercase
luxury-corrections.css: weight 500!, 1.125rem!, tracking -0.005em!
about-page-polish (≤480): weight 500!, 1.0625rem!
```
**From ultralight uppercase editorial to medium-weight sentence-case.** Complete design direction change.

### 🟡 WARNING - Subtle Inconsistencies

#### 5. `.hero-headline` line-height
Five different line-height values: 1.05, 1.1, 1.12, 1.15, 1.2. Only 1-2 should be needed.

#### 6. `.nav-link` weight
Ranges from 300 (hero-mobile) to 500 (style.css). Desktop settles on 400 but mobile is contested.

#### 7. Footer typography - 4+ competing systems
- `footer-refinement.css`: established baseline
- `footer-premium-polish.css`: smaller, more refined
- `luxury-corrections.css`: overrides with !important
- `unified-premium-polish.css`: overrides again with !important
- Page-specific mobile files: each override footer again
- `hero-mobile-premium.css`: also overrides footer

#### 8. `.page-intro` / `.page-subtitle` naming inconsistency
- Most pages use `.page-intro` 
- `galerija.html` uses `.page-subtitle`
- Both are styled identically but by different selectors in different files

#### 9. `.btn` / `.btn-primary` / `.btn-large` inconsistency
- `style.css` btn: `0.95rem`
- Design system: `0.8125rem` 
- Everything else converges on `0.8125rem` with !important
- But `btn-large` in style.css is `1.125rem` while in unified-premium-polish it's `0.8125rem!`
- So `.btn-large` is actually the **same size** as `.btn` after overrides

### 🟢 MINOR - Intentional Responsive Variations
- Page-title scaling from 2rem (mobile) → 3rem (desktop) - reasonable
- Hero-headline scaling with clamp() - reasonable approach
- Desktop nav wordmark growing from 1.5rem → 1.65rem - reasonable

---

## 11. CSS Load Order Per Page

### index.html (19 CSS files)
```
1. [inline critical CSS]
2. assets/css/style.css
3. assets/css/design-system.css
4. assets/css/narrative-structure.css
5. assets/css/hero-refinement.css
6. homepage-polish.css
7. hero-mobile-premium.css
8. process-editorial.css
9. footer-refinement.css
10. footer-polish.css
11. footer-premium-polish.css
12. navigation-desktop-premium.css
13. navigation-mobile-premium.css
14. index-mobile-luxury.css
15. luxury-corrections.css
16. premium-polish-final.css
17. concepts-sections.css
18. performance-optimizations.css
19. unified-premium-polish.css
20. hero-slider.css
```

### o-nama.html (14 CSS files)
```
1. assets/css/style.css
2. assets/css/about-refinement.css
3. about-page-polish.css
4. hero-mobile-premium.css
5. navigation-desktop-premium.css
6. navigation-mobile-premium.css
7. luxury-corrections.css
8. footer-refinement.css
9. footer-polish.css
10. footer-premium-polish.css
11. unified-premium-polish.css
```

### usluge.html (14 CSS files)
```
1. assets/css/style.css
2. assets/css/services-refinement.css
3. services-page-polish.css
4. hero-mobile-premium.css
5. navigation-desktop-premium.css
6. navigation-mobile-premium.css
7. luxury-corrections.css
8. footer-refinement.css
9. footer-polish.css
10. footer-premium-polish.css
11. page-header-system.css
12. unified-premium-polish.css
```

### galerija.html (13 CSS files)
```
1. assets/css/style.css
2. assets/css/gallery-refinement.css
3. gallery-premium.css
4. hero-mobile-premium.css
5. navigation-desktop-premium.css
6. navigation-mobile-premium.css
7. luxury-corrections.css
8. footer-refinement.css
9. footer-polish.css
10. footer-premium-polish.css
11. page-header-system.css
12. unified-premium-polish.css
13. assets/css/lightbox.css
```

### kontakt.html (11 CSS files)
```
1. assets/css/style.css
2. assets/css/contact-refinement.css
3. contact-premium-polish.css
4. hero-mobile-premium.css
5. navigation-desktop-premium.css
6. navigation-mobile-premium.css
7. luxury-corrections.css
8. footer-refinement.css
9. footer-polish.css
10. footer-premium-polish.css
11. unified-premium-polish.css
```

---

## 12. Summary of Critical Issues

### Architecture Problems

1. **42+ unique font-sizes** where 8-12 should suffice
2. **27 unique letter-spacing values** where 6 tokens are defined
3. **19 unique line-height values** where 4 tokens are defined
4. **!important arms race** across 7+ CSS files, creating unpredictable cascade
5. **No single source of truth** - design-system.css tokens exist but are bypassed by every subsequent file
6. **Page-specific CSS files duplicate** identical values (page-title, page-intro) across 4 files
7. **5 font-weights** used (200-600) but base style.css declares all headings as 400, then other files override to 200, 300, or 500

### Semantic Issues

8. **`.section-title`** serves dual purpose: large heading (inner pages) AND tiny label (index mobile) - should be 2 separate classes
9. **`.statement-title`** changes font-family on mobile - design system violation
10. **`.step-number`** changes font-family on mobile - design system violation
11. **usluge.html** skips h2 level in heading hierarchy (h1 → h3)
12. **`.btn-large`** becomes same size as `.btn` after !important overrides - class is meaningless

### Redundancy Issues

13. **Footer typography** defined in 6+ files with competing values
14. **Page-title** size defined identically in page-header-system.css, gallery-premium.css, services-page-polish.css, about-page-polish.css, and contact-premium-polish.css
15. **Mobile container/header/footer** styles duplicated in services-page-polish, about-page-polish, and contact-premium-polish (could be in one shared file)

### Recommended Actions (for reference, no code written)

1. **Consolidate to single typography file** that uses and enforces design-system.css tokens
2. **Eliminate !important** - restructure cascade with proper specificity
3. **Reduce font-size scale** to 10-12 standardized values
4. **Reduce letter-spacing** to the 6 defined tokens
5. **Reduce line-height** to 4-5 standardized values
6. **Split `.section-title`** into `.section-label` (small uppercase) and `.section-heading` (large)
7. **Remove font-family overrides** on mobile for .statement-title and .step-number
8. **Merge page-specific mobile CSS** (about/services/contact) into unified-premium-polish.css
9. **Fix heading hierarchy** in usluge.html (h3 → h2 for service cards)
10. **Delete redundant page-title/page-intro declarations** from individual page polishes

---

*End of Typography Audit Report*
