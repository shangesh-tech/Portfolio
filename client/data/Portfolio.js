export const portfolioConfig = {
  name: "Shangesh S",
  role: "Blockchain & Full Stack Engineer",
  tagline: "Blockchain & Full Stack Engineer",
  description:
    "Blockchain & Full Stack Engineer with 1.5 years of remote experience across three companies. Founder of Streamlet, a live media-infrastructure platform. Ships production Solidity contracts, Next.js/Node.js applications, and Dockerized CI/CD.",
  location: "Bangalore, India",
  email: "shangeshsshangeshs@gmail.com",
  phone: "+91 8248321624",
  resumeUrl: "/Shangesh_Resume.pdf",
  resumeFileName: "Shangesh S - Blockchain Engineer.pdf",

  // Roles cycled by the hero typing animation
  typedRoles: [
    "Blockchain Engineer",
    "Full Stack Engineer",
    "Solidity Developer",
    "Founder of Streamlet",
  ],

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/shangesh-s",
    github: "https://github.com/shangesh-tech",
    twitter: "https://twitter.com/shangesh_s",
    website: "https://shangesh.vercel.app",
  },

  seo: {
    ogImage: "https://shangesh.vercel.app/og-image.png",
    url: "https://shangesh.vercel.app",
    twitterHandle: "@shangesh_s",
    keywords: [
      "shangesh",
      "shangesh s",
      "Shangesh S",
      "shangesh portfolio",
      "blockchain engineer",
      "solidity developer",
      "full stack engineer",
      "web3 developer",
      "smart contracts",
      "ERC-4337",
      "Foundry",
      "Next.js developer",
      "Streamlet",
      "shangesh kalvium",
    ],
    authors: [
      {
        name: "Shangesh S",
        url: "https://github.com/shangesh-tech",
      },
    ],
  },

  about: {
    summary:
      "Blockchain & Full Stack Engineer — CS undergraduate with 1.5 years of remote experience across three companies; founder of Streamlet, a live media-infrastructure platform. Ships production Solidity contracts, Next.js/Node.js applications, and Dockerized CI/CD.",
    bio: "I'm a Blockchain & Full Stack Engineer based in Bangalore, India. Over 1.5 years I've shipped for three remote companies — writing production Solidity that survives audits, cutting gas costs through storage-layout work, and wiring the Docker and CI/CD that gets it all to mainnet. Alongside that I founded Streamlet, a media-infrastructure platform running HLS video, image optimisation, and document hosting behind a single API. I care about the unglamorous parts: test coverage, runbooks, and deploys that take minutes instead of hours.",
    // Headline delivered under the hero, and the terminal `cat resume.txt` payload
    manifesto:
      "Contracts that survive the audit. Deploys that take minutes. Interfaces people finish using.",
    terminal: [
      "name:    Shangesh S",
      "role:    Blockchain & Full Stack Engineer",
      "based:   Bangalore, India — remote worldwide",
      "",
      "shipping:",
      "  → 12 production Solidity contracts to mainnet",
      "  → 22% average gas reduction on live systems",
      "  → deploy time cut from 2 hours to 15 minutes",
      "  → Streamlet: 99.99% uptime, sub-50ms stream starts",
      "",
      "status:  open to work ▮",
    ],
    hobbies: [
      "Shipping smart contracts",
      "Reading audit reports",
      "Building developer tooling",
      "Following markets & protocol design",
    ],
    personalInfo: {
      language: "English, Tamil",
      nationality: "India",
      availability: "Open to opportunities",
    },
  },

  stats: [
    { icon: "FileCode2", value: "12+", label: "Contracts Shipped to Mainnet" },
    { icon: "Building2", value: "3", label: "Companies Shipped For" },
    { icon: "Trophy", value: "2", label: "Hackathons Won or Finalled" },
  ],

  experience: [
    {
      title: "Founder & CTO",
      company: "Streamlet",
      period: "2025 – Present",
      location: "Bangalore, India (Remote)",
      workType: "Remote",
      highlights: [
        "Founded and shipped a production media-infrastructure platform unifying HLS video streaming, WebP image optimisation, and document hosting behind one API, sustaining 99.99% uptime and sub-50ms stream starts on a global edge network.",
        "Built a six-stage pipeline taking 4 GB uploads through adaptive HLS transcoding to 4K, thumbnail extraction, Whisper AI captions in 11 languages, and signed-URL, WAF, and multi-DRM protection before edge delivery.",
        "Set technical direction end to end: published the open-source @streamlet/sdk npm client with REST API docs, and built usage-metered billing across five tiers benchmarked against Mux and Cloudflare Stream.",
      ],
      skills: ["Next.js", "Node.js", "HLS", "Docker", "SDK", "Edge"],
    },
    {
      title: "Blockchain & Full Stack Engineer",
      company: "Digital South Trust",
      period: "Oct 2025 – Jul 2026",
      location: "Bengaluru, India (Remote)",
      workType: "Remote",
      highlights: [
        "Led delivery of 12 production Solidity contracts, from spec through testing, audit fixes, and mainnet deployment.",
        "Cut average gas costs 22% via storage-layout refactors, custom errors, and batched state updates.",
        "Automated Docker and CI/CD releases, cutting deployment time from 2 hours to 15 minutes, and authored runbooks adopted by the engineering team.",
      ],
      skills: ["Solidity", "Foundry", "Docker", "CI/CD", "Gas Optimization"],
    },
    {
      title: "Blockchain & Full Stack Engineer",
      company: "AMALAS",
      period: "Jul 2025 – Sep 2025",
      location: "Lebanon (Remote)",
      workType: "Remote",
      highlights: [
        "Delivered secure Solidity contracts for an Ethereum DApp at 90% unit and fuzz test coverage, hardened against reentrancy, access-control, and overflow risks with OpenZeppelin.",
        "Coordinated with a distributed remote team across 3 time zones, translating founder requirements into technical specs and presenting weekly demos to non-technical stakeholders.",
      ],
      skills: ["Solidity", "OpenZeppelin", "Fuzz Testing", "Ethereum", "DApps"],
    },
    {
      title: "Full Stack Engineer Intern",
      company: "Virtua Technologies",
      period: "Aug 2024 – Oct 2024",
      location: "Australia (Remote)",
      workType: "Remote",
      highlights: [
        "Architected end-to-end MERN features linking React front ends to Node.js/Express APIs and blockchain modules, secured with token auth and role-based access.",
        "Scaled responsive Web3 interfaces to 500+ concurrent users at 1.4s load time by cutting JavaScript bundle size 40% with code splitting and lazy loading, lifting Core Web Vitals and engagement 25%.",
      ],
      skills: ["React", "Node.js", "Express", "MongoDB", "Web3"],
    },
  ],

  projects: [
    {
      title: "Streamlet — Media Infrastructure Platform",
      category: "Infrastructure",
      featured: true,
      description:
        "Founded and shipped a production media platform unifying HLS video streaming, WebP image optimisation, and document hosting behind one API — 99.99% uptime and sub-50ms stream starts on a global edge network.",
      highlights: [
        "Automated a six-stage pipeline taking 4 GB uploads through adaptive HLS transcoding to 4K, thumbnail extraction, Whisper AI captions in 11 languages, and signed-URL, WAF, and multi-DRM protection before edge delivery.",
        "Published the open-source @streamlet/sdk npm client with REST API docs, and built usage-metered billing across five tiers with a cost calculator benchmarking against Mux and Cloudflare Stream.",
      ],
      tags: ["Next.js", "Node.js", "HLS", "Whisper AI", "Docker", "SDK", "Edge"],
      link: "https://streamlet.dev",
      docs: "https://docs.streamlet.dev",
      npm: "https://www.npmjs.com/package/@streamlet/sdk",
      github: null,
      year: "2026",
    },
    {
      title: "Votium — Decentralized Voting Platform",
      category: "Blockchain",
      featured: true,
      description:
        "A blockchain voting platform for on-chain elections on Base Sepolia and Polygon Amoy, enforcing one vote per address, hidden tallies, and emergency pause in immutable OpenZeppelin contracts tested with Foundry.",
      highlights: [
        "Implemented ERC-4337 account abstraction for gasless voting, removing the wallet-funding step that blocks new Web3 users.",
      ],
      tags: [
        "Solidity",
        "Foundry",
        "ERC-4337",
        "OpenZeppelin",
        "Base",
        "Polygon",
      ],
      link: "https://votium.vercel.app",
      github: "https://github.com/shangesh-tech/Votium",
      year: "2026",
    },
    {
      title: "Nexlaw — Realtime Voice Legal Agent",
      category: "AI",
      featured: true,
      description:
        "A realtime voice agent that lets law students argue cases out loud with an AI professor — speak, get questioned back in natural speech, and end each session with a scored breakdown of your legal reasoning.",
      highlights: [
        "Realtime speech-to-speech loop with no typing — the agent's reply starts playing as it is generated rather than after it finishes, so the conversation stays natural.",
        "Drafts IRAC/FILAC legal arguments and full 8-section moot court memorials with one-click PDF export, and scores every practice session on reasoning, citations and argument strength.",
      ],
      metrics: ["realtime voice loop"],
      tags: [
        "Next.js",
        "Vercel AI SDK",
        "Whisper",
        "Deepgram",
        "MongoDB",
        "JWT",
        "Tailwind",
        "Groq inference",
      ],
      link: "https://nexlaw-shangesh.vercel.app/",
      github: null,
      year: "2026",
    },
    {
      title: "Stockify — AI-Powered Portfolio Assistant",
      category: "AI",
      featured: true,
      description:
        "An AI portfolio assistant delivering risk-adjusted SIP recommendations, orchestrating Gemini 1.5 Pro and LLaMA 3.3 via LangChain, LlamaIndex, and a FAISS store over Yahoo Finance data.",
      highlights: [],
      tags: ["LangChain", "LlamaIndex", "FAISS", "Gemini", "FastAPI", "React"],
      link: "https://stockify-pink.vercel.app/",
      github: "https://github.com/shangesh-tech/Stockify",
      year: "2025",
    },
    {
      title: "Ink Well — Full Stack Blog Platform",
      category: "Web",
      featured: true,
      description:
        "A serverless blog platform with SSR and static generation, scoring 99% on Google Lighthouse at 0.6s page loads.",
      highlights: [
        "Shipped a real-time markdown editor, threaded comments, and authentication, serving 1000+ concurrent readers at 99.9% uptime via indexed queries and caching.",
      ],
      tags: ["Next.js", "MongoDB", "Tailwind CSS", "Serverless", "SSR"],
      link: "https://inkwell-gilt.vercel.app",
      github: "https://github.com/shangesh-tech/inkwell",
      year: "2025",
    },
    {
      title: "FlashFund — Decentralized Crowdfunding",
      category: "Blockchain",
      description:
        "An Ethereum crowdfunding platform for transparent, on-chain fundraising campaigns — contract-enforced goals, deadlines, and refunds behind a clean Next.js interface.",
      highlights: [],
      tags: ["Solidity", "Ethereum", "Next.js", "Hardhat", "DeFi"],
      link: "https://flashfund-eth.vercel.app/",
      github: "https://github.com/shangesh-tech/FlashFund",
      year: "2025",
    },
    {
      title: "ChainLet — Web3 Wallet",
      category: "Blockchain",
      description:
        "A browser wallet in the shape of MetaMask: ERC-20 token support, testnet faucet integration, and multi-account key management.",
      highlights: [],
      tags: ["React", "Web3.js", "Ethereum", "ERC-20", "Wallet"],
      link: "https://chain-let.vercel.app/",
      github: "https://github.com/shangesh-tech/ChainLet",
      year: "2025",
    },
    {
      title: "BuyAChai — Decentralized Tip Platform",
      category: "Blockchain",
      description:
        "A full-stack dApp letting supporters buy creators a virtual chai in ETH, with the contract, frontend integration, and test suite built end to end.",
      highlights: [],
      tags: ["Solidity", "Ethereum", "Hardhat", "React", "Smart Contracts"],
      link: "https://buyachai.vercel.app/",
      github: "https://github.com/shangesh-tech/BuyAChai",
      year: "2025",
    },
    {
      title: "SHAN — ERC-20 Token",
      category: "Blockchain",
      description:
        "An ERC-20 implementation with a token faucet, miner rewards, and a full Hardhat test suite covering the reward and transfer paths.",
      highlights: [],
      tags: ["Solidity", "ERC-20", "Hardhat", "Ethereum", "Testing"],
      link: null,
      github: "https://github.com/shangesh-tech/ERC-20_TOKEN",
      year: "2025",
    },
    {
      title: "Solana-AI — No-Code Contract Generator",
      category: "AI",
      description:
        "Describe the program you want in plain English and it generates the complete Anchor Rust code for a Solana contract.",
      highlights: [],
      tags: ["Next.js", "Groq SDK", "LLaMA 3.3", "Anchor", "Solana"],
      link: "https://solana-ai-gray.vercel.app/",
      github: "https://github.com/shangesh-tech/No-Code_Solana_development_AI",
      year: "2025",
    },
    {
      title: "Fin-Pay — Virtual Banking System",
      category: "Web",
      description:
        "A MERN banking application with end-to-end encryption, processing 10K+ transactions at a 99.95% success rate and sub-200ms API responses via MongoDB indexing and aggregation pipelines.",
      highlights: [],
      tags: ["React", "Node.js", "Express", "MongoDB", "Encryption"],
      link: "https://fin-pay-six.vercel.app",
      github: "https://github.com/shangesh-tech/FinPay",
      year: "2024",
    },
    {
      title: "Finance-Analyzer",
      category: "AI",
      description:
        "A retrieval-backed analyst that reads financial documents and answers questions about stocks, bonds, and instruments with cited context.",
      highlights: [],
      tags: ["Python", "FastAPI", "LangChain", "Vector Store", "Streamlit"],
      link: "https://finance-analyzers.streamlit.app/",
      github: "https://github.com/shangesh-tech/Finance-Analyzer",
      year: "2025",
    },
    {
      title: "MERN-Food — Delivery Platform",
      category: "Web",
      description:
        "A food delivery application with live order tracking, payment integration, and an admin dashboard for menu and order operations.",
      highlights: [],
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      link: "https://mern-food-frontend-6ywd.onrender.com/",
      github: "https://github.com/shangesh-tech/Mern_food",
      year: "2024",
    },
  ],

  skills: [
    {
      title: "Languages",
      accent: "primary",
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Solidity",
        "SQL",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Blockchain / Web3",
      accent: "secondary",
      items: [
        "Solidity",
        "Foundry",
        "Thirdweb",
        "OpenZeppelin",
        "ERC-20 / 721",
        "ERC-4337",
        "Gas Optimization",
        "EVM",
      ],
    },
    {
      title: "Web",
      accent: "accent",
      items: [
        "React.js",
        "Next.js 15",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "FastAPI",
        "REST APIs",
        "Prisma ORM",
        "SSR",
        "Serverless",
      ],
    },
    {
      title: "Data & AI",
      accent: "primary",
      items: [
        "MongoDB",
        "PostgreSQL",
        "FAISS",
        "Pinecone",
        "LangChain",
        "LlamaIndex",
        "Vercel AI SDK",
        "Gemini",
        "Groq",
        "Whisper AI",
        "Deepgram",
      ],
    },
    {
      title: "DevOps & Cloud",
      accent: "secondary",
      items: [
        "Docker",
        "Docker Compose",
        "GitHub Actions",
        "CI/CD Pipelines",
        "Linux",
        "Nginx",
        "Vercel",
        "Cloudflare",
        "Secrets Management",
        "Monitoring & Uptime",
        "Webhooks",
        "npm Publishing",
      ],
    },
    {
      title: "Practices",
      accent: "accent",
      items: [
        "Git",
        "Code Review",
        "Agile",
        "Technical Documentation",
        "Unit & Fuzz Testing",
        "SDK Design",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      track: "Kalvium",
      institution: "Alliance University",
      location: "Bangalore, India",
      period: "2024 – 2028",
    },
  ],

  achievements: [
    {
      icon: "Medal",
      title: "National Finalist — PromptRepo × Kalvium AI Hackathon",
      description:
        "Solo entrant among 100+ teams nationwide, February 2025.",
      color: "#A270FF",
      link: null,
    },
    {
      icon: "Trophy",
      title: "Winner — State-Level Coding Hackathon",
      description:
        "1st of 200+ participants. Government of Tamil Nadu, November 2023.",
      color: "#FF9B54",
      link: null,
    },
    {
      icon: "Package",
      title: "Published @streamlet/sdk on npm",
      description:
        "Open-source SDK client with REST API docs, shipped alongside the Streamlet platform.",
      color: "#FF7D81",
      link: "https://www.npmjs.com/package/@streamlet/sdk",
    },
    {
      icon: "Gauge",
      title: "22% Gas Reduction in Production",
      description:
        "Storage-layout refactors, custom errors, and batched state updates across live contracts.",
      color: "#A270FF",
      link: null,
    },
    {
      icon: "Zap",
      title: "2h → 15min Deploy Pipeline",
      description:
        "Dockerized CI/CD releases plus runbooks adopted by the wider engineering team.",
      color: "#FF9B54",
      link: null,
    },
    {
      icon: "ShieldCheck",
      title: "90% Test Coverage on Audited Contracts",
      description:
        "Unit and fuzz coverage hardened against reentrancy, access-control, and overflow risk.",
      color: "#FF7D81",
      link: null,
    },
  ],

  freelanceProjects: [
    {
      title: "CRAV",
      description:
        "A food takeaway platform on iOS, Android and web — GPS restaurant discovery, live order tracking, Razorpay checkout, and coupon handling.",
      link: "https://www.justcrav.com/",
      year: "2026",
    },
    {
      title: "The Infra",
      description:
        "Crafting spaces that inspire — a marketing site for a construction and infrastructure firm.",
      link: "https://theinfra.in/",
      year: "2025",
    },
    {
      title: "Grammar — Interior Design",
      description:
        "An interior design studio's catalogue site for premium furniture collections.",
      link: "https://grammar-fawn.vercel.app/",
      year: "2025",
    },
    {
      title: "Perimeter Control System",
      description:
        "A product site for an electric fencing and perimeter security company.",
      link: "https://www.perimetercontrolsystem.in/",
      year: "2025",
    },
  ],
};

