import { m } from "framer-motion";

const cycleSteps = [
  "Investe em tráfego",
  "Lead chega",
  "Lead não converte",
  "Culpa o tráfego",
  "Troca de agência",
  "Investe de novo",
];

const BehaviorMirror = () => {
  return (
    <section className="bg-midnight">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-base md:text-lg text-muted-foreground">
            Às vezes você fecha uma cirurgia. Sente que está no caminho.
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold">
            No mês seguinte, a agenda{" "}
            <span className="font-handwritten text-alert text-3xl md:text-4xl">esvazia de novo.</span>
          </h2>
        </m.div>

        {/* Pain name */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
          <p className="text-muted-foreground text-sm mt-2">Funciona assim:</p>
        </m.div>

        {/* Cycle diagram */}
        <m.div
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
            Cada volta nesse ciclo custa dinheiro, tempo e energia que não voltam.
          </p>
        </m.div>

        {/* Root cause */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bubble-electric max-w-lg mx-auto text-center space-y-3"
        >
          <p className="text-muted-foreground">
            E o pior: <span className="text-foreground font-semibold">o problema nunca foi o lead.</span>
          </p>
          <p className="text-muted-foreground">
            O problema é o que acontece depois que o lead chega na sua clínica.{" "}
            <span className="text-foreground font-semibold underline decoration-brand-electric">Ninguém te ensinou a converter.</span>
          </p>
          <p className="text-muted-foreground">
            Te ensinaram a <span className="strike-through">atrair</span>.
          </p>
          <p className="font-bold text-lg text-foreground">
            E existe uma <span className="font-handwritten text-electric text-3xl">diferença brutal</span>{" "}
            entre as duas coisas.
          </p>
        </m.div>
      </div>
    </section>
  );
};

export default BehaviorMirror;
