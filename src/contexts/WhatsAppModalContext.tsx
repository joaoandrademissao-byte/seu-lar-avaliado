import { createContext, useContext, useCallback, ReactNode } from "react";
import { defaultWhatsappLink } from "@/config/siteConfig";

interface WhatsAppModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextType | null>(null);

export const useWhatsAppModal = () => {
  const ctx = useContext(WhatsAppModalContext);
  if (!ctx) throw new Error("useWhatsAppModal must be inside WhatsAppModalProvider");
  return ctx;
};

export const WhatsAppModalProvider = ({ children }: { children: ReactNode }) => {
  const open = useCallback(() => {
    window.open(defaultWhatsappLink(), "_blank", "noopener,noreferrer");
  }, []);
  const close = useCallback(() => {}, []);

  return (
    <WhatsAppModalContext.Provider value={{ isOpen: false, open, close }}>
      {children}
    </WhatsAppModalContext.Provider>
  );
};
