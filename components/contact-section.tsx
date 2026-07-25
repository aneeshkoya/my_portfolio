import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { links, profile } from "@/data/profile";
import { isPlaceholder } from "@/lib/utils";

export function ContactSection() {
  return (
    <section className="section-tight bg-[var(--surface)]" id="contact">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-heading mt-3">Open to senior AI research and R&D conversations.</h2>
          <p className="lead mt-5">
            Best fit: research scientist, senior machine learning, industrial AI, postdoctoral and
            technical leadership opportunities.
          </p>
        </div>
        <div className="premium-card p-6">
          <div className="grid gap-4">
            <Link className="flex items-center gap-3 font-black" href={`mailto:${profile.email}`}>
              <Mail aria-hidden className="text-[var(--accent)]" size={20} />
              {profile.email}
            </Link>
            <Link className="flex items-center gap-3 font-black" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <Phone aria-hidden className="text-[var(--accent)]" size={20} />
              {profile.phone}
            </Link>
            <p className="flex items-center gap-3 font-black">
              <MapPin aria-hidden className="text-[var(--accent)]" size={20} />
              {profile.location}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {links.slice(1).map((link) =>
              isPlaceholder(link.href) ? (
                <span className="tag" key={link.label}>
                  {link.label}: {link.href}
                </span>
              ) : (
                <Link className="tag" href={link.href} key={link.label}>
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
