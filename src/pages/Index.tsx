import HeroSection from "@/components/lp/HeroSection";
import BeliefRupture from "@/components/lp/BeliefRupture";
import BehaviorMirror from "@/components/lp/BehaviorMirror";
import PainDiagnosis from "@/components/lp/PainDiagnosis";
import UniqueMethod from "@/components/lp/UniqueMethod";
import SpecialistStory from "@/components/lp/SpecialistStory";
import NarrativeUrgency from "@/components/lp/NarrativeUrgency";
import EventSchedule from "@/components/lp/EventSchedule";
import OfferSection from "@/components/lp/OfferSection";
import AuthoritySection from "@/components/lp/AuthoritySection";
import FaqSection from "@/components/lp/FaqSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <BeliefRupture />
      <BehaviorMirror />
      <PainDiagnosis />
      <UniqueMethod />
      <SpecialistStory />
      <NarrativeUrgency />
      <EventSchedule />
      <OfferSection />
      <AuthoritySection />
      <FaqSection />

      {/* Footer */}
      <footer className="bg-brand-deep border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Hiago Lemos · Workshop Clínica Capilar Lucrativa
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho
          de uma estratégia não deve ser interpretada como uma garantia de resultado.
        </p>
      </footer>
    </main>
  );
};

export default Index;
