import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

type Tone = "navy" | "gold" | "green" | "blue";

interface ServiceCardProps {
  tone: Tone;
  icon: LucideIcon;
  title: string;
  body: string;
  bullets: string[];
  to: string;
}

const TONE_BG: Record<Tone, string> = {
  navy: "bg-primary",
  gold: "bg-accent",
  green: "bg-secondary",
  blue: "bg-card-blue",
};

const TONE_LINK: Record<Tone, string> = {
  navy: "text-primary",
  gold: "text-accent-dark",
  green: "text-secondary",
  blue: "text-card-blue",
};

export const ServiceCard = ({ tone, icon: Icon, title, body, bullets, to }: ServiceCardProps) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-card border border-border/60 hover:shadow-float transition-shadow">
      <div className={`${TONE_BG[tone]} px-6 py-7 flex flex-col items-center text-center`}>
        <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mb-3">
          <Icon className="w-7 h-7 text-white" aria-hidden />
        </div>
        <h3 className="text-white text-[22px] font-bold">{title}</h3>
      </div>
      <div className="flex-1 p-6 flex flex-col">
        <p className="text-[14px] text-muted-foreground leading-relaxed">{body}</p>
        <ul className="mt-4 space-y-2 text-[14px] text-ink flex-1">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className={`mt-2 w-1.5 h-1.5 rounded-full ${TONE_BG[tone]} shrink-0`} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <Link
          to={to}
          className={`mt-5 inline-flex items-center gap-1.5 font-semibold text-[14px] ${TONE_LINK[tone]} hover:gap-2.5 transition-all`}
        >
          Learn More <ArrowRight className="w-4 h-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
};
