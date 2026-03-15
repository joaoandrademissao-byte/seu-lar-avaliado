import { TrendingUp, Building2, ShieldCheck, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";
import methodImage from "@/assets/engineer-evaluating.jpg";

const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.745 3.047 9.379L1.054 31.49l6.311-2.022A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.335 22.594c-.39 1.1-1.932 2.013-3.175 2.28-.852.18-1.964.324-5.709-1.227-4.795-1.986-7.882-6.853-8.12-7.172-.23-.319-1.927-2.567-1.927-4.894s1.22-3.472 1.653-3.948c.39-.432 1.036-.648 1.654-.648.2 0 .38.01.541.019.433.019.65.043.936.722.358.852 1.228 2.994 1.336 3.213.11.219.219.516.068.816-.143.308-.268.497-.487.764-.219.267-.428.472-.647.759-.2.248-.424.515-.176.948.248.432 1.104 1.82 2.37 2.948 1.631 1.452 3.004 1.904 3.436 2.113.432.21.685.176.936-.105.26-.29 1.104-1.285 1.396-1.727.284-.443.576-.367.964-.22.39.148 2.472 1.167 2.896 1.38.424.218.706.324.814.504.104.181.104 1.052-.286 2.15Z" />
  </svg>
);

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
  const { open } = useWhatsAppModal();

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
              <button
                onClick={open}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <WhatsAppIcon size={22} />
                Solicitar Orçamento Grátis
              </button>
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
