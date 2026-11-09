import React from 'react';
import { impactMetrics } from '../data/portfolioData';
import { Gauge, Zap, Database, GitMerge, CheckCircle, TrendingUp, Cpu, Server } from 'lucide-react';

export default function ImpactMetrics() {
  const getIcon = (index) => {
    switch (index) {
      case 0: return <Gauge className="w-5 h-5 text-cyan-400" />;
      case 1: return <Zap className="w-5 h-5 text-indigo-400" />;
      case 2: return <Database className="w-5 h-5 text-emerald-400" />;
      case 3: return <GitMerge className="w-5 h-5 text-amber-400" />;
      default: return <Server className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="impact" className="py-20 relative border-y border-slate-800/80 bg-slate-950/60">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>PROVEN PRODUCTION BENCHMARKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real-World Engineering Impact
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-400 max-w-md">
            Verified benchmarks recorded across live production systems serving tens of thousands of requests with zero regression.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl relative flex flex-col justify-between group overflow-hidden"
            >
              {/* Glow Accent Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                item.color === 'cyan' ? 'from-cyan-400 to-blue-500' :
                item.color === 'indigo' ? 'from-indigo-400 to-purple-500' :
                item.color === 'emerald' ? 'from-emerald-400 to-teal-500' :
                'from-amber-400 to-orange-500'
              }`} />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getIcon(idx)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                    {item.badge}
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                  {item.metric}
                </div>

                <h3 className="text-base font-semibold text-slate-200 mb-2">
                  {item.label}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Verified Status Tag */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Verified in Production</span>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Micro-benchmarks breakdown strip */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xs text-slate-400 font-mono">PHP Version Target</div>
            <div className="text-sm font-semibold text-white mt-0.5">PHP 8.2 / 8.3 JIT</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 font-mono">Query Execution Time</div>
            <div className="text-sm font-semibold text-cyan-400 mt-0.5">&lt; 15ms Avg P99</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 font-mono">Lighthouse SEO Score</div>
            <div className="text-sm font-semibold text-emerald-400 mt-0.5">100 / 100 Flawless</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 font-mono">Transport Protocol</div>
            <div className="text-sm font-semibold text-indigo-400 mt-0.5">HTTP/3 (QUIC) + Brotli</div>
          </div>
        </div>

      </div>
    </section>
  );
}
