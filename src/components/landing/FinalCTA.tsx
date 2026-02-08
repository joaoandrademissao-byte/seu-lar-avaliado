import { MessageCircle, Phone, FileText } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/siteConfig";

const options = [
  {
    icon: MessageCircle,
    label: "Quero avaliar meu imóvel",
    message: siteConfig.mensagens.geral(),
  },
  {
    icon: Phone,
    label: "Vou vender ou comprar",
    message: siteConfig.mensagens.vendaCompra(),
  },
  {
    icon: FileText,
    label: "Inventário ou partilha",
    message: siteConfig.mensagens.inventario(),
  },
];

const FinalCTA = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
          Não arrisque o valor do seu patrimônio
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/80">
          Um laudo técnico custa muito menos do que o prejuízo de uma negociação mal fundamentada.
          Fale com um Engenheiro Civil agora.
        </p>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          {options.map(({ icon: Icon, label, message }) => (
            <a
              key={label}
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-xl bg-accent px-6 py-5 font-semibold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              <Icon size={28} />
              <span className="text-sm">{label}</span>
            </a>
          ))}
        </div>

        <p className="mt-6 text-sm text-primary-foreground/50">
          Atendimento rápido · Sem compromisso · Sigilo garantido
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
