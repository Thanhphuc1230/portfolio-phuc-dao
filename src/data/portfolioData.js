export const profileData = {
  name: "Đào Thanh Phúc",
  englishName: "Phuc Dao",
  brandName: "Dao T. / Phuc Dao",
  roleTitle: "Full Stack Laravel Developer | High-Performance Database & Legacy Migration Architect",
  location: "Ho Chi Minh City, Vietnam (UTC+7)",
  tagline: "Architecting high-concurrency Laravel platforms, slashing database bottlenecks, and migrating mission-critical legacy systems with zero downtime.",
  email: "phucdao.dev@gmail.com",
  github: "https://github.com/thanhphucdao",
  linkedin: "https://www.linkedin.com/in/daothanhphuc/",
  fiverrUrl: "https://www.fiverr.com",
  upworkUrl: "https://www.upwork.com",
  experienceYears: "3+ Years Web Production & High-Traffic Architecture",
  englishLevel: "Async communication, technical documentation, and international client requirements",
  stats: [
    { label: "Proven Traffic Scale", value: "15.3M+", subtext: "Total visits on chuaadida.com", icon: "TrendingUp" },
    { label: "Google PageSpeed", value: "99/100", subtext: "Verified Mobile & Desktop Vitals", icon: "Gauge" },
    { label: "Query Optimization", value: "85%", subtext: "Eliminated redundant DB queries", icon: "Database" },
    { label: "TTFB Latency Cut", value: "5.8x", subtext: "820ms down to 140ms on Edge", icon: "Zap" },
    { label: "Foundation Commits", value: "440+", subtext: "Modular Laravel 12 Boilerplate", icon: "GitCommit" },
    { label: "SEO & Ads Safety", value: "100%", subtext: "Zero Google Ads / URL disruption", icon: "ShieldCheck" },
  ]
};

export const impactMetrics = [
  {
    metric: "15.3M+",
    label: "Total Visits Scaled",
    description: "Successfully re-architected and served over 15.3 million visits with zero downtime on chuaadida.com.",
    badge: "High-Traffic Scale",
    color: "amber"
  },
  {
    metric: "99/100",
    label: "Top PageSpeed Score",
    description: "Achieved verified sub-second rendering and perfect Core Web Vitals on mobile and desktop platforms.",
    badge: "Lighthouse Verified",
    color: "cyan"
  },
  {
    metric: "5.8x",
    label: "TTFB Latency Reduction",
    description: "Slashed Time-To-First-Byte from 820ms to 140ms using Brotli, Redis Cache-Aside & Cloudflare Edge CDN.",
    badge: "Edge Performance",
    color: "indigo"
  },
  {
    metric: "85%",
    label: "Redundant Queries Cut",
    description: "Eliminated N+1 bottlenecks and optimized MySQL execution plans via strategic composite indexes.",
    badge: "DB Optimization",
    color: "emerald"
  }
];

export const verifiedCertifications = [
  {
    title: "Meta Back-End Developer Professional Certificate",
    issuer: "Meta",
    category: "Backend Architecture & RESTful APIs",
    skills: ["Python/Django & PHP API Design", "Relational Databases", "Cloud Hosting", "CI/CD & Version Control"],
    badgeColor: "cyan"
  },
  {
    title: "IBM DevOps and Software Engineering Professional Certificate",
    issuer: "IBM",
    category: "DevOps, Automation & TDD",
    skills: ["Docker & Containers", "Microservices", "TDD & BDD with Automated Testing", "CI/CD GitHub Actions"],
    badgeColor: "indigo"
  },
  {
    title: "IBM Front-End Developer Professional Certificate",
    issuer: "IBM",
    category: "Modern UI/UX & Responsive Engineering",
    skills: ["Modern JavaScript & React", "Responsive Web Design", "UI Performance", "Web Accessibility (WCAG)"],
    badgeColor: "emerald"
  },
  {
    title: "Web Applications Specialization",
    issuer: "University of Michigan",
    category: "Computer Science & Web Engineering",
    skills: ["Web Architecture", "Database Design", "Application Security", "SQL Query Optimization"],
    badgeColor: "amber"
  },
  {
    title: "Bachelor of Computer Science (B.CompSc.)",
    issuer: "Posts and Telecommunications Institute of Technology (PTIT)",
    category: "Formal Degree (2021 – 2025)",
    skills: ["Data Structures & Algorithms", "Distributed Systems", "Database Theory", "Computer Networks"],
    badgeColor: "purple"
  }
];

