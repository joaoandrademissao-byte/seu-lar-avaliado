import TopBar from "@/components/landing/TopBar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import ForWhom from "@/components/landing/ForWhom";
import Deliverables from "@/components/landing/Deliverables";
import HowItWorks from "@/components/landing/HowItWorks";
import StatisticalMethod from "@/components/landing/StatisticalMethod";
import WhyItMatters from "@/components/landing/WhyItMatters";
// import Testimonials from "@/components/landing/Testimonials";
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
      <StatisticalMethod />
      <WhyItMatters />
      {/* <Testimonials /> */}
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
