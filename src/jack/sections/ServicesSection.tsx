import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '01',
    number: '01',
    name: 'Legacy System Migration to Laravel',
    badge: 'High-Value Architecture',
    pricing: 'Starting $150 – $1,200+',
    description:
      'Seamless end-to-end migration from legacy .NET, CodeIgniter 3, or native PHP 7.x to cutting-edge Laravel 12. Guaranteed 100% SEO URL slug preservation, zero Google Ads disruption, and zero-loss database ETL.',
  },
  {
    id: '02',
    number: '02',
    name: 'Bug Fixing & PHP 8.2/8.3 Upgrade',
    badge: 'Fast Turnaround',
    pricing: 'Starting $30 – $150',
    description:
      'Rapid surgical debugging for breaking PHP 8.2/8.3 deprecations, slow query deadlocks, relational N+1 query bottlenecks, Redis queue worker crashes, and complex RBAC authorization errors.',
  },
  {
    id: '03',
    number: '03',
    name: 'Speed, TTFB & Core Web Vitals 90+',
    badge: 'Performance Specialist',
    pricing: 'Starting $50 – $250',
    description:
      'Slashing server TTFB from 820ms down to 140ms via Redis Cache-Aside, automated Next-Gen WebP image pipelines (cutting 75% payload), query profiling, and Cloudflare HTTP/3 (QUIC) edge caching.',
  },
  {
    id: '04',
    number: '04',
    name: 'Custom Admin CMS & Enterprise Dashboards',
    badge: 'Full Product Delivery',
    pricing: 'Starting $150 – $600+',
    description:
      'Bespoke Admin CRUD platforms replacing fragile FTP code editing. Equipped with 118-permission RBAC, high-throughput background Excel/CSV imports, media managers, and audit logs.',
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
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 mb-2 block">
              Contract & Freelance Deliverables
            </span>
            <h2
              className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
            >
              Services
            </h2>
          </div>
        </FadeIn>

        {/* Vertical List of 4 Services */}
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
                  style={{ fontSize: 'clamp(3rem, 9vw, 120px)' }}
                >
                  {service.number}
                </span>

                {/* Right: Name + Description stacked vertically */}
                <div className="flex flex-col gap-2 max-w-2xl w-full">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3
                      className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
                    >
                      {service.name}
                    </h3>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {service.pricing}
                    </span>
                  </div>

                  <p
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-70"
                    style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.15rem)' }}
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
