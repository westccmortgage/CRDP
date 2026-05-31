"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectStatus } from "@/lib/types";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const filters: ("All" | ProjectStatus)[] = [
  "All",
  "Completed",
  "Under Construction",
  "In Development",
  "Coming Soon",
];

export default function Portfolio() {
  const [filter, setFilter] = useState<"All" | ProjectStatus>("All");
  const list =
    filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <section
      id="portfolio"
      className="relative bg-bone px-6 py-28 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-12">
          <p className="eyebrow mb-5">Development Portfolio</p>
          <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl md:text-6xl">
            Selected works across the Westside
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mb-10 flex flex-wrap gap-x-8 gap-y-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`link-underline text-[0.7rem] uppercase tracking-wide2 transition-colors duration-300 ${
                filter === f ? "text-gold" : "text-graphite/60 hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="rule-gold mb-2 opacity-60" />

        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.a
              layout
              key={p.id}
              href={`/projects/${p.id}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className="group grid grid-cols-12 items-center gap-4 border-b border-sand/50 py-6 md:py-7"
            >
              {/* Thumbnail */}
              <div className="col-span-12 mb-3 sm:col-span-3 sm:mb-0 md:col-span-2">
                <div className="relative aspect-[3/2] overflow-hidden bg-ink">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-luxe group-hover:scale-110"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                  <div className="absolute inset-0 bg-ink/10 transition-colors duration-500 group-hover:bg-ink/0" />
                </div>
              </div>

              {/* Name */}
              <div className="col-span-7 sm:col-span-4 md:col-span-4">
                <h3 className="font-display text-2xl font-light leading-tight text-ink transition-colors duration-500 group-hover:text-gold md:text-3xl">
                  {p.name}
                </h3>
                <p className="mt-1 text-[0.64rem] uppercase tracking-wide2 text-stone">
                  {p.location}
                </p>
              </div>

              {/* Type */}
              <div className="col-span-5 hidden text-xs font-light text-graphite/80 md:col-span-3 md:block">
                {p.type}
              </div>

              {/* Value */}
              <div className="col-span-3 text-right sm:col-span-2 md:col-span-1">
                <span className="font-display text-xl text-graphite md:text-2xl">
                  {p.value}
                </span>
              </div>

              {/* Status */}
              <div className="col-span-2 flex justify-end sm:col-span-3 md:col-span-2">
                <span className="flex items-center gap-2 whitespace-nowrap text-[0.6rem] uppercase tracking-wide2 text-graphite/70">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      p.status === "Completed"
                        ? "bg-gold"
                        : p.status === "Under Construction"
                        ? "bg-champagne"
                        : "bg-sand"
                    }`}
                  />
                  <span className="hidden sm:inline">{p.status}</span>
                </span>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
