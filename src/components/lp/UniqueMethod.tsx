import { motion } from "framer-motion";
import { Users, TrendingUp, Zap } from "lucide-react";

const methodSteps = [
  { letter: "R", title: "Receber leads qualificados", desc: "Atraia os pacientes certos, não apenas volume." },
  { letter: "U", title: "Humanizar o atendimento", desc: "Transforme o primeiro contato em confiança real." },
  { letter: "M", title: "Monetizar os contatos", desc: "Converta interesse em consultas pagas." },
  { letter: "O", title: "Otimizar o fechamento", desc: "Feche mais cirurgias com previsibilidade." },
];

const results = [
  { icon: Users, text: "+PACIENTES" },
  { icon: TrendingUp, text: "+FATURAMENTO" },
  { icon: Zap, text: "+PREVISIBILIDADE" },
];

const UniqueMethod = () => {
  return (
    <section className="bg-deep">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-sm text-muted-foreground">Mas afinal, qual é a saída?</p>
          <h2 className="headline-secondary">
            Você pode fazer parte dos{" "}
            <span className="font-handwritten text-electric text-4xl md:text-5xl">5%</span>{" "}
            que colhem{" "}
            <span className="font-handwritten text-electric text-4xl md:text-5xl">80% dos resultados</span>
          </h2>
        </motion.div>

        {/* Myth busting */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bubble-electric max-w-lg mx-auto text-center"
        >
          <p className="text-sm font-semibold text-foreground mb-2">Um mito precisa ser quebrado:</p>
          <p className="text-muted-foreground">
            o mercado <span className="strike-through">não premia quem investe mais</span>,
            nem quem <span className="strike-through">tem mais seguidores</span>,
            nem <span className="strike-through">a melhor agência</span>.
          </p>
        </motion.div>

        {/* Truth */}
        <div className="text-center space-y-2">
          <p className="text-muted-foreground">Ele premia aqueles que conseguem</p>
          <h3 className="text-3xl md:text-4xl font-extrabold">
            <span className="marker-highlight">converter leads</span>
            <span className="text-muted-foreground text-2xl"> & </span>
            <span className="marker-highlight">fechar pacientes.</span>
          </h3>
        </div>

        {/* Result badges */}
        <div className="max-w-xs mx-auto space-y-3">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: (i % 2 === 0 ? -1 : 1) * 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`result-badge ${i === 0 ? "ml-0" : i === 1 ? "ml-8" : "ml-4"}`}
            >
              <r.icon className="w-5 h-5 text-electric flex-shrink-0" />
              <span className="text-electric">{r.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Method definition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <p className="font-handwritten text-electric text-3xl md:text-4xl">Método R.U.M.O.</p>
          <p className="text-sm text-muted-foreground">é isso:</p>
          <p className="text-base text-muted-foreground max-w-lg mx-auto">
            um método de <span className="underline decoration-brand-electric text-foreground">gestão de conversão</span> que
            usa <span className="text-foreground font-medium">psicologia da decisão do paciente estético</span> para
            transformar <span className="marker-highlight text-foreground font-semibold">leads frios em pacientes na sua agenda</span>.
          </p>
        </motion.div>

        {/* Method cards */}
        <div className="space-y-3 max-w-md mx-auto">
          {methodSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface rounded-xl p-5 border border-border hover:border-brand-electric/40 transition-all flex items-start gap-4"
            >
              <span className="text-3xl font-black text-electric font-handwritten">{step.letter}</span>
              <div>
                <h4 className="font-bold text-sm">{step.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Anti-promise */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-xl font-extrabold">
            ENTÃO CHEGA DE{" "}
            <span className="font-handwritten text-alert text-3xl strike-through">RECEBER LEADS DESQUALIFICADOS</span>{" "}
            E{" "}
            <span className="font-handwritten text-alert text-3xl strike-through">CULPAR O TRÁFEGO</span>
          </p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Esse tipo de coisa só funciona pra quem está vendendo curso de marketing.
            O que sustenta o resultado é a{" "}
            <span className="font-handwritten text-electric text-xl">mensagem certa, com o sistema certo.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UniqueMethod;
