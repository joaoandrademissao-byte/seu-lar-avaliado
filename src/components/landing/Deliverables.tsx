import { FileText, BarChart3, Calculator, Camera, ClipboardCheck } from "lucide-react";

const items = [
  { icon: FileText, title: "Laudo técnico completo", description: "Documento detalhado com valor de mercado fundamentado em normas técnicas da ABNT." },
  { icon: BarChart3, title: "Análise comparativa de mercado", description: "Pesquisa de imóveis similares na região com dados atualizados e tratamento estatístico." },
  { icon: Calculator, title: "Memorial de cálculo", description: "Demonstração transparente de toda metodologia e cálculos utilizados na avaliação." },
  { icon: Camera, title: "Registro fotográfico", description: "Documentação visual completa do imóvel, acabamentos, estado de conservação e entorno." },
  { icon: ClipboardCheck, title: "ART — Anotação de Responsabilidade Técnica", description: "Documento do CREA que garante a responsabilidade legal do engenheiro pelo laudo." },
];

const Deliverables = () => {
  return (
    <section id="entregaveis" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-secondary-foreground md:text-4xl">
          O que você recebe
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-secondary-foreground/70">
          Cada avaliação inclui um pacote completo de documentos com validade técnica e jurídica.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                <Icon size={24} className="text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-secondary-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-secondary-foreground/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
