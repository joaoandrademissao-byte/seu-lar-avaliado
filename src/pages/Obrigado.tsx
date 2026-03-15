import { CheckCircle, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const Obrigado = () => {
  return (
    <div className="min-h-screen bg-secondary flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center">

        {/* Ícone de confirmação */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl" />
            <CheckCircle className="relative z-10 text-accent" size={72} strokeWidth={1.5} />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight tracking-tight">
          Recebemos sua solicitação!
        </h1>

        <p className="text-lg text-primary-foreground/70 mb-10">
          Em breve nossa equipe entrará em contato com você pelo WhatsApp para dar início à sua avaliação imobiliária.
        </p>

        {/* Cards informativos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="flex items-start gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-5 py-4 text-left">
            <Clock className="mt-0.5 shrink-0 text-accent" size={20} />
            <div>
              <p className="text-sm font-semibold text-primary-foreground">Retorno rápido</p>
              <p className="text-xs text-primary-foreground/60">Normalmente respondemos em minutos durante o horário comercial.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-5 py-4 text-left">
            <Phone className="mt-0.5 shrink-0 text-accent" size={20} />
            <div>
              <p className="text-sm font-semibold text-primary-foreground">Atendimento personalizado</p>
              <p className="text-xs text-primary-foreground/60">Um engenheiro civil especialista falará direto com você.</p>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <p className="text-xs text-primary-foreground/40">
          Engenheiro Civil · CREA {siteConfig.crea}
        </p>
      </div>
    </div>
  );
};

export default Obrigado;
