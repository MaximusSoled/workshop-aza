import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Users, Lock, Pin, ChevronRight } from "lucide-react";

const questions = [
  {
    text: "Quantos leads chegam no seu WhatsApp por semana?",
    options: [
      { label: "Menos de 5", points: 1 },
      { label: "Entre 5 e 20", points: 2 },
      { label: "Mais de 20", points: 3 },
    ],
  },
  {
    text: "Você tem secretária dedicada ao atendimento?",
    options: [
      { label: "Não, atendo eu mesmo", points: 1 },
      { label: "Às vezes, quando dá", points: 2 },
      { label: "Sim, tenho alguém dedicado", points: 3 },
    ],
  },
  {
    text: "Quantas cirurgias você fecha por mês hoje?",
    options: [
      { label: "0 ou 1", points: 1 },
      { label: "Entre 2 e 5", points: 2 },
      { label: "Mais de 5", points: 3 },
    ],
  },
  {
    text: "Como você avalia sua conversão de leads hoje?",
    options: [
      { label: "Não consigo medir", points: 1 },
      { label: "Abaixo do que poderia ser", points: 2 },
      { label: "Converto bem, quero escalar", points: 3 },
    ],
  },
];

const groupMessages = [
  { from: "Hiago Lemos", time: "agora", text: "Bem-vindo ao grupo oficial do Workshop Clínica Capilar Lucrativa! 🎯", isAdmin: true },
  { from: "Hiago Lemos", time: "agora", text: "📌 Sua aula introdutória está liberada aqui. Assista antes do dia 15/06. Ela prepara sua clínica para aplicar o método desde agora.", isAdmin: true, pinned: true },
  { from: "Hiago Lemos", time: "agora", text: "No dia do workshop você vai sair com seu sistema de conversão montado. Não falta nada. Só você. ✅", isAdmin: true },
];

