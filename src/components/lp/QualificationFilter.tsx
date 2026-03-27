import { motion } from "framer-motion";
import { Check } from "lucide-react";

const qualifications = [
  "Já possui estrutura montada",
  "Já investe (ou investiu) em marketing",
  "Já atende pacientes, mas enfrenta instabilidade na agenda",
  "Sabe que está perdendo dinheiro por falta de um sistema de conversão",
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
            Este workshop{" "}
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
            Se sua clínica ainda não tem estrutura montada,{" "}
            <span className="marker-alert text-foreground">este não é o lugar certo.</span>
          </p>
          <p>
            Aqui eu não vou ensinar como criar uma clínica do zero. Não vou falar sobre primeiros passos, redes sociais ou como atrair o primeiro paciente.
          </p>
          <p className="text-foreground font-semibold">
            Este workshop é para quem já tem leads chegando — mas vê esses leads{" "}
            <span className="font-handwritten text-alert text-2xl md:text-3xl">sumindo sem virar cirurgia.</span>
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
