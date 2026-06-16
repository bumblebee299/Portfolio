import React, { useEffect, useState } from 'react';

interface CelestialCoreProps {
  scrollProgress: number; // 0 to 1
}

export const CelestialCore: React.FC<CelestialCoreProps> = ({ scrollProgress }) => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = dimensions.width < 768;

  // Easing function for smoother scroll transition (easeInOutQuad)
  const easeProgress = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const t = easeProgress(scrollProgress);

  // Position interpolation
  // Mobile: Center (50%, 35%) -> Top Right (80%, 10%)
  // Desktop: Center (50%, 50%) -> Top Right (82%, 18%)
  const startX = 50;
  const endX = isMobile ? 78 : 82;
  const startY = isMobile ? 38 : 50;
  const endY = isMobile ? 12 : 20;

  const currentX = startX + (endX - startX) * t;
  const currentY = startY + (endY - startY) * t;

  // Scale interpolation
  // Mobile: 0.7 -> 0.32
  // Desktop: 1.0 -> 0.45
  const startScale = isMobile ? 0.75 : 1.0;
  const endScale = isMobile ? 0.35 : 0.55;
  const currentScale = startScale + (endScale - startScale) * t;

  // Rotation interpolation (adds extra spin on scroll)
  const currentRotation = t * 360;

  // Opacity interpolation (becomes slightly more subtle in the background)
  const startOpacity = 0.95;
  const endOpacity = 0.65;
  const currentOpacity = startOpacity + (endOpacity - startOpacity) * t;

  return (
    <div
      className="fixed pointer-events-none z-10 select-none transition-all duration-75 ease-out"
      style={{
        left: `${currentX}%`,
        top: `${currentY}%`,
        transform: `translate(-50%, -50%) scale(${currentScale}) rotate(${currentRotation}deg)`,
        opacity: currentOpacity,
        transformOrigin: 'center center',
      }}
    >
      {/* 3D Perspective container */}
      <div 
        className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
      >
        {/* Core Glow Layer (Large radial background light) */}
        <div className="absolute inset-0 m-auto w-[180px] h-[180px] md:w-[260px] md:h-[260px] bg-radial from-[#00F2FE]/15 via-[#9B51E0]/5 to-transparent rounded-full filter blur-xl animate-pulse-slow -z-10" />

        {/* Central Energy Sphere */}
        <div 
          className="absolute w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-[#9B51E0] via-[#00F2FE] to-[#ffffff] shadow-[0_0_50px_rgba(0,242,254,0.6),_0_0_100px_rgba(155,81,224,0.4),_inset_0_0_20px_rgba(255,255,255,0.6)] animate-pulse-slow flex items-center justify-center"
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Internal core tech details */}
          <div className="w-[85%] h-[85%] rounded-full border border-white/20 border-dashed animate-spin flex items-center justify-center">
            <div className="w-[70%] h-[70%] rounded-full bg-[#0B0F19]/90 border border-[#00F2FE]/30 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[#00F2FE] animate-ping" />
            </div>
          </div>
        </div>

        {/* Ring 1: Inner Orbit (Cyan) - Horizontal/Tilted */}
        <div 
          className="absolute w-[140px] h-[140px] md:w-[200px] md:h-[200px] border-2 border-[#00F2FE]/40 border-dashed rounded-full shadow-[0_0_15px_rgba(0,242,254,0.2)]"
          style={{
            transform: 'rotateX(70deg) rotateY(15deg) translateZ(0px)',
            animation: 'spin 10s linear infinite'
          }}
        >
          {/* Inner orbit particle */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#00F2FE] rounded-full shadow-[0_0_10px_#00F2FE]" />
        </div>

        {/* Ring 2: Middle Orbit (Purple) - Vertical/Tilted */}
        <div 
          className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-[#9B51E0]/50 rounded-full"
          style={{
            transform: 'rotateX(-45deg) rotateY(45deg) translateZ(0px)',
            animation: 'spin 15s linear infinite reverse'
          }}
        >
          {/* Tech markers on the ring */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-2 bg-[#9B51E0] border border-white/40" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-2 bg-[#9B51E0] border border-white/40" />
          {/* Rotating node */}
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_12px_#9B51E0]" />
        </div>

        {/* Ring 3: Outer HUD Grid Ring (White/Cyan Tech Details) */}
        <div 
          className="absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] border-2 border-white/10 rounded-full flex items-center justify-center"
          style={{
            transform: 'rotateX(60deg) rotateY(-20deg) translateZ(0px)',
            animation: 'spin 25s linear infinite'
          }}
        >
          {/* Digital coordinate marks */}
          <div className="absolute w-[102%] h-[102%] border border-dashed border-[#00F2FE]/20 rounded-full" />
          
          {/* Tiny coordinate ticks or labels */}
          <span className="absolute top-0 text-[8px] font-mono text-white/50 tracking-widest" style={{ transform: 'rotateX(-60deg)' }}>SYS.INIT_00</span>
          <span className="absolute bottom-0 text-[8px] font-mono text-white/50 tracking-widest" style={{ transform: 'rotateX(-60deg)' }}>SYS.CORE_01</span>
          <span className="absolute right-0 text-[8px] font-mono text-white/50 tracking-widest" style={{ transform: 'rotateX(-60deg) rotateY(60deg)' }}>E_CORE_SEC</span>
          <span className="absolute left-0 text-[8px] font-mono text-white/50 tracking-widest" style={{ transform: 'rotateX(-60deg) rotateY(-60deg)' }}>GRID_R3</span>
        </div>

        {/* Floating Ambient Energy Particles */}
        <div className="absolute inset-0 animate-float">
          <div className="absolute top-8 left-1/4 w-1.5 h-1.5 bg-[#00F2FE] rounded-full shadow-[0_0_8px_#00F2FE]" />
          <div className="absolute bottom-12 right-1/4 w-2 h-2 bg-[#9B51E0] rounded-full shadow-[0_0_8px_#9B51E0]" />
          <div className="absolute top-1/3 right-12 w-1 h-1 bg-white rounded-full" />
          <div className="absolute bottom-1/3 left-10 w-1.5 h-1.5 bg-[#00F2FE] rounded-full animate-ping" />
        </div>
      </div>
      
      {/* CSS Spin Animation for standard rotate (React inline spins standard rotation) */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
