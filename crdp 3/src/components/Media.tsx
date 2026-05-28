"use client";

import { motion } from "framer-motion";
import { media } from "@/data/content";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Media() {
  const [feature, ...rest] = media;

  return (
    <section
      id="media"
      className="relative bg-ink px-6 py-28 text-ivory md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">Media</p>
            <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
              The work, in motion
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-ivory/60">
            Cinematic films, drone surveys, construction progress, and
            before-and-after transformations — a closer look at how we build.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {/* Feature video */}
          <VideoCard item={feature} large />
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            {rest.map((m, i) => (
              <VideoCard key={m.id} item={m} delay={(i + 1) * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  item,
  large = false,
  delay = 0,
}: {
  item: (typeof media)[number];
  large?: boolean;
  delay?: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease, delay }}
      className={`group relative block w-full overflow-hidden border border-ivory/10 text-left ${
        large ? "aspect-[16/11] lg:aspect-auto lg:h-full" : "aspect-[4/3]"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1600ms] ease-luxe group-hover:scale-105"
        style={{ backgroundImage: `url(${item.poster})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

      {/* Play button */}
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/50 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-champagne group-hover:bg-champagne/20">
        <span className="ml-1 block h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-ivory" />
      </span>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <div>
          <p className="text-[0.58rem] uppercase tracking-luxe text-champagne">
            {item.category} · {item.location}
          </p>
          <h3 className="mt-1.5 font-display text-xl font-light leading-tight text-ivory md:text-2xl">
            {item.title}
          </h3>
        </div>
        <span className="text-[0.66rem] tracking-wide2 text-ivory/70">
          {item.duration}
        </span>
      </div>
    </motion.button>
  );
}
