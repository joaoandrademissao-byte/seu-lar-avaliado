import { MessageCircle } from "lucide-react";
import { siteConfig, defaultWhatsappLink } from "@/config/siteConfig";

const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-secondary">Andrade Missão</span>
            <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">Avaliações Imobiliárias</span>
          </div>
          <span className="hidden text-xs font-medium text-muted-foreground sm:inline-block border-l border-border pl-3">CREA {siteConfig.crea}</span>
        </div>
        <a
          href={defaultWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:inline-flex"
        >
          <MessageCircle size={18} />
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
};

export default TopBar;
