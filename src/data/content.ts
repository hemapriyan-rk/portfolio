export const profile = {
  name: "Hemapriyan R K",
  role: "CSE (Data Science) · Vellore Institute of Technology",
  tagline: "Building systems. Securing the infrastructure behind them.",
  intro:
    "From computer vision and mobile apps to the back-ends behind them, I design and build reliable systems that work in the real world. Next, I'm taking this expertise into medical systems.",
  location: "Tamil Nadu, India",
  links: {
    github: "https://github.com/hemapriyan-rk",
    linkedin: "https://www.linkedin.com/in/hemapriyan-rk",
    email: "mailto:hemapriyankuppusamy07@gmail.com",
  },
};

export type Project = {
  title: string;
  tag: string;
  summary: string;
  points: string[];
  stack: string[];
  href?: string;
  note?: string;
};

export const focus = [
  { name: "Perception", text: "Detection, tracking and depth from camera streams." },
  { name: "Back-ends", text: "APIs and data layers that stay correct under load." },
  { name: "Mobile", text: "Native Android apps on shared, testable modules." },
  { name: "Security", text: "Threat models, hashed tokens, RBAC and rate limits." },
];

export const projects: Project[] = [
  {
    title: "MOVA",
    tag: "Full-stack · Mobile",
    summary:
      "Vellore ride and food-delivery MVP that matches rides with compatible food orders so one vehicle serves both, with consent from customer and captain.",
    points: [
      "Three native Kotlin / Jetpack Compose apps (Customer, Captain, Restaurant) on shared modules.",
      "TypeScript + Express API on PostgreSQL (Prisma, PostGIS) with Redis geo-prefiltering.",
      "Corridor matching, dual-consent handshake, state machines, fare engine, OTP handover.",
    ],
    stack: ["Kotlin", "TypeScript", "Express", "PostgreSQL", "Redis"],
    note: "Private repository. Walkthrough on request.",
  },
  {
    title: "VIMES",
    tag: "Industrial safety · Computer vision",
    summary:
      "Dual-camera edge system that detects people entering hazardous zones around machinery and raises a risk level before contact.",
    points: [
      "YOLO11 + ByteTrack per camera, with cross-camera person Re-ID (MobileNetV2 embeddings, cosine matching).",
      "Ground-plane homography gives velocity, acceleration, time-to-collision and trajectory prediction.",
      "Deterministic risk engine over safe / warning / hazard zones, fused with an ESP32 sensor node.",
      "Cloud console (FastAPI, Supabase) with RBAC and rate limiting. ~21k lines of Python, 39 test modules.",
    ],
    stack: ["Python", "YOLO11", "OpenCV", "FastAPI", "Supabase", "ESP32"],
    href: "https://github.com/hemapriyan-rk/vimes-industrial-intrusion-detection",
  },
  {
    title: "Crate Link",
    tag: "Secure file sharing",
    summary: "Upload a file, get a short-lived link and QR code that expires.",
    points: [
      "Files go browser ↔ storage via signed URLs, never through the app server.",
      "Tokens stored as SHA-256 hashes; download limits enforced atomically in SQL.",
      "Documented expiry/cleanup races, admin TOTP override, escalating abuse bans, written threat model.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Vitest"],
    href: "https://github.com/hemapriyan-rk/filelink",
  },
  {
    title: "ORCA EYE",
    tag: "Assistive vision · Research prototype",
    summary:
      "Measurable baseline pipeline that turns a camera stream into walking guidance commands for visually impaired users.",
    points: [
      "YOLO detection, MiDaS monocular depth and free-space estimation feed a grid spatial map.",
      "Candidate paths are ranked and reduced to one of seven commands (STRAIGHT, LEFT, STOP…).",
      "Every stage is logged; a 12-condition failure detector and 15-scenario evaluation suite.",
    ],
    stack: ["Python", "PyTorch", "YOLO", "MiDaS"],
    href: "https://github.com/hemapriyan-rk/orca-eye",
    note: "Research prototype, not for real-world mobility use.",
  },
  {
    title: "claude-rigor-skills",
    tag: "Developer tooling",
    summary:
      "30 Claude Code skills that enforce engineering rigor: threat and trade-off analysis, security review, test design, prior-art search.",
    points: [],
    stack: ["Claude Code", "Markdown"],
    href: "https://github.com/hemapriyan-rk/claude-rigor-skills",
  },
];

export const earlier = [
  {
    title: "AssetSentinel",
    summary:
      "Electrical asset monitoring with ML anomaly detection and predictive degradation analysis.",
    href: "https://github.com/hemapriyan-rk/asset-sentinel",
  },
  {
    title: "A* Heuristic Analysis",
    summary:
      "Benchmark of five informed-search algorithms on the n-puzzle: Manhattan Distance vs Linear Conflict.",
    href: "https://github.com/hemapriyan-rk/a-star-search-heuristic-optimization-and-performance-analysis",
  },
  {
    title: "RKS Management System",
    summary:
      "Billing and operations platform for a computer and print shop (React, Express, Prisma, PostgreSQL).",
    href: "https://github.com/hemapriyan-rk/shop-rks",
  },
  {
    title: "Dia-care",
    summary: "Health-focused application, TypeScript.",
    href: "https://github.com/hemapriyan-rk/Dia-care",
  },
];

export const patents = [
  {
    title:
      "Interaction-aware probabilistic charging state control for mobile battery systems",
    id: "IN202641027106 A1",
    date: "Filed Mar 20, 2026",
    summary:
      "Adapts charging behavior to user-device interaction patterns to improve battery health and long-term performance.",
  },
  {
    title:
      "A system and method for baseline-relative behavioral trend estimation for glucose regulation monitoring",
    id: "IN202641033662 A1",
    date: "Filed Mar 20, 2026",
    summary:
      "Data-driven framework for monitoring glucose regulation through baseline-relative behavioral trend estimation.",
  },
];

export const skills: Record<string, string[]> = {
  "Computer vision": ["YOLO", "ByteTrack", "OpenCV", "MiDaS", "Homography"],
  "Machine learning": ["PyTorch", "NumPy", "Python"],
  "Back-end": ["FastAPI", "Node.js", "Express", "Prisma", "PostgreSQL", "PostGIS", "Supabase", "Redis"],
  "Front-end & mobile": ["Next.js", "React", "TypeScript", "Tailwind", "Kotlin", "Jetpack Compose"],
  Security: ["RBAC", "Rate limiting", "TOTP", "Signed URLs", "Threat modelling"],
  "Delivery & embedded": ["Docker", "Vercel", "GitHub Actions", "pytest", "Vitest", "ESP32"],
};
