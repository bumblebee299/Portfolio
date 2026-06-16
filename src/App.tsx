import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSkills } from './components/AboutSkills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { CelestialCore } from './components/CelestialCore';
import { Starfield } from './components/Starfield';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential easing
      smoothWheel: true,
    });

    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
      setProgressPercent(pct);
    };

    // Initialize positions
    handleScroll();

    lenis.on('scroll', handleScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.off('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  // Calculate transition progress for the CelestialCore
  // It transitions from scroll Y = 0 to scroll Y = 650 (approx viewport transition phase)
  const celestialProgress = Math.min(1, Math.max(0, scrollY / 650));

  return (
    <div className="relative min-h-screen text-white bg-[#0B0F19]">
      {/* Background Interactive Starfield */}
      <Starfield />

      {/* Persistent Floating 3D/CSS Energy Core */}
      <CelestialCore scrollProgress={celestialProgress} />

      {/* Navigation HUD header */}
      <Navbar scrollProgress={progressPercent} />

      {/* Page Sections */}
      <main className="relative z-20">
        <Hero scrollProgress={celestialProgress} />
        <AboutSkills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
