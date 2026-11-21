import React from 'react';
import { FadeIn } from '../components/FadeIn';

interface ExperienceItem {
  id: string;
  number: string;
  company: string;
  role: string;
  period: string;
  badge: string;
  description: string;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: '01',
    number: '01',
    company: 'TRIVIET SOFTWARE CO., LTD',
    role: 'Backend & Full-Stack Developer',
    period: 'Jul 2023 – Present',
    badge: 'Full-Time • Core Architecture',
    description:
      'Designed modular Laravel base admin architecture with 440+ commits, slashing project onboarding and setup time by 80%. Enforced 4-tier Clean Architecture (Controller → Service → Repository → Model) across engineering workflows with 17 strict design rules. Engineered automated CI/CD pipeline integrating PHPUnit test verification loops before pull requests.',
    tags: ['Laravel 11/12', 'Clean Architecture', 'PHPUnit CI/CD', '440+ Commits', 'RBAC (118 Perms)'],
  },
  {
    id: '02',
    number: '02',
    company: 'VIETNAMESE COMMERCIAL BANK',
    role: 'Enterprise Backend Engineer (Confidential Client)',
    period: 'Aug 2025 – Dec 2025',
    badge: 'Enterprise Banking Platform',
    description:
      'Architected employee coaching and competency assessment platform for a major Vietnamese commercial bank. Engineered high-throughput Laravel 10 RESTful APIs integrated with React, implementing stringent bank-grade RBAC, sensitive data encryption, and zero-defect transactional audit logs.',
    tags: ['Laravel 10', 'React RESTful API', 'Bank-Grade RBAC', 'Audit Logs', 'High Security'],
  },
  {
    id: '03',
    number: '03',
    company: 'JAPANESE LIFE INSURANCE ENTERPRISE',
    role: 'Backend Engineer (30-Member Engineering Team)',
    period: 'Aug 2025 – Dec 2025',
    badge: 'Global Enterprise System',
    description:
      'Collaborated in a 30-member cross-functional engineering team delivering an enterprise HR and compliance e-learning system. Optimized high-concurrency exam submissions, interactive video tracking, and multi-tenant data partitioning under high traffic loads.',
    tags: ['High Concurrency', 'E-Learning Engine', 'Database Sharding', 'Enterprise HR', 'MySQL 8'],
  },
  {
    id: '04',
    number: '04',
    company: 'POSTS & TELECOMMUNICATIONS INSTITUTE OF TECHNOLOGY',
    role: 'Bachelor of Computer Science (B.CompSc.)',
    period: '2021 – 2025',
    badge: 'PTIT Vietnam • University Degree',
    description:
      'Graduated with rigorous foundational training in Data Structures & Algorithms, Relational Database Systems, Operating Systems, Computer Networks, and Distributed Software Engineering. Built deep expertise in high-concurrency database design.',
    tags: ['B.CompSc. Degree', 'Database Systems', 'Algorithms', 'Network Architecture'],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-0 select-none"
    >
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 mb-2 block">
              Work History & Engineering Journey
            </span>
            <h2
              className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 140px)' }}
            >
              Experience
            </h2>
          </div>
        </FadeIn>

        {/* Vertical List of 4 Experiences */}
        <div className="w-full border-t border-[rgba(12,12,12,0.15)]">
          {experiences.map((item, index) => (
            <FadeIn
              key={item.id}
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
                  {item.number}
                </span>

                {/* Right: Company + Role + Description + Tags */}
                <div className="flex flex-col gap-2 max-w-2xl w-full">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3
                      className="font-black uppercase text-[#0C0C0C] tracking-wide"
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.6rem)' }}
                    >
                      {item.company}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-900 text-white">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-cyan-700 font-mono">
                      {item.role}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.badge}
                    </span>
                  </div>

                  <p
                    className="text-[#3A3A3A] font-light leading-relaxed mt-1"
                    style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)' }}
                  >
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
