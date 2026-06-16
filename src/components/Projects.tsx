import React, { useState } from 'react';
import { Play, Star, Film, ExternalLink, Monitor, Search, Layers, Heart } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'trending'>('all');

  const simulatedMovies = [
    {
      title: "Chrono Drift: Nebula",
      genre: "Anime / Sci-Fi",
      rating: 9.3,
      year: 2026,
      image: "linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)",
      desc: "A timeless pilot travels across nebular coordinates to save a collapsing space colony."
    },
    {
      title: "Synthesized Heart",
      genre: "Cyberpunk / Romance",
      rating: 8.9,
      year: 2025,
      image: "linear-gradient(135deg, #9B51E0 0%, #E0C3FC 100%)",
      desc: "An android engineer falls for their AI constructs as the system triggers a memory reset."
    },
    {
      title: "Solar Odyssey",
      genre: "Space Mecha / Action",
      rating: 9.1,
      year: 2026,
      image: "linear-gradient(135deg, #FAD961 0%, #F76B1C 100%)",
      desc: "Armored space fleets engage in strategic warfare around the rings of Saturn."
    }
  ];

  const filteredMovies = simulatedMovies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section 
      id="projects" 
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-12 py-24 bg-[#0B0F19]"
    >
      {/* Background gradients */}
      <div className="absolute left-1/4 top-1/3 w-[500px] h-[500px] bg-[#00F2FE]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/3 w-[500px] h-[500px] bg-[#9B51E0]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl z-20">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-16 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 font-mono text-xs text-[#9B51E0] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#9B51E0] animate-pulse" />
              <span>LOG_02 // SYSTEM_BUILD_REPOSITORY</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron tracking-tight text-white uppercase">
              Featured <span className="bg-gradient-to-r from-[#9B51E0] to-[#00F2FE] bg-clip-text text-transparent">Project</span>
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#9B51E0] to-[#00F2FE] mt-4 mx-auto md:mx-0 shadow-[0_0_8px_#9B51E0]" />
          </div>
        </ScrollReveal>

        {/* Project Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Project Details */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <div className="inline-flex space-x-2 font-mono text-[10px] tracking-widest text-[#00F2FE] uppercase border border-[#00F2FE]/30 bg-[#00F2FE]/10 px-2 py-1 rounded">
                <Film size={12} />
                <span>SIGNATURE APPLICATION</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold font-orbitron text-white mt-3">
                MovieBox
              </h3>
              <p className="text-white/80 leading-relaxed text-sm md:text-base mt-4">
                MovieBox is a high-performance cinematic exploration database. It empowers cinephiles to query details on millions of releases, read community critical metrics, watch movie trailers, and curate localized favorite list systems in a beautiful, dark-themed responsive app.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {['React', 'Tailwind CSS', 'TypeScript', 'TMDB API', 'Axios', 'Lucide'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-2.5 py-1 text-[10px] font-mono border border-white/10 bg-white/5 rounded text-white/80 hover:border-[#00F2FE]/30 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Showcase highlights */}
              <div className="border-l-2 border-[#9B51E0] pl-4 space-y-2 mt-6">
                <p className="text-xs font-mono text-white/50">KEY ARCHITECTURAL HIGHLIGHTS:</p>
                <ul className="text-xs text-white/70 space-y-1">
                  <li>• Asynchronous API routing with custom polling decay.</li>
                  <li>• Optimized card grids featuring modular search query filtering.</li>
                  <li>• Micro-responsive local storage mechanisms for watchlist caching.</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6 font-mono text-xs">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-5 py-3 border border-white/10 bg-white/5 hover:bg-[#00F2FE]/10 hover:border-[#00F2FE] rounded transition-all duration-300 group hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] text-white cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#00F2FE] transition-colors w-[14px] h-[14px]"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  <span>VIEW_REPOSIT_CODE</span>
                </a>
                <a 
                  href="https://demo.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-[#9B51E0] to-[#00F2FE] hover:from-[#00F2FE] hover:to-[#9B51E0] rounded text-white font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,81,224,0.4)] cursor-pointer"
                >
                  <ExternalLink size={14} />
                  <span>DEPLOY_LIVE_LINK</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: Slick Mock Frame */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={150}>
              
              {/* Outer monitor cabinet frame */}
              <div className="relative border border-white/10 rounded-lg bg-[#05070c] p-1.5 shadow-[0_0_40px_rgba(155,81,224,0.15)] border-glow-purple group hover:border-[#9B51E0]/50 transition-all duration-300">
                
                {/* HUD Top Bar details */}
                <div className="flex items-center justify-between px-3 py-1 bg-white/5 rounded-t text-[8px] font-mono text-white/40 border-b border-white/5">
                  <div className="flex items-center space-x-1.5">
                    <Monitor size={10} className="text-[#00F2FE]" />
                    <span>SIMULATED_INTERFACE: MOVIEBOX // CORE.SYS</span>
                  </div>
                  <span>LATENCY: STABLE_2ms</span>
                </div>

                {/* Dashboard Frame Container */}
                <div className="bg-[#0B0F19] p-4 rounded-b min-h-[360px] flex flex-col font-sans select-none relative overflow-hidden scanline-effect">
                  
                  {/* Dashboard Header inside mock */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                    <div className="flex items-center space-x-1 font-orbitron text-xs font-bold text-white tracking-widest">
                      <Film size={12} className="text-[#9B51E0]" />
                      <span>MOVIE<span className="text-[#00F2FE]">BOX</span></span>
                    </div>

                    {/* Search Mock */}
                    <div className="relative w-40 sm:w-48">
                      <input 
                        type="text"
                        placeholder="Search simulated..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded px-2.5 py-1 pl-7 text-[10px] text-white focus:outline-none focus:border-[#00F2FE] font-mono transition-colors"
                      />
                      <Search size={10} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40" />
                    </div>
                  </div>

                  {/* Filters within mockup */}
                  <div className="flex space-x-3 mb-4 text-[9px] font-mono">
                    <button 
                      onClick={() => setActiveTab('all')}
                      className={`px-2 py-0.5 border rounded-sm transition-colors cursor-pointer ${
                        activeTab === 'all' 
                          ? 'border-[#00F2FE]/50 text-[#00F2FE] bg-[#00F2FE]/5' 
                          : 'border-white/5 text-white/50 hover:text-white'
                      }`}
                    >
                      ALL_SHOWS
                    </button>
                    <button 
                      onClick={() => setActiveTab('trending')}
                      className={`px-2 py-0.5 border rounded-sm transition-colors cursor-pointer ${
                        activeTab === 'trending' 
                          ? 'border-[#00F2FE]/50 text-[#00F2FE] bg-[#00F2FE]/5' 
                          : 'border-white/5 text-white/50 hover:text-white'
                      }`}
                    >
                      TRENDING
                    </button>
                  </div>

                  {/* Movie Cards Inside Mock */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
                    {filteredMovies.length > 0 ? (
                      filteredMovies.map((movie, index) => (
                        <div 
                          key={index}
                          className="border border-white/5 bg-white/2 rounded overflow-hidden flex flex-col justify-between hover:border-[#00F2FE]/30 transition-all duration-300 group/card relative"
                        >
                          {/* Simulated Poster Image Gradient */}
                          <div 
                            className="h-28 flex items-center justify-center p-3 relative"
                            style={{ background: movie.image }}
                          >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover/card:bg-black/10 transition-colors" />
                            
                            {/* Tech HUD circles inside card */}
                            <div className="absolute top-1.5 right-1.5 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded flex items-center space-x-1 text-[8px] font-mono text-[#00F2FE]">
                              <Star size={8} className="fill-[#00F2FE]" />
                              <span>{movie.rating}</span>
                            </div>

                            {/* Center Play Button Overlay */}
                            <div className="opacity-0 group-hover/card:opacity-100 transition-opacity absolute w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 cursor-pointer scale-90 group-hover/card:scale-100 duration-300">
                              <Play size={10} className="text-white fill-white ml-0.5" />
                            </div>
                          </div>

                          {/* Info */}
                          <div className="p-2.5 flex-1 flex flex-col justify-between bg-black/20">
                            <div>
                              <div className="text-[10px] font-mono text-[#00F2FE]">{movie.genre}</div>
                              <h4 className="text-[11px] font-bold text-white leading-tight mt-0.5 truncate group-hover/card:text-[#00F2FE] transition-colors">
                                {movie.title}
                              </h4>
                            </div>
                            <div className="flex items-center justify-between text-[9px] font-mono text-white/40 mt-2">
                              <span>YEAR: {movie.year}</span>
                              <Heart size={8} className="hover:text-red-500 cursor-pointer hover:fill-red-500 transition-all" />
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-3 flex flex-col items-center justify-center text-white/30 font-mono text-[10px] py-16">
                        <Layers className="mb-2 animate-bounce" size={16} />
                        <span>NO_RECORDS_MATCHING_QUERY</span>
                      </div>
                    )}
                  </div>

                  {/* HUD Bottom status inside mock */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-4 text-[8px] font-mono text-white/30">
                    <span>DATABASE: CONNECTION_SECURE</span>
                    <span>ACTIVE_INDEX: 3 ITEMS</span>
                  </div>

                </div>

              </div>

            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
