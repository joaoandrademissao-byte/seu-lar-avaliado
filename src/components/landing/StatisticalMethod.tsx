import { TrendingUp, Building2, ShieldCheck, BarChart3, MessageCircle } from "lucide-react";
import { defaultWhatsappLink } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import methodImage from "@/assets/hero-engineer.jpg";

const banks = [
  "Caixa Econômica Federal",
  "BNDES",
  "Banco do Brasil",
  "Itaú",
  "Bradesco",
  "Santander",
];

const highlights = [
  {
    icon: BarChart3,
    title: "Tratamento estatístico rigoroso",
    description: "Utiliza regressão linear múltipla para analisar variáveis como localização, área, padrão construtivo e idade do imóvel.",
  },
  {
    icon: TrendingUp,
    title: "Dados reais de mercado",
    description: "Baseia-se em transações e ofertas reais da região, garantindo valores atualizados e representativos.",
  },
  {
    icon: ShieldCheck,
    title: "Norma ABNT NBR 14.653",
    description: "Método normatizado e aceito pela Justiça, bancos e cartórios em todo o Brasil.",
  },
];

const StatisticalMethod = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-muted py-16 md:py-24">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Metodologia Científica
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Método da Inferência Estatística
            </h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              A <strong>inferência estatística</strong> é o método mais confiável e amplamente
              utilizado para avaliação de imóveis no Brasil. Através de modelos
              matemáticos e análise de dados reais do mercado, determinamos o valor
              justo do seu imóvel com <strong>precisão científica</strong>.
            </p>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Esse é o <strong>principal método adotado pelos maiores bancos do país</strong> para
              avaliação de garantias e financiamentos imobiliários.
            </p>

            <div className="space-y-5">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{title}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={defaultWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <MessageCircle size={22} />
                Solicitar Orçamento Grátis
              </a>
            </div>
          </div>

          <div>
            <div className="mb-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src={methodImage}
                alt="Análise estatística de dados imobiliários"
                className="h-64 w-full object-cover md:h-80"
              />
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Building2 size={20} className="text-primary" />
                <h3 className="text-sm font-bold text-foreground">
                  Método adotado pelos principais bancos
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {banks.map((bank) => (
                  <span
                    key={bank}
                    className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {bank}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticalMethod;
