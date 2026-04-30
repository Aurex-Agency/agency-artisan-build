import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { UtilityBar } from "./UtilityBar";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/medicare", label: "Medicare 101" },
  { to: "/medicare#advantage", label: "Medicare Advantage" },
  { to: "/medicare#supplement", label: "Medicare Supplement" },
  { to: "/retirement", label: "Retirement & Annuities" },
  { to: "/health-insurance", label: "Health & Life" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-cream-deep shadow-[0_1px_8px_-2px_hsl(218_27%_17%/0.06)]">
      <UtilityBar />
      <div className="container-wide flex items-center justify-between h-[96px] lg:h-[104px]">
        <Logo />

        <nav className="hidden xl:flex items-center gap-6" aria-label="Main">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative text-[14px] font-medium transition-colors py-2 whitespace-nowrap ${
                  isActive ? "text-primary" : "text-ink/80 hover:text-primary"
                } after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[3px] after:rounded-full after:bg-accent after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${
                  isActive ? "after:scale-x-100" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:6013972982"
            className="hidden md:flex items-center gap-2 font-bold text-primary text-[17px] hover:text-primary-dark transition-colors"
          >
            <Phone className="w-[18px] h-[18px]" aria-hidden />
            <span>(601) 397-2982</span>
          </a>
          <a
            href="tel:6013972982"
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-accent text-dark"
            aria-label="Call Wood Insurance Agency"
          >
            <Phone className="w-5 h-5" />
          </a>
          <Link
            to="/contact"
            className="hidden xl:inline-flex btn-base btn-gold !min-h-[46px] !text-[14px] !px-5"
          >
            Get a Free Quote
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-primary hover:bg-muted transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden absolute left-0 right-0 top-full bg-background border-b border-border shadow-elevated max-h-[calc(100vh-78px)] overflow-y-auto">
          <nav className="container-wide py-4 flex flex-col" aria-label="Mobile">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `min-h-[56px] flex items-center text-[18px] font-medium border-b border-border last:border-b-0 ${
                    isActive ? "text-primary" : "text-text"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-base btn-gold mt-5 w-full">
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};