import { Home, TrendingUp, Scale, Briefcase } from "lucide-react";

const cards = [
  {
    icon: Home,
    title: "Proprietário vendendo",
    description: "Evite vender abaixo do valor justo ou deixar o imóvel meses encalhado por preço errado.",
  },
  {
    icon: TrendingUp,
    title: "Comprador ou investidor",
    description: "Saiba exatamente quanto o imóvel vale antes de fechar negócio e evite pagar acima do mercado.",
  },
  {
    icon: Scale,
    title: "Inventário, partilha ou divórcio",
    description: "Laudo técnico com valor juridicamente embasado para acordo justo entre as partes.",
  },
  {
    icon: Briefcase,
    title: "Advogados e imobiliárias",
    description: "Suporte técnico confiável com ART e laudo completo para processos e transações.",
  },
];

const ForWhom = () => {
  return (
    <section id="para-quem" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Para quem é a avaliação?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Atendemos diferentes necessidades com o mesmo rigor técnico e profissionalismo.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Icon size={24} className="text-primary" />
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

export default ForWhom;
