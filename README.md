# ☕ AuraBrew — Artisanal Coffee Roastery & Gourmet Bistro Web Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://aura-brew-omega.vercel.app)
[![License: Custom Evaluation](https://img.shields.io/badge/License-Evaluation_Only-orange?style=for-the-badge)](./LICENSE)

> **AuraBrew Coffee Co.** is a feature-rich, multi-page web platform created for artisanal micro-roasters, specialty cafes, and gourmet coffeehouses. It pairs warm espresso-inspired aesthetics with modern e-commerce catalogs, online table reservation workflows, and interactive customer experiences.

🌐 **Live Demo:** [https://aura-brew-omega.vercel.app](https://aura-brew-omega.vercel.app)
💻 **GitHub Repository:** [https://github.com/muhammadsaif7717/aura-brew](https://github.com/muhammadsaif7717/aura-brew)

---

## 🌟 Key Features

### 1. 🎛️ Multi-Slide Hero & Storytelling Presentation
- Dynamic hero carousel highlighting single-origin roasts, seasonal blends, and cafe ambiance.
- Engaging micro-animations and seamless CTA anchors guiding visitors through the experience.

### 2. 📖 Comprehensive Artisanal Menu Catalog (`/menu`)
- Categorized gourmet offerings: Single-Origin Pour Over, Cold Brews, Espresso Classics, Handcrafted Pastries, and Artisan Mains.
- Filterable navigation for quick culinary discovery with dietary labels and pricing.

### 3. 🛍️ E-Commerce Shop & Product Showcase (`/shop`, `/shop-details`)
- Coffee bean and brewing gear catalog with category filters, ratings, and price tags.
- Detailed product view with interactive quantity selectors, bean roast profiles, grind options, and customer reviews.

### 4. 📅 Table Reservation & Booking System (`/contact`)
- Intuitive booking form allowing guests to reserve tables with date, time slot, guest count, and special requests.
- Real-time client-side feedback and validation.

### 5. 🎯 Interactive Coffee Skills & Mastery Indicators
- Visual roasting metrics and proficiency bars highlighting Bean Roasting, Brewing Precision, Latte Art Mastery, and Aroma Profiling.

### 6. 💼 Specialty Services Suite (`/services`, `/single-service`)
- Showcase dedicated B2B and consumer offerings: Barista Training Workshops, Event Catering, Wholesale Supply, and Private Tastings.

### 7. 🤝 Direct-Trade Coffee Farm Projects (`/projects`)
- Interactive project showcase highlighting ethical sourcing, organic farm cooperatives in Ethiopia, Colombia, and Guatemala.

### 8. 👨‍🍳 Master Baristas & Roaster Team (`/team`)
- Meet the award-winning brewing champions with professional bios and social links.

### 9. 📰 Coffee Culture Blog & Community Discussions (`/blog`, `/blog-details`)
- Educational coffee guides and industry articles with an interactive reader comment system.

### 10. ❓ Interactive FAQ Accordion (`/faq`)
- Expandable accordions answering common questions regarding orders, beans, brewing recommendations, and cafe policies.

### 11. 🔍 Comprehensive SEO & Local Schema Architecture
- Pre-configured `CafeOrCoffeeShop` Schema.org JSON-LD structured data for Google Search rich results.
- Automated `sitemap.ts` and `robots.ts` covering all 14 multi-page routes.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Nested Layouts & Routes) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/turbopack` |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | Caudex & Playfair Display (Serif), Roboto (Sans-serif) |
| **SEO & Schema** | Schema.org JSON-LD, Dynamic OpenGraph, XML Sitemap & Robots.txt |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🗺️ Application Routes

| Route | Description |
|---|---|
| `/` | Flagship landing page with Hero slider, featured menu, skills, reviews, and news |
| `/about` | Heritage story, roasting philosophy, farm sourcing & team timeline |
| `/menu` | Full artisanal cafe menu with interactive tab filters |
| `/services` | Coffee catering, wholesale beans, barista masterclasses & private events |
| `/single-service` | Dedicated deep-dive service overview page |
| `/shop` | Retail catalog for packaged single-origin beans, gear, and merchandise |
| `/shop-details` | Single product detail page with quantity picker, specs, and related gear |
| `/projects` | Direct-trade farm relationships and sustainable roasting projects |
| `/team` | Master baristas, head roasters, and culinary team directory |
| `/faq` | Frequently asked questions accordion on beans, delivery, and reservations |
| `/blog` | Coffee culture articles, brewing tutorials, and roastery dispatches |
| `/blog-details` | Single article view with reader comments and social sharing |
| `/contact` | Table reservation system, Google Maps embed, phone lines & operating hours |

---

## 📂 Project Structure

```text
aura-brew/
├── public/                 # High-resolution coffee imagery, badges & assets
├── src/
│   ├── app/
│   │   ├── about/          # Roastery story & heritage
│   │   ├── blog/           # Coffee editorial catalog
│   │   ├── blog-details/   # Single blog post & comments
│   │   ├── contact/        # Table booking & inquiries
│   │   ├── faq/            # Interactive FAQ accordion
│   │   ├── menu/           # Complete coffee & bistro menu
│   │   ├── projects/       # Farm partnerships & initiatives
│   │   ├── services/       # Catering & barista workshops
│   │   ├── shop/           # Specialty bean & merchandise store
│   │   ├── shop-details/   # Product details & checkout preview
│   │   ├── team/           # Master baristas directory
│   │   ├── layout.tsx      # Global typography, header, footer & schema
│   │   ├── page.tsx        # Homepage experience
│   │   ├── robots.ts       # Robots.txt generator
│   │   └── sitemap.ts      # Multi-route XML sitemap generator
│   └── components/         # Modular reusable components
│       ├── BookingForm.tsx
│       ├── CoffeeSkills.tsx
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── HeroSlider.tsx
│       ├── MenuCatalog.tsx
│       ├── ShopCatalog.tsx
│       └── ...
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.17.0 or higher
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muhammadsaif7717/aura-brew.git
   cd aura-brew
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development:**
   ```bash
   npm run dev
   ```

4. **Visit the app:**
   Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run start
```

---

## 💡 Engineering Highlights

- **Multi-Route Architecture:** Organized 14 full-featured routes under Next.js App Router for seamless navigation.
- **Rich Visual Identity:** Tailored warm coffee color palette (`#3F271E` espresso brown, `#C59D5F` golden crema) reflecting true third-wave cafe culture.
- **Client-Side Interactivity:** Tabbed filters, instant quantity counters, and modal-free booking interactions that feel native and fast.

---

## 👨‍💻 Author

**Muhammad Saif**
- GitHub: [@muhammadsaif7717](https://github.com/muhammadsaif7717)
- Live Project: [https://aura-brew-omega.vercel.app](https://aura-brew-omega.vercel.app)

---

## 📄 License

This project is licensed under a **Custom Source-Available & Evaluation License**.

- ✅ **Allowed:** You are welcome to clone, download, inspect, and run this application locally for personal learning, evaluation, and educational demonstration purposes.
- ❌ **Prohibited:** You may **not** modify, alter, redistribute, rebrand, or publish this software (in whole or in part) under your own name or for commercial use without explicit prior written authorization from the copyright holder.

See the full [`LICENSE`](./LICENSE) file for legal details.

