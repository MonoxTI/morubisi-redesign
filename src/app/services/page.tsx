import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import CTA from "@/components/sections/CTA";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services — " + SITE.name,
  description: "Eight integrated surveillance infrastructure disciplines, from design through evidence management.",
};

const DEEP_DIVE_SLUGS: Record<string, string> = {
  cctv: "/services/cctv",
  monitoring: "/services/monitoring",
  "smart-city": "/services/smart-city",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-[152px] pb-16 border-b border-line bg-grid-overlay">
        <Container>
          <div className="eyebrow">Services</div>
          <h1 className="font-display text-[36px] md:text-[48px] font-semibold mt-4 max-w-[20ch]">
            One integrated pipeline, eight disciplines
          </h1>
          <p className="text-steel max-w-[62ch] mt-5 text-[16px]">
            From the first schematic to the last piece of archived footage,
            every engagement is delivered end-to-end by the same team, so
            accountability never gets lost between contractors.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-surface">
        <Container className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service) => {
            const href = DEEP_DIVE_SLUGS[service.slug];
            return (
              <Card key={service.slug} interactive={!!href}>
                <div className="font-mono text-orange text-xs">{service.index}</div>
                <h2 className="font-display text-xl mt-3.5 mb-3">{service.title}</h2>
                <p className="text-steel text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.capabilities.map((c) => (
                    <span
                      key={c}
                      className="font-mono text-[10.5px] uppercase tracking-wider text-steel border border-line px-2.5 py-1 rounded-sm"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                {href && (
                  <a href={href} className="text-orange text-sm font-medium hover:underline">
                    View service detail →
                  </a>
                )}
              </Card>
            );
          })}
        </Container>
      </section>

      <CTA />
    </>
  );
}
