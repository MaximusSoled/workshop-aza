import { motion } from "framer-motion";

const SpecialistStory = () => {
  return (
    <section className="bg-brand-midnight">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="headline-secondary text-center mb-12">
            Até porque era isso que{" "}
            <span className="text-electric">acontecia comigo...</span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Depois de ver dezenas de clínicas capilares passando pelo mesmo problema, eu entrei no{" "}
              <span className="text-electric font-semibold">Ciclo da Clínica Capilar Instável</span>{" "}
              — só que do lado de quem tentava resolver.
            </p>

            <p>
              Eu testava estratégia atrás de estratégia, fazia o que todo mundo fazia e{" "}
              <span className="text-foreground">os resultados não duravam</span>.
            </p>

            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-4 border-brand-electric pl-6 py-4 my-8 bg-secondary/50 rounded-r-lg"
            >
              <p className="text-foreground text-xl italic font-medium">
                "Hiago, o lead não é o problema. O problema é o que acontece depois que ele chega."
              </p>
              <footer className="text-sm text-soft mt-2">— Um mentor que mudou minha visão</footer>
            </motion.blockquote>

            <p>
              Eu fui atrás do que estava funcionando nas melhores clínicas do Brasil, nos princípios de{" "}
              <span className="text-foreground font-medium">comportamento do paciente estético</span>{" "}
              e gestão de conversão.
            </p>

            <p className="text-foreground font-medium text-xl">
              E notei um padrão que ninguém falava:{" "}
              <span className="text-electric">
                o problema não é falta de leads — é falta de sistema para transformar leads em pacientes.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialistStory;
