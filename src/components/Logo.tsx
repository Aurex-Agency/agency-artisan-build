import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-primary";
  const accentColor = isLight ? "text-white/80" : "text-accent";

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group ${className}`}
      aria-label="Wood Insurance Agency home"
    >
      <span
        className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${
          isLight ? "bg-white/10" : "bg-primary"
        } transition-transform group-hover:scale-105`}
      >
        <ShieldCheck className={`w-6 h-6 ${isLight ? "text-white" : "text-accent"}`} aria-hidden />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-bold text-[18px] sm:text-[19px] tracking-tight ${textColor}`}>
          Wood Insurance
        </span>
        <span className={`text-[11px] uppercase tracking-[0.18em] font-semibold ${accentColor}`}>
          Agency
        </span>
      </span>
    </Link>
  );
};
