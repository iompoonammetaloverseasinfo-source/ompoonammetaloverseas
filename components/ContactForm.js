"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { company } from "@/data/company";
import { productFamilies } from "@/data/products";

const inputClasses =
  "w-full border border-graphite-200 bg-paper px-4 py-3 text-sm text-graphite-800 placeholder:text-graphite-300 focus:border-brass-500 focus:outline-none transition-colors disabled:opacity-60";

// idle | submitting | success | error
export default function ContactForm() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");

  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: productParam
      ? `I'd like a quote for: ${productParam}\n\nGrade / size / quantity:\nDelivery location:`
      : "",
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!company.contact.web3formsKey) {
      // Not configured yet — see the comment in data/company.js.
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: company.contact.web3formsKey,
          subject: `Website enquiry — ${form.name || "New enquiry"}`,
          from_name: form.name || "Website enquiry",
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          product_interest: form.interest || "Not specified",
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", company: "", email: "", phone: "", interest: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-brass-500" />
        <h3 className="font-display text-2xl font-bold uppercase text-graphite-900">
          Enquiry sent
        </h3>
        <p className="max-w-sm text-sm text-graphite-500">
          Thanks — we've received your requirement and will get back to you the
          same working day. You can also reach us directly at{" "}
          {company.contact.phoneDisplay}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brass-600 hover:text-brass-700"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-graphite-500">
            Full name *
          </label>
          <input
            id="name"
            required
            disabled={status === "submitting"}
            value={form.name}
            onChange={update("name")}
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="companyName" className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-graphite-500">
            Company
          </label>
          <input
            id="companyName"
            disabled={status === "submitting"}
            value={form.company}
            onChange={update("company")}
            className={inputClasses}
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-graphite-500">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            disabled={status === "submitting"}
            value={form.email}
            onChange={update("email")}
            className={inputClasses}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-graphite-500">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            disabled={status === "submitting"}
            value={form.phone}
            onChange={update("phone")}
            className={inputClasses}
            placeholder="+91"
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-graphite-500">
          Product interest
        </label>
        <select
          id="interest"
          disabled={status === "submitting"}
          value={form.interest}
          onChange={update("interest")}
          className={`${inputClasses} appearance-none`}
        >
          <option value="">Select a category (optional)</option>
          {productFamilies.map((f) => (
            <option key={f.id} value={f.name}>
              {f.name}
            </option>
          ))}
          <option value="Other / Not sure">Other / not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-graphite-500">
          Requirement details *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          disabled={status === "submitting"}
          value={form.message}
          onChange={update("message")}
          className={inputClasses}
          placeholder="Grade, form (sheet / pipe / plate...), size, quantity, and delivery location"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 bg-brass-500 hover:bg-brass-400 disabled:hover:bg-brass-500 disabled:opacity-70 text-graphite-900 font-semibold px-6 py-3.5 transition-colors"
      >
        {status === "submitting" ? (
          <>
            Sending
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Send Enquiry
            <Send className="h-4 w-4" />
          </>
        )}
      </button>

      {status === "error" && (
        <div className="flex gap-2.5 border border-red-200 bg-red-50 p-4">
          <TriangleAlert className="h-4 w-4 shrink-0 mt-0.5 text-red-600" />
          <p className="text-xs text-red-700 leading-relaxed">
            {company.contact.web3formsKey
              ? "Something went wrong sending that — please try again, or reach us directly at "
              : "The enquiry form isn't fully set up yet — please reach us directly at "}
            <a href={`tel:${company.contact.phoneE164}`} className="font-semibold underline">
              {company.contact.phoneDisplay}
            </a>{" "}
            or{" "}
            <a href={`mailto:${company.contact.email}`} className="font-semibold underline">
              {company.contact.email}
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}