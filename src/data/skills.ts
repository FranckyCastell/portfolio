export type SkillGroup = {
  category: string;
  index: string;
  items: { name: string; note?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Cloud",
    index: "01",
    items: [
      { name: "AWS (EC2 · VPC · IAM · S3 · Lambda · ALB · WAF · Route 53 · CloudFront · CloudWatch · SSM · KMS · GuardDuty · Organizations)" },
      { name: "Azure" },
    ],
  },
  {
    category: "LLMOps & AI",
    index: "02",
    items: [
      { name: "Amazon Bedrock" },
      { name: "MCP (Model Context Protocol)" },
      { name: "RAG (Retrieval-Augmented Generation)" },
      { name: "Ollama" },
      { name: "Qdrant" },
      { name: "LangChain" },
      { name: "Redis" },
      { name: "n8n" },
    ],
  },
  {
    category: "Programming Languages",
    index: "03",
    items: [
      { name: "Python", note: "primary" },
      { name: "Bash" },
      { name: "TypeScript" },
      { name: "Go" },
      { name: "HCL" },
    ],
  },
  {
    category: "Infrastructure as Code",
    index: "04",
    items: [
      { name: "Terraform", note: "primary" },
      { name: "Packer" },
      { name: "AWS CDK" },
      { name: "Homer CLI", note: "internal tool" },
    ],
  },
  {
    category: "CI/CD & Automation",
    index: "05",
    items: [
      { name: "GitHub Actions" },
      { name: "AWS CodeBuild" },
      { name: "n8n" },
      { name: "Jira" },
      { name: "Git" },
    ],
  },
  {
    category: "Observability & Monitoring",
    index: "06",
    items: [
      { name: "Grafana" },
      { name: "Centreon" },
      { name: "CloudWatch" },
      { name: "New Relic" },
      { name: "X-Ray" },
    ],
  },
  {
    category: "Security & Compliance",
    index: "07",
    items: [
      { name: "ENS", note: "Esquema Nacional de Seguridad" },
      { name: "AWS WAF · GuardDuty · KMS · Secrets Manager" },
      { name: "Tailscale" },
    ],
  },
  {
    category: "Networking & Infrastructure",
    index: "08",
    items: [
      { name: "Cisco IOS · ASA" },
      { name: "VLAN · 802.1Q" },
      { name: "VPN" },
      { name: "Proxmox" },
      { name: "Docker" },
      { name: "FastAPI" },
    ],
  },
];