export const fiverrGigs = [
  {
    id: "gig-migration",
    badge: "High-Value Flagship",
    title: "I will migrate your legacy PHP, CodeIgniter, or .NET website to modern Laravel",
    category: "Web Programming > Web Migration & Maintenance",
    priceRange: "$150 – $1,200+",
    tags: ["laravel-migration", "codeigniter-to-laravel", "dotnet-to-php", "database-migration", "legacy-code"],
    strengths: [
      "100% SEO preservation with URL slug mapping guarantee (zero Google Ads disruption).",
      "Safe database ETL (MSSQL/MySQL) with zero data loss on large relational schemas.",
      "Modernized UI: responsive, mobile-first Blade/Tailwind frontend replacing outdated CSS.",
      "Production-ready Linux VPS + Cloudflare CDN setup cutting server costs up to 75%."
    ],
    proofProject: "chuaadida.com (15.3M+ visits) & bocxep.vn (CodeIgniter to Laravel 12)"
  },
  {
    id: "gig-bugfix",
    badge: "Fast Turnaround / 5-Star Driver",
    title: "I will fix Laravel bugs, upgrade PHP version, and solve MySQL database errors",
    category: "Web Programming > Bug Fixes",
    priceTiers: [
      { name: "Basic", price: "$30", desc: "Single critical bug fix or quick error patch" },
      { name: "Standard", price: "$75", desc: "Up to 3 complex bugs, PHP 8.2 upgrade, or SMTP/Queue issue" },
      { name: "Premium", price: "$150", desc: "Full system audit, deep N+1 query fixing, and RBAC policy overhaul" }
    ],
    tags: ["laravel-bug-fix", "php-upgrade", "mysql-error", "laravel-error", "api-bug"],
    strengths: [
      "Rapid resolution of PHP 8.2 / 8.3 deprecations and strict typing errors.",
      "Fixing slow query logs, deadlocks, and relational N+1 query bottlenecks.",
      "Resolving email SMTP, Redis queue worker crashes, and third-party API webhook bugs.",
      "Detailed bug-root-cause report provided with test verification."
    ],
    proofProject: "Production Laravel 12 Admin Foundation (440+ commits)"
  },
  {
    id: "gig-speed",
    badge: "High-Converting Speed Specialist",
    title: "I will optimize your Laravel website speed, TTFB, and Google PageSpeed to 90+",
    category: "Website Development > Performance & Speed",
    priceTiers: [
      { name: "Basic", price: "$50", desc: "Image optimization + browser caching setup" },
      { name: "Standard", price: "$120", desc: "TTFB optimization + Redis cache-aside + DB indexing" },
      { name: "Premium", price: "$250", desc: "Guaranteed 90+ PageSpeed Mobile/Desktop + Cloudflare HTTP/3" }
    ],
    tags: ["pagespeed-optimization", "ttfb-reduction", "laravel-speed", "redis-caching", "core-web-vitals"],
    strengths: [
      "Sub-200ms Time-To-First-Byte (TTFB) guaranteed via Redis and OPcache tuning.",
      "Automated Next-Gen WebP image conversion pipeline (cuts asset weight by up to 75%).",
      "Green Core Web Vitals: Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS).",
      "Cloudflare HTTP/3 (QUIC), Brotli compression, and Speculation Rules integration."
    ],
    proofProject: "perform.edu.vn (99 PageSpeed, TTFB 140ms) & greattravel.vn (92+ Vitals)"
  },
  {
    id: "gig-custom-admin",
    badge: "Full Product Delivery",
    title: "I will develop a custom Laravel admin panel, dashboard, and CMS for your business",
    category: "Web Programming > Custom Websites",
    priceRange: "$150 – $600+",
    tags: ["laravel-admin-panel", "custom-cms", "laravel-dashboard", "rbac-system", "web-application"],
    strengths: [
      "Tailor-made Admin CRUD replacing fragile FTP code editing and manual spreadsheets.",
      "Multi-tier Role-Based Access Control (RBAC) with granular user permissions.",
      "High-throughput Excel/CSV export & import using chunked background queues.",
      "Automated media library, activity audit trail, and dynamic SEO sitemap generator."
    ],
    proofProject: "Enterprise HR/E-learning systems & Custom Base Admin Boilerplate"
  }
];

