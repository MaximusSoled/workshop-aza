import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-20 left-4 right-4 z-[60] pointer-events-none flex justify-center"
        >
          <div className="pointer-events-auto bubble max-w-md w-full flex items-center gap-3">
            <Cookie className="w-5 h-5 text-electric shrink-0" />
            <p className="text-xs text-muted-foreground flex-1">
              Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa política de privacidade.
            </p>
            <button
              onClick={accept}
              className="shrink-0 text-xs font-bold px-4 py-1.5 rounded-lg gradient-electric text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Aceitar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
