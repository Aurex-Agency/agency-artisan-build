import { cn } from "@/lib/utils";

interface ScriptUnderlineProps {
  className?: string;
  color?: string;
}

export const ScriptUnderline = ({ className, color = "hsl(var(--accent))" }: ScriptUnderlineProps) => (
  <svg
    viewBox="0 0 220 22"
    preserveAspectRatio="none"
    className={cn("h-3 w-full pointer-events-none", className)}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M3 14 C 40 6, 90 4, 130 9 C 170 14, 200 12, 218 6"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);