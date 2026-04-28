import { m } from "framer-motion";
import { AlertCircle } from "lucide-react";

const symptoms = [
  "Contatos que demonstram interesse… mas não avançam",
  "Conversas que começam bem… mas esfriam sem resposta",
  "Pacientes que pedem informação… mas não chegam na decisão",
];

const QualificationFilter = () => {
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
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Este workshop{" "}
            <span className="font-handwritten text-alert text-3xl md:text-4xl marker-alert">
              não foi criado
            </span>{" "}
            para quem ainda está tentando fazer o básico funcionar
          </h2>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-4 max-w-lg mx-auto text-base text-muted-foreground"
        >
          <p>
            Se hoje a sua operação ainda depende de ações pontuais, testes constantes ou falta clareza sobre como gerar demanda de forma consistente…
          </p>
          <p className="text-foreground font-semibold">
            <span className="marker-alert">este Workshop não é para você.</span>
          </p>
          <p className="text-center text-muted-foreground text-lg font-semibold">Agora…</p>
          <p>
            Se a sua clínica já recebe contatos no WhatsApp com frequência, mas esses contatos{" "}
            <span className="text-foreground font-semibold">não avançam até o fechamento com previsibilidade…</span>
          </p>
          <p className="text-foreground font-semibold">
            Existe um{" "}
            <span className="font-handwritten text-alert text-2xl md:text-3xl">problema claro no processo.</span>
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-2 max-w-lg mx-auto"
        >
          <p className="text-sm text-muted-foreground mb-4">E ele aparece de forma sutil no dia a dia:</p>
          <div className="space-y-3 max-w-md mx-auto">
            {symptoms.map((item, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 bubble"
              >
                <AlertCircle className="w-4 h-4 text-alert flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{item}</p>
              </m.div>
            ))}
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bubble-electric max-w-lg mx-auto text-center space-y-3"
        >
          <p className="text-muted-foreground">
            Isso acontece porque <span className="text-foreground font-semibold">não existe um processo claro</span> conduzindo esse contato até o fechamento.
          </p>
          <p className="font-bold text-lg text-foreground">
            E é exatamente isso que,{" "}
            <span className="font-handwritten text-electric text-2xl md:text-3xl">eu e você juntos</span>{" "}
            vamos resolver durante o workshop.
          </p>
        </m.div>
      </div>
    </section>
  );
};

export default QualificationFilter;
