import type { Metadata } from "next";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceIntro from "@/components/service-page/ServiceIntro";
import ServiceOptionsList from "@/components/service-page/ServiceOptionsList";
import ServiceGalleryPreview from "@/components/service-page/ServiceGalleryPreview";
import ServicePlanning from "@/components/service-page/ServicePlanning";
import ImageBreak from "@/components/home/ImageBreak";
import EnquiryCTA from "@/components/home/EnquiryCTA";
import FAQSection from "@/components/shared/FAQSection";
import { getServicePage } from "@/config/services";

const content = getServicePage("corporate")!;

export const metadata: Metadata = {
  title: "Corporate Event Marquee Hire",
  description: content.heroSubhead,
};

export default function CorporatePage() {
  return (
    <>
      <ServiceHero content={content} />
      <ServiceIntro content={content} />
      <ServiceOptionsList content={content} />
      <ServicePlanning content={content} />
      <ServiceGalleryPreview category="corporate" heading="Recent corporate builds." />
      <ImageBreak
        quote="A space that performs as precisely as your event does."
        src="/images/services/corporate-break.jpg"
        category="corporate"
      />
      <FAQSection faqs={content.faqs} eyebrow="Corporate FAQs" heading="Common questions about corporate events." />
      <EnquiryCTA heading={content.ctaHeadline} />
    </>
  );
}
