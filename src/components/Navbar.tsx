import React, { useEffect, useState } from 'react';

interface NavbarProps {
  scrollProgress: number; // 0 to 100
}

export const Navbar: React.FC<NavbarProps> = ({ scrollProgress }) => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // Offset
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5 scanline-effect">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand/Logo */}
        <div 
          onClick={() => scrollTo('hero')} 
          className="flex items-center space-x-2 cursor-pointer font-orbitron group select-none"
        >
          <span className="text-sm font-semibold tracking-wider text-white">
            SHRAWAN
          </span>
          <span className="text-[#00F2FE] text-xs font-bold px-1.5 py-0.5 rounded border border-[#00F2FE]/30 bg-[#00F2FE]/10 group-hover:shadow-[0_0_10px_#00F2FE] transition-all duration-300">
            SYS.v1.0
          </span>
        </div>

        {/* HUD Nav Links */}
        <div className="hidden md:flex items-center space-x-8 font-mono text-xs tracking-widest text-white/70">
          {[
            { id: 'hero', num: '00', label: 'HERO' },
            { id: 'about', num: '01', label: 'ABOUT & SKILLS' },
            { id: 'projects', num: '02', label: 'PROJECTS' },
            { id: 'contact', num: '03', label: 'CONTACT' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex items-center space-x-1 hover:text-white transition-colors py-2 group relative cursor-pointer ${
                activeSection === item.id ? 'text-[#00F2FE]' : ''
              }`}
            >
              <span className="text-[10px] opacity-40 group-hover:text-[#00F2FE]">{item.num}</span>
              <span>[{item.label}]</span>
              
              {/* Active Underline */}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#00F2FE] to-[#9B51E0] shadow-[0_0_8px_#00F2FE]" />
              )}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-4 py-1.5 rounded-sm border border-[#9B51E0]/50 bg-[#9B51E0]/10 hover:bg-[#9B51E0]/20 hover:border-[#9B51E0] hover:shadow-[0_0_15px_rgba(155,81,224,0.4)] text-xs font-mono tracking-wider transition-all duration-300 text-[#ffffff] cursor-pointer"
          >
            SYS.CONNECT();
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div 
        className="h-[2px] bg-gradient-to-r from-[#00F2FE] via-[#9B51E0] to-[#00F2FE] transition-all duration-75 shadow-[0_0_10px_#00F2FE]"
        style={{ width: `${scrollProgress}%` }}
      />
    </nav>
  );
};
