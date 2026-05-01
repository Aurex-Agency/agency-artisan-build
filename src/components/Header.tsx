import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { UtilityBar } from "./UtilityBar";

const NAV = [
  { to: "/medicare", label: "Medicare" },
  { to: "/retirement", label: "Retirement Planning" },
  { to: "/health-insurance", label: "Health Insurance" },
  { to: "/life-insurance", label: "Life Insurance" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-soft">
      <UtilityBar />
      <div className="container-wide flex items-center justify-between h-[78px]">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7" aria-label="Main">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-[15px] font-medium transition-colors ${
                  isActive ? "text-primary" : "text-ink/75 hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden sm:inline-flex btn-base btn-navy !min-h-[44px] !text-[14px] !px-5">
            Get Quote
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-primary hover:bg-muted transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden absolute left-0 right-0 top-full bg-white border-b border-border shadow-float max-h-[calc(100vh-120px)] overflow-y-auto">
          <nav className="container-wide py-4 flex flex-col" aria-label="Mobile">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `min-h-[52px] flex items-center text-[16px] font-medium border-b border-border last:border-b-0 ${
                    isActive ? "text-primary" : "text-ink"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-base btn-navy mt-5 w-full">Get Quote</Link>
          </nav>
        </div>
      )}
    </header>
  );
};
