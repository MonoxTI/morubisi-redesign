import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  interactive = false,
}: {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative bg-ink border border-line p-7",
        interactive && "transition-colors hover:bg-panel group",
        className
      )}
    >
      {interactive && (
        <span className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-orange/0 group-hover:border-orange/60 transition-colors" />
      )}
      {children}
    </div>
  );
}
