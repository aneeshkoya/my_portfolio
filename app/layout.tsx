import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { profile, siteUrl } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | AI/ML Research Scientist`,
    template: `%s | ${profile.name}`,
  },
  description: profile.positioning,
  keywords: [
    "AI/ML Research Scientist",
    "Senior Machine Learning Engineer",
    "NLP Researcher",
    "Industrial AI Researcher",
    "Data Scientist",
    "Information Security Researcher",
    "Postdoctoral Researcher",
    "Technical Manager",
    "Research and Development Engineer",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: `${profile.name} | AI/ML Research Scientist`,
    description: profile.positioning,
    images: [{ url: "/images/ai-research-hero.png", width: 1792, height: 1024, alt: "Abstract AI research systems visual" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressCountry: "India",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Information Security",
      "Retrieval-Augmented Generation",
      "Industrial Research and Development",
    ],
    url: siteUrl,
  };

  return (
    <html lang="en" data-theme="dark" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="page-shell">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
