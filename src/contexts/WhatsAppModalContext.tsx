import { createContext, useContext, useState, useCallback, ReactNode } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <WhatsAppModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </WhatsAppModalContext.Provider>
  );
};