export const caseStudies = [
  {
    id: "chuaadida",
    title: "chuaadida.com",
    subtitle: "High-Traffic Buddhism Multimedia Portal (15.3M+ Visits)",
    liveUrl: "https://chuaadida.com",
    role: "Lead Migration Architect & Full-Stack Engineer",
    scope: "Cross-platform migration from legacy .NET 2008 & MSSQL to Laravel & MySQL, custom ETL, responsive UX, European VPS & Cloudflare CDN",
    image: "img/chuaadida_home.png",
    adminImage: "img/chuaadida_admin.png",
    metrics: [
      { label: "Total Visits", value: "15.3M+ Scale" },
      { label: "Content Volume", value: "10,000+ Posts & Books" },
      { label: "Hosting Cost Cut", value: "75% Reduction" },
      { label: "Data Integrity", value: "100% Zero-Loss ETL" }
    ],
    techStack: ["Laravel 10", "PHP 8.2", "MySQL 8", "MSSQL ETL", "Redis", "Cloudflare CDN", "Ubuntu Linux VPS"],
    highlights: [
      "Migrated massive mission-critical database from .NET 2008 / MSSQL to Laravel 10 / MySQL with zero data loss.",
      "Engineered custom queue-based ETL migration scripts handling multi-chapter books, high-res galleries, and audio tracks.",
      "Modernized 100% of the frontend to an elegant, responsive mobile-first experience.",
      "Deployed on European VPS with Cloudflare Edge CDN, slashing operational hosting expenses by 75% while scaling effortlessly."
    ],
    challenge: "Outdated 2008 .NET system running on expensive proprietary Windows servers with fragmented MSSQL tables, suffering frequent slowdowns during Buddhist holidays.",
    solution: "Built a fault-tolerant ETL pipeline to migrate millions of relational records into MySQL 8 with composite indexes, deployed Laravel with Redis caching behind Cloudflare edge rules."
  },
  {
    id: "bocxep",
    title: "bocxep.vn",
    subtitle: "Enterprise Logistics & Labor Services Portal",
    liveUrl: "https://bocxep.vn",
    role: "Lead Full-Stack Architect",
    scope: "Complete migration from Legacy CodeIgniter (PHP 7.4) to Laravel 12 (PHP 8.2+), SEO Preservation, WebP Pipeline, Custom Admin CMS",
    image: "img/bocxep_thumbnail.png",
    adminImage: "img/bocxep_admin.jpg",
    metrics: [
      { label: "SEO Slugs", value: "100% Preserved" },
      { label: "Google Ads Disruption", value: "0 Downtime" },
      { label: "Image Payload", value: "-75% WebP Cut" },
      { label: "Admin CMS", value: "Custom Built" }
    ],
    techStack: ["Laravel 12", "PHP 8.2+", "CodeIgniter Migration", "MySQL", "WebP Converter", "Custom Admin CMS"],
    highlights: [
      "Executed seamless architectural overhaul from legacy CodeIgniter 3 (PHP 7.4) to cutting-edge Laravel 12 (PHP 8.2+).",
      "Preserved 100% of URL slugs, meta hierarchy, and active Google Ads landing pages with zero disruption to paid search revenue.",
      "Engineered automated Next-Gen WebP image processing pipeline, slashing total page payload weight by 75%.",
      "Designed custom Admin CMS replacing risky manual file and FTP editing, empowering non-technical operators to manage content."
    ],
    challenge: "The client was locked into an unmaintainable CodeIgniter PHP 7.4 codebase with high Google Ads spend that could not tolerate any URL changes, 404s, or downtime.",
    solution: "Re-architected the system onto Laravel 12 with strict route-matching rules, built a custom admin dashboard, and optimized asset delivery for lightning-fast ad landing page performance."
  },
  {
    id: "perform-edu",
    title: "perform.edu.vn",
    subtitle: "Corporate EdTech & Interactive Training Academy",
    liveUrl: "https://perform.edu.vn",
    role: "Sole Full-Stack Developer",
    scope: "End-to-End: Discovery, UI/UX Design, Laravel Backend, DB Architecture, VPS & CI/CD",
    image: "img/perform_preview.png",
    adminImage: "img/perform_admin.png",
    metrics: [
      { label: "Mobile PageSpeed", value: "97/100" },
      { label: "Desktop PageSpeed", value: "99/100" },
      { label: "SEO & Best Practices", value: "100/100" },
      { label: "TTFB Cut", value: "5.8x (820ms → 140ms)" }
    ],
    techStack: ["Laravel 10", "Tailwind CSS", "MySQL 8", "Redis", "YouTube API", "Cloudflare Edge CDN", "Nginx HTTP/3"],
    highlights: [
      "Full course enrollment funnel with dynamic cart, payment checkout, and student registration.",
      "Custom RBAC admin CMS managing instructors, student progress, discount codes, and order lifecycles.",
      "98% WebP image asset conversion pipeline with next-gen automated image delivery.",
      "Google PageSpeed Verified: 97 Mobile / 99 Desktop, cutting TTFB from 820ms down to 140ms via Redis and MySQL composite indexing."
    ],
    challenge: "High traffic spikes during corporate training enrollment campaigns caused server latency and drop-offs on unoptimized hosting.",
    solution: "Deployed Redis Cache-Aside caching layer, optimized database indexes, configured Cloudflare edge rules, and converted all static media to WebP format."
  },
  {
    id: "chien-than",
    title: "chienthangroup.vn",
    subtitle: "Luxury Hospitality & Digital Menu Engine",
    liveUrl: "https://chienthangroup.vn",
    role: "Sole Full-Stack Architect & DevOps",
    scope: "4-Tier Architecture, Interactive Menu Engine, Reservation Funnel & Cloudflare Edge",
    image: "img/chienthan_desktop.png",
    adminImage: "img/chienthan_admin.png",
    metrics: [
      { label: "Lighthouse SEO", value: "100/100" },
      { label: "Accessibility", value: "100/100" },
      { label: "PDF Optimization", value: "30MB → 8.5MB" },
      { label: "Rendering Speed", value: "Sub-Second" }
    ],
    techStack: ["Laravel 10", "PHP 8.2", "Bootstrap 5", "Redis", "Self-Hosted PDF.js", "Cloudflare HTTP/3", "Ubuntu VPS"],
    highlights: [
      "Engineered 4-tier clean architecture (Controller → Service → Repository → Model) isolating business logic.",
      "Interactive 3D PDF Flipbook Menu with self-hosted PDF.js byte-range streaming, compressing 30MB down to 8.5MB for sub-second mobile viewing.",
      "Omnichannel table reservation engine with automated VIP room availability scheduling.",
      "Zero-downtime automated deployment with Cloudflare edge caching, Brotli compression, and 100/100 Lighthouse SEO."
    ],
    challenge: "High-resolution graphic food & wine menu PDF files (30MB+) crashed mobile devices and took 12+ seconds to load.",
    solution: "Architected a self-hosted PDF.js flipbook engine utilizing HTTP 206 partial byte-range requests and stream compression, delivering an instant sub-second interactive browsing experience."
  },
  {
    id: "great-travel",
    title: "greattravel.vn",
    subtitle: "Tourism Portal & Itinerary Booking Engine",
    liveUrl: "https://greattravel.vn",
    role: "Freelance Full-Stack Developer & Database Architect",
    scope: "Catalog Engine, Database Optimization, Redis Caching & Swiper.js UX",
    image: "img/greattravel_desktop.png",
    adminImage: "img/greattravel_pagespeed.png",
    metrics: [
      { label: "DB Query Cut", value: "85% Redundant" },
      { label: "TTFB Drop", value: "2.5s → 280ms" },
      { label: "Core Web Vitals", value: "92+ Green" },
      { label: "Catalog Scaling", value: "10,000+ Tours" }
    ],
    techStack: ["Laravel", "PHP 8.2", "MySQL 8", "Redis", "Swiper.js", "Cloudflare Edge CDN", "Tailwind CSS"],
    highlights: [
      "Multi-tiered tour catalog hierarchy handling domestic, international, and bespoke itinerary packages.",
      "Real-time pricing matrix calculation engine with custom group discount quotas and quote cart.",
      "Eliminated massive N+1 queries across multi-level tour categories and departure date schedules.",
      "Sub-300ms interactive tour discovery with asynchronous filter queries and lazy-loaded galleries."
    ],
    challenge: "Complex relational queries across tours, dates, pricing tiers, and locations caused 2.5-second page hangs.",
    solution: "Restructured the database schema with strategic composite indexes, implemented eager loading constraints, and added Redis caching for catalog aggregations."
  },
  {
    id: "laravel-foundation",
    title: "Laravel 12 Admin Foundation & SaaS Backbone",
    subtitle: "Enterprise Boilerplate & Clean Architecture Framework",
    liveUrl: "https://github.com/thanhphucdao",
    role: "Lead Architect & Open Source Author",
    scope: "Core Architecture, 17 Strict Design Rules, 118 Granular RBAC Permissions, Automated CI/CD",
    image: "img/bocxep_diagram.png",
    adminImage: "img/bocxep_admin.jpg",
    metrics: [
      { label: "Commits", value: "440+ Commits" },
      { label: "Setup Time Cut", value: "80% Faster" },
      { label: "RBAC Permissions", value: "118 Granular" },
      { label: "Test Coverage", value: "PHPUnit Automated" }
    ],
    techStack: ["Laravel 11/12", "PHP 8.2+", "MySQL 8", "Redis", "PHPUnit", "GitHub Actions CI/CD", "Docker"],
    highlights: [
      "Enforced strict 4-tier Clean Architecture: Controller → Service → Repository → Model.",
      "Granular RBAC system with 118 individual permissions and hierarchical role inheritance.",
      "Integrated Redis Cache-Aside pattern with automated cache-tag invalidation on model updates.",
      "Continuous CI/CD pipeline executing static analysis, PHPUnit automated tests, and deployment verification."
    ],
    challenge: "Scattered architectural patterns across team members caused technical debt, duplicate queries, and slow onboarding.",
    solution: "Standardized the enterprise codebase into a battle-tested modular foundation, shortening new project setup from days to hours."
  }
];

