import { motion } from "framer-motion";

const credentials = [
  "Especialista em crescimento de clínicas de implante capilar",
  "Criador do Método R.U.M.O.",
  "Dezenas de clínicas capilares atendidas em todo o Brasil",
  "Responsável por gerar múltiplos 6 dígitos em faturamento para clientes",
  "Head estratégico em aquisição de pacientes para o setor capilar",
];

const AuthoritySection = () => {
  return (
    <section className="bg-brand-midnight">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="headline-secondary text-center mb-12">
            Mas quem sou eu pra{" "}
            <span className="text-electric">te ensinar?</span>
          </h2>

          <div className="bg-secondary rounded-xl p-8 border border-border">
            <div className="text-center mb-8">
              <div className="w-24 h-24 rounded-full gradient-electric mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-black text-foreground">HL</span>
              </div>
              <h3 className="text-2xl font-bold">Hiago Lemos</h3>
              <p className="text-electric text-sm font-semibold mt-1">
                Hair Implant Growth Strategist
              </p>
            </div>

            <ul className="space-y-3">
              {credentials.map((cred, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-electric mt-0.5">▸</span>
                  <span className="text-muted-foreground">{cred}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
