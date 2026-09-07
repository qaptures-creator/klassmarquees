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

const content = getServicePage("private-events")!;

export const metadata: Metadata = {
  title: "Private Event Marquee Hire",
  description: content.heroSubhead,
};

export default function PrivateEventsPage() {
  return (
    <>
      <ServiceHero content={content} />
      <ServiceIntro content={content} />
      <ServiceOptionsList content={content} />
      <ServiceGalleryPreview category="private-events" heading="Recent private celebrations." />
      <ServiceStickyStory content={content} />
      <ServicePlanning content={content} />
      <FAQSection faqs={content.faqs} eyebrow="Private Event FAQs" heading="Common questions about private celebrations." />
      <EnquiryCTA heading={content.ctaHeadline} />
    </>
  );
}
