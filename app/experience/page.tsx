import type { Metadata } from "next";

import { ExperienceTimeline } from "@/components/experience-timeline";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/profile";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience across AI/ML research, engineering education and PhD research.",
};

export default function ExperiencePage() {
  return (
    <section className="section-tight">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Industrial AI, academic teaching and information-security research."
          description="Timeline covering Research Scientist - AI/ML at Knorex, Assistant Professor in Electronics and Communication Engineering, and PhD research at NIT Calicut."
        />
        <ExperienceTimeline experiences={experiences} />
      </div>
    </section>
  );
}
