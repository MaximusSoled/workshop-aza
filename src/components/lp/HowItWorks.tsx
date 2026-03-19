import { motion } from "framer-motion";
import { Play, Monitor, FileDown } from "lucide-react";

const items = [
  {
    icon: Play,
    title: "Aula introdutória gravada:",
    description: "pra você já começar a aplicar antes mesmo do workshop ao vivo",
  },
  {
    icon: Monitor,
    title: "Workshop ao vivo de 9h — 100% prático:",
    description:
      "conteúdo profundo onde você vai montar o sistema completo para atrair e fechar pacientes de implante capilar",
  },
  {
    icon: FileDown,
    title: "Material de apoio:",
    description: "todos os frameworks, checklists e modelos prontos pra você baixar e aplicar na sua clínica",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-deep">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-secondary text-center uppercase tracking-wide"
        >
          Como vai funcionar?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative rounded-2xl border border-border bg-card overflow-hidden flex flex-col"
            >
              {/* Decorative dots pattern */}
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

              {/* Image placeholder area */}
              <div className="relative mx-4 mt-4 rounded-xl overflow-hidden bg-secondary aspect-[4/3] flex items-center justify-center border border-border/50">
                <div className="w-16 h-16 rounded-full bg-brand-electric/10 border border-brand-electric/30 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-brand-electric" />
                </div>
              </div>

              {/* Icon badge */}
              <div className="flex justify-start px-4 -mt-4 relative z-10">
                <div className="w-9 h-9 rounded-full bg-brand-electric flex items-center justify-center shadow-lg">
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Text */}
              <div className="px-4 pb-5 pt-3 flex-1">
                <p className="text-sm md:text-base text-foreground">
                  <strong>{item.title}</strong>{" "}
                  <span className="text-muted-foreground">{item.description}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
