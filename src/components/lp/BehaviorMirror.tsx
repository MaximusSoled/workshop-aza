import { motion } from "framer-motion";

const actions = [
  "Aumentou o investimento em anúncios",
  "Trocou de agência — talvez mais de uma vez",
  "Contratou uma secretária nova achando que o problema era atendimento",
  "Tentou fazer conteúdo nas redes sociais, mesmo sem tempo",
  "Trabalhou nos finais de semana para compensar a agenda vazia",
];

const BehaviorMirror = () => {
  return (
    <section className="bg-brand-deep">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="headline-secondary text-center mb-12">
            E você <span className="text-electric">obedeceu...</span>
          </h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {actions.map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-electric mt-1 text-lg">✓</span>
                <p className={`text-base md:text-lg ${i >= 3 ? "text-muted-foreground italic" : "text-muted-foreground"}`}>
                  {action}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BehaviorMirror;
