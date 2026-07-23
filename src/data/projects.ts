import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    slug: "metro-street-surveillance-network",
    title: "Metro Street Surveillance Network",
    sector: "Municipal",
    location: "Gauteng",
    year: "2019 – ongoing",
    summary:
      "Design, installation and 24/7 monitoring of a city-wide street CCTV network integrated into a central control room.",
    outcome:
      "Extended live coverage across core metro corridors with a single control room feeding incident response and evidence teams.",
    services: ["Technical Design & Advisory", "Technical Installation", "Incident Monitoring & Analysis"],
  },
  {
    slug: "corporate-park-perimeter-security",
    title: "Corporate Park Perimeter Security",
    sector: "Corporate",
    location: "Irene, Centurion",
    year: "2021",
    summary:
      "Perimeter CCTV, access monitoring and a dedicated response contract for a multi-tenant corporate park.",
    outcome:
      "Consolidated multiple tenants onto one monitored security infrastructure with a shared incident response unit.",
    services: ["Technical Installation", "Incident Response Unit", "Technical Maintenance"],
  },
  {
    slug: "border-gate-monitoring-upgrade",
    title: "Border Gate Monitoring Upgrade",
    sector: "National Infrastructure",
    location: "South Africa",
    year: "2022",
    summary:
      "Upgrade of outdated surveillance infrastructure at a high-traffic border facility, including drone-supported monitoring.",
    outcome:
      "Replaced legacy analogue cameras with a networked digital system and added drone surveillance for perimeter blind spots.",
    services: ["Technical Design & Advisory", "Technical Resources Supply", "Incident Monitoring & Analysis"],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
