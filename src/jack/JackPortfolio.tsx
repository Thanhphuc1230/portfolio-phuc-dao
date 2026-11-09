import React, { useEffect } from 'react';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';

export const JackPortfolio: React.FC = () => {
  useEffect(() => {
    document.title = 'Jack -- 3D Creator';
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
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
};
