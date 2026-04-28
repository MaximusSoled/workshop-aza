import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-consent");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem("cookies-consent", choice);
    setVisible(false);
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <m.div
          key="cookie-consent"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-20 left-4 right-4 z-[60] pointer-events-none flex justify-center"
        >
          <div className="pointer-events-auto bubble max-w-md w-full space-y-3">
            <div className="flex items-start gap-3">
              <Cookie className="w-5 h-5 text-electric shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground flex-1">
                Usamos cookies para melhorar sua experiência. Consulte nossa{" "}
                <Link to="/politica-de-privacidade" className="text-electric underline hover:opacity-80">
                  Política de Privacidade
                </Link>{" "}
                para saber mais.
              </p>
            </div>
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => handleConsent("rejected")}
                className="text-xs font-medium px-4 py-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors"
              >
                Recusar
              </button>
              <button
                onClick={() => handleConsent("accepted")}
                className="text-xs font-bold px-4 py-1.5 rounded-lg gradient-electric text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Aceitar
              </button>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
