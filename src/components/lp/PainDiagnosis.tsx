import { motion } from "framer-motion";

const cycleSteps = [
  "Investe em anúncios",
  "Leads desqualificados",
  "Secretária responde mal",
  "Paciente some",
  "Culpa o tráfego",
  "Troca de agência",
];

const PainDiagnosis = () => {
  return (
    <section className="bg-midnight">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        {/* Result question */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block gradient-electric px-6 py-2 rounded-full text-sm font-bold mb-8">
            E o resultado?
          </span>

          <div className="space-y-4 text-base md:text-lg text-muted-foreground max-w-lg mx-auto">
            <p>
              Às vezes <span className="marker-highlight text-foreground">um mês bom</span>. Algumas consultas.
              Uma cirurgia que <span className="marker-highlight text-foreground">te dá esperança</span>.
            </p>
            <p>
              Mas no mês seguinte,{" "}
              <span className="marker-alert text-foreground">volta tudo ao normal</span>.
              Agenda esvazia. Leads somem.{" "}
              <span className="font-handwritten text-alert text-2xl">A frustração cresce.</span>
            </p>
            <p>
              E aquele mês bom que ficou,{" "}
              <strong className="text-foreground">não gerou previsibilidade</strong>,{" "}
              <strong className="text-foreground">não gerou sistema</strong>,{" "}
              <span className="marker-alert text-foreground font-bold">não construiu nada</span>.
            </p>
          </div>
        </motion.div>

        {/* Pain name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <p className="text-muted-foreground text-sm">Isso tem nome.</p>
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Eu chamo de{" "}
            <span className="font-handwritten text-electric text-4xl md:text-5xl marker-highlight">
              Ciclo da Clínica Capilar Instável
            </span>
          </h3>
          <p className="text-muted-foreground text-sm mt-2">É um ciclo. E funciona assim:</p>
        </motion.div>

        {/* Cycle diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto"
        >
          <div className="grid grid-cols-2 gap-3">
            {cycleSteps.map((step, i) => (
              <div key={i} className="cycle-step">
                <span className="text-electric font-bold mr-1">{i + 1}.</span>
                {step}
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <span className="font-handwritten text-3xl text-alert">🔄 O ciclo recomeça</span>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-3 italic">
            Cada volta nesse ciclo custa tempo, energia e dinheiro.
          </p>
        </motion.div>

        {/* Root cause */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bubble-electric max-w-lg mx-auto text-center space-y-3"
        >
          <p className="text-muted-foreground">
            O problema é que <span className="text-foreground font-semibold underline decoration-brand-electric">ninguém te ensinou a converter</span>.
          </p>
          <p className="text-muted-foreground">
            Te ensinaram a <span className="strike-through">atrair</span>.
          </p>
          <p className="font-bold text-lg text-foreground">
            E tem uma <span className="font-handwritten text-electric text-3xl">diferença brutal</span>{" "}
            entre as duas coisas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainDiagnosis;
