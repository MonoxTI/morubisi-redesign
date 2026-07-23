import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PhotoFrame from "@/components/ui/PhotoFrame";
import { SITE } from "@/lib/constants";

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 border-t border-line">
      <Container className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <div className="eyebrow">Since {SITE.founded}</div>
          <h2 className="font-display text-[28px] md:text-[34px] font-semibold mt-4 leading-tight">
            Built to lead South Africa&rsquo;s street surveillance market
          </h2>
          <p className="text-steel mt-4 max-w-[56ch]">
            Morubisi was established to build a market leader in surveillance.
            That work has grown from street-level CCTV into turnkey security
            infrastructure for municipal, corporate and national clients, with
            more than 350 people now delivering it every day.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              Read our full story
            </Button>
          </div>
          <PhotoFrame
            src="/images/services/control-room.jpg"
            alt="Morubisi 24/7 control room operators"
            caption="Control Room — Irene, Gauteng"
            aspect="aspect-[16/9]"
            className="mt-10"
          />
        </div>

        <div className="flex flex-col gap-0">
          {[
            {
              t: "Vision",
              d: "To be the leading provider of surveillance solutions in South Africa, and a recognised player internationally.",
            },
            {
              t: "Mission",
              d: "A client-first, integrated model, backed by continuous investment in people and technology, that raises the success rate in the fight against crime.",
            },
            {
              t: "Values",
              d: "Delivery, integrity, honesty, loyalty, commitment, fairness, and fun. Skilled, empowered teams are what make the technology work.",
            },
          ].map((pillar) => (
            <div key={pillar.t} className="border-t border-line py-6 first:pt-0">
              <div className="font-mono text-[11px] uppercase tracking-wider text-orange mb-2">
                {pillar.t}
              </div>
              <p className="text-steel text-[14.5px]">{pillar.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
