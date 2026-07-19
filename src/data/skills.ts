export type SkillGroup = {
  category: string;
  index: string;
  items: { name: string; note?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Cloud · AWS",
    index: "01",
    items: [
      { name: "EC2 · VPC · IAM", note: "core" },
      { name: "S3 · CloudFront · Route 53" },
      { name: "Lambda · API Gateway" },
      { name: "ALB · ASG · Auto Scaling" },
      { name: "WAFv2 · Shield · GuardDuty" },
      { name: "CloudWatch · CloudTrail · SSM" },
      { name: "Bedrock · AgentCore", note: "LLMOps" },
      { name: "Secrets Manager · KMS" },
      { name: "Organizations · Control Tower" },
    ],
  },
  {
    category: "Infrastructure as Code",
    index: "02",
    items: [
      { name: "Terraform", note: "primary" },
      { name: "Packer" },
      { name: "AWS CDK" },
      { name: "Homer CLI", note: "internal tool" },
    ],
  },
  {
    category: "CI / CD",
    index: "03",
    items: [
      { name: "GitHub Actions" },
      { name: "AWS CodeBuild" },
      { name: "Homer pipelines" },
    ],
  },
  {
    category: "Observability",
    index: "04",
    items: [
      { name: "Grafana" },
      { name: "Centreon" },
      { name: "CloudWatch" },
      { name: "X-Ray" },
    ],
  },
  {
    category: "LLMOps · AI",
    index: "05",
    items: [
      { name: "Bedrock AgentCore Harness" },
      { name: "Ollama" },
      { name: "Qdrant" },
      { name: "Redis" },
      { name: "n8n" },
      { name: "RAG pipelines" },
      { name: "Proxmox LXC" },
    ],
  },
  {
    category: "Languages",
    index: "06",
    items: [
      { name: "Python", note: "primary" },
      { name: "Bash" },
      { name: "TypeScript" },
      { name: "HCL" },
      { name: "Go", note: "basic" },
    ],
  },
  {
    category: "Security · Compliance",
    index: "07",
    items: [
      { name: "ENS", note: "Esquema Nacional de Seguridad" },
      { name: "AWS Security Specialty" },
      { name: "Tailscale" },
      { name: "Network hardening" },
    ],
  },
  {
    category: "Networking",
    index: "08",
    items: [
      { name: "VPC design" },
      { name: "VLAN · 802.1Q" },
      { name: "Cisco IOS · ASA" },
      { name: "LAN/WAN administration" },
    ],
  },
];
