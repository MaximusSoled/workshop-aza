import { m } from "framer-motion";
import heroBanner from "@/assets/hero-banner.webp";
import { Calendar, Video, ArrowRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const HeroSection = () => {
  const reducedMotion = useReducedMotion();
  const slideUp = reducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 30 };

  return (
    <section className="relative flex flex-col overflow-hidden bg-background">
      {/* Banner - full bleed, fades into background */}
      <div className="relative w-full">
        <img
          src={heroBanner}
          alt="Workshop Clínica Capilar Lucrativa - Hiago Lemos"
          className="mx-auto block h-auto w-full"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content overlapping banner fade */}
      <div className="relative z-10 -mt-10 md:-mt-16 mx-auto w-full max-w-2xl md:max-w-4xl px-4 sm:px-6 md:px-16 pb-6 pt-8 md:pt-16">
        <m.div
          initial={slideUp}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: reducedMotion ? 0 : 0.3 }}
          className="flex flex-col items-center space-y-4 text-center"
        >
          {/* Info badges */}
          <div className="flex max-w-max flex-wrap justify-center gap-2">
            <span className="info-badge text-xs !py-1 !px-2.5">
              <Video className="w-3 h-3 text-electric" />
              Ao vivo
            </span>
            <span className="info-badge text-xs !py-1 !px-2.5">
              <Calendar className="w-3 h-3 text-electric" />
              15/06, às 9h
            </span>
          </div>

          {/* Headline */}
          <div className="mx-auto max-w-[21.5rem] space-y-1.5 sm:max-w-sm md:max-w-full">
            <p className="text-sm md:text-base font-bold text-muted-foreground">
              Especialista em implante capilar,
            </p>
            <h1 className="text-[1.1rem] sm:text-xl md:text-4xl font-extrabold leading-snug [text-wrap:balance]">
              Ao vivo, juntos vamos construir seu sistema de conversão que vai transformar conversas no WhatsApp em transplante capilar.
            </h1>
          </div>

          {/* Subheadline */}
          <p className="mx-auto max-w-[21.5rem] text-[0.8rem] leading-relaxed text-muted-foreground sm:max-w-sm md:max-w-xl md:text-base [text-wrap:pretty]">
            Se hoje sua clínica já recebe contatos no WhatsApp mas isso não se transforma em procedimentos fechados com consistência, é porque ainda não existe um processo claro de conversão
          </p>



          {/* CTA Block */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mx-auto w-full max-w-[21.5rem] sm:max-w-sm md:max-w-lg"
          >
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="rounded-2xl overflow-hidden border border-border/60"
              style={{ background: "linear-gradient(145deg, hsl(220 45% 13%), hsl(220 50% 10%))" }}
            >
              {/* Price row */}
              <div className="px-5 py-3.5 flex items-center justify-center gap-3">
                <span className="text-sm text-muted-foreground font-medium">
                  De <span className="line-through text-destructive font-bold">R$997</span>
                </span>
                <span className="w-px h-5 bg-border/60" />
                <span className="text-foreground font-black text-xl tracking-tight">
                  por <span className="text-electric text-2xl">R$59,90</span>
                </span>
              </div>

              {/* Progress section */}
              <div className="px-5 space-y-2">
                <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Ingressos vendidos
                </p>
                <div className="relative h-6 rounded-full overflow-hidden" style={{ background: "hsl(220 30% 15%)" }}>
                  <m.div
                    initial={{ width: 0 }}
                    animate={{ width: "63%" }}
                    transition={{ delay: 1.4, duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full relative"
                    style={{
                      background: "linear-gradient(90deg, hsl(228 100% 50%), hsl(228 100% 65%), hsl(228 100% 59%))",
                      boxShadow: "0 0 20px hsl(228 100% 59% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.15)",
                    }}
                  />
                  <m.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                    className="absolute inset-0 flex items-center justify-center text-xs font-black text-white drop-shadow-md"
                  >
                    63%
                  </m.span>
                </div>
              </div>

              {/* CTA Button inside card */}
              <div className="px-4 pt-3 pb-4">
                <button
                  onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
                  className="hero-cta-btn group w-full !py-2.5 !px-4 !rounded-xl flex-row flex-nowrap whitespace-nowrap"
                >
                  <span className="text-xs font-bold tracking-wide uppercase">Garantir minha vaga</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
                  <span className="hero-cta-lote text-[10px]">Lote 01</span>
                </button>
              </div>
            </m.div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

export default HeroSection;
