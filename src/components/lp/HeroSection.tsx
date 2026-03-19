import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Calendar, Video } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }} />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8">
          
          {/* Logo / Brand */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Workshop</p>
            <h2 className="font-handwritten text-4xl md:text-5xl text-electric">
              Clínica Capilar
            </h2>
            <p className="text-lg md:text-xl font-extrabold tracking-wide">LUCRATIVA</p>
          </div>

          {/* Info badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="info-badge">
              <Video className="w-3.5 h-3.5 text-electric" />
              Ao vivo
            </span>
            <span className="info-badge text-primary font-sans">
              <Calendar className="w-3.5 h-3.5 text-electric text-primary" />
              15/06, às 9h
            </span>
          </div>

          {/* Headline */}
          <h1 className="headline-primary max-w-xl mx-auto">
            Um dia inteiro construindo o sistema para{" "}
            <span className="marker-highlight">atrair pacientes</span> todos os dias,{" "}
            <span className="marker-highlight">fechar consultas</span> em cada contato e até{" "}
            <span className="font-handwritten text-electric text-5xl md:text-6xl">lotação da agenda</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg max-w-lg mx-auto leading-relaxed text-muted-foreground">
            Vamos construir seu <strong className="text-foreground">sistema de conversão</strong> com
            a minha orientação ao vivo, vou te entregar o{" "}
            <strong className="text-foreground">Método R.U.M.O.</strong> e você vai sair com um{" "}
            <span className="marker-highlight font-semibold text-foreground">plano de ação pronto</span>{" "}
            para aplicar na segunda-feira,{" "}
            <strong className="text-foreground">sem precisar virar especialista em marketing</strong>.
          </p>

          {/* Price bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-muted-foreground">
            
            100% dos ingressos vendidos a{" "}
            <span className="text-electric font-bold text-sm">R$ 59,90</span>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;