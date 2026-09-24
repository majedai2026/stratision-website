import { InsightArticle, InsightTerritory } from "../types";

export interface TerritoryOverview {
  id: string;
  number: string;
  name: InsightTerritory;
  question: string;
  topics: string[];
}

export const INSIGHTS_TERRITORIES: TerritoryOverview[] = [
  {
    id: "ai-and-business",
    number: "01",
    name: "AI & Business",
    question: "How should leaders think about AI?",
    topics: [
      "AI strategy",
      "AI adoption",
      "AI deployment",
      "Organisational change",
      "AI experimentation",
      "Executive decision-making",
      "AI investment",
      "Technology strategy"
    ]
  },
  {
    id: "systems-and-operations",
    number: "02",
    name: "Systems & Operations",
    question: "Where should AI actually enter the workflow?",
    topics: [
      "Workflow friction",
      "Repetitive work",
      "Information handoffs",
      "Manual processes",
      "Operational systems",
      "Automation",
      "Business processes",
      "Information flow",
      "System design"
    ]
  },
  {
    id: "governance-and-leadership",
    number: "03",
    name: "Governance & Leadership",
    question: "How should organisations deploy AI responsibly and practically?",
    topics: [
      "Governance",
      "Human judgement",
      "Accountability",
      "Data handling",
      "Access & permissions",
      "Oversight",
      "Build vs buy",
      "AI policy",
      "Implementation decisions"
    ]
  },
  {
    id: "industry-perspectives",
    number: "04",
    name: "Industry Perspectives",
    question: "What changes when AI meets the realities of a particular industry?",
    topics: [
      "Financial Services & Investment",
      "Insurance & Underwriting",
      "Logistics & Supply Chain",
      "Professional Services & Advisory",
      "Real Estate & Property Management",
      "Infrastructure & Construction"
    ]
  }
];

