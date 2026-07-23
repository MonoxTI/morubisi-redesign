import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-[10.5px] uppercase tracking-wider text-steel border border-line px-2.5 py-1 rounded-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
