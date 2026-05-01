import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-wide py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-white/75 text-[14px] leading-[1.7]">
            Expert independent advisors specializing in Medicare, retirement planning, health, and life insurance. Your trusted partner for protecting your health and financial future.
          </p>
        </div>

        <div>
          <h3 className="text-white text-[15px] font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2.5 text-white/75 text-[14px]">
            <li><Link to="/medicare" className="hover:text-accent transition-colors">Medicare</Link></li>
            <li><Link to="/retirement" className="hover:text-accent transition-colors">Retirement Planning</Link></li>
            <li><Link to="/health-insurance" className="hover:text-accent transition-colors">Health Insurance</Link></li>
            <li><Link to="/life-insurance" className="hover:text-accent transition-colors">Life Insurance</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-[15px] font-semibold mb-4">Company</h3>
          <ul className="space-y-2.5 text-white/75 text-[14px]">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-[15px] font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-white/75 text-[14px]">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden />
              <span>398 Simpson Hwy 149, Ste A<br />Magee, MS 39111</span>
            </li>
            <li>
              <a href="tel:6014397230" className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" aria-hidden />
                <span>(601) 439-7230</span>
              </a>
            </li>
            <li>
              <a href="mailto:cwood@woodinsurance.agency" className="flex items-center gap-2.5 hover:text-accent transition-colors break-all">
                <Mail className="w-4 h-4 text-accent shrink-0" aria-hidden />
                <span>cwood@woodinsurance.agency</span>
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-accent" aria-hidden />
              <span>Mon-Fri 9AM-5PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-5 text-center text-[13px] text-white/60">
          © 2026 Wood Insurance Agency. Licensed in MS, AL, TN, and LA. Not affiliated with or endorsed by the U.S. government.
        </div>
      </div>
    </footer>
  );
};