export const skillsData = {
  backend: {
    title: "Backend & Legacy Migration",
    description: "Modernizing legacy stacks, building high-throughput APIs, and clean decoupled architectures.",
    skills: [
      { name: "PHP 8.2 / 8.3 & Legacy PHP", level: "Expert", tags: ["Fibers", "JIT", "Strict Types", "7.4 Migration"] },
      { name: "Laravel (10, 11, 12)", level: "Expert", tags: ["Service Container", "Queues", "Events", "Jobs"] },
      { name: "Legacy Migration (.NET / CodeIgniter)", level: "Expert", tags: ["ETL Tools", "Zero Downtime", "URL Slugs"] },
      { name: "RESTful API Design", level: "Expert", tags: ["API Resources", "HATEOAS", "Versioning"] },
      { name: "Service-Repository Pattern", level: "Expert", tags: ["Decoupled", "SOLID", "Unit Testable"] },
      { name: "Granular RBAC (118 Permissions)", level: "Expert", tags: ["Multi-Level", "Gate/Policy", "Multi-Tenant"] },
      { name: "PHPUnit & Automated Testing", level: "Advanced", tags: ["Mocking", "Feature Tests", "Coverage Reports"] }
    ]
  },
  database: {
    title: "Database & Caching Optimization",
    description: "Deep query optimization, index tuning, and high-concurrency caching layers.",
    skills: [
      { name: "MySQL 8", level: "Expert", tags: ["Execution Plans", "EXPLAIN", "ACID", "Schema Design"] },
      { name: "MSSQL & Cross-DB Migration", level: "Advanced", tags: ["Data Extraction", "Type Mapping", "ETL"] },
      { name: "Redis (Cache-Aside)", level: "Expert", tags: ["Cache Invalidation", "Atomic Locks", "Queues", "Sessions"] },
      { name: "Composite Indexing", level: "Expert", tags: ["B-Tree Tuning", "Covering Indexes", "Selectivity"] },
      { name: "Slow Query Profiling", level: "Expert", tags: ["Slow Log Analysis", "Percona Toolkit", "Optimizer"] },
      { name: "N+1 Query Elimination", level: "Expert", tags: ["Eager Loading", "Chunking", "Cursor Pagination"] }
    ]
  },
  performance: {
    title: "Web Speed & Core Web Vitals",
    description: "Sub-second rendering, edge optimization, and next-gen media compression.",
    skills: [
      { name: "Google PageSpeed Insights (90 - 99)", level: "Expert", tags: ["Core Web Vitals", "LCP", "CLS", "INP"] },
      { name: "TTFB Acceleration (820ms → 140ms)", level: "Expert", tags: ["OPcache", "Redis Fast-Path", "Edge TTL"] },
      { name: "Next-Gen WebP Pipeline", level: "Expert", tags: ["Automated Conversion", "75% Payload Cut"] },
      { name: "Cloudflare Edge & HTTP/3", level: "Advanced", tags: ["QUIC", "Brotli", "Early Hints", "WAF"] },
      { name: "PDF Byte-Streaming", level: "Expert", tags: ["HTTP 206", "PDF.js", "Sub-Second Flipbook"] }
    ]
  },
  devops: {
    title: "Infrastructure & DevOps",
    description: "Hardened Linux environments, automated CI/CD, and zero-downtime deployment.",
    skills: [
      { name: "Linux VPS (Ubuntu / Nginx / PHP-FPM)", level: "Advanced", tags: ["PHP-FPM Pool Tuning", "Contabo", "SSL"] },
      { name: "CI/CD GitHub Actions", level: "Advanced", tags: ["Automated Testing", "Deploy Workflows"] },
      { name: "Docker & Containerization", level: "Intermediate", tags: ["Docker Compose", "Multi-stage Builds"] },
      { name: "Git Workflow & Branching", level: "Advanced", tags: ["Pull Requests", "Code Review", "SemVer"] }
    ]
  }
};

