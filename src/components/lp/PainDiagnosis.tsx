import { motion } from "framer-motion";

const PainDiagnosis = () => {
  return (
    <section className="bg-brand-midnight">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <p className="pain-text text-center mb-2">E o resultado?</p>

          <div className="space-y-6 text-center my-8">
            <p className="text-muted-foreground text-lg">
              Alguns leads chegaram. Algumas consultas marcadas. Uma cirurgia aqui, outra ali.{" "}
              <span className="text-foreground">Um mês bom.</span>
            </p>
            <p className="text-muted-foreground text-lg">
              Mas no mês seguinte?{" "}
              <span className="text-alert">Agenda vazia de novo.</span>{" "}
              Leads sumindo. Secretária sem saber o que responder.{" "}
              <span className="text-alert">Você frustrado.</span>
            </p>
            <p className="text-muted-foreground text-lg">
              E aquele mês bom não gerou <strong className="text-foreground">previsibilidade</strong>,
              não gerou <strong className="text-foreground">sistema</strong>,
              não construiu <strong className="text-foreground">nada</strong>.
            </p>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12 p-8 rounded-lg border border-brand-electric/20 bg-brand-deep"
          >
            <p className="text-muted-foreground text-lg mb-2">Isso tem nome.</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-electric mb-6">
              Ciclo da Clínica Capilar Instável
            </h3>

            {/* Cycle visualization */}
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground mb-8">
              {[
                "Investe em anúncios",
                "→",
                "Leads desqualificados",
                "→",
                "Secretária responde mal",
                "→",
                "Paciente some",
                "→",
                "Culpa o tráfego",
                "→",
                "Troca de agência",
                "→",
                "🔄",
              ].map((item, i) => (
                <span
                  key={i}
                  className={item === "→" || item === "🔄" ? "text-electric font-bold" : "bg-secondary px-3 py-1 rounded-full"}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground">
              O problema é que ninguém te ensinou a{" "}
              <strong className="text-electric">converter</strong>.
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              Te ensinaram a <span className="text-alert">atrair</span>.
            </p>
            <p className="text-xl font-bold mt-4">
              E tem uma diferença <span className="text-electric">brutal</span> entre as duas coisas.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainDiagnosis;
