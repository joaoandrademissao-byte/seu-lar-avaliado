import { MessageCircle, Upload, ClipboardList, FileCheck } from "lucide-react";

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
  return (
    <section id="como-funciona" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Como funciona
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Processo simples e transparente em 4 etapas.
        </p>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map(({ icon: Icon, step, title, description }, index) => (
            <div key={step} className="relative text-center">
              {/* Connector line (desktop) */}
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
      </div>
    </section>
  );
};

export default HowItWorks;
