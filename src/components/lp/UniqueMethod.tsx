import { motion } from "framer-motion";

const methodSteps = [
  { letter: "R", title: "Receber leads qualificados", desc: "Atraia os pacientes certos, não apenas volume." },
  { letter: "U", title: "Humanizar o atendimento", desc: "Transforme o primeiro contato em confiança." },
  { letter: "M", title: "Monetizar os contatos", desc: "Converta interesse em consultas pagas." },
  { letter: "O", title: "Otimizar o fechamento", desc: "Feche mais cirurgias com previsibilidade." },
];

const UniqueMethod = () => {
  return (
    <section className="bg-brand-deep">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-electric text-sm uppercase tracking-widest font-semibold mb-4">
            A saída do ciclo
          </p>
          <h2 className="headline-secondary mb-6">
            Você pode ser os{" "}
            <span className="text-alert">5%</span> que colhem{" "}
            <span className="text-alert">80%</span> dos resultados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um mito precisa ser quebrado: o mercado{" "}
            <strong className="text-foreground">não premia</strong> quem investe mais em anúncios,
            nem quem tem mais seguidores, nem quem troca de agência todo mês.
          </p>
          <p className="text-foreground text-lg mt-4 max-w-2xl mx-auto font-medium">
            Ele premia quem tem{" "}
            <span className="text-electric font-bold">sistema para transformar leads em pacientes</span>{" "}
            e previsibilidade no fechamento.
          </p>
        </motion.div>

        {/* Method cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {methodSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-secondary rounded-lg p-6 border border-border hover:border-brand-electric/40 transition-colors"
            >
              <span className="text-3xl font-black text-electric">{step.letter}</span>
              <h3 className="text-lg font-bold mt-2 mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            <strong className="text-electric">Método R.U.M.O.</strong> é isso: um método de gestão de conversão
            que usa psicologia da decisão do paciente estético e gestão de funis de vendas para transformar{" "}
            <span className="text-foreground font-semibold">leads frios em pacientes na sua agenda</span>.
          </p>

          <div className="mt-10 p-6 rounded-lg bg-brand-midnight border border-border max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-alert font-bold mb-3">
              ENTÃO CHEGA DE:
            </p>
            <p className="text-muted-foreground text-base">
              Trocar de agência todo mês, culpar o tráfego e depender apenas de indicações.
              <br />
              <span className="text-foreground font-medium mt-2 block">
                O que sustenta o resultado é{" "}
                <span className="text-electric">sistema</span> com{" "}
                <span className="text-electric">execução</span>.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniqueMethod;
