import { cn } from "@/lib/utils";

interface LeafBadgeProps {
  children: React.ReactNode;
  rotate?: number;
  variant?: "gold" | "green" | "cream";
  className?: string;
}

/**
 * Sticker-style seal — small rotated badge with a dashed inner ring.
 */
export const LeafBadge = ({ children, rotate = -8, variant = "gold", className }: LeafBadgeProps) => {
  const palette =
    variant === "gold"
      ? "bg-sun text-ink"
      : variant === "green"
      ? "bg-secondary text-white"
      : "bg-cream text-ink";
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2 shadow-cta",
        "font-script text-[20px] leading-none",
        palette,
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span
        className="absolute inset-1 rounded-full border border-dashed border-current opacity-40 pointer-events-none"
        aria-hidden
      />
      <span className="relative">{children}</span>
    </div>
  );
};