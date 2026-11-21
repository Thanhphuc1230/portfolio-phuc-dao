import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { ProjectItem } from '../types';
import { CheckCircle2 } from 'lucide-react';

const projects: ProjectItem[] = [
  {
    id: '01',
    number: '01',
    category: 'Legacy Migration / 15.3M+ Scale (.NET to Laravel)',
    name: 'chuaadida.com',
    col1TopImage: 'project-img/chuaadida.com/admin-chuaadida.jpg',
    col1BottomImage: 'project-img/chuaadida.com/admin-preview.png',
    col2Image: 'project-img/chuaadida.com/home-page.png',
    liveUrl: 'https://chuaadida.com',
    highlights: [
      'Scaled to 15.3M+ total visits with zero downtime during peak Buddhist festivals.',
      'Engineered custom queue-based ETL to migrate 10,000+ multi-chapter posts & books.',
      'European VPS + Cloudflare Edge CDN slashed operational hosting expenses by 75%.',
    ],
  },
  {
    id: '02',
    number: '02',
    category: 'Legacy Migration (CodeIgniter 7.4 to Laravel 12)',
    name: 'bocxep.vn',
    col1TopImage: 'project-img/bocxep-migrate/admin-laravel-bocxep.jpg',
    col1BottomImage: 'project-img/bocxep-migrate/migrate-codegilter-7-4-to-laravel-8-3.png',
    col2Image: 'project-img/bocxep-migrate/thumnail-migrate-bocxep.png',
    liveUrl: 'https://bocxep.vn',
    highlights: [
      '100% SEO URL slugs preserved with zero drop in running Google Ads campaign traffic.',
      'Automated Next-Gen WebP image compression pipeline cut total payload by 75%.',
      'Engineered custom Admin CMS replacing risky manual FTP code editing.',
    ],
  },
  {
    id: '03',
    number: '03',
    category: 'Corporate EdTech & High-Performance E-Learning',
    name: 'perform.edu.vn',
    col1TopImage: 'project-img/perform.edu.vn/perview-admin-perform.edu.vn.png',
    col1BottomImage: 'project-img/perform.edu.vn/PageSpeed perform.edu.vn 100.png',
    col2Image: 'project-img/perform.edu.vn/preview-perform.edu.vn.png',
    liveUrl: 'https://perform.edu.vn',
    highlights: [
      'Google PageSpeed: 97 Mobile / 99 Desktop, 100/100 SEO & Best Practices.',
      'TTFB cut by 5.8x (820ms down to 140ms) via Redis Cache-Aside & MySQL indexing.',
      'Complete enrollment funnel with dynamic cart, checkout, and custom RBAC admin CMS.',
    ],
  },
  {
    id: '04',
    number: '04',
    category: 'Luxury Hospitality & 3D PDF Flipbook Engine',
    name: 'chienthangroup.vn',
    col1TopImage: 'project-img/chienthangroup.vn/admin-chienthangroup.vn.png',
    col1BottomImage: 'project-img/chienthangroup.vn/mobi-chienthangroup.vn.png',
    col2Image: 'project-img/chienthangroup.vn/desktop-chienthangroup.vn.png',
    liveUrl: 'https://chienthangroup.vn',
    highlights: [
      'Interactive 3D PDF Flipbook Menu with byte-streaming (compressed 30MB down to 8.5MB).',
      'Omnichannel table reservation engine with automated VIP room availability scheduling.',
      '100/100 Google Lighthouse SEO & Schema JSON-LD with Cloudflare HTTP/3.',
    ],
  },
  {
    id: '05',
    number: '05',
    category: 'Tourism Portal & Itinerary Booking Engine',
    name: 'greattravel.vn',
    col1TopImage: 'project-img/greattravel.vn/pagespeed-desktop-greatravel.png',
    col1BottomImage: 'project-img/greattravel.vn/desktop-greattravel-2.png',
    col2Image: 'project-img/greattravel.vn/desktop-greattravel-1.png',
    liveUrl: 'https://greattravel.vn',
    highlights: [
      'Eliminated 85% of redundant relational queries across complex multi-tier tour catalogs.',
      'TTFB dropped from 2.5s down to 280ms with sub-300ms interactive tour discovery.',
      'Core Web Vitals 92+ green across 10,000+ tour variation schedules.',
    ],
  },
];

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="min-h-[85vh] flex items-start justify-center sticky top-20 md:top-28 w-full mb-12"
      style={{
        top: `calc(${index * 26}px + 5rem)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[35px] sm:rounded-[45px] md:rounded-[55px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-8 shadow-2xl flex flex-col justify-between origin-top"
      >
        {/* Top Row: Number, Category label, Project name, Live Project button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-7">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 90px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-cyan-400">
                {project.category}
              </span>
              <h3
                className="font-bold uppercase tracking-wide text-white"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.liveUrl || '#'} />
        </div>

        {/* Highlights Row */}
        {project.highlights && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-4 pb-4 border-b border-slate-800/80">
            {project.highlights.map((h, hIdx) => (
              <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Row: Two-Column Image Grid (40% Left stacked, 60% Right tall) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 pt-5 items-stretch">
          
          {/* Left Column (40% width / 5 cols) - 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            <div
              className="w-full rounded-[25px] sm:rounded-[35px] md:rounded-[40px] overflow-hidden bg-slate-900 border border-slate-800"
              style={{ height: 'clamp(140px, 16vw, 220px)' }}
            >
              <img
                src={project.col1TopImage}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover rounded-[25px] sm:rounded-[35px] md:rounded-[40px] hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div
              className="w-full rounded-[25px] sm:rounded-[35px] md:rounded-[40px] overflow-hidden bg-slate-900 border border-slate-800"
              style={{ height: 'clamp(160px, 20vw, 300px)' }}
            >
              <img
                src={project.col1BottomImage}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover rounded-[25px] sm:rounded-[35px] md:rounded-[40px] hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (60% width / 7 cols) - 1 tall desktop image */}
          <div className="md:col-span-7 rounded-[25px] sm:rounded-[35px] md:rounded-[40px] overflow-hidden bg-slate-900 min-h-[300px] border border-slate-800">
            <img
              src={project.col2Image}
              alt={`${project.name} main showcase`}
              className="w-full h-full object-cover rounded-[25px] sm:rounded-[35px] md:rounded-[40px] hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

        </div>

      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 pb-32 px-4 sm:px-6 md:px-8 select-none"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 text-center">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 mb-2 block">
            Verified Production Delivery
          </span>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Sticky Stacking Project Cards */}
        <div className="relative flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projects.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
