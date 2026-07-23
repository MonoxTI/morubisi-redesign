import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import ContactForm from "./ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — " + SITE.name,
  description: "Request a site assessment from Morubisi Technologies.",
};

export default function ContactPage() {
  return (
    <section className="pt-[152px] pb-24">
      <Container className="grid md:grid-cols-2 gap-16">
        <div>
          <div className="eyebrow">Get in touch</div>
          <h1 className="font-display text-[34px] md:text-[44px] font-semibold mt-4">
            Request a site assessment
          </h1>
          <p className="text-steel max-w-[52ch] mt-5 text-[16px]">
            Tell us about the site and current infrastructure, our technical
            design team will follow up to scope a system.
          </p>

          <div className="flex flex-col gap-0 mt-10">
            {[
              { t: "Phone", d: SITE.phone },
              { t: "Email", d: SITE.email },
              { t: "Office", d: SITE.address },
              { t: "Office Hours", d: SITE.hours },
            ].map((row) => (
              <div key={row.t} className="border-t border-line py-5 first:border-t-0">
                <div className="font-mono text-[11px] uppercase tracking-wider text-orange mb-1">
                  {row.t}
                </div>
                <div className="text-paper text-sm">{row.d}</div>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
