import { useEffect, useRef, useState, useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Users, Quote, Star, ArrowRight } from "lucide-react";

const miniTestimonials = [
  { name: "Dr. Rafael M.", text: "Fechei 14 implantes no primeiro mês aplicando o método. Nunca imaginei resultados tão rápidos." },
  { name: "Dra. Camila S.", text: "Saí de 2 para 11 procedimentos por mês. O problema nunca foi tráfego, era o processo comercial." },
  { name: "Dr. André L.", text: "Faturei R$ 87 mil em um único mês. Reorganizei a captação e bati o recorde da clínica." },
  { name: "Dra. Juliana P.", text: "Minha secretária agora converte 3x mais leads em consultas. O script mudou tudo." },
  { name: "Dr. Marcos R.", text: "Parei de depender de indicação. Hoje tenho fila de espera para cirurgias toda semana." },
];

const OfferTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % miniTestimonials.length);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || !isVisible) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next, isVisible]);

  return (
    <div
      ref={containerRef}
      className="rounded-xl bg-background/20 border border-border/50 p-4 overflow-hidden relative min-h-[90px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="flex gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <m.div
          key={current}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-start gap-2.5"
        >
          <Quote className="w-3.5 h-3.5 text-electric flex-shrink-0 mt-0.5 opacity-60" />
          <div>
            <p className="text-xs text-foreground/80 leading-relaxed italic">"{miniTestimonials[current].text}"</p>
            <p className="text-[11px] text-electric font-semibold mt-1.5">{miniTestimonials[current].name}</p>
          </div>
        </m.div>
      </AnimatePresence>

      <div className="absolute bottom-2.5 right-3 flex gap-1.5">
        {miniTestimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Depoimento ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? "bg-electric w-4"
                : "bg-muted-foreground/20 w-1.5 hover:bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const included = [
  "Workshop completo ao vivo (9h às 18h): construção prática do seu sistema",
  "Método R.U.M.O. aplicado ao mercado de implante capilar",
  "Scripts de atendimento prontos para sua secretária usar amanhã",
  "Sistema de conversão + estrutura de funil para clínicas capilares",
  "Diagnóstico de posicionamento + plano de ação personalizado",
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
        <m.div
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
        </m.div>

        {/* Offer card */}
        <m.div
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
            {/* Subtitle */}
            <p className="text-center text-sm text-muted-foreground">
              Tudo que você precisa para converter o lead que já tem em cirurgia fechada:
            </p>

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
              <h4 className="text-center font-semibold text-sm underline">Bônus exclusivos:</h4>

              <div className="space-y-2">
                {[
                  { name: "Script de Atendimento para Secretárias", price: "R$ 97" },
                  { name: "Checklist de Conversão de Leads", price: "R$ 97" },
                  { name: "Estrutura de Funil para Clínicas", price: "R$ 183" },
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

            {/* Price */}
            <div className="pt-3 border-t border-brand-electric/20 text-center space-y-1">
              <p className="text-xs text-muted-foreground">
                Valor total: <span className="line-through text-alert font-semibold">R$ 1.274</span>
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Hoje por apenas</p>
              <p className="text-4xl md:text-5xl font-black text-electric">
                3x <span className="text-5xl md:text-6xl">R$ 19<span className="text-3xl">,97</span></span>
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                ou <strong className="text-foreground">R$ 59,90</strong> à vista
              </p>
            </div>

            {/* CTA */}
            <button
              className="hero-cta-btn group w-full !py-3.5 !px-5 !rounded-xl"
              onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="text-sm font-bold tracking-wide uppercase">Garantir minha vaga agora</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-electric" /> Compra segura
              </span>
              <span>·</span>
              <span>Cartão, Pix ou Boleto</span>
            </div>

            {/* Depoimentos em carrossel */}
            <OfferTestimonials />
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default OfferSection;
