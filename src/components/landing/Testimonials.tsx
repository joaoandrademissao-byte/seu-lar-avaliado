import { Star, MessageCircle } from "lucide-react";
import { defaultWhatsappLink } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="mb-4 text-center text-3xl font-bold text-secondary-foreground md:text-4xl">
          O que nossos clientes dizem
        </h2>
        <p className="mx-auto mb-2 max-w-2xl text-center text-secondary-foreground/70">
          Histórias reais de quem já utilizou nosso serviço de avaliação.
        </p>
        <p className="mx-auto mb-12 text-center">
          <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
            EXEMPLO — substitua por depoimentos reais
          </span>
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map(({ name, context, text }, i) => (
            <div
              key={name}
              className={`rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-secondary-foreground/90 italic">"{text}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                  <span className="text-sm font-bold text-accent">{name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary-foreground">{name}</p>
                  <p className="text-xs text-secondary-foreground/60">{context}</p>
                </div>
              </div>
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
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
