import Container from "@/components/layout/Container";
import { STATS } from "@/data/stats";

export default function Stats() {
  return (
    <section className="py-20 border-t border-line bg-surface">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-t border-line pt-5">
              <div className="font-display text-4xl font-bold text-orange">{stat.value}</div>
              <div className="text-gray-900 text-[12.5px] mt-1.5 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
