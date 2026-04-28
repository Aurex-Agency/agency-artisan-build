import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PolaroidProps {
  src?: string;
  alt?: string;
  caption?: ReactNode;
  rotate?: number;
  tape?: boolean;
  className?: string;
  children?: ReactNode;
}

/**
 * Polaroid frame — image OR arbitrary children inside the photo area,
 * handwritten caption underneath. Slight rotation by default.
 */
export const Polaroid = ({ src, alt, caption, rotate = -2, tape = true, className, children }: PolaroidProps) => {
  return (
    <figure
      className={cn(
        "relative bg-white rounded-sm shadow-polaroid p-3 pb-4 transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {tape && (
        <span
          aria-hidden
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-accent/60 rounded-sm shadow-sm"
          style={{ transform: "translateX(-50%) rotate(-3deg)" }}
        />
      )}
      <div className="relative bg-cream-deep overflow-hidden aspect-[4/5]">
        {src ? (
          <img src={src} alt={alt ?? ""} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        ) : (
          children
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 px-1 text-center font-script text-ink text-[20px] leading-tight">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};