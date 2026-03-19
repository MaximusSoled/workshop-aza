import { ArrowUp } from "lucide-react";
import HeroSection from "@/components/lp/HeroSection";
import QualificationFilter from "@/components/lp/QualificationFilter";
import BeliefRupture from "@/components/lp/BeliefRupture";
import BehaviorMirror from "@/components/lp/BehaviorMirror";
import PainDiagnosis from "@/components/lp/PainDiagnosis";
import UniqueMethod from "@/components/lp/UniqueMethod";
import SpecialistStory from "@/components/lp/SpecialistStory";
import NarrativeUrgency from "@/components/lp/NarrativeUrgency";
import HowItWorks from "@/components/lp/HowItWorks";
import EventSchedule from "@/components/lp/EventSchedule";
import OfferSection from "@/components/lp/OfferSection";
import TestimonialsSection from "@/components/lp/TestimonialsSection";
import AuthoritySection from "@/components/lp/AuthoritySection";
import FaqSection from "@/components/lp/FaqSection";
import FloatingCTA from "@/components/lp/FloatingCTA";

const Index = () => {
  return (
    <main className="overflow-x-hidden scroll-smooth">
      <HeroSection />
      <QualificationFilter />
      <BeliefRupture />
      <BehaviorMirror />
      <PainDiagnosis />
      <UniqueMethod />
      <SpecialistStory />
      <NarrativeUrgency />
      <HowItWorks />
      <EventSchedule />
      <OfferSection />
      <TestimonialsSection />
      <AuthoritySection />
      <FaqSection />

      <FloatingCTA />

      {/* Footer */}
      <footer className="bg-midnight border-t border-border py-8">
        <div className="max-w-2xl mx-auto px-5 flex flex-col items-center gap-4">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 Hiago Lemos. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground text-center max-w-md">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho
            de uma estratégia não deve ser interpretada como uma garantia de resultado.
          </p>
          <div className="flex items-center gap-4">
            <button
              className="info-badge cursor-pointer hover:border-brand-electric/50 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="w-3.5 h-3.5 text-electric" />
              Voltar ao topo
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
