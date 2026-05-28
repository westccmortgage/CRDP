"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/content";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative bg-ivory px-6 py-28 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 max-w-3xl">
          <p className="eyebrow mb-5">Capabilities</p>
          <h2 className="font-display text-4xl font-light leading-[1.1] text-ink sm:text-5xl md:text-6xl">
            A complete development practice, under one roof
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 border-l border-t border-sand/60 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease, delay: (i % 3) * 0.1 }}
              className="group relative border-b border-r border-sand/60 p-9 transition-colors duration-500 hover:bg-bone md:p-11"
            >
              <span className="font-display text-3xl font-light text-sand transition-colors duration-500 group-hover:text-gold">
                {c.index}
              </span>
              <h3 className="mt-6 font-display text-2xl font-light leading-snug text-ink">
                {c.title}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-graphite/80">
                {c.description}
              </p>
              <span className="mt-6 block h-px w-0 bg-gold transition-all duration-700 ease-luxe group-hover:w-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
