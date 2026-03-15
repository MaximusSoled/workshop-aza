import { motion } from "framer-motion";

const badAdvice = [
  "Te disseram que o segredo era investir mais em tráfego pago",
  "Te disseram para trocar de agência de marketing",
  "Te disseram que o problema era a qualidade dos leads",
  "Te disseram para postar mais no Instagram, fazer Reels, aparecer todo dia",
  "Invista mais!!! Não pare!!!",
];

const BeliefRupture = () => {
  return (
    <section className="bg-brand-midnight">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="headline-secondary text-center mb-4">
            Acontece que o mercado{" "}
            <span className="text-alert">te ensinou errado.</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            E você paga a conta <span className="text-alert font-semibold">todo mês.</span>
          </p>

          <p className="text-soft text-sm uppercase tracking-widest mb-6 font-semibold">
            Te disseram que o caminho era esse:
          </p>

          <ul className="list-pain space-y-1">
            {badAdvice.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={i === badAdvice.length - 1 ? "!text-brand-alert font-bold italic" : ""}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default BeliefRupture;
