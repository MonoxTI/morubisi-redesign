import { Service } from "@/types/service";

export const SERVICES: Service[] = [
  {
    slug: "technical-design-advisory",
    index: "01",
    title: "Technical Design & Advisory",
    summary: "Schematic design and advisory for new builds or system upgrades.",
    description:
      "Our technical design team scopes surveillance infrastructure from the ground up — producing the network schematics, equipment specifications and advisory reports that new installations and legacy upgrades are built on.",
    capabilities: ["Site surveys", "Network schematics", "Legacy system audits", "Technology roadmaps"],
  },
  {
    slug: "technical-resources-supply",
    index: "02",
    title: "Technical Resources Supply",
    summary: "Vetted equipment and inventory at a transparent, fair fee.",
    description:
      "We supply the cameras, sensors, networking hardware and control-room equipment behind every installation — each item vetted by our own technical team before it reaches site.",
    capabilities: ["Vetted hardware sourcing", "Inventory management", "Vendor coordination", "Transparent pricing"],
  },
  {
    slug: "technical-installation",
    index: "03",
    title: "Technical Installation",
    summary: "Installation executed against a documented network schematic.",
    description:
      "Installations follow the schematic produced during design, executed by qualified technicians under a dedicated Technical Manager, with quality control checks at every stage.",
    capabilities: ["Structured cabling", "Camera & sensor deployment", "Control-room integration", "QA sign-off"],
  },
  {
    slug: "technical-maintenance",
    index: "04",
    title: "Technical Maintenance",
    summary: "Preventative and corrective maintenance, minimising downtime.",
    description:
      "Dedicated on-site technical capacity ensures a prompt response to faults. Preventative maintenance runs daily; corrective maintenance is dispatched against defined uptime targets.",
    capabilities: ["Preventative maintenance plans", "Corrective repairs", "Uptime SLAs", "On-site technicians"],
  },
  {
    slug: "cctv",
    index: "05",
    title: "Incident Monitoring & Analysis",
    summary: "CCTV and drone surveillance monitored 24/7 by trained personnel.",
    description:
      "Footage from street, perimeter and aerial surveillance streams into an ergonomically designed control room, watched around the clock — including Sundays and public holidays.",
    capabilities: ["24/7 control room", "CCTV monitoring", "Drone surveillance", "Anomaly detection"],
  },
  {
    slug: "monitoring",
    index: "06",
    title: "Incident Response Unit",
    summary: "A dedicated response team attached to every monitoring contract.",
    description:
      "Confirmed incidents are dispatched immediately to an on-ground response unit, available as a stand-alone service or as a direct extension of the monitoring contract.",
    capabilities: ["Rapid dispatch", "Trained response personnel", "Guarding services", "Incident reporting"],
  },
  {
    slug: "evidence-management",
    index: "07",
    title: "Evidence Management",
    summary: "Footage reviewed and archived through a dedicated process.",
    description:
      "All footage retrieved from the control room is reviewed on an ongoing basis through a specialised evidence management and review mechanism, built for chain-of-custody integrity.",
    capabilities: ["Footage review", "Secure archiving", "Chain-of-custody handling", "Retrieval on request"],
  },
  {
    slug: "smart-city",
    index: "08",
    title: "Smart City & Operations Training",
    summary: "City-scale surveillance networks, backed by ongoing training.",
    description:
      "Beyond individual sites, we design integrated smart-city surveillance networks for municipalities — and keep every operations team current through regular incident-management training.",
    capabilities: ["Municipal network design", "Multi-site integration", "Operations training", "Standard operating procedures"],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
