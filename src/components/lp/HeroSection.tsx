import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.png";
import { Calendar, Video, ArrowRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const HeroSection = () => {
  const reducedMotion = useReducedMotion();
  const fadeIn = reducedMotion ? { duration: 0.1 } : { duration: 0.7 };
  const slideUp = reducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 30 };

  return (
    <section className="relative flex flex-col overflow-hidden bg-background">
      {/* Banner - full bleed, fades into background */}
      <div className="relative w-full">
        <img
          src={heroBanner}
          alt="Workshop Clínica Capilar Lucrativa - Hiago Lemos"
          className="mx-auto block h-auto w-full"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content overlapping banner fade */}
      <div className="relative z-10 -mt-10 md:-mt-16 mx-auto w-full max-w-2xl px-4 sm:px-6 pb-6 pt-12 md:pt-16">
        <motion.div
          initial={slideUp}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 0.3 }}
          className="flex flex-col items-center space-y-6 text-center"
        >
          {/* Info badges */}
          <div className="flex max-w-max flex-wrap justify-center gap-2">
            <span className="info-badge text-xs !py-1 !px-2.5">
              <Video className="w-3 h-3 text-electric" />
              Ao vivo
            </span>
            <span className="info-badge text-xs !py-1 !px-2.5">
              <Calendar className="w-3 h-3 text-electric" />
              15/06, às 9h
            </span>
          </div>

          {/* Headline */}
          <div className="mx-auto max-w-[21rem] space-y-2 sm:max-w-xl">
            <p className="text-base md:text-lg font-bold text-muted-foreground">
              Especialista em implante capilar,
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight [text-wrap:balance]">
              Vou te mostrar o exato sistema que aplico para CONVERTER os leads da sua agenda em VENDAS sua clínica vai{" "}
              <span className="text-electric">fechar mais cirurgias</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="mx-auto max-w-[20.75rem] text-sm leading-relaxed text-muted-foreground sm:max-w-lg md:text-base [text-wrap:pretty]">
            <strong className="text-foreground">Ao vivo</strong> vamos construir seu{" "}
            <strong className="text-foreground">sistema de conversão</strong> utilizando o{" "}
            <strong className="text-foreground">Método R.U.M.O.</strong> você vai sair com um{" "}
            <span className="marker-highlight font-semibold text-foreground">plano de ação pronto</span>{" "}
            para aplicar na sua clínica.
          </p>

          {/* CTA Block */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mx-auto w-full max-w-[21.5rem] sm:max-w-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="rounded-2xl overflow-hidden border border-border/60"
              style={{ background: "linear-gradient(145deg, hsl(220 45% 13%), hsl(220 50% 10%))" }}
            >
              {/* Price row */}
              <div className="px-5 py-3.5 flex items-center justify-center gap-3">
                <span className="text-sm text-muted-foreground font-medium">
                  De <span className="line-through text-destructive font-bold">R$997</span>
                </span>
                <span className="w-px h-5 bg-border/60" />
                <span className="text-foreground font-black text-xl tracking-tight">
                  por <span className="text-electric text-2xl">R$59,90</span>
                </span>
              </div>

              {/* Progress section */}
              <div className="px-5 space-y-2">
                <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Ingressos vendidos
                </p>
                <div className="relative h-6 rounded-full overflow-hidden" style={{ background: "hsl(220 30% 15%)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "63%" }}
                    transition={{ delay: 1.4, duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full relative"
                    style={{
                      background: "linear-gradient(90deg, hsl(228 100% 50%), hsl(228 100% 65%), hsl(228 100% 59%))",
                      boxShadow: "0 0 20px hsl(228 100% 59% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.15)",
                    }}
                  />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                    className="absolute inset-0 flex items-center justify-center text-xs font-black text-white drop-shadow-md"
                  >
                    63%
                  </motion.span>
                </div>
              </div>

              {/* CTA Button inside card */}
              <div className="px-4 pt-3 pb-4">
                <button
                  onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
                  className="hero-cta-btn group w-full !py-3 !px-5 !rounded-xl flex-row flex-nowrap whitespace-nowrap"
                >
                  <span className="text-sm font-bold tracking-wide uppercase">Garantir minha vaga</span>
                  <span className="hero-cta-lote text-[10px]">Lote 01</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
