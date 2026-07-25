import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="subtle-card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <h3 className="text-xl font-black leading-tight">{project.title}</h3>
        <ArrowUpRight className="shrink-0 text-[var(--accent)]" aria-hidden size={21} />
      </div>
      <p className="text-sm font-bold text-[var(--accent)]">{project.subtitle}</p>
      <p className="mt-4 flex-1 text-sm leading-7 text-[var(--muted)]">{project.problem}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
      <Link className="mt-6 text-sm font-black text-[var(--accent)]" href={`/projects/${project.slug}`}>
        Read case study
      </Link>
    </article>
  );
}
