import { cn } from "@/lib/utils";

export const LeafBullet = ({ className, color }: { className?: string; color?: string }) => (
  <svg
    viewBox="0 0 22 18"
    className={cn("inline-block shrink-0", className)}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M2 9 Q9 -2 20 4 Q14 14 2 9 Z" fill={color ?? "hsl(var(--secondary))"} />
    <path d="M2 9 Q11 6 20 4" stroke="hsl(var(--secondary-deep))" strokeWidth="0.9" fill="none" />
  </svg>
);