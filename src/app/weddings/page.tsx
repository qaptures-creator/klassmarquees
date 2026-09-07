import type { Metadata } from "next";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceIntro from "@/components/service-page/ServiceIntro";
import ServiceOptionsList from "@/components/service-page/ServiceOptionsList";
import ServiceGalleryPreview from "@/components/service-page/ServiceGalleryPreview";
import ServicePlanning from "@/components/service-page/ServicePlanning";
import ServiceStickyStory from "@/components/service-page/ServiceStickyStory";
import EnquiryCTA from "@/components/home/EnquiryCTA";
import FAQSection from "@/components/shared/FAQSection";
import { getServicePage } from "@/config/services";

const content = getServicePage("weddings")!;

export const metadata: Metadata = {
  title: "Wedding Marquee Hire",
  description: content.heroSubhead,
};

export default function WeddingsPage() {
  return (
    <>
      <ServiceHero content={content} />
      <ServiceIntro content={content} />
      <ServiceGalleryPreview category="weddings" heading="Recent wedding marquees." />
      <ServiceOptionsList content={content} />
      <ServiceStickyStory content={content} />
      <ServicePlanning content={content} />
      <FAQSection faqs={content.faqs} eyebrow="Wedding FAQs" heading="Common questions about wedding marquees." />
      <EnquiryCTA heading={content.ctaHeadline} />
    </>
  );
}