const Obrigado = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState<number | null>(null);
  const [accumulated, setAccumulated] = useState(0);
  const [done, setDone] = useState(false);

  const handleAnswer = (points: number) => {
    const next = accumulated + points;
    if (currentQuestion < questions.length - 1) {
      setAccumulated(next);
      setCurrentQuestion((q) => q + 1);
    } else {
      setAccumulated(next);
      setScore(next);
      setTimeout(() => setDone(true), 600);
    }
  };

  return (
    <main className="min-h-screen bg-deep overflow-x-hidden">
      <AnimatePresence mode="wait">

        {/* ── TELA 1: Check-in + Quiz ── */}
        {!done && (
          <m.div
            key="checkin"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen flex flex-col items-center justify-center px-5 py-10"
          >
            <div className="w-full max-w-sm space-y-6">

              {/* Badge */}
              <div className="flex justify-center">
                <span className="info-badge text-sm !py-2 !px-4" style={{ borderColor: "hsl(142 70% 45% / 0.4)", background: "hsl(142 70% 45% / 0.1)" }}>
                  <CheckCircle className="w-4 h-4" style={{ color: "hsl(142 70% 55%)" }} />
                  <span className="font-bold" style={{ color: "hsl(142 70% 55%)" }}>Compra confirmada</span>
                </span>
              </div>

              {/* Headline */}
              <div className="text-center space-y-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                  Faça seu{" "}
                  <span className="font-handwritten text-electric text-3xl sm:text-4xl">check-in</span>
                  {" "}para garantir sua participação
                </h1>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sua vaga está reservada, mas o acesso ao grupo exclusivo do workshop só é liberado depois desse passo.
                  Leva menos de <strong className="text-foreground">60 segundos.</strong>
                </p>
              </div>

              {/* Progresso */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
                  <span>{Math.round(((currentQuestion) / questions.length) * 100)}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                  <m.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, hsl(228 100% 50%), hsl(228 100% 65%))" }}
                    animate={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Card da pergunta */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card" style={{ minHeight: 220 }}>
                <AnimatePresence mode="wait">
                  <m.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.25 }}
                    className="p-5 space-y-4"
                  >
                    <p className="font-semibold text-sm md:text-base text-foreground">
                      {questions[currentQuestion].text}
                    </p>
                    <div className="space-y-2">
                      {questions[currentQuestion].options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleAnswer(opt.points)}
                          className="check-item w-full text-left group"
                        >
                          <span className="w-4 h-4 rounded-full border-2 border-border group-hover:border-electric flex-shrink-0 transition-colors" />
                          <span className="text-sm text-foreground">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </m.div>
                </AnimatePresence>
              </div>

              <p className="text-center text-[11px] text-muted-foreground flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" /> Check-in exclusivo para compradores
              </p>
            </div>
          </m.div>
        )}

        {/* ── TELA 2: Grupo WhatsApp simulado ── */}
        {done && (
          <m.div
            key="group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center justify-center px-5 py-10"
          >
            <div className="w-full max-w-sm space-y-6">

              {/* Headline de transição */}
              <div className="text-center space-y-1">
                <p className="text-sm text-muted-foreground">Check-in concluído ✓</p>
                <h2 className="text-xl sm:text-2xl font-extrabold leading-snug">
                  Só falta{" "}
                  <span className="font-handwritten text-electric text-3xl">1 passo</span>
                  {" "}para liberar tudo
                </h2>
                <p className="text-sm text-muted-foreground">
                  Entre no grupo agora e receba o acesso à aula introdutória + instruções completas para o workshop.
                </p>
              </div>

              {/* Mockup do grupo WhatsApp */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-2xl" style={{ background: "hsl(210 20% 8%)" }}>

                {/* Header do grupo */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5" style={{ background: "hsl(210 25% 11%)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-black text-sm"
                    style={{ background: "linear-gradient(135deg, hsl(228 100% 59%), hsl(228 100% 70%))" }}>
                    CC
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white truncate">Workshop Clínica Capilar</p>
                    <p className="text-[11px]" style={{ color: "hsl(142 60% 55%)" }}>
                      47 membros · Você ainda não entrou
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "hsl(142 60% 55%)" }} />
                </div>

                {/* Mensagens com blur + botão sobreposto */}
                <div className="relative" style={{ background: "hsl(206 15% 13%)" }}>
                  {/* Mensagens borradas */}
                  <div className="px-3 py-4 space-y-3 select-none pointer-events-none" style={{ filter: "blur(3px)", opacity: 0.6 }}>
                    {groupMessages.map((msg, i) => (
                      <div key={i} className="flex flex-col items-start gap-0.5">
                        {msg.pinned && (
                          <div className="flex items-center gap-1 text-[10px] mb-0.5" style={{ color: "hsl(142 60% 55%)" }}>
                            <Pin className="w-2.5 h-2.5" />
                            Mensagem fixada
                          </div>
                        )}
                        <div className="rounded-xl rounded-tl-none px-3 py-2 max-w-[90%]"
                          style={{ background: "hsl(210 20% 18%)", border: "1px solid hsl(210 20% 22%)" }}>
                          <p className="text-[11px] font-bold mb-0.5" style={{ color: "hsl(228 100% 70%)" }}>
                            {msg.from}
                            {msg.isAdmin && <span className="ml-1 text-[9px] px-1 rounded" style={{ background: "hsl(228 100% 59% / 0.2)", color: "hsl(228 100% 70%)" }}>Admin</span>}
                          </p>
                          <p className="text-[12px] text-white/80 leading-relaxed">{msg.text}</p>
                          <p className="text-[10px] text-right mt-1" style={{ color: "hsl(210 15% 50%)" }}>{msg.time}</p>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center justify-center gap-1.5 py-1">
                      <div className="flex -space-x-2">
                        {["R", "C", "M"].map((l, i) => (
                          <div key={i} className="w-5 h-5 rounded-full border border-background text-[9px] font-bold flex items-center justify-center"
                            style={{ background: `hsl(${228 + i * 20} 80% 55%)` }}>
                            {l}
                          </div>
                        ))}
                      </div>
                      <span className="text-[11px]" style={{ color: "hsl(210 15% 55%)" }}>+3 membros entraram hoje</span>
                    </div>
                  </div>

                  {/* Overlay com botão WhatsApp centralizado */}
                  <m.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6"
                    style={{ background: "hsl(206 15% 13% / 0.5)" }}
                  >
                    <p className="text-xs text-white/70 text-center font-medium">
                      Sua aula introdutória + instruções do workshop estão aqui
                    </p>
                    <a
                      href="#"
                      className="flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-white text-sm transition-all hover:scale-105 active:scale-100 shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, #25D366, #1ebe5d)",
                        boxShadow: "0 0 25px rgba(37, 211, 102, 0.45), 0 4px 15px rgba(0,0,0,0.3)",
                      }}
                    >
                      {/* WhatsApp icon */}
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Entrar no grupo agora
                    </a>
                    <p className="text-[10px] text-white/40 flex items-center gap-1">
                      <Lock className="w-2.5 h-2.5" /> Exclusivo para compradores
                    </p>
                  </m.div>
                </div>

                {/* Barra inferior bloqueada */}
                <div className="flex items-center gap-2 px-3 py-2.5 border-t border-white/5" style={{ background: "hsl(210 25% 11%)", filter: "blur(1.5px)", opacity: 0.5 }}>
                  <div className="flex-1 rounded-full px-3 py-1.5 text-[11px]" style={{ background: "hsl(210 20% 16%)", color: "hsl(210 15% 40%)" }}>
                    Entre no grupo para participar...
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "hsl(228 100% 59% / 0.2)" }}>
                    <ChevronRight className="w-4 h-4" style={{ color: "hsl(228 100% 70%)" }} />
                  </div>
                </div>
              </div>

              {/* Prova social */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center gap-2 text-xs text-muted-foreground"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <Users className="w-3 h-3" />
                <span><strong className="text-foreground">12 pessoas</strong> entraram no grupo hoje</span>
              </m.div>

              <p className="text-center text-xs text-muted-foreground">
                🔒 Grupo exclusivo para compradores do Workshop
              </p>

            </div>
          </m.div>
        )}

      </AnimatePresence>
    </main>
  );
};

export default Obrigado;
