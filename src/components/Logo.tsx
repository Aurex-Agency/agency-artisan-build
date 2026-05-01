import { Link } from "react-router-dom";
import logoImg from "@/assets/wood-insurance-logo.png";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
  const isLight = variant === "light";
  return (
    <Link
      to="/"
      className={`inline-flex items-center group ${className}`}
      aria-label="Wood Insurance Agency home"
    >
      <img
        src={logoImg}
        alt="Wood Insurance Agency — Protecting What Matters"
        className={`h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02] ${
          isLight ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  );
};
