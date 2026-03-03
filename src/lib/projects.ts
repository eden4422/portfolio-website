import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Game Vault",
    description:
      "A social gaming platform that enables users to organize and showcase their video game collections, track games across multiple platforms, and connect with other gaming enthusiasts through community features.",
    image: "/Images/game-vault.png",
    technologies: [
      "Private Repository",
      "In Active Development",
      "Demo Available",
    ],
    featured: true,
    slug: "game-vault",
    subtitle: "Social Gaming Collection & Community Platform",
    overview:
      "Game Vault is a full-featured social gaming platform designed for both casual collectors and dedicated gaming enthusiasts. It provides a comprehensive system for cataloging and organizing video game libraries across multiple platforms and consoles, while fostering community engagement through robust social networking features. Users can manage their personal collections, maintain wishlists, follow friends, and participate in a community feed — all in one place.",
    keyFeatures: [
      {
        title: "Collection Management",
        description:
          "Comprehensive tools to organize and showcase personal game libraries",
        details: [
          "Add, categorize, and track games across all owned platforms",
          "Mark games as playing, completed, backlog, or dropped",
          "Custom shelves and tags for personalized organization",
          "Import and bulk-manage large collections efficiently",
        ],
      },
      {
        title: "Multi-Platform & Console Tracking",
        description:
          "Full support for tracking games across every major gaming platform",
        details: [
          "Track games on PlayStation, Xbox, Nintendo, PC, and more",
          "Platform-specific library views and filters",
          "Cross-platform game discovery and comparison",
          "Console edition and variant tracking",
        ],
      },
      {
        title: "Wishlist & Discovery",
        description:
          "Plan future purchases and discover new games with smart tools",
        details: [
          "Wishlist with price tracking and release date alerts",
          "Personalized game recommendations based on collection",
          "Advanced search and filtering by genre, platform, and rating",
          "Curated lists and trending titles from the community",
        ],
      },
      {
        title: "Social Networking",
        description:
          "Connect with like-minded players and build a gaming community",
        details: [
          "User profiles with followers and friend connections",
          "Community feed with posts, comments, and likes",
          "Share collection highlights and gaming milestones",
          "Activity feed showing friends' recent additions and completions",
        ],
      },
      {
        title: "Profile Customization",
        description: "Personalize your presence with rich profile options",
        details: [
          "Custom profile photos and banner images",
          "Showcase featured games and top picks",
          "Bio and gamer tag display",
          "Privacy controls for profile visibility",
        ],
      },
      {
        title: "Content Moderation & Privacy",
        description: "Safe and configurable experience for all users",
        details: [
          "Granular privacy settings per collection and post",
          "Content reporting and community moderation tools",
          "Block and mute controls for user safety",
          "Admin dashboard for platform-level moderation",
        ],
      },
    ],
    technicalHighlights: [
      "Real-time community feed powered by websocket or polling architecture",
      "Scalable multi-platform game database integration",
      "Image upload and CDN delivery for profile and banner photos",
      "Role-based access control for privacy and moderation features",
      "Optimized search with filtering across large game datasets",
      "Mobile-responsive design for on-the-go collection management",
    ],
    impact:
      "Currently in active development, Game Vault aims to become the go-to platform for gamers who want to organize their libraries and engage with a passionate gaming community — bridging the gap between collection tracking and social discovery.",
  },
  {
    id: 2,
    title: "ATC Taxi Commands Voice Recognition",
    description:
      "A real-time voice recognition system that listens to live ATC audio, transcribes taxi commands using a 3-model majority-vote pipeline, parses structured fields with spaCy NLP, and persists results to MongoDB — all displayed in a Tkinter GUI.",
    image: "/Images/Air-Traffic.png",
    technologies: [
      "Python",
      "Vosk (offline ASR)",
      "spaCy",
      "MongoDB / pymongo",
      "Tkinter",
      "multiprocessing",
      "sounddevice",
    ],
    githubUrl:
      "https://github.com/eden4422/ATC-Taxi-Commands-Voice-Recognition",
    featured: true,
    slug: "atc-speech-recognition",
    subtitle: "Real-Time ATC Audio Transcription & Command Parsing Pipeline",
    overview:
      "A real-time voice recognition system designed to automatically transcribe and parse Air Traffic Control (ATC) taxi commands from live microphone audio. The system monitors incoming audio for a configured flight ID, then runs three parallel Vosk offline speech recognition models with a 2-of-3 majority vote to produce the most accurate transcription. spaCy NLP and regex extract structured fields — flight ID, taxi command, runway, tower, and terminal — from the result. NATO phonetic alphabet terms and spoken numbers are translated into standard notation, and every parsed command is stored as JSON in a local MongoDB database. A Tkinter GUI surfaces all raw speech and filtered commands with mute, start, and flight ID controls.",
    techStack: {
      language: "Python",
      database: "MongoDB",
      other: [
        "Vosk (offline ASR)",
        "spaCy",
        "Tkinter",
        "pymongo",
        "sounddevice",
        "multiprocessing",
        "fasteners",
      ],
    },
    keyFeatures: [
      {
        title: "Flight-ID-Filtered Audio Capture",
        description:
          "Streams live microphone input and activates recording only when the configured flight ID is detected",
        details: [
          "Continuous microphone monitoring via sounddevice",
          "Configurable flight ID triggers selective capture",
          "Filters out irrelevant ATC traffic automatically",
          "AudioListening process feeds raw audio into the pipeline queue",
        ],
      },
      {
        title: "3-Model Majority-Vote Transcription",
        description:
          "Runs three parallel Vosk offline ASR models and selects the best transcription by consensus",
        details: [
          "Three independent Vosk models process the same audio simultaneously",
          "2-of-3 majority vote selects the most accurate transcription",
          "Fully offline — no internet or cloud API required",
          "CommandTranscription process manages the parallel model execution",
        ],
      },
      {
        title: "NLP Command Parsing",
        description:
          "Extracts structured fields from transcribed ATC text using spaCy and regex",
        details: [
          "Parses flight ID, taxi command, runway, tower, and terminal",
          "NATO phonetic alphabet terms translated to standard notation",
          "Spoken numbers converted to numeric format",
          "Outputs per-command structured JSON records",
        ],
      },
      {
        title: "MongoDB Persistence",
        description:
          "Persists every parsed command to a local MongoDB database for logging and review",
        details: [
          "Each structured command stored as a JSON document",
          "pymongo driver for database interaction",
          "fasteners used for safe concurrent file and resource access",
          "Full command history queryable for post-session review",
        ],
      },
      {
        title: "Multiprocessing Pipeline Architecture",
        description:
          "Four concurrent components coordinated via queues for real-time throughput",
        details: [
          "AudioListening — streams and filters microphone input",
          "CommandTranscription — runs 3 Vosk models with voting consensus",
          "ThreadManager — orchestrates the pipeline and NLP post-processing",
          "myGUI — real-time Tkinter display with mute, start, and flight ID controls",
        ],
      },
    ],
    technicalHighlights: [
      "2-of-3 majority vote across three parallel Vosk models for transcription accuracy",
      "spaCy NLP pipeline combined with regex for structured ATC command extraction",
      "NATO phonetic alphabet and spoken number normalization",
      "Multiprocessing architecture with inter-process queues for real-time pipeline coordination",
      "MongoDB persistence of structured JSON command records via pymongo",
      "Fully offline operation — no cloud dependencies at any stage",
    ],
    impact:
      "Demonstrates a production-grade approach to real-time aviation speech processing — combining offline ASR, consensus voting, and NLP parsing into a robust pipeline that could meaningfully reduce manual transcription workload in ATC environments.",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "An upgraded rebuild of my original college portfolio — previously built with pure HTML and CSS — now reimagined as a modern full-stack application to showcase my projects, skills, and experience as a developer.",
    image: "/Images/website.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    previousGithubUrl: "https://github.com/eden4422/website-resume",
    previousLiveUrl: "https://eden4422.github.io/website-resume/",
    featured: true,
    slug: "portfolio-website",
    subtitle: "Modern Portfolio Built with Next.js 14",
    overview:
      "A full rebuild of my original college portfolio, which was crafted with pure HTML and CSS. This version reimagines the site as a modern, responsive application using Next.js 14, TypeScript, and Tailwind CSS — demonstrating how far my skills have grown since those early days and reflecting current full-stack development practices.",
    techStack: {
      framework: "Next.js 14",
      language: "TypeScript",
      other: ["Tailwind CSS", "React Icons"],
    },
    keyFeatures: [
      {
        title: "Responsive Design",
        description:
          "Fully responsive layout that works seamlessly across all devices",
        details: [
          "Mobile-first approach",
          "Adaptive navigation",
          "Optimized images",
        ],
      },
      {
        title: "Performance Optimized",
        description: "Built with Next.js for optimal performance and SEO",
        details: [
          "Server-side rendering",
          "Image optimization",
          "Code splitting",
        ],
      },
    ],
    technicalHighlights: [
      "Next.js App Router for modern routing",
      "TypeScript for type safety",
      "Tailwind CSS for styling",
      "Component-based architecture",
    ],
    impact:
      "A reflection of personal growth — from a static college site written in pure HTML and CSS to a fully featured Next.js application. Successfully showcases my skills and projects to potential employers with a clean, professional design.",
  },
  {
    id: 4,
    title: "Personal Well-Being Stats",
    description:
      "A unique wellness tracker inspired by game character stat sheets that helps users break down daunting self-improvement goals into manageable steps, adding gamification and motivation to personal progress tracking.",
    image: "/Images/Real-Stats.png",
    technologies: ["C#", "XAML", "Windows Presentation Foundation"],
    githubUrl: "https://github.com/eden4422/Personal-Well-Being-Stats",
    featured: false,
    hackathon: true,
    slug: "real-stats",
    subtitle:
      "Award-Winning Gamified Self-Improvement Application | 2nd Place @ 24-Hour Hackathon",
    overview:
      "A desktop application that transforms personal development into an engaging RPG-style experience. Users create a character profile and level up their real-life skills and attributes by completing tasks and achieving milestones.",
    techStack: {
      framework: "WPF (Windows Presentation Foundation)",
      language: "C#",
      other: [".NET 7.0", "MVVM with XAML"],
    },
    keyFeatures: [
      {
        title: "Character Creation System",
        description:
          "Personalized user profiles with custom avatars and biographies",
        details: [
          "Custom avatar selection",
          "Personal biography creation",
          "Stat and skill selection to align with personal development goals",
        ],
      },
      {
        title: "Quest Book Interface",
        description:
          "Track progress across multiple stats and skills with an intuitive quest-based system",
        details: [
          "Track progress across multiple stats (e.g., Fitness, Intelligence, Creativity) and skills",
          "Create milestones with XP values that level up attributes upon completion",
          "Add recurring tasks with frequency tracking for habit building",
        ],
      },
      {
        title: "Gamification Mechanics",
        description:
          "Engage users with game-like progression and reward systems",
        details: [
          "XP and leveling system for each attribute",
          "Visual progress tracking showing current vs. goal values",
          "Milestone completion rewards that permanently increase attribute levels",
          "Task completion counters for recurring activities",
        ],
      },
      {
        title: "Progress Visualization",
        description: "Real-time visual feedback on personal development",
        details: [
          "Real-time updates to character stats",
          "Observable collections for dynamic UI updates",
          "Progress reports to review achievements",
        ],
      },
    ],
    technicalHighlights: [
      "Custom event handling system for attribute item property changes",
      "Model-View-ViewModel architecture for clean separation of concerns",
      "UserController for centralized user state management",
      "Observable collections enabling reactive UI updates",
    ],
    impact:
      "Built collaboratively in 24 hours, this project secured 2nd place by combining software engineering best practices with creative UX design to solve the common problem of maintaining motivation for self-improvement.",
  },
  {
    id: 5,
    title: "Steganography Image Password Manager",
    description:
      "A cross-platform mobile and desktop application that uses image steganography as the foundation for a deterministic password generation system — deriving strong passwords from raw image binary data so that nothing ever needs to be stored.",
    image: "/Images/steganography.png",
    technologies: ["C#", ".NET MAUI", "Cross-Platform"],
    githubUrl:
      "https://github.com/NhanDucNguyen99/Steganography-Image-Password",
    featured: false,
    hackathon: true,
    slug: "steganography-password-manager",
    subtitle: "Deterministic Password Generation via Image Binary Data",
    overview:
      "The Steganography Image Password Manager is a cross-platform application built with .NET MAUI that reimagines password management through image steganography. Rather than storing passwords in a vault, the app derives them deterministically from the raw binary metadata of any image file — meaning the same image always produces the same password, and the password itself is never saved anywhere. Users receive a short numeric key (e.g. 42-16) as a lightweight address to reconstruct their password on demand, combining high entropy with a zero-storage security model.",
    techStack: {
      framework: ".NET MAUI",
      language: "C#",
      other: ["Windows", "Android", "iOS", "macOS"],
    },
    keyFeatures: [
      {
        title: "Generate Mode",
        description:
          "Upload any image to derive a strong, high-entropy password from its raw byte data",
        details: [
          "Extracts raw binary metadata from the uploaded image file",
          "Generates a password of configurable length from the image data",
          "Returns a short numeric key (e.g. 42-16) as the password address",
          "Nothing is stored — the key is all you need to remember",
        ],
      },
      {
        title: "Retrieve Mode",
        description:
          "Deterministically reconstruct the exact same password from the original image and key",
        details: [
          "Re-upload the same image and enter your numeric key",
          "The app reproduces the password with 100% consistency",
          "No database, no cloud sync, no stored secrets",
          "Works fully offline on any supported platform",
        ],
      },
      {
        title: "Key-Based Mode",
        description:
          "Use a custom passphrase as a coordinate system mapped into the image's metadata",
        details: [
          "User-defined passphrase acts as a deterministic offset into the image data",
          "Balances high entropy with human memorability",
          "Ordinal mapping algorithm converts passphrase into image byte coordinates",
          "Produces distinct passwords per image-passphrase combination",
        ],
      },
      {
        title: "Password Validation & Normalization",
        description:
          "Guarantees every generated password meets complexity requirements automatically",
        details: [
          "Enforces presence of uppercase, lowercase, digit, and special character",
          "Automatic character substitution normalizes weak outputs",
          "Configurable minimum length through the settings page",
          "Consistent complexity regardless of the source image",
        ],
      },
      {
        title: "Cross-Platform Support",
        description:
          "Single codebase targeting all major desktop and mobile platforms",
        details: [
          "Built with .NET MAUI for Windows, Android, iOS, and macOS",
          "Consistent UI and behavior across all platforms",
          "No platform-specific password storage or keychain dependencies",
          "Lightweight and runs fully offline",
        ],
      },
    ],
    technicalHighlights: [
      "Image binary data parsed as a high-entropy source — no passwords are ever stored",
      "Two generation algorithms: random-offset extraction and key-driven ordinal mapping",
      "Password normalization via automatic character substitution to enforce complexity rules",
      "Single .NET MAUI codebase deployed to Windows, Android, iOS, and macOS",
      "Configurable password length exposed through a dedicated settings page",
      "Zero-storage security model — the image file itself is the credential vault",
    ],
    impact:
      "Demonstrates a novel approach to password security that eliminates the attack surface of traditional vaults by ensuring passwords are never stored anywhere. The deterministic model means any device with the original image and key can reconstruct the password, without any synchronization or cloud infrastructure.",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(id: number): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
