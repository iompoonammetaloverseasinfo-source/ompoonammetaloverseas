import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import ProductsTeaser from "@/components/ProductsTeaser";
import CertificateShowcase from "@/components/CertificateShowcase";
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
      <StatsStrip />
      <ProductsTeaser />
      <CertificateShowcase />
      <WhyChooseUs />
      <VisitUs />
      <CTASection />
    </>
  );
}
