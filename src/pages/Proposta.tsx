import { Check, FileText, Camera, Calculator, Shield, Clock, CreditCard, Receipt, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";
import { Link } from "react-router-dom";

const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.745 3.047 9.379L1.054 31.49l6.311-2.022A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.335 22.594c-.39 1.1-1.932 2.013-3.175 2.28-.852.18-1.964.324-5.709-1.227-4.795-1.986-7.882-6.853-8.12-7.172-.23-.319-1.927-2.567-1.927-4.894s1.22-3.472 1.653-3.948c.39-.432 1.036-.648 1.654-.648.2 0 .38.01.541.019.433.019.65.043.936.722.358.852 1.228 2.994 1.336 3.213.11.219.219.516.068.816-.143.308-.268.497-.487.764-.219.267-.428.472-.647.759-.2.248-.424.515-.176.948.248.432 1.104 1.82 2.37 2.948 1.631 1.452 3.004 1.904 3.436 2.113.432.21.685.176.936-.105.26-.29 1.104-1.285 1.396-1.727.284-.443.576-.367.964-.22.39.148 2.472 1.167 2.896 1.38.424.218.706.324.814.504.104.181.104 1.052-.286 2.15Z" />
  </svg>
);

const escopo = [
  { icon: FileText, label: "Laudo técnico completo conforme NBR 14.653" },
  { icon: Calculator, label: "Análise de mercado comparativa com memorial de cálculo" },
  { icon: Camera, label: "Registro fotográfico detalhado do imóvel" },
  { icon: Shield, label: "ART — Anotação de Responsabilidade Técnica" },
  { icon: Clock, label: `Entrega em até ${siteConfig.prazo}` },
];

const Proposta = () => {
  const { open } = useWhatsAppModal();

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16} />
            Voltar ao site
          </Link>
          <span className="text-xs text-muted-foreground">CREA {siteConfig.crea}</span>
        </div>
      </header>

      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-20">
        {/* Título */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Proposta Comercial</p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Avaliação de Imóveis Urbanos e Rurais
          </h1>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Laudo técnico elaborado por Engenheiro Civil com registro ativo no CREA, seguindo as normas da ABNT NBR 14.653.
          </p>
        </div>

        {/* Card principal */}
        <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
          {/* Escopo do serviço */}
          <div className="p-6 md:p-10">
            <h2 className="mb-6 text-lg font-bold text-foreground">O que está incluso</h2>
            <ul className="space-y-4">
              {escopo.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={16} />
                  </span>
                  <span className="text-foreground">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisor */}
          <div className="border-t border-border" />

          {/* Preço */}
          <div className="bg-muted/40 p-6 md:p-10">
            <h2 className="mb-6 text-lg font-bold text-foreground">Investimento</h2>

            <div className="mb-8 flex flex-col items-center gap-1">
              <span className="text-sm font-medium text-muted-foreground">Valor total</span>
              <span className="text-5xl font-extrabold tracking-tight text-foreground">
                R$&nbsp;990<span className="text-2xl font-bold text-muted-foreground">,00</span>
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Cartão */}
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <CreditCard size={18} />
                  <span className="text-sm font-bold">Cartão de Crédito</span>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  6x <span className="text-lg">de</span> R$&nbsp;165<span className="text-sm text-muted-foreground">,00</span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">Sem juros no cartão</p>
              </div>

              {/* Boleto */}
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <Receipt size={18} />
                  <span className="text-sm font-bold">Boleto Bancário</span>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  50% + 50%
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Entrada de R$&nbsp;495,00 + R$&nbsp;495,00 na entrega
                </p>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="border-t border-border" />

          {/* Profissional */}
          <div className="p-6 md:p-10">
            <h2 className="mb-4 text-lg font-bold text-foreground">Responsável Técnico</h2>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">{siteConfig.nome}</p>
              <p>CREA: {siteConfig.crea}</p>
              <p>Região de atendimento: {siteConfig.regiao}</p>
            </div>
          </div>

          {/* Divisor */}
          <div className="border-t border-border" />

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 p-6 md:p-10">
            <button
              onClick={open}
              className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              <WhatsAppIcon />
              Contratar Avaliação
            </button>
            <p className="text-xs text-muted-foreground">Resposta rápida · Sem compromisso</p>
          </div>
        </div>

        {/* Observações */}
        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <h3 className="mb-3 text-sm font-bold text-foreground">Observações</h3>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check size={14} className="mt-0.5 flex-shrink-0 text-accent" />
              Proposta válida por 30 dias a partir do envio.
            </li>
            <li className="flex items-start gap-2">
              <Check size={14} className="mt-0.5 flex-shrink-0 text-accent" />
              O prazo de entrega inicia após a realização da vistoria e recebimento da documentação.
            </li>
            <li className="flex items-start gap-2">
              <Check size={14} className="mt-0.5 flex-shrink-0 text-accent" />
              Deslocamentos fora da região podem ter custo adicional a ser combinado previamente.
            </li>
          </ul>
        </div>

        {/* Rodapé */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          {siteConfig.nome} · CREA {siteConfig.crea} · {siteConfig.cidade}
        </p>
      </div>
    </main>
  );
};

export default Proposta;
