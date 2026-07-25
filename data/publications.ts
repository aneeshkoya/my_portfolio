import type { Publication } from "@/types/site";

export const publicationFilters = {
  types: ["All", "Journal", "Conference", "Service"],
  years: ["All", "2025", "[ADD YEAR]"],
  areas: [
    "All",
    "NLP",
    "Healthcare AI",
    "Information Security",
    "Signal Processing",
    "IoT and WBAN",
  ],
};

export const publications: Publication[] = [
  {
    title: "[ADD PUBLICATION] NAACL 2025 paper on hate speech prediction and target identity disentanglement",
    venue: "NAACL 2025 Main Conference",
    year: "2025",
    type: "Conference",
    area: "NLP",
    doi: "[ADD DOI]",
    link: "[ADD LINK]",
    citationCount: "[ADD CITATION COUNT]",
    bibtex:
      "@inproceedings{add-naacl-2025,\n  title = {[ADD PUBLICATION]},\n  author = {Koya, Aneesh M. and [ADD AUTHORS]},\n  booktitle = {Proceedings of NAACL},\n  year = {2025}\n}",
  },
  {
    title: "[ADD PUBLICATION] SCI-indexed journal publication in healthcare AI / WBAN",
    venue: "[ADD JOURNAL]",
    year: "[ADD YEAR]",
    type: "Journal",
    area: "Healthcare AI",
    doi: "[ADD DOI]",
    link: "[ADD LINK]",
    citationCount: "[ADD CITATION COUNT]",
    bibtex:
      "@article{add-sci-healthcare-ai,\n  title = {[ADD PUBLICATION]},\n  author = {Koya, Aneesh M. and [ADD AUTHORS]},\n  journal = {[ADD JOURNAL]},\n  year = {[ADD YEAR]}\n}",
  },
  {
    title: "[ADD PUBLICATION] SCI-indexed journal publication in information security",
    venue: "[ADD JOURNAL]",
    year: "[ADD YEAR]",
    type: "Journal",
    area: "Information Security",
    doi: "[ADD DOI]",
    link: "[ADD LINK]",
    citationCount: "[ADD CITATION COUNT]",
    bibtex:
      "@article{add-sci-security,\n  title = {[ADD PUBLICATION]},\n  author = {Koya, Aneesh M. and [ADD AUTHORS]},\n  journal = {[ADD JOURNAL]},\n  year = {[ADD YEAR]}\n}",
  },
  {
    title: "[ADD PUBLICATION] SCI-indexed journal publication in signal processing",
    venue: "[ADD JOURNAL]",
    year: "[ADD YEAR]",
    type: "Journal",
    area: "Signal Processing",
    doi: "[ADD DOI]",
    link: "[ADD LINK]",
    citationCount: "[ADD CITATION COUNT]",
    bibtex:
      "@article{add-sci-signal-processing,\n  title = {[ADD PUBLICATION]},\n  author = {Koya, Aneesh M. and [ADD AUTHORS]},\n  journal = {[ADD JOURNAL]},\n  year = {[ADD YEAR]}\n}",
  },
  {
    title: "[ADD PUBLICATION] SCI-indexed journal publication in IoT and WBAN",
    venue: "[ADD JOURNAL]",
    year: "[ADD YEAR]",
    type: "Journal",
    area: "IoT and WBAN",
    doi: "[ADD DOI]",
    link: "[ADD LINK]",
    citationCount: "[ADD CITATION COUNT]",
    bibtex:
      "@article{add-sci-iot-wban,\n  title = {[ADD PUBLICATION]},\n  author = {Koya, Aneesh M. and [ADD AUTHORS]},\n  journal = {[ADD JOURNAL]},\n  year = {[ADD YEAR]}\n}",
  },
];

export const researchInterests = [
  "Trustworthy NLP and social bias evaluation",
  "Retrieval-augmented generation for industrial decision support",
  "Contextual intelligence and semantic search",
  "Privacy-preserving AI for healthcare and IoT systems",
  "Information security in resource-constrained networks",
  "Research commercialisation for production AI systems",
];
