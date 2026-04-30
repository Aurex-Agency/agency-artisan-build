import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { MapPin, Phone, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-canopy text-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 leaf-pattern opacity-25 pointer-events-none" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
      <div className="relative">
      <div className="container-wide py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Logo variant="light" />
          <div className="mt-6 space-y-3 text-white/85">
            <p className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" aria-hidden />
              <span>398 Simpson Hwy 149, Ste A<br />Magee, MS 39111</span>
            </p>
            <p>
              <a href="tel:6013972982" className="inline-flex items-center gap-3 hover:text-accent transition-colors">
                <Phone className="w-5 h-5 text-accent" aria-hidden />
                <span className="font-semibold">(601) 397-2982</span>
              </a>
            </p>
          </div>
          <p className="mt-6 text-sm text-white/60 italic">Licensed Independent Insurance Agent.</p>
        </div>

        <div>
          <h2 className="text-accent text-sm uppercase tracking-[0.18em] font-semibold mb-5">Quick Links</h2>
          <ul className="space-y-3 text-white/85">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/medicare" className="hover:text-accent transition-colors">Medicare</Link></li>
            <li><Link to="/health-insurance" className="hover:text-accent transition-colors">Health Insurance</Link></li>
            <li><Link to="/life-insurance" className="hover:text-accent transition-colors">Life Insurance</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>

          <h2 className="text-accent text-sm uppercase tracking-[0.18em] font-semibold mt-8 mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4" aria-hidden /> Office Hours
          </h2>
          <p className="text-white/85">Mon - Fri: 9:00 AM - 5:00 PM</p>
          <p className="text-white/60">Sat - Sun: Closed</p>
        </div>

        <div>
          <h2 className="text-accent text-sm uppercase tracking-[0.18em] font-semibold mb-5">Proudly Serving</h2>
          <p className="text-white/85 leading-[1.7]">
            Proudly serving clients across Mississippi, Alabama, Tennessee, and Louisiana.
          </p>
          <ul className="mt-5 space-y-2 text-white/75 text-sm">
            <li>Mississippi</li>
            <li>Alabama</li>
            <li>Tennessee</li>
            <li>Louisiana</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/70">
          <p className="flex items-center gap-3">
            <span className="font-script text-accent text-[20px]">From your neighbors in Magee</span>
            <span className="opacity-50">·</span>
            <span>© 2026 Wood Insurance Agency</span>
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};