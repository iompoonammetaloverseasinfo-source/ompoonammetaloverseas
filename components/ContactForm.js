"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { company } from "@/data/company";
import { productFamilies } from "@/data/products";

const inputClasses =
  "w-full border border-graphite-200 bg-paper px-4 py-3 text-sm text-graphite-800 placeholder:text-graphite-300 focus:border-brass-500 focus:outline-none transition-colors";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Website enquiry — ${form.name || "New enquiry"}`
    );
    const bodyLines = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Product interest: ${form.interest || "Not specified"}`,
      "",
      "Message:",
      form.message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${company.contact.email}?subject=${subject}&body=${body}`;
  };

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
          value={form.message}
          onChange={update("message")}
          className={inputClasses}
          placeholder="Grade, form (sheet / pipe / plate...), size, quantity, and delivery location"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-brass-500 hover:bg-brass-400 text-graphite-900 font-semibold px-6 py-3.5 transition-colors"
      >
        Send Enquiry
        <Send className="h-4 w-4" />
      </button>
      <p className="text-xs text-graphite-400">
        This opens your email app with the details filled in, addressed to{" "}
        {company.contact.email}.
      </p>
    </form>
  );
}
