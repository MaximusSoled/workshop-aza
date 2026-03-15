import { motion } from "framer-motion";

const painPoints = [
  "Investir e não ver resultado",
  "Trocar de agência e nada mudar",
  "Sentir que o tráfego é loteria e você nunca ganha...",
  "Fazer de tudo, mas continuar com a agenda vazia",
];

const SpecialistStory = () => {
  return (
    <section className="bg-midnight">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm mb-2">Até porque era isso que</p>
          <h2 className="font-handwritten text-electric text-4xl md:text-5xl">
            acontecia comigo...
          </h2>
        </motion.div>

        {/* Pain points cards */}
        <div className="space-y-3 max-w-sm mx-auto">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 bubble"
            >
              <span className="text-alert mt-0.5">✗</span>
              <p className="text-sm text-muted-foreground">
                {point.includes("...") ? (
                  <>
                    {point.split("...")[0]}
                    <strong className="text-foreground">...</strong>
                  </>
                ) : (
                  <>{point}</>
                )}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Confession */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-muted-foreground">
            Depois de ver dezenas de clínicas passando pelo mesmo problema, eu entrei no
          </p>
          <p className="font-handwritten text-electric text-3xl md:text-4xl">
            Ciclo da Clínica Capilar Instável
          </p>
        </motion.div>

        {/* Mentor quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-center space-y-4"
        >
          <div className="bubble-electric py-6">
            <p className="font-handwritten text-2xl md:text-3xl text-foreground italic">
              "Hiago, o lead não é o problema. O problema é o que acontece depois que ele chega."
            </p>
          </div>

          <div className="gradient-electric inline-block px-5 py-2 rounded-full">
            <span className="font-bold text-sm">E ESSA FOI A VIRADA DE CHAVE 🔑</span>
          </div>
        </motion.blockquote>

        {/* Research & Discovery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4 max-w-lg mx-auto"
        >
          <p className="text-muted-foreground text-sm">
            Eu fui atrás do que estava funcionando com{" "}
            <strong className="text-foreground">as melhores clínicas do Brasil</strong>,
            nos melhores estudos de{" "}
            <span className="underline decoration-brand-electric">comportamento do paciente estético</span>{" "}
            e <span className="underline decoration-brand-electric">gestão de conversão</span>.
          </p>

          <p className="text-foreground font-medium">
            E notei um padrão que{" "}
            <strong>ninguém falava:</strong>
          </p>

          <p className="font-handwritten text-electric text-2xl md:text-3xl leading-snug">
            o problema não é falta de leads — é falta de sistema para transformar leads em pacientes.
          </p>

          <p className="text-xs text-muted-foreground italic">
            Sem hack, sem trend, sem fórmula mágica. Só sistema certo com execução certa.
          </p>
          <p className="text-sm text-muted-foreground font-medium">
            É isso que eu ensino. E é isso que você vai aprender no workshop.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialistStory;
