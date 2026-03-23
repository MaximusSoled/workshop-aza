import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.png";
import { Calendar, Video, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col overflow-hidden bg-background">
      {/* Banner - full bleed, fades into background */}
      <div className="relative w-full">
        <motion.img
          src={heroBanner}
          alt="Workshop Clínica Capilar Lucrativa - Hiago Lemos"
          className="w-full h-auto block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content overlapping banner fade */}
      <div className="relative z-10 -mt-10 md:-mt-16 max-w-2xl mx-auto px-5 sm:px-6 pb-6 pt-12 md:pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Info badges */}
          <div className="flex flex-wrap justify-center gap-2">
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
          <div className="space-y-1">
            <p className="text-base md:text-lg font-bold text-muted-foreground">
              Especialista em implante capilar,
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Vou te mostrar o exato sistema que aplico para{" "}
              <span className="marker-highlight">CONVERTER</span> os leads da sua agenda em{" "}
              <span className="marker-highlight">VENDAS</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-sm md:text-base max-w-lg mx-auto leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Ao vivo</strong> vamos construir seu{" "}
            <strong className="text-foreground">sistema de conversão</strong> utilizando o{" "}
            <strong className="text-foreground">Método R.U.M.O.</strong> você vai sair com um{" "}
            <span className="marker-highlight font-semibold text-foreground">plano de ação pronto</span>{" "}
            para aplicar na sua clínica.{" "}
            <strong className="text-foreground">Clique e garanta sua vaga.</strong>
          </p>

          {/* CTA Block */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-sm mx-auto space-y-4"
          >
            {/* CTA Button */}
            <button
              onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
              className="hero-cta-btn group w-full !py-3 !px-5"
            >
              <span className="flex items-center gap-2 text-base font-bold tracking-wide uppercase whitespace-nowrap">
                Comprar Ingresso
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="hero-cta-lote whitespace-nowrap">
                Lote 01
              </span>
            </button>

            {/* Pricing + Progress Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="rounded-2xl overflow-hidden border border-border/60"
              style={{
                background: "linear-gradient(145deg, hsl(220 45% 13%), hsl(220 50% 10%))",
              }}
            >
              {/* Price row */}
              <div className="px-5 py-3.5 flex items-center justify-center gap-3">
                <span className="text-sm text-muted-foreground font-medium">
                  De <span className="line-through text-destructive font-bold">R$397</span>
                </span>
                <span className="w-px h-5 bg-border/60" />
                <span className="text-foreground font-black text-xl tracking-tight">
                  por <span className="text-electric text-2xl">R$59,90</span>
                </span>
              </div>

              {/* Progress section */}
              <div className="px-5 pb-4 space-y-2">
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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
