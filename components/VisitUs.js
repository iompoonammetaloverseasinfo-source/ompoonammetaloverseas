import { Mail, MapPin, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import GoogleMap from "./GoogleMap";
import { company } from "@/data/company";

export default function VisitUs() {
  return (
    <section className="section bg-paper">
      <div className="wrap">
        <SectionHeading
          eyebrow="Find Us"
          title="Rakhial, Ahmedabad"
          description="Stock, samples and paperwork can be inspected at our Ahmedabad yard by appointment."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <ScrollReveal className="lg:col-span-7 order-2 lg:order-1">
            <GoogleMap className="h-72 sm:h-[26rem]" />
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="lg:col-span-5 order-1 lg:order-2">
            <div className="spec-card h-full">
              <div className="spec-card__strip">
                <span>Head Office</span>
              </div>
              <div className="p-6 sm:p-7 space-y-5">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-brass-500 mt-0.5" />
                  <p className="text-sm text-graphite-700 leading-relaxed">
                    {company.address.full}
                  </p>
                </div>
                <div className="hairline" />
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-brass-500 mt-0.5" />
                  <a
                    href={`tel:${company.contact.phoneE164}`}
                    className="text-sm text-graphite-700 hover:text-brass-600 transition-colors"
                  >
                    {company.contact.phoneDisplay}
                  </a>
                </div>
                <div className="hairline" />
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-brass-500 mt-0.5" />
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="text-sm text-graphite-700 hover:text-brass-600 transition-colors break-all"
                  >
                    {company.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
