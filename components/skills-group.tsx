import type { SkillGroup } from "@/types/site";

export function SkillsGroup({ group }: { group: SkillGroup }) {
  return (
    <article className="subtle-card p-6">
      <h3 className="text-xl font-black">{group.title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
