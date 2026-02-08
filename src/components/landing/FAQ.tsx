import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";

const faqs = [
  {
    q: "O que é uma avaliação técnica de imóvel?",
    a: "É a determinação do valor de mercado de um imóvel por um profissional habilitado (Engenheiro Civil ou Arquiteto), utilizando metodologia normatizada pela ABNT (NBR 14.653). O resultado é um laudo técnico com validade jurídica.",
  },
  {
    q: "Quanto custa uma avaliação?",
    a: "O valor varia conforme o tipo de imóvel, localização e finalidade da avaliação. Entre em contato pelo WhatsApp para receber um orçamento personalizado sem compromisso.",
  },
  {
    q: "Quanto tempo leva para receber o laudo?",
    a: `O prazo padrão é de até ${siteConfig.prazo} após a vistoria presencial. Em casos urgentes, consulte sobre prazos reduzidos.`,
  },
  {
    q: "A avaliação serve para financiamento bancário?",
    a: "A avaliação técnica pode auxiliar em negociações, mas cada instituição financeira possui seus próprios critérios e avaliadores credenciados. O laudo técnico é amplamente aceito em processos judiciais, inventários e transações.",
  },
  {
    q: "Qual a diferença entre avaliação técnica e opinião de corretor?",
    a: "A opinião de mercado de corretores é baseada em experiência comercial. A avaliação técnica segue normas da ABNT, inclui memorial de cálculo, tratamento estatístico e é assinada por profissional com ART registrada no CREA — tem validade técnica e jurídica.",
  },
  {
    q: "Preciso de laudo para inventário?",
    a: "Sim. Em processos de inventário e partilha, a Justiça exige ou recomenda laudo de avaliação elaborado por profissional habilitado para determinar o valor dos bens imóveis.",
  },
  {
    q: `Vocês atendem minha região (${siteConfig.regiao})?`,
    a: `Sim, atendemos toda a região de ${siteConfig.regiao}. Para localidades fora desta área, consulte disponibilidade pelo WhatsApp.`,
  },
  {
    q: "Como é feita a vistoria do imóvel?",
    a: "A vistoria é presencial: o engenheiro visita o imóvel para avaliar padrão construtivo, acabamentos, estado de conservação, infraestrutura do entorno e registra tudo com fotografias. A visita dura em média 1 a 2 horas.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-[hsl(209,60%,96%)] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Perguntas frequentes
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Tire suas dúvidas sobre o processo de avaliação técnica de imóveis.
        </p>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
