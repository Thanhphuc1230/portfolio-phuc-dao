import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, Clock, Globe } from 'lucide-react';
import { profileData } from '../data/portfolioData';

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: 'Enterprise Backend / Laravel',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate instant sending
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950 border-t border-slate-800/80">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S BUILD SOMETHING EXTRAORDINARY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Accelerate Your Platform?
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you need to slash database query times, architect a greenfield Laravel 12 platform,
            or scale an existing enterprise backend, let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Availability Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Direct Inquiries
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div>
                <div className="text-xs text-slate-400 mb-1">Primary Email</div>
                <div className="text-lg font-mono font-bold text-white break-all">
                  {profileData.email}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profileData.email}?subject=Project%20Inquiry%20for%20Phuc%20Dao`}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-cyan-950 border border-cyan-800/80 text-cyan-300 hover:bg-cyan-900 transition-colors"
                  title="Open mail client"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Global Working Profile Info */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Working Parameters
              </h4>

              <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-800/60">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  Time Zone:
                </span>
                <span className="font-mono text-slate-200 font-semibold">UTC+7 (Ho Chi Minh City)</span>
              </div>

              <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-800/60">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-indigo-400" />
                  Languages:
                </span>
                <span className="font-mono text-slate-200 font-semibold">English (Fluent) & VN (Native)</span>
              </div>

              <div className="flex items-center justify-between text-xs py-1.5">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Engagement Mode:
                </span>
                <span className="font-mono text-emerald-400 font-semibold">Contract / Full-Time / Consult</span>
              </div>
            </div>

            {/* Direct Social & Freelance Platforms */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all flex items-center gap-2.5 text-slate-300 hover:text-white"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-semibold">GitHub</span>
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all flex items-center gap-2.5 text-slate-300 hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-semibold">LinkedIn</span>
              </a>

              <a
                href="https://www.upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all flex items-center gap-2.5 text-slate-300 hover:text-white"
              >
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">Up</span>
                <span className="text-xs font-mono font-semibold">Upwork</span>
              </a>

              <a
                href="https://www.fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all flex items-center gap-2.5 text-slate-300 hover:text-white"
              >
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">Fi</span>
                <span className="text-xs font-mono font-semibold">Fiverr</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                Send a Direct Project Brief
              </h3>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-cyan-950/40 border border-cyan-800/80 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Received!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Phúc typically replies within 2-4 hours. You can also send a direct email to{' '}
                  <span className="text-cyan-400 font-mono font-semibold">{profileData.email}</span>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Project Scope / Requirement
                  </label>
                  <select
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white outline-none transition-all"
                  >
                    <option value="Enterprise Backend / Laravel">High-Concurrency Laravel Platform</option>
                    <option value="Database Optimization & Query Tuning">Database Optimization & Slow Query Tuning</option>
                    <option value="Clean Architecture & CI/CD Pipeline">4-Tier Clean Architecture & CI/CD Setup</option>
                    <option value="Full-Stack Web Development">Full-Stack Web Application (Laravel + Frontend)</option>
                    <option value="Technical Consultation">Technical Advisory / Senior Role</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Project Details & Target Objectives *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your current tech stack, traffic requirements, or optimization goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <span>Dispatch Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
