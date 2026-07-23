import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import { PROJECTS, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  return { title: project ? `${project.title} — Morubisi Technologies` : "Project — Morubisi Technologies" };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <section className="pt-[152px] pb-16 border-b border-line bg-grid-overlay">
        <Container>
          <div className="flex gap-2 mb-5 flex-wrap">
            <Badge>{project.sector}</Badge>
            <Badge>{project.year}</Badge>
            <Badge>{project.location}</Badge>
          </div>
          <h1 className="font-display text-[32px] md:text-[44px] font-semibold max-w-[24ch]">
            {project.title}
          </h1>
          <p className="text-steel max-w-[62ch] mt-5 text-[16px]">{project.summary}</p>
        </Container>
      </section>

      <section className="py-20 bg-surface">
        <Container className="grid md:grid-cols-[1.3fr_1fr] gap-14">
          <div>
            <div className="eyebrow mb-4">Outcome</div>
            <p className="text-paper text-lg leading-relaxed">{project.outcome}</p>
          </div>
          <div>
            <div className="eyebrow mb-4">Services delivered</div>
            <div className="flex flex-col gap-3">
              {project.services.map((s) => (
                <div key={s} className="border-t border-line pt-3 text-steel text-sm">
                  {s}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="solid">Discuss a similar project</Button>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
