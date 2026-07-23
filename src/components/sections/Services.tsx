import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/data/services";

const DEEP_DIVE_SLUGS: Record<string, string> = {
  cctv: "/services/cctv",
  monitoring: "/services/monitoring",
  "smart-city": "/services/smart-city",
};

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-line bg-surface">
      <Container>
        <div className="flex flex-wrap justify-between items-end gap-10 mb-14">
          <div>
            <div className="eyebrow text-bg-orange-soft">What we do</div>
            <h2 className="font-display text-[28px] md:text-[36px] font-semibold mt-3 text-gray-900">
              Eight disciplines, one system
            </h2>
            <p className=" max-w-[56ch] mt-2.5 text-gray-900">
              Every engagement runs the same integrated pipeline — from initial
              design through to evidence review — so accountability never gets
              lost between contractors.
            </p>
          </div>
          <Button href="/services" className="bg-surface text-ink border border-ink hover:bg-panel transition-colors">
            View all services
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {SERVICES.map((service) => {
            const href = DEEP_DIVE_SLUGS[service.slug];
            const CardInner = (
              <Card interactive className="h-full">
                <div className="font-mono text-orange text-xs">{service.index}</div>
                <h3 className="font-display text-[16.5px] mt-3.5 mb-2.5">{service.title}</h3>
                <p className="text-steel text-[13.5px]">{service.summary}</p>
              </Card>
            );
            return href ? (
              <a key={service.slug} href={href} className="block h-full">
                {CardInner}
              </a>
            ) : (
              <div key={service.slug}>{CardInner}</div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
