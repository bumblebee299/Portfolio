import React from 'react';
import { Radio, Cpu, Network } from 'lucide-react';

interface HeroProps {
  scrollProgress: number;
}

export const Hero: React.FC<HeroProps> = ({ scrollProgress }) => {
  
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fade out hero text as we scroll down
  const opacity = Math.max(0, 1 - scrollProgress * 2.5);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 md:px-12 py-24 select-none overflow-hidden bg-grid-pattern"
      style={{ opacity }}
    >
      {/* Decorative scanline overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-transparent to-[#0B0F19] pointer-events-none z-0" />
      
      {/* TOP DECORATIVE HUD LINE */}
      <div className="w-full max-w-7xl flex justify-between items-center border-b border-white/10 pb-4 text-[10px] font-mono tracking-[0.25em] text-white/40 z-20 mt-6">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-ping" />
          <span>SYSTEM_STATUS: OK // COGNITIVE_DRIVE: LOADED</span>
        </div>
        <div className="hidden sm:block">
          <span>COORDINATES: 27° 11' N / 78° 01' E</span>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="w-full max-w-7xl flex-1 flex flex-col md:flex-row justify-between items-center md:items-stretch py-12 md:py-24 z-20 relative">
        
        {/* Left HUD Panel */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left mb-16 md:mb-0 max-w-lg">
          <div className="inline-flex items-center space-x-2 bg-[#00F2FE]/5 border border-[#00F2FE]/20 px-3 py-1 rounded-full self-center md:self-start mb-6">
            <Radio size={12} className="text-[#00F2FE] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-[#00F2FE] uppercase font-bold">
              Full-Stack Developer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-orbitron tracking-tight leading-none mb-4 uppercase">
            Shrawan <br />
            <span className="bg-gradient-to-r from-[#00F2FE] via-[#9B51E0] to-[#ffffff] bg-clip-text text-transparent glow-cyan">
              Kumar
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/70 max-w-md font-sans mb-8 leading-relaxed">
            Computer Science Student & Full-Stack Developer specializing in building high-performance, visually stunning web environments and robust engineering systems.
          </p>

          {/* Action triggers */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start font-mono text-xs">
            <button 
              onClick={scrollToAbout}
              className="px-6 py-3 bg-gradient-to-r from-[#00F2FE] to-[#9B51E0] hover:from-[#9B51E0] hover:to-[#00F2FE] font-bold text-white tracking-widest rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(155,81,224,0.5)] cursor-pointer"
            >
              INITIALIZE_SYSTEM()
            </button>
            <a 
              href="#contact"
              className="px-6 py-3 border border-white/20 hover:border-[#00F2FE] text-white hover:text-[#00F2FE] tracking-widest rounded-sm transition-all duration-300 bg-[#0B0F19]/50 cursor-pointer"
            >
              GET_IN_TOUCH
            </a>
          </div>
        </div>

        {/* Space for the Central core (Desktop: middle gap, Mobile: sits overlay) */}
        <div className="w-[250px] md:w-[350px] flex items-center justify-center pointer-events-none" />

        {/* Right HUD Panel */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-end text-center md:text-right max-w-lg font-mono">
          <div className="space-y-6 max-w-xs md:max-w-none">
            
            {/* Tech Readout 1 */}
            <div className="border border-white/5 bg-[#0B0F19]/40 backdrop-blur-sm p-4 rounded border-glow-purple max-w-[280px]">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 text-[#9B51E0]">
                <span className="text-[10px] tracking-widest uppercase font-bold">Core Modules</span>
                <Cpu size={14} />
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed">
                React, TypeScript, C++, Python, Tailwind v4
              </p>
            </div>

            {/* Tech Readout 2 */}
            <div className="border border-white/5 bg-[#0B0F19]/40 backdrop-blur-sm p-4 rounded border-glow-cyan max-w-[280px]">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 text-[#00F2FE]">
                <span className="text-[10px] tracking-widest uppercase font-bold">Active Protocol</span>
                <Network size={14} />
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed">
                Immersive scroll-driven architecture, CSS 3D constructs, hardware-accelerated animations
              </p>
            </div>

            {/* Diagnostics */}
            <div className="text-[9px] text-white/30 space-y-1">
              <div>ENGINE_SPEED: 60FPS / STABLE</div>
              <div>RENDERER: WEBGL_CANVAS_STARFIELD</div>
              <div>UI_ACCENT: CYAN_GLOW & PURPLE_GLOW</div>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM DECORATIVE FOOTER & SCROLL PROMPT */}
      <div className="w-full max-w-7xl flex flex-col items-center justify-center z-20">
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center text-white/40 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase mb-2">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1 group-hover:border-[#00F2FE]/60 group-hover:shadow-[0_0_10px_rgba(0,242,254,0.2)] transition-all">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-1 group-hover:bg-[#00F2FE]" />
          </div>
        </button>
      </div>

    </section>
  );
};
