import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.png";
import { Calendar, Video } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Banner image */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 pt-8 md:pt-12">
        <motion.img
          src={heroBanner}
          alt="Workshop Clínica Capilar Lucrativa - Hiago Lemos"
          className="w-full h-auto rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />
      </div>

      {/* Content below banner */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Headline */}
          <div className="space-y-2">
            <p className="text-lg md:text-xl font-bold text-muted-foreground">
              Especialista em implante capilar,
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              1 dia para você Construir a sua{" "}
              <span className="marker-highlight">Clínica Lucrativa</span> do Zero.
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-base md:text-lg max-w-lg mx-auto leading-relaxed text-muted-foreground">
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
