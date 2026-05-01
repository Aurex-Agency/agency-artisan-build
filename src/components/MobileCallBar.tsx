import { Phone } from "lucide-react";

export const MobileCallBar = () => {
  return (
    <a
      href="tel:6013972982"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-accent text-ink font-bold text-[16px] flex items-center justify-center gap-2.5 py-3.5 shadow-cta"
      aria-label="Call Wood Insurance Agency at (601) 397-2982"
    >
      <Phone className="w-5 h-5" aria-hidden />
      <span>Call (601) 397-2982</span>
    </a>
  );
};
