import { Home, TrendingUp, Scale, Briefcase } from "lucide-react";

const WhatsAppIcon = ({ size = 28 }: { size?: number }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.745 3.047 9.379L1.054 31.49l6.311-2.022A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.335 22.594c-.39 1.1-1.932 2.013-3.175 2.28-.852.18-1.964.324-5.709-1.227-4.795-1.986-7.882-6.853-8.12-7.172-.23-.319-1.927-2.567-1.927-4.894s1.22-3.472 1.653-3.948c.39-.432 1.036-.648 1.654-.648.2 0 .38.01.541.019.433.019.65.043.936.722.358.852 1.228 2.994 1.336 3.213.11.219.219.516.068.816-.143.308-.268.497-.487.764-.219.267-.428.472-.647.759-.2.248-.424.515-.176.948.248.432 1.104 1.82 2.37 2.948 1.631 1.452 3.004 1.904 3.436 2.113.432.21.685.176.936-.105.26-.29 1.104-1.285 1.396-1.727.284-.443.576-.367.964-.22.39.148 2.472 1.167 2.896 1.38.424.218.706.324.814.504.104.181.104 1.052-.286 2.15Z" />
  </svg>
);
import { defaultWhatsappLink } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="para-quem" className="bg-muted py-16 md:py-24">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Para quem é a avaliação?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Atendemos diferentes necessidades com o mesmo rigor técnico e profissionalismo.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Icon size={24} className="text-primary" />
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
            <WhatsAppIcon size={22} />
            Solicitar Avaliação
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
