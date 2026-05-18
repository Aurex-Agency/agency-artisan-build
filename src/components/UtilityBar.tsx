import { Phone, Mail, MapPin } from "lucide-react";

export const UtilityBar = () => {
  return (
    <div className="bg-white text-primary text-[13px] border-b border-border">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6 py-2.5">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <a href="tel:6014397230" className="flex items-center gap-2 text-primary hover:text-accent transition-colors group">
            <Phone className="w-3.5 h-3.5 text-primary group-hover:text-accent transition-colors" aria-hidden />
            <span>(601) 439-7230</span>
          </a>
          <a href="mailto:cindy@woodinsuranceagency.net" className="flex items-center gap-2 text-primary hover:text-accent transition-colors group">
            <Mail className="w-3.5 h-3.5 text-primary group-hover:text-accent transition-colors" aria-hidden />
            <span>cindy@woodinsuranceagency.net</span>
          </a>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden />
          <span>398 Simpson Hwy 149, Ste A, Magee, MS 39111</span>
        </div>
      </div>
    </div>
  );
};
