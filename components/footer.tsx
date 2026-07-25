import Link from "next/link";

import { links, profile } from "@/data/profile";
import { isPlaceholder } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container grid gap-8 py-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-lg font-black">{profile.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--muted)]">{profile.positioning}</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          {links.slice(0, 5).map((link) =>
            isPlaceholder(link.href) ? (
              <span key={link.label} className="tag">
                {link.label}: {link.href}
              </span>
            ) : (
              <Link key={link.label} className="tag transition hover:text-[var(--accent)]" href={link.href}>
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
