import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import PhotoFrame from "@/components/ui/PhotoFrame";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About — " + SITE.name,
  description: "Established in 2003, Morubisi leads South Africa's street surveillance market.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-[152px] pb-20 border-b border-line bg-grid-overlay">
        <Container className="grid md:grid-cols-[1.3fr_0.7fr] gap-14 items-center">
          <div>
            <div className="eyebrow">About Morubisi</div>
            <h1 className="font-display text-[36px] md:text-[48px] font-semibold mt-4 max-w-[18ch]">
              Built to lead South Africa&rsquo;s surveillance industry
            </h1>
            <p className="text-steel max-w-[62ch] mt-5 text-[16px]">
              Morubisi was established in {SITE.founded} to build a market leader in
              surveillance. That vision now stands as one of the largest players
              in South Africa&rsquo;s street surveillance market, combining
              skilled people with cutting-edge technology to prevent and fight
              crime.
            </p>
          </div>
          <PhotoFrame
            src="/images/services/field-team.jpg"
            alt="Morubisi field technical team"
            caption="Field Technical Team"
            aspect="aspect-[3/4]"
            className="max-w-[260px] mx-auto w-full"
            priority
          />
        </Container>
      </section>

      <Stats />

      <section className="py-24 border-t border-line">
        <Container className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="eyebrow">Vision</div>
            <p className="text-paper text-lg mt-4 max-w-[48ch]">
              To be the leading provider of surveillance solutions in South
              Africa, and to access and conquer international markets, 
              becoming one of the world&rsquo;s key players in the surveillance
              industry.
            </p>
          </div>
          <div className="flex flex-col gap-0">
            <div className="border-t border-line pt-6 pb-6">
              <div className="font-mono text-[11px] uppercase tracking-wider text-orange mb-2">
                Mission
              </div>
              <ul className="text-steel text-[14.5px] space-y-2 list-disc pl-5">
                <li>Exceptional service through human capital development and advanced technology.</li>
                <li>A client-first, integrated business model that raises the success rate in the fight against crime.</li>
                <li>Continuous research into new technology suited to specialised market needs.</li>
                <li>New networks and international connections through deliberate, world-class marketing.</li>
              </ul>
            </div>
            <div className="border-t border-line pt-6">
              <div className="font-mono text-[11px] uppercase tracking-wider text-orange mb-2">
                Values
              </div>
              <p className="text-steel text-[14.5px]">
                Delivery, integrity, honesty, loyalty, commitment, fairness,
                and fun. We hold to equal opportunity and human capital
                development, giving our people room to grow, because skilled,
                empowered teams are what make the technology work.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 border-t border-line bg-surface">
        <Container>
          <div className="eyebrow mb-10">On the ground</div>
          <div className="grid md:grid-cols-2 gap-6">
            <PhotoFrame
              src="/images/services/response-fleet.jpg"
              alt="Morubisi branded response vehicles"
              caption="Response Fleet"
              aspect="aspect-[4/3]"
            />
            <PhotoFrame
              src="/images/services/cctv-camera.jpg"
              alt="CCTV dome camera installed by Morubisi"
              caption="Field Equipment"
              aspect="aspect-[4/3]"
            />
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
