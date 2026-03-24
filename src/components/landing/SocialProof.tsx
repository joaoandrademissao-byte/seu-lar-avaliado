import { MapPin, Clock, FileCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const indicators = [
  { icon: MapPin, title: `Atendimento no Brasil todo`, description: "Cobertura nacional completa" },
  { icon: Clock, title: `Entrega em até 48 horas`, description: "Agilidade sem perder qualidade" },
  { icon: FileCheck, title: "Metodologia normatizada", description: "NBR 14.653 da ABNT" },
];

const SocialProof = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-primary py-12 md:py-16">
      <div ref={ref} className={`container mx-auto grid gap-4 px-4 md:grid-cols-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {indicators.map(({ icon: Icon, title, description }, i) => (
          <div
            key={title}
            className={`flex items-start gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/10 p-6 backdrop-blur transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/20">
              <Icon size={24} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-primary-foreground">{title}</h3>
              <p className="text-sm text-primary-foreground/70">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
