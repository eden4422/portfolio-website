import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Project } from "@/types";

// This would typically come from a database or API
// For now, we'll import it from a separate file
import { getProjectById, getAllProjects } from "@/lib/projects";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="w-full max-w-5xl mx-auto px-6 pt-28 pb-12">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            {project.featured && (
              <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                ★ Featured
              </span>
            )}
            {project.hackathon && (
              <span className="bg-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                ⚡ Hackathon
              </span>
            )}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-xl text-gray-600 font-medium">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Project Image */}
        {project.image && (
          <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Overview */}
        {project.overview && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.overview}
            </p>
          </section>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.techStack.framework && (
                <div className="bg-white p-5 rounded-xl shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Framework
                  </h3>
                  <p className="text-gray-700">{project.techStack.framework}</p>
                </div>
              )}
              {project.techStack.language && (
                <div className="bg-white p-5 rounded-xl shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Language</h3>
                  <p className="text-gray-700">{project.techStack.language}</p>
                </div>
              )}
              {project.techStack.database && (
                <div className="bg-white p-5 rounded-xl shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Database</h3>
                  <p className="text-gray-700">{project.techStack.database}</p>
                </div>
              )}
              {project.techStack.other &&
                project.techStack.other.length > 0 && (
                  <div className="bg-white p-5 rounded-xl shadow-md">
                    <h3 className="font-semibold text-gray-900 mb-2">Other</h3>
                    <p className="text-gray-700">
                      {project.techStack.other.join(", ")}
                    </p>
                  </div>
                )}
            </div>
          </section>
        )}

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <div className="space-y-6">
              {project.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 mb-3">{feature.description}</p>
                  {feature.details && feature.details.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {feature.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technical Highlights */}
        {project.technicalHighlights &&
          project.technicalHighlights.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Technical Highlights
              </h2>
              <ul className="space-y-3">
                {project.technicalHighlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

        {/* Impact */}
        {project.impact && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.impact}
            </p>
          </section>
        )}

        {/* Links */}
        <section className="flex gap-4 pt-8 border-t border-gray-200">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
