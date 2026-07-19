export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  status: "shipped" | "active" | "exploration";
  tags: string[];
  links?: { label: string; url: string }[];
  highlights?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "homer",
    name: "Homer CLI",
    tagline: "One tool to unify the Terraform and Packer lifecycle.",
    description:
      "A wrapper over Terraform and Packer that unifies and simplifies infrastructure lifecycle management. Flexible syntax and intuitive commands (plan, apply, build, destroy) ensure consistency across environments. Includes homer unlock to safely release Terraform state locks without leaving the terminal.",
    year: "2025",
    status: "active",
    featured: true,
    tags: ["Python", "Bash", "Terraform", "Packer", "CLI"],
    links: [{ label: "GitHub", url: "https://github.com/FranckyCastell/homer" }],
    highlights: [
      "Single command interface for plan/apply/build/destroy across multiple environments.",
      "Safe state-lock release with `homer unlock`.",
      "Started as a 3-line alias, grew into a 400+ line CLI adopted internally.",
    ],
  },
  {
    slug: "terraform-packer-wrapper",
    name: "Terraform · Packer Wrapper",
    tagline: "Interactive target selection for Terraform deploys.",
    description:
      "A bash automation that lists every resource in a Terraform plan, numbers them, and lets you apply a specific subset by typing a single number. Asks for confirmation before touching production and cleans up every temp file Terraform leaves behind. Works identically for Packer builds.",
    year: "2024",
    status: "shipped",
    tags: ["Bash", "Terraform", "Packer", "Automation"],
    links: [{ label: "GitHub", url: "https://github.com/FranckyCastell/terraform-packer-wrapper" }],
    highlights: [
      "Replaces tedious `-target=module.vpc.aws_security_group.web_sg_...` with a numbered picker.",
      "Pre-production confirmation prompt and automatic temp cleanup.",
      "Same UX for Packer builds — no remembering paths or arguments.",
    ],
  },
  {
    slug: "cloudwatch-debian",
    name: "CloudWatch Agent for Debian",
    tagline: "SSM-driven, dynamic CloudWatch Agent on Debian EC2.",
    description:
      "Debian EC2 instances ship a CloudWatch Agent .deb that lacks a usable plaintext config, so the service never starts collecting system logs or metrics. This project ships two solutions: an SSM Document that installs, prepares the environment and generates a JSON config dynamically, plus a User Data variant that bakes the same flow into new instances from boot.",
    year: "2024",
    status: "shipped",
    featured: true,
    tags: ["AWS", "SSM", "CloudWatch", "Debian", "EC2", "Bash"],
    links: [{ label: "GitHub", url: "https://github.com/FranckyCastell/CloudWatchAgent_Debian_Instances" }],
    highlights: [
      "SSM Run Command installs agent, prepares rsyslog, sets permissions, generates JSON config.",
      "User Data variant bakes the same flow into new AMIs from boot.",
      "Resolves the missing plaintext config gap on Debian specifically.",
    ],
  },
  {
    slug: "llmops-private-rag",
    name: "Private LLMOps · Self-hosted RAG",
    tagline: "An on-premise RAG ecosystem with zero cloud dependency.",
    description:
      "End-to-end private AI infrastructure: Proxmox LXC hosts running Ollama for inference, Qdrant as the vector store, Redis for caching and session state, and n8n as the orchestration layer. Tailscale glues every node together with zero-trust networking. Designed for privacy-sensitive workloads where data cannot leave the perimeter.",
    year: "2025",
    status: "active",
    featured: true,
    tags: ["Proxmox", "Ollama", "Qdrant", "Redis", "n8n", "Tailscale", "LLMOps"],
    highlights: [
      "Fully self-hosted — no data ever leaves the perimeter.",
      "Hybrid edge architecture prioritizing privacy and resource efficiency.",
      "n8n orchestrates retrieval, generation and human-in-the-loop checkpoints.",
    ],
  },
  {
    slug: "mcp-shodan",
    name: "Shodan MCP Server",
    tagline: "Model Context Protocol server for Shodan intelligence.",
    description:
      "A TypeScript MCP server that exposes Shodan's API as tools consumable by any MCP-compatible agent (Bedrock AgentCore, Claude Desktop, custom agents). Built to the MCP specification with Smithery distribution.",
    year: "2025",
    status: "active",
    tags: ["TypeScript", "MCP", "Shodan", "AI", "Agent tooling"],
    links: [{ label: "Repo", url: "https://github.com/FranckyCastell/mcp-shodan" }],
  },
  {
    slug: "aws-cloud-native-webapp",
    name: "AWS Cloud-Native Web App",
    tagline: "Highly scalable and secure web application architecture.",
    description:
      "Production AWS reference architecture built with Terraform as Infrastructure as Code. Application Load Balancers with Auto Scaling Groups across multiple Availability Zones, AWS WAFv2 with SQLi and rate-limit rules, Route 53, S3 and managed databases. Engineered for resilience to traffic peaks and proactive security.",
    year: "2025",
    status: "shipped",
    tags: ["AWS", "Terraform", "ALB", "ASG", "WAFv2", "Route 53"],
    highlights: [
      "Multi-AZ ALB + ASG for high availability and resiliency.",
      "WAFv2 with SQLi and rate-limiting rules for threat protection.",
      "IaC-only — no console clicks, fully reproducible.",
    ],
  },
];
