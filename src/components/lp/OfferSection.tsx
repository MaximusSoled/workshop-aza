import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Clock, Video } from "lucide-react";

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

        {/* Offer card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-surface rounded-2xl border border-brand-electric/30 overflow-hidden glow-electric-strong"
        >
          {/* Card header */}
          <div className="gradient-electric p-5 text-center">
            <p className="text-xs uppercase tracking-[0.2em] mb-1 opacity-80">Workshop</p>
            <p className="font-handwritten text-3xl">Clínica Capilar Lucrativa</p>
          </div>

          <div className="p-6 space-y-6">
            {/* Event info */}
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <span className="info-badge">
                <Calendar className="w-3 h-3 text-electric" /> 15/06, às 9h
              </span>
              <span className="info-badge">
                <Clock className="w-3 h-3 text-electric" /> 9h — 18h
              </span>
              <span className="info-badge">
                <Video className="w-3 h-3 text-electric" /> Ao vivo
              </span>
            </div>

            {/* Price */}
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">por apenas</p>
              <p className="text-5xl md:text-6xl font-black text-electric">
                R$ 59<span className="text-3xl">,90</span>
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

            {/* Payment logos text */}
            <p className="text-xs text-center text-muted-foreground">
              🔒 Compra segura · Cartão, Pix ou Boleto
            </p>
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

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-electric" />
                <span className="text-sm text-foreground">Script de Atendimento para Secretárias</span>
              </div>
              <span className="text-alert font-bold text-sm line-through">R$ 97</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-electric" />
                <span className="text-sm text-foreground">Checklist de Conversão de Leads</span>
              </div>
              <span className="text-alert font-bold text-sm line-through">R$ 97</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-electric" />
                <span className="text-sm text-foreground">Estrutura de Funil para Clínicas</span>
              </div>
              <span className="text-alert font-bold text-sm line-through">R$ 103</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
