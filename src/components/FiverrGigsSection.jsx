import React from 'react';
import { fiverrGigs } from '../data/portfolioData';
import { Sparkles, CheckCircle2, ArrowRight, Tag, ShieldCheck, Zap, Layers, Bug, RefreshCw } from 'lucide-react';

export default function FiverrGigsSection() {
  const getGigIcon = (index) => {
    switch (index) {
      case 0: return <RefreshCw className="w-5 h-5 text-amber-400" />;
      case 1: return <Bug className="w-5 h-5 text-rose-400" />;
      case 2: return <Zap className="w-5 h-5 text-cyan-400" />;
      case 3: return <Layers className="w-5 h-5 text-indigo-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services-gigs" className="py-24 relative bg-slate-950 border-t border-slate-800/80">
      
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FIVERR GIGS & ENTERPRISE CONTRACT SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            High-Impact Freelance Services
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Tailored for international clients seeking zero-downtime migrations, sub-second TTFB,
            clean Laravel architecture, and senior-level bug resolution.
          </p>
        </div>

        {/* Gigs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {fiverrGigs.map((gig, idx) => (
            <div
              key={gig.id}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-slate-800/80 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Stripe */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                idx === 0 ? 'from-amber-400 via-orange-500 to-rose-500' :
                idx === 1 ? 'from-rose-400 via-pink-500 to-purple-500' :
                idx === 2 ? 'from-cyan-400 via-blue-500 to-indigo-500' :
                'from-indigo-400 via-purple-500 to-emerald-500'
              }`} />

              <div>
                {/* Header Tag & Category */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      {getGigIcon(idx)}
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-900 text-emerald-400 border border-emerald-800/50">
                      {gig.badge}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">GIG 0{idx + 1}</span>
                </div>

                {/* Gig Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight leading-snug mb-3">
                  {gig.title}
                </h3>

                <div className="text-xs font-mono text-slate-400 mb-4 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{gig.category}</span>
                </div>

                {/* Price Display */}
                <div className="mb-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800/90">
                  {gig.priceRange ? (
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Starting Range</span>
                      <span className="text-2xl font-black text-white font-mono text-emerald-400">{gig.priceRange}</span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {gig.priceTiers.map((tier, tIdx) => (
                        <div key={tIdx} className="p-2 rounded-lg bg-slate-950/80 border border-slate-800/60">
                          <div className="text-[10px] font-mono text-slate-400 uppercase">{tier.name}</div>
                          <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5">{tier.price}</div>
                          <div className="text-[9px] text-slate-500 truncate mt-0.5">{tier.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Key Strengths & Deliverables */}
                <div className="space-y-2.5 mb-6">
                  {gig.strengths.map((s, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{s}</span>
                    </div>
                  ))}
                </div>

                {/* Proof Anchor */}
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/60 mb-6 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Backed by proof: <strong className="text-slate-200">{gig.proofProject}</strong></span>
                </div>

                {/* Search Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {gig.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Ready for instant kickoff</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all"
                >
                  <span>Order Gig / Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
