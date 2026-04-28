import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ScriptUnderline } from "./ScriptUnderline";

interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  underlinedWord?: string;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "cream";
  className?: string;
}

export const SectionHeading = ({ eyebrow, title, underlinedWord, intro, align = "left", tone = "ink", className }: SectionHeadingProps) => {
  const headingColor = tone === "cream" ? "text-cream" : "text-primary";
  const introColor = tone === "cream" ? "text-cream/85" : "text-text";
  const eyebrowClass = tone === "cream" ? "eyebrow eyebrow-gold" : "eyebrow";

  // Optionally wrap a word with a script underline
  const renderTitle = () => {
    if (typeof title !== "string" || !underlinedWord) return title;
    const idx = title.toLowerCase().indexOf(underlinedWord.toLowerCase());
    if (idx === -1) return title;
    const before = title.slice(0, idx);
    const word = title.slice(idx, idx + underlinedWord.length);
    const after = title.slice(idx + underlinedWord.length);
    return (
      <>
        {before}
        <span className="relative inline-block">
          {word}
          <ScriptUnderline className="absolute left-0 -bottom-3 w-full" />
        </span>
        {after}
      </>
    );
  };

  return (
    <div className={cn(align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl", className)}>
      {eyebrow && <span className={eyebrowClass}>{eyebrow}</span>}
      <h2 className={cn("display mt-4 text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.02] tracking-[-0.025em]", headingColor)}>
        {renderTitle()}
      </h2>
      {intro && <p className={cn("mt-5 text-[18px] lg:text-[19px] leading-[1.7]", introColor)}>{intro}</p>}
    </div>
  );
};