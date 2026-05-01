import { Phone, Mail, MapPin } from "lucide-react";

export const UtilityBar = () => {
  return (
    <div className="bg-primary-dark text-white text-[13px]">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6 py-2.5">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <a href="tel:6013972982" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-3.5 h-3.5 text-accent" aria-hidden />
            <span>(601) 397-2982</span>
          </a>
          <a href="mailto:cwood@woodinsurance.agency" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-3.5 h-3.5 text-accent" aria-hidden />
            <span>cwood@woodinsurance.agency</span>
          </a>
        </div>
        <div className="flex items-center gap-2 text-white/85">
          <MapPin className="w-3.5 h-3.5 text-accent" aria-hidden />
          <span>398 Simpson Hwy 149, Ste A, Magee, MS 39111</span>
        </div>
      </div>
    </div>
  );
};
