import { useState } from "react";
import { m } from "framer-motion";
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
    name: "Rafael",
    videoId: "xDK42rroFYE",
    headline: "FECHOU 14 IMPLANTES CAPILARES NO PRIMEIRO MÊS",
    description:
      "Rafael tinha clínica parada, sem previsibilidade. Depois de aplicar o método, fechou 14 implantes capilares no primeiro mês.",
  },
  {
    name: "Camila",
    headline: "SAIU DE 2 PARA 11 PROCEDIMENTOS POR MÊS",
    description:
      "A Camila achava que o problema era mais seguidores. Saiu de 2 para 11 procedimentos por mês depois que entendeu que o problema era o processo comercial.",
  },
  {
    name: "Dr. André",
    headline: "FATUROU R$ 87 MIL EM UM ÚNICO MÊS",
    description:
      "O André investia pesado em tráfego sem retorno. Com o R.U.M.O., reorganizou a captação e bateu o recorde da clínica.",
  },
];

const LazyYouTube = ({ videoId, title }: { videoId: string; title: string }) => {
  const [loaded, setLoaded] = useState(false);
  const thumbUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (!loaded) {
    return (
      <button
        onClick={() => setLoaded(true)}
        className="w-full h-full relative cursor-pointer group"
        aria-label={`Reproduzir ${title}`}
      >
        <img
          src={thumbUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-brand-electric/90 border-2 border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
          </div>
        </div>
      </button>
    );
  }

  return (
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-deep overflow-x-clip">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        <m.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-secondary text-center"
        >
          Clínicas que já aplicam o{" "}
          <span className="marker-highlight">Método R.U.M.O.</span>{" "}
          e fecham mais cirurgias:
        </m.h2>

        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-2xl mx-auto overflow-hidden">
          <CarouselContent className="ml-0">
            {testimonials.map((item, i) => (
              <CarouselItem key={i} className="basis-[88%] pl-0 pr-3 sm:basis-[82%] md:basis-1/2 md:pr-4">
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col h-full"
                >
                  <div className="relative aspect-video bg-secondary">
                    {item.videoId ? (
                      <LazyYouTube videoId={item.videoId} title={`Depoimento ${item.name}`} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-brand-electric/20 border-2 border-brand-electric flex items-center justify-center">
                          <Play className="w-6 h-6 text-electric fill-electric ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex-1 flex flex-col gap-2">
                    <h3 className="text-sm md:text-base font-bold text-foreground leading-tight">
                      {item.headline}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </m.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex border-border bg-surface text-foreground hover:bg-card md:-left-12" />
          <CarouselNext className="hidden md:flex border-border bg-surface text-foreground hover:bg-card md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
