import type { Experience, LinkItem, Metric, SkillGroup } from "@/types/site";

export const siteUrl = "https://aneeshkoya.github.io/my_portfolio";

export const profile = {
  name: "Aneesh M. Koya",
  title: "AI/ML Research Scientist and Technical Leader",
  location: "Pune, India",
  email: "aneeshkoya@gmail.com",
  phone: "+91 9946004807",
  resumeHref: "/resume/Aneesh_Koya_CV.pdf",
  resumeStatus: "[ADD RESUME FILE]",
  positioning:
    "AI/ML Research Scientist and Technical Leader specialising in scalable NLP, contextual intelligence, real-time data systems, trustworthy AI, information security and industrial research.",
  heroHeadline: "Building Scalable, Trustworthy AI Systems from Research to Production",
  heroText:
    "AI/ML Research Scientist with expertise in NLP, real-time intelligence, industrial data systems, information security and production-grade machine learning.",
  summary:
    "Research Scientist with 4+ years of industry experience building scalable NLP, LLM, contextual AI and production ML systems for large-scale AdTech platforms, supported by academic and applied research experience in information security, IoT healthcare systems, privacy-preserving architectures and intelligent signal processing.",
};

export const links: LinkItem[] = [
  { label: "Email", href: "mailto:aneeshkoya@gmail.com" },
  { label: "LinkedIn", href: "[ADD LINK]", isPlaceholder: true },
  { label: "GitHub", href: "[ADD LINK]", isPlaceholder: true },
  { label: "Google Scholar", href: "[ADD LINK]", isPlaceholder: true },
  { label: "ORCID", href: "[ADD LINK]", isPlaceholder: true },
  { label: "Scopus", href: "[ADD LINK]", isPlaceholder: true },
  { label: "OpenReview", href: "[ADD LINK]", isPlaceholder: true },
];

export const credibilityMetrics: Metric[] = [
  { value: "PhD", label: "Information Security", note: "NIT Calicut" },
  { value: "Senior", label: "Member, IEEE" },
  { value: "4+", label: "Years Industrial AI Experience" },
  { value: "40K+", label: "Requests/Second Pipeline Experience" },
  { value: "4", label: "SCI Journal Publications" },
];

export const leadershipHighlights = [
  "Mentoring interns and guiding technical team members",
  "Technical planning for production AI and data workflows",
  "Cross-functional collaboration with engineering and product teams",
  "Handling client and internal technical tickets",
  "Production troubleshooting and operational ownership",
  "Research-to-product translation for industrial R&D initiatives",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "AI and Machine Learning",
    items: [
      "Python",
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Transformers",
      "DistilBERT",
      "Linear SVC",
      "TF-IDF",
      "LangChain",
      "LangGraph",
      "OpenAI APIs",
      "RAG systems",
      "Prompt engineering",
    ],
  },
  {
    title: "Data and Search",
    items: [
      "Apache Kafka",
      "Apache Spark",
      "Elasticsearch",
      "MongoDB",
      "BigQuery",
      "DuckDB",
      "Airflow",
      "SQS",
      "Pandas",
    ],
  },
  {
    title: "Backend and Deployment",
    items: [
      "FastAPI",
      "Uvicorn",
      "Docker",
      "Kubernetes",
      "Istio",
      "REST APIs",
      "TCP services",
      "GitHub Actions",
      "GCP",
      "AWS",
    ],
  },
];

export const focusAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Natural Language Processing",
  "Large Language Models",
  "Retrieval-Augmented Generation",
  "Contextual Intelligence",
  "Information Security",
  "IoT and WBAN",
  "Real-Time Data Engineering",
  "Explainable AI",
  "Privacy-Preserving AI",
  "Industrial R&D",
  "Research Commercialisation",
];

export const experiences: Experience[] = [
  {
    role: "Research Scientist - AI/ML",
    organization: "Knorex",
    location: "Pune, India | Singapore Headquarters",
    period: "Feb 2022 - Present",
    summary:
      "Builds and operates NLP, LLM, contextual intelligence, search relevance and production ML workflows for large-scale digital advertising systems.",
    highlights: [
      "Developed large-scale NLP and machine learning systems for contextual targeting and semantic intelligence across advertising pipelines.",
      "Designed transformer-based content classification systems using DistilBERT and LLM-driven workflows.",
      "Built Retrieval-Augmented Generation pipelines integrating historical campaign intelligence and improving media planning efficiency by 25%.",
      "Implemented Elasticsearch Percolator-based relevance strategies for scalable contextual matching.",
      "Led ML-assisted inventory quality systems for filtering 10K+ low-quality domains and apps monthly.",
      "Conducted NLP research on hate speech prediction and target identity disentanglement, resulting in a NAACL 2025 Main Conference publication.",
    ],
    tags: ["NLP", "LLMs", "RAG", "Elasticsearch", "Production ML"],
  },
  {
    role: "Assistant Professor, Electronics and Communication Engineering",
    organization: "M.E.S. College of Engineering",
    location: "Kerala, India",
    period: "Aug 2009 - Jul 2015",
    summary:
      "Taught engineering subjects and mentored student projects in intelligent systems, information security, image processing and embedded technologies.",
    highlights: [
      "Delivered undergraduate and postgraduate courses in information theory, coding theory, signal processing, data encryption and digital electronics.",
      "Mentored student projects focused on intelligent systems, information security, image processing and embedded technologies.",
      "Supervised laboratories, technical demonstrations and academic research activities.",
    ],
    tags: ["Teaching", "Mentoring", "Signal Processing", "Information Security"],
  },
  {
    role: "PhD Researcher",
    organization: "National Institute of Technology Calicut",
    location: "Kerala, India",
    period: "2015 - 2021",
    summary:
      "Researched secure, energy-efficient ECG telemonitoring in Wireless Body Area Networks, with implementation-oriented validation.",
    highlights: [
      "Focused on lightweight security, WBAN, IoT healthcare, ECG telemonitoring and privacy-preserving architectures.",
      "Explored signal compression, authentication, key agreement, secret sharing and privacy-preserving outsourcing.",
      "Implemented and evaluated research prototypes using Raspberry Pi and Odroid-XU4 platforms.",
    ],
    tags: ["PhD", "WBAN", "IoT Healthcare", "Information Security"],
  },
];
