import { useEffect, useState } from "react";

/** Returns true on mobile OR when user prefers reduced motion */
export const useReducedMotion = () => {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = window.innerWidth < 768;
    return mq.matches || isMobile;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReduced(mq.matches || window.innerWidth < 768);
    mq.addEventListener("change", handler);
    window.addEventListener("resize", handler);
    return () => {
      mq.removeEventListener("change", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return reduced;
};

/** Minimal fade-in for mobile, full animation for desktop */
export const mobileOptimizedVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const desktopVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
