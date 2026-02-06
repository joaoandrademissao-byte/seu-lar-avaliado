import { MessageCircle } from "lucide-react";
import { siteConfig, defaultWhatsappLink } from "@/config/siteConfig";

const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">EC</span>
          </div>
          <span className="text-lg font-bold text-secondary">{siteConfig.nome}</span>
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
