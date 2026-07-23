"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { STATS } from "@/data/stats";

export default function Hero() {
  const [time, setTime] = useState("00:00:00 SAST");

  useEffect(() => {
    function tick() {
      const utc = new Date(new Date().toUTCString());
      utc.setHours(utc.getHours() + 2);
      const h = String(utc.getHours()).padStart(2, "0");
      const m = String(utc.getMinutes()).padStart(2, "0");
      const s = String(utc.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s} SAST`);
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="pt-[168px] pb-24 bg-grid-overlay">
      <Container className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="eyebrow">Surveillance Infrastructure Specialists</div>
          <h1 className="font-display text-[38px] md:text-[54px] leading-[1.08] font-semibold mt-4 mb-6">
            Command-grade security<br />
            technology, <span className="text-orange">deployed nationally.</span>
          </h1>
          <p className="text-steel max-w-[52ch] mb-8 text-[16px]">
            Morubisi designs, installs and operates surveillance infrastructure for
            municipalities, ports, borders and corporate sites across South Africa 
            backed by a 24/7 control room and a dedicated response unit.
          </p>
          <div className="flex flex-wrap gap-3.5 mb-11">
            <Button href="/contact" variant="solid">
              Request a system assessment
            </Button>
            <Button href="tel:+27123229200" variant="ghost">
              Call +27 (0)12 322 9200
            </Button>
          </div>
          <div className="grid grid-cols-3 border-t border-line">
            {STATS.slice(0, 3).map((stat) => (
              <div key={stat.label} className="border-r border-line last:border-r-0 pt-4 pr-4">
                <div className="font-mono text-[22px] font-medium">{stat.value}</div>
                <div className="text-[11.5px] uppercase tracking-wider text-steel mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal in relative aspect-square border border-line bg-panel overflow-hidden rounded-sm">
          <Corner className="top-0 left-0 border-t border-l" />
          <Corner className="top-0 right-0 border-t border-r" />
          <Corner className="bottom-0 left-0 border-b border-l" />
          <Corner className="bottom-0 right-0 border-b border-r" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[140%] h-[140%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,rgba(255,90,31,0)_0deg,rgba(255,90,31,0.18)_26deg,rgba(255,90,31,0)_46deg)]" />
          </div>

          <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
            <line x1="80" y1="90" x2="200" y2="200" stroke="var(--scope-line)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="320" y1="80" x2="200" y2="200" stroke="var(--scope-line)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="90" y1="320" x2="200" y2="200" stroke="var(--scope-line)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="320" y1="320" x2="200" y2="200" stroke="var(--scope-line)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="7" fill="#FF5A1F" />
            <circle cx="200" cy="200" r="16" fill="none" stroke="#FF5A1F" strokeWidth="1" opacity="0.5" />
            <text x="212" y="196" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--steel)">CONTROL ROOM</text>

            <circle cx="80" cy="90" r="4.5" fill="var(--paper)" />
            <text x="20" y="76" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--steel)">CCTV NODE 01</text>
            <circle cx="320" cy="80" r="4.5" fill="var(--paper)" />
            <text x="272" y="66" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--steel)">DRONE UNIT</text>
            <circle cx="90" cy="320" r="4.5" fill="var(--paper)" />
            <text x="24" y="344" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--steel)">RESPONSE UNIT</text>
            <circle cx="320" cy="320" r="4.5" fill="var(--paper)" />
            <text x="268" y="344" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--steel)">EVIDENCE ARCHIVE</text>
          </svg>

          <div className="absolute inset-0 p-4 flex flex-col justify-between font-mono text-[10.5px] text-steel pointer-events-none">
            <div className="flex justify-between">
              <span className="flex items-center gap-1.5 text-orange">
                <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" /> LIVE
              </span>
              <span>{time}</span>
            </div>
            <div className="flex justify-between">
              <span>SITE: IRENE, ROUTE 21</span>
              <span>25.86°S 28.22°E</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Corner({ className }: { className: string }) {
  return (
    <span
      className={`absolute w-5 h-5 border-orange z-10 ${className}`}
      style={{ borderWidth: "2px" }}
    />
  );
}
