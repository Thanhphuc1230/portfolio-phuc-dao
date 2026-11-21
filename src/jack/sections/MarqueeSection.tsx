import React, { useRef, useState, useEffect } from 'react';

interface MarqueeItem {
  title: string;
  tag: string;
  imgUrl: string;
}

const marqueeRow1: MarqueeItem[] = [
  { title: 'chuaadida.com', tag: '15.3M+ Visits Scale', imgUrl: 'project-img/chuaadida.com/home-page.png' },
  { title: 'bocxep.vn', tag: 'CodeIgniter to Laravel 12', imgUrl: 'project-img/bocxep-migrate/thumnail-migrate-bocxep.png' },
  { title: 'perform.edu.vn', tag: '99/100 PageSpeed', imgUrl: 'project-img/perform.edu.vn/preview-perform.edu.vn.png' },
  { title: 'chienthangroup.vn', tag: '3D PDF Flipbook', imgUrl: 'project-img/chienthangroup.vn/desktop-chienthangroup.vn.png' },
  { title: 'greattravel.vn', tag: '85% Query Cut', imgUrl: 'project-img/greattravel.vn/desktop-greattravel-1.png' },
  { title: 'chuaadida.com', tag: 'Custom ETL Tool', imgUrl: 'project-img/chuaadida.com/admin-preview.png' },
  { title: 'bocxep.vn', tag: '100% SEO Slugs Preserved', imgUrl: 'project-img/bocxep-migrate/admin-laravel-bocxep.jpg' },
  { title: 'perform.edu.vn', tag: 'TTFB 140ms on Edge', imgUrl: 'project-img/perform.edu.vn/PageSpeed perform.edu.vn 100.png' },
];

const marqueeRow2: MarqueeItem[] = [
  { title: 'Architecture Diagram', tag: 'PHP 7.4 to 8.2 Migration', imgUrl: 'project-img/bocxep-migrate/migrate-codegilter-7-4-to-laravel-8-3.png' },
  { title: 'Perform Admin CMS', tag: 'E-Learning & Course Cart', imgUrl: 'project-img/perform.edu.vn/perview-admin-perform.edu.vn.png' },
  { title: 'Chien Than Admin', tag: 'VIP Table Reservation', imgUrl: 'project-img/chienthangroup.vn/admin-chienthangroup.vn.png' },
  { title: 'Great Travel Vitals', tag: 'Core Web Vitals 92+', imgUrl: 'project-img/greattravel.vn/pagespeed-desktop-greatravel.png' },
  { title: 'Chuaadida CMS', tag: '10,000+ Posts & Books', imgUrl: 'project-img/chuaadida.com/admin-chuaadida.jpg' },
  { title: 'Great Travel Mobile', tag: 'Sub-300ms Filter Engine', imgUrl: 'project-img/greattravel.vn/desktop-greattravel-2.png' },
  { title: 'Perform Mobile UX', tag: 'Instant Checkout Funnel', imgUrl: 'project-img/perform.edu.vn/preview-mobi-perform.edu.vn.png' },
  { title: 'Chien Than Mobile', tag: '3D Menu Byte-Streaming', imgUrl: 'project-img/chienthangroup.vn/mobi-chienthangroup.vn.png' },
];

const row1Tripled = [...marqueeRow1, ...marqueeRow1, ...marqueeRow1];
const row2Tripled = [...marqueeRow2, ...marqueeRow2, ...marqueeRow2];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-12 overflow-hidden w-full select-none relative"
    >
      <div className="flex flex-col gap-4 w-full">
        
        {/* Row 1 - Moves RIGHT on scroll: translateX(offset - 200) */}
        <div
          className="flex gap-4 w-max"
          style={{
            transform: `translate3d(${offset - 200}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {row1Tripled.map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="w-[420px] h-[260px] min-w-[420px] rounded-2xl overflow-hidden bg-slate-900 shrink-0 relative group border border-slate-800"
            >
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white tracking-wide">{item.title}</span>
                <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-slate-950/80 border border-cyan-800/60">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Moves LEFT on scroll: translateX(-(offset - 200)) */}
        <div
          className="flex gap-4 w-max"
          style={{
            transform: `translate3d(${-(offset - 200)}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {row2Tripled.map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="w-[420px] h-[260px] min-w-[420px] rounded-2xl overflow-hidden bg-slate-900 shrink-0 relative group border border-slate-800"
            >
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white tracking-wide">{item.title}</span>
                <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-slate-950/80 border border-emerald-800/60">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
