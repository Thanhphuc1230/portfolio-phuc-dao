export const profileData = {
  name: "Đào Thanh Phúc",
  englishName: "Phuc Dao",
  roleTitle: "Senior Full-Stack Laravel Engineer & Database Optimization Specialist",
  location: "Ho Chi Minh City, Vietnam (UTC+7)",
  tagline: "Architecting high-concurrency Laravel platforms, slashing database bottlenecks, and shipping sub-second web applications from concept to production.",
  email: "phucdao.dev@gmail.com",
  github: "https://github.com/thanhphucdao",
  linkedin: "https://www.linkedin.com/in/daothanhphuc/",
  availability: "Available for Senior / Lead Roles & High-Impact Consulting",
  languages: [
    { name: "English", level: "Fluent (Professional Working Proficiency)" },
    { name: "Vietnamese", level: "Native" }
  ],
  stats: [
    { label: "Google PageSpeed", value: "99/100", subtext: "Verified Core Web Vitals", icon: "Gauge" },
    { label: "Query Reduction", value: "85%", subtext: "Composite indexing & Redis", icon: "Database" },
    { label: "TTFB Acceleration", value: "5.8x", subtext: "Cut 820ms down to 140ms", icon: "Zap" },
    { label: "Architecture Commits", value: "440+", subtext: "Standardized Laravel Base", icon: "GitCommit" },
  ]
};

export const impactMetrics = [
  {
    metric: "99/100",
    label: "PageSpeed Score",
    description: "Achieved verified sub-second rendering and perfect Core Web Vitals on mobile and desktop.",
    badge: "Lighthouse Verified",
    color: "cyan"
  },
  {
    metric: "5.8x",
    label: "TTFB Latency Reduction",
    description: "Slashed Time-To-First-Byte from 820ms to 140ms using Brotli, Redis Cache-Aside & Edge CDN.",
    badge: "Edge Performance",
    color: "indigo"
  },
  {
    metric: "85%",
    label: "Redundant Queries Cut",
    description: "Eliminated N+1 bottlenecks and optimized MySQL execution plans via composite indexes.",
    badge: "DB Optimization",
    color: "emerald"
  },
  {
    metric: "80%",
    label: "Faster Project Onboarding",
    description: "Engineered a battle-tested modular Laravel 10/11/12 boilerplate with 440+ commits.",
    badge: "Clean Architecture",
    color: "amber"
  }
];

