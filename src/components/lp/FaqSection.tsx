import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Se eu não puder assistir ao vivo, perco o conteúdo?",
    a: "Não. Você recebe acesso à gravação. Mas recomendo fortemente assistir ao vivo — o workshop tem construção prática em tempo real.",
  },
  {
    q: "Funciona para clínica pequena, de 1 ou 2 pessoas?",
    a: "Especialmente para você. Quanto menor a equipe, mais crítico é ter um sistema de conversão. Sem sistema, você depende de sorte e indicação.",
  },
  {
    q: "Minha secretária vai conseguir aplicar?",
    a: "Sim. O script de atendimento foi criado para quem não tem experiência em vendas. Ela aplica no mesmo dia que receber.",
  },
  {
    q: "Meu problema é o tráfego, não a conversão. Este workshop serve?",
    a: "Se seus leads chegam mas não viram cirurgia — o problema não é o tráfego. Este workshop foi feito exatamente para você.",
  },
  {
    q: "Preciso já investir em tráfego pago?",
    a: "Não. O método funciona com qualquer volume de leads — orgânico ou pago. O que muda é o sistema que você usa para converter.",
  },
  {
    q: "Serve para agências ou profissionais de marketing?",
    a: "Não. Este workshop foi construído para donos e gestores de clínicas capilares.",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-midnight">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">
          DÚVIDAS<br />
          <span className="font-handwritten text-electric text-4xl">FREQUENTES</span>
        </h2>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-2 max-w-lg mx-auto">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-surface border border-border rounded-xl px-5 data-[state=open]:border-brand-electric/30"
            >
              <AccordionTrigger className="text-foreground font-semibold text-left text-sm hover:text-brand-electric py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4 pt-4"
        >
          <p className="text-lg text-foreground font-semibold max-w-md mx-auto">
            Cada lead que some sem converter é uma cirurgia que{" "}
            <span className="font-handwritten text-alert text-2xl">ficou na mesa.</span>
          </p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Você tem o tráfego. Você tem a estrutura. O que falta é o sistema que transforma esse lead em paciente.
          </p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Garanta sua vaga agora e saia do workshop com o sistema montado —{" "}
            <span className="text-electric font-semibold">pronto para aplicar na semana seguinte.</span>
          </p>

          <Button
            variant="cta"
            size="lg"
            className="py-6 px-10 text-base"
            onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Garantir minha vaga agora →
          </Button>

          <p className="text-xs text-muted-foreground">
            🔒 Vagas limitadas · Pagamento 100% seguro
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
