import {
  astroPixel,
  backend,
  code,
  concepts,
  coursera,
  cp,
  creator,
  designs,
  fcc,
  hr,
  ideas,
  malariadetectionsystem,
  mobile,
  novalearn,
  ponggame,
  portfolio,
  web,
  hcl,
  hcltech,
  koch,
  syngenta,
  birlasoft,
  evalueserve,
  amex,
  microland,
  infra_service_model,
  legacy_to_product,
  enterprise_it_migration,
  agentic_ai_healing,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "strategic-initiatives",
    title: "Initiatives",
  },
  {
    id: "transformation-highlights",
    title: "Highlights",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const coreMetrics = [
  { title: "24+", subtitle: "Years Experience" },
  { title: "155+", subtitle: "Global Team Members" },
  { title: "15,000+", subtitle: "Servers Managed" },
  { title: "50K+", subtitle: "Network Devices" },
  { title: "8PB+", subtitle: "Infrastructure Scale" },
  { title: "$20M", subtitle: "Budget Managed" }
];

const services = [
  {
    title: "Infrastructure Transformation",
    icon: web,
  },
  {
    title: "Cloud & Network Strategy",
    icon: mobile,
  },
  {
    title: "Automation & Agentic AI",
    icon: backend,
  },
  {
    title: "GCC Leadership",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Deputy General Manager",
    company_name: "HCL Tech",
    icon: hcltech,
    iconBg: "#1e293b",
    date: "August 2025 \u2013 Till date",
    points: [
      "Leading automation and agentic AI initiatives for infrastructure.",
      "Collaborating with account leaders for adoption at scale.",
      "Working with OEMs such as Cisco, HP, Dell, Aruba, and FortiGate.",
      "Supporting solutioning, RFPs, transition, and transformation programs."
    ],
  },
  {
    title: "Global Transformation Leader",
    company_name: "Koch Industries",
    icon: koch,
    iconBg: "#E8E8E8",
    date: "September 2021 \u2013 August 2025",
    points: [
      "Built and led a 155-member global organization.",
      "Drove digital transformation across network, compute, hosting, backup, security, and operations.",
      "Oversaw infrastructure environments spanning 15,000+ servers, 1,000+ storage arrays, 50K+ network devices, and multi-petabyte platforms."
    ],
  },
  {
    title: "Head Europe, Africa & Asia Infrastructure Transformation",
    company_name: "Syngenta",
    icon: syngenta,
    iconBg: "#FFFFFF",
    date: "August 2017 \u2013 September 2021",
    points: [
      "Led infrastructure transformation programs, business-case planning, and 5-year ROI analysis.",
      "Managed contract management, budget governance, and multi-cloud support across Azure and AWS.",
      "Modernized service delivery across Europe, Africa, and Asia regions."
    ],
  },
  {
    title: "Group Operations Manager",
    company_name: "HCL Tech, Noida",
    icon: hcl,
    iconBg: "#FFFFFF",
    date: "February 2010 \u2013 August 2017",
    points: [
      "Earlier roles: UPM \u2013 Senior Manager \u2013 Service Delivery, ENS Consultant, AMD \u2013 Tech Lead.",
      "Managed core network and voice services, budgets, and service transitions.",
      "Oversaw operational governance and analytics-based cost reduction.",
      "Drove enterprise service delivery in large complex environments."
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Birlasoft, Noida",
    icon: birlasoft,
    iconBg: "#FFFFFF",
    date: "March 2009 \u2013 February 2010",
    points: [
      "Project Focus: GE EMEA.",
      "Delivered high-quality software engineering solutions."
    ],
  },
  {
    title: "Voice Administrator",
    company_name: "Evalueserve, Gurugram",
    icon: evalueserve,
    iconBg: "#FFFFFF",
    date: "August 2007 \u2013 March 2009",
    points: [
      "Managed enterprise voice services.",
      "Supported telephony operations and infrastructure."
    ],
  },
  {
    title: "Telecom & Network Engineer",
    company_name: "American Express, New Delhi",
    icon: amex,
    iconBg: "#e0f2fe",
    date: "March 2006 \u2013 July 2007",
    points: [
      "On the Payroll of PC Solution.",
      "Handled critical telecom and network operations."
    ],
  },
  {
    title: "Desktop and Network Engineer",
    company_name: "Mircoland (EXL Pvt. Ltd.), NOIDA",
    icon: microland,
    iconBg: "#FFFFFF",
    date: "February 2005 \u2013 March 2006",
    points: [
      "Managed desktop support and optimized network performance."
    ],
  },
];

const achievements = [
  {
    title: ["HCLTech GCC"],
    company_name: "HCLTech & Koch",
    icon: fcc,
    iconBg: "#1e293b",
    date: "2021 - Present",
    points: [
      "Established GCC capability for HCL in Noida with end-to-end exposure.",
      "Successfully set up and scaled the GCC for Koch in Bangalore.",
      "Ran the GCC for Syngenta from Pune."
    ],
    credential: [],
  },
  {
    title: ["Infra Modernization"],
    company_name: "Global Scale",
    icon: hr,
    iconBg: "#1e293b",
    date: "2017 - Present",
    points: [
      "Designed next-generation, auto-healing infrastructure.",
      "Drove transformation programs across large enterprise estates.",
      "Implemented multi-cloud and service delivery modernization."
    ],
    credential: [],
  },
  {
    title: ["Cost Optimization"],
    company_name: "Automation",
    icon: cp,
    iconBg: "#1e293b",
    date: "2010 - Present",
    points: [
      "Drove cost optimization through automation.",
      "Redesigned processes and implemented business analytics.",
      "Leveraged Agentic AI for infrastructure operations."
    ],
    credential: [],
  },
];

const testimonials = [
  {
    testimonial: "Project Management Professional (PMP)",
    name: "PMI",
    designation: "Certification",
    company: "Project Management Institute",
    image: coursera,
  },
  {
    testimonial: "PRINCE2 Foundation & Practitioner",
    name: "Axelos",
    designation: "Certification",
    company: "Axelos",
    image: fcc,
  },
  {
    testimonial: "Cisco Certified Network Associate & Professional Voice",
    name: "Cisco",
    designation: "Certification",
    company: "CCNA & CCNP",
    image: cp,
  },
  {
    testimonial: "The Open Group Architecture Framework (TOGAF)",
    name: "Open Group",
    designation: "Certification",
    company: "TOGAF",
    image: hr,
  },
];

const projects = [
  {
    name: "Infrastructure Service Modeling",
    description: "Transformed siloed operations into standardized service models. Designed and implemented frameworks to standardize infrastructure operations across network, compute, hosting, storage, and security.",
    tags: [
      { name: "Service Modeling", color: "blue-text-gradient" },
      { name: "Standardization", color: "cyan-text-gradient" },
      { name: "SLAs", color: "pink-text-gradient" },
    ],
    image: infra_service_model,
    images: [infra_service_model],
    source_code_link: "https://github.com/dsrivastava80/dsrivastava80",
    live_demo_link: "",
    metrics: { stars: "Agility", forks: "40%+", views: "Speed" },
    features: [
      "40% faster service provisioning through standardized models",
      "25% reduction in operational costs via optimized resource allocation",
      "99.9% service availability with clearly defined operational SLAs"
    ],
  },
  {
    name: "Legacy-to-Product Transformation",
    description: "Rebuilt infrastructure as scalable product organizations. Transformed traditional siloed operations using DevOps, Infrastructure as Code, and automation frameworks.",
    tags: [
      { name: "DevOps", color: "blue-text-gradient" },
      { name: "IaC", color: "cyan-text-gradient" },
      { name: "CI/CD", color: "pink-text-gradient" },
    ],
    image: legacy_to_product,
    images: [legacy_to_product],
    source_code_link: "https://github.com/dsrivastava80/dsrivastava80",
    live_demo_link: "",
    metrics: { stars: "Costs", forks: "35%⬇", views: "Savings" },
    features: [
      "60% reduction in deployment times from months to days",
      "35% cost savings through automation and CI/CD pipelines",
      "4x faster incident resolution via self-service product capabilities"
    ],
  },
  {
    name: "Enterprise IT Transformation",
    description: "Global datacenter, cloud, and network modernization program including consolidation, multi-cloud migration, virtualization, and next-generation networking.",
    tags: [
      { name: "Datacenter", color: "blue-text-gradient" },
      { name: "Cloud", color: "cyan-text-gradient" },
      { name: "Migration", color: "pink-text-gradient" },
    ],
    image: enterprise_it_migration,
    images: [enterprise_it_migration],
    source_code_link: "https://github.com/dsrivastava80/dsrivastava80",
    live_demo_link: "",
    metrics: { stars: "Data", forks: "8PB+", views: "Scale" },
    features: [
      "$12M annual savings through datacenter optimization and cloud migration",
      "8PB+ data management with zero downtime migration",
      "50K+ network devices modernized across global operations"
    ],
  },
  {
    name: "Agentic AI Self-HealingPlatform",
    description: "Built 16 agentic AI agents enabling zero-touch deployment, predictive maintenance, auto-remediation, and self-healing infrastructure operations.",
    tags: [
      { name: "Agentic AI", color: "blue-text-gradient" },
      { name: "Automation", color: "cyan-text-gradient" },
      { name: "Predictive", color: "pink-text-gradient" },
    ],
    image: agentic_ai_healing,
    images: [agentic_ai_healing],
    source_code_link: "https://github.com/dsrivastava80/dsrivastava80",
    live_demo_link: "",
    metrics: { stars: "Agents", forks: "16", views: "Scale" },
    features: [
      "85% reduction in manual intervention through intelligent automation",
      "Zero-touch deployments across 15K+ server environments",
      "30% improvement in MTTR (Mean Time to Resolution) through predictive analytics"
    ],
  },
];

const words = [
  { text: "Transformation", imgPath: ideas, font: "Inter, sans-serif" },
  { text: "Automation", imgPath: concepts, font: "Inter, sans-serif" },
  { text: "Cloud", imgPath: designs, font: "Inter, sans-serif" },
  { text: "Leadership", imgPath: code, font: "Inter, sans-serif" },
  { text: "Strategy", imgPath: ideas, font: "Inter, sans-serif" },
  { text: "Execution", imgPath: concepts, font: "Inter, sans-serif" },
];

export { achievements, projects, services, testimonials, words, experiences };
