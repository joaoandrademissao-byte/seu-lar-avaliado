import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import logoCompleta from "@/assets/logo_completa_sem_bg.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <img src={logoCompleta} alt="Andrade Missão Engenharia" className="h-10 w-auto mb-3" />
            <p className="text-sm text-muted-foreground">Engenheiro Civil — CREA {siteConfig.crea}</p>
            
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-foreground">Links</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><a href="#para-quem" className="hover:text-primary">Para quem é</a></li>
              <li><a href="#entregaveis" className="hover:text-primary">O que você recebe</a></li>
              <li><a href="#como-funciona" className="hover:text-primary">Como funciona</a></li>
              <li><a href="#faq" className="hover:text-primary">Perguntas frequentes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-foreground">Legal</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link to="/politica-de-privacidade" className="hover:text-primary">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            Este serviço é prestado por profissional habilitado com registro ativo no CREA.
            Os laudos são elaborados conforme normas técnicas da ABNT (NBR 14.653) e emitidos com
            Anotação de Responsabilidade Técnica (ART). Os valores determinados representam opinião
            técnica fundamentada e não constituem garantia de valor de transação.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.nome}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
