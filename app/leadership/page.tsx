import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { leadershipHighlights } from "@/data/profile";

export const metadata: Metadata = {
  title: "Technical Leadership",
  description: "Technical leadership, mentoring, production troubleshooting and research-to-product translation.",
};

export default function LeadershipPage() {
  return (
    <section className="section-tight">
      <div className="container">
        <SectionHeading
          eyebrow="Technical Leadership"
          title="Operating at the intersection of research quality and production responsibility."
          description="Leadership here is presented through concrete responsibilities rather than inflated titles."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {leadershipHighlights.map((item) => (
            <article className="subtle-card p-6" key={item}>
              <h2 className="text-xl font-black">{item}</h2>
              <p className="mt-4 leading-8 text-[var(--muted)]">
                Demonstrates senior judgement in applied AI environments where model quality, system
                reliability, stakeholder communication and operational ownership must work together.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
