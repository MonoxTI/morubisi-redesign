"use client";

import { COVERAGE_REGIONS } from "@/data/stats";

/**
 * Lightweight, dependency-free coverage indicator.
 * Swap for a real map library (e.g. Mapbox/Leaflet) by wiring
 * COVERAGE_REGIONS coordinates into your provider of choice.
 */
export default function CoverageMap() {
  return (
    <div className="border border-line bg-panel p-8 rounded-sm">
      <div className="font-mono text-[11px] uppercase tracking-wider text-steel mb-6">
        National coverage
      </div>
      <div className="flex flex-col gap-4">
        {COVERAGE_REGIONS.map((region) => (
          <div key={region.name} className="flex items-center justify-between gap-4">
            <span className="text-sm text-paper">{region.name}</span>
            <div className="flex-1 h-1.5 bg-ink rounded-sm overflow-hidden mx-4">
              <div
                className="h-full bg-orange"
                style={{ width: region.intensity === "high" ? "85%" : "50%" }}
              />
            </div>
            <span className="font-mono text-[10.5px] uppercase text-steel w-14 text-right">
              {region.intensity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