export const INDUSTRY_PERSPECTIVES_LINKS = [
  {
    name: "Financial Services & Investment",
    slug: "financial-services",
    description: "Multi-jurisdiction compliance checks, portfolio monitoring, and audit-ready reporting trails."
  },
  {
    name: "Insurance & Underwriting",
    slug: "insurance",
    description: "Complex risk documentation parsing, loss run ingestion, and transparent underwriting adjudication."
  },
  {
    name: "Logistics & Supply Chain",
    slug: "logistics",
    description: "Freight manifest discrepancies, cross-border customs declarations, and exception dispatch."
  },
  {
    name: "Professional Services & Advisory",
    slug: "professional-services",
    description: "Engagement scoping, billable knowledge synthesis, and contract precedent extraction."
  },
  {
    name: "Real Estate & Property Management",
    slug: "real-estate",
    description: "Lease covenant abstraction, tenant maintenance triage, and asset valuation models."
  },
  {
    name: "Infrastructure & Construction",
    slug: "infrastructure",
    description: "Subcontractor compliance tracking, site safety logs, and variation order reconciliation."
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  // ARTICLE 01
  {
    id: "ins-01",
    number: "01",
    slug: "most-businesses-dont-have-an-ai-problem",
    title: "Most Businesses Don't Have an AI Problem. They Have a Workflow Problem.",
    category: "AI & Business",
    type: "Major Perspective",
    docRef: "INS-01 // PERSPECTIVE",
    readTime: "7 min read",
    date: "Executive Perspective",
    shortDescriptor: "Why giving employees model access leaves core operational friction untouched, and where real leverage begins.",
    thesis: "Businesses often begin their AI journey by asking what technology they should adopt. The better starting point is understanding where work currently slows down, repeats, gets handed between people or requires employees to search across disconnected information. AI becomes valuable when it is connected to those points of friction.",
    editorialIntro: "Access to capable models is becoming commoditised. That does not automatically create an effective operating system. A company can provide hundreds of employees with enterprise licences and still run on the same approval chains, manual spreadsheets, and fragmented handoffs that have constrained performance for a decade.",
    question: {
      title: "The Executive Question",
      paragraphs: [
        "Across executive committees and technology boards, the question of the last two years has almost universally been framed around technology selection: Which foundation models should we license? Should we roll out enterprise assistants? Which copilot subscription aligns with our desktop productivity suite?",
        "This framing assumes that the fundamental barrier to operational velocity is an employee's inability to generate text or summarise a document in isolation.",
        "The question senior leaders should be asking is radically different: Where does operational momentum stop inside this business? What manual handoffs, verification delays, and cross-system reconciliations prevent work from finishing without friction?"
      ]
    },
    reality: {
      title: "What Actually Happens Inside the Organisation",
      paragraphs: [
        "Consider what occurs when an enterprise equips a 500-person division with conversational AI interfaces. Individual employees use the tools to draft emails faster, clean up meeting transcripts, or brainstorm outlines.",
        "Yet when an order arrives from a client, or a contract requires cross-functional validation, the actual work moves at the exact same pace as it did three years ago.",
        "The order still sits in a shared inbox. An operations associate still opens three separate internal systems to verify account standing, inventory status, and credit limits. Discrepancies are still copied into a spreadsheet and flagged in a chat channel. An approval is still bottlenecked behind a manager who travels across time zones."
      ],
      callouts: [
        "Individual tasks may accelerate by 15%, but end-to-end operational cycles remain largely unchanged.",
        "Employees spend their time acting as human connective tissue between disconnected software platforms.",
        "The cognitive burden is not writing sentences — it is extracting, verifying, and routing operational state."
      ]
    },
    argument: {
      title: "The Core Argument",
      paragraphs: [
        "The problem facing most enterprises is not an absence of machine intelligence. It is the distance between AI capability and business workflow.",
        "When artificial intelligence is introduced as an isolated desktop capability, it exists outside the operational loop. It requires a human being to prompt it, evaluate its output, copy that output, format it, and paste it into the system where the business actually records transactions and makes decisions.",
        "Real operational leverage only occurs when intelligence is positioned directly inside the workflow — observing events as they happen, retrieving institutional context from internal databases, checking business rules, and performing defined actions with transparent audit trails.",
        "The goal is not to have people chat with an AI assistant about their work. The goal is to design systems that eliminate the administrative friction that prevents people from doing high-judgement work."
      ],
      diagramType: "workflow-friction"
    },
    implication: {
      title: "What This Means for Business Leaders",
      paragraphs: [
        "For executive leadership, this requires a fundamental pivot in how capital and attention are allocated. Technology audits should not inventory software licences; they must map operational friction.",
        "Before investing in widespread model subscriptions or standalone productivity add-ons, organisations should identify their three highest-friction workflows. Map every handoff, every system transition, and every manual verification step.",
        "When AI is architected to eliminate specific operational bottlenecks, payback periods become deterministic and easily measured in saved cycle time, reduced rework, and accelerated throughput."
      ],
      keyTakeaways: [
        "Shift focus from individual prompt productivity to structural workflow throughput.",
        "Map information pathways before evaluating technical architectures.",
        "Evaluate AI projects by the number of manual handoffs they eliminate, not employee sign-in counts."
      ]
    },
    questionsToAsk: {
      title: "Questions to Bring Back to Your Organisation",
      questions: [
        "Where does customer or transaction data get manually re-entered across two or more internal systems?",
        "Which daily workflows still depend entirely on someone checking a shared inbox or updating a tracker spreadsheet?",
        "If every employee drafted emails twice as fast tomorrow, would our core operational turnaround time change at all?",
        "What percentage of our knowledge workers' day is spent searching for internal information rather than evaluating it?"
      ]
    },
    closingThought: {
      title: "Closing Thought",
      principle: "Before asking what AI should do, understand what the business needs done.",
      context: "True enterprise leverage is achieved not by sprinkling intelligence onto legacy chaos, but by re-architecting workflows around deterministic system principles."
    },
    seoDescription: "Perspectives on why enterprise AI adoption often stalls at the desktop, and how focusing on core workflow friction unlocks genuine operational leverage."
  },

  // ARTICLE 02
  {
    id: "ins-02",
    number: "02",
    slug: "ai-tools-are-easy-to-buy",
    title: "AI Tools Are Easy to Buy. AI Systems Are Harder to Build.",
    category: "AI & Business",
    type: "Major Perspective",
    docRef: "INS-02 // SYSTEMS",
    readTime: "6 min read",
    date: "Technical Strategy",
    shortDescriptor: "The critical architectural difference between desktop software licences and integrated operational systems.",
    thesis: "Buying an AI tool gives an employee another capability. Building an AI system changes where and how work gets done. The distinction isn't simply the sophistication of the underlying model — it is where the technology sits inside the business.",
    editorialIntro: "Any business with a corporate credit card can procure hundred-dollar monthly seats for generative assistants. Very few businesses have engineered autonomous pipelines that ingest operational payloads, cross-reference institutional record repositories, and execute business logic without friction.",
    question: {
      title: "The Executive Question",
      paragraphs: [
        "Why do enterprises with substantial software budgets and dozens of AI pilots report so little measurable impact on operational margins?",
        "The answer lies in conflating two completely different categories of technology: point tools and integrated systems.",
        "Executives are frequently sold 'AI solutions' that are fundamentally desktop utilities. Understanding the structural distinction between a tool and a system is the single most important conceptual shift an executive leadership team can make."
      ]
    },
    reality: {
      title: "The Tool Paradigm vs. The System Paradigm",
      paragraphs: [
        "In a tool-centric model, the employee remains the manual orchestrator of every transaction. They notice an incoming requirement, formulate a prompt, feed context to the tool, copy the result, scrutinise it for hallucinations, and paste it into the ERP or CRM.",
        "In this configuration, human cognitive load is actually increased in several dimensions: employees must now manage context windows, curate prompts, and manually verify outputs without programmatic guardrails.",
        "An AI system, by contrast, operates at the infrastructure layer. It connects directly to business event triggers — an inbound webhook, a newly posted ledger file, or a status transition in a database — and orchestrates the necessary steps under programmatic oversight."
      ]
    },
    argument: {
      title: "The Conceptual Architecture",
      paragraphs: [
        "Consider the mechanical pathway of both approaches:",
        "In the Tool architecture: Employee → AI Tool → Answer → Employee → Workflow. The workflow itself remains fragmented and dependent on manual execution.",
        "In the System architecture: Business Information → AI Processing Enclave → Connected Workflow → Deterministic Verification Checks → Human Judgement Gate → Completed Operational Work.",
        "Notice where the human sits in both models. In the tool model, the human is the transport mechanism — moving data back and forth. In the system model, the human is the authoritative validator — reviewing edge cases, exercising discretion, and providing governance."
      ],
      diagramType: "tool-vs-system"
    },
    implication: {
      title: "What This Means for Business Leaders",
      paragraphs: [
        "Tools are treated as operational overhead; systems are capital investments in institutional capability.",
        "When an organisation buys tools, the intellectual property and operational know-how remain ephemeral. When an organisation builds systems, the business codifies its operating procedures, exception rules, and institutional memory into private, proprietary infrastructure.",
        "Systems create cumulative competitive moats because they deepen with every transaction processed, while tools can be replicated by a competitor simply signing up for the same vendor tomorrow."
      ],
      keyTakeaways: [
        "Point tools assist individual tasks; systems transform organizational operating cycles.",
        "Systems enforce programmatic guardrails, schema validation, and audit logs that conversational tools cannot provide.",
        "Building proprietary systems secures long-term institutional intellectual property."
      ]
    },
    questionsToAsk: {
      title: "Questions to Bring Back to Your Organisation",
      questions: [
        "Are our current AI investments creating proprietary system assets, or simply adding recurring SaaS seat overhead?",
        "If a key employee leaves tomorrow, does their prompting technique leave with them, or is our workflow logic embedded in our systems?",
        "Does our AI architecture have direct, governed access to source systems of record, or does it rely on copy-and-paste by staff?",
        "Where in our operational chain can we place automated verification checks so that humans only inspect exceptions?"
      ]
    },
    closingThought: {
      title: "Closing Thought",
      principle: "The real question isn't which AI tool to buy. It's where AI belongs.",
      context: "Tools belong on desktops for ad-hoc creativity. Systems belong in your infrastructure, driving operational precision."
    },
    seoDescription: "An executive examination of the divide between standalone generative tools and deeply integrated, sovereign AI operating systems."
  },

  // ARTICLE 03
  {
    id: "ins-03",
    number: "03",
    slug: "the-hidden-cost-of-information-handoffs",
    title: "The Hidden Cost of Information Handoffs",
    category: "Systems & Operations",
    type: "Standard Insight",
    docRef: "INS-03 // OPERATIONS",
    readTime: "5 min read",
    date: "Operational Analysis",
    shortDescriptor: "Why operational friction accumulates in the spaces between tasks rather than within the tasks themselves.",
    thesis: "A surprising amount of operational friction exists between steps rather than inside individual tasks. Information moves: person → person, email → spreadsheet, document → system, department → department. Each handoff creates opportunities for delay, duplication, misunderstanding or information loss.",
    editorialIntro: "When executives review operational inefficiencies, they almost always scrutinise department heads and task durations: 'Why does underwriting take three days?' or 'Why does customer onboarding take a week?' But the real drag is rarely the duration of the analysis itself. It is the time information spends waiting at the boundaries between people, formats, and software.",
    question: {
      title: "The Executive Question",
      paragraphs: [
        "Why do complex business processes take days or weeks when the actual cumulative time spent actively working on them is measured in minutes?",
        "If an analyst spends 45 minutes reviewing an application, why does the applicant wait five business days for a determination?",
        "The answer is information handoff latency — the dead time where a payload sits idle between operational stations."
      ]
    },
    reality: {
      title: "The Anatomy of a Handoff Chain",
      paragraphs: [
        "Track a typical piece of commercial data through a mid-market enterprise:",
        "1. A customer sends an unstandardised PDF via email.",
        "2. An associate downloads the PDF, reviews it, and manually logs key details into an intake spreadsheet.",
        "3. The associate pings a colleague via internal chat: 'Application #402 ready for review.'",
        "4. The colleague picks it up four hours later, notices missing financial documentation, and replies requesting clarification.",
        "5. Two days later the documentation arrives; the reviewer reconciles it against an internal database and forwards a summary to senior leadership for sign-off.",
        "Across this seven-day span, active human judgement was applied for less than two hours. The remaining 98% of the timeline was pure handoff latency and translation friction."
      ]
    },
    argument: {
      title: "The Core Argument",
      paragraphs: [
        "The most rewarding AI deployment opportunities are not always the largest, most complex creative tasks. Very often, they reside in the spaces between tasks.",
        "Machine intelligence excels at cross-modal format translation: ingesting unstructured PDFs, parsing unstructured communications, reconciling contradictory records across databases, and assembling pre-validated dossiers for human sign-off.",
        "By placing AI pipelines at the handoff points — rather than attempting to replace human underwriting or strategic decision-making — an organisation collapses the handoff latency from days to seconds while leaving human authority completely intact."
      ],
      diagramType: "information-handoffs"
    },
    implication: {
      title: "What This Means for Business Leaders",
      paragraphs: [
        "Do not start by asking where AI can make decisions. Start by asking where information changes hands, changes formats, or sits in a queue.",
        "Eliminating handoff friction produces instantaneous compounding gains: cycle times drop, customer satisfaction increases, error rates from manual transcription plummet, and senior staff spend their energy making critical determinations rather than chasing status updates."
      ],
      keyTakeaways: [
        "Handoff friction accounts for the vast majority of end-to-end turnaround delays.",
        "Format translation and data reconciliation are prime candidates for deterministic AI pipelines.",
        "Human judgement should be concentrated at the point of decision, not wasted on manual administrative transport."
      ]
    },
    questionsToAsk: {
      title: "Questions to Bring Back to Your Organisation",
      questions: [
        "In our core customer or operational journey, how many times does the same information get re-entered into different systems?",
        "What is the average queue time between one team finishing their step and the next team beginning theirs?",
        "Where do we rely on human beings to convert emails or documents into spreadsheet rows?",
        "What percentage of project delays are caused by missing context that was already available elsewhere in the company?"
      ]
    },
    closingThought: {
      title: "Closing Thought",
      principle: "Look at where information moves. That's often where the friction is.",
      context: "Optimising individual tasks yields incremental gains. Connecting the spaces between them transforms operating margins."
    },
    seoDescription: "An operational deep-dive into how information handoffs between teams and software systems generate hidden enterprise costs, and how AI bridges the gaps."
  },

  // ARTICLE 04
  {
    id: "ins-04",
    number: "04",
    slug: "where-should-ai-actually-sit",
    title: "Where Should AI Actually Sit Inside a Business?",
    category: "Systems & Operations",
    type: "Standard Insight",
    docRef: "INS-04 // TAXONOMY",
    readTime: "6 min read",
    date: "Operational Systems",
    shortDescriptor: "A clear structural framework for identifying high-leverage opportunity zones across an enterprise.",
    thesis: "AI opportunities become clearer when the organisation is examined before the technology. By categorising operational activity into four distinct opportunity areas — Workforce Intelligence, Operations & Workflows, Sales & Customer Operations, and Knowledge & Decision Support — leadership can systematically target investment where friction is highest.",
    editorialIntro: "When enterprise leaders decide to invest in artificial intelligence, they are frequently confronted with an overwhelming menu of vendor claims. Every department claims an urgent need; every software vendor promises revolutionary transformation. Without an objective operational taxonomy, capital is dispersed across fragmented initiatives with negligible aggregate return.",
    question: {
      title: "The Executive Question",
      paragraphs: [
        "How can an executive committee evaluate competing demands for AI investment across diverse business units?",
        "How do we know whether our primary opportunity lies in customer engagement, back-office processing, employee enablement, or analytical research?",
        "The solution is not to look at software categories, but to examine where information friction concentrates inside the enterprise."
      ]
    },
    reality: {
      title: "The Four Core Opportunity Areas",
      paragraphs: [
        "Across hundreds of operational workflows, high-leverage AI applications consistently cluster into four distinct operational areas. These are not software products; they are structural zones of organizational friction:",
        "1. Workforce Intelligence: Helping staff instantly locate institutional policies, standard operating procedures, technical documentation, and regulatory requirements without relying on informal shoulder-tapping or outdated intranets.",
        "2. Operations & Workflows: Connecting repetitive operational handoffs, automated data validation, document ingestion, invoice reconciliation, and cross-system ledger syncs.",
        "3. Sales & Customer Operations: Managing multi-channel inbound inquiry triage, automated quotation generation, qualification scoring, and proactive client engagement.",
        "4. Knowledge & Decision Support: Synthesising massive unstructured context repositories, conducting preliminary portfolio checks, extracting contract covenants, and preparing briefing dossiers for senior leadership."
      ]
    },
    argument: {
      title: "The Core Argument",
      paragraphs: [
        "Different enterprises have vastly different operational centers of gravity. A specialized advisory firm may experience 80% of its friction in Knowledge & Decision Support, while a logistics operator experiences 85% of its friction in Operations & Workflows.",
        "Attempting to deploy a generalized 'enterprise AI solution' ignores this structural asymmetry. High-performing organizations identify their specific operational bottleneck and deploy focused, purpose-engineered systems into that exact area.",
        "When an organization aligns its technical architecture with its specific friction zone, implementation cycles drop from twelve months to six weeks, and operational payback becomes immediately visible."
      ],
      diagramType: "opportunity-areas"
    },
    implication: {
      title: "What This Means for Business Leaders",
      paragraphs: [
        "Do not run a company-wide AI brainstorming session. Such exercises invariably produce a list of novelty chatbot ideas that fail to move the business forward.",
        "Instead, conduct a structured diagnostic across the four opportunity areas. Quantify the hours lost to information search, manual reconciliations, lead response delays, and manual dossier assembly.",
        "Deploy where the quantifiable friction is highest. Once the first system establishes operational momentum, expand systematically across adjacent zones."
      ],
      keyTakeaways: [
        "Every organization has an operational center of gravity where friction concentrates.",
        "AI deployment should be targeted at that center of gravity, not scattered evenly across all departments.",
        "The four areas provide a rigorous framework for executive resource allocation."
      ]
    },
    questionsToAsk: {
      title: "Questions to Bring Back to Your Organisation",
      questions: [
        "Which of the four opportunity areas currently consumes the largest portion of our overhead without delivering differentiation?",
        "Are our current AI initiatives concentrated where our biggest operational headache is, or where software was easiest to purchase?",
        "Can our team clearly articulate the specific business metric (cycle time, error rate, headcount scale) targeted by our AI efforts?",
        "Have we mapped how an AI system in one area connects with the systems of record in adjacent areas?"
      ]
    },
    closingThought: {
      title: "Closing Thought",
      principle: "AI strategy becomes clearer when the business problem comes before the technology.",
      context: "Categorize the friction first. The technical architecture will follow naturally from the business need."
    },
    seoDescription: "A practical framework for CEOs and COOs to identify where artificial intelligence belongs inside modern enterprise operations."
  },

  // ARTICLE 05
  {
    id: "ins-05",
    number: "05",
    slug: "build-buy-or-configure",
    title: "Build, Buy or Configure: How Executives Should Think About AI",
    category: "Governance & Leadership",
    type: "Standard Insight",
    docRef: "INS-05 // GOVERNANCE",
    readTime: "6 min read",
    date: "Governance & Strategy",
    shortDescriptor: "A balanced, objective framework for determining when to purchase commercial software, when to adapt platforms, and when bespoke systems are necessary.",
    thesis: "Not every business problem requires a bespoke system. The right answer is the one that best fits the business — not automatically the one that involves building more. Executives must evaluate commercial software, platform configuration, and custom engineering through the lens of operational differentiation and system integration.",
    editorialIntro: "In the enterprise technology space, vendors inevitably recommend whatever they sell: SaaS providers insist off-the-shelf software covers 95% of needs, while development shops insist everything must be written from scratch. Senior leadership requires a dispassionate, objective heuristic to make capital allocation decisions with confidence.",
    question: {
      title: "The Executive Question",
      paragraphs: [
        "When should a business buy an existing commercial AI product?",
        "When should it configure an established enterprise platform?",
        "And when is a bespoke, custom-engineered AI system the only viable answer?",
        "Choosing incorrectly in either direction carries severe penalties: buying off-the-shelf software for a unique workflow results in vendor lock-in and operational compromise, while building custom code for a standard commodity task burns capital with zero strategic return."
      ]
    },
    reality: {
      title: "The Tripartite Decision Framework",
      paragraphs: [
        "Executive teams should evaluate every AI initiative across three clear archetypes:",
        "BUY — When an existing commercial product already solves the problem thoroughly, and the workflow is a standard commodity. Examples include baseline grammar assistance, calendar scheduling, or generic transcription. Custom development here is wasted capital.",
        "CONFIGURE — When an existing enterprise platform (such as an established ERP, CRM, or document repository) provides native AI capabilities that can be parameterized to business rules without breaking the existing tech stack.",
        "BUILD — When the operational workflow represents a core competitive differentiator, involves proprietary data structures, requires strict private deployment boundaries, or requires complex multi-system orchestration across legacy APIs where no commercial off-the-shelf product exists."
      ]
    },
    argument: {
      title: "The Core Argument",
      paragraphs: [
        "The test is not whether building is technically feasible. The test is whether the workflow gives the business a distinct operational advantage.",
        "If the workflow is standard across your industry — such as generating routine meeting summaries — buy an existing tool. There is no competitive advantage in having a proprietary meeting summarizer.",
        "However, if the workflow is your business — how you underwrite insurance risk, how you price complex freight movements, how you analyze private credit opportunities, or how you triage clinical inquiries — running on generic commercial software forces you into the exact same operational mold as your competitors.",
        "In core operational workflows, bespoke systems ensure complete data sovereignty, eliminate per-seat SaaS inflation, and build proprietary IP that lives directly on your balance sheet."
      ],
      diagramType: "build-buy-configure"
    },
    implication: {
      title: "What This Means for Business Leaders",
      paragraphs: [
        "Never approve a bespoke engineering project until commercial off-the-shelf alternatives have been rigorously evaluated and shown to fail on integration, privacy, or workflow fit.",
        "Conversely, resist the temptation to force-fit a rigid SaaS tool onto a complex, proprietary business process. The productivity losses and custom workaround costs will rapidly outstrip the cost of engineering a dedicated system.",
        "Maintain a clear governance record detailing why each initiative followed the Buy, Configure, or Build path."
      ],
      keyTakeaways: [
        "Buy for commodity tasks where no operational differentiation exists.",
        "Configure for platform extensions that respect existing workflows.",
        "Build bespoke systems when workflows are proprietary, complex, or core to enterprise competitive advantage."
      ]
    },
    questionsToAsk: {
      title: "Questions to Bring Back to Your Organisation",
      questions: [
        "Does this workflow create distinct competitive advantage, or is it a shared commodity across our sector?",
        "If we use an off-the-shelf tool, will we have to alter our proven operating procedures to fit the vendor's software opinion?",
        "Where will our proprietary business data travel, and does the vendor retain rights to inspect or train on our transactions?",
        "What is the total three-year cost of per-seat licences versus building a permanent, client-owned system?"
      ]
    },
    closingThought: {
      title: "Closing Thought",
      principle: "The right answer is the one that best fits the business — not automatically the one that involves building more.",
      context: "Pragmatic executives apply precision to capital allocation: commoditize the routine, custom-engineer the exceptional."
    },
    seoDescription: "An objective executive guide for navigating the Build vs. Buy vs. Configure decision matrix for enterprise AI investments."
  },

  // ARTICLE 06
  {
    id: "ins-06",
    number: "06",
    slug: "ai-adoption-is-not-ai-deployment",
    title: "AI Adoption Is Not AI Deployment",
    category: "AI & Business",
    type: "Standard Insight",
    docRef: "INS-06 // DEPLOYMENT",
    readTime: "5 min read",
    date: "Operational Strategy",
    shortDescriptor: "Why measuring active monthly users or prompt volume fails to capture true business integration.",
    thesis: "Employees experimenting with AI is not the same thing as AI becoming part of an operating process. Adoption asks: Are people using AI? Deployment asks: Has AI become part of how important work gets done?",
    editorialIntro: "Many executive dashboards celebrate vanity metrics: '82% of our workforce has activated their generative AI seat' or 'Our employees generate 15,000 prompts per week.' Yet when quarterly performance reviews arrive, operational unit economics remain static. Conflating grassroots adoption with systematic deployment is a widespread enterprise misstep.",
    question: {
      title: "The Executive Question",
      paragraphs: [
        "Why does widespread employee usage of artificial intelligence fail to show up in corporate earnings or operational efficiency ratios?",
        "How can an organization with thousands of active AI users still experience operational gridlock during period-end reporting or high-volume intake?",
        "The problem is an obsession with adoption over deployment."
      ]
    },
    reality: {
      title: "Adoption vs. Deployment in Practice",
      paragraphs: [
        "Grassroots adoption is discretionary, informal, and non-repeatable. An associate may use an LLM to draft a proposal today, use a traditional template tomorrow, and abandon the tool entirely next week. Output quality varies wildly depending on individual prompting skill.",
        "Furthermore, informal usage lacks governance: there are no institutional audit logs, no automated compliance checks, and no verification that the generated output adhered to corporate policies.",
        "Operational deployment, by contrast, is systematic, repeatable, and embedded into the workflow infrastructure. When an event occurs, the system executes defined logic under deterministic guardrails. It does not depend on whether a specific employee felt like using a tool that morning."
      ]
    },
    argument: {
      title: "The Core Argument",
      paragraphs: [
        "True deployment requires eight distinct institutional milestones:",
        "1. Experimentation: Initial exploratory testing by curious staff.",
        "2. Informal Usage: Ad-hoc reliance on external tools for personal productivity.",
        "3. Repeatability: Formalizing prompts and steps into standard operating procedures.",
        "4. Workflow Integration: Connecting AI directly to source databases and APIs.",
        "5. Governance: Enforcing security, RBAC access permissions, and human verification gates.",
        "6. Ownership: Assigning clear business and technical stewardship for system performance.",
        "7. Measurement: Tracking cycle times, error rates, and financial throughput gains.",
        "8. Continuous Improvement: Iterating on exception paths and edge cases as the business evolves.",
        "Most enterprises stall at Stage 2. They mistake a scattered collection of personal productivity hacks for enterprise transformation."
      ],
      diagramType: "adoption-vs-deployment"
    },
    implication: {
      title: "What This Means for Business Leaders",
      paragraphs: [
        "Stop reporting on active user counts and prompt volumes. These metrics measure employee curiosity, not operational capability.",
        "Instead, measure the percentage of core transactions that flow through governed, automated verification pipelines without manual intervention.",
        "Reward teams not for trying new tools, but for hardening ad-hoc workflows into institutional, repeatable systems."
      ],
      keyTakeaways: [
        "Adoption measures curiosity; deployment measures operational transformation.",
        "Informal usage creates shadow IT risks and inconsistent customer outcomes.",
        "Sustainable value requires hardening experimental prompts into governed, automated pipelines."
      ]
    },
    questionsToAsk: {
      title: "Questions to Bring Back to Your Organisation",
      questions: [
        "If our employees stopped using their AI subscriptions tomorrow, would any core business process break, or would they simply type emails more slowly?",
        "Do we have formal ownership and service-level agreements for our internal AI workflows?",
        "Are we tracking business metrics (like turnaround time and cost-per-transaction) or software vanity metrics (like logins)?",
        "How many of our critical operational workflows have AI embedded directly into their automated execution path?"
      ]
    },
    closingThought: {
      title: "Closing Thought",
      principle: "The goal isn't more AI usage. It's better ways of working.",
      context: "True maturity is reached when the technology becomes invisible because the system simply functions."
    },
    seoDescription: "An analytical critique of vanity AI adoption metrics and a strategic blueprint for achieving genuine operational deployment."
  },

  // ARTICLE 07
  {
    id: "ins-07",
    number: "07",
    slug: "governance-before-automation",
    title: "Governance Should Be Designed Before Automation",
    category: "Governance & Leadership",
    type: "Standard Insight",
    docRef: "INS-07 // GOVERNANCE",
    readTime: "6 min read",
    date: "Risk & Architecture",
    shortDescriptor: "Why guardrails, boundaries, and human oversight must precede system implementation rather than follow it.",
    thesis: "Governance should not arrive after an AI system has already been built. It belongs in the design. A useful AI system needs boundaries as much as it needs capability.",
    editorialIntro: "In the rush to demonstrate quick wins, technology teams often build prototypes in isolated sandboxes, intending to 'sort out security, access controls, and compliance later.' This approach almost guarantees project failure. When the system eventually encounters real-world enterprise data and regulatory obligations, it must either be completely re-architected or permanently shelved.",
    question: {
      title: "The Executive Question",
      paragraphs: [
        "How do organizations balance rapid innovation with non-negotiable regulatory, privacy, and operational risk controls?",
        "Why do so many enterprise AI pilots stall when moving from experimental sandbox environments to live production data?",
        "The breakdown occurs because governance was treated as an inspection gate at the end of the project rather than the architectural foundation of the design."
      ]
    },
    reality: {
      title: "The Danger of Post-Hoc Governance",
      paragraphs: [
        "When an AI system is constructed without upfront boundary definitions, its behavior is fundamentally unpredictable.",
        "It accesses data sources it shouldn't, generates answers without auditable provenance, and lacks clear mechanisms for human intervention when confidence is low.",
        "Legal, compliance, and risk teams are then forced to act as blockers — not because they oppose innovation, but because the engineering team presented them with an opaque, ungoverned black box."
      ]
    },
    argument: {
      title: "The Architecture of Governed Automation",
      paragraphs: [
        "Rigorous enterprise AI engineering designs the boundaries first. Every production-grade system must address seven foundational governance questions before a single line of automation code is written:",
        "1. Access: Who is authorized to interact with the system, and what roles govern access?",
        "2. Ingestion Boundaries: Exactly which internal databases and documents may the system reference, and under what classification rules?",
        "3. Human Approval Gates: At what specific decision thresholds must the system halt and require human sign-off?",
        "4. Provenance & Grounding: How does the system cite its authoritative sources for every factual assertion?",
        "5. Permitted Actions: What external API calls or database writes is the system authorized to perform autonomously?",
        "6. Audit Logging: What immutable records are maintained for regulatory review and operational forensics?",
        "7. Lifecycle Review: How is model drift, exception frequency, and performance evaluated over time?"
      ],
      diagramType: "governance-boundaries"
    },
    implication: {
      title: "What This Means for Business Leaders",
      paragraphs: [
        "Bring risk, compliance, and legal leadership into the design phase on day one. When compliance officers participate in defining boundaries, they become partners in deployment rather than late-stage roadblocks.",
        "Recognize that deterministic boundaries do not hinder capability; they unlock it. A business can only deploy AI with confidence when leadership knows exactly what the system can and cannot do.",
        "Ensure all infrastructure options — whether private VPCs, dedicated tenancy, or client-governed clouds — are specified upfront to match the organisation's regulatory environment."
      ],
      keyTakeaways: [
        "Governance is an architectural design constraint, not an afterthought inspection.",
        "Explicit boundaries empower systems to operate with speed and autonomy inside defined safety lanes.",
        "Involving compliance and risk officers from day one accelerates production deployment."
      ]
    },
    questionsToAsk: {
      title: "Questions to Bring Back to Your Organisation",
      questions: [
        "Can our technical teams produce an exact boundary specification for our existing AI prototypes?",
        "Do our systems have automated fail-safes that route ambiguous cases directly to designated human experts?",
        "Are our compliance and risk teams integrated into the design specifications of upcoming automation projects?",
        "If a regulator or auditor requests an explanation for an automated output from six months ago, can we produce the exact source citation and decision trail?"
      ]
    },
    closingThought: {
      title: "Closing Thought",
      principle: "A useful AI system needs boundaries as much as it needs capability.",
      context: "Real operational leverage comes from systems that are trusted completely within their designated operational lanes."
    },
    seoDescription: "A strategic overview of why governance, access boundaries, and human oversight must form the architectural foundation of enterprise AI systems."
  },

  // ARTICLE 08
  {
    id: "ins-08",
    number: "08",
    slug: "the-executive-question-after-the-ai-experiment",
    title: "The Executive Question After the AI Experiment",
    category: "AI & Business",
    type: "Point of View",
    docRef: "INS-08 // POINT-OF-VIEW",
    readTime: "4 min read",
    date: "Executive Synthesis",
    shortDescriptor: "What senior leadership must do when the pilot phase concludes and real capital decisions must be made.",
    thesis: "Many organisations have already tested conversational models, run pilots, experimented with copilots, and built internal prototypes. Then comes the harder question: What happens now? The answer should not automatically be 'buy more AI.' Instead, leaders must execute a disciplined sequence: Understand → Assess → Prioritise.",
    editorialIntro: "The experimentation era of enterprise artificial intelligence is effectively over. Virtually every large organisation has conducted hackathons, distributed vendor trial licences, and listened to software vendors pitch revolutionary futures. The executive agenda must now transition from curiosity-driven exploration to rigorous capital deployment.",
    question: {
      title: "The Executive Question",
      paragraphs: [
        "What happens when the novelty of conversational interfaces fades, and executive leadership demands demonstrable operational return on capital?",
        "How do senior leaders separate the genuine opportunities from the digital theatre of endless pilot programs?",
        "The danger is continuing down the path of aimless experimentation — funding minor initiatives across twenty departments without building a single enduring operational asset."
      ]
    },
    reality: {
      title: "The Post-Pilot Reality",
      paragraphs: [
        "Most enterprises find themselves in an ambiguous middle state:",
        "Dozens of small pilots exist in silos. Staff have demonstrated that the technology is capable, but nobody has quantified what it actually contributes to enterprise enterprise value.",
        "IT is concerned about proliferating SaaS subscriptions, security teams are worried about unmonitored data transfers, and finance is questioning the renewal cost of seat licences with unclear utility.",
        "This is the inflection point where leadership must either impose strategic discipline or watch AI become another expensive, unmanaged layer of corporate software sprawl."
      ]
    },
    argument: {
      title: "The Disciplined Sequence: Understand → Assess → Prioritise",
      paragraphs: [
        "Senior leadership must replace ad-hoc experimentation with a structured three-stage evaluation framework:",
        "1. Understand: Map the organisation's actual operational workflows. Where does work take too long? Where are errors concentrated? Where is senior talent performing low-value administrative reconciliation?",
        "2. Assess: Rigorously evaluate feasibility, regulatory boundaries, and integration constraints. Can the required data be accessed securely? Does an off-the-shelf product exist, or does the workflow require bespoke system engineering?",
        "3. Prioritise: Rank potential initiatives strictly by financial impact, cycle time reduction, and implementation viability. Commit capital to the top two high-conviction systems and terminate low-leverage pilots.",
        "The objective is not to build twenty experimental toys; it is to deploy one or two robust, sovereign systems that fundamentally alter the unit economics of a core business function."
      ],
      diagramType: "executive-funnel"
    },
    implication: {
      title: "What This Means for Business Leaders",
      paragraphs: [
        "The next stage of AI maturity is not more experimentation. It is deliberate, disciplined deployment.",
        "Executive teams must establish clear criteria for what gets built, what gets bought, and what gets cancelled. A failed pilot that is closed down quickly is a victory for capital efficiency.",
        "Focus on building permanent institutional assets that your organisation owns, controls, and benefits from for years to come."
      ],
      keyTakeaways: [
        "Shift immediately from open-ended experimentation to disciplined capital allocation.",
        "Use the Understand → Assess → Prioritise framework to filter high-conviction opportunities.",
        "Consolidate resources into one or two sovereign systems that transform core unit economics."
      ]
    },
    questionsToAsk: {
      title: "Questions to Bring Back to Your Organisation",
      questions: [
        "How many AI pilots are currently active across our business, and who is holding them accountable for measurable return?",
        "Do we have a formal process to sunset experimental projects that fail to demonstrate workflow integration?",
        "Are we ready to commit capital to engineering permanent operational systems rather than funding more trials?",
        "What single operational workflow, if made 80% more efficient, would most radically improve our competitive position?"
      ]
    },
    closingThought: {
      title: "Closing Thought",
      principle: "The next stage of AI maturity isn't more experimentation. It's deliberate deployment.",
      context: "Move past the novelty. Build the systems that run the business."
    },
    seoDescription: "A concise executive point of view on transitioning enterprise AI strategy from pilot paralysis to disciplined operational deployment."
  }
];

export const POINT_OF_VIEW_FEATURE = {
  eyebrow: "STRATISION POINT OF VIEW",
  thesis: "AI should not be deployed because it is possible.",
  supporting: "It should be deployed because it improves a defined part of how the organisation works.",
  targetArticleSlug: "the-executive-question-after-the-ai-experiment",
  docRef: "POV-01 // DOCTRINE"
};