export const caseStudies = [
  {
    id: "perform-edu",
    title: "Perform Edu",
    subtitle: "EdTech & Interactive Training Academy",
    liveUrl: "https://perform.edu.vn",
    role: "Sole Full-Stack Developer",
    scope: "End-to-End: Discovery, UI/UX Design, Laravel Backend, DB Architecture, VPS & CI/CD",
    image: "img/perform_edu.webp",
    metrics: [
      { label: "Mobile PageSpeed", value: "97/100" },
      { label: "Desktop PageSpeed", value: "99/100" },
      { label: "SEO & Best Practices", value: "100/100" },
      { label: "TTFB Reduction", value: "5.8x (820ms → 140ms)" }
    ],
    techStack: ["Laravel 10", "Tailwind CSS", "MySQL 8", "Redis", "YouTube API", "Cloudflare Edge CDN", "Nginx HTTP/3"],
    highlights: [
      "End-to-end Course Enrollment Funnel with instant checkout and dynamic product cart.",
      "Custom RBAC admin CMS with granular permissions for instructors, admins, and student management.",
      "98% WebP image asset conversion pipeline with next-gen automated image serving.",
      "High-throughput YouTube API video lecture player with progressive streaming."
    ],
    challenge: "High traffic spikes during campaign launches led to sluggish load times and server latency on standard hosting.",
    solution: "Implemented Redis Cache-Aside caching layer, optimized database indexes, deployed Cloudflare edge caching rules, and converted all static media to WebP format."
  },
  {
    id: "chien-than",
    title: "Chiến Thần Restaurant",
    subtitle: "Luxury Hospitality & Digital Menu Engine",
    liveUrl: "https://chienthangroup.vn",
    role: "Sole Full-Stack Architect & DevOps",
    scope: "4-Tier Architecture, Interactive Menu Engine, Reservation Funnel & Cloudflare Edge",
    image: "img/chienthangroup.webp",
    metrics: [
      { label: "Lighthouse SEO", value: "100/100" },
      { label: "Accessibility", value: "100/100" },
      { label: "PDF Optimization", value: "30MB → 8.5MB" },
      { label: "Rendering Speed", value: "Sub-Second" }
    ],
    techStack: ["Laravel 10", "PHP 8.2", "Bootstrap 5", "Redis", "Self-Hosted PDF.js", "Cloudflare HTTP/3", "Ubuntu VPS"],
    highlights: [
      "Engineered 4-tier clean architecture (Controller → Service → Repository → Model) isolating business logic.",
      "Interactive 3D PDF Flipbook Menu with self-hosted PDF.js byte-range streaming, slashing 30MB down to 8.5MB.",
      "Omnichannel table reservation engine with automated VIP room availability scheduling.",
      "Zero-downtime automated deployment with Cloudflare edge caching and Brotli compression."
    ],
    challenge: "High-resolution graphic food & wine menu PDF files (30MB+) crashed mobile devices and took 12+ seconds to load.",
    solution: "Architected a self-hosted PDF.js flipbook engine utilizing HTTP 206 partial byte-range requests and stream compression, delivering an instant sub-second interactive browsing experience."
  },
  {
    id: "great-travel",
    title: "Great Travel",
    subtitle: "Tourism Portal & Itinerary Booking Engine",
    liveUrl: "https://greattravel.vn",
    role: "Freelance Full-Stack Developer & Database Architect",
    scope: "Catalog Engine, Database Optimization, Redis Caching & Swiper.js UX",
    image: "img/greattravel.png",
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
    title: "Production Laravel 12 Admin Foundation",
    subtitle: "Enterprise Boilerplate & Clean Architecture Framework",
    liveUrl: "https://github.com/thanhphucdao",
    role: "Lead Architect & Open Source Author",
    scope: "Core Architecture, 17 Strict Design Rules, Granular RBAC, Automated CI/CD",
    image: "img/vieta-elearning.jpeg",
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
    title: "Backend & Architecture",
    description: "High-throughput systems, resilient APIs, and decoupled modular architectures.",
    skills: [
      { name: "PHP 8.2 / 8.3", level: "Expert", tags: ["Fibers", "JIT", "Strict Types"] },
      { name: "Laravel 10 / 11 / 12", level: "Expert", tags: ["Service Container", "Queues", "Events"] },
      { name: "RESTful API Design", level: "Expert", tags: ["API Resources", "HATEOAS", "Versioning"] },
      { name: "Service-Repository Pattern", level: "Expert", tags: ["Decoupled", "SOLID", "Unit Testable"] },
      { name: "Granular RBAC", level: "Expert", tags: ["118+ Permissions", "Gate/Policy", "Multi-Tenant"] },
      { name: "Asynchronous Queues & Jobs", level: "Advanced", tags: ["Redis Horizon", "Failed Job Handling", "Batching"] },
      { name: "PHPUnit & TDD", level: "Advanced", tags: ["Mocking", "Feature Tests", "Coverage Reports"] }
    ]
  },
  database: {
    title: "Database & Performance",
    description: "Deep query optimization, index tuning, and ultra-fast caching layers.",
    skills: [
      { name: "MySQL 8", level: "Expert", tags: ["Execution Plans", "EXPLAIN", "ACID"] },
      { name: "Redis (Cache-Aside)", level: "Expert", tags: ["Cache Invalidation", "Atomic Locks", "Pub/Sub"] },
      { name: "Composite Indexing", level: "Expert", tags: ["B-Tree Tuning", "Covering Indexes", "Selectivity"] },
      { name: "Slow Query Profiling", level: "Expert", tags: ["Slow Log Analysis", "Percona Toolkit", "Optimizer"] },
      { name: "N+1 Query Elimination", level: "Expert", tags: ["Eager Loading", "Chunking", "Cursor Pagination"] },
      { name: "Database Sharding & Replication", level: "Advanced", tags: ["Read/Write Split", "Master-Slave"] }
    ]
  },
  frontend: {
    title: "Frontend & UI/UX",
    description: "Sub-second, mobile-first, and highly intuitive user interfaces.",
    skills: [
      { name: "Tailwind CSS", level: "Expert", tags: ["JIT Compiler", "Responsive", "Glassmorphism"] },
      { name: "Modern JavaScript (ES6+)", level: "Advanced", tags: ["Async/Await", "Modules", "DOM API"] },
      { name: "React / Next.js", level: "Advanced", tags: ["App Router", "Hooks", "Component Lifecycle"] },
      { name: "Blade Components", level: "Expert", tags: ["Slots", "View Composers", "Sub-view Caching"] },
      { name: "PDF.js Integration", level: "Expert", tags: ["Byte Streaming", "3D Flipbook", "Canvas Render"] },
      { name: "Bootstrap 5", level: "Advanced", tags: ["Grid System", "Custom SCSS", "Accessibility"] }
    ]
  },
  devops: {
    title: "DevOps & Cloud",
    description: "Zero-downtime delivery, edge caching, and hardened Linux environments.",
    skills: [
      { name: "Linux VPS (Ubuntu / Nginx)", level: "Advanced", tags: ["PHP-FPM Pool Tuning", "SSL/TLS", "Cron"] },
      { name: "Cloudflare Edge CDN", level: "Advanced", tags: ["Edge Rules", "WAF", "Cache Purge API"] },
      { name: "HTTP/3 (QUIC) & Brotli", level: "Advanced", tags: ["Early Hints", "0-RTT Handshake", "Compression"] },
      { name: "Speculation Rules API", level: "Advanced", tags: ["Instant Navigation", "Prerendering"] },
      { name: "Docker & Containerization", level: "Intermediate", tags: ["Docker Compose", "Multi-stage Builds"] },
      { name: "GitHub Actions CI/CD", level: "Advanced", tags: ["Automated Testing", "Deploy Workflows"] }
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
    skills: ["Laravel 10/11", "PHP 8.2+", "MySQL 8", "Redis", "Nginx", "CI/CD", "Clean Architecture"]
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
