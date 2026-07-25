"use client";

import { useMemo, useState } from "react";

import { PublicationCard } from "@/components/publication-card";
import { publicationFilters, publications } from "@/data/publications";

export function PublicationList() {
  const [type, setType] = useState("All");
  const [area, setArea] = useState("All");
  const [year, setYear] = useState("All");

  const filtered = useMemo(
    () =>
      publications.filter((publication) => {
        const typeMatch = type === "All" || publication.type === type;
        const areaMatch = area === "All" || publication.area === area;
        const yearMatch = year === "All" || publication.year === year;
        return typeMatch && areaMatch && yearMatch;
      }),
    [area, type, year],
  );

  return (
    <div>
      <div className="subtle-card mb-8 grid gap-4 p-4 md:grid-cols-3">
        <label className="grid gap-2 text-sm font-black">
          Type
          <select
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] p-3"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            {publicationFilters.types.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-black">
          Year
          <select
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] p-3"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          >
            {publicationFilters.years.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-black">
          Research Area
          <select
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] p-3"
            value={area}
            onChange={(event) => setArea(event.target.value)}
          >
            {publicationFilters.areas.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length ? (
        <div className="grid gap-5">
          {filtered.map((publication) => (
            <PublicationCard key={`${publication.title}-${publication.area}`} publication={publication} />
          ))}
        </div>
      ) : (
        <div className="subtle-card p-8 text-center text-[var(--muted)]">
          No publications match the selected filters.
        </div>
      )}
    </div>
  );
}
