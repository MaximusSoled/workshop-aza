import { m } from "framer-motion";

const BeliefRupture = () => {
  return (
    <section className="bg-deep">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Você tem leads. O problema é o que acontece{" "}
            <span className="font-handwritten text-electric text-3xl md:text-4xl marker-highlight">
              depois que eles chegam.
            </span>
          </h2>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-lg mx-auto space-y-6"
        >
          {/* Repetition cycle */}
          <div className="space-y-4 text-base text-muted-foreground">
            <p>O lead entra no WhatsApp. A secretária responde. <span className="marker-alert text-foreground font-semibold">O lead some.</span></p>
            <p>Você culpa o tráfego. Troca de agência. Investe mais.</p>
            <p>Novos leads chegam. A secretária responde. <span className="marker-alert text-foreground font-semibold">O lead some.</span></p>
          </div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bubble-electric text-center"
          >
            <p className="text-foreground font-bold text-lg">
              Isso não é azar. Isso é{" "}
              <span className="font-handwritten text-electric text-2xl md:text-3xl">falta de sistema de conversão.</span>
            </p>
          </m.div>

          <p className="text-center text-muted-foreground text-sm">
            E você vai continuar pagando por leads que nunca vão virar cirurgia{" "}
            <strong className="text-foreground">até resolver o problema certo.</strong>
          </p>
        </m.div>
      </div>
    </section>
  );
};

export default BeliefRupture;
