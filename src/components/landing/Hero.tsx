import { Award, Zap, HandshakeIcon } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import heroBackground from "@/assets/hero-engineer.jpg";
import heroPhoto from "@/assets/hero-property-evaluation.png";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";

const WhatsAppIcon = ({ size = 28 }: { size?: number }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.745 3.047 9.379L1.054 31.49l6.311-2.022A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.335 22.594c-.39 1.1-1.932 2.013-3.175 2.28-.852.18-1.964.324-5.709-1.227-4.795-1.986-7.882-6.853-8.12-7.172-.23-.319-1.927-2.567-1.927-4.894s1.22-3.472 1.653-3.948c.39-.432 1.036-.648 1.654-.648.2 0 .38.01.541.019.433.019.65.043.936.722.358.852 1.228 2.994 1.336 3.213.11.219.219.516.068.816-.143.308-.268.497-.487.764-.219.267-.428.472-.647.759-.2.248-.424.515-.176.948.248.432 1.104 1.82 2.37 2.948 1.631 1.452 3.004 1.904 3.436 2.113.432.21.685.176.936-.105.26-.29 1.104-1.285 1.396-1.727.284-.443.576-.367.964-.22.39.148 2.472 1.167 2.896 1.38.424.218.706.324.814.504.104.181.104 1.052-.286 2.15Z" />
  </svg>
);

const badges = [
  { icon: Award, label: `CREA — ${siteConfig.crea}` },
  { icon: Zap, label: "Resposta Rápida" },
  { icon: HandshakeIcon, label: "Sem Compromisso" },
];

const Hero = () => {
  const { open } = useWhatsAppModal();

  return (
    <section className="relative overflow-hidden bg-secondary pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBackground} alt="" className="h-full w-full object-cover object-top opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-12">

          {/* Foto — aparece no topo em mobile, à direita em desktop */}
          <div className="w-full flex justify-center lg:hidden">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-2xl" />
              <img
                src={heroPhoto}
                alt="Engenheiro Civil Andrade Missão Engenharia realizando vistoria"
                className="relative z-10 w-full max-h-72 rounded-2xl object-cover object-top shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="max-w-2xl flex-1 text-center lg:text-left">
            <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Saiba o valor real do seu imóvel{" "}
              <span className="text-accent">— Avaliação Imobiliária com laudo</span>
            </h1>
            <p className="mb-6 text-lg text-primary-foreground/80 md:text-xl">
              Avaliação imobiliária com rigor técnico e metodologia normatizada. Laudos entregues com agilidade e precisão.
            </p>
            <ul className="mb-8 space-y-2 text-primary-foreground/90">
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Entrega em até <strong>48 horas</strong>
              </li>
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Metodologia conforme NBR 14.653
              </li>
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Atendimento em <strong>todo o Brasil</strong>
              </li>
            </ul>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button
                onClick={open}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <WhatsAppIcon size={22} />
                Solicitar Avaliação
              </button>
            </div>
            <p className="mb-8 text-sm text-primary-foreground/60">
              Engenheiro Civil · CREA {siteConfig.crea}
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-xs font-medium text-primary-foreground/90">
                  <Icon size={14} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Foto — apenas desktop, à direita */}
          <div className="hidden flex-shrink-0 lg:block">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-3xl" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/40 via-primary-foreground/20 to-accent/10" />
              <img
                src={heroPhoto}
                alt="Engenheiro Civil Andrade Missão Engenharia realizando vistoria"
                className="relative z-10 h-[500px] w-[400px] rounded-2xl object-cover object-top shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
              />
              <div className="absolute -bottom-3 left-1/2 z-20 h-1.5 w-3/4 -translate-x-1/2 rounded-full bg-accent/60 blur-sm" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
