export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  hackathon?: boolean;
  // Detailed page fields
  slug?: string;
  subtitle?: string;
  overview?: string;
  techStack?: {
    framework?: string;
    language?: string;
    database?: string;
    other?: string[];
  };
  keyFeatures?: {
    title: string;
    description: string;
    details?: string[];
  }[];
  technicalHighlights?: string[];
  impact?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  category: "languages" | "frontend" | "backend" | "tools" | "other";
}
