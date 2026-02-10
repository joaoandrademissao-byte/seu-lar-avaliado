import { MessageCircle, Upload, ClipboardList, FileCheck } from "lucide-react";
import { defaultWhatsappLink } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: MessageCircle,
    step: "1",
    title: "Entre em contato",
    description: "Fale conosco pelo WhatsApp com os dados básicos do imóvel (endereço, tipo e finalidade).",
  },
  {
    icon: Upload,
    step: "2",
    title: "Envie os documentos",
    description: "Matrícula atualizada, IPTU, planta (se tiver). Orientamos exatamente o que é necessário.",
  },
  {
    icon: ClipboardList,
    step: "3",
    title: "Vistoria técnica",
    description: "Visita presencial para análise do imóvel, entorno, acabamentos e estado de conservação.",
  },
  {
    icon: FileCheck,
    step: "4",
    title: "Entrega do laudo",
    description: "Receba o laudo completo com ART, memorial de cálculo e registro fotográfico.",
  },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="como-funciona" className="bg-muted py-16 md:py-24">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Como funciona
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Processo simples e transparente em 4 etapas.
        </p>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map(({ icon: Icon, step, title, description }, index) => (
            <div
              key={step}
              className={`relative text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-1/2 bg-border md:block" />
              )}
              <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-md">
                <Icon size={28} className="text-primary-foreground" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {step}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={defaultWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <MessageCircle size={22} />
            Falar com Engenheiro
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
