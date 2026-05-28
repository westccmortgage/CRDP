"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Project } from "@/lib/types";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectDetail({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 160]);
  const heroOpacity = useTransform(scrollY, [0, 650], [1, 0.35]);

  return (
    <main className="bg-ivory text-ink">
      <section className="relative min-h-screen overflow-hidden bg-ink">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.image})`,
            y: heroY,
            opacity: heroOpacity,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/20" />

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-8 md:px-12">
          <div className="flex items-center justify-between text-ivory">
            <Link href="/" className="text-[0.68rem] uppercase tracking-luxe text-ivory/80 transition hover:text-champagne">
              ← Back to portfolio
            </Link>
            <span className="border border-ivory/30 px-3 py-1.5 text-[0.62rem] uppercase tracking-wide2 text-ivory/85 backdrop-blur-sm">
              {project.status}
            </span>
          </div>

          <div className="max-w-5xl pb-14 text-ivory md:pb-20">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="mb-5 text-[0.65rem] uppercase tracking-luxe text-champagne"
            >
              {project.location}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.1 }}
              className="font-display text-5xl font-light leading-[0.96] sm:text-7xl md:text-8xl"
            >
              {project.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.22 }}
              className="mt-7 max-w-2xl text-base font-light leading-relaxed text-ivory/82 md:text-lg"
            >
              {project.detail.intro}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="border-b border-sand/70 bg-bone px-6 py-7 md:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 md:grid-cols-4">
          {[
            ["Type", project.type],
            ["Scale", project.value],
            ["Status", project.status],
            ["Year", project.year],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[0.58rem] uppercase tracking-wide2 text-stone">{label}</p>
              <p className="mt-1 font-display text-xl font-light text-ink md:text-2xl">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-7"
          >
            <p className="eyebrow mb-7">Project narrative</p>
            <div className="space-y-7 font-display text-2xl font-light leading-[1.32] text-ink md:text-4xl">
              {project.detail.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="sticky top-28 border border-sand/70 bg-bone p-7">
              <p className="mb-6 text-[0.64rem] uppercase tracking-luxe text-stone">Project specs</p>
              <div className="space-y-5">
                {project.detail.specs.map((spec) => (
                  <div key={spec.label} className="border-b border-sand/60 pb-4 last:border-0 last:pb-0">
                    <p className="text-[0.58rem] uppercase tracking-wide2 text-stone">{spec.label}</p>
                    <p className="mt-1 text-sm font-light leading-relaxed text-graphite">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="mb-4 text-[0.58rem] uppercase tracking-wide2 text-stone">Materials & finish</p>
                <div className="flex flex-wrap gap-2">
                  {project.detail.materials.map((item) => (
                    <span key={item} className="border border-sand/70 px-3 py-1.5 text-[0.62rem] uppercase tracking-wide2 text-graphite">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <Link href="/#contact" className="mt-8 block bg-ink px-6 py-4 text-center text-[0.68rem] uppercase tracking-luxe text-ivory transition hover:bg-gold">
                Project inquiry
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-5">Gallery</p>
              <h2 className="font-display text-4xl font-light leading-tight text-ink md:text-6xl">
                Editorial views
              </h2>
            </div>
            <p className="max-w-sm text-sm font-light leading-relaxed text-graphite/75">
              Selected real photography from the CRDP project archive.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {project.detail.gallery.map((image, index) => (
              <motion.figure
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease, delay: (index % 2) * 0.08 }}
                className={`group relative overflow-hidden bg-ink ${
                  image.span === "wide" ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`bg-cover bg-center transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.04] ${
                    image.span === "tall" ? "aspect-[4/5]" : image.span === "wide" ? "aspect-[16/8]" : "aspect-[4/3]"
                  }`}
                  style={{ backgroundImage: `url(${image.src})` }}
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/78 p-5 text-xs uppercase tracking-wide2 text-ivory/85 backdrop-blur-sm transition-transform duration-500 group-hover:translate-y-0">
                  {image.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-6 py-24 text-ivory md:px-12 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center opacity-28" style={{ backgroundImage: `url(${nextProject.image})` }} />
        <div className="absolute inset-0 bg-ink/72" />
        <div className="relative z-10 mx-auto max-w-[1400px]">
          <p className="mb-5 text-[0.65rem] uppercase tracking-luxe text-champagne">Next project</p>
          <Link href={`/projects/${nextProject.id}`} className="group block">
            <h2 className="font-display text-5xl font-light leading-tight transition-colors group-hover:text-champagne md:text-7xl">
              {nextProject.name}
            </h2>
            <p className="mt-5 text-sm uppercase tracking-wide2 text-ivory/70">{nextProject.location}</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
