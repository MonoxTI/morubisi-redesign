import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CoverageMap from "@/components/maps/CoverageMap";
import CTA from "@/components/sections/CTA";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects — " + SITE.name,
  description: "Selected surveillance infrastructure deployments across South Africa.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-[152px] pb-16 border-b border-line bg-grid-overlay">
        <Container>
          <div className="eyebrow">Track record</div>
          <h1 className="font-display text-[36px] md:text-[48px] font-semibold mt-4 max-w-[20ch]">
            Deployed at national scale
          </h1>
          <p className="text-steel max-w-[62ch] mt-5 text-[16px]">
            By far the largest share of South Africa&rsquo;s street surveillance
            market, a selection of the infrastructure we&rsquo;ve designed,
            installed and now operate.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-surface">
        <Container className="grid lg:grid-cols-[1.6fr_1fr] gap-10 items-start">
          <div className="grid sm:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <a key={project.slug} href={`/projects/${project.slug}`} className="block h-full">
                <Card interactive className="h-full flex flex-col">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <Badge>{project.sector}</Badge>
                    <Badge>{project.year}</Badge>
                  </div>
                  <h2 className="font-display text-lg mb-2.5">{project.title}</h2>
                  <p className="text-steel text-[13.5px] mb-4">{project.summary}</p>
                  <div className="mt-auto font-mono text-[11px] uppercase tracking-wider text-steel">
                    {project.location}
                  </div>
                </Card>
              </a>
            ))}
          </div>
          <CoverageMap />
        </Container>
      </section>

      <CTA />
    </>
  );
}
