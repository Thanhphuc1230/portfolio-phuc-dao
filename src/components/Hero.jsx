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
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Hero() {
  const getStatIcon = (idx) => {
    switch (idx) {
      case 0: return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case 1: return <Gauge className="w-4 h-4 text-cyan-400" />;
      case 2: return <Database className="w-4 h-4 text-indigo-400" />;
      case 3: return <Zap className="w-4 h-4 text-amber-400" />;
      case 4: return <GitCommit className="w-4 h-4 text-purple-400" />;
      case 5: return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      default: return <Gauge className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Status & Location Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-medium text-emerald-400">Available for International Gigs & Enterprise Roles</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ho Chi Minh City, Vietnam (UTC+7)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Fluent Async English & Technical Docs</span>
          </div>
        </div>

        {/* Hero Title & Sub-headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            High-Performance <br className="hidden sm:inline" />
            <span className="glow-gradient-text">Laravel & Database Architecture</span> <br className="hidden sm:inline" />
            & Zero-Downtime Migration
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Hi, I'm <span className="font-semibold text-white">Đào Thanh Phúc (Phuc Dao)</span> — 
            Full Stack Laravel Developer & Legacy Migration Architect.
            Proven track record handling <strong>15.3M+ visits</strong>, cutting TTFB to 140ms, eliminating N+1 bottlenecks,
            and safely migrating legacy .NET/CodeIgniter systems to modern Laravel.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-indigo-700 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>View 6 Production Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#services-gigs"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-700/80 hover:bg-emerald-900/80 hover:text-white transition-all shadow-md shadow-emerald-950/50"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Explore Fiverr Gigs & Services</span>
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

        {/* Live KPI Stat Badges - 6 Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
          {profileData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-4 rounded-xl relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-medium text-slate-400 uppercase tracking-wider truncate">
                    {stat.label}
                  </span>
                  <div className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    {getStatIcon(idx)}
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight font-mono">
                  {stat.value}
                </div>
              </div>
              <div className="text-[10px] text-slate-400 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
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
                app/Services/Migration/ZeroDowntimeEtlPipelineService.php
              </span>
            </div>
            <span className="text-[11px] font-mono bg-cyan-950/80 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800/50">
              Laravel 12 / PHP 8.2+
            </span>
          </div>
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto bg-slate-950/70">
            <pre className="leading-relaxed">
              <code>
                <span className="text-purple-400">namespace</span> App\Services\Migration;<br /><br />
                <span className="text-purple-400">use</span> Illuminate\Support\Facades\DB;<br />
                <span className="text-purple-400">use</span> Illuminate\Support\Facades\Cache;<br /><br />
                <span className="text-blue-400">final readonly class</span> <span className="text-amber-300">ZeroDowntimeEtlPipelineService</span> {'{'}<br />
                {'    '}<span className="text-emerald-400">/** Migrates 15.3M+ visits legacy MSSQL/.NET into MySQL 8 with 0 data loss */</span><br />
                {'    '}<span className="text-purple-400">public function</span> <span className="text-blue-300">migrateWithUrlPreservation</span>(<span className="text-purple-400">string</span> <span className="text-cyan-300">$legacyTable</span>): <span className="text-amber-300">EtlResult</span> {'{'}<br />
                {'        '}<span className="text-purple-400">return</span> DB::connection(<span className="text-green-300">'mysql'</span>)-&gt;<span className="text-blue-300">transaction</span>(<span className="text-purple-400">function</span> () <span className="text-purple-400">use</span> (<span className="text-cyan-300">$legacyTable</span>) {'{'}<br />
                {'            '}<span className="text-cyan-300">$records</span> = DB::connection(<span className="text-green-300">'legacy_mssql'</span>)-&gt;<span className="text-blue-300">table</span>(<span className="text-cyan-300">$legacyTable</span>)-&gt;<span className="text-blue-300">lazyById</span>(500);<br />
                {'            '}<span className="text-purple-400">foreach</span> (<span className="text-cyan-300">$records</span> <span className="text-purple-400">as</span> <span className="text-cyan-300">$row</span>) {'{'}<br />
                {'                '}<span className="text-cyan-300">$this</span>-&gt;repository-&gt;<span className="text-blue-300">upsertStrictSlug</span>(<span className="text-cyan-300">$row</span>-&gt;Slug, <span className="text-cyan-300">$row</span>);<br />
                {'            '}{'}'}<br />
                {'            '}<span className="text-purple-400">return new</span> <span className="text-amber-300">EtlResult</span>(status: <span className="text-green-300">'SUCCESS_ZERO_LOSS'</span>);<br />
                {'        '}{'}'});<br />
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
