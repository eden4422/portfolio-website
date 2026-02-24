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
