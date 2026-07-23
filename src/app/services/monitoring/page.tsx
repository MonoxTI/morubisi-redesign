import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PhotoFrame from "@/components/ui/PhotoFrame";
import CTA from "@/components/sections/CTA";
import { getServiceBySlug } from "@/data/services";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Detail — " + SITE.name,
};

export default function ServiceDetailPage() {
  const service = getServiceBySlug("monitoring");
  if (!service) return null;

  return (
    <>
      <section className="pt-[152px] pb-16 border-b border-line bg-grid-overlay">
        <Container className="grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
          <div>
            <div className="eyebrow">Service {service.index}</div>
            <h1 className="font-display text-[34px] md:text-[46px] font-semibold mt-4 max-w-[20ch]">
              {service.title}
            </h1>
            <p className="text-steel max-w-[62ch] mt-5 text-[16px]">{service.description}</p>
            <div className="mt-8">
              <Button href="/contact" variant="solid">Request this service</Button>
            </div>
          </div>
          <PhotoFrame
            src="/images/services/response-fleet.jpg"
            alt="Morubisi branded response fleet vehicles"
            caption="Response Fleet — Rapid Dispatch"
            aspect="aspect-[4/3]"
            priority
          />
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
