import { motion } from "framer-motion";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Dr. Rafael",
    headline: "TRIPLICOU O NÚMERO DE PACIENTES EM 3 MESES",
    description:
      "O Rafael tinha uma clínica parada, sem previsibilidade. Depois de aplicar o método, fechou 14 implantes capilares no primeiro mês.",
  },
  {
    name: "Dra. Camila",
    headline: "SAIU DE 2 PARA 11 PROCEDIMENTOS POR MÊS",
    description:
      "A Camila achava que precisava de mais seguidores. Descobriu que o problema era o processo comercial e hoje tem fila de espera.",
  },
  {
    name: "Dr. André",
    headline: "FATUROU R$ 87 MIL EM UM ÚNICO MÊS",
    description:
      "O André investia pesado em tráfego sem retorno. Com o R.U.M.O., reorganizou a captação e bateu o recorde da clínica.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-midnight">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-secondary text-center"
        >
          Em breve, a{" "}
          <span className="marker-highlight">sua história de sucesso</span>{" "}
          também estará aqui:
        </motion.h2>

        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-2xl mx-auto">
          <CarouselContent className="-ml-3">
            {testimonials.map((item, i) => (
              <CarouselItem key={i} className="pl-3 basis-[85%] md:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col h-full"
                >
                  {/* Video */}
                  <div className="relative aspect-video bg-secondary">
                    {item.videoId ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        title={`Depoimento ${item.name}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-brand-electric/20 border-2 border-brand-electric flex items-center justify-center">
                          <Play className="w-6 h-6 text-electric fill-electric ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col gap-2">
                    <h3 className="text-sm md:text-base font-bold text-foreground leading-tight">
                      {item.headline}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-border bg-surface text-foreground hover:bg-card -left-4 md:-left-12" />
          <CarouselNext className="border-border bg-surface text-foreground hover:bg-card -right-4 md:-right-12" />
        </Carousel>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-brand-electric" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
