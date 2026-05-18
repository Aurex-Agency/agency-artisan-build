import { Link } from "react-router-dom";
import logoImg from "@/assets/wood-insurance-logo.png";
import logoLightImg from "@/assets/wood-insurance-logo-light.png";

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
        src={isLight ? logoLightImg : logoImg}
        alt="Wood Insurance Agency — Protecting What Matters"
        className="h-14 sm:h-16 lg:h-[72px] w-auto object-contain transition-transform group-hover:scale-[1.02]"
      />
    </Link>
  );
};
