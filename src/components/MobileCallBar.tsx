import { Phone } from "lucide-react";

export const MobileCallBar = () => {
  return (
    <a
      href="tel:6013972982"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-sun text-ink font-bold text-[17px] flex items-center justify-center gap-3 py-4 rounded-t-2xl animate-soft-pulse shadow-cta"
      aria-label="Call Wood Insurance Agency at (601) 397-2982"
    >
      <Phone className="w-5 h-5" aria-hidden />
      <span>Call (601) 397-2982</span>
    </a>
  );
};