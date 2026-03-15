import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";

const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.745 3.047 9.379L1.054 31.49l6.311-2.022A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.335 22.594c-.39 1.1-1.932 2.013-3.175 2.28-.852.18-1.964.324-5.709-1.227-4.795-1.986-7.882-6.853-8.12-7.172-.23-.319-1.927-2.567-1.927-4.894s1.22-3.472 1.653-3.948c.39-.432 1.036-.648 1.654-.648.2 0 .38.01.541.019.433.019.65.043.936.722.358.852 1.228 2.994 1.336 3.213.11.219.219.516.068.816-.143.308-.268.497-.487.764-.219.267-.428.472-.647.759-.2.248-.424.515-.176.948.248.432 1.104 1.82 2.37 2.948 1.631 1.452 3.004 1.904 3.436 2.113.432.21.685.176.936-.105.26-.29 1.104-1.285 1.396-1.727.284-.443.576-.367.964-.22.39.148 2.472 1.167 2.896 1.38.424.218.706.324.814.504.104.181.104 1.052-.286 2.15Z" />
  </svg>
);

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
  const { ref, isVisible } = useScrollReveal();
  const { open } = useWhatsAppModal();

  return (
    <section id="faq" className="bg-[hsl(209,60%,96%)] py-16 md:py-24">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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

export default FAQ;
