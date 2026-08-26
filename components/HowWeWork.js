import { ClipboardList, PackageCheck, ScanSearch, Truck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { company } from "@/data/company";

// A homepage-specific process story — distinct from the About page's
// company history — walking through how an order actually moves.
// Grounded in the firm's own ISO audit findings (work instructions per
// process, sample verification before dispatch, post-delivery follow-up)
// and real site/company facts (working hours, the per-product contact
// form pre-fill, GST/IEC registration) rather than generic stock copy.
const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Enquiry",
    body: `Share the grade, form, size and quantity — by phone, WhatsApp, or directly from any product page, which pre-fills your enquiry with that exact item. Reach us ${company.contact.hours.weekdays}, ${company.contact.hours.weekdayTime}, and most enquiries get a stock and price confirmation the same working day.`,
  },
  {
    icon: ScanSearch,
    step: "02",
    title: "Grade Verification",
    body: "Material is checked against its mill certificate and governing ASTM/ASME standard before it's confirmed against your order — the same verification step our ISO 9001:2015 audit reviews every cycle.",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "Dispatch",
    body: "\u201COn-time delivery\u201D isn't just a promise here — it's a standing quality objective we're formally measured against at every management review. GST and IEC registration mean the same discipline applies whether an order ships within Gujarat or crosses a border.",
  },
  {
    icon: Truck,
    step: "04",
    title: "After Delivery",
    body: "Post-delivery support stays open for grade queries, documentation, or the next order — handled directly by the proprietor rather than passed through a call centre. Most of our business is repeat customers.",
  },
];

export default function HowWeWork() {
  return (
    <section className="section bg-paper">
      <div className="wrap">
        <SectionHeading
          eyebrow="How An Order Moves"
          title="From enquiry to your dock"
          description="A small team handling every order personally means fewer handoffs — and fewer places for a mistake to creep in."
        />

        <div className="mt-12 grid grid-cols-1 gap-px bg-graphite-100 border border-graphite-100 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, step, title, body }, i) => (
            <ScrollReveal key={step} delay={i * 0.07} className="bg-paper">
              <div className="h-full p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-brass-500" strokeWidth={1.6} />
                  <span className="font-mono text-xs text-graphite-300">{step}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight text-graphite-900">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-graphite-500">{body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}