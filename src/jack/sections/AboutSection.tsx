import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { TrendingUp, Gauge, Database, Zap, GitCommit, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const aboutText =
    "With more than three years of intensive production experience in Web Architecture, I specialize in full-stack Laravel engineering, high-performance database optimization, and zero-downtime legacy migrations. Having scaled platforms to over 15.3 million visits and cut TTFB from 820ms down to 140ms, I thrive on turning complex legacy bottlenecks into resilient, blazing-fast web platforms. Let's engineer something extraordinary together!";

  const metrics = [
    { label: "Total Visits Scaled", val: "15.3M+", icon: TrendingUp, color: "text-amber-400" },
    { label: "Google PageSpeed", val: "99/100", icon: Gauge, color: "text-cyan-400" },
    { label: "Query Optimization", val: "85%", icon: Database, color: "text-indigo-400" },
    { label: "TTFB Latency Cut", val: "5.8x", icon: Zap, color: "text-emerald-400" },
    { label: "Base Commits", val: "440+", icon: GitCommit, color: "text-purple-400" },
    { label: "SEO & Ads Safety", val: "100%", icon: ShieldCheck, color: "text-emerald-400" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full relative flex flex-col justify-center items-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 select-none overflow-hidden"
    >
      
      {/* 4 Decorative 3D Elements */}
      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[200px] pointer-events-none z-10">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Decorative Element"
            className="w-full h-auto object-contain drop-shadow-2xl opacity-70"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[170px] pointer-events-none z-10">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Decorative Object"
            className="w-full h-auto object-contain drop-shadow-2xl opacity-70"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[200px] pointer-events-none z-10">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Element"
            className="w-full h-auto object-contain drop-shadow-2xl opacity-70"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[210px] pointer-events-none z-10">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Element"
            className="w-full h-auto object-contain drop-shadow-2xl opacity-70"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Main Content Stack */}
      <div className="flex flex-col items-center justify-center max-w-4xl z-20 text-center">
        
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading & text */}
        <div className="h-8 sm:h-12 md:h-14" />

        {/* Animated Paragraph with Character Opacity Reveal */}
        <AnimatedText
          text={aboutText}
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[620px] text-center"
        />

        {/* Production Benchmarks Strip */}
        <FadeIn delay={0.2} y={20} className="w-full mt-10 mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <Icon className={`w-4 h-4 mx-auto mb-1 ${m.color}`} />
                  <div className="text-xl font-black font-mono text-white">{m.val}</div>
                  <div className="text-[10px] font-mono text-slate-400 truncate mt-0.5">{m.label}</div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.3} y={20}>
          <ContactButton onClick={() => scrollTo('contact')} />
        </FadeIn>

      </div>

    </section>
  );
};
