import Hero from "@/components/Hero";
import RotatingBanner from "@/components/RotatingBanner";
import ProductShowcase from "@/components/ProductShowcase";
import StatsStrip from "@/components/StatsStrip";
import ProductsTeaser from "@/components/ProductsTeaser";
import CatalogScale from "@/components/CatalogScale";
import GradeLinkDirectory from "@/components/GradeLinkDirectory";
import CertificateShowcase from "@/components/CertificateShowcase";
import HowWeWork from "@/components/HowWeWork";
import GuideCallout from "@/components/GuideCallout";
import WhyChooseUs from "@/components/WhyChooseUs";
import VisitUs from "@/components/VisitUs";
import CTASection from "@/components/CTASection";
import { siteConfig, siteUrl } from "@/data/siteConfig";

export const metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: siteUrl },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <RotatingBanner />
      <ProductShowcase />
      <StatsStrip />
      <ProductsTeaser />
      <CatalogScale />
      <GradeLinkDirectory />
      <CertificateShowcase />
      <HowWeWork />
      <GuideCallout />
      <WhyChooseUs />
      <VisitUs />
      <CTASection />
    </>
  );
}