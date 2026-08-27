import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import ScrollReveal from "@/components/ScrollReveal";
import { company } from "@/data/company";
import { siteUrl } from "@/data/siteConfig";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Om Poonam Metal Overseas in Ahmedabad, Gujarat — call, WhatsApp, email, or send your material requirement directly.",
  alternates: { canonical: `${siteUrl}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a Quote"
        description="Grade, form, size and quantity — that's all we need to confirm stock and quote. Reach us directly, or use the form below."
      />

      <section className="section bg-paper">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <ScrollReveal className="lg:col-span-7">
            <div className="spec-card">
              <div className="spec-card__strip">
                <span>Enquiry Form</span>
                <span>Reply same working day</span>
              </div>
              <div className="p-6 sm:p-8">
                <Suspense fallback={null}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="lg:col-span-5">
            <div className="space-y-6">
              <div className="spec-card">
                <div className="spec-card__strip">
                  <span>Direct Contact</span>
                </div>
                <div className="p-6 sm:p-7 space-y-5">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-brass-500 mt-0.5" />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-graphite-400">
                        Head Office
                      </p>
                      <p className="mt-1 text-sm text-graphite-700 leading-relaxed">
                        {company.address.full}
                      </p>
                    </div>
                  </div>
                  <div className="hairline" />
                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-brass-500 mt-0.5" />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-graphite-400">
                        Phone / WhatsApp
                      </p>
                      <a
                        href={`tel:${company.contact.phoneE164}`}
                        className="mt-1 block text-sm text-graphite-700 hover:text-brass-600 transition-colors"
                      >
                        {company.contact.phoneDisplay}
                      </a>
                      {company.contact.alternatePhones?.length > 0 && (
                        <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
                          {company.contact.alternatePhones.map((p) => (
                            <a
                              key={p.e164}
                              href={`tel:${p.e164}`}
                              className="text-xs text-graphite-400 hover:text-brass-600 transition-colors"
                            >
                              {p.display}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="hairline" />
                  <div className="flex gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-brass-500 mt-0.5" />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-graphite-400">
                        Email
                      </p>
                      <a
                        href={`mailto:${company.contact.email}`}
                        className="mt-1 block text-sm text-graphite-700 hover:text-brass-600 transition-colors break-all"
                      >
                        {company.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="hairline" />
                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-brass-500 mt-0.5" />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-graphite-400">
                        Working Hours
                      </p>
                      <div className="mt-1 space-y-1">
                        <p className="flex items-baseline justify-between gap-3 text-sm text-graphite-700">
                          <span>{company.contact.hours.weekdays}</span>
                          <span className="font-semibold text-graphite-900">
                            {company.contact.hours.weekdayTime}
                          </span>
                        </p>
                        <p className="flex items-baseline justify-between gap-3 text-sm text-graphite-700">
                          <span>Sunday</span>
                          <span className="font-semibold text-graphite-400">
                            {company.contact.hours.sunday}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section pt-0 bg-paper">
        <div className="wrap">
          <GoogleMap className="h-80 sm:h-[28rem]" />
        </div>
      </section>
    </>
  );
}