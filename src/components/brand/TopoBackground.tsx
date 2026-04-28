import { cn } from "@/lib/utils";

interface TopoBackgroundProps {
  className?: string;
  color?: string;
  opacity?: number;
}

export const TopoBackground = ({ className, color = "currentColor", opacity = 0.08 }: TopoBackgroundProps) => (
  <svg
    viewBox="0 0 600 600"
    preserveAspectRatio="xMidYMid slice"
    className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
    aria-hidden
    style={{ opacity }}
  >
    {Array.from({ length: 14 }).map((_, i) => (
      <path
        key={i}
        d={`M-50 ${80 + i * 38} C 120 ${60 + i * 36} 250 ${130 + i * 30} 380 ${100 + i * 34} S 620 ${80 + i * 36} 700 ${110 + i * 32}`}
        stroke={color}
        strokeWidth="1"
        fill="none"
      />
    ))}
  </svg>
);