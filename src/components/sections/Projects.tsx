import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-line bg-surface">
      <Container>
        <div className="flex flex-wrap justify-between items-end gap-10 mb-14">
          <div>
            <div className="eyebrow">Track record</div>
            <h2 className="font-display text-[28px] md:text-[36px] font-semibold mt-3 text-gray-900">
              Deployed at national scale
            </h2>
          </div>
          <Button href="/projects" className="bg-surface text-ink border border-ink hover:bg-panel transition-colors">
            View all projects
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <a key={project.slug} href={`/projects/${project.slug}`} className="block h-full">
              <Card interactive className="h-full flex flex-col">
                <div className="flex gap-2 mb-4 flex-wrap">
                  <Badge>{project.sector}</Badge>
                  <Badge>{project.year}</Badge>
                </div>
                <h3 className="font-display text-lg mb-2.5">{project.title}</h3>
                <p className="text-steel text-[13.5px] mb-4">{project.summary}</p>
                <div className="mt-auto font-mono text-[11px] uppercase tracking-wider text-steel">
                  {project.location}
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
