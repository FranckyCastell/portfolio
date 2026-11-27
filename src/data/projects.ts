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
  role?: string;
  outcome?: string;
};

export const projects: Project[] = [
  {
    slug: "agentforge",
    name: "AgentForge",
    tagline: "Multi-agent orchestrator — drop YAML, get agents.",
    role: "Design and implementation",
    outcome: "Adding an agent is a YAML file, with 11 providers and MCP tools that need no API keys.",
    description:
      "A multi-agent orchestration framework where adding an agent is as simple as dropping YAML files into a directory. Built on Google ADK with 11 LLM providers (OpenRouter, Anthropic, Groq, Gemini, local models…), MCP tool integration (Open-Meteo, DuckDuckGo — zero API keys), dynamic system prompt generation from agent skill definitions, and a terminal UI with delegation visualization.",
    year: "2026",
    status: "active",
    featured: true,
    tags: ["Python", "Orchestration", "MCP", "Multi-Agent", "Google ADK", "AI"],
    links: [{ label: "GitHub", url: "https://github.com/FranckyCastell/agentforge" }],
    highlights: [
      "11 LLM providers with per-agent configuration — OpenRouter, Anthropic, Groq, Gemini, local models.",
      "MCP tool integration — Open-Meteo weather, DuckDuckGo search — zero API keys required.",
      "Dynamic system prompt generation from agent skill YAML definitions at startup.",
      "Terminal UI with real-time delegation visualization across agents.",
    ],
  },
  {
    slug: "cloudia",
    name: "CloudIA",
    tagline: "Read-only AI operations assistant built on Amazon Bedrock AgentCore.",
    role: "Design and implementation",
    outcome: "Read-only incident investigation across multi-account AWS, with cost capped per session.",
    description:
      "Internal AI operations assistant for multi-account AWS at IThinkUPC. CloudIA is an Amazon Bedrock AgentCore Harness — model, tools, memory, and limits declared in Terraform — that investigates incidents by correlating Centreon, Jira, Grafana, live AWS APIs, and MyDoc runbooks. It runs from a terminal, Google Chat, or automatically over Jira tickets.",
    year: "2026",
    status: "active",
    featured: true,
    tags: ["AWS Bedrock", "AgentCore", "Strands", "Terraform", "Python", "Go", "MCP"],
    highlights: [
      "MCP gateway to Centreon, Jira, Grafana, AWS, and MyDoc runbooks.",
      "Read-only cross-account AssumeRole; any create, update, or delete call fails with AccessDenied.",
      "AgentCore Memory with semantic and episodic strategies, plus skills encoding company investigation standards.",
      "Every investigation feeds evals and skills, so incident knowledge accumulates instead of resetting.",
    ],
  },
  {
    slug: "markus",
    name: "Markus",
    tagline: "Personal AI assistant with GraphRAG memory and clinical tools.",
    role: "Design and implementation",
    outcome: "Long-term memory on a graph, fully self-hosted in Docker.",
    description:
      "A conversational AI companion that uses a Neo4j graph database to remember deep context — who you are, how you felt, and the causal chains behind your emotions. Unlike vanilla vector RAG, Markus extracts entities (people, emotions, topics) and links them with semantic relationships. Includes 16 integrated tools: Cognitive Behavioral Therapy exercises, SMART goal coaching, journaling, crisis intervention, and an interactive mind graph. Fully self-contained in Docker with zero SaaS dependencies.",
    year: "2026",
    status: "active",
    featured: true,
    tags: ["Python", "Neo4j", "GraphRAG", "FastAPI", "Docker", "LLM", "AI"],
    links: [{ label: "GitHub", url: "https://github.com/FranckyCastell/markus" }],
    highlights: [
      "Neo4j graph memory with entity extraction and causal relationship mapping.",
      "16 autonomous tools — CBT exercises, SMART goals, journaling, crisis intervention.",
      "Streaming chat interface with LLM-driven function calling and mind graph visualisation.",
    ],
  },
  {
    slug: "homer",
    name: "Homer CLI",
    tagline: "One tool to unify the Terraform and Packer lifecycle.",
    role: "Design and implementation",
    outcome: "Around 5 hours per week recovered for the team across client environments.",
    description:
      "A wrapper over Terraform and Packer that unifies and simplifies infrastructure lifecycle management. Flexible syntax and intuitive commands (plan, apply, build, unlock) ensure consistency. Adopted company-wide at IThinkUPC, saving the team ~5 hours per week in manual operations across client environments.",
    year: "2025",
    status: "active",
    featured: true,
    tags: ["Python", "Bash", "Terraform", "Packer", "CLI"],
    links: [{ label: "GitHub", url: "https://github.com/FranckyCastell/homer" }],
    highlights: [
      "Single command interface for plan/apply/build/destroy across multiple environments.",
      "Safe state-lock release with `homer unlock` without leaving the terminal.",
      "Adopted by the entire DevOps team across client environments.",
    ],
  },
  {
    slug: "high-availability-architecture",
    name: "AWS High Availability Architecture",
    tagline: "Resilient multi-AZ stack with SSM and CloudWatch.",
    role: "Design and implementation",
    outcome: "Multi-AZ resilience with no SSH exposure and metrics every 60 seconds.",
    description:
      "Terraform codebase that provisions a complete high-availability AWS stack — VPC across multiple AZs, ALB in public subnets, EC2 Auto Scaling Group in private subnets with NAT Gateways, CloudWatch Agent for custom metrics, and Systems Manager for secure access without SSH. Built for production workloads that demand resilience.",
    year: "2025",
    status: "shipped",
    featured: true,
    tags: ["AWS", "Terraform", "ALB", "ASG", "CloudWatch", "SSM", "HA"],
    links: [{ label: "GitHub", url: "https://github.com/FranckyCastell/High-Availability-Architecture" }],
    highlights: [
      "Multi-AZ deployment with private subnets, NAT Gateways, and ALB for fault tolerance.",
      "CloudWatch Agent collecting CPU, memory, and disk metrics at 60s intervals.",
      "SSM Session Manager for secure, SSH-less instance access.",
    ],
  },
  {
    slug: "fermy-academy",
    name: "Fermy Academy",
    tagline: "Django web platform for tutoring and academic support.",
    description:
      "A full-stack web application built with Django and Bootstrap for managing tutoring courses and academic support services. Includes production deployment checks and SQLite-backed data persistence.",
    year: "2023",
    status: "shipped",
    featured: true,
    tags: ["Python", "Django", "Bootstrap", "Full-stack"],
    links: [{ label: "GitHub", url: "https://github.com/FranckyCastell/FermyAcademy" }],
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
  },
  {
    slug: "llmops-private-rag",
    name: "Private AI stack · Self-hosted RAG",
    tagline: "An on-premise RAG ecosystem with zero cloud dependency.",
    description:
      "End-to-end private AI infrastructure: Proxmox LXC hosts running Ollama for inference, Qdrant as the vector store, Redis for caching and session state, and n8n as the orchestration layer. Tailscale glues every node together with zero-trust networking. Designed for privacy-sensitive workloads where data cannot leave the perimeter.",
    year: "2025",
    status: "active",
    tags: ["Proxmox", "Ollama", "Qdrant", "Redis", "n8n", "Tailscale", "Local AI"],
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
    links: [{ label: "GitHub", url: "https://github.com/FranckyCastell/aws-scalable-webapp" }],
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    tagline: "This very site — built with Astro 5 and Tailwind v4.",
    description:
      "A static, SEO-optimized personal portfolio deployed on Cloudflare Workers. Features dark/light theme, View Transitions, JSON-LD structured data, self-hosted fonts, and PWA support. Typed content in TypeScript data files fully separated from presentation.",
    year: "2026",
    status: "active",
    tags: ["Astro", "Tailwind CSS", "TypeScript", "Cloudflare", "SEO"],
    links: [{ label: "GitHub", url: "https://github.com/FranckyCastell/portfolio" }],
  },
];
