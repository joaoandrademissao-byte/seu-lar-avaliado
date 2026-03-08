import { Award, Zap, HandshakeIcon } from "lucide-react";
import { siteConfig, defaultWhatsappLink } from "@/config/siteConfig";
import heroBackground from "@/assets/hero-engineer.jpg";
import heroPhoto from "@/assets/hero-property-evaluation.jpg";

const badges = [
  { icon: Award, label: `CREA — ${siteConfig.crea}` },
  { icon: Zap, label: "Resposta Rápida" },
  { icon: HandshakeIcon, label: "Sem Compromisso" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-secondary pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt=""
          className="h-full w-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex items-center gap-8 lg:gap-12">
          {/* Left — Text */}
          <div className="max-w-2xl flex-1">
            <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Saiba o valor real do seu imóvel{" "}
              <span className="text-accent">— com rigor técnico de Engenheiro Civil</span>
            </h1>

            <p className="mb-6 text-lg text-primary-foreground/80 md:text-xl">
              Avaliação imobiliária com rigor técnico e metodologia normatizada. Laudos entregues com agilidade e precisão.
            </p>

            <ul className="mb-8 space-y-2 text-primary-foreground/90">
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Entrega em até <strong className="ml-1">{siteConfig.prazo}</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Metodologia conforme NBR 14.653
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Atendimento em <strong className="ml-1">{siteConfig.regiao}</strong>
              </li>
            </ul>

            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <a
                href={defaultWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <MessageCircle size={22} />
                Solicitar Avaliação
              </a>
            </div>

            <p className="mb-8 text-sm text-primary-foreground/60">
              Engenheiro Civil · CREA {siteConfig.crea}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-xs font-medium text-primary-foreground/90"
                >
                  <Icon size={14} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero photo */}
          <div className="hidden flex-shrink-0 lg:block">
            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-3xl" />
              {/* Decorative border frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/40 via-primary-foreground/20 to-accent/10" />
              <img
                src={heroPhoto}
                alt="Engenheiro Civil - Andrade Missão Engenharia"
                className="relative z-10 h-[480px] w-[380px] rounded-2xl object-cover object-top shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
              />
              {/* Bottom accent bar */}
              <div className="absolute -bottom-3 left-1/2 z-20 h-1.5 w-3/4 -translate-x-1/2 rounded-full bg-accent/60 blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
