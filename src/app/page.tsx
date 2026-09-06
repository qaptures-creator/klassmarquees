import Hero from "@/components/home/Hero";
import CredibilityIntro from "@/components/home/CredibilityIntro";
import BrandStatement from "@/components/home/BrandStatement";
import Showcase from "@/components/home/Showcase";
import OccasionPathways from "@/components/home/OccasionPathways";
import ProcessSection from "@/components/home/ProcessSection";
import Capabilities from "@/components/home/Capabilities";
import ImageBreak from "@/components/home/ImageBreak";
import Testimonials from "@/components/home/Testimonials";
import EnquiryCTA from "@/components/home/EnquiryCTA";
import FAQSection from "@/components/shared/FAQSection";
import { generalFaqs } from "@/config/faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityIntro />
      <BrandStatement />
      <Showcase />
      <OccasionPathways />
      <ProcessSection />
      <Capabilities />
      <ImageBreak />
      <Testimonials />
      <FAQSection faqs={generalFaqs} />
      <EnquiryCTA />
    </>
  );
}
