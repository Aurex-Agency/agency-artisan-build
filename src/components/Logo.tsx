import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
  const textColor = variant === "dark" ? "text-primary" : "text-white";
  const subColor = variant === "dark" ? "text-text/70" : "text-white/70";

  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`} aria-label="Wood Insurance Agency home">
      <ShieldTreeIcon variant={variant} />
      <div className="leading-none">
        <div className={`font-display font-bold tracking-wide text-[17px] sm:text-[19px] ${textColor}`}>
          WOOD INSURANCE
        </div>
        <div className={`text-[11px] sm:text-[12px] uppercase tracking-[0.22em] mt-1 ${subColor}`}>
          Agency · Magee, MS
        </div>
      </div>
    </Link>
  );
};

const ShieldTreeIcon = ({ variant }: { variant: "dark" | "light" }) => {
  const shieldStroke = variant === "dark" ? "hsl(var(--primary))" : "white";
  const shieldFill = variant === "dark" ? "hsl(var(--primary))" : "transparent";
  const treeColor = variant === "dark" ? "hsl(var(--secondary))" : "hsl(var(--accent))";
  const trunk = variant === "dark" ? "hsl(var(--accent-dark))" : "hsl(var(--accent))";

  return (
    <svg width="44" height="50" viewBox="0 0 44 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 transition-transform group-hover:scale-105">
      <path d="M22 1L42 7V23C42 35 32 44 22 49C12 44 2 35 2 23V7L22 1Z" fill={shieldFill} fillOpacity={variant === "dark" ? "0.06" : "0"} stroke={shieldStroke} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="22" cy="20" r="9" fill={treeColor} />
      <circle cx="15" cy="22" r="6" fill={treeColor} />
      <circle cx="29" cy="22" r="6" fill={treeColor} />
      <rect x="20" y="27" width="4" height="10" rx="1" fill={trunk} />
    </svg>
  );
};