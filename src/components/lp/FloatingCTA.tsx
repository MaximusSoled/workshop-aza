import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when reaching ~3rd section (around 1.5 viewport heights)
      const threshold = window.innerHeight * 1.5;
      setVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none"
        >
          {/* Smoke/blur backdrop - layered gradient that fades out above the button */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 backdrop-blur-sm [mask-image:linear-gradient(to_top,black_60%,transparent)]" />

          {/* CTA content */}
            <div className="relative pointer-events-auto px-5 pb-5 pt-8 max-w-md mx-auto space-y-2">
              <button
                onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
                className="hero-cta-btn group w-full"
              >
                <span className="flex items-center gap-2 text-lg font-bold tracking-wide">
                  Quero Participar
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="hero-cta-price">
                  <span className="text-[10px] uppercase tracking-wider opacity-80 leading-none">Por apenas:</span>
                  <span className="text-2xl font-black leading-none">R$59,90</span>
                </span>
              </button>
              <div className="flex items-center gap-2">
                <div className="h-1.5 rounded-full overflow-hidden bg-border/50 flex-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "20%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full gradient-electric"
                  />
                </div>
                <span className="text-xs font-bold text-electric min-w-[28px] text-right">20%</span>
              </div>
              <p className="text-[11px] text-muted-foreground text-center">
                <span className="text-electric font-semibold">Lote 1</span> — <span className="text-foreground font-semibold">vagas limitadas</span>
              </p>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
