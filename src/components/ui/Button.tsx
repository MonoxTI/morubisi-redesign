import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "solid" | "outline" | "ghost";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  onClick,
  type = "button",
  variant = "solid",
  children,
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-mono text-[12.5px] uppercase tracking-wider px-5 py-3 rounded-sm border transition-colors whitespace-nowrap";

  const variants: Record<string, string> = {
    solid: "bg-orange border-orange text-ink hover:bg-transparent hover:text-orange",
    outline: "bg-transparent border-orange text-orange hover:bg-orange hover:text-ink",
    ghost: "bg-transparent border-line text-paper hover:border-orange hover:text-orange",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
