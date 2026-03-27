import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Saber exatamente o que responder quando o lead chega — e parar de perder a cirurgia na primeira mensagem",
  "Montar um sistema de conversão que funciona mesmo quando você não está presente",
  "Fechar mais cirurgias sem depender de indicação, sorte ou agência nova",
  "Ter agenda cheia com previsibilidade — não com esperança",
];

const NarrativeUrgency = () => {
  return (
    <section className="bg-midnight">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="headline-secondary">
            Esta é a primeira vez que eu trago isso em público —{" "}
            <span className="marker-highlight">com profundidade real.</span>
          </h2>

          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Você não vai encontrar isso em curso gratuito, YouTube ou post de Instagram.
          </p>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            O que vou mostrar aqui é o sistema completo que aplico com clientes que me pagam{" "}
            <strong className="text-foreground">muito mais do que R$59,90</strong> por isso.
          </p>

          <p className="text-electric font-bold text-xl">
            Se você quer parar de ter lead e não converter:
          </p>
        </motion.div>

        {/* Benefits checklist */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Você precisa do</p>
            <h3 className="font-handwritten text-electric text-3xl md:text-4xl mt-1">
              Workshop Clínica Capilar <span className="text-foreground">Lucrativa</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-2">se quiser:</p>
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="check-item"
              >
                <Check className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{b}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NarrativeUrgency;
