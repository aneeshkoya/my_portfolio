import Link from "next/link";
import { Download, Mail } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/profile";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Leadership", href: "/leadership" },
  { label: "Resume", href: "/resume" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background),transparent_8%)] backdrop-blur-xl">
      <nav className="container flex min-h-16 items-center justify-between gap-4 py-3" aria-label="Primary">
        <Link href="/" className="text-sm font-black tracking-[0.08em] uppercase">
          {profile.name}
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link className="button button-secondary nav-desktop-action" href="/resume">
            <Download aria-hidden size={17} />
            Resume
          </Link>
          <Link className="button button-primary nav-desktop-action" href="/contact">
            <Mail aria-hidden size={17} />
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </nav>
      <div className="container mobile-nav flex gap-4 overflow-x-auto pb-3 lg:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 text-sm font-bold text-[var(--muted)]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
