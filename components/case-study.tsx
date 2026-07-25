import { ArchitectureDiagram } from "@/components/architecture-diagram";
import type { Project } from "@/types/site";

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="subtle-card p-6">
      <h2 className="text-xl font-black">{title}</h2>
      <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--muted)]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article>
      <section className="section-tight">
        <div className="container">
          <p className="eyebrow">Case Study</p>
          <h1 className="display-heading mt-4">{project.title}</h1>
          <p className="lead mt-6 max-w-3xl">{project.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight bg-[var(--surface)]">
        <div className="container grid gap-5 lg:grid-cols-3">
          <div className="subtle-card p-6">
            <h2 className="text-xl font-black">Context</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">{project.context}</p>
          </div>
          <div className="subtle-card p-6">
            <h2 className="text-xl font-black">Problem</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">{project.problem}</p>
          </div>
          <div className="subtle-card p-6">
            <h2 className="text-xl font-black">My Role</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">{project.role}</p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <h2 className="section-heading">System architecture</h2>
          <p className="lead mt-4 max-w-3xl">{project.approach}</p>
          <div className="mt-8">
            <ArchitectureDiagram steps={project.architecture} />
          </div>
        </div>
      </section>

      <section className="section-tight bg-[var(--surface)]">
        <div className="container grid gap-5 lg:grid-cols-2">
          <DetailBlock title="Constraints" items={project.constraints} />
          <DetailBlock title="Challenges" items={project.challenges} />
          <DetailBlock title="Decisions and Trade-offs" items={project.tradeoffs} />
          <DetailBlock title="Results" items={project.results} />
          <DetailBlock title="Lessons Learned" items={project.lessons} />
          <DetailBlock title="Future Improvements" items={project.future} />
        </div>
      </section>
    </article>
  );
}
