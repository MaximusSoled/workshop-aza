import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Clock, Video, Users, TrendingUp, ShieldCheck, Flame } from "lucide-react";
import { useState, useEffect } from "react";

const included = [
  "Workshop completo ao vivo (9h às 18h) com construção prática",
  "Método R.U.M.O. aplicado ao seu mercado",
  "Sistema de atendimento e scripts de conversão",
  "Estrutura de funil para clínicas capilares",
  "Diagnóstico de posicionamento + plano de ação",
  "Como fechar mais cirurgias sem parecer vendedor",
  "Plano de ação pronto para aplicar na segunda-feira",
];

const OfferSection = () => {
  // Countdown timer to event date (June 15, 2026 9:00 AM BRT)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-06-15T12:00:00Z").getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-deep" id="oferta">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        {/* Headline */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Garanta o{" "}
            <span className="font-handwritten text-electric text-4xl md:text-5xl marker-highlight">melhor preço</span>
            <br />antes que o lote vire
          </h2>
        </div>

        {/* Social proof bar — Bandwagon Effect */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto flex items-center justify-center gap-2 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <Users className="w-3 h-3" />
          <span>
            <strong className="text-foreground">47 pessoas</strong> garantiram o ingresso nas últimas 24h
          </span>
        </motion.div>

        {/* Offer card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-surface rounded-2xl border border-brand-electric/30 overflow-hidden glow-electric-strong"
        >
          {/* Card header */}
          <div className="gradient-electric p-5 text-center relative">
            <p className="text-xs uppercase tracking-[0.2em] mb-1 opacity-80">Workshop</p>
            <p className="font-handwritten text-3xl">Clínica Capilar Lucrativa</p>
            {/* Scarcity badge — Loss Aversion */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-background border border-brand-alert/40 text-alert">
                <Flame className="w-3 h-3" /> Últimas vagas
              </span>
            </div>
          </div>

          <div className="p-6 pt-8 space-y-5">
            {/* Countdown — Urgency Principle */}
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { val: timeLeft.days, label: "dias" },
                { val: timeLeft.hours, label: "horas" },
                { val: timeLeft.minutes, label: "min" },
                { val: timeLeft.seconds, label: "seg" },
              ].map((unit) => (
                <div key={unit.label} className="bg-background/50 rounded-lg py-2 border border-border">
                  <p className="text-xl md:text-2xl font-black text-electric tabular-nums">{String(unit.val).padStart(2, "0")}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{unit.label}</p>
                </div>
              ))}
            </div>

            {/* Event info */}
            <div className="flex items-center justify-center gap-2 text-xs flex-nowrap">
              <span className="info-badge whitespace-nowrap">
                <Calendar className="w-3 h-3 text-electric" /> 15/06
              </span>
              <span className="info-badge whitespace-nowrap">
                <Clock className="w-3 h-3 text-electric" /> 9h — 18h
              </span>
              <span className="info-badge whitespace-nowrap">
                <Video className="w-3 h-3 text-electric" /> Ao vivo
              </span>
            </div>

            {/* Price — Anchoring Effect */}
            <div className="text-center space-y-1">
              <p className="text-xs text-muted-foreground">
                Valor total dos entregáveis: <span className="line-through text-alert font-semibold">R$ 997</span>
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">por apenas</p>
              <p className="text-5xl md:text-6xl font-black text-electric">
                R$ 59<span className="text-3xl">,90</span>
              </p>
              <p className="text-xs text-muted-foreground">
                ou <strong className="text-foreground">3x de R$ 19,97</strong> sem juros
              </p>
            </div>

            {/* CTA */}
            <Button
              variant="cta"
              size="lg"
              className="w-full py-6 text-lg"
              onClick={() => window.open("#", "_blank")}
            >
              Garantir meu ingresso →
            </Button>

            {/* Trust signals — Authority + Risk Reversal */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-electric" /> Compra segura
              </span>
              <span>·</span>
              <span>Cartão, Pix ou Boleto</span>
            </div>

            {/* Micro-commitment — Endowment Effect */}
            <div className="rounded-lg bg-background/30 border border-border p-3 text-center">
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3 text-electric inline mr-1" />
                <strong className="text-foreground">93%</strong> dos participantes aplicaram o método já na primeira semana
              </p>
            </div>
          </div>
        </motion.div>

        {/* What's included */}
        <div className="max-w-md mx-auto space-y-3">
          {included.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="check-item"
            >
              <Check className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Bonuses */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bubble-electric p-6 space-y-4"
        >
          <h4 className="text-center font-semibold text-sm underline">Além de bônus exclusivos:</h4>

          <div className="space-y-2">
            {[
              { name: "Script de Atendimento para Secretárias", price: "R$ 97" },
              { name: "Checklist de Conversão de Leads", price: "R$ 97" },
              { name: "Estrutura de Funil para Clínicas", price: "R$ 103" },
            ].map((bonus, i) => (
              <div key={i} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Check className="w-4 h-4 text-electric flex-shrink-0" />
                  <span className="text-sm text-foreground">{bonus.name}</span>
                </div>
                <span className="text-alert font-bold text-sm line-through flex-shrink-0">{bonus.price}</span>
              </div>
            ))}
          </div>

          {/* Value stacking summary — Anchoring */}
          <div className="pt-3 border-t border-brand-electric/20 text-center space-y-1">
            <p className="text-xs text-muted-foreground">
              Valor total: <span className="line-through text-alert">R$ 1.294</span>
            </p>
            <p className="text-sm font-bold text-foreground">
              Hoje por apenas <span className="text-electric text-lg font-black">R$ 59,90</span>
            </p>
          </div>

          {/* CTA de fechamento */}
          <div className="pt-3 border-t border-brand-electric/20 space-y-3">
            <p className="text-center text-xs text-muted-foreground">
              Tudo isso <span className="text-electric font-bold">incluso</span> no seu ingresso
            </p>
            <Button
              variant="cta"
              size="lg"
              className="w-full py-5 text-base"
              onClick={() => window.open("#", "_blank")}
            >
              Garantir meu ingresso agora →
            </Button>
            <p className="text-[11px] text-center text-muted-foreground">
              🔒 Vagas limitadas · Pagamento seguro
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
