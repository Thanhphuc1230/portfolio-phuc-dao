# ⚡ Elite Developer & 3D Creator Portfolios

This project contains two production-grade landing pages built with **React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React**:

1. **🎨 Jack — 3D Creator Portfolio Landing Page** (Default Active View)
2. **🚀 Đào Thanh Phúc (Phuc Dao) — Senior Full-Stack Laravel Engineer & DB Specialist**

A floating portfolio switcher in the bottom-right corner allows seamless toggling between both experiences.

---

## 🎨 1. Jack — 3D Creator Portfolio

- **Page Title:** `Jack -- 3D Creator`
- **Global Theme:** `#0C0C0C` Dark Theme with Google Font **Kanit** (weights 300–900).
- **Hero Heading Style:** `.hero-heading` gradient text (`linear-gradient(180deg, #646973 0%, #BBCCD7 100%)`).
- **Main Wrapper:** `overflowX: clip`.

### Sections & Animations:
1. **Hero Section (`HeroSection`):**
   - Full viewport height (`h-screen`) flex layout with `overflowX: clip`.
   - Navbar with 4 links: *"About"*, *"Price"*, *"Projects"*, *"Contact"* (`#D7E2EA`, `font-medium`, uppercase, tracking-wider, `hover:opacity-70`).
   - Massive heading `"Hi, i'm jack"` (`text-[14vw]` to `text-[17.5vw]`).
   - Centered 3D Portrait wrapped in a **Magnet** component (padding 150, strength 3, smooth physics).
   - Bottom bar with manifesto and custom gradient **ContactButton** with inner glow and white outline offset.
2. **Marquee Section (`MarqueeSection`):**
   - 21 motion GIF previews from `motionsites.ai`.
   - Scroll-driven horizontal parallax: Row 1 moves RIGHT, Row 2 moves LEFT.
   - Smooth transform calculation: `(window.scrollY - sectionTop + window.innerHeight) * 0.3`.
3. **About Section (`AboutSection`):**
   - 4 decorative 3D assets positioned in corners with staggered entrance animations.
   - `.hero-heading` "About me".
   - **AnimatedText**: Character-by-character scroll-driven opacity reveal from 0.2 to 1 based on scroll progress.
4. **Services Section (`ServicesSection`):**
   - Contrast white background (`#FFFFFF`) with heavy rounded top corners (`rounded-t-[40px]` to `[60px]`).
   - 5 service items: 01 - 3D Modeling, 02 - Rendering, 03 - Motion Design, 04 - Branding, 05 - Web Design.
   - Huge numbers (`clamp(3rem, 10vw, 140px)`), name, description, and subtle divider borders.
5. **Projects Section (`ProjectsSection`):**
   - Dark background (`#0C0C0C`) with rounded top corners pulled upward.
   - **3 Sticky-Stacking Project Cards** utilizing Framer Motion `useScroll` & `useTransform`:
     - 01 - Nextlevel Studio (Client)
     - 02 - Aura Brand Identity (Personal)
     - 03 - Solaris Digital (Client)
   - Multi-image grid with `rounded-[40px]` to `[60px]` and **LiveProjectButton** ghost pills.

---

## 🛠️ Reusable Interactive Components

- [`ContactButton`](file:///d:/laragon/www/php-8.2/portfolio-phuc-dao/src/jack/components/ContactButton.tsx) — Pill button with radial gradient, inner inset shadow, and outline offset.
- [`LiveProjectButton`](file:///d:/laragon/www/php-8.2/portfolio-phuc-dao/src/jack/components/LiveProjectButton.tsx) — Outline ghost button with hover state.
- [`FadeIn`](file:///d:/laragon/www/php-8.2/portfolio-phuc-dao/src/jack/components/FadeIn.tsx) — Dynamic Framer Motion scroll entrance wrapper.
- [`Magnet`](file:///d:/laragon/www/php-8.2/portfolio-phuc-dao/src/jack/components/Magnet.tsx) — Physics-based mouse follower.
- [`AnimatedText`](file:///d:/laragon/www/php-8.2/portfolio-phuc-dao/src/jack/components/AnimatedText.tsx) — Scroll-linked character opacity reveal.

---

## 🚀 Running the Project

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# -> http://localhost:5173

# 3. Build production bundle
npm run build

# 4. Laragon / Apache Server
# -> Simply open http://portfolio-phuc-dao.test
```
