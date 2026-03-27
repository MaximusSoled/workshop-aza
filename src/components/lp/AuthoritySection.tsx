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
            Quem está por trás do{" "}
            <span className="font-handwritten text-electric text-3xl md:text-4xl">Método R.U.M.O.</span>
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
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden mx-auto border-4 border-brand-electric/30 glow-electric">
              <img src={hiagoPhoto} alt="Hiago Lemos" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 text-electric animate-float">✦</div>
            <div className="absolute -bottom-1 -left-3 w-4 h-4 text-electric animate-float" style={{ animationDelay: '1s' }}>✦</div>
          </div>

          <p className="font-handwritten text-electric text-3xl md:text-4xl mb-1">
            Hiago Lemos
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Estrategista de crescimento para clínicas capilares
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto space-y-4"
        >
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center">
            Eu poderia escrever aqui que sou especialista, que tenho anos de experiência, que já atendi centenas de clínicas.
          </p>
          <p className="text-sm md:text-base text-foreground leading-relaxed text-center font-semibold">
            Mas o que importa para você é o seguinte:
          </p>
          <p className="text-sm md:text-base text-electric leading-relaxed text-center font-bold">
            Eu resolvo um problema específico.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center">
            Clínicas capilares que têm leads chegando — mas não estão convertendo esses leads em cirurgias.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center">
            Já apliquei o <span className="text-electric font-semibold">Método R.U.M.O.</span> com dezenas de clínicas.
            Os resultados foram <span className="text-electric font-semibold">consistentes</span> porque o método funciona
            independente de quem está na secretaria, de qual agência você usa ou de quanto você investe em tráfego.
          </p>
          <p className="text-sm md:text-base text-foreground leading-relaxed text-center font-semibold">
            Sem hack. Sem trend. Só sistema certo com execução certa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
