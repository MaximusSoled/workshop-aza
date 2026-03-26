import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, TrendingUp, ShieldCheck, Users } from "lucide-react";

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

        {/* Social proof bar */}
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
          className="max-w-md mx-auto bg-surface rounded-2xl border border-brand-electric/30 overflow-hidden glow-electric-strong bubble-electric p-0"
        >
          {/* Card header */}
          <div className="gradient-electric p-5 text-center relative">
            <p className="text-xs uppercase tracking-[0.2em] mb-1 opacity-80">Workshop</p>
            <p className="font-handwritten text-3xl">Clínica Capilar Lucrativa</p>
          </div>

          <div className="p-6 space-y-5">
            {/* Price */}
            <div className="text-center space-y-1">
              <p className="text-xs text-muted-foreground">
                De <span className="line-through text-alert font-semibold">R$ 997</span>
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">por apenas</p>
              <p className="text-4xl md:text-5xl font-black text-electric">
                3x <span className="text-5xl md:text-6xl">R$ 19<span className="text-3xl">,97</span></span>
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                ou <strong className="text-foreground">R$ 59,90</strong> à vista
              </p>
            </div>

            {/* What's included */}
            <div className="space-y-2">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Bonuses */}
            <div className="pt-3 border-t border-brand-electric/20 space-y-3">
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
            </div>

            {/* Value stacking summary */}
            <div className="pt-3 border-t border-brand-electric/20 text-center space-y-1">
              <p className="text-xs text-muted-foreground">
              Valor total: <span className="line-through text-alert">R$ 1.294</span>
              </p>
              <p className="text-sm font-bold text-foreground">
                Hoje por apenas <span className="text-electric text-lg font-black">R$ 59,90</span>
              </p>
            </div>

            {/* CTA */}
            <Button
              variant="cta"
              size="lg"
              className="w-full py-6 text-lg"
              onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
            >
              Garantir minha vaga agora →
            </Button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-electric" /> Compra segura
              </span>
              <span>·</span>
              <span>Cartão, Pix ou Boleto</span>
            </div>

            {/* Micro-commitment */}
            <div className="rounded-lg bg-background/30 border border-border p-3 text-center">
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3 text-electric inline mr-1" />
                <strong className="text-foreground">93%</strong> dos participantes aplicaram o método já na primeira semana
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
