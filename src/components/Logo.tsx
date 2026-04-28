import { Link } from "react-router-dom";
import logoSrc from "@/assets/logo.png";

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
      <span
        className={
          isLight
            ? "inline-flex items-center rounded-md bg-white px-3 py-2 shadow-sm"
            : "inline-flex items-center"
        }
      >
        <img
          src={logoSrc}
          alt="Wood Insurance Agency — Protecting What Matters"
          className="h-16 sm:h-20 lg:h-24 w-auto transition-transform group-hover:scale-[1.02]"
          loading="eager"
          decoding="async"
        />
      </span>
    </Link>
  );
};