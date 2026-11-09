import React, { useState } from 'react';
import { caseStudies } from '../data/portfolioData';
import { ExternalLink, CheckCircle2, Award, Zap, Database, ArrowRight, Layers, FileCode2 } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function CaseStudies() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="case-studies" className="py-24 relative bg-slate-950">
      
      {/* Dynamic Glow Accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>FEATURED PRODUCTION CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            High-Performance Systems Built & Optimized
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Real enterprise case studies featuring sub-second response times, zero-latency caching,
            and strict 4-tier Clean Architecture deployed to production.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((project, index) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-slate-800/80 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Project Header Image / Visual Banner */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900 border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 text-[11px] font-mono font-semibold rounded-full bg-slate-950/90 text-cyan-400 border border-cyan-800/60 backdrop-blur-md">
                      Case Study 0{index + 1}
                    </span>
                    <span className="px-3 py-1 text-[11px] font-mono text-slate-300 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
                      {project.role}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  
                  {/* Verified Performance Metrics Strip */}
                  <div className="mb-6 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="px-1">
                        <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">{m.label}</div>
                        <div className="text-xs font-bold text-white font-mono mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Breakthroughs */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-2.5 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Key Architectural Breakthroughs</span>
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 3).map((item, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-2 flex items-center gap-1.5">
                      <FileCode2 className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Action CTAs */}
              <div className="p-6 pt-0 mt-2 flex items-center justify-between border-t border-slate-800/80 pt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Deep Architectural Breakdown</span>
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-950/80 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-800/60 hover:border-cyan-700 transition-all shadow-sm"
                >
                  <span>Live URL</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-dive Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
