import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const schedule = [
  { time: "09:00", title: "Abertura e Diagnóstico", desc: "Mapeamento do cenário atual da sua clínica" },
  { time: "10:00", title: "Módulo R — Receber", desc: "Como atrair leads qualificados para implante capilar" },
  { time: "11:30", title: "Módulo U — Humanizar", desc: "Transformando o atendimento em diferencial competitivo" },
  { time: "13:00", title: "Almoço & Networking", desc: "" },
  { time: "14:00", title: "Módulo M — Monetizar", desc: "Convertendo contatos em consultas pagas" },
  { time: "15:30", title: "Módulo O — Otimizar", desc: "Fechamento previsível de cirurgias" },
  { time: "17:00", title: "Plano de Ação Personalizado", desc: "Saindo com tudo pronto para aplicar na segunda-feira" },
  { time: "18:00", title: "Encerramento & Networking", desc: "" },
];

const EventSchedule = () => {
  return (
    <section className="bg-brand-midnight">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <p className="text-electric text-sm uppercase tracking-widest font-semibold mb-4">
              15 de Junho de 2026
            </p>
            <h2 className="headline-secondary">
              O Cronograma do <span className="text-electric">Workshop</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-0">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 py-4 border-b border-border/50 last:border-0"
              >
                <div className="flex items-center gap-2 min-w-[80px]">
                  <Clock className="w-4 h-4 text-electric" />
                  <span className="font-bold text-electric">{item.time}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  {item.desc && (
                    <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-8 max-w-lg mx-auto italic">
            *É possível que o encerramento ocorra mais tarde, caso os participantes peçam um
            aprofundamento maior em algum ponto. O conteúdo combinado será entregue dentro
            do horário programado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSchedule;
