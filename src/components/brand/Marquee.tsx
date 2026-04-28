import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: number;
}

export const Marquee = ({ items, className, speed = 36 }: MarqueeProps) => {
  const stream = [...items, ...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {stream.map((it, i) => (
          <span key={i} className="flex items-center gap-12 text-[18px] tracking-wide font-display italic text-primary/80">
            <span>{it}</span>
            <Leaf />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};

const Leaf = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden className="shrink-0">
    <path d="M2 7 Q8 -2 18 4 Q12 12 2 7 Z" fill="hsl(var(--accent))" />
    <path d="M2 7 Q10 5 18 4" stroke="hsl(var(--accent-dark))" strokeWidth="0.8" fill="none" />
  </svg>
);