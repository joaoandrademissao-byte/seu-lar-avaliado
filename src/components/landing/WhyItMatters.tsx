import { CheckCircle, XCircle } from "lucide-react";

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
  return (
    <section className="bg-[hsl(209,60%,96%)] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Por que a avaliação técnica vale a pena
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Entenda a diferença entre um valor técnico confiável e o risco de precificar no achismo.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Benefits */}
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-8">
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

          {/* Risks */}
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-8">
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
      </div>
    </section>
  );
};

export default WhyItMatters;
