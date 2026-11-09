import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '01',
    number: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    id: '02',
    number: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    id: '03',
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    id: '04',
    number: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    id: '05',
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-0 select-none"
    >
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Vertical List of 5 Service Items */}
        <div className="w-full border-t border-[rgba(12,12,12,0.15)]">
          {services.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              y={25}
              className="border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-10">
                
                {/* Left: Huge Number */}
                <span
                  className="font-black text-[#0C0C0C] leading-none shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </span>

                {/* Right: Name + Description stacked vertically */}
                <div className="flex flex-col gap-2 max-w-2xl w-full">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