export const timelineData = [
  {
    type: "work",
    period: "July 2023 – Present",
    role: "Backend & Full-Stack Developer",
    company: "TRIVIET SOFTWARE CO., LTD",
    location: "Ho Chi Minh City, Vietnam",
    achievements: [
      "Architected modular Laravel base admin architecture across 440+ commits, slashing project onboarding and initial setup time by 80%.",
      "Enforced a strict 4-tier Clean Architecture (Controller → Service → Repository → Model) across enterprise client projects with 17 enforced design rules.",
      "Engineered automated CI/CD pipeline (plan → code → PHPUnit automated tests → pull request) with a 4-step verification loop ensuring zero regression deployments.",
      "Led full database refactoring and query tuning for high-concurrency client portals, consistently achieving sub-second page loads."
    ],
    skills: ["Laravel 10/11/12", "PHP 8.2+", "MySQL 8", "Redis", "Nginx", "CI/CD", "Clean Architecture"]
  },
  {
    type: "work",
    period: "August 2025 – December 2025",
    role: "Freelance Enterprise Backend Engineer",
    company: "Confidential Financial & Enterprise Clients",
    location: "Remote / Hybrid",
    achievements: [
      "Engineered employee coaching platform for a prominent Vietnamese commercial bank using Laravel 10 RESTful API and React frontend.",
      "Built enterprise HR & e-learning system for a Japanese life insurer collaborating within a 30-member cross-functional engineering team.",
      "Implemented strict security compliance, granular RBAC policies, and real-time audit logging for financial and insurance compliance standards."
    ],
    skills: ["Laravel 10 REST API", "React", "Granular RBAC", "Bank Compliance", "Redis", "MySQL"]
  },
  {
    type: "certification",
    period: "Issued Nov 2025",
    role: "Meta Back-End Developer Professional Certificate",
    company: "Meta",
    location: "Global Credential",
    achievements: [
      "Certified in production-grade backend engineering, RESTful API design, database architecture, and security best practices.",
      "Demonstrated mastery of cloud infrastructure, automated testing, and scalable architecture."
    ],
    skills: ["Meta Certified", "Backend Architecture", "APIs", "Database Optimization", "Security"]
  },
  {
    type: "certification",
    period: "Issued Sept 2025",
    role: "IBM DevOps and Software Engineering Professional Certificate",
    company: "IBM",
    location: "Global Credential",
    achievements: [
      "Mastered DevOps culture, CI/CD pipeline automation, microservices, containerization with Docker & Kubernetes.",
      "Demonstrated proficiency in test-driven development (TDD), behavior-driven development (BDD), and agile project delivery."
    ],
    skills: ["DevOps", "CI/CD", "Docker", "TDD", "Agile", "Linux", "Automation"]
  },
  {
    type: "certification",
    period: "Issued 2025",
    role: "IBM Front-End Developer Professional Certificate",
    company: "IBM",
    location: "Global Credential",
    achievements: [
      "Demonstrated proficiency in modern UI/UX architecture, responsive mobile-first layouts, and client-side performance."
    ],
    skills: ["React", "JavaScript ES6+", "UI Performance", "Responsive UX"]
  },
  {
    type: "certification",
    period: "Issued 2024",
    role: "Web Applications Specialization",
    company: "University of Michigan",
    location: "Academic Credential",
    achievements: [
      "In-depth specialization in web application architecture, relational database design, SQL optimization, and application security."
    ],
    skills: ["SQL Optimization", "Web Architecture", "Security", "Relational Databases"]
  },
  {
    type: "education",
    period: "2021 – 2025",
    role: "Bachelor of Computer Science (B.CompSc.)",
    company: "Posts and Telecommunications Institute of Technology (PTIT)",
    location: "Ho Chi Minh City, Vietnam",
    achievements: [
      "Deep grounding in Data Structures, Algorithms, Relational Database Design, Computer Networks, and Distributed Systems.",
      "Graduated with honors, focusing capstone research on high-performance database indexing and caching architectures."
    ],
    skills: ["Algorithms", "Data Structures", "Database Theory", "Distributed Systems", "Software Engineering"]
  }
];

