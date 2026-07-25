"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

import type { Publication } from "@/types/site";

export function PublicationCard({ publication }: { publication: Publication }) {
  const [copied, setCopied] = useState(false);

  async function copyBibtex() {
    await navigator.clipboard.writeText(publication.bibtex);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <article className="subtle-card p-6">
      <div className="flex flex-wrap gap-2">
        <span className="tag">{publication.type}</span>
        <span className="tag">{publication.year}</span>
        <span className="tag">{publication.area}</span>
      </div>
      <h3 className="mt-5 text-xl font-black leading-tight">{publication.title}</h3>
      <p className="mt-3 font-bold text-[var(--muted)]">{publication.venue}</p>
      <dl className="mt-5 grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-3">
        <div>
          <dt className="font-black text-[var(--foreground)]">DOI</dt>
          <dd className="placeholder">{publication.doi}</dd>
        </div>
        <div>
          <dt className="font-black text-[var(--foreground)]">Link</dt>
          <dd className="placeholder">{publication.link}</dd>
        </div>
        <div>
          <dt className="font-black text-[var(--foreground)]">Citations</dt>
          <dd className="placeholder">{publication.citationCount}</dd>
        </div>
      </dl>
      <button className="button button-secondary mt-5" type="button" onClick={copyBibtex}>
        <Copy aria-hidden size={17} />
        {copied ? "Copied BibTeX" : "Copy BibTeX"}
      </button>
    </article>
  );
}
