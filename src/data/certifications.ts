export type Certification = {
  name: string;
  issuer: string;
  code: string;
  issued?: string;
  expires?: string;
  status: "active" | "in-progress";
  credentialId?: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    code: "SAA-C03",
    issued: "Jan 2025",
    expires: "Jan 2028",
    status: "active",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    code: "CLF-C02",
    issued: "Jan 2025",
    expires: "Jan 2028",
    status: "active",
  },
  {
    name: "AWS Certified Security — Specialty",
    issuer: "Amazon Web Services",
    code: "SCS-C03",
    status: "in-progress",
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    code: "AZ-104",
    status: "in-progress",
  },
];
