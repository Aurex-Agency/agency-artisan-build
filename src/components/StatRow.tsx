interface Stat {
  value: string;
  label: string;
}

interface StatRowProps {
  stats: Stat[];
  variant?: "light" | "dark";
}

export const StatRow = ({ stats, variant = "light" }: StatRowProps) => {
  const isDark = variant === "dark";
  return (
    <div className={`grid grid-cols-3 gap-4 sm:gap-8 ${isDark ? "text-white" : "text-ink"}`}>
      {stats.map((s) => (
        <div key={s.label} className="text-center sm:text-left">
          <div className={`text-[28px] sm:text-[36px] font-bold leading-none ${isDark ? "text-accent" : "text-primary"}`}>
            {s.value}
          </div>
          <div className={`mt-2 text-[12px] sm:text-[13px] uppercase tracking-wider ${isDark ? "text-white/75" : "text-muted-foreground"}`}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
};
