import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

import { ContactSection } from "@/components/contact-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { MetricCard } from "@/components/metric-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SkillsGroup } from "@/components/skills-group";
import {
  credibilityMetrics,
  experiences,
  focusAreas,
  leadershipHighlights,
  profile,
  skillGroups,
} from "@/data/profile";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <section className="section-tight overflow-hidden">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="pt-6">
            <p className="eyebrow">{profile.title}</p>
            <h1 className="display-heading mt-4">{profile.heroHeadline}</h1>
            <p className="lead mt-6 max-w-3xl">{profile.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button button-primary" href="/projects">
                View My Work
                <ArrowRight aria-hidden size={18} />
              </Link>
              <Link className="button button-secondary" href="/resume">
                <Download aria-hidden size={18} />
                Download Resume
              </Link>
              <Link className="button button-secondary" href="/contact">
                <Mail aria-hidden size={18} />
                Contact Me
              </Link>
            </div>
          </div>
          <div className="premium-card relative min-h-[420px] overflow-hidden">
            <Image
              src="/images/ai-research-hero.png"
              alt="Abstract visual of retrieval, documents and data systems for AI research"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
        </div>
        <div className="container mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {credibilityMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </section>

      <section className="section bg-[var(--surface)]">
        <div className="container">
          <SectionHeading
            eyebrow="Selected Work"
            title="Premium case studies across production AI, industrial R&D and trustworthy systems."
            description="Each project is framed around problem, architecture, role, constraints and outcomes, with placeholders only where public metrics or links have not been supplied."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Experience"
            title="Research, teaching and production AI ownership."
            description="A profile spanning industrial ML systems, academic engineering education and doctoral research in information security."
          />
          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>

      <section className="section bg-[var(--surface)]">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Research Impact</p>
            <h2 className="section-heading mt-3">Scholarly depth with industrial translation.</h2>
            <p className="lead mt-5">
              Research spans NLP, healthcare AI, signal processing, information security and WBAN, with
              professional service through IEEE review and membership activities.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
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
          <SectionHeading
            eyebrow="Technical Leadership"
            title="Practical ownership beyond modelling."
            description="The strongest AI profiles combine research judgement, production discipline and team-level execution."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {leadershipHighlights.map((item) => (
              <article className="subtle-card p-5" key={item}>
                <p className="font-extrabold leading-7">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--surface)]">
        <div className="container">
          <SectionHeading
            eyebrow="Technology Stack"
            title="Structured capabilities, not a logo wall."
            description="Grouped by the work they support: AI/ML, data/search systems, and deployment-ready backend engineering."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <SkillsGroup key={group.title} group={group} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
