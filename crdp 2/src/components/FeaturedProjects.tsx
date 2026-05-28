"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative bg-ivory px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Featured Projects</p>
            <h2 className="font-display text-4xl font-light leading-[1.08] text-ink sm:text-5xl md:text-6xl">
              A private portfolio of
              <br />
              Los Angeles residences
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-graphite/80">
            Each project is a singular commission — conceived, entitled, and
            built to the standard of the world&apos;s most demanding clients.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href="#portfolio"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease, delay: (i % 3) * 0.12 }}
              className={`group relative block overflow-hidden bg-ink ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.06]"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/10" />

                {/* Status tag */}
                <div className="absolute left-5 top-5 flex items-center gap-2 border border-ivory/30 bg-ink/30 px-3 py-1.5 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                  <span className="text-[0.58rem] uppercase tracking-wide2 text-ivory">
                    {p.status}
                  </span>
                </div>
                <span className="absolute right-5 top-5 font-display text-sm text-ivory/70">
                  {p.year}
                </span>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[0.6rem] uppercase tracking-luxe text-champagne">
                    {p.location}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-light leading-tight text-ivory md:text-[1.7rem]">
                    {p.name}
                  </h3>
                  <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-700 ease-luxe group-hover:max-h-32 group-hover:opacity-100">
                    <p className="text-xs font-light leading-relaxed text-ivory/80">
                      {p.blurb}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-ivory/20 pt-4">
                    <span className="text-[0.62rem] uppercase tracking-wide2 text-ivory/70">
                      {p.type}
                    </span>
                    <span className="font-display text-lg text-champagne">
                      {p.value}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
