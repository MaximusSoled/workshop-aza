import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-electric text-sm md:text-base font-semibold uppercase tracking-widest mb-6">
            Workshop ao vivo · 15 de Junho de 2026
          </p>

          <h1 className="headline-primary mb-8 max-w-4xl mx-auto">
            Em <span className="text-electric">1 dia</span>, estruture o sistema para{" "}
            <span className="text-electric">atrair, atender e fechar</span> pacientes
            de implante capilar todos os meses
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            Vamos construir juntos, com a minha orientação ao vivo, o sistema completo da sua
            clínica — e você vai sair com um{" "}
            <strong className="text-foreground">plano de ação pronto para aplicar na segunda-feira</strong>,
            sem precisar virar especialista em marketing e sem depender apenas de indicações.
          </p>

          <p className="mt-8 text-sm text-muted-foreground uppercase tracking-widest">
            com <span className="text-electric font-bold">Hiago Lemos</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
