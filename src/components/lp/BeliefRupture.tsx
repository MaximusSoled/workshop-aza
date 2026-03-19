import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const badAdvice = [
  "Invista mais em tráfego pago",
  "Troque de agência de marketing",
  "O problema são os leads ruins",
  "Poste mais no Instagram, faça Reels, apareça todo dia",
  "Faça três posts por dia. Não pare!!!",
];

const BeliefRupture = () => {
  return (
    <section className="bg-midnight">
      <div className="section-divider" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Acontece que te ensinaram errado.
            </p>
            <p className="text-xl md:text-2xl">
              E você paga a conta{" "}
              <span className="marker-alert font-bold">todos os dias</span>
            </p>
          </div>

          {/* Chat bubble style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bubble-electric text-center max-w-sm mx-auto"
          >
            <p className="text-sm text-muted-foreground mb-1">Te disseram que o caminho era esse:</p>
            <ArrowDown className="w-5 h-5 text-electric mx-auto" />
          </motion.div>

          {/* Bad advice in handwritten style */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bubble max-w-md mx-auto"
          >
            <div className="space-y-2">
              {badAdvice.map((item, i) => (
                <p
                  key={i}
                  className={`font-handwritten text-xl md:text-2xl ${
                    i === badAdvice.length - 1
                      ? "text-alert font-bold"
                      : "text-muted-foreground"
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeliefRupture;
