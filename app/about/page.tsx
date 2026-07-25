import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { SkillsGroup } from "@/components/skills-group";
import { focusAreas, profile, skillGroups } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "About Aneesh M. Koya, AI/ML Research Scientist and technical leader.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-tight">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1 className="display-heading mt-4">PhD-level engineer working where research meets production.</h1>
          <p className="lead mt-6 max-w-4xl">{profile.summary}</p>
        </div>
      </section>
      <section className="section bg-[var(--surface)]">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Positioning"
            title="Senior AI/ML researcher, industrial R&D professional and technical leader."
            description={profile.positioning}
          />
          <div className="grid gap-3">
            {focusAreas.map((area) => (
              <div className="subtle-card p-4 font-extrabold" key={area}>
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Capabilities" title="Technical areas grouped by practical use." />
          <div className="grid gap-5 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <SkillsGroup key={group.title} group={group} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
