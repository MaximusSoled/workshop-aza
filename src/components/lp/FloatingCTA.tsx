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
    <AnimatePresence mode="wait">
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
            <div className="relative pointer-events-auto px-5 pb-4 pt-7 max-w-sm mx-auto">
              <div
                className="rounded-xl overflow-hidden border border-border/50"
                style={{ background: "linear-gradient(145deg, hsl(220 45% 13%), hsl(220 50% 10%))" }}
              >
                <div className="flex items-center justify-center gap-2 text-xs px-4 py-2.5">
                  <span className="text-muted-foreground font-medium">
                    De <span className="line-through text-destructive font-bold">R$997</span>
                  </span>
                  <span className="w-px h-4 bg-border/50" />
                  <span className="text-foreground font-black text-sm">
                    por <span className="text-electric text-base">R$59,90</span>
                  </span>
                </div>
                <div className="px-4 space-y-1.5">
                  <div className="relative h-4 rounded-full overflow-hidden" style={{ background: "hsl(220 30% 15%)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "63%" }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, hsl(228 100% 50%), hsl(228 100% 65%), hsl(228 100% 59%))",
                        boxShadow: "0 0 15px hsl(228 100% 59% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.12)",
                      }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white drop-shadow-md">
                      63%
                    </span>
                  </div>
                </div>
                <div className="px-3 pt-2 pb-3">
                  <button
                    onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
                    className="hero-cta-btn group w-full !py-2.5 !px-4 !rounded-lg"
                  >
                    <span className="flex items-center gap-2 text-xs font-bold tracking-wide uppercase">
                      Garantir minha vaga
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="hero-cta-lote text-[9px] px-2 py-0.5">
                      Lote 01
                    </span>
                  </button>
                  <p className="text-center text-[10px] text-muted-foreground mt-1.5 flex items-center justify-center gap-1">
                    🔒 Pagamento 100% seguro
                  </p>
                </div>
              </div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
