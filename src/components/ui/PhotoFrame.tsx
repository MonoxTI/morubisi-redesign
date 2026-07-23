import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoFrameProps {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * Consistent treatment for real photography across the site: bordered
 * frame, corner brackets matching the hero schematic panel, and an
 * optional mono-caption HUD tag — so photos read as intentional brand
 * imagery rather than dropped-in snapshots.
 */
export default function PhotoFrame({
  src,
  alt,
  caption,
  aspect = "aspect-[4/3]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 500px",
  className,
}: PhotoFrameProps) {
  return (
    <div
      className={cn(
        "relative border border-line rounded-sm overflow-hidden bg-panel",
        aspect,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-orange" />
      <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-orange" />
      <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-orange" />
      <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-orange" />
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent pt-10 pb-3 px-4">
          <span className="font-mono text-[10px] uppercase tracking-wider text-paper">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
}
