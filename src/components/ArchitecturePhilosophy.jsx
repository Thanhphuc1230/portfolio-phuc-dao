import React, { useState } from 'react';
import { architectureSteps } from '../data/portfolioData';
import { Layers, ShieldCheck, CheckCircle2, GitPullRequest, Code2, Cpu, Compass } from 'lucide-react';

export default function ArchitecturePhilosophy() {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index) => {
    switch (index) {
      case 0: return <Compass className="w-4 h-4 text-cyan-400" />;
      case 1: return <Layers className="w-4 h-4 text-indigo-400" />;
      case 2: return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 3: return <CheckCircle2 className="w-4 h-4 text-amber-400" />;
      default: return <Code2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="architecture" className="py-24 relative bg-slate-950 border-t border-slate-800/80">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Test-Driven 4-Tier Clean Architecture
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Every production system is governed by a strict 4-step verification loop:
            <span className="text-cyan-400 font-mono"> Plan → Architecture → Code → PHPUnit Automation → PR</span>.
            Zero monolithic controllers, zero untracked queries, 100% testable logic.
          </p>
        </div>

        {/* 4-Tier Architecture Diagram Visual Strip */}
        <div className="mb-14 p-6 glass-panel rounded-2xl border border-slate-800/80">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              17 Enforced Architectural Rules: Flow of Responsibility
            </span>
            <span className="text-cyan-400">Controller → Service → Repository → Model</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Tier 1: Controller */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-800/40 relative group hover:border-cyan-500 transition-colors">
              <div className="text-[10px] font-mono text-cyan-400 font-bold mb-1">TIER 01 / TRANSPORT</div>
              <h4 className="text-sm font-bold text-white mb-1">HTTP Controller</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Accepts FormRequests, validates payload, delegates to Service, returns standardized JSON API Resources.
              </p>
              <div className="mt-3 text-[10px] font-mono text-slate-500">No raw DB queries allowed</div>
            </div>

            {/* Tier 2: Service */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-indigo-800/40 relative group hover:border-indigo-500 transition-colors">
              <div className="text-[10px] font-mono text-indigo-400 font-bold mb-1">TIER 02 / DOMAIN</div>
              <h4 className="text-sm font-bold text-white mb-1">Business Service</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Coordinates DB transactions, emits domain events, evaluates RBAC authorization, and orchestrates business flow.
              </p>
              <div className="mt-3 text-[10px] font-mono text-slate-500">Framework-independent rules</div>
            </div>

            {/* Tier 3: Repository */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-800/40 relative group hover:border-emerald-500 transition-colors">
              <div className="text-[10px] font-mono text-emerald-400 font-bold mb-1">TIER 03 / DATA ACCESS</div>
              <h4 className="text-sm font-bold text-white mb-1">Query Repository</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Encapsulates Eloquent queries, applies eager loading, and manages Redis Cache-Aside tags.
              </p>
              <div className="mt-3 text-[10px] font-mono text-slate-500">Zero N+1 query guarantee</div>
            </div>

            {/* Tier 4: Model */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-800/40 relative group hover:border-amber-500 transition-colors">
              <div className="text-[10px] font-mono text-amber-400 font-bold mb-1">TIER 04 / PERSISTENCE</div>
              <h4 className="text-sm font-bold text-white mb-1">Eloquent Model</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Defines table schema, composite casts, relationships (hasMany, belongsTo), and attribute mutations.
              </p>
              <div className="mt-3 text-[10px] font-mono text-slate-500">Strictly typed attributes</div>
            </div>

          </div>
        </div>

        {/* Step-by-Step Workflow & Code Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Selector Column */}
          <div className="lg:col-span-5 space-y-3">
            {architectureSteps.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  activeStep === idx
                    ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-950/40'
                    : 'bg-slate-950/80 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-slate-800 border border-slate-700">
                      {getStepIcon(idx)}
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      STEP {item.step} // {item.phase}
                    </span>
                  </div>
                  {activeStep === idx && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Code / Evidence Viewer */}
          <div className="lg:col-span-7 glass-panel rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-400">
                  Step {architectureSteps[activeStep].step} Implementation Spec
                </span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400">
                Phase: {architectureSteps[activeStep].phase}
              </span>
            </div>

            <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 bg-slate-950/80 overflow-x-auto min-h-[220px]">
              <pre className="leading-relaxed">
                <code>{architectureSteps[activeStep].codeSnippet}</code>
              </pre>
            </div>

            <div className="px-5 py-3 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <GitPullRequest className="w-3.5 h-3.5 text-cyan-400" />
                Automated CI/CD 4-Step Verification Gate
              </span>
              <span className="text-emerald-400 font-semibold">Checks Passing</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
