import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

interface CTASectionProps {
  variant?: "gold" | "navy";
  eyebrow?: string;
  headline: string;
  body: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export const CTASection = ({
  variant = "gold",
  eyebrow,
  headline,
  body,
  primaryLabel = "Call (601) 439-7230",
  secondaryLabel = "Request a Consultation",
}: CTASectionProps) => {
  const isGold = variant === "gold";
  return (
    <section className={isGold ? "bg-accent" : "bg-primary"}>
      <div className="container-wide py-20 lg:py-24 text-center">
        {eyebrow && (
          <span className={`eyebrow ${isGold ? "!text-primary-dark" : "eyebrow-gold"}`}>{eyebrow}</span>
        )}
        <h2 className={`mt-4 text-[34px] sm:text-[40px] lg:text-[44px] ${isGold ? "text-dark" : "text-white"} max-w-3xl mx-auto`}>
          {headline}
        </h2>
        <p className={`mt-5 text-[18px] lg:text-[19px] max-w-2xl mx-auto ${isGold ? "text-dark/85" : "text-white/90"}`}>
          {body}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:6014397230" className={`btn-base ${isGold ? "btn-navy" : "btn-gold"}`}>
            <Phone className="w-5 h-5" /> {primaryLabel}
          </a>
          <Link to="/contact" className={`btn-base ${isGold ? "btn-outline-dark" : "btn-outline-white"}`}>
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};