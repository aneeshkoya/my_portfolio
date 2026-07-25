import Link from "next/link";
import { Download } from "lucide-react";

import { profile } from "@/data/profile";

export function ResumeButton() {
  return (
    <Link className="button button-primary" href="/resume">
      <Download aria-hidden size={18} />
      Download Resume
      <span className="sr-only">{profile.resumeStatus}</span>
    </Link>
  );
}
