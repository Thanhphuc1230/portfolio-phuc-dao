import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Server, Database, Layout, Cloud, CheckCircle2, Terminal, Sparkles } from 'lucide-react';

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Competencies', icon: Sparkles },
    { id: 'backend', name: 'Backend & Architecture', icon: Server },
    { id: 'database', name: 'Database & Performance', icon: Database },
    { id: 'frontend', name: 'Frontend & UI/UX', icon: Layout },
    { id: 'devops', name: 'DevOps & Cloud', icon: Cloud }
  ];

  const displayedCategories = activeTab === 'all' 
    ? Object.keys(skillsData) 
    : [activeTab];

  return (
    <section id="skills" className="py-24 relative bg-slate-950/70 border-t border-slate-800/80">
      
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE COMPETENCY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Technical Arsenal & Core Stack
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Battle-tested technical competencies across full-stack Laravel engineering, deep database optimization,
            and automated production deployments.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((catKey) => {
            const cat = skillsData[catKey];
            return (
              <div
                key={catKey}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
                        {catKey === 'backend' && <Server className="w-4 h-4" />}
                        {catKey === 'database' && <Database className="w-4 h-4" />}
                        {catKey === 'frontend' && <Layout className="w-4 h-4" />}
                        {catKey === 'devops' && <Cloud className="w-4 h-4" />}
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                      {cat.skills.length} Core Areas
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-6">
                    {cat.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            {skill.name}
                          </span>
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                            skill.level === 'Expert' 
                              ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60' 
                              : 'bg-indigo-950 text-indigo-300 border border-indigo-800/60'
                          }`}>
                            {skill.level}
                          </span>
                        </div>

                        {/* Sub-tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {skill.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-slate-400 border border-slate-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Assurance */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Enforced via strict code review</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
