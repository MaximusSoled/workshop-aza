import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="bg-brand-deep" id="oferta">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-alert text-sm uppercase tracking-widest font-bold mb-4">
            Vagas limitadas
          </p>
          <h2 className="headline-secondary mb-2">
            Garanta o melhor preço{" "}
            <span className="text-electric">antes que o lote vire</span>
          </h2>

          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-lg mx-auto bg-secondary rounded-xl p-8 border border-brand-electric/30 glow-electric"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
              Por apenas
            </p>
            <p className="text-5xl md:text-6xl font-black text-electric mb-1">
              R$ 59<span className="text-3xl">,90</span>
            </p>
            <p className="text-xs text-muted-foreground mb-8">Pagamento único · Acesso completo ao workshop</p>

            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Gift className="w-5 h-5 text-electric" />
                <p className="text-foreground font-semibold">Além de bônus exclusivos:</p>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>🎁 Bônus #1 — valor: <span className="text-alert font-bold">R$ 97</span></p>
                <p>🎁 Bônus #2 — valor: <span className="text-alert font-bold">R$ 97</span></p>
                <p>🎁 Bônus #3 — valor: <span className="text-alert font-bold">R$ 103</span></p>
              </div>
              <p className="text-sm text-soft mt-3">
                Total em bônus: <span className="text-alert font-bold">R$ 297</span>
              </p>
            </div>

            <Button
              variant="cta"
              size="lg"
              className="w-full py-6 text-lg"
              onClick={() => window.open("#", "_blank")}
            >
              QUERO MINHA VAGA AGORA
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              🔒 Compra 100% segura · Pagamento via cartão, Pix ou boleto
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
