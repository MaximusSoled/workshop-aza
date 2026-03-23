import { motion } from "framer-motion";

const actions = [
  { text: "investiu mais em anúncios", handwritten: true },
  { text: "trocou de agência", handwritten: true },
  { text: "contratou secretária nova", handwritten: true },
  { text: "tentou fazer conteúdo", handwritten: true },
  { text: "trabalhou fim de semana", handwritten: true },
];

const extraActions = [
  "Seguiu o conselho do colega.",
  "Gravou quando não sabia o que dizer...",
  "...se forçou a investir mais sem saber se ia voltar.",
];

const BehaviorMirror = () => {
  return (
    <section className="bg-deep">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-10"
        >
          <h2 className="text-2xl md:text-3xl">
            E você <span className="font-handwritten text-electric text-4xl md:text-5xl">obedeceu...</span>
          </h2>

          {/* Action cards */}
          <div className="space-y-4 max-w-sm mx-auto">
            {actions.map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-xl overflow-hidden border border-border"
              >
                <div className="h-2 gradient-electric" />
                <p className="font-handwritten text-2xl md:text-3xl py-4 px-5 text-muted-foreground">
                  {action.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Extra emotional escalation */}
          <div className="space-y-3">
            {extraActions.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className={`text-base ${
                  i === extraActions.length - 1
                    ? "text-foreground font-semibold italic"
                    : "text-muted-foreground"
                }`}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BehaviorMirror;
