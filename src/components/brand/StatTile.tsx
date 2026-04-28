import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatTileProps {
  value: ReactNode;
  label: ReactNode;
  tone?: "cream" | "ink";
  className?: string;
}

export const StatTile = ({ value, label, tone = "cream", className }: StatTileProps) => {
  const isCream = tone === "cream";
  return (
    <div
      className={cn(
        "relative rounded-2xl border-2 p-5 lg:p-6",
        isCream ? "border-accent/60 bg-white/5 text-white" : "border-accent bg-cream text-ink",
        className,
      )}
    >
      <div className="absolute -top-3 left-5 px-2 bg-sun text-ink text-[10px] font-bold uppercase tracking-[0.18em] rounded-full">
        Wood
      </div>
      <div className="display text-[44px] sm:text-[52px] leading-none text-accent">{value}</div>
      <div className={cn("mt-2 text-[13px] uppercase tracking-[0.18em]", isCream ? "text-white/80" : "text-ink/70")}>
        {label}
      </div>
    </div>
  );
};