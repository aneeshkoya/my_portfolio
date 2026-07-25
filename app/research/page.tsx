import type { Metadata } from "next";

import { PublicationList } from "@/components/publication-list";
import { SectionHeading } from "@/components/section-heading";
import { researchInterests } from "@/data/publications";

export const metadata: Metadata = {
  title: "Research and Publications",
  description: "Research interests, publication placeholders, IEEE service and publication filters.",
};

export default function ResearchPage() {
  const scholarlyJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    about: {
      "@type": "Person",
      name: "Aneesh M. Koya",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyJsonLd) }}
      />
      <section className="section-tight">
        <div className="container">
          <SectionHeading
            eyebrow="Research and Publications"
            title="NLP, healthcare AI, signal processing and information-security research."
            description="Publication entries intentionally use placeholders until exact titles, DOI links and citation counts are supplied."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {researchInterests.map((interest) => (
              <div className="subtle-card p-5 font-extrabold" key={interest}>
                {interest}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[var(--surface)]">
        <div className="container">
          <PublicationList />
        </div>
      </section>
    </>
  );
}
