import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import { getServiceBySlug } from "@/data/services";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Detail — " + SITE.name,
};

export default function ServiceDetailPage() {
  const service = getServiceBySlug("smart-city");
  if (!service) return null;

  return (
    <>
      <section className="pt-[152px] pb-16 border-b border-line bg-grid-overlay">
        <Container>
          <div className="eyebrow">Service {service.index}</div>
          <h1 className="font-display text-[34px] md:text-[46px] font-semibold mt-4 max-w-[20ch]">
            {service.title}
          </h1>
          <p className="text-steel max-w-[62ch] mt-5 text-[16px]">{service.description}</p>
          <div className="mt-8">
            <Button href="/contact" variant="solid">Request this service</Button>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-surface">
        <Container>
          <div className="eyebrow mb-6">Capabilities</div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line">
            {service.capabilities.map((c) => (
              <div key={c} className="bg-ink p-6">
                <p className="text-paper text-sm">{c}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
