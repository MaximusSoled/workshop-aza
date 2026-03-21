import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.png";
import { Calendar, Video, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
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

          {/* CTA Button with price */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-md mx-auto space-y-3"
          >
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

            {/* Progress bar */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="h-1.5 rounded-full overflow-hidden bg-border/50 flex-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "20%" }}
                    transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full gradient-electric"
                  />
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-xs font-bold text-electric min-w-[28px] text-right"
                >
                  20%
                </motion.span>
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-electric font-semibold">Lote 1</span> —{" "}
                <span className="text-foreground font-semibold">vagas limitadas</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
