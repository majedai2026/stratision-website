export interface BriefingPageData {
  pageNumber: number;
  pageId: string;
  sectionCode: string;
  category: string;
  title: string;
  subtitle?: string;
  lead?: string;
  paragraphs?: string[];
  bulletGroups?: {
    groupTitle: string;
    items: string[];
  }[];
  checklistGroups?: {
    category: string;
    items: string[];
  }[];
  closingQuote?: string;
  footnote?: string;
}

export const BRIEFING_METADATA = {
  title: "THE EXECUTIVE GUIDE TO AI SYSTEMS",
  subtitle: "Moving from AI experimentation to governed operational deployment.",
  audience: "A briefing for business leaders",
  edition: "First Edition // 2026 Executive Series",
  docRef: "STRAT-EXEC-BRIEFING-V1.0",
  publisher: "STRATISION",
  tagline: "Strategy • Vision • Intelligence",
  totalPages: 18,
};

export const BRIEFING_PAGES: BriefingPageData[] = [
  // PAGE 01
  {
    pageNumber: 1,
    pageId: "cover",
    sectionCode: "DOC // 01",
    category: "EXECUTIVE BRIEFING",
    title: "THE EXECUTIVE GUIDE TO AI SYSTEMS",
    subtitle: "Moving from AI experimentation to governed operational deployment.",
    lead: "A briefing for business leaders",
    closingQuote: "STRATISION — Strategy • Vision • Intelligence",
    footnote: "Confidential Executive Publication // Ref: STRAT-EXEC-2026-V1",
  },

  // PAGE 02
  {
    pageNumber: 2,
    pageId: "executive-question",
    sectionCode: "STRATEGY // 02",
    category: "THE STRATEGIC REALITY",
    title: "THE EXECUTIVE QUESTION",
    subtitle: "THE QUESTION IS NO LONGER WHETHER AI MATTERS.",
    lead: "AI has already moved beyond experimentation. Employees are using it to write, research, analyse, summarise and communicate.",
    paragraphs: [
      "Individual use is only one part of the opportunity.",
      "The larger opportunity comes when AI becomes part of how work actually moves through an organisation.",
      "The executive question becomes: 'Where should AI be embedded into the way our organisation works?'",
      "That requires a different starting point. Not technology first. BUSINESS FIRST.",
    ],
    bulletGroups: [
      {
        groupTitle: "WHERE IS WORK SLOW?",
        items: [
          "Where do employees spend disproportionate time on repetitive work?",
          "Which manual workflows create routine delivery bottlenecks?",
        ],
      },
      {
        groupTitle: "WHERE DOES INFORMATION GET STUCK?",
        items: [
          "Where are people repeatedly moving information between documents, systems and teams?",
          "Where does knowledge remain siloed in inboxes and spreadsheets?",
        ],
      },
      {
        groupTitle: "WHERE COULD BETTER INFORMATION CHANGE A DECISION?",
        items: [
          "Where would faster access to useful information improve the way people work?",
          "Which high-stakes reviews suffer from fragmented information?",
        ],
      },
    ],
    closingQuote: "The objective is not to introduce AI everywhere. It is to find the places where it can create genuine leverage.",
  },

  // PAGE 03
  {
    pageNumber: 3,
    pageId: "tools-vs-systems",
    sectionCode: "ARCHITECTURE // 03",
    category: "OPERATIONAL PARADIGM",
    title: "AI TOOLS VS AI SYSTEMS",
    subtitle: "MOVING FROM INDIVIDUAL PRODUCTIVITY TO OPERATIONAL INFRASTRUCTURE.",
    lead: "The difference is not simply the technology. It is where the technology sits in the workflow.",
    paragraphs: [
      "A tool helps someone do a task. A system can become part of the process itself.",
      "When an employee opens a browser tab to prompt an external AI model, productivity gains remain isolated to that individual. When an AI system connects with business data and operating software, leverage accrues to the entire enterprise.",
    ],
    bulletGroups: [
      {
        groupTitle: "THE AI TOOL PATHWAY",
        items: [
          "Employee identifies a task",
          "Opens external AI tool",
          "Asks a question or pastes prompt",
          "Receives unstructured answer",
          "Copies the result manually",
          "Returns to their primary workflow",
        ],
      },
      {
        groupTitle: "THE AI SYSTEM PATHWAY",
        items: [
          "Business information arrives naturally",
          "AI reads & organises incoming data",
          "Connects the relevant operational steps",
          "Checks the result against defined rules",
          "Human approval where required",
          "Business system updated / task completed",
        ],
      },
    ],
    closingQuote: "A tool helps someone do a task. A system can become part of the process itself.",
  },

  // PAGE 04
  {
    pageNumber: 4,
    pageId: "where-opportunity-is",
    sectionCode: "DIAGNOSIS // 04",
    category: "VALUE IDENTIFICATION",
    title: "WHERE THE OPPORTUNITY ACTUALLY IS",
    subtitle: "ORDINARY BUSINESS PROCESSES GENERATE THE HIGHEST RETURN.",
    lead: "AI does not need to transform everything. The strongest opportunities are often found in ordinary business processes.",
    bulletGroups: [
      {
        groupTitle: "01 — REPETITIVE WORK",
        items: [
          "Tasks that require people to repeatedly read, copy, check, sort or organise information.",
        ],
      },
      {
        groupTitle: "02 — INFORMATION HUNTS",
        items: [
          "Employees spending time looking through documents, systems or messages to find an answer.",
        ],
      },
      {
        groupTitle: "03 — MANUAL HANDOFFS",
        items: [
          "Work moving between people or systems through email, spreadsheets or repeated data entry.",
        ],
      },
      {
        groupTitle: "04 — INFORMATION-HEAVY DECISIONS",
        items: [
          "People needing to review large amounts of information before making an important decision.",
        ],
      },
    ],
    paragraphs: [
      "These problems appear across almost every organisation.",
      "The specific solution depends on: the workflow, the people involved, the information available, the systems already in place, and the organisation's requirements.",
    ],
    closingQuote: "Look for friction where skilled people are forced to act like information routers.",
  },

  // PAGE 05
  {
    pageNumber: 5,
    pageId: "four-areas-of-opportunity",
    sectionCode: "FRAMEWORK // 05",
    category: "CAPABILITY FAMILIES",
    title: "FOUR AREAS OF OPPORTUNITY",
    subtitle: "FOUR PERSPECTIVES FOR EVALUATING BUSINESS FRICTION.",
    lead: "These are not four products. They are four ways of looking for useful business opportunities.",
    bulletGroups: [
      {
        groupTitle: "01 — WORKFORCE INTELLIGENCE",
        items: [
          "Help people find and use company knowledge more effectively.",
          "Internal knowledge & archives",
          "New employee onboarding",
          "Staff training & capability building",
          "Approved operational guidance",
          "Role-specific procedures",
        ],
      },
      {
        groupTitle: "02 — OPERATIONS & WORKFLOWS",
        items: [
          "Connect repetitive work and keep processes moving.",
          "High-volume document handling",
          "Administrative coordination workflows",
          "Multi-stage approvals and checks",
          "System-to-system information transfer",
          "Repetitive verification checks",
        ],
      },
      {
        groupTitle: "03 — SALES & CUSTOMER OPERATIONS",
        items: [
          "Help teams manage customer-facing work more efficiently.",
          "Inbound commercial enquiries",
          "Account & opportunity qualification",
          "Customer communication & scheduling",
          "Proposal follow-up coordination",
          "Client account information synthesis",
        ],
      },
      {
        groupTitle: "04 — KNOWLEDGE & DECISION SUPPORT",
        items: [
          "Help people work with large amounts of information.",
          "Complex market & technical research",
          "Contract & document diligence review",
          "Management reporting preparation",
          "Variance and risk analysis",
          "Decision dossier preparation",
        ],
      },
    ],
    closingQuote: "Technology follows the business need. These four domains pinpoint where leverage exists.",
  },

  // PAGE 06
  {
    pageNumber: 6,
    pageId: "start-with-business",
    sectionCode: "METHODOLOGY // 06",
    category: "STRATEGIC SEQUENCE",
    title: "START WITH THE BUSINESS",
    subtitle: "THE TECHNOLOGY SHOULD FOLLOW THE WORKFLOW.",
    lead: "Do not start with what AI can do. Start with what the business needs.",
    bulletGroups: [
      {
        groupTitle: "01 — UNDERSTAND",
        items: [
          "How does the organisation work today?",
          "People & responsibilities",
          "Processes & informal workarounds",
          "Systems & software in active use",
          "Information stores & file formats",
          "Decisions & review authorities",
        ],
      },
      {
        groupTitle: "02 — ASSESS",
        items: [
          "Where is there genuine friction?",
          "Repetition & clerical overhead",
          "Delays & turnaround bottlenecks",
          "Manual work & re-keying",
          "Information gaps & lost context",
          "Handoffs across teams",
          "Decision bottlenecks",
        ],
      },
      {
        groupTitle: "03 — PRIORITISE",
        items: [
          "Where is AI actually worth deploying?",
          "Business value & strategic leverage",
          "Technical feasibility",
          "Data availability & clean access",
          "Existing system integration",
          "Governance & regulatory constraints",
          "People readiness & change impact",
        ],
      },
    ],
    closingQuote: "Do not start with what AI can do. Start with what the business needs.",
  },

  // PAGE 07
  {
    pageNumber: 7,
    pageId: "assessment",
    sectionCode: "DIAGNOSTIC // 07",
    category: "EXECUTIVE ASSESSMENT",
    title: "THE BUSINESS INTELLIGENCE ASSESSMENT™",
    subtitle: "BEFORE BUILDING, UNDERSTAND.",
    lead: "The Business Intelligence Assessment™ is Stratision's structured diagnostic for identifying where AI may create genuine operational leverage.",
    paragraphs: [
      "It examines the organisation before recommending technology.",
      "The assessment is designed to answer one question: 'Where should AI actually be deployed — and where should it not?'",
    ],
    bulletGroups: [
      {
        groupTitle: "01 — BUSINESS OVERVIEW",
        items: [
          "Understand the organisation, priorities and operating environment.",
          "Strategic goals, commercial pressures, and key operating drivers.",
        ],
      },
      {
        groupTitle: "02 — EXECUTIVE INTERVIEW",
        items: [
          "Understand where leadership sees friction, opportunity and risk.",
          "Direct dialogue with division heads and executive decision-makers.",
        ],
      },
      {
        groupTitle: "03 — BUSINESS FUNCTIONS",
        items: [
          "Comprehensive review across all primary corporate functions:",
          "Sales • Customer Service • Operations • HR • L&D • Finance • Marketing • Leadership • Legal • Administration",
        ],
      },
      {
        groupTitle: "04 — TECHNOLOGY",
        items: [
          "Understand the systems, software, information and integrations already in place.",
          "Identify data silos, API access points, and document repositories.",
        ],
      },
      {
        groupTitle: "05 — AI READINESS",
        items: [
          "Evaluate eight core organisational dimensions:",
          "Leadership • People • Data • Documentation • Security • Governance • Integration • Culture",
        ],
      },
    ],
    closingQuote: "The assessment is designed to answer one question: Where should AI actually be deployed — and where should it not?",
  },

  // PAGE 08
  {
    pageNumber: 8,
    pageId: "problem-to-priority",
    sectionCode: "DECISION // 08",
    category: "EVALUATION MATRIX",
    title: "FROM PROBLEM TO PRIORITY",
    subtitle: "NOT EVERY AI OPPORTUNITY DESERVES TO BE BUILT.",
    lead: "A useful opportunity needs more than an interesting idea.",
    bulletGroups: [
      {
        groupTitle: "BUSINESS VALUE",
        items: ["How meaningful is the problem to strategic growth, margins, or risk management?"],
      },
      {
        groupTitle: "FREQUENCY",
        items: ["How often does the work occur? Is it daily, weekly, or an infrequent edge case?"],
      },
      {
        groupTitle: "CAPACITY",
        items: ["How much employee effort does it consume? Where is skilled labour tied up?"],
      },
      {
        groupTitle: "FEASIBILITY",
        items: ["Can the required information and systems support an automated solution reliably?"],
      },
      {
        groupTitle: "GOVERNANCE",
        items: ["Can the system operate within the organisation's security and regulatory requirements?"],
      },
      {
        groupTitle: "PRIORITY",
        items: ["Does the opportunity justify immediate action relative to other business investments?"],
      },
    ],
    closingQuote: "The result is not a list of AI ideas. It is a prioritised view of where AI may create the most meaningful leverage.",
  },

  // PAGE 09
  {
    pageNumber: 9,
    pageId: "bespoke-ai-system",
    sectionCode: "ARCHITECTURE // 09",
    category: "OPERATIONAL ARCHITECTURE",
    title: "WHAT A BESPOKE AI SYSTEM LOOKS LIKE",
    subtitle: "FROM INFORMATION TO COMPLETED WORK.",
    lead: "The exact workflow depends on the organisation. The architecture is designed around the real process rather than forcing the business into an off-the-shelf workflow.",
    bulletGroups: [
      {
        groupTitle: "INPUT",
        items: [
          "Documents • Spreadsheets • Emails • Business systems • Company knowledge",
          "Information arrives in native enterprise formats without manual reformatting.",
        ],
      },
      {
        groupTitle: "01 — READ & ORGANISE",
        items: [
          "The system reads incoming information and organises what matters.",
          "Extracts structured data, identifies document types, and prepares context.",
        ],
      },
      {
        groupTitle: "02 — CONNECT THE STEPS",
        items: [
          "Relevant information is brought together according to the workflow and business rules.",
          "Synthesizes cross-system data and evaluates operational conditions.",
        ],
      },
      {
        groupTitle: "03 — CHECK THE RESULT",
        items: [
          "The system checks information and highlights items that require attention.",
          "Verifies against guidelines, flags exceptions, and cites source origins.",
        ],
      },
      {
        groupTitle: "04 — COMPLETE THE TASK",
        items: [
          "The result is prepared for the appropriate person or business system.",
          "Generates structured outputs, updates databases, and routes for sign-off.",
        ],
      },
    ],
    closingQuote: "The architecture is designed around the real process rather than forcing the business into an off-the-shelf workflow.",
  },

  // PAGE 10
  {
    pageNumber: 10,
    pageId: "people-in-the-system",
    sectionCode: "GOVERNANCE // 10",
    category: "HUMAN AUTHORITY",
    title: "PEOPLE REMAIN PART OF THE SYSTEM",
    subtitle: "AUTOMATION DOES NOT MEAN REMOVING JUDGEMENT.",
    lead: "Some business processes can be automated extensively. Others require people to review, approve or make the final decision. The right design depends on the consequences of the task.",
    bulletGroups: [
      {
        groupTitle: "AI CAN",
        items: [
          "Read information.",
          "Organise information.",
          "Find relevant details.",
          "Check against defined rules.",
          "Highlight exceptions.",
          "Prepare a response or briefing.",
          "Move information between agreed steps.",
        ],
      },
      {
        groupTitle: "PEOPLE CAN",
        items: [
          "Review important findings.",
          "Approve actions.",
          "Make decisions.",
          "Handle exceptions.",
          "Set business rules.",
          "Remain accountable for critical outcomes.",
        ],
      },
    ],
    closingQuote: "The goal is not to remove people from the process. It is to give people better systems to work with.",
  },

  // PAGE 11
  {
    pageNumber: 11,
    pageId: "governance-and-control",
    sectionCode: "GOVERNANCE // 11",
    category: "SYSTEM BOUNDARIES",
    title: "GOVERNANCE & CONTROL",
    subtitle: "AI SYSTEMS NEED BOUNDARIES.",
    lead: "Introducing AI into an organisation raises practical questions about information, access, responsibility and oversight. These should be considered before deployment, not afterwards.",
    bulletGroups: [
      {
        groupTitle: "01 — PRIVATE BY DESIGN",
        items: [
          "Deployment is designed around the organisation's security and data requirements.",
          "Client data remains isolated within approved boundary controls.",
        ],
      },
      {
        groupTitle: "02 — CLEAR RECORD OF SOURCES",
        items: [
          "Important findings can be traced back to the information they came from.",
          "Every synthesized claim links directly to its underlying document or data record.",
        ],
      },
      {
        groupTitle: "03 — CONTROLLED ACCESS",
        items: [
          "Information can be made available according to roles and permissions.",
          "Strict least-privilege boundaries align with existing enterprise directory structures.",
        ],
      },
      {
        groupTitle: "04 — HUMAN APPROVAL",
        items: [
          "Important decisions can remain subject to human review.",
          "Execution boundaries require authorized sign-off for binding actions.",
        ],
      },
      {
        groupTitle: "05 — CLEAR RECORDS",
        items: [
          "Important system activity can be recorded for review and accountability.",
          "Comprehensive event tracing maintains transparency for internal audits.",
        ],
      },
    ],
    closingQuote: "Governance should be part of the system design from the beginning.",
  },

  // PAGE 12
  {
    pageNumber: 12,
    pageId: "build-or-buy",
    sectionCode: "DECISION // 12",
    category: "STRATEGIC SOURCING",
    title: "BUILD OR BUY?",
    subtitle: "NOT EVERY PROBLEM REQUIRES A BESPOKE SYSTEM.",
    lead: "The right answer is the one that best fits the business — not automatically the one that involves building more.",
    bulletGroups: [
      {
        groupTitle: "BUY",
        items: [
          "Use an existing product when it already solves the problem effectively.",
          "Best when:",
          "• The workflow is common.",
          "• The requirements are standard.",
          "• The existing product fits the organisation.",
        ],
      },
      {
        groupTitle: "CONFIGURE",
        items: [
          "Adapt an existing platform when the business needs some additional workflow or integration.",
          "Best when:",
          "• The core capability already exists.",
          "• The organisation needs controlled customisation.",
        ],
      },
      {
        groupTitle: "BUILD",
        items: [
          "Create a bespoke system when the workflow, information, rules or integrations are sufficiently specific.",
          "Best when:",
          "• The business process is distinctive.",
          "• Existing products do not fit.",
          "• Multiple systems need to work together.",
          "• The organisation needs a system designed around its own way of working.",
        ],
      },
    ],
    closingQuote: "The right answer is the one that best fits the business — not automatically the one that involves building more.",
  },

  // PAGE 13
  {
    pageNumber: 13,
    pageId: "assessment-to-system",
    sectionCode: "IMPLEMENTATION // 13",
    category: "DELIVERY LIFECYCLE",
    title: "FROM ASSESSMENT TO WORKING SYSTEM",
    subtitle: "A CLEAR PATH FROM OPPORTUNITY TO DEPLOYMENT.",
    lead: "A disciplined four-stage journey ensuring practical adoption and continuous alignment.",
    bulletGroups: [
      {
        groupTitle: "01 — DISCOVER & DIAGNOSE",
        items: [
          "Understand the organisation and identify where AI may create genuine leverage.",
          "Output: Business Intelligence Assessment™ & Strategic AI Roadmap",
        ],
      },
      {
        groupTitle: "02 — ARCHITECT & SPECIFY",
        items: [
          "Design the system around the organisation's workflows, information, systems and requirements.",
          "Output: System Specification & Governance Blueprint",
        ],
      },
      {
        groupTitle: "03 — DELIVER & INTEGRATE",
        items: [
          "Engineer the system and connect it with the relevant business environment.",
          "Output: Bespoke Production System & Direct Operational Integration",
        ],
      },
      {
        groupTitle: "04 — ADOPT & EVOLVE",
        items: [
          "Help teams adopt the system and improve it as the organisation's needs develop.",
          "Output: Team Training, Operational Support & Ongoing Enhancement",
        ],
      },
    ],
    closingQuote: "Delivered in weeks through disciplined engineering, without enterprise bloat.",
  },

  // PAGE 14
  {
    pageNumber: 14,
    pageId: "what-good-deployment-looks-like",
    sectionCode: "EXCELLENCE // 14",
    category: "DEPLOYMENT STANDARDS",
    title: "WHAT GOOD AI DEPLOYMENT LOOKS LIKE",
    subtitle: "A SUCCESSFUL AI SYSTEM SHOULD FIT INTO THE BUSINESS.",
    lead: "It should not create another destination employees have to remember to visit.",
    bulletGroups: [
      {
        groupTitle: "FITS THE WORKFLOW",
        items: ["The system works around how people already operate."],
      },
      {
        groupTitle: "USES THE RIGHT INFORMATION",
        items: ["It works with the information required for the task."],
      },
      {
        groupTitle: "CONNECTS TO EXISTING SYSTEMS",
        items: ["Where appropriate, information can move between the systems the business already uses."],
      },
      {
        groupTitle: "HAS CLEAR BOUNDARIES",
        items: ["People understand what the system can and cannot do."],
      },
      {
        groupTitle: "KEEPS PEOPLE INVOLVED WHERE NECESSARY",
        items: ["Important decisions remain appropriately governed."],
      },
      {
        groupTitle: "CAN EVOLVE",
        items: ["The system can improve as processes and requirements change."],
      },
    ],
    closingQuote: "Does the system make the organisation easier to operate — or does it create another layer of work?",
  },

  // PAGE 15
  {
    pageNumber: 15,
    pageId: "readiness-checklist",
    sectionCode: "DIAGNOSTIC // 15",
    category: "EXECUTIVE WORKBOOK",
    title: "EXECUTIVE AI READINESS CHECKLIST",
    subtitle: "BEFORE YOUR ORGANISATION BUILDS ANYTHING, ASK:",
    lead: "A pragmatic self-assessment for executive leadership before initiating deployment.",
    checklistGroups: [
      {
        category: "BUSINESS",
        items: [
          "Which processes consume disproportionate employee time?",
          "Where are people repeatedly doing the same work?",
          "Where does information move manually between teams or systems?",
          "Which decisions require people to review large amounts of information?",
        ],
      },
      {
        category: "PEOPLE",
        items: [
          "Where does important company knowledge currently live?",
          "How dependent are important processes on individual employees?",
          "Which tasks prevent skilled employees from focusing on higher-value work?",
        ],
      },
      {
        category: "INFORMATION",
        items: [
          "Where is the information required for these processes stored?",
          "Is the information reliable and accessible?",
          "Are important procedures documented?",
        ],
      },
      {
        category: "TECHNOLOGY",
        items: [
          "Which systems already contain the required information?",
          "Can the relevant systems be connected?",
          "Where would an AI system need to sit within the existing workflow?",
        ],
      },
      {
        category: "GOVERNANCE",
        items: [
          "What information can the system access?",
          "Who should be allowed to use it?",
          "Which actions require human approval?",
          "What activity needs to be recorded?",
        ],
      },
    ],
    closingQuote: "Clarity on these questions turns AI from an experiment into an operational capability.",
  },

  // PAGE 16
  {
    pageNumber: 16,
    pageId: "stratision-approach",
    sectionCode: "PRINCIPLES // 16",
    category: "OPERATING PHILOSOPHY",
    title: "THE STRATISION APPROACH",
    subtitle: "START WITH THE BUSINESS. THEN DETERMINE WHAT TO BUILD.",
    lead: "Stratision does not begin with a catalogue of AI products. We begin by understanding how the organisation operates.",
    paragraphs: [
      "We identify where friction exists.",
      "We assess where AI can create genuine leverage.",
      "We prioritise the opportunities worth pursuing.",
      "Then we design and engineer the system around the business.",
    ],
    bulletGroups: [
      {
        groupTitle: "THE STRATISION JOURNEY",
        items: [
          "BUSINESS",
          "↓",
          "ASSESSMENT™",
          "↓",
          "PRIORITY",
          "↓",
          "ARCHITECTURE",
          "↓",
          "WORKING SYSTEM",
          "↓",
          "ADOPTION",
        ],
      },
    ],
    closingQuote: "The future won't be defined by how many AI tools a business uses. It will be defined by how intelligently AI is built into the way the business works.",
  },

  // PAGE 17
  {
    pageNumber: 17,
    pageId: "about-stratision",
    sectionCode: "PROFILE // 17",
    category: "CONSULTANCY PRACTICE",
    title: "ABOUT STRATISION",
    subtitle: "AI SYSTEMS DESIGNED AROUND HOW ORGANISATIONS ACTUALLY WORK.",
    lead: "Stratision is a bespoke AI systems consultancy. We identify high-friction business workflows, assess where AI can create genuine leverage, and engineer systems around the way organisations operate.",
    bulletGroups: [
      {
        groupTitle: "STRATEGY",
        items: ["Understanding where AI belongs in your operating model."],
      },
      {
        groupTitle: "SYSTEMS",
        items: ["Designing what should be built around existing workflows."],
      },
      {
        groupTitle: "ENGINEERING",
        items: ["Connecting custom autonomous systems to enterprise data and software."],
      },
      {
        groupTitle: "ADOPTION",
        items: ["Helping teams use, govern and evolve the capability over time."],
      },
    ],
    closingQuote: "We solve business problems. Technology is simply the method.",
  },

  // PAGE 18
  {
    pageNumber: 18,
    pageId: "final-cta",
    sectionCode: "ENGAGEMENT // 18",
    category: "COMMERCIAL ENTRY POINT",
    title: "START WITH THE BUSINESS. THEN DETERMINE WHAT TO BUILD.",
    subtitle: "THE BUSINESS INTELLIGENCE ASSESSMENT™",
    lead: "The Business Intelligence Assessment™ is the starting point for organisations that want to understand where AI can create genuine operational leverage.",
    paragraphs: [
      "We examine how your organisation works, identify the areas where AI may be valuable, and establish what should be built — if anything.",
      "Confidential discussion with a senior Stratision specialist. No obligation.",
    ],
    closingQuote: "STRATISION — Strategy • Vision • Intelligence",
    footnote: "Commercial Entry Point: Request Business Intelligence Assessment™",
  },
];
