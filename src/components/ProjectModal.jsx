import React, { useState, useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Image as ImageIcon, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState('main');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-lg font-bold text-white font-mono">{project.title} — Architectural Breakdown</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Subtitle & Role Scope */}
          <div>
            <div className="text-cyan-400 text-sm font-semibold mb-1">{project.subtitle}</div>
            <p className="text-xs text-slate-400 font-mono">
              Role: <span className="text-slate-200">{project.role}</span> | {project.scope}
            </p>
          </div>

          {/* Visual Proof Screenshots Switcher */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Production Proof Visuals</span>
              </span>
              {project.adminImage && (
                <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
                  <button
                    onClick={() => setActiveImage('main')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      activeImage === 'main'
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Main Platform
                  </button>
                  <button
                    onClick={() => setActiveImage('admin')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      activeImage === 'admin'
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Admin CMS & Analytics
                  </button>
                </div>
              )}
            </div>

            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 max-h-[360px] flex items-center justify-center">
              <img
                src={activeImage === 'main' ? project.image : project.adminImage}
                alt={`${project.title} proof preview`}
                className="w-full h-auto max-h-[360px] object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          {/* Performance Proof Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                <div className="text-[11px] text-slate-400">{m.label}</div>
                <div className="text-sm font-bold text-cyan-300 font-mono mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Architecture */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40">
              <h4 className="text-xs font-bold text-rose-300 uppercase tracking-wider mb-1 font-mono flex items-center gap-1.5">
                <span>The Engineering Challenge</span>
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-900/40">
              <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1 font-mono flex items-center gap-1.5">
                <span>The Architectural Solution</span>
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Breakthroughs */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 font-mono">
              Key Breakthroughs & Technical Milestones
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">
              Technologies & Infrastructure
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 text-slate-300 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified Production Delivery</span>
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              Close
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
