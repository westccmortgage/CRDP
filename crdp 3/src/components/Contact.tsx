"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const projectTypes = [
  "Ground-Up Development",
  "Luxury Remodel",
  "Estate Redevelopment",
  "Construction Management",
  "Other",
];

const locations = [
  "Beverly Hills",
  "Brentwood",
  "Sherman Oaks",
  "Pacific Palisades",
  "Mandeville Canyon",
  "Other Los Angeles",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form backend can be connected later. For now this is client-side only.
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-ivory px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12">
        {/* Left intro */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-6">Project Inquiry</p>
            <h2 className="font-display text-4xl font-light leading-[1.1] text-ink sm:text-5xl md:text-6xl">
              Begin a
              <br />
              conversation
            </h2>
            <p className="mt-7 max-w-md text-[0.95rem] font-light leading-relaxed text-graphite/85">
              For new development opportunities, redevelopment, or private
              residential commissions, we welcome a confidential introduction.
            </p>

            <div className="mt-12 space-y-6">
              <ContactLine label="Studio" value="Los Angeles, California" />
              <ContactLine label="Email" value="inquiries@crdp.dev" />
              <ContactLine label="Telephone" value="+1 (310) 555-0147" />
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
                className="flex min-h-[400px] flex-col items-center justify-center border border-sand/60 bg-bone p-12 text-center"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold">
                  <span className="text-2xl text-gold">✓</span>
                </div>
                <h3 className="font-display text-3xl font-light text-ink">
                  Thank you
                </h3>
                <p className="mt-3 max-w-sm text-sm font-light text-graphite/80">
                  Your inquiry has been received. A member of our development
                  team will respond personally and in confidence.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2"
              >
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <SelectField label="Project Type" name="projectType" options={projectTypes} />
                <SelectField
                  label="Property Location"
                  name="location"
                  options={locations}
                  className="sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <Label>Message</Label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full resize-none border-b border-sand bg-transparent py-3 font-light text-ink outline-none transition-colors duration-300 placeholder:text-stone/50 focus:border-gold"
                    placeholder="Tell us about your project or property…"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden bg-ink px-9 py-5 text-[0.7rem] uppercase tracking-luxe text-ivory sm:w-auto"
                  >
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-ink">
                      Submit Inquiry
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-champagne transition-transform duration-500 ease-luxe group-hover:translate-x-0" />
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-[0.62rem] uppercase tracking-wide2 text-stone">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>
        {label}
        {required && <span className="text-gold"> *</span>}
      </Label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border-b border-sand bg-transparent py-3 font-light text-ink outline-none transition-colors duration-300 focus:border-gold"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  className = "",
}: {
  label: string;
  name: string;
  options: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <select
        name={name}
        defaultValue=""
        className="w-full appearance-none border-b border-sand bg-transparent py-3 font-light text-ink outline-none transition-colors duration-300 focus:border-gold"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-sand/50 pb-5">
      <p className="text-[0.6rem] uppercase tracking-luxe text-stone">{label}</p>
      <p className="mt-1.5 font-display text-xl font-light text-ink">{value}</p>
    </div>
  );
}
