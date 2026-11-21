import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { verifiedCertifications, profileData } from '../../data/portfolioData';
import { Mail, Copy, Check, ExternalLink, ShieldCheck, ArrowUp } from 'lucide-react';

export const ContactAndFooterSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0C0C0C] text-[#D7E2EA] pt-20 pb-12 px-6 md:px-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Verified Credentials Section */}
        <div id="credentials" className="mb-20">
          <FadeIn delay={0} y={30} className="text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-400 mb-2 block">
              International Accreditation
            </span>
            <h3
              className="hero-heading font-black uppercase tracking-tight"
              style={{ fontSize: 'clamp(2rem, 6vw, 70px)' }}
            >
              Verified Credentials
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {verifiedCertifications.map((cert, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} y={20}>
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between h-full hover:border-cyan-500/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-400 border border-slate-800">
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        Verified
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{cert.title}</h4>
                    <p className="text-[11px] font-mono text-slate-400 mb-3">{cert.category}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-800/80">
                    {cert.skills.map((s, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Contact CTA Block */}
        <FadeIn delay={0.2} y={30}>
          <div className="p-8 sm:p-12 rounded-[35px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-2 border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 shadow-2xl">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
                Direct Collaboration & Hire
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
                Have a Mission-Critical Project?
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Whether you need a full legacy migration to Laravel 12, slow query profiling, or sub-second TTFB optimization, let&apos;s build it right.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 border border-slate-700 hover:border-cyan-400 text-xs font-mono text-white transition-all shadow-lg"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                <span>{copied ? 'Copied Email!' : profileData.email}</span>
              </button>

              <a
                href={`mailto:${profileData.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Platform Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-center text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            GitHub Profile
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-center text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            LinkedIn Profile
          </a>
          <a
            href="https://www.upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-center text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            Upwork Profile
          </a>
          <a
            href="https://www.fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-center text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            Fiverr Gigs
          </a>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>© 2026 Đào Thanh Phúc (Phuc Dao). Engineered for Speed & Reliability.</div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
