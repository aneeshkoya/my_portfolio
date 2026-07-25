import type { Metadata } from "next";
import { Download } from "lucide-react";

import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume page with a download placeholder for Aneesh M. Koya's CV.",
};

export default function ResumePage() {
  return (
    <section className="section-tight">
      <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Resume</p>
          <h1 className="display-heading mt-4">Resume and CV download.</h1>
          <p className="lead mt-6">
            The site is ready for an embedded or downloadable resume PDF. Add the final public resume at
            <span className="placeholder"> public/resume/Aneesh_Koya_CV.pdf</span>.
          </p>
          <button
            className="button button-primary mt-8 cursor-not-allowed opacity-75"
            type="button"
            disabled
            title={profile.resumeStatus}
          >
            <Download aria-hidden size={18} />
            Resume PDF Pending
          </button>
        </div>
        <div className="premium-card grid min-h-[520px] place-items-center p-8 text-center">
          <div>
            <p className="text-2xl font-black">{profile.resumeStatus}</p>
            <p className="mt-4 max-w-xl text-[var(--muted)]">
              Personal documents are intentionally not committed. Replace this placeholder with the public
              resume PDF you want recruiters to download.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
