import React from 'react';
import { ArrowUp, Terminal, Heart, ShieldCheck, Zap } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative overflow-hidden">
      
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Identity */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-lg flex items-center justify-center">
                <span className="font-mono font-bold text-xs text-cyan-400">DTP</span>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-1.5">
                Đào Thanh Phúc (Phuc Dao)
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Senior Full-Stack Laravel Engineer & DB Optimization Specialist
              </div>
            </div>
          </div>

          {/* Copyright & Tagline */}
          <div className="text-center md:text-right">
            <p className="text-xs text-slate-400 font-mono">
              © 2026 Phuc Dao. Engineered for Speed & Reliability.
            </p>
            <p className="text-[11px] text-slate-500 mt-1 flex items-center justify-center md:justify-end gap-1.5">
              <span>Sub-second rendering</span>
              <span>•</span>
              <span>4-Tier Clean Architecture</span>
              <span>•</span>
              <span className="text-cyan-400">Ho Chi Minh City, VN</span>
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
