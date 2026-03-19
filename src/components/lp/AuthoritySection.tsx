import { motion } from "framer-motion";
import hiagoPhoto from "@/assets/hiago-photo.png";
const AuthoritySection = () => {
  return (
    <section className="bg-midnight">
      <div className="section-divider" />
      <div className="section-container space-y-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Mas quem sou eu para te ensinar?
          </h2>
        </motion.div>

        {/* Avatar & Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-brand-electric/30 glow-electric">
              <img src={hiagoPhoto} alt="Hiago Lemos" className="w-full h-full object-cover" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 text-electric animate-float">✦</div>
            <div className="absolute -bottom-1 -left-3 w-4 h-4 text-electric animate-float" style={{ animationDelay: '1s' }}>✦</div>
          </div>

          <p className="font-handwritten text-electric text-3xl md:text-4xl mb-1">
            Hiago Lemos
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Hair Implant Growth Strategist
          </p>
        </motion.div>

        {/* Bio in handwritten style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto space-y-4"
        >
          <p className="font-handwritten text-xl md:text-2xl text-muted-foreground leading-relaxed text-center">
            Eu passei anos fazendo o que todo mundo mandava: investindo mais, trocando de agência,
            seguindo "fórmula mágica". E flopando.
          </p>
          <p className="font-handwritten text-xl md:text-2xl text-muted-foreground leading-relaxed text-center">
            Até entender que o problema não era falta de esforço, era falta de método.
          </p>
          <p className="font-handwritten text-xl md:text-2xl text-muted-foreground leading-relaxed text-center">
            Mergulhei em comportamento do paciente estético. Estudei o que realmente faz
            uma clínica capilar crescer de forma previsível. E então criei o{" "}
            <span className="text-electric">Método R.U.M.O.</span>
          </p>
          <p className="font-handwritten text-xl md:text-2xl text-muted-foreground leading-relaxed text-center">
            Apliquei com dezenas de clínicas — e os resultados foram{" "}
            <span className="text-electric">consistentes</span>.
          </p>
          <p className="font-handwritten text-xl md:text-2xl text-foreground leading-relaxed text-center font-semibold">
            Sem hack, sem trend, sem fórmula mágica. Só sistema certo, com execução certa.
          </p>
          <p className="font-handwritten text-lg text-muted-foreground text-center italic">
            É isso que eu ensino. E é isso que você vai aprender no workshop.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
