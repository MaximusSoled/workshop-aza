import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Users, TrendingUp, Zap } from "lucide-react";

const results = [
  { icon: Users, text: "Agenda cheia com consistência" },
  { icon: TrendingUp, text: "Faturamento previsível todo mês" },
  { icon: Zap, text: "Cirurgias fechadas sem depender de indicação ou sorte" },
];

const PainDiagnosis = () => {
  return (
    <section className="bg-deep">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="headline-secondary">
            Você pode fazer parte dos{" "}
            <span className="font-handwritten text-electric text-4xl md:text-5xl">20%</span>{" "}
            que fecham{" "}
            <span className="font-handwritten text-electric text-4xl md:text-5xl">80% das cirurgias</span>
          </h2>
        </motion.div>

        {/* Myth busting */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bubble-electric max-w-lg mx-auto text-center space-y-3"
        >
          <p className="text-sm font-semibold text-foreground mb-2">Existe um mito que precisa ser destruído agora:</p>
          <p className="text-muted-foreground">
            O mercado <span className="strike-through">não premia quem tem mais leads</span>.{" "}
            Não premia quem <span className="strike-through">investe mais em anúncios</span>.{" "}
            Não premia quem <span className="strike-through">contratou a melhor agência</span>.
          </p>
        </motion.div>

        {/* Truth */}
        <div className="text-center space-y-2">
          <p className="text-muted-foreground">O mercado premia quem sabe</p>
          <h3 className="text-3xl md:text-4xl font-extrabold">
            <span className="marker-highlight">converter o lead que já tem.</span>
          </h3>
        </div>

        {/* Results */}
        <div className="space-y-3 max-w-md mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-4">Quem aprende isso, tem:</p>
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 bubble"
            >
              <Check className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{r.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            O lead que você jogou fora por falta de sistema —{" "}
            <strong className="text-foreground">alguém já está convertendo esse lead.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainDiagnosis;
