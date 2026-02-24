import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import TypingAnimation from "@/components/TypingAnimation";
import { Project } from "@/types";

// Sample projects data - you can replace this with your actual projects
const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects, skills, and experience as a full-stack developer.",
    image: "/Images/website.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    featured: true,
  },
  {
    id: 2,
    title: "Game Vault",
    description:
      "A web application that allows users to browse, search, and save their favorite video games. Built with React and integrated with a video game database API.",
    image: "/Images/game-vault.png",
    technologies: [
      "Prive Repository",
      "In Active Development",
      "Demo Available",
    ],
    featured: true,
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
  },
  {
    id: 4,
    title: "Real Stats",
    description:
      "Created during Coughacks Hack-a-Thon in 24 hours with a team of five developers. A unique wellness tracker inspired by game character stat sheets that helps users break down daunting self-improvement goals into manageable steps, adding gamification and motivation to personal progress tracking.",
    image: "/Images/Real-Stats.png",
    technologies: ["C#", "XAML", "Windows Presentation Foundation"],
    githubUrl: "https://github.com/eden4422/Personal-Well-Being-Stats",
    featured: false,
    hackathon: true,
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
  },
];

const skills = [
  // Languages
  { name: "JavaScript", category: "languages" as const },
  { name: "TypeScript", category: "languages" as const },
  { name: "Java", category: "languages" as const },
  { name: "C#", category: "languages" as const },
  { name: "Python", category: "languages" as const },
  { name: "HTML", category: "languages" as const },
  { name: "CSS", category: "languages" as const },
  { name: "SQL", category: "languages" as const },
  // Frontend
  { name: "React", category: "frontend" as const },
  { name: "Next.js", category: "frontend" as const },
  { name: "Tailwind CSS", category: "frontend" as const },
  // Backend
  { name: "Node.js", category: "backend" as const },
  { name: "Express", category: "backend" as const },
  { name: "REST APIs", category: "backend" as const },
  { name: "PostgreSQL", category: "backend" as const },
  { name: "MongoDB", category: "backend" as const },
  // Tools & DevOps
  { name: "Git", category: "tools" as const },
  { name: "Docker", category: "tools" as const },
  { name: "CI/CD", category: "tools" as const },
  { name: "Google Cloud", category: "tools" as const },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="w-full max-w-6xl mx-auto py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I&apos;m <br />
                <span className="text-blue-600">Carlos Romero</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-700 mb-6 font-semibold">
                <TypingAnimation
                  words={[
                    "Product Engineer",
                    "Full-Stack Architect",
                    "Platform Builder",
                    "End-to-End Developer",
                    "System Designer",
                    "Experienced Engineer",
                  ]}
                  typingSpeed={100}
                  deletingSpeed={50}
                  delayBetweenWords={2000}
                />
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                I build exceptional digital experiences that are fast, scalable,
                and maintainable. Looking to join a great team and make a real
                impact as a full-time developer.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="bg-blue-600 text-white px-12 py-5 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View My Work
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="relative">
                <div className="w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-2xl animate-pulse"></div>
                <div className="absolute inset-0 w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-tl from-blue-400 to-cyan-400 rounded-full opacity-50 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I&apos;m a software engineer passionate about building products
                that feel polished, fast, and intentional. I specialize in
                full-stack development with modern technologies like React,
                Next.js, TypeScript, and Supabase, crafting both clean user
                interfaces and scalable backend systems.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Currently, I&apos;m building Game Vault, a full-stack platform
                for tracking and showcasing game collections. I enjoy owning
                products end-to-end—from authentication and database design to
                animated UI components and deployment—and refining them until
                they feel exceptional.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I&apos;m especially interested in systems that operate at scale,
                AI-powered experiences, and tools that empower people. I&apos;m
                constantly learning and pushing my work beyond &quot;it
                works&quot; to &quot;it&apos;s excellent.&quot;
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Facts
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-2xl font-bold">▹</span>
                  <span className="text-gray-700 text-lg">
                    1+ years of development experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-2xl font-bold">▹</span>
                  <span className="text-gray-700 text-lg">
                    3+ completed projects
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-2xl font-bold">▹</span>
                  <span className="text-gray-700 text-lg">
                    Always learning and improving
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-2xl font-bold">▹</span>
                  <span className="text-gray-700 text-lg">
                    Actively seeking full-time roles
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === "languages")
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === "frontend")
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === "backend")
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tools &amp; DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === "tools")
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience.
            </p>
          </div>
          {/* Featured projects - larger cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>

          {/* Non-featured projects - compact cards */}
          {projects.some((p) => !p.featured) && (
            <>
              <h3 className="text-xl font-semibold text-gray-500 mb-6 text-center tracking-wide uppercase">
                More Projects
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {projects
                  .filter((p) => !p.featured)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} compact />
                  ))}
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
