import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-24 border-t border-line">
      <Container>
        <div className="border border-line bg-panel p-10 md:p-14 flex flex-wrap items-center justify-between gap-8 rounded-sm shadow-sm">
          <div>
            <div className="eyebrow">Track record</div>
            <h2 className="font-display text-2xl md:text-[30px] font-semibold mt-3 max-w-[20ch]">
              By far the largest share of South Africa&rsquo;s street surveillance market.
            </h2>
          </div>
          <Button href="/contact" variant="solid">
            Talk to our technical team
          </Button>
        </div>
      </Container>
    </section>
  );
}
