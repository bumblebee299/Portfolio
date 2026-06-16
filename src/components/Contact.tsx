import React, { useState } from 'react';
import { Mail, Send, Compass, Cpu, Clock, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success notification after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="contact" 
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 md:px-12 pt-24 pb-12 bg-[#0B0F19] border-t border-white/5 bg-grid-pattern"
    >
      {/* Glow highlight */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#9B51E0]/5 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="w-full max-w-7xl z-20 flex-1 flex flex-col justify-center">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-16 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 font-mono text-xs text-[#00F2FE] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
              <span>LOG_03 // COMMUNICATIONS_DECK</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron tracking-tight text-white uppercase">
              Contact <span className="bg-gradient-to-r from-[#00F2FE] to-[#9B51E0] bg-clip-text text-transparent">Signals</span>
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#00F2FE] to-[#9B51E0] mt-4 mx-auto md:mx-0 shadow-[0_0_8px_#00F2FE]" />
          </div>
        </ScrollReveal>

        {/* Two Column Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-6">
          
          {/* LEFT COLUMN: Transmission Form */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="border border-white/5 bg-[#0B0F19]/40 backdrop-blur-md rounded p-6 shadow-xl border-glow-cyan">
                <div className="flex items-center space-x-2 mb-6 font-mono text-xs text-white/50 border-b border-white/5 pb-3">
                  <Send size={12} className="text-[#00F2FE]" />
                  <span>TRANSMIT_MESSAGE_PACKET.sh</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono tracking-widest text-white/50 uppercase">Sender Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="NAME_REQUIRED" 
                      className="w-full bg-[#0B0F19]/60 border border-white/10 rounded px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#00F2FE] focus:shadow-[0_0_10px_rgba(0,242,254,0.15)] font-mono transition-all duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono tracking-widest text-white/50 uppercase">Sender Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="EMAIL_REQUIRED" 
                      className="w-full bg-[#0B0F19]/60 border border-white/10 rounded px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#00F2FE] focus:shadow-[0_0_10px_rgba(0,242,254,0.15)] font-mono transition-all duration-300"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono tracking-widest text-white/50 uppercase">Packet Payload (Message)</label>
                    <textarea 
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="TRANSMIT_CONTENTS_..." 
                      className="w-full bg-[#0B0F19]/60 border border-white/10 rounded px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#00F2FE] focus:shadow-[0_0_10px_rgba(0,242,254,0.15)] font-mono transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-2">
                    {/* Status Feedback */}
                    <div className="text-[10px] font-mono">
                      {isSubmitting && <span className="text-[#00F2FE] animate-pulse">&gt; UPLOADING_PACKET...</span>}
                      {submitSuccess && (
                        <span className="text-green-400 flex items-center space-x-1">
                          <Check size={12} />
                          <span>&gt; TRANSMISSION_ACKNOWLEDGED</span>
                        </span>
                      )}
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#00F2FE] to-[#9B51E0] hover:from-[#9B51E0] hover:to-[#00F2FE] font-bold text-white font-mono tracking-widest rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.2)] hover:shadow-[0_0_25px_rgba(155,81,224,0.4)] disabled:opacity-50 cursor-pointer text-xs"
                    >
                      <span>SEND_SIGNAL()</span>
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: Coordinates & Social Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <ScrollReveal delay={150}>
              <div className="border border-white/5 bg-[#0B0F19]/40 backdrop-blur-md rounded p-6 shadow-xl border-glow-purple space-y-6">
                
                <div className="flex items-center space-x-2 font-mono text-xs text-white/50 border-b border-white/5 pb-3">
                  <Compass size={12} className="text-[#9B51E0]" />
                  <span>TRANSMISSION_COORDINATES</span>
                </div>

                <div className="space-y-4">
                  
                  {/* Email link */}
                  <a 
                    href="mailto:shrawankumar@example.com" 
                    className="flex items-center space-x-4 p-3 border border-white/5 rounded bg-black/10 hover:border-[#00F2FE] hover:shadow-[0_0_10px_rgba(0,242,254,0.1)] transition-all group"
                  >
                    <div className="p-2.5 bg-[#00F2FE]/10 rounded border border-[#00F2FE]/20 group-hover:bg-[#00F2FE]/20 transition-colors">
                      <Mail className="text-[#00F2FE] w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-white/40">DIRECT_EMAIL_LINK</div>
                      <div className="text-xs font-mono text-white group-hover:text-[#00F2FE] transition-colors">
                        shrawan.kumar@example.com
                      </div>
                    </div>
                  </a>

                  {/* GitHub link */}
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-4 p-3 border border-white/5 rounded bg-black/10 hover:border-[#9B51E0] hover:shadow-[0_0_10px_rgba(155,81,224,0.1)] transition-all group"
                  >
                    <div className="p-2.5 bg-[#9B51E0]/10 rounded border border-[#9B51E0]/20 group-hover:bg-[#9B51E0]/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9B51E0] w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-white/40">GITHUB_SOURCE_CONTROL</div>
                      <div className="text-xs font-mono text-white group-hover:text-[#9B51E0] transition-colors">
                        github.com/shrawankumar
                      </div>
                    </div>
                  </a>

                  {/* LinkedIn link */}
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-4 p-3 border border-white/5 rounded bg-black/10 hover:border-[#00F2FE] hover:shadow-[0_0_10px_rgba(0,242,254,0.1)] transition-all group"
                  >
                    <div className="p-2.5 bg-[#00F2FE]/10 rounded border border-[#00F2FE]/20 group-hover:bg-[#00F2FE]/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00F2FE] w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-white/40">PROFESSIONAL_NETWORKING</div>
                      <div className="text-xs font-mono text-white group-hover:text-[#00F2FE] transition-colors">
                        linkedin.com/in/shrawankumar
                      </div>
                    </div>
                  </a>

                </div>

                {/* Diagnostics panel */}
                <div className="border border-white/5 bg-black/30 p-4 rounded text-[10px] font-mono text-white/50 space-y-2">
                  <div className="flex justify-between items-center text-[#9B51E0]">
                    <span className="flex items-center space-x-1.5">
                      <Clock size={10} />
                      <span>Uptime Diagnostics</span>
                    </span>
                    <span>ACTIVE</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[9px] text-white/40 border-t border-white/5 pt-2">
                    <div>PORT: 8080</div>
                    <div>STATUS: LISTENING</div>
                    <div>ENCRYPTION: TLS_1.3</div>
                    <div>PING: 14ms</div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>

      {/* FOOTER METADATA */}
      <div className="w-full max-w-7xl border-t border-white/5 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-white/30 z-20">
        <div>
          <span>© {currentYear} SHRAWAN_KUMAR // DESIGNED_IN_ORBIT</span>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="flex items-center space-x-1 text-[#00F2FE]">
            <Cpu size={10} className="animate-spin" />
            <span>VITE_REACT_TS_V4</span>
          </span>
          <span>SYSTEM_TIME: 17:46_GMT+5.5</span>
        </div>
      </div>

    </footer>
  );
};
