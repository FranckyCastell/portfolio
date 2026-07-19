export type Experience = {
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  mode?: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Cloud Engineer",
    company: "IThinkUPC",
    period: "May 2025 — Present",
    duration: "1 yr 3 mos",
    location: "Barcelona, Catalonia",
    mode: "Hybrid",
    current: true,
    summary:
      "Modernizing critical infrastructure for Tier-1 clients in the public sector and large enterprise. Designing secure, scalable AWS architectures and automating the full software delivery lifecycle.",
    highlights: [
      "Co-designing resilient cloud architectures for critical government and enterprise services, ensuring high availability and ENS compliance.",
      "Leading the development of modular, reusable Terraform codebases that standardize deployments across multiple environments and reduce configuration drift.",
      "Built Homer, an internal CLI (Python/Bash) that abstracts complex Terraform workflows and measurably improves developer experience.",
      "Orchestrating advanced GitHub Actions pipelines with automated testing, security scans and seamless rollouts.",
      "Designing end-to-end monitoring with Centreon and Grafana for real-time visibility into infrastructure health and business metrics.",
      "Exploring AI-driven infrastructure operations (LLMOps) to optimize internal workflows.",
    ],
    stack: ["AWS", "Terraform", "Packer", "GitHub Actions", "Centreon", "Grafana", "Python", "n8n"],
  },
  {
    role: "SysAdmin & Cloud Services Administrator",
    company: "SII Group Spain",
    period: "Sep 2024 — May 2025",
    duration: "9 mos",
    location: "Barcelona, Catalonia",
    mode: "Remote",
    summary:
      "Comprehensive management of technological infrastructures for municipalities, high-level corporations and cloud environments. Ensuring efficiency, security and scalability of critical systems.",
    highlights: [
      "Coordinated and administered critical networks and systems for municipalities and large corporations.",
      "Administered and troubleshot cloud infrastructures, resolving advanced incidents.",
      "Implemented and supervised network and cloud infrastructures, optimizing performance and security.",
      "Collaborated with diverse teams to develop robust technological solutions aligned with each client's specific needs.",
    ],
    stack: ["Windows Server", "Azure", "Networking", "Hyper-V", "Active Directory"],
  },
  {
    role: "Network Administrator",
    company: "SII Group Spain",
    period: "Jun 2023 — Aug 2024",
    duration: "1 yr 3 mos",
    location: "Barcelona, Catalonia",
    mode: "Hybrid",
    summary:
      "Responsible for the efficiency and reliability of technological infrastructures at a national level. From network and system management to resolving complex incidents.",
    highlights: [
      "Managed and maintained network infrastructure and systems across multiple sites.",
      "Resolved complex configuration incidents and IT problems.",
      "Implemented continuous improvements in technological infrastructure.",
      "Collaborated with cross-functional teams to develop robust and effective technological solutions.",
    ],
    stack: ["Networking", "Windows Server", "Cisco", "VPNs"],
  },
  {
    role: "Network Administrator",
    company: "Cototo Wifi",
    period: "Jun 2021 — Nov 2021",
    duration: "6 mos",
    location: "Ciudadela, Balearic Islands",
    mode: "Part-time · On-site",
    summary:
      "Installation, configuration and maintenance of essential LAN and WAN equipment. Designing secure and scalable network infrastructures.",
    highlights: [
      "Designed and implemented scalable and secure network infrastructures.",
      "Optimized the performance and administration of computer systems.",
      "Provided technical support for resolving connectivity and performance issues.",
      "Ensured the integration and functionality of new technologies in the existing network.",
    ],
    stack: ["LAN/WAN", "MikroTik", "Ubiquiti", "Fiber"],
  },
  {
    role: "Network Systems Administrator · Internship",
    company: "Parlament de les Illes Balears",
    period: "Jan 2021 — Jun 2021",
    duration: "6 mos",
    location: "Palma, Balearic Islands",
    mode: "On-site",
    summary:
      "Managed and administered networks and systems with a focus on optimization and security. Implemented custom solutions with Python.",
    highlights: [
      "Implemented and maintained switches for LAN networks and configured VLANs.",
      "Developed customized technological solutions using Python.",
      "Optimized network infrastructure using Cisco products, including CCNA and Cisco ASA.",
      "Provided agile and effective technical assistance in critical situations.",
    ],
    stack: ["Cisco IOS", "ASA", "Python", "VLAN"],
  },
];
