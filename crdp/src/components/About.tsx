"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { figure: "$150M+", label: "In Active Development" },
  { figure: "18", label: "Residences Delivered" },
  { figure: "5", label: "Westside Submarkets" },
  { figure: "100%", label: "Owner-Led Execution" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bone">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2">
        {/* Image side */}
        <div className="relative min-h-[60vh] overflow-hidden lg:min-h-full">
          <motion.div
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/about-texture.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bone/30 lg:to-bone/60" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="rule-gold mb-5 max-w-[120px] opacity-80" />
            <p className="font-display text-xl font-light italic text-ivory">
              &ldquo;We build the homes our clients cannot find anywhere
              else.&rdquo;
            </p>
          </div>
        </div>

        {/* Copy side */}
        <div className="px-6 py-24 md:px-16 md:py-32">
          <Reveal>
            <p className="eyebrow mb-6">About CRDP</p>
            <h2 className="font-display text-4xl font-light leading-[1.12] text-ink sm:text-5xl">
              A Los Angeles development house, built on execution
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 space-y-5 text-[0.95rem] font-light leading-relaxed text-graphite/90">
              <p>
                California Residential Development Partners is a Los
                Angeles-based residential development company specializing in
                high-end homes, complex construction, and value creation through
                design, planning, and disciplined execution.
              </p>
              <p>
                We operate across the city&apos;s most coveted submarkets —
                Beverly Hills, Brentwood, Sherman Oaks, Pacific Palisades, and
                Mandeville Canyon — taking on ground-up development,
                redevelopment, and luxury remodels that demand both architectural
                ambition and construction rigor.
              </p>
              <p>
                Every commission is owner-led from entitlement through final
                finish, with a singular standard: residences of enduring quality,
                delivered without compromise.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-y-10 border-t border-sand/60 pt-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              >
                <p className="font-display text-4xl font-light text-gold md:text-5xl">
                  {s.figure}
                </p>
                <p className="mt-2 text-[0.64rem] uppercase tracking-wide2 text-stone">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
