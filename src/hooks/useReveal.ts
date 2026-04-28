import { useEffect, useRef, useState } from "react";

/**
 * Sets `revealed` to true once the element scrolls into view.
 * Use for fade-up entrances without a motion library.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || revealed) return;
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { rootMargin, threshold: 0.05 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [rootMargin, revealed]);

  return { ref, revealed };
}