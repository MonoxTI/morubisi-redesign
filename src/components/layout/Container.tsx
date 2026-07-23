import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[1180px] mx-auto px-6 md:px-8", className)}>
      {children}
    </div>
  );
}
