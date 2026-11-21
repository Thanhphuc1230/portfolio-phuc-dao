import React, { useEffect } from 'react';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactAndFooterSection } from './sections/ContactAndFooterSection';

export const JackPortfolio: React.FC = () => {
  useEffect(() => {
    document.title = 'Đào Thanh Phúc (Phuc Dao) — Senior Full-Stack Laravel Engineer & Database Optimization Specialist';
  }, []);

  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] min-h-screen w-full relative"
      style={{
        fontFamily: "'Kanit', sans-serif",
        overflowX: 'clip',
      }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactAndFooterSection />
    </div>
  );
};
