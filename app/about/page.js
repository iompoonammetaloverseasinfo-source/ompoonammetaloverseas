import PageHero from "@/components/PageHero";
import FounderProfile from "@/components/FounderProfile";
import Timeline from "@/components/Timeline";
import CredentialsGrid from "@/components/CredentialsGrid";
import CertificatesGallery from "@/components/CertificatesGallery";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { company } from "@/data/company";
import { siteUrl } from "@/data/siteConfig";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Om Poonam Metal Overseas — an ISO 9001:2015 certified metal stockist and trader based in Ahmedabad, Gujarat, led by proprietor Harachndram V. Purohit.",
  alternates: { canonical: `${siteUrl}/about` },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Metal trading, built on paperwork that holds up"
        description="A proprietorship-run stockist and trading house in Ahmedabad, Gujarat — supplying stainless, alloy and non-ferrous metal to fabricators, EPC contractors and re-rollers across India and abroad."
      />

      <section className="section bg-paper">
        <div className="wrap max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold uppercase text-graphite-900 leading-tight">
              From a Rakhial stockyard to a certified trading house
            </h2>
            <div className="mt-6 space-y-4 text-graphite-600 leading-relaxed">
              <p>
                {company.legalTradeName} started as a metal stocking and
                trading operation in the Rakhial industrial belt of
                Ahmedabad — the kind of address where buyers still walk in,
                check the material against the mill certificate, and place
                the order on the spot.
              </p>
              <p>
                That habit of showing the paperwork shaped how the business
                is run. As demand grew beyond the local market, the firm
                formalised its GST registration, secured an
                Importer-Exporter Code, registered under Udyam as a Micro
                Enterprise, and put its internal processes through
                independent {company.certification.standard} certification —
                the same standard multinational buyers ask for before they
                sign a purchase order.
              </p>
              <p>
                Today it operates alongside its group concern,{" "}
                {company.groupConcern}, across manufacturing, trading,
                stocking, import, export and supply of stainless steel,
                alloy steel and non-ferrous metal products — sheets and
                plates through to pipes, fittings, flanges and structurals.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Timeline />
          </ScrollReveal>
        </div>
      </section>

      <FounderProfile />

      <section className="section bg-mist-50">
        <div className="wrap">
          <SectionHeading
            eyebrow="Registrations & Standing"
            title="Every credential, on the record"
            description="Documents are available for verification on request — from GST and IEC to our ISO 9001:2015 certificate."
          />
          <div className="mt-12">
            <CredentialsGrid />
          </div>

          <div className="mt-16 scroll-mt-24" id="certificates">
            <p className="eyebrow mb-1.5">Tap to view full size</p>
            <h3 className="font-display text-2xl font-bold uppercase text-graphite-900 mb-6">
              The Certificates Themselves
            </h3>
            <CertificatesGallery />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
