import type { Metadata } from "next";

import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Aneesh M. Koya for AI/ML research, industrial R&D and technical leadership opportunities.",
};

export default function ContactPage() {
  return <ContactSection />;
}
