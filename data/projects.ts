import type { Project } from "@/types/site";

export const projects: Project[] = [
  {
    slug: "real-time-contextual-intelligence-platform",
    title: "Real-Time Contextual Intelligence Platform",
    subtitle: "High-throughput contextual AI pipeline for production advertising intelligence.",
    problem:
      "Digital advertising systems need fast, reliable contextual understanding across high-volume request streams without sacrificing targeting quality.",
    approach:
      "Built a streaming architecture using Kafka, Spark Streaming, SQS, content extraction, language detection, NLP classification, MongoDB and Elasticsearch.",
    outcome:
      "Supported approximately 40,000 requests per second while enabling contextual targeting, percolator-based matching and operational monitoring.",
    role: "Research Scientist and AI/ML system contributor across modelling, relevance, monitoring and operationalisation.",
    stack: ["Kafka", "Spark Streaming", "SQS", "NLP", "MongoDB", "Elasticsearch", "Grafana"],
    highlights: [
      "High-throughput streaming architecture",
      "Real-time inference and contextual targeting",
      "Search and percolator-based matching",
      "Production monitoring, scalability and reliability",
    ],
    context:
      "The platform connects streaming data, content understanding and search infrastructure so contextual intelligence can be applied inside live advertising workflows.",
    constraints: [
      "Maintain throughput around 40,000 requests per second.",
      "Keep inference and matching reliable under changing inventory conditions.",
      "Support operational monitoring without adding unnecessary latency.",
    ],
    architecture: [
      "Request stream ingestion",
      "Content extraction and language detection",
      "NLP classification and enrichment",
      "MongoDB persistence",
      "Elasticsearch indexing and percolator matching",
      "Monitoring and operational alerts",
    ],
    challenges: [
      "Balancing relevance quality with real-time latency requirements.",
      "Maintaining stable matching as inventory and taxonomy coverage changed.",
      "Creating monitoring signals that were useful for both research and operations.",
    ],
    tradeoffs: [
      "Favoured scalable relevance and monitoring patterns over overly complex model-serving paths.",
      "Used search infrastructure where explainability and operational control were important.",
    ],
    results: [
      "Approximately 40,000 requests per second pipeline experience.",
      "Improved contextual intelligence coverage for industrial advertising workflows.",
      "[ADD METRIC] latency, uptime or precision metrics when approved for public use.",
    ],
    lessons: [
      "Production AI quality depends as much on monitoring, feedback and taxonomy hygiene as on model choice.",
      "Search relevance systems are strongest when model signals and operational controls are designed together.",
    ],
    future: [
      "Add online evaluation dashboards for taxonomy drift.",
      "Connect model confidence and business feedback loops more tightly.",
    ],
    featured: true,
  },
  {
    slug: "iab-taxonomy-classification-system",
    title: "IAB Taxonomy Classification System",
    subtitle: "Industrial multi-label classification aligned with advertising taxonomy needs.",
    problem:
      "Contextual advertising requires consistent taxonomy mapping across diverse text sources and content categories.",
    approach:
      "Designed a multi-label text classification workflow using vocabulary generation, TF-IDF features, One-vs-Rest Linear SVC and taxonomy-aware evaluation.",
    outcome:
      "Enabled deployable classification with precision, recall and F1 evaluation for industrial contextual intelligence workflows.",
    role: "Designed and evaluated the modelling workflow for production-aligned taxonomy classification.",
    stack: ["Python", "Scikit-learn", "TF-IDF", "Linear SVC", "Multi-label classification"],
    highlights: [
      "Vocabulary generation",
      "Model training",
      "Multi-label classification",
      "Precision, recall and F1 evaluation",
      "Industrial deployment",
    ],
    context:
      "The system converts text signals into taxonomy-aligned labels that downstream advertising systems can consume.",
    constraints: [
      "Handle overlapping taxonomy categories.",
      "Make evaluation interpretable for production and research stakeholders.",
      "Keep the system practical for deployment and retraining.",
    ],
    architecture: [
      "Text corpus preparation",
      "Vocabulary generation",
      "TF-IDF feature extraction",
      "One-vs-Rest Linear SVC training",
      "Taxonomy-aware prediction",
      "Precision, recall and F1 evaluation",
    ],
    challenges: [
      "Managing label imbalance and category overlap.",
      "Maintaining consistency between taxonomy definitions and model outputs.",
    ],
    tradeoffs: [
      "Used classical linear models where interpretability, speed and deployment simplicity mattered.",
      "Prioritised robust evaluation over opaque headline metrics.",
    ],
    results: [
      "Deployed for industrial contextual classification workflows.",
      "[ADD METRIC] public precision, recall and F1 values when approved.",
    ],
    lessons: [
      "Taxonomy-aware data preparation is often more important than model complexity.",
      "Transparent evaluation helps make classification systems operationally trusted.",
    ],
    future: ["Introduce richer semantic features while preserving evaluation transparency."],
    featured: true,
  },
  {
    slug: "url-based-content-classification",
    title: "URL-Based Content Classification",
    subtitle: "URL-only contextual understanding for incomplete content environments.",
    problem:
      "Full-page content is not always available, limiting contextual inventory coverage and downstream targeting decisions.",
    approach:
      "Developed URL classification using DistilBERT and earlier BiLSTM-based approaches to infer contextual categories from URL strings.",
    outcome:
      "Expanded contextual inventory coverage and enabled classification when full-page content was unavailable.",
    role: "Built and evolved the modelling approach from sequence models to transformer-based URL classification.",
    stack: ["DistilBERT", "BiLSTM", "Transformers", "Python", "NLP"],
    highlights: [
      "URL-only classification",
      "Transformer-based modelling",
      "Earlier BiLSTM baselines",
      "Coverage improvement for contextual inventory",
    ],
    context:
      "URL patterns can carry useful semantic signals when page content cannot be extracted or used in time.",
    constraints: [
      "Operate with sparse and noisy URL-only signals.",
      "Avoid overfitting to superficial URL tokens.",
      "Support contextual inventory expansion.",
    ],
    architecture: [
      "URL preprocessing",
      "Tokenisation and sequence representation",
      "BiLSTM baseline modelling",
      "DistilBERT fine-tuning",
      "Taxonomy classification",
      "Inventory enrichment",
    ],
    challenges: [
      "Extracting reliable semantics from short, noisy strings.",
      "Balancing coverage gains with confidence and quality controls.",
    ],
    tradeoffs: [
      "Used URL-only classification as a complementary signal rather than a replacement for full content understanding.",
      "Favoured confidence-aware deployment for operational credibility.",
    ],
    results: [
      "Increased contextual inventory coverage where full-page content was unavailable.",
      "[ADD METRIC] coverage improvement value when approved for public use.",
    ],
    lessons: [
      "Sparse signals become useful when bounded by confidence, taxonomy and operational feedback.",
    ],
    future: ["Combine URL signals with retrieval, metadata and domain-level historical context."],
    featured: true,
  },
  {
    slug: "llm-rag-campaign-intelligence",
    title: "LLM and RAG-Based Campaign Intelligence",
    subtitle: "Grounded recommendations from historical campaign intelligence.",
    problem:
      "Campaign planning and contextual recommendations benefit from historical knowledge, but that knowledge must be retrieved, ranked and explained responsibly.",
    approach:
      "Built R&D workflows using semantic retrieval, retrieval-augmented generation, LLM-based ranking, prompt design and taxonomy mapping.",
    outcome:
      "Improved contextual reasoning and media planning efficiency by 25% using grounded campaign intelligence.",
    role: "Led applied research and workflow design for retrieval, prompting, ranking and explainability.",
    stack: ["LLMs", "RAG", "Semantic retrieval", "Prompt engineering", "Taxonomy mapping"],
    highlights: [
      "Semantic retrieval",
      "Grounded recommendations",
      "Prompt design",
      "Historical campaign intelligence",
      "Explainability and relevance",
    ],
    context:
      "The initiative connects campaign history with LLM reasoning so recommendations remain anchored in retrieved evidence.",
    constraints: [
      "Avoid unsupported model claims.",
      "Preserve taxonomy relevance.",
      "Make recommendations explainable for operational use.",
    ],
    architecture: [
      "Historical campaign corpus",
      "Semantic indexing and retrieval",
      "Prompt templates and grounding instructions",
      "LLM ranking and reasoning",
      "Taxonomy mapping",
      "Recommendation review",
    ],
    challenges: [
      "Reducing hallucination risk in recommendation workflows.",
      "Balancing semantic similarity with taxonomy precision.",
    ],
    tradeoffs: [
      "Favoured grounded outputs over freer generative responses.",
      "Designed prompts for explainability and review rather than novelty.",
    ],
    results: [
      "25% improvement in media planning efficiency.",
      "[ADD METRIC] retrieval quality or ranking evaluation when publishable.",
    ],
    lessons: [
      "RAG systems need evaluation, retrieval hygiene and clear prompt contracts to be useful in industrial settings.",
    ],
    future: ["Add evaluator models and human-feedback loops for recommendation quality."],
    featured: true,
  },
  {
    slug: "inventory-quality-optimisation",
    title: "Inventory Quality Optimisation",
    subtitle: "Operational intelligence for relevance, exclusions and campaign quality.",
    problem:
      "Irrelevant domains and apps can reduce contextual relevance and campaign quality unless they are monitored, analysed and excluded systematically.",
    approach:
      "Automated quality monitoring, domain and app analysis, Elasticsearch threshold tuning, exclusion management and contextual relevance evaluation.",
    outcome:
      "Supported filtering of 10K+ low-quality domains and apps monthly and improved operational visibility across 100+ active campaigns.",
    role: "Led ML-assisted quality workflows and operational monitoring improvements.",
    stack: ["Elasticsearch", "Monitoring", "NLP", "Automation", "Operational analytics"],
    highlights: [
      "Automated monitoring",
      "Quality control",
      "Domain and app analysis",
      "Campaign performance improvement",
      "Operational intelligence",
    ],
    context:
      "Quality optimisation connects model signals, search thresholds and operational exclusions so campaigns can remain relevant at scale.",
    constraints: [
      "Avoid excluding useful inventory unnecessarily.",
      "Keep quality workflows maintainable for ongoing operations.",
      "Support campaign-level visibility.",
    ],
    architecture: [
      "Inventory signal collection",
      "Domain and app quality analysis",
      "Threshold evaluation",
      "Exclusion list management",
      "Campaign monitoring",
      "Operational reporting",
    ],
    challenges: [
      "Managing false positives in exclusion workflows.",
      "Linking technical matching thresholds to campaign outcomes.",
    ],
    tradeoffs: [
      "Balanced automation with reviewable operational controls.",
      "Used threshold tuning where it improved relevance without weakening coverage.",
    ],
    results: [
      "10K+ low-quality domains and apps filtered monthly.",
      "100+ active campaigns supported by automated monitoring workflows.",
    ],
    lessons: [
      "Operational AI systems need quality controls that can be explained and adjusted by teams.",
    ],
    future: ["Add richer anomaly detection and longitudinal quality trend analysis."],
    featured: true,
  },
  {
    slug: "privacy-preserving-ecg-telemonitoring",
    title: "Privacy-Preserving ECG Telemonitoring",
    subtitle: "Secure and energy-efficient healthcare monitoring in WBAN environments.",
    problem:
      "Wireless Body Area Networks need efficient ECG telemonitoring while preserving privacy, energy and security constraints.",
    approach:
      "Researched signal compression, machine-learning-based detection, authentication and key agreement, secret sharing and privacy-preserving outsourcing.",
    outcome:
      "Produced PhD research with implementation-oriented validation using Raspberry Pi and Odroid-XU4 platforms.",
    role: "PhD researcher responsible for system design, security modelling, implementation and evaluation.",
    stack: ["WBAN", "IoT", "ECG", "Signal compression", "Raspberry Pi", "Odroid-XU4"],
    highlights: [
      "Signal compression",
      "Machine-learning-based detection",
      "Authentication and key agreement",
      "Secret sharing",
      "Privacy-preserving outsourcing",
      "Raspberry Pi and Odroid-XU4 implementation",
    ],
    context:
      "The research addressed secure healthcare telemetry where sensing devices have limited power, compute and communication budgets.",
    constraints: [
      "Protect sensitive ECG data.",
      "Respect device-level resource constraints.",
      "Maintain feasibility for practical embedded platforms.",
    ],
    architecture: [
      "ECG sensing and preprocessing",
      "Compression and feature handling",
      "Secure transmission",
      "Authentication and key agreement",
      "Privacy-preserving outsourcing",
      "Detection and monitoring",
    ],
    challenges: [
      "Balancing privacy guarantees, energy efficiency and detection utility.",
      "Validating ideas on practical hardware rather than only simulations.",
    ],
    tradeoffs: [
      "Designed lightweight security patterns suitable for constrained healthcare networks.",
    ],
    results: [
      "Completed PhD research at NIT Calicut.",
      "Contributed to SCI-indexed journal publication record.",
    ],
    lessons: [
      "Trustworthy AI and security need to be designed into the system architecture, not added as an afterthought.",
    ],
    future: ["Explore modern privacy-preserving ML methods for healthcare edge intelligence."],
    featured: false,
  },
  {
    slug: "hate-speech-social-bias-research",
    title: "Hate Speech and Social Bias Research",
    subtitle: "Responsible NLP research on target identity and social bias evaluation.",
    problem:
      "Hate-speech systems can conflate target identity, polarity and stereotypes, creating fairness and trust risks.",
    approach:
      "Studied hate-speech detection, target identity bias, polarity confusion, stereotype correlation and warmth-competence analysis.",
    outcome:
      "Research resulted in a NAACL 2025 Main Conference publication.",
    role: "NLP researcher contributing to responsible AI and social bias evaluation.",
    stack: ["NLP", "Responsible AI", "Bias evaluation", "Hate-speech detection"],
    highlights: [
      "Target identity bias",
      "Polarity confusion",
      "Stereotype correlation",
      "Warmth-competence analysis",
      "Responsible AI evaluation",
    ],
    context:
      "The project sits at the intersection of NLP, social bias measurement and trustworthy AI evaluation.",
    constraints: [
      "Avoid simplistic fairness narratives.",
      "Evaluate social identity effects carefully.",
      "Keep claims tied to research evidence.",
    ],
    architecture: [
      "Dataset and identity analysis",
      "Hate-speech prediction",
      "Polarity and stereotype correlation checks",
      "Warmth-competence analysis",
      "Responsible AI interpretation",
    ],
    challenges: [
      "Distinguishing true hate-speech signals from identity-associated shortcuts.",
      "Communicating bias findings with appropriate nuance.",
    ],
    tradeoffs: [
      "Favoured careful analysis over broad unsupported claims.",
    ],
    results: [
      "NAACL 2025 Main Conference publication.",
      "[ADD PUBLICATION] exact title and link.",
    ],
    lessons: [
      "Trustworthy NLP requires explicit attention to identity, stereotypes and evaluation framing.",
    ],
    future: ["Extend analysis to multilingual or cross-cultural bias settings."],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 5);
