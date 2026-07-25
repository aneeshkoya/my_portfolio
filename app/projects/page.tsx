import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI/ML, NLP, RAG, contextual intelligence and information-security project case studies.",
};

export default function ProjectsPage() {
  return (
    <section className="section-tight">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies across scalable AI, contextual intelligence and trustworthy systems."
          description="Built without fake client logos or invented metrics. Public placeholders mark details that should be filled with approved links or measurements."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
