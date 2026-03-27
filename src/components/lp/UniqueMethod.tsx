import { motion } from "framer-motion";

const methodSteps = [
  {
    letter: "R",
    title: "Receber leads qualificados",
    desc: "Chega de pagar para atrair lead que nunca vai fechar. O primeiro passo é atrair quem já está pronto para o implante — não curiosos.",
  },
  {
    letter: "U",
    title: "Humanizar o primeiro contato",
    desc: "O lead decide se vai comprar nos primeiros 90 segundos de atendimento. Você vai saber exatamente o que falar — e quando falar — para transformar interesse em consulta marcada.",
  },
  {
    letter: "M",
    title: "Monetizar cada conversa",
    desc: "Todo lead que entra no seu WhatsApp tem potencial de virar cirurgia. Você vai aprender a conduzir essa conversa até o fechamento — sem pressão, sem parecer vendedor.",
  },
  {
    letter: "O",
    title: "Otimizar o fechamento mês a mês",
    desc: "Um sistema de conversão não é sorte. É processo. Você vai montar esse processo e replicar toda semana.",
  },
];

const UniqueMethod = () => {
  return (
    <section className="bg-midnight">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="headline-secondary">
            O sistema que transforma lead frio em{" "}
            <span className="marker-highlight">paciente na sua agenda</span>
          </h2>
          <p className="font-handwritten text-electric text-3xl md:text-4xl">Método R.U.M.O.</p>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Não é hack. Não é tendência. É gestão de conversão com execução certa — aplicado a dezenas de clínicas capilares.
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

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-foreground font-bold text-lg max-w-md mx-auto">
            Então chega de ter lead e não fechar. Isso acontece com clínicas que{" "}
            <span className="font-handwritten text-alert text-2xl">não têm sistema.</span>
          </p>
          <p className="text-sm text-muted-foreground">
            A partir daqui, <span className="text-electric font-semibold">você tem.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UniqueMethod;
