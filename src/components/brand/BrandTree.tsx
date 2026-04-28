import { cn } from "@/lib/utils";

interface BrandTreeProps {
  variant?: "full" | "branch" | "roots" | "badge";
  className?: string;
  glow?: boolean;
}

/**
 * Stylized tree-of-life motif inspired by the agency logo.
 * Pure SVG, recolorable via currentColor + brand tokens.
 */
export const BrandTree = ({ variant = "full", className, glow }: BrandTreeProps) => {
  if (variant === "badge") {
    return (
      <svg viewBox="0 0 80 80" className={cn("text-secondary", className)} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.5" />
        <Canopy />
        <Trunk />
      </svg>
    );
  }

  if (variant === "branch") {
    return (
      <svg viewBox="0 0 200 80" className={cn(className)} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M2 60 Q60 60 100 38 Q140 16 198 12" stroke="hsl(var(--secondary-deep))" strokeWidth="2" strokeLinecap="round" />
        <Leaf x={50} y={48} rotate={-12} />
        <Leaf x={100} y={28} rotate={8} />
        <Leaf x={150} y={18} rotate={-4} />
      </svg>
    );
  }

  if (variant === "roots") {
    return (
      <svg viewBox="0 0 240 160" className={cn(className)} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M120 0 V60" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" />
        <path d="M120 60 Q90 90 50 130" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        <path d="M120 60 Q150 90 190 130" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        <path d="M120 60 Q120 100 120 150" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        <path d="M50 130 Q40 145 28 150" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M190 130 Q200 145 212 150" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    );
  }

  // full
  return (
    <svg viewBox="0 0 320 380" className={cn(className)} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {glow && (
        <defs>
          <radialGradient id="treeGlow" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="hsl(42 95% 70%)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="hsl(42 95% 70%)" stopOpacity="0" />
          </radialGradient>
        </defs>
      )}
      {glow && <circle cx="160" cy="150" r="160" fill="url(#treeGlow)" />}
      {/* Canopy clusters */}
      <g transform="translate(160 150)">
        <Cluster cx={0} cy={-40} r={62} />
        <Cluster cx={-70} cy={0} r={50} />
        <Cluster cx={70} cy={0} r={50} />
        <Cluster cx={-30} cy={-70} r={42} />
        <Cluster cx={40} cy={-70} r={42} />
        <Cluster cx={-95} cy={-30} r={38} />
        <Cluster cx={95} cy={-30} r={38} />
      </g>
      {/* Trunk */}
      <path
        d="M160 220 C 156 240 154 270 160 320 C 166 350 158 365 145 378 M160 220 C 164 240 166 270 160 320 C 154 350 162 365 175 378"
        stroke="hsl(var(--accent-dark))"
        strokeWidth="6"
        strokeLinecap="round"
        fill="hsl(var(--accent) / 0.12)"
      />
      {/* Roots */}
      <path d="M150 360 Q130 370 110 376" stroke="hsl(var(--accent-dark))" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M170 360 Q190 370 210 376" stroke="hsl(var(--accent-dark))" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
};

const Cluster = ({ cx, cy, r }: { cx: number; cy: number; r: number }) => (
  <g>
    <circle cx={cx} cy={cy} r={r} fill="hsl(var(--secondary))" opacity="0.92" />
    <circle cx={cx - r * 0.35} cy={cy + r * 0.25} r={r * 0.55} fill="hsl(var(--secondary-deep))" opacity="0.8" />
    <circle cx={cx + r * 0.4} cy={cy - r * 0.2} r={r * 0.5} fill="hsl(130 55% 55%)" opacity="0.7" />
  </g>
);

const Canopy = () => (
  <g transform="translate(40 32)">
    <circle cx="0" cy="-8" r="14" fill="currentColor" />
    <circle cx="-12" cy="0" r="10" fill="currentColor" opacity="0.85" />
    <circle cx="12" cy="0" r="10" fill="currentColor" opacity="0.85" />
  </g>
);

const Trunk = () => (
  <rect x="38" y="48" width="4" height="20" rx="1" fill="hsl(var(--accent-dark))" />
);

const Leaf = ({ x, y, rotate = 0 }: { x: number; y: number; rotate?: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
    <path d="M-9 0 Q-4 -10 9 -3 Q4 7 -9 0 Z" fill="hsl(var(--secondary))" />
    <path d="M-9 0 Q0 -3 9 -3" stroke="hsl(var(--secondary-deep))" strokeWidth="0.8" fill="none" />
  </g>
);