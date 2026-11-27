export type FocusArea = {
  index: string;
  title: string;
  description: string;
  tags: string[];
};

export const focusAreas: FocusArea[] = [
  {
    index: "01",
    title: "Cloud & Platform",
    description:
      "Multi-account AWS and Azure foundations built with Terraform: reusable modules, ENS compliance, cross-account access with AWS Organizations and IAM Identity Center, and pipelines that deploy without manual steps.",
    tags: ["AWS", "Azure", "Terraform", "IAM Identity Center", "GitHub Actions"],
  },
  {
    index: "02",
    title: "AI Operations",
    description:
      "Read-only agents built as Amazon Bedrock AgentCore Harnesses, correlating Centreon, Jira, Grafana, and AWS APIs through an MCP gateway. Explicit tool allowlists, EU inference, and a cost ceiling.",
    tags: ["AgentCore", "Strands", "MCP", "Python", "AIOps"],
  },
  {
    index: "03",
    title: "Observability",
    description:
      "Grafana Cloud managed as code — dashboards, downtimes, and per-client views — wired to CloudWatch and Centreon so incidents are obvious before users notice.",
    tags: ["Grafana Cloud", "CloudWatch", "Centreon", "Terraform"],
  },
];
