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
    q: "O workshop é presencial ou online?",
    a: "O workshop é ao vivo. Os detalhes de local/plataforma serão enviados após a confirmação da sua inscrição.",
  },
  {
    q: "Preciso ter clínica própria para participar?",
    a: "Não necessariamente. Médicos que fazem implante capilar em clínicas de terceiros também podem aplicar o Método R.U.M.O. para crescer sua operação.",
  },
  {
    q: "Já invisto em tráfego pago. Isso vai servir pra mim?",
    a: "Especialmente pra você. O método foca no que acontece DEPOIS que o lead chega — que é onde a maioria das clínicas perde dinheiro.",
  },
  {
    q: "O que exatamente vou sair com no final do dia?",
    a: "Um plano de ação personalizado com sistema de atendimento, scripts de conversão e estrutura de funil prontos para aplicar na segunda-feira.",
  },
  {
    q: "E se eu não puder participar na data?",
    a: "Não haverá gravação disponível. Este é um evento ao vivo com interação direta. Recomendo fortemente que reorganize sua agenda.",
  },
  {
    q: "Qual a garantia?",
    a: "Se nas primeiras 2 horas você sentir que o conteúdo não é para você, devolvemos 100% do valor. Sem burocracia.",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-brand-deep">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="headline-secondary text-center mb-12">
            Dúvidas frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-secondary border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-foreground font-semibold text-left hover:text-brand-electric">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
            transition={{ delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-foreground text-lg font-semibold mb-2">
              Ainda com dúvidas sobre o Workshop?
            </p>
            <p className="text-muted-foreground mb-6">
              Basta tocar no botão abaixo e{" "}
              <span className="text-electric font-semibold">eu mesmo</span> irei te atender!
            </p>

            <Button
              variant="whatsapp"
              size="lg"
              className="py-6 px-10 text-lg"
              onClick={() => window.open("https://wa.me/", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Hiago no WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
