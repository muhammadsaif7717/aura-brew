# ☕ DESIGN SYSTEM — RESTAURANT & ARTISANAL CAFE SUITE (Google Stitch Specification)

> **Design Direction:** Artisanal Culinary Excellence, Appetizing Warmth, Gourmet Elegance, Seamless Direct Ordering (0% Commission).  
> **Target Audience:** Food lovers, coffee connoisseurs, brunch goers, and families looking for gourmet food, specialty beverages, takeaway orders, and hassle-free table reservations.

---

## 🎨 1. Color Palette (Google Stitch Tokens)

### Primary Culinary Brand Tokens
- **`--color-primary-amber-50`**: `#FFFBEB` (Warm Cream Tint — Section backgrounds & Pill tags)
- **`--color-primary-amber-100`**: `#FEF3C7` (Soft Honey — Active categories & highlighted badges)
- **`--color-primary-amber-500`**: `#F59E0B` (Vibrant Amber — Star ratings & flame tags)
- **`--color-primary-amber-600`**: `#D97706` (Core Brand Amber — Primary CTA buttons, key food icons)
- **`--color-primary-amber-700`**: `#B45309` (Deep Roasted Amber — Hover CTA, strong headers)
- **`--color-primary-amber-900`**: `#78350F` (Espresso Dark — High-emphasis culinary text)

### Freshness & Secondary Accents
- **`--color-accent-rose-500`**: `#F43F5E` (Bistro Rose — Chef's recommendations & special discounts)
- **`--color-accent-emerald-600`**: `#059669` (Fresh Basil — WhatsApp order link & table reservation success)
- **`--color-accent-slate-900`**: `#0F172A` (Midnight Navy / Charcoal — Primary contrasting buttons & footer)

### Neutrals & High-Contrast Typography
- **`--color-surface-white`**: `#FFFFFF` (Pure Sterile White — Dish card surfaces & modals)
- **`--color-surface-warm`**: `#FFFDF7` (Warm Canvas — Gentle culinary backdrop)
- **`--color-border-subtle`**: `#E2E8F0` (Slate 200 — Flat crisp card borders)
- **`--color-border-warm`**: `#FDE68A` (Amber 200 — Featured item borders)
- **`--color-text-main`**: `#0F172A` (Slate 900 — Maximum readability for food titles)
- **`--color-text-body`**: `#334155` (Slate 700 — WCAG AAA compliant descriptions)
- **`--color-text-muted`**: `#64748B` (Slate 500 — Captions & metadata)

---

## ✍️ 2. Typography Hierarchy (Taste Skill v2 Standard)

- **Display Headline (Hero):** `text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900`
- **Section Heading (H2):** `text-2xl sm:text-3xl font-bold tracking-tight text-slate-900`
- **Card Heading (H3):** `text-lg sm:text-xl font-bold text-slate-900`
- **Body Large:** `text-base sm:text-lg text-slate-700 leading-relaxed`
- **Body Regular:** `text-sm sm:text-base text-slate-600 leading-normal`
- **Price Display:** `text-base sm:text-lg font-black text-amber-700`

---

## 🔘 3. Interactive Components & States (Vercel Guidelines)

### Button Design Tokens
1. **Primary Ordering CTA (Direct Order / Table Booking):**
   - Base: `bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-150 shadow-xs`
   - Active: `active:scale-[0.98]`
   - Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2`
   - Min Touch Target: `min-h-[44px] min-w-[44px]`

2. **Secondary Outlined Button:**
   - Base: `border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-4 py-2.5 rounded-xl transition-all duration-150`
   - Active: `active:scale-[0.98]`
   - Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2`

3. **Input Fields & Quantity Steppers:**
   - Base: `w-full px-4 py-3 text-slate-900 bg-white border border-slate-300 rounded-xl transition duration-150`
   - Focus: `focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 focus:outline-none`

---

## 🚫 4. Impeccable Anti-Slop Safeguards
- ❌ **No Nested Cards:** Clean flat card layouts with ample padding (`p-5 sm:p-6 bg-white border border-slate-200/90 rounded-2xl`).
- ❌ **No Generic Stock Photos:** High-resolution appetizing specialty coffee, burgers, pastries, and artisanal dishes.
- ❌ **No Cliché AI Clutter:** Clean food badges (জনপ্রিয়, শেফ স্পেশাল, ফ্রেশ হট) and clear 0% commission direct ordering callouts.
- ❌ **No Layout Shifts:** Strict aspect ratios (`aspect-[16/10]`, `aspect-[4/3]`) on food imagery.

---

## 📱 5. Multi-Device Responsive Breakpoints
- **Mobile (<640px):** Single column, sticky bottom Direct Order & Table Booking bar, touch-friendly food categories.
- **Tablet (640px - 1024px):** 2-column food grid with easy quantity selection.
- **Desktop (>1024px):** 3-column culinary showcase with interactive live ordering modal and Google Maps integration.
