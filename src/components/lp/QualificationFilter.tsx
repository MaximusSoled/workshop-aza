import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const qualifications = [
  "Já possuem estrutura montada",
  "Já investem (ou já investiram) em marketing",
  "Já atendem pacientes, mas enfrentam instabilidade na agenda",
  "Sabem que estão perdendo dinheiro por falta de um sistema previsível",
];

const QualificationFilter = () => {
  return (
    <section className="bg-midnight">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Esse treinamento{" "}
            <span className="font-handwritten text-electric text-3xl md:text-4xl marker-highlight">
              não é para clínicas
            </span>{" "}
            que estão começando
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-4 max-w-lg mx-auto text-base text-muted-foreground"
        >
          <p>
            Se hoje a sua clínica ainda não fatura de forma consistente, não investe em marketing ou ainda está tentando{" "}
            <span className="marker-alert text-foreground">"entender como começar"</span>…
          </p>
          <p className="font-handwritten text-alert text-2xl md:text-3xl text-center">
            esse evento não é para você.
          </p>
          <p>Aqui, eu não vou ensinar o básico.</p>
          <p>Eu não vou falar sobre como criar uma clínica ou dar os primeiros passos.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="bubble-electric max-w-lg mx-auto text-center"
        >
          <p className="text-sm text-muted-foreground mb-1">
            Esse treinamento foi criado <strong className="text-foreground">exclusivamente</strong> para clínicas de implante capilar que:
          </p>
        </motion.div>

        <div className="space-y-3 max-w-md mx-auto">
          {qualifications.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 bubble"
            >
              <Check className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualificationFilter;
