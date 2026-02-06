import { MessageCircle } from "lucide-react";
import { defaultWhatsappLink } from "@/config/siteConfig";

const WhatsAppFloat = () => {
  return (
    <>
      {/* Floating button - visible on all screens */}
      <a
        href={defaultWhatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-lg transition-transform hover:scale-110 md:bottom-6 md:right-6"
      >
        <MessageCircle size={28} className="text-accent-foreground" />
      </a>

      {/* Sticky bottom bar - mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-3 shadow-lg md:hidden">
        <a
          href={defaultWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-base font-bold text-accent-foreground"
        >
          <MessageCircle size={20} />
          Falar no WhatsApp
        </a>
      </div>
    </>
  );
};

export default WhatsAppFloat;
