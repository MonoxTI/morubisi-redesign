"use client";

interface DataPoint {
  label: string;
  value: number;
}

/**
 * Minimal SVG bar chart, no chart library dependency.
 * Swap for Recharts/D3 if richer interactivity is needed later.
 */
export default function StatsChart({ data }: { data: DataPoint[] }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  const barWidth = 100 / data.length;

  return (
    <svg viewBox="0 0 100 50" className="w-full h-40" preserveAspectRatio="none">
      {data.map((d, i) => {
        const height = (d.value / max) * 44;
        return (
          <rect
            key={d.label}
            x={i * barWidth + barWidth * 0.2}
            y={48 - height}
            width={barWidth * 0.6}
            height={height}
            fill="#FF5A1F"
            opacity={0.85}
          />
        );
      })}
      <line x1="0" y1="48" x2="100" y2="48" stroke="var(--scope-line)" strokeWidth="0.3" />
    </svg>
  );
}
