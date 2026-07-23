export interface Stat {
  label: string;
  value: string;
}

export const STATS: Stat[] = [
  { label: "Operating since", value: "2003" },
  { label: "Personnel employed", value: "350+" },
  { label: "Control room coverage", value: "24/7" },
  { label: "Core service lines", value: "08" },
];

export const COVERAGE_REGIONS = [
  { name: "Gauteng", intensity: "high" as const },
  { name: "Western Cape", intensity: "medium" as const },
  { name: "KwaZulu-Natal", intensity: "medium" as const },
  { name: "Border posts (national)", intensity: "high" as const },
];
