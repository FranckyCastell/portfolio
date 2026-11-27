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
      "Multi-cloud platform engineering at iThinkUPC: a multi-account AWS estate of 100+ Terraform repositories serving public sector, media, retail, insurance, research, and NGO clients — plus Azure operations and the internal tooling the team runs on.",
    highlights: [
      "Designed and deployed CloudIA, a read-only AI operations assistant built as an Amazon Bedrock AgentCore Harness, with an MCP gateway to Centreon, Jira, Grafana, AWS, and MyDoc runbooks.",
      "Built Homer CLI (Python), a Terraform and Packer wrapper that saves the team around 5 hours per week.",
      "Developed 15+ reusable Terraform modules standardizing deployments and ENS compliance across environments.",
      "Deliver and operate client platforms on shared foundations — Moodle SaaS, web platforms, data workloads, and containerised services — with Terraform and GitHub Actions.",
      "Work across a 100+ repository Terraform estate with centralized GitHub Actions: plan/apply, drift detection, and Trivy scans on every change.",
      "Built the Grafana Cloud observability layer as code — dashboards, downtimes, and per-client views — alongside CloudWatch and Centreon.",
      "Operate Azure environments alongside AWS for enterprise and NGO clients.",
    ],
    stack: ["AWS", "Azure", "Terraform", "Packer", "GitHub Actions", "Centreon", "Grafana", "Python", "n8n"],
  },
  {
    role: "SysAdmin & Cloud Services Administrator",
    company: "SII Group Spain",
    period: "Sep 2024 — May 2025",
    duration: "9 mos",
    location: "Barcelona, Catalonia",
    mode: "Remote",
    summary:
      "Managed infrastructure and cloud environments for ~30 municipal and corporate clients, handling an average of 20 incidents per day across hybrid environments.",
    highlights: [
      "Resolved ~400 incidents per month across cloud (AWS, Azure) and on-premise environments, maintaining strict SLA compliance.",
      "Administered cloud infrastructures, troubleshooting issues spanning compute, networking, storage, and identity services.",
      "Coordinated cross-team efforts to implement infrastructure improvements for critical municipal services.",
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
      "Ensured the reliability and performance of network infrastructure at a national scale, resolving complex incidents and implementing continuous improvements.",
    highlights: [
      "Managed and maintained network infrastructure for municipal and corporate clients nationwide.",
      "Collaborated with cross-functional teams to design and deploy network improvements (VLANs, VPNs, firewalls).",
      "Developed diagnostic scripts (Bash) to streamline recurring troubleshooting tasks and reduce manual investigation time.",
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
      "Deployed network infrastructure for residential and commercial clients at a regional ISP, delivering end-to-end connectivity solutions.",
    highlights: [
      "Deployed and configured network infrastructure for ~100 client sites over 6 months.",
      "Designed network topologies for new deployments based on site requirements and coverage needs.",
      "Provided L2/L3 technical support for connectivity and performance issues.",
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
      "Managed network infrastructure and systems for the regional parliament, supporting secure communications for all users and departments.",
    highlights: [
      "Configured and maintained managed switches and VLANs, ensuring proper traffic segmentation.",
      "Developed automation scripts (Python) for Cisco router configuration, Fortinet firewall management, and VMware.",
      "Administered Cisco ASA firewalls and Fortinet appliances in line with government standards.",
    ],
    stack: ["Cisco IOS", "ASA", "Python", "VLAN"],
  },
];
