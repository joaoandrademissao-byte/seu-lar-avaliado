import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    context: "Venda de apartamento",
    text: "O laudo me deu segurança para negociar o preço certo. Vendi em menos de 30 dias pelo valor justo, sem precisar baixar o preço.",
  },
  {
    name: "Carlos Mendes",
    context: "Inventário familiar",
    text: "Precisava de um valor técnico para o inventário. O engenheiro foi extremamente profissional e o laudo foi aceito sem questionamentos.",
  },
  {
    name: "Ana Oliveira",
    context: "Compra de imóvel",
    text: "Antes de fechar a compra, pedi uma avaliação. Descobri que o imóvel estava 15% acima do valor de mercado e consegui renegociar.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          O que nossos clientes dizem
        </h2>
        <p className="mx-auto mb-2 max-w-2xl text-center text-muted-foreground">
          Histórias reais de quem já utilizou nosso serviço de avaliação.
        </p>
        <p className="mx-auto mb-12 text-center">
          <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
            EXEMPLO — substitua por depoimentos reais
          </span>
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map(({ name, context, text }) => (
            <div
              key={name}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-foreground italic">"{text}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-bold text-primary">{name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground">{context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
