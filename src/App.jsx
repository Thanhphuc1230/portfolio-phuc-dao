import React, { useState, useEffect } from 'react';
import { JackPortfolio } from './jack/JackPortfolio';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import CaseStudies from './components/CaseStudies';
import SkillsMatrix from './components/SkillsMatrix';
import ArchitecturePhilosophy from './components/ArchitecturePhilosophy';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Sparkles, Terminal } from 'lucide-react';

export default function App() {
  // Check hash or local storage for view selection; default to 'jack' as requested in latest prompt
  const [activePortfolio, setActivePortfolio] = useState(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('phuc') || hash.includes('laravel')) return 'phuc';
    return 'jack';
  });

  useEffect(() => {
    if (activePortfolio === 'jack') {
      document.title = 'Jack -- 3D Creator';
    } else {
      document.title = 'Đào Thanh Phúc (Phuc Dao) — Senior Full-Stack Laravel Engineer & Database Optimization Specialist';
    }
  }, [activePortfolio]);

  return (
    <div className="relative min-h-screen bg-[#0C0C0C]">
      {/* Portfolio Selector Floating Switcher */}
      <aside aria-label="Portfolio Switcher" className="fixed bottom-6 right-6 z-50 flex items-center p-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl">
        <button
          onClick={() => setActivePortfolio('jack')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-sans tracking-wide transition-all ${
            activePortfolio === 'jack'
              ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white shadow-lg shadow-purple-600/30 scale-105'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Jack (3D Creator)</span>
        </button>

        <button
          onClick={() => setActivePortfolio('phuc')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-sans tracking-wide transition-all ${
            activePortfolio === 'phuc'
              ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/30 scale-105'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>Phuc Dao (Laravel)</span>
        </button>
      </aside>

      {/* Render Active Landing Page */}
      {activePortfolio === 'jack' ? (
        <JackPortfolio />
      ) : (
        <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
          <Navbar />
          <main>
            <Hero />
            <ImpactMetrics />
            <CaseStudies />
            <SkillsMatrix />
            <ArchitecturePhilosophy />
            <TimelineSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