export const architectureSteps = [
  {
    step: "01",
    phase: "Plan & Domain Model",
    title: "Domain Analysis & ERD Specification",
    description: "Map domain entities, establish foreign key constraints, define composite index strategies, and clarify business boundaries prior to writing a single line of application code.",
    icon: "Compass",
    codeSnippet: "// Domain Schema Design\nCREATE TABLE bookings (\n  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n  user_id BIGINT UNSIGNED NOT NULL,\n  tour_id BIGINT UNSIGNED NOT NULL,\n  status ENUM('pending', 'confirmed', 'cancelled'),\n  INDEX idx_user_status (user_id, status)\n);"
  },
  {
    step: "02",
    phase: "Clean Architecture",
    title: "4-Tier Decoupled Flow",
    description: "Controller handles HTTP/Validation → Service orchestrates business logic & transactions → Repository encapsulates database queries & caching → Model defines schema and relationships.",
    icon: "Layers",
    codeSnippet: "// Controller -> Service -> Repository -> Model\nclass BookingController extends Controller {\n    public function __construct(private BookingService $service) {}\n    public function store(StoreBookingRequest $request) {\n        return response()->json($this->service->createBooking($request->validated()));\n    }\n}"
  },
  {
    step: "03",
    phase: "Performance First",
    title: "Redis Cache-Aside & Index Tuning",
    description: "Eliminate N+1 queries using targeted eager loading. Wrap read-heavy aggregations in Redis with automatic cache-tag invalidation upon record updates.",
    icon: "Cpu",
    codeSnippet: "// Cache-Aside with Auto-Invalidation\nreturn Cache::tags(['tours', \"tour_{$id}\"])->remember(\n    \"tour_detail_{$id}\",\n    now()->addHours(6),\n    fn () => $this->repository->findWithSchedules($id)\n);"
  },
  {
    step: "04",
    phase: "Verification & CI/CD",
    title: "PHPUnit Automation & Cloudflare Edge",
    description: "Every pull request triggers automated PHPUnit test suites, static analysis (PHPStan), and database migration verification before edge cache purge deployment.",
    icon: "CheckCircle2",
    codeSnippet: "// Automated PHPUnit Feature Test\npublic function test_booking_slashes_duplicate_queries(): void {\n    DB::enableQueryLog();\n    $response = $this->getJson('/api/v1/tours/featured');\n    $response->assertOk();\n    $this->assertLessThan(4, count(DB::getQueryLog()));\n}"
  }
];
