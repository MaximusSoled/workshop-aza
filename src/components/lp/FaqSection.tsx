import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Esse workshop serve pra qualquer um?",
    a: "Não. Ele foi desenhado especificamente para médicos que fazem implante capilar e donos de clínicas de transplante capilar que querem parar de depender de indicações e ter um sistema previsível de pacientes.",
  },
  {
    q: "Preciso já investir em tráfego pago?",
    a: "Não necessariamente. O método funciona para quem já investe e também para quem está começando. O foco está em converter, não apenas atrair.",
  },
  {
    q: "Vai ser ao vivo ou gravado?",
    a: "100% ao vivo. Não haverá gravação disponível. Este é um evento com interação direta e orientação personalizada.",
  },
  {
    q: "O workshop será gravado?",
    a: "Não. A gravação não estará disponível. Recomendo fortemente que reorganize sua agenda para participar ao vivo.",
  },
  {
    q: "Qual a data e horário?",
    a: "15 de Junho de 2026, das 9h às 18h (podendo se estender caso os participantes peçam aprofundamento).",
  },
  {
    q: "Serve pra agências e profissionais de marketing?",
    a: "Se você atende clínicas de implante capilar, sim. O conteúdo vai te dar ferramentas práticas para entregar resultados reais para seus clientes desse nicho.",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-deep">
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

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4 pt-6"
        >
          <p className="text-lg text-foreground">
            Ainda com dúvidas sobre o{" "}
            <span className="font-handwritten text-electric text-2xl">Workshop</span>?
          </p>
          <p className="text-sm text-muted-foreground">
            Basta tocar no botão abaixo e{" "}
            <span className="text-electric font-semibold">eu mesmo</span> irei lhe atender!
          </p>

          <Button
            variant="whatsapp"
            size="lg"
            className="py-6 px-10 text-base"
            onClick={() => window.open("https://wa.me/", "_blank")}
          >
            <MessageCircle className="w-5 h-5" />
            ATENDIMENTO VIA WHATSAPP
          </Button>

          <p className="text-xs text-muted-foreground">
            Envie uma mensagem para: <span className="text-foreground">(XX) XXXXX-XXXX</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
