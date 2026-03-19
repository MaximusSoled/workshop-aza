import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.png";
import { Calendar, Video } from "lucide-react";

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
        {/* Gradient fade into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content overlapping banner fade */}
      <div className="relative z-10 -mt-16 md:-mt-24 max-w-2xl mx-auto px-5 sm:px-6 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Headline */}
          <div className="space-y-1">
            <p className="text-base md:text-lg font-bold text-muted-foreground">
              Especialista em implante capilar,
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              1 dia para você Construir a sua{" "}
              <span className="marker-highlight">Clínica Lucrativa</span> do Zero.
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-sm md:text-base max-w-lg mx-auto leading-relaxed text-muted-foreground">
            Vamos construir seu <strong className="text-foreground">sistema de conversão</strong> com
            a minha orientação ao vivo, vou te entregar o{" "}
            <strong className="text-foreground">Método R.U.M.O.</strong> e você vai sair com um{" "}
            <span className="marker-highlight font-semibold text-foreground">plano de ação pronto</span>{" "}
            para aplicar na segunda-feira.{" "}
            <strong className="text-foreground">Faça sua inscrição.</strong>
          </p>

          {/* Info badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="info-badge">
              <Video className="w-3.5 h-3.5 text-electric" />
              Ao vivo
            </span>
            <span className="info-badge">
              <Calendar className="w-3.5 h-3.5 text-electric" />
              15/06, às 9h
            </span>
          </div>

          {/* Price bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xs text-muted-foreground"
          >
            100% dos ingressos vendidos a{" "}
            <span className="text-electric font-bold text-sm">R$ 59,90</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
