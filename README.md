# 🪐 Shrawan Kumar | Cosmic Space-Anime Portfolio

An immersive, high-performance developer portfolio built with a custom **Sleek Dark Space** theme fused with a **High-End Sci-Fi/Anime HUD** aesthetic. Optimized for desktop and mobile layouts, the page features a scroll-driven holographic energy core and kinetic inertia scrolling.

🚀 **Live Preview:** Run locally at `http://localhost:5173/`

---

## 🎨 Visual Theme & Philosophy

- **Background Palette:** Deep interstellar space (`#0B0F19`) overlaid with a micro-grid scanline network.
- **Nebular Accent Highlights:** Glowing cyans (`#00F2FE`), electric purples (`#9B51E0`), and stark white metrics.
- **Central Core Construct:** A floating 3D/CSS celestial core orbiting at the viewport's center, easing into a persistent, shrinking top-right HUD indicator as the scroll progress advances.
- **Motion Profile:** Custom `cubic-bezier(0.25, 1, 0.5, 1)` transition reveals mapped directly onto viewport intersection triggers.

---

## 🛠️ Technical Stack

- **Core Engine:** React 19 (TypeScript)
- **Bundler:** Vite 6
- **Styling Pipeline:** Tailwind CSS v4
- **Scroll Physics:** Lenis (Kinetic Smooth Scroll)
- **Icon Set:** Lucide React & custom optimized inline SVGs

---

## 📁 Architecture Breakdown

```
shrawan-portfolio/
├── index.html                  # Core HTML structure & SEO Meta Tags
├── vite.config.ts              # Vite + Tailwind compilation configs
├── src/
│   ├── main.tsx                # Client boot entrypoint
│   ├── App.tsx                 # Core Scroll-loop listener & coordinate state manager
│   ├── index.css               # Tailwind directives, animations & custom scrollbars
│   └── components/
│       ├── Navbar.tsx          # HUD digital header & reading progress indicator
│       ├── Starfield.tsx       # HTML5 Canvas background star drift & scroll velocity boost
│       ├── CelestialCore.tsx   # 3D holographic concentric energy rings
│       ├── ScrollReveal.tsx    # Intersection Observer cubic-bezier reveal driver
│       ├── Hero.tsx            # Digital system panels & main headlines
│       ├── AboutSkills.tsx     # Retro interactive terminal + glassy matrix cards
│       ├── Projects.tsx        # Simulated MovieBox dashboard console
│       └── Contact.tsx         # Transmit communications form & uptime monitor
```

---

## 💻 Local Setup & Execution

Ensure you have [Node.js](https://nodejs.org/) (v18+) installed on your machine.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bumblebee299/Portfolio.git
   cd Portfolio
   ```

2. **Install all workspace dependencies:**
   ```bash
   npm install
   ```

3. **Initialize the local Vite dev server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Compile the production-ready client bundle:**
   ```bash
   npm run build
   ```

---

## 🛸 System Diagnostics Readout

```ini
[STATUS]        ONLINE & STABLE (60/120 FPS)
[INTERFERENCE]  0% (Hardware accelerated transforms)
[VIEWPORT]      Dynamic layout grid (Desktop / Mobile responsive)
[UPTIME]        100% active state
```
