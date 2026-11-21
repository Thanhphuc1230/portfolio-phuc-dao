import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen w-full flex flex-col justify-between relative bg-[#0C0C0C] select-none" style={{ overflowX: 'clip' }}>
      
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="header" className="w-full z-20">
        <nav className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8">
          <button
            onClick={() => scrollTo('about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo('credentials')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Credentials
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* Hero Heading - Dao Thanh Phuc */}
      <div className="w-full overflow-hidden text-center z-0">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m phuc dao
          </h1>
        </FadeIn>
      </div>

      {/* Hero 3D Centerpiece with Magnet Effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full h-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full"
          >
            <div className="relative group cursor-pointer">
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Phuc Dao - Full Stack Laravel Architect"
                className="w-full h-auto object-contain pointer-events-none drop-shadow-2xl"
                loading="eager"
              />
              {/* Subtle Tech Badge Overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-slate-700/80 px-4 py-1.5 rounded-full backdrop-blur-md text-[11px] font-mono text-cyan-400 whitespace-nowrap shadow-xl">
                Laravel 12 • Database Architect
              </div>
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 mt-auto">
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-col gap-1 max-w-[200px] sm:max-w-[280px] md:max-w-[340px]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              Senior Full-Stack Laravel Engineer • Ho Chi Minh City
            </span>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
              style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.35rem)' }}
            >
              A Full-Stack Laravel Architect driven by slashing database bottlenecks & zero-downtime legacy migrations
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => scrollTo('contact')} />
        </FadeIn>
      </div>

    </section>
  );
};
