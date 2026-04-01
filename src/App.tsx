/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Zap, Sparkles, Route, GraduationCap } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans selection:bg-[#0055FF]/30 selection:text-white overflow-x-hidden min-h-screen">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/70 backdrop-blur-2xl flex justify-between items-center px-8 py-6 max-w-full border-b border-white/[0.05]">
        <div className="text-xl font-black text-white tracking-[-0.05em]">The Neural Architect</div>
        <div className="hidden md:flex items-center gap-10 font-medium tracking-tight text-sm">
          <a className="text-[#3377FF] font-bold border-b-2 border-[#3377FF] pb-1 transition-colors duration-300" href="#work">Work</a>
          <a className="text-zinc-500 font-mono hover:text-white transition-colors duration-300" href="#expertise">Expertise</a>
          <a className="text-zinc-500 font-mono hover:text-white transition-colors duration-300" href="#about">About</a>
          <a className="text-zinc-500 font-mono hover:text-white transition-colors duration-300" href="#contact">Contact</a>
        </div>
        <button className="bg-[#0055FF] text-white px-6 py-2.5 rounded-lg font-mono font-bold text-xs tracking-widest uppercase hover:bg-[#3377FF] transition-all active:scale-95 duration-75 shadow-[0_0_20px_rgba(0,85,255,0.4)]">
          Start a Project
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0055FF]/20 to-[#0022AA]/20 opacity-40 blur-[120px] -z-10 animate-pulse"></div>
        <div className="max-w-6xl w-full text-center">
          <h1 className="font-black text-5xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-[-0.04em] mb-8">
            Architecting the <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3377FF] to-[#0044CC]">Future</span> with AI &amp; Design.
          </h1>
          <p className="text-zinc-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 tracking-[0.01em] leading-[1.6]">
            Bridging the gap between human creativity and machine intelligence through editorial aesthetics and technical precision.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] px-8 py-4 rounded-xl font-mono text-white text-sm tracking-widest uppercase hover:bg-white/[0.08] transition-all" href="#work">
              View Portfolio
            </a>
            <div className="flex items-center gap-3 font-mono text-xs text-[#3377FF] uppercase tracking-[0.2em] font-semibold">
              <Zap className="w-4 h-4 fill-current" />
              Status: Open for Q4 Projects
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-4 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-[#0055FF] to-transparent"></div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0c0c0c] relative" id="work">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em]">Selected Works</h2>
            <p className="font-mono text-zinc-500 text-xs uppercase tracking-[0.2em] md:text-right max-w-xs leading-[1.8]">
              Curating high-performance systems where design meets automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Project 1 */}
            <div className="group relative space-y-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm p-2">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0" alt="Project 1" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-[#0055FF]/20 backdrop-blur-xl text-[#6699FF] px-3 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-[0.2em] border border-[#0055FF]/30 font-semibold">AI-Powered</span>
                    <span className="bg-black/40 backdrop-blur-xl text-white px-3 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-[0.2em] border border-white/10 font-semibold">Product Strategy</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold mb-2 tracking-[-0.02em]">Neural Workspace OS</h3>
                  <p className="text-zinc-400 text-sm tracking-[0.01em] leading-relaxed">Next-gen operational environment for distributed AI teams.</p>
                </div>
                <div className="font-mono text-[10px] text-zinc-500 mt-2 tracking-[0.1em]">01 / 2024</div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative space-y-6 md:mt-32">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm p-2">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0" alt="Project 2" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop" />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-[#0055FF]/20 backdrop-blur-xl text-[#6699FF] px-3 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-[0.2em] border border-[#0055FF]/30 font-semibold">AI-Powered</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold mb-2 tracking-[-0.02em]">SynthBrand Gen-2</h3>
                  <p className="text-zinc-400 text-sm tracking-[0.01em] leading-relaxed">Automated brand identity engine powered by custom LLMs.</p>
                </div>
                <div className="font-mono text-[10px] text-zinc-500 mt-2 tracking-[0.1em]">02 / 2024</div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative space-y-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm p-2">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0" alt="Project 3" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-[#0055FF]/20 backdrop-blur-xl text-[#6699FF] px-3 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-[0.2em] border border-[#0055FF]/30 font-semibold">AI-Powered</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold mb-2 tracking-[-0.02em]">Ethos Grid</h3>
                  <p className="text-zinc-400 text-sm tracking-[0.01em] leading-relaxed">Real-time data visualization for corporate AI governance.</p>
                </div>
                <div className="font-mono text-[10px] text-zinc-500 mt-2 tracking-[0.1em]">03 / 2024</div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group relative space-y-6 md:mt-32">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm p-2">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0" alt="Project 4" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-[#0055FF]/20 backdrop-blur-xl text-[#6699FF] px-3 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-[0.2em] border border-[#0055FF]/30 font-semibold">AI-Powered</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold mb-2 tracking-[-0.02em]">Architect.ai</h3>
                  <p className="text-zinc-400 text-sm tracking-[0.01em] leading-relaxed">Landing page system with autonomous content optimization.</p>
                </div>
                <div className="font-mono text-[10px] text-zinc-500 mt-2 tracking-[0.1em]">04 / 2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 px-6 bg-[#0a0a0a] relative" id="expertise">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-24 text-center uppercase tracking-[-0.02em]">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Capability 1 */}
            <div className="bg-white/[0.02] backdrop-blur-2xl p-10 rounded-2xl hover:bg-white/[0.04] transition-all duration-500 group border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <Sparkles className="text-[#3377FF] w-10 h-10 mb-8 group-hover:scale-110 transition-transform block drop-shadow-[0_0_15px_rgba(51,119,255,0.5)]" />
              <h3 className="text-2xl font-bold mb-4 tracking-[-0.02em]">AI Design Automation</h3>
              <p className="text-zinc-400 text-base leading-[1.7] tracking-[0.01em]">
                Integrating generative AI into design workflows to increase output by 10x without compromising brand integrity.
              </p>
              <div className="mt-10 pt-8 border-t border-white/[0.05]">
                <ul className="font-mono text-[10px] uppercase tracking-[0.2em] space-y-4 text-zinc-500">
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#3377FF] rounded-full"></span> Workflow Engineering</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#3377FF] rounded-full"></span> Midjourney Masters</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#3377FF] rounded-full"></span> Custom UI Kits</li>
                </ul>
              </div>
            </div>

            {/* Capability 2 */}
            <div className="bg-white/[0.02] backdrop-blur-2xl p-10 rounded-2xl hover:bg-white/[0.04] transition-all duration-500 group border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <Route className="text-[#3377FF] w-10 h-10 mb-8 group-hover:scale-110 transition-transform block drop-shadow-[0_0_15px_rgba(51,119,255,0.5)]" />
              <h3 className="text-2xl font-bold mb-4 tracking-[-0.02em]">Product Planning</h3>
              <p className="text-zinc-400 text-base leading-[1.7] tracking-[0.01em]">
                Strategic roadmapping for AI-first products, focusing on user experience and technical feasibility.
              </p>
              <div className="mt-10 pt-8 border-t border-white/[0.05]">
                <ul className="font-mono text-[10px] uppercase tracking-[0.2em] space-y-4 text-zinc-500">
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#3377FF] rounded-full"></span> MVP Scoping</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#3377FF] rounded-full"></span> User Psychology</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#3377FF] rounded-full"></span> Data Architecture</li>
                </ul>
              </div>
            </div>

            {/* Capability 3 */}
            <div className="bg-white/[0.02] backdrop-blur-2xl p-10 rounded-2xl hover:bg-white/[0.04] transition-all duration-500 group border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <GraduationCap className="text-[#3377FF] w-10 h-10 mb-8 group-hover:scale-110 transition-transform block drop-shadow-[0_0_15px_rgba(51,119,255,0.5)]" />
              <h3 className="text-2xl font-bold mb-4 tracking-[-0.02em]">Corporate AI Training</h3>
              <p className="text-zinc-400 text-base leading-[1.7] tracking-[0.01em]">
                Upskilling creative teams with the tools and mindsets needed to thrive in the era of machine intelligence.
              </p>
              <div className="mt-10 pt-8 border-t border-white/[0.05]">
                <ul className="font-mono text-[10px] uppercase tracking-[0.2em] space-y-4 text-zinc-500">
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#3377FF] rounded-full"></span> Prompt Literacy</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#3377FF] rounded-full"></span> Toolchain Audits</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#3377FF] rounded-full"></span> Implementation Strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#050505] relative" id="about">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.05] relative z-10 p-2 backdrop-blur-sm">
              <img className="w-full h-full object-cover rounded-xl" alt="Portrait" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-[#0055FF]/30 rounded-2xl -z-0"></div>
            {/* Detail Rail */}
            <div className="hidden xl:block absolute top-10 -left-16 [writing-mode:vertical-rl] transform rotate-180">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">Freelance Educator &amp; Branding Expert</span>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-[-0.04em]">
              The intersection of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3377FF] to-[#0044CC]">carbon</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6699FF] to-[#3377FF]">silicon</span>.
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-zinc-400 leading-[1.8] tracking-[0.01em]">
                I am a digital architect specializing in the marriage of high-end aesthetics and artificial intelligence. My career has been defined by a relentless pursuit of what's next—transitioning from traditional branding into the frontier of AI-augmented design systems.
              </p>
              <p className="text-lg text-zinc-400 leading-[1.8] tracking-[0.01em]">
                As an educator, I consult for Fortune 500 teams on how to integrate generative models into their existing workflows without losing the "soul" of their creative output.
              </p>
            </div>
            <div className="flex flex-wrap gap-12 pt-10 border-t border-white/[0.05]">
              <div>
                <div className="text-4xl font-black tracking-[-0.02em] mb-2">12+</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#3377FF] font-semibold">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-black tracking-[-0.02em] mb-2">150+</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#3377FF] font-semibold">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-black tracking-[-0.02em] mb-2">25k</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#3377FF] font-semibold">Community Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA / Footer */}
      <footer className="bg-[#0a0a0a] w-full py-32 border-t border-white/[0.05] flex flex-col items-center gap-12 relative overflow-hidden" id="contact">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0055FF]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl text-center px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-[-0.04em]">Ready to evolve?</h2>
          <p className="text-zinc-400 mb-12 text-lg md:text-xl tracking-[0.01em] leading-[1.6]">Currently accepting inquiries for 2024 partnerships and bespoke consultation.</p>
          <button className="bg-[#0055FF] text-white px-12 py-5 rounded-xl font-mono font-bold text-sm tracking-widest uppercase hover:bg-[#3377FF] transition-all active:scale-95 shadow-[0_0_40px_rgba(0,85,255,0.3)]">
            Start a Project
          </button>
        </div>
        <div className="flex gap-10 mt-16 font-mono text-xs uppercase tracking-[0.2em] relative z-10">
          <a className="text-zinc-500 hover:text-[#3377FF] transition-all duration-500" href="#">YouTube</a>
          <a className="text-zinc-500 hover:text-[#3377FF] transition-all duration-500" href="#">Instagram</a>
          <a className="text-zinc-500 hover:text-[#3377FF] transition-all duration-500" href="#">LinkedIn</a>
        </div>
        <div className="text-zinc-600 font-mono text-center px-6 mt-16 max-w-2xl relative z-10">
          <p className="text-[10px] uppercase tracking-[0.2em] mb-6">© 2024 The Neural Architect. Designed at the intersection of carbon and silicon.</p>
          <div className="flex justify-center gap-6 text-[9px] uppercase tracking-[0.2em] opacity-60">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Protocol</span>
            <span>/</span>
            <span className="text-[#3377FF]">System Status: Online</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

