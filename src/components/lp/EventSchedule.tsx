import { motion } from "framer-motion";
import { Clock, Calendar, Video, Lock } from "lucide-react";

const schedule = [
  { time: "09:00", title: "Abertura e Diagnóstico" },
  { time: "10:00", title: "Módulo R — Receber leads qualificados" },
  { time: "11:30", title: "Módulo U — Humanizar o atendimento" },
  { time: "13:00", title: "Almoço & Networking" },
  { time: "14:00", title: "Módulo M — Monetizar os contatos" },
  { time: "15:30", title: "Módulo O — Otimizar o fechamento" },
  { time: "17:00", title: "Plano de Ação Personalizado" },
  { time: "18:00", title: "Encerramento" },
];

const EventSchedule = () => {
  return (
    <section className="bg-midnight">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        {/* Info badges row */}
        <div className="flex flex-wrap justify-center gap-3">
          <span className="info-badge">
            <Clock className="w-3.5 h-3.5 text-electric" /> 9h de conteúdo
          </span>
          <span className="info-badge">
            <Calendar className="w-3.5 h-3.5 text-electric" /> 15/06, às 9h
          </span>
          <span className="info-badge">
            <Video className="w-3.5 h-3.5 text-electric" /> Ao vivo
          </span>
          <span className="info-badge">
            <Lock className="w-3.5 h-3.5 text-electric" /> Acesso exclusivo
          </span>
        </div>

        {/* Title */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">O cronograma do</p>
          <h2 className="font-handwritten text-electric text-4xl md:text-5xl">
            Workshop
          </h2>
        </div>

        {/* Note */}
        <p className="text-xs text-muted-foreground text-center max-w-sm mx-auto italic">
          *É possível que o encerramento ocorra mais tarde, caso os participantes peçam
          aprofundamento maior em algum ponto. O conteúdo combinado será entregue dentro
          do horário programado.
        </p>

        {/* Timeline */}
        <div className="max-w-sm mx-auto">
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-4 py-4 border-b border-border/40 last:border-0"
            >
              <div className="flex items-center gap-2 min-w-[70px]">
                <div className="w-3 h-3 rounded-full gradient-electric flex-shrink-0" />
                <span className="font-bold text-sm text-electric">{item.time}</span>
              </div>
              <div className="flex-1 h-px bg-border/30" />
              <p className="text-sm font-medium text-foreground text-right max-w-[180px]">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
