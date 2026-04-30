import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export const UtilityBar = () => {
  return (
    <div className="bg-primary-dark text-white text-[13px]">
      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 py-2">
        <a
          href="tel:6013972982"
          className="flex items-center gap-2 hover:text-accent transition-colors text-center sm:text-left"
        >
          <Phone className="w-3.5 h-3.5 text-accent" aria-hidden />
          <span>
            Speak to a licensed agent M-F 9AM to 5PM:{" "}
            <span className="font-semibold">(601) 397-2982</span>
          </span>
        </a>
        <nav className="flex items-center gap-5 font-semibold uppercase tracking-[0.14em] text-[11px]" aria-label="Utility">
          <Link to="/contact" className="text-accent hover:text-white transition-colors">
            Get A Medicare Quote
          </Link>
          <span aria-hidden className="text-white/30">|</span>
          <Link to="/medicare" className="text-accent hover:text-white transition-colors">
            Medicare 101
          </Link>
        </nav>
      </div>
    </div>
  );
};