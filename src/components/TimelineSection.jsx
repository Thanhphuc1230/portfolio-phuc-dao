import React from 'react';
import { timelineData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function TimelineSection() {
  const getTimelineIcon = (type) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-cyan-400" />;
      case 'certification':
        return <Award className="w-4 h-4 text-indigo-400" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-emerald-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="timeline" className="py-24 relative bg-slate-950/80 border-t border-slate-800/80">
      
      {/* Dynamic ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>CAREER TRACK & ACADEMIC CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Experience & Education Timeline
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Proven track record delivering scalable enterprise software, formal computer science foundation at PTIT,
            and professional IBM DevOps credentials.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 md:ml-40 space-y-12">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Node Point */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-cyan-400 flex items-center justify-center transition-colors shadow-lg">
                {getTimelineIcon(item.type)}
              </div>

              {/* Timestamp label for larger screens */}
              <div className="hidden sm:block absolute -left-36 md:-left-44 top-2 text-right w-28 md:w-36">
                <span className="text-xs font-mono font-semibold text-cyan-400 block">
                  {item.period}
                </span>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  {item.type}
                </span>
              </div>

              {/* Timeline Card */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-slate-800/80">
                
                {/* Mobile Period Tag */}
                <div className="sm:hidden mb-2 inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                  <Calendar className="w-3 h-3" />
                  <span>{item.period}</span>
                </div>

                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {item.location}
                  </span>
                </div>

                <div className="text-sm font-semibold text-cyan-300 font-mono mb-4">
                  {item.company}
                </div>

                {/* Key Achievements */}
                <div className="space-y-2.5 mb-5">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/70">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
