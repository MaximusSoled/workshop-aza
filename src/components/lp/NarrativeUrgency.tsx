import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
  "Estruturar um sistema de conversão previsível",
  "Saber exatamente o que responder para cada tipo de lead",
  "Ter clareza sobre como atrair pacientes certos",
  "Parar de depender de indicações ou sorte",
];

const NarrativeUrgency = () => {
  return (
    <section className="bg-deep">
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
            Essa é a primeira vez que eu trago em público, com profundidade, tudo o que funcionou
            pra mim e pros meus clientes.
          </h2>

          <p className="text-electric font-bold text-xl">
            Sugiro fortemente que{" "}
            <span className="marker-highlight font-handwritten text-2xl">você participe.</span>
          </p>

          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Você não sabe quando será a próxima vez, e, sinceramente,{" "}
            <strong className="text-foreground">nem eu sei.</strong>{" "}
            Dedique um dia pra encerrar esse ciclo:{" "}
            <span className="text-alert">esforço</span>,{" "}
            <span className="text-alert">esperança</span> e{" "}
            <span className="text-alert">frustração</span>.
          </p>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="cta"
            size="lg"
            className="px-10 py-6"
            onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Garantir agora o meu ingresso
          </Button>
        </div>

        {/* Benefits checklist */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Então você precisa participar do</p>
            <h3 className="font-handwritten text-electric text-3xl md:text-4xl mt-1">
              Workshop Clínica Capilar <span className="text-foreground">Lucrativa</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-2">se quer:</p>
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

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="cta"
            size="lg"
            className="px-10 py-6"
            onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Garantir meu ingresso
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NarrativeUrgency;
