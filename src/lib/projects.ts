import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects, skills, and experience as a full-stack developer.",
    image: "/Images/website.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    featured: true,
    slug: "portfolio-website",
    subtitle: "Modern Portfolio Built with Next.js 14",
    overview:
      "A responsive and performant portfolio website showcasing my work as a full-stack developer. Built with the latest web technologies to demonstrate modern development practices and design principles.",
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
      "Successfully showcases my skills and projects to potential employers and clients with a clean, professional design.",
  },
  {
    id: 2,
    title: "Game Vault",
    description:
      "A web application that allows users to browse, search, and save their favorite video games. Built with React and integrated with a video game database API.",
    image: "/Images/game-vault.png",
    technologies: [
      "Private Repository",
      "In Active Development",
      "Demo Available",
    ],
    featured: true,
    slug: "game-vault",
    subtitle: "Video Game Discovery Platform",
    overview:
      "A comprehensive web application for browsing and managing video game collections. Users can discover new games, track their favorites, and explore detailed game information through an intuitive interface.",
    keyFeatures: [
      {
        title: "Game Discovery",
        description: "Browse and search through a vast database of video games",
        details: [
          "Advanced filtering options",
          "Search by title, genre, or platform",
          "Rating and review integration",
        ],
      },
      {
        title: "Personal Collection",
        description: "Save and organize your favorite games",
        details: [
          "Custom lists",
          "Wishlist functionality",
          "Progress tracking",
        ],
      },
    ],
    impact:
      "Currently in active development to enhance game discovery and management for gaming enthusiasts.",
  },
  {
    id: 3,
    title: "Air Traffic Control Speech Recognition System",
    description:
      "Built a speech recognition system converting ATC taxi instructions into structured JSON for visualization",
    image: "/Images/Air-Traffic.png",
    technologies: [
      "Python",
      "Vosk (offline ASR)",
      "spaCy",
      "MongoDB / pymongo",
      "Tkinter",
    ],
    githubUrl:
      "https://github.com/eden4422/ATC-Taxi-Commands-Voice-Recognition",
    featured: true,
    slug: "atc-speech-recognition",
    subtitle: "AI-Powered Aviation Communication System",
    overview:
      "An advanced speech recognition system designed specifically for Air Traffic Control (ATC) communications. The system transcribes and parses taxi instructions, converting spoken commands into structured data for visualization and analysis.",
    techStack: {
      language: "Python",
      database: "MongoDB",
      other: ["Vosk (offline ASR)", "spaCy", "Tkinter", "pymongo"],
    },
    keyFeatures: [
      {
        title: "Offline Speech Recognition",
        description: "Uses Vosk for accurate offline speech-to-text conversion",
        details: [
          "No internet connection required",
          "Aviation-specific vocabulary",
          "Real-time transcription",
        ],
      },
      {
        title: "Command Parsing",
        description:
          "Natural language processing to extract structured data from ATC commands",
        details: [
          "Entity recognition for runways, taxiways, and gates",
          "Command classification",
          "JSON output generation",
        ],
      },
      {
        title: "Visual Interface",
        description: "Tkinter-based GUI for visualization and interaction",
        details: [
          "Real-time command display",
          "Airport layout visualization",
          "Command history tracking",
        ],
      },
    ],
    technicalHighlights: [
      "Custom-trained speech recognition model for aviation terminology",
      "spaCy NLP pipeline for command parsing",
      "MongoDB integration for data persistence",
      "Threaded audio processing for real-time performance",
    ],
    impact:
      "Demonstrates the potential for AI-assisted aviation communication systems to improve safety and efficiency in air traffic control operations.",
  },
  {
    id: 4,
    title: "Personal Well-Being Stats",
    description:
      "Created during Coughacks Hack-a-Thon in 24 hours with a team of five developers. A unique wellness tracker inspired by game character stat sheets that helps users break down daunting self-improvement goals into manageable steps, adding gamification and motivation to personal progress tracking.",
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
      "A cross-platform password manager using steganography to hide passwords within images.",
    image: "/Images/steganography.png",
    technologies: ["C#", ".NET MAUI Cross-Platform"],
    githubUrl:
      "https://github.com/NhanDucNguyen99/Steganography-Image-Password",
    featured: false,
    hackathon: true,
    slug: "steganography-password-manager",
    subtitle: "Secure Cross-Platform Password Manager with Steganography",
    overview:
      "An innovative password manager that uses steganography techniques to hide encrypted password data within image files. This approach provides an additional layer of security by making password storage less obvious to potential attackers.",
    techStack: {
      framework: ".NET MAUI",
      language: "C#",
      other: ["Cross-platform deployment", "Image processing libraries"],
    },
    keyFeatures: [
      {
        title: "Steganography Integration",
        description: "Hide encrypted password data within image files",
        details: [
          "LSB (Least Significant Bit) steganography",
          "Supports common image formats",
          "Invisible to the naked eye",
        ],
      },
      {
        title: "Cross-Platform Support",
        description: "Works on Windows, macOS, iOS, and Android",
        details: [
          "Built with .NET MAUI",
          "Consistent UI across platforms",
          "Cloud sync capabilities",
        ],
      },
      {
        title: "Secure Encryption",
        description: "Military-grade encryption for password protection",
        details: [
          "AES-256 encryption",
          "Master password protection",
          "Zero-knowledge architecture",
        ],
      },
    ],
    technicalHighlights: [
      "Custom steganography algorithm implementation",
      ".NET MAUI for cross-platform development",
      "Secure key derivation functions",
      "Image processing and manipulation",
    ],
    impact:
      "Developed during a hackathon to explore innovative approaches to password security, combining cryptography with steganography for enhanced protection.",
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
