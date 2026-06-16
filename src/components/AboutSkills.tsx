import React, { useState } from 'react';
import { Terminal, Code, Cpu, Database, Award, CheckCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AboutSkills: React.FC = () => {
  const [terminalTab, setTerminalTab] = useState<'bio' | 'sys'>('bio');

  const skills = {
    languages: [
      { name: 'C++', level: '90%', desc: 'Competitive programming & DSA' },
      { name: 'Java', level: '85%', desc: 'OOP, Backend architectures' },
      { name: 'Python', level: '80%', desc: 'Scripting, Automation, AI/ML' },
      { name: 'SQL', level: '85%', desc: 'Query design, RDBMS optimization' },
    ],
    web: [
      { name: 'React', level: '92%', desc: 'SPA, Hooks, Context, State mgmt' },
      { name: 'Tailwind CSS', level: '95%', desc: 'Utility-first, responsive, v4 config' },
      { name: 'JavaScript (ES6+)', level: '90%', desc: 'Asynchronous, DOM, core engines' },
      { name: 'TypeScript', level: '85%', desc: 'Strong typing, scalable code' },
    ],
    infrastructure: [
      { name: 'Git & GitHub', level: '88%' },
      { name: 'Node.js / Express', level: '80%' },
      { name: 'MongoDB / PostgreSQL', level: '75%' },
    ]
  };

  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-12 py-24 bg-[#0B0F19]"
    >
      {/* Decorative background grid elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#9B51E0]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-[#00F2FE]/5 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="w-full max-w-7xl z-20">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-16 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 font-mono text-xs text-[#00F2FE] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
              <span>LOG_01 // BIO_DATA & TECHNICAL_MATRIX</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron tracking-tight text-white uppercase">
              About & <span className="bg-gradient-to-r from-[#00F2FE] to-[#9B51E0] bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#00F2FE] to-[#9B51E0] mt-4 mx-auto md:mx-0 shadow-[0_0_8px_#00F2FE]" />
          </div>
        </ScrollReveal>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT COLUMN: BIO & TERMINAL */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ScrollReveal className="flex-1 flex flex-col justify-between">
              <div>
                <p className="text-white/80 leading-relaxed mb-6">
                  I'm a computer science student driven by the challenge of creating highly optimized backend logic combined with breathtaking frontend interfaces. I specialize in designing and engineering custom system systems from scratch, always optimizing for performance, semantic standards, and seamless user experiences.
                </p>
                <p className="text-white/60 leading-relaxed mb-8">
                  My work focuses heavily on clean interfaces, smooth animations, and type-safe systems, bridging the gap between elegant UI designs and powerful logic engines.
                </p>
              </div>

              {/* Retro HUD Terminal Mockup */}
              <div className="border border-white/10 rounded bg-[#0B0F19]/60 backdrop-blur-md overflow-hidden shadow-2xl border-glow-purple flex-1 flex flex-col min-h-[300px]">
                {/* Terminal Header */}
                <div className="flex items-center justify-between bg-white/5 px-4 py-2.5 border-b border-white/10 font-mono text-xs text-white/50">
                  <div className="flex items-center space-x-2">
                    <Terminal size={14} className="text-[#9B51E0]" />
                    <span className="text-[10px] tracking-widest uppercase">SHRAWAN_SYS_SHELL</span>
                  </div>
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-white/5 bg-[#0B0F19]/40 font-mono text-[10px] tracking-wider text-white/40">
                  <button 
                    onClick={() => setTerminalTab('bio')}
                    className={`px-4 py-2 border-r border-white/5 hover:bg-white/5 hover:text-white transition-colors cursor-pointer ${
                      terminalTab === 'bio' ? 'bg-white/5 text-[#00F2FE]' : ''
                    }`}
                  >
                    cat info.json
                  </button>
                  <button 
                    onClick={() => setTerminalTab('sys')}
                    className={`px-4 py-2 border-r border-white/5 hover:bg-white/5 hover:text-white transition-colors cursor-pointer ${
                      terminalTab === 'sys' ? 'bg-white/5 text-[#9B51E0]' : ''
                    }`}
                  >
                    system_diagnostics.sh
                  </button>
                </div>

                {/* Terminal Content */}
                <div className="p-4 font-mono text-xs flex-1 flex flex-col justify-between bg-[#05070c]">
                  {terminalTab === 'bio' ? (
                    <div className="space-y-2 text-white/70">
                      <div className="text-white/40 font-semibold">$ cat info.json</div>
                      <pre className="text-[#00F2FE] text-[11px] overflow-x-auto leading-relaxed">
{`{
  "name": "Shrawan Kumar",
  "status": "CS Student & Developer",
  "specialties": [
    "Systems Architecture",
    "Creative Web Development",
    "OOP & Algorithms"
  ],
  "interests": [
    "Anime Science-Fiction",
    "Nebular Cosmos Theories",
    "Interactive UI/UX Design"
  ]
}`}
                      </pre>
                    </div>
                  ) : (
                    <div className="space-y-2 text-white/70">
                      <div className="text-white/40 font-semibold">$ ./system_diagnostics.sh</div>
                      <div className="text-green-400 text-[10px] space-y-1">
                        <div>[OK] CPU temperature: Stable</div>
                        <div>[OK] Tailwind V4 Integration: Verified</div>
                        <div>[OK] Kinetic Inertia Engine: Lenis active</div>
                        <div>[OK] Holographic Core: Orbiting active</div>
                        <div className="text-[#9B51E0] animate-pulse mt-2">&gt; System ready for new connections.</div>
                      </div>
                    </div>
                  )}
                  <div className="text-white/30 text-[9px] border-t border-white/5 pt-2 mt-4 flex items-center justify-between">
                    <span>IP: 192.168.1.104</span>
                    <span>PORT: 3000</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: TECHNICAL MATRIX */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* LANGUAGES MATRIX CARD */}
            <ScrollReveal delay={100}>
              <div className="border border-white/5 bg-[#0B0F19]/40 backdrop-blur-md rounded p-6 shadow-xl border-glow-cyan hover:border-[#00F2FE]/40 transition-all duration-300 group">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#00F2FE]/10 rounded border border-[#00F2FE]/20">
                    <Code className="text-[#00F2FE] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold tracking-wider text-white text-base">
                      CORE LANGUAGES
                    </h3>
                    <p className="text-[9px] font-mono text-white/40">COMPILER_&_DATABASE_MATRIX</p>
                  </div>
                </div>
                
                <div className="space-y-5">
                  {skills.languages.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-baseline">
                        <span className="font-mono text-xs font-bold text-white group-hover:text-[#00F2FE] transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-white/50">{skill.desc}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#00F2FE] to-[#9B51E0] rounded-full shadow-[0_0_8px_#00F2FE] transition-all duration-1000 ease-out" 
                          style={{ width: skill.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* WEB TECHNOLOGIES matrix CARD */}
            <ScrollReveal delay={200}>
              <div className="border border-white/5 bg-[#0B0F19]/40 backdrop-blur-md rounded p-6 shadow-xl border-glow-purple hover:border-[#9B51E0]/40 transition-all duration-300 group">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#9B51E0]/10 rounded border border-[#9B51E0]/20">
                    <Cpu className="text-[#9B51E0] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold tracking-wider text-white text-base">
                      WEB TECHNOLOGIES
                    </h3>
                    <p className="text-[9px] font-mono text-white/40">APPLICATION_FRAMEWORKS_&_DOM_ENGINES</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {skills.web.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-baseline">
                        <span className="font-mono text-xs font-bold text-white group-hover:text-[#9B51E0] transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-white/50">{skill.desc}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#9B51E0] to-[#00F2FE] rounded-full shadow-[0_0_8px_#9B51E0] transition-all duration-1000 ease-out" 
                          style={{ width: skill.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* ADDITIONAL MATRIX ITEMS */}
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Database & Infra */}
                <div className="border border-white/5 bg-[#0B0F19]/40 backdrop-blur-md rounded p-4 border-glow-cyan hover:border-[#00F2FE]/20 transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-3 text-[#00F2FE]">
                    <Database size={16} />
                    <span className="font-orbitron font-semibold text-xs tracking-wider uppercase text-white">Database & Git</span>
                  </div>
                  <div className="space-y-2">
                    {skills.infrastructure.map((skill) => (
                      <div key={skill.name} className="flex justify-between items-center text-[11px] font-mono">
                        <span className="text-white/70">{skill.name}</span>
                        <span className="text-[#00F2FE]">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications/Highlights */}
                <div className="border border-white/5 bg-[#0B0F19]/40 backdrop-blur-md rounded p-4 border-glow-purple hover:border-[#9B51E0]/20 transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-3 text-[#9B51E0]">
                    <Award size={16} />
                    <span className="font-orbitron font-semibold text-xs tracking-wider uppercase text-white">AWARDS & FOCUS</span>
                  </div>
                  <ul className="space-y-1.5 text-[10px] font-mono text-white/60">
                    <li className="flex items-center space-x-1">
                      <CheckCircle size={10} className="text-green-400" />
                      <span>Data Structures & Algorithmic Excellence</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <CheckCircle size={10} className="text-green-400" />
                      <span>Clean Code Architecture Paradigms</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <CheckCircle size={10} className="text-green-400" />
                      <span>Creative UI and Web GL Animations</span>
                    </li>
                  </ul>
                </div>

              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
