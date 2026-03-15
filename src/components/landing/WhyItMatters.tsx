import { CheckCircle, XCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";

const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.745 3.047 9.379L1.054 31.49l6.311-2.022A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.335 22.594c-.39 1.1-1.932 2.013-3.175 2.28-.852.18-1.964.324-5.709-1.227-4.795-1.986-7.882-6.853-8.12-7.172-.23-.319-1.927-2.567-1.927-4.894s1.22-3.472 1.653-3.948c.39-.432 1.036-.648 1.654-.648.2 0 .38.01.541.019.433.019.65.043.936.722.358.852 1.228 2.994 1.336 3.213.11.219.219.516.068.816-.143.308-.268.497-.487.764-.219.267-.428.472-.647.759-.2.248-.424.515-.176.948.248.432 1.104 1.82 2.37 2.948 1.631 1.452 3.004 1.904 3.436 2.113.432.21.685.176.936-.105.26-.29 1.104-1.285 1.396-1.727.284-.443.576-.367.964-.22.39.148 2.472 1.167 2.896 1.38.424.218.706.324.814.504.104.181.104 1.052-.286 2.15Z" />
  </svg>
);

const benefits = [
  "Valor de mercado fundamentado em metodologia técnica",
  "Segurança jurídica em transações e processos",
  "Negociação com base em dados, não em achismo",
  "Laudo aceito por bancos, Justiça e cartórios",
  "Proteção patrimonial comprovada por Engenheiro Civil",
];

const risks = [
  "Vender abaixo do valor justo e perder dinheiro",
  "Pagar acima do mercado por falta de referência",
  "Acordo judicial contestado por falta de laudo técnico",
  "Financiamento negado por avaliação informal",
  "Prejuízo em partilha ou inventário por valores incorretos",
];

const WhyItMatters = () => {
  const { ref, isVisible } = useScrollReveal();
  const { open } = useWhatsAppModal();

  return (
    <section className="bg-[hsl(209,60%,96%)] py-16 md:py-24">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Por que a avaliação técnica vale a pena
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Entenda a diferença entre um valor técnico confiável e o risco de precificar no achismo.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className={`rounded-xl border border-accent/30 bg-accent/5 p-8 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h3 className="mb-6 text-xl font-bold text-foreground">
              ✅ Com avaliação técnica
            </h3>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`rounded-xl border border-destructive/30 bg-destructive/5 p-8 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <h3 className="mb-6 text-xl font-bold text-foreground">
              ⚠️ Sem avaliação — riscos reais
            </h3>
            <ul className="space-y-4">
              {risks.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <XCircle size={20} className="mt-0.5 shrink-0 text-destructive" />
                  <span className="text-sm text-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={open}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <WhatsAppIcon size={22} />
            Solicitar Avaliação
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
