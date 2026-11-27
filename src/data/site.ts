export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Stack", href: "/stack" },
  { label: "Contact", href: "/contact" },
];

export const social = {
  linkedin: "https://www.linkedin.com/in/francesc-castell",
  github: "https://github.com/FranckyCastell",
  twitter: "https://x.com/francesccastell",
  email: "hola@francastell.com",
  location: "Barcelona, Catalonia",
  availability: "Open to Cloud Engineer and Platform Engineer roles",
} as const;
