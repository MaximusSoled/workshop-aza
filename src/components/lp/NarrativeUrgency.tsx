import { motion } from "framer-motion";

const NarrativeUrgency = () => {
  return (
    <section className="bg-brand-deep">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="space-y-6 text-lg md:text-xl">
            <p className="text-foreground font-semibold text-xl md:text-2xl">
              Essa é a primeira vez que eu trago em público, com profundidade, tudo o que funcionou
              pra mim e pros meus clientes.
            </p>

            <p className="text-electric font-bold text-xl">
              Sugiro fortemente que você participe.
            </p>

            <p className="text-muted-foreground italic">
              Você não sabe quando será a próxima vez, e, sinceramente,{" "}
              <span className="text-foreground">nem eu sei.</span>
            </p>

            <div className="mt-8 p-6 rounded-lg border border-brand-electric/20 bg-secondary/30">
              <p className="text-foreground">
                Dedique <span className="text-electric font-bold">1 dia</span> pra encerrar esse ciclo:{" "}
                <span className="text-alert">leads perdidos</span>,{" "}
                <span className="text-alert">agenda vazia</span> e{" "}
                <span className="text-alert">faturamento imprevisível</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NarrativeUrgency;
