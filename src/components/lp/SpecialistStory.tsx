import { motion } from "framer-motion";

const SpecialistStory = () => {
  return (
    <section className="bg-deep">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm mb-2">Até porque</p>
          <h2 className="font-handwritten text-electric text-4xl md:text-5xl">
            eu vivia exatamente isso.
          </h2>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed"
        >
          <p>Eu passei anos fazendo o que todo mundo mandava.</p>
          <p>
            Investia mais em tráfego. Trocava de agência. Testava nova "fórmula".{" "}
            <span className="text-alert font-semibold">Flopava.</span> Recomeçava.
          </p>
          <p>Até que alguém me disse algo que mudou tudo:</p>
        </motion.div>

        {/* Quote */}
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
            <span className="font-bold text-sm">ESSA FOI A VIRADA 🔑</span>
          </div>
        </motion.blockquote>

        {/* Discovery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4 max-w-lg mx-auto text-sm md:text-base text-muted-foreground leading-relaxed"
        >
          <p>
            Parei de olhar para o tráfego e comecei a estudar o que acontecia depois que o lead entrava em contato.
          </p>
          <p>
            Mergulhei no comportamento do paciente estético. Estudei{" "}
            <strong className="text-foreground">as melhores clínicas capilares do Brasil</strong>.
            Notei um padrão que <strong className="text-foreground">ninguém falava:</strong>
          </p>
          <p className="font-handwritten text-electric text-2xl md:text-3xl leading-snug">
            O problema não era falta de lead. Era falta de sistema para transformar lead em cirurgia.
          </p>
          <p>
            Criei o <span className="text-electric font-semibold">Método R.U.M.O.</span> a partir disso.
            Apliquei com dezenas de clínicas. Os resultados foram{" "}
            <span className="text-electric font-semibold">consistentes</span>.
          </p>
          <p className="text-xs italic">
            Sem hack. Sem trend. Sem fórmula mágica. Só sistema certo, com execução certa.
          </p>
          <p className="text-foreground font-medium">
            É isso que você vai aprender aqui.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialistStory;
