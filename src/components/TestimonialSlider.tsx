import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
}

const ITEMS: Testimonial[] = [
  {
    quote: "We had a delightful experience at Wood Insurance Agency. Not only was Cindy nice and friendly, she was able to explain details we could understand about our policies.",
    name: "Linda Downing",
  },
  {
    quote: "Mrs. Cindy is so helpful. She goes out of her way to help you and genuinely cares for people. This insurance is such a blessing.",
    name: "Sharon Caves",
  },
  {
    quote: "Excellent service! Cindy always goes the extra mile for her customers. Very knowledgeable. Highly recommend.",
    name: "Sherry Hylender",
  },
];

export const TestimonialSlider = () => {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % ITEMS.length);
  const prev = () => setI((v) => (v - 1 + ITEMS.length) % ITEMS.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const item = ITEMS[i];

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-float p-8 sm:p-12 text-center border border-border/60">
        <div className="flex items-center justify-center gap-1 mb-5">
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} className="w-5 h-5 fill-accent text-accent" aria-hidden />
          ))}
        </div>
        <blockquote className="text-[18px] sm:text-[20px] text-ink leading-relaxed text-balance">
          "{item.quote}"
        </blockquote>
        <div className="mt-6 text-[15px] font-semibold text-primary">{item.name}</div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 -translate-x-3 sm:translate-x-0 w-10 h-10 rounded-full bg-white shadow-card border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next testimonial"
        className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-0 w-10 h-10 rounded-full bg-white shadow-card border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {ITEMS.map((_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            aria-label={`Go to testimonial ${k + 1}`}
            className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-accent" : "w-2 bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
};
