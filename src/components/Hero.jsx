import React from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Zap, 
  Database, 
  Gauge, 
  GitCommit, 
  ShieldCheck, 
  MapPin, 
  Download,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Status & Location Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-medium text-emerald-400">Available for High-Impact Projects</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ho Chi Minh City, Vietnam (UTC+7)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>English Fluent & Native VN</span>
          </div>
        </div>

        {/* Hero Title & Sub-headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Architecting Resilient <br className="hidden sm:inline" />
            <span className="glow-gradient-text">High-Concurrency Laravel</span> <br className="hidden sm:inline" />
            & Database Architectures
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Hi, I'm <span className="font-semibold text-white">Đào Thanh Phúc (Phuc Dao)</span> — 
            Senior Full-Stack Laravel Engineer & Database Optimization Specialist.
            Slashing latency bottlenecks, engineering 4-tier Clean Architecture, and shipping 
            sub-second web applications from concept to production.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-indigo-700 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>View Featured Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all"
          >
            <span>Contact Me</span>
          </a>

          <a
            href="https://github.com/thanhphucdao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-mono text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <Terminal className="w-4 h-4" />
            <span>github.com/thanhphucdao</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* Live KPI Stat Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {profileData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  {idx === 0 && <Gauge className="w-4 h-4" />}
                  {idx === 1 && <Database className="w-4 h-4" />}
                  {idx === 2 && <Zap className="w-4 h-4" />}
                  {idx === 3 && <GitCommit className="w-4 h-4" />}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                <span className="truncate">{stat.subtext}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Architecture Code Snippet Visual */}
        <div className="mt-12 max-w-4xl mx-auto glass-panel rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-400">
                app/Services/Optimization/QueryAcceleratorService.php
              </span>
            </div>
            <span className="text-[11px] font-mono bg-cyan-950/80 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800/50">
              PHP 8.2 / Strict
            </span>
          </div>
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto bg-slate-950/70">
            <pre className="leading-relaxed">
              <code>
                <span className="text-purple-400">namespace</span> App\Services\Optimization;<br /><br />
                <span className="text-purple-400">use</span> Illuminate\Support\Facades\Cache;<br />
                <span className="text-purple-400">use</span> App\Repositories\Contracts\TourRepositoryInterface;<br /><br />
                <span className="text-blue-400">final readonly class</span> <span className="text-amber-300">QueryAcceleratorService</span> {'{'}<br />
                {'    '}<span className="text-purple-400">public function</span> <span className="text-blue-300">__construct</span>(<br />
                {'        '}<span className="text-purple-400">private</span> TourRepositoryInterface <span className="text-cyan-300">$repository</span><br />
                {'    '}) {'{}'}<br /><br />
                {'    '}<span className="text-emerald-400">/** Slashes TTFB from 2.5s down to 280ms via Redis Cache-Aside & Composite Indexing */</span><br />
                {'    '}<span className="text-purple-400">public function</span> <span className="text-blue-300">getOptimizedCatalog</span>(<span className="text-purple-400">int</span> <span className="text-cyan-300">$categoryId</span>): <span className="text-amber-300">CatalogResult</span> {'{'}<br />
                {'        '}<span className="text-purple-400">return</span> Cache::tags([<span className="text-green-300">'catalog'</span>, <span className="text-green-300">"cat_{$categoryId}"</span>])-&gt;<span className="text-blue-300">remember</span>(<br />
                {'            '}<span className="text-green-300">"cat_vitals_{$categoryId}"</span>,<br />
                {'            '}now()-&gt;<span className="text-blue-300">addHours</span>(12),<br />
                {'            '}<span className="text-purple-400">fn</span>() =&gt; <span className="text-cyan-300">$this</span>-&gt;repository-&gt;<span className="text-blue-300">findWithCompositeIndex</span>(<span className="text-cyan-300">$categoryId</span>)<br />
                {'        '});<br />
                {'    '}<br />
                {'}'}
              </code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}
