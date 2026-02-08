import { MessageCircle, Shield, Award, Lock, BookOpen, Home, Zap, HandshakeIcon } from "lucide-react";
import { siteConfig, defaultWhatsappLink } from "@/config/siteConfig";
import heroImage from "@/assets/hero-engineer.jpg";

const badges = [
  { icon: Award, label: `CREA — ${siteConfig.crea}` },
  { icon: Home, label: `CRECI — ${siteConfig.creci}` },
  { icon: Zap, label: "Resposta Rápida" },
  { icon: HandshakeIcon, label: "Sem Compromisso" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-secondary pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background hero image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Engenheiro civil realizando avaliação de imóvel urbano com tablet"
          className="h-full w-full object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl">
           <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Saiba o valor real do seu imóvel{" "}
            <span className="text-accent">— com quem é Engenheiro Civil e Corretor de Imóveis</span>
          </h1>

          <p className="mb-6 text-lg text-primary-foreground/80 md:text-xl">
            Avaliação imobiliária com rigor técnico, visão de mercado e experiência prática em negociações. Quem conhece o mercado por dentro avalia com mais precisão.
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
            Engenheiro Civil + Corretor de Imóveis · Visão técnica e de mercado
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
      </div>
    </section>
  );
};

export default Hero;
