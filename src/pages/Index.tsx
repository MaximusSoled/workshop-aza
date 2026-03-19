import { lazy, Suspense } from "react";
import { ArrowUp } from "lucide-react";
import HeroSection from "@/components/lp/HeroSection";

// Lazy load below-fold sections for faster initial paint
const QualificationFilter = lazy(() => import("@/components/lp/QualificationFilter"));
const BeliefRupture = lazy(() => import("@/components/lp/BeliefRupture"));
const BehaviorMirror = lazy(() => import("@/components/lp/BehaviorMirror"));
const PainDiagnosis = lazy(() => import("@/components/lp/PainDiagnosis"));
const UniqueMethod = lazy(() => import("@/components/lp/UniqueMethod"));
const SpecialistStory = lazy(() => import("@/components/lp/SpecialistStory"));
const NarrativeUrgency = lazy(() => import("@/components/lp/NarrativeUrgency"));
const HowItWorks = lazy(() => import("@/components/lp/HowItWorks"));
const EventSchedule = lazy(() => import("@/components/lp/EventSchedule"));
const OfferSection = lazy(() => import("@/components/lp/OfferSection"));
const TestimonialsSection = lazy(() => import("@/components/lp/TestimonialsSection"));
const AuthoritySection = lazy(() => import("@/components/lp/AuthoritySection"));
const FaqSection = lazy(() => import("@/components/lp/FaqSection"));
const FloatingCTA = lazy(() => import("@/components/lp/FloatingCTA"));

const Index = () => {
  return (
    <main className="overflow-x-hidden scroll-smooth">
      <HeroSection />
      <Suspense fallback={null}>
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
      </Suspense>

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
