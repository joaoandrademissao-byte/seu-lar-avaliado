{/*
  =============================================
  CHECKLIST DE PUBLICAÇÃO
  =============================================
  [ ] Substituir placeholders em src/config/siteConfig.ts
  [ ] Substituir depoimentos de exemplo por reais
  [ ] Adicionar favicon personalizado (public/favicon.ico)
  [ ] Configurar OG image personalizada (meta tags no index.html)
  [ ] Adicionar Google Analytics 4 (GA4) script
  [ ] Configurar evento de clique no WhatsApp no GA4:
        gtag('event', 'click', { event_category: 'WhatsApp', event_label: 'CTA' })
  [ ] Testar responsividade em dispositivos reais
  [ ] Verificar contraste e acessibilidade (WCAG AA)

  VARIAÇÕES DE TEXTO DE BOTÃO:
  1. "Falar no WhatsApp"
  2. "Solicitar Avaliação"
  3. "Quero Meu Laudo"
  4. "Pedir Orçamento"
  5. "Falar com Engenheiro"
  6. "Solicitar Orçamento Grátis"

  MICROCOPYS ANTI-OBJEÇÃO:
  1. "Resposta rápida · Sem compromisso"
  2. "Atendimento em [REGIÃO] · Sigilo total"
  3. "Orçamento sem custo · Resposta em minutos"
  4. "Engenheiro Civil com CREA ativo"
  5. "Sem burocracia · Atendimento humanizado"
  6. "Metodologia técnica · Laudo com ART"
*/}

import TopBar from "@/components/landing/TopBar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import ForWhom from "@/components/landing/ForWhom";
import Deliverables from "@/components/landing/Deliverables";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyItMatters from "@/components/landing/WhyItMatters";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

const Index = () => {
  return (
    <main>
      <TopBar />
      <Hero />
      <SocialProof />
      <ForWhom />
      <Deliverables />
      <HowItWorks />
      <WhyItMatters />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