// Deterministic colour for a tech tag, keyed by the technology's own family.
const TAG_COLORS = {
  blockchain: "#f97316",
  ai: "#8b5cf6",
  frontend: "#3b82f6",
  backend: "#22c55e",
  data: "#ec4899",
  devops: "#0ea5e9",
  default: "#ef4444",
};

const TAG_FAMILY = {
  Solidity: "blockchain",
  Foundry: "blockchain",
  Hardhat: "blockchain",
  Ethereum: "blockchain",
  EVM: "blockchain",
  Polygon: "blockchain",
  Base: "blockchain",
  Solana: "blockchain",
  Anchor: "blockchain",
  OpenZeppelin: "blockchain",
  "ERC-20": "blockchain",
  "ERC-4337": "blockchain",
  "Smart Contracts": "blockchain",
  "Web3.js": "blockchain",
  Wallet: "blockchain",
  DeFi: "blockchain",
  Thirdweb: "blockchain",

  LangChain: "ai",
  LlamaIndex: "ai",
  FAISS: "ai",
  Gemini: "ai",
  Groq: "ai",
  "Groq SDK": "ai",
  "LLaMA 3.3": "ai",
  Whisper: "ai",
  "Whisper AI": "ai",
  Deepgram: "ai",
  "Vercel AI SDK": "ai",

  React: "frontend",
  "Next.js": "frontend",
  Tailwind: "frontend",
  "Tailwind CSS": "frontend",
  SSR: "frontend",

  "Node.js": "backend",
  Express: "backend",
  FastAPI: "backend",
  Serverless: "backend",
  SDK: "backend",
  JWT: "backend",

  MongoDB: "data",
  "Vector Store": "data",
  Encryption: "data",

  Docker: "devops",
  Edge: "devops",
  HLS: "devops",
};

export function tagColor(tag) {
  return TAG_COLORS[TAG_FAMILY[tag]] ?? TAG_COLORS.default;
}

export const projectCategories = [
  "All",
  ...Array.from(new Set(portfolioConfig.projects.map((p) => p.category))),
];
