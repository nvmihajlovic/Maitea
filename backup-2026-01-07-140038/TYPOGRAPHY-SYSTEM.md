# MAITEA - UNIFIED TYPOGRAPHY SYSTEM
**Verzija: 2.0 - Januar 2026**

## 🎯 PRINCIP: "Tiha Izložba" - Luksuzna Jednostavnost

---

## 📐 HIERARCHY LEVELS

### LEVEL 1: Page Title (Hero Naslov)
**Klasa:** `.page-title`  
**Upotreba:** Glavni naslov svake stranice (O nama, Usluge, Galerija, Kontakt)

#### DESKTOP (>768px)
```css
font-family: 'Raleway', sans-serif;
font-size: clamp(2.5rem, 8vw, 4rem);        /* 40px → 64px */
font-weight: 200;
letter-spacing: -0.02em;
line-height: 1.15;
color: #1a1a1a;
margin: 0 0 1.5rem 0;
text-align: center;
```

#### MOBILE (≤768px)
```css
font-size: 2.25rem !important;              /* 36px fixed */
line-height: 1.2 !important;
letter-spacing: -0.015em !important;
margin: 0 0 1rem 0 !important;
```

---

### LEVEL 2: Page Intro/Subtitle (Podnaslov)
**Klasa:** `.page-intro` ili `.page-subtitle`  
**Upotreba:** Uvodni tekst ispod glavnog naslova

#### DESKTOP (>768px)
```css
font-family: 'Manrope', sans-serif;
font-size: clamp(1rem, 2.5vw, 1.15rem);     /* 16px → 18.4px */
font-weight: 400;
line-height: 1.7;
color: #5a5a5a;
margin: 0 auto;
max-width: 620px;
text-align: center;
```

#### MOBILE (≤768px)
```css
font-size: 0.9375rem !important;            /* 15px fixed */
line-height: 1.65 !important;
max-width: 90% !important;
margin: 0 auto !important;
opacity: 0.85;
```

---

### LEVEL 3: Section Title (H2 - Sekcijski Naslov)
**Klasa:** `.section-title`  
**Upotreba:** Naslovi unutar stranice (Naša Priča, Vrednosti, Proces Rada)

#### DESKTOP (>768px)
```css
font-family: 'Raleway', sans-serif;
font-size: clamp(1.75rem, 5vw, 2.5rem);     /* 28px → 40px */
font-weight: 300;
letter-spacing: -0.01em;
line-height: 1.3;
color: #1a1a1a;
margin: 0 0 2.5rem 0;
text-align: center;
```

#### MOBILE (≤768px)
```css
font-size: 1.75rem !important;              /* 28px fixed */
line-height: 1.25 !important;
letter-spacing: -0.01em !important;
margin: 0 0 1.5rem 0 !important;
```

---

### LEVEL 4: Subsection Title (H3 - Kartica/Element Naslov)
**Klasa:** `.service-title`, `.value-title`, `.card-title`  
**Upotreba:** Naslovi unutar kartica, vrednosti, procesa

#### DESKTOP (>768px)
```css
font-family: 'Raleway', sans-serif;
font-size: clamp(1.125rem, 3vw, 1.5rem);    /* 18px → 24px */
font-weight: 400;
letter-spacing: 0.005em;
line-height: 1.35;
color: #1a1a1a;
margin: 0 0 0.75rem 0;
```

#### MOBILE (≤768px)
```css
font-size: 1.125rem !important;             /* 18px fixed */
line-height: 1.4 !important;
margin: 0 0 0.5rem 0 !important;
```

---

### LEVEL 5: Body Text
**Tag:** `<p>`, `.content-text p`  
**Upotreba:** Paragraf tekst

#### DESKTOP (>768px)
```css
font-family: 'Manrope', sans-serif;
font-size: 1rem;                            /* 16px */
font-weight: 400;
line-height: 1.75;
color: #3a3a3a;
margin: 0 0 1.25rem 0;
max-width: 65ch;
```

#### MOBILE (≤768px)
```css
font-size: 0.9375rem !important;            /* 15px */
line-height: 1.65 !important;
margin: 0 0 1rem 0 !important;
max-width: 36ch !important;
```

---

## 🎨 DESIGN TOKENS

### Shadows (Konzistentne Senke)
```css
/* Card Shadow */
box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 4px 16px rgba(0, 0, 0, 0.03);

/* Image Shadow */
box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.03),
    0 4px 16px rgba(0, 0, 0, 0.05);

/* Hover Shadow */
box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.06),
    0 8px 24px rgba(0, 0, 0, 0.04);
```

### Spacing Scale (Vertikalni Ritam)
```css
--space-1: 0.5rem;      /* 8px */
--space-2: 0.75rem;     /* 12px */
--space-3: 1rem;        /* 16px */
--space-4: 1.5rem;      /* 24px */
--space-5: 2rem;        /* 32px */
--space-6: 2.5rem;      /* 40px */
--space-7: 3.5rem;      /* 56px */
--space-8: 4.5rem;      /* 72px */
```

### Border Radius
```css
--radius-sm: 8px;       /* Buttons, small cards */
--radius-md: 12px;      /* Cards */
--radius-lg: 16px;      /* Images, large cards */
```

---

## ✅ IMPLEMENTATION CHECKLIST

### Stranice koje MORAJU biti unificirane:
- [ ] **index.html** - Homepage (hero-mobile-premium.css)
- [ ] **o-nama.html** - About (about-page-polish.css)
- [ ] **usluge.html** - Services (services-page-polish.css)
- [ ] **galerija.html** - Gallery (gallery-premium.css)
- [ ] **kontakt.html** - Contact (contact-premium-polish.css)

### CSS Fajlovi:
- [ ] about-page-polish.css
- [ ] services-page-polish.css
- [ ] gallery-premium.css
- [ ] contact-premium-polish.css
- [ ] hero-mobile-premium.css
- [ ] assets/css/style.css (base h1, h2, h3)

---

## 🚫 ZABRANJENO (NIKADA NE MENJATI)

1. **Font Families:**
   - Raleway (naslovi)
   - Manrope (body)

2. **Brand Colors:**
   - Gold: #d4af37
   - Cream: #faf8f5
   - Charcoal: #1a1a1a
   - Gray: #5a5a5a

3. **Letter-spacing na body tekstu** (samo naslovi dobijaju negative tracking)

---

## 📊 BEFORE/AFTER COMPARISON

### Trenutno Stanje (NEKONZISTENTNO):
- page-title desktop: 2.5rem-4rem (OK) ✓
- page-intro desktop: 1rem-1.18rem (RAZLIKA) ✗
- page-title mobile: 2.25rem (OK) ✓
- page-intro mobile: 0.9375rem (OK) ✓
- section-title: 1.75rem-2.5rem (RAZLIKA u max) ✗
- Shadows: različiti across pages ✗

### Target (UNIFIED):
- **100% konzistentno** na svim stranicama
- Matematički precizne clamp() vrednosti
- Unified shadows, spacing, weights
