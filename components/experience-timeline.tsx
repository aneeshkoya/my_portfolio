import type { Experience } from "@/types/site";

export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
      {experiences.map((experience) => (
        <article
          key={`${experience.role}-${experience.organization}`}
          className="grid gap-6 py-8 lg:grid-cols-[260px_1fr]"
        >
          <div>
            <p className="font-black text-[var(--accent)]">{experience.period}</p>
            <p className="mt-2 text-sm font-bold text-[var(--muted)]">{experience.location}</p>
          </div>
          <div>
            <h3 className="text-2xl font-black">{experience.role}</h3>
            <p className="mt-1 font-bold text-[var(--muted)]">{experience.organization}</p>
            <p className="mt-4 leading-8 text-[var(--muted)]">{experience.summary}</p>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-[var(--muted)]">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
