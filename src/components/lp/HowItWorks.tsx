import { m } from "framer-motion";
import { Play, Monitor, FileDown } from "lucide-react";

const items = [
  {
    icon: Play,
    title: "Aula introdutória gravada",
    description: "Você já começa a aplicar antes do dia do workshop. Conteúdo que prepara sua clínica para receber e reter leads desde agora.",
  },
  {
    icon: Monitor,
    title: "Workshop ao vivo: 9h às 18h, 100% prático",
    description: "Um dia inteiro construindo seu sistema de conversão. Você sai com o método montado, não apenas explicado.",
  },
  {
    icon: FileDown,
    title: "Material de apoio completo",
    description: "Scripts prontos, checklists e frameworks para sua secretária aplicar na segunda-feira. Sem precisar lembrar de tudo.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-deep">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        <m.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-secondary text-center uppercase tracking-wide"
        >
          Como vai funcionar?
        </m.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative rounded-2xl border border-border bg-card overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(hsl(var(--brand-electric)) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />
              </div>

              <div className="relative mx-4 mt-4 rounded-xl overflow-hidden bg-secondary aspect-[4/3] flex items-center justify-center border border-border/50">
                <div className="w-16 h-16 rounded-full bg-brand-electric/10 border border-brand-electric/30 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-brand-electric" />
                </div>
              </div>

              <div className="flex justify-start px-4 -mt-4 relative z-10">
                <div className="w-9 h-9 rounded-full bg-brand-electric flex items-center justify-center shadow-lg">
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              <div className="px-4 pb-5 pt-3 flex-1">
                <p className="text-sm md:text-base text-foreground">
                  <strong>{item.title}</strong>{" "}
                  <span className="text-muted-foreground">{item.description}</span>
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
