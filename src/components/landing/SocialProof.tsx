import { MapPin, Clock, FileCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const indicators = [
  { icon: MapPin, title: `Atendimento em ${siteConfig.regiao}`, description: "Cobertura regional completa" },
  { icon: Clock, title: `Entrega em até ${siteConfig.prazo}`, description: "Agilidade sem perder qualidade" },
  { icon: FileCheck, title: "Metodologia normatizada", description: "NBR 14.653 da ABNT" },
];

const SocialProof = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto grid gap-4 px-4 md:grid-cols-3">
        {indicators.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Icon size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
