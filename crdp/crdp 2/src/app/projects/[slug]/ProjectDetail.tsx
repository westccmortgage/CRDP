"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Project } from "@/lib/types";

const ease = [0.22, 1, 0.36, 1] as const;

interface Props {
  project: Project;
  nextProject: Project;
}

/* ─── Scroll-reveal wrapper ──────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Status pill ────────────────────────────────────────────────────────── */
function StatusPill({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center gap-2 border border-ivory/30 bg-ink/30 px-3 py-1.5 backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
      <span className="text-[0.58rem] uppercase tracking-wide2 text-ivory">
        {status}
      </span>
    </span>
  );
}

/* ─── Spec row ───────────────────────────────────────────────────────────── */
function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-sand/50 py-5">
      <p className="mb-1.5 text-[0.6rem] uppercase tracking-luxe text-stone">
        {label}
      </p>
      <p className="font-display text-lg font-light leading-snug text-ink">
        {value}
      </p>
    </div>
  );
}

/* ─── Editorial masonry grid ─────────────────────────────────────────────── */
function GalleryGrid({ gallery }: { gallery: NonNullable<Project["detail"]>["gallery"] }) {
  // Split into full-span and half images for editorial layout
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {gallery.map((img, i) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease, delay: (i % 3) * 0.1 }}
          className={img.span === "full" ? "sm:col-span-2" : ""}
        >
          <div
            className={`group relative overflow-hidden bg-ink ${
              img.span === "full"
                ? "aspect-[16/7]"
                : i % 5 === 1
                ? "aspect-[4/5]"
                : i % 5 === 3
                ? "aspect-[3/4]"
                : "aspect-[4/3]"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.04]"
              style={{ backgroundImage: `url(${img.src})` }}
            />
            {/* Subtle caption overlay on hover */}
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
            <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 ease-luxe group-hover:translate-y-0">
              <p className="text-[0.6rem] uppercase tracking-wide2 text-ivory/80">
                {img.alt}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function ProjectDetail({ project, nextProject }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const d = project.detail;

  return (
    <main className="relative bg-ivory">

      {/* ── Back nav ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.1 }}
        className="fixed left-6 top-6 z-50 md:left-10 md:top-8"
      >
        <Link
          href="/#projects"
          className="group flex items-center gap-3 rounded-none border border-ivory/30 bg-ink/40 px-4 py-2.5 backdrop-blur-md transition-colors duration-400 hover:bg-ivory/10"
        >
          <span className="block h-px w-5 bg-ivory/70 transition-all duration-500 group-hover:w-8" />
          <span className="text-[0.62rem] uppercase tracking-wide2 text-ivory/80">
            All Projects
          </span>
        </Link>
      </motion.div>

      {/* ── Fullscreen hero ── */}
      <section
        ref={heroRef}
        className="grain relative h-[100svh] min-h-[640px] overflow-hidden bg-ink"
      >
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/80" />
        <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_50%_30%,transparent_40%,rgba(21,19,15,0.5)_100%)]" />

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col justify-end px-6 pb-16 md:px-14 md:pb-20 lg:px-20"
        >
          <div className="mx-auto w-full max-w-[1400px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.3 }}
            >
              <StatusPill status={project.status} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.45 }}
              className="mt-5 text-[0.64rem] uppercase tracking-luxe text-champagne"
            >
              {project.location}
            </motion.p>

            <h1 className="mt-3 font-display font-light leading-[1.02] text-ivory">
              {project.name.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease, delay: 0.55 + i * 0.08 }}
                  className="mr-[0.25em] inline-block text-[clamp(2.8rem,7vw,6.5rem)]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.9 }}
              className="mt-7 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-ivory/20 pt-6"
            >
              <span className="text-[0.66rem] uppercase tracking-wide2 text-ivory/70">
                {project.type}
              </span>
              <span className="text-[0.66rem] uppercase tracking-wide2 text-ivory/70">
                {project.year}
              </span>
              <span className="font-display text-2xl text-champagne">
                {project.value}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 right-8 flex flex-col items-center gap-3"
        >
          <motion.span
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-10 w-px bg-gradient-to-b from-ivory/60 to-transparent"
          />
          <span className="rotate-90 text-[0.55rem] uppercase tracking-luxe text-ivory/50">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ── Body: intro + specs ── */}
      <section className="px-6 py-24 md:px-12 md:py-36 lg:px-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12">

          {/* Left: description */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-8">Project Overview</p>
            </Reveal>
            {d?.description.map((para, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <p className="mb-7 text-[1.05rem] font-light leading-[1.85] text-graphite/90 first:text-[1.15rem] first:leading-[1.75]">
                  {para}
                </p>
              </Reveal>
            ))}

            {/* Materials */}
            {d?.materials && (
              <Reveal delay={0.2} className="mt-12">
                <p className="eyebrow mb-5">Materials & Finish</p>
                <div className="flex flex-wrap gap-3">
                  {d.materials.map((m) => (
                    <span
                      key={m}
                      className="border border-sand px-4 py-2 text-[0.72rem] uppercase tracking-wide2 text-graphite/80"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* Right: specs sidebar */}
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <p className="eyebrow mb-2">Project Details</p>
              <div className="rule-gold mb-2 opacity-60" />
            </Reveal>
            <div>
              {d?.sqft && <Reveal delay={0.12}><Spec label="Size" value={d.sqft} /></Reveal>}
              {d?.lot && <Reveal delay={0.14}><Spec label="Lot" value={d.lot} /></Reveal>}
              {d?.beds && <Reveal delay={0.16}><Spec label="Program" value={d.beds} /></Reveal>}
              {d?.duration && <Reveal delay={0.18}><Spec label="Duration" value={d.duration} /></Reveal>}
              {d?.architect && <Reveal delay={0.2}><Spec label="Architect" value={d.architect} /></Reveal>}
              {d?.interiors && <Reveal delay={0.22}><Spec label="Interiors" value={d.interiors} /></Reveal>}
              <Reveal delay={0.24}>
                <Spec label="Estimated Value" value={project.value} />
              </Reveal>
              <Reveal delay={0.26}>
                <Spec label="Status" value={project.status} />
              </Reveal>
            </div>

            <Reveal delay={0.3} className="mt-10">
              <Link
                href="#contact"
                className="group relative inline-block overflow-hidden border border-ink/30 px-8 py-4 text-[0.68rem] uppercase tracking-wide2 text-ink transition-colors duration-500 hover:text-ivory"
              >
                <span className="relative z-10">Inquire About This Project</span>
                <span className="absolute inset-0 -translate-y-full bg-ink transition-transform duration-500 ease-luxe group-hover:translate-y-0" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {d?.gallery && d.gallery.length > 0 && (
        <section className="px-6 pb-24 md:px-12 md:pb-36 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <Reveal className="mb-12 flex items-center justify-between">
              <p className="eyebrow">Gallery</p>
              <span className="text-[0.62rem] uppercase tracking-wide2 text-stone">
                {d.gallery.length} images
              </span>
            </Reveal>
            <GalleryGrid gallery={d.gallery} />
          </div>
        </section>
      )}

      {/* ── Next project ── */}
      <Link href={`/projects/${nextProject.id}`} className="group block">
        <section className="relative h-[55vh] min-h-[380px] overflow-hidden bg-ink">
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-[1800ms] ease-luxe group-hover:scale-110"
            style={{ backgroundImage: `url(${nextProject.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/30 transition-colors duration-700 group-hover:from-ink/80" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-ivory">
            <Reveal>
              <p className="eyebrow mb-5 text-champagne">Next Project</p>
              <h2 className="font-display text-4xl font-light leading-tight text-ivory sm:text-5xl md:text-6xl">
                {nextProject.name}
              </h2>
              <p className="mt-4 text-[0.66rem] uppercase tracking-wide2 text-ivory/60">
                {nextProject.location} · {nextProject.type}
              </p>
              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-8 inline-block text-champagne"
              >
                <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                  <path d="M0 6h38M33 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </motion.span>
            </Reveal>
          </div>
        </section>
      </Link>
    </main>
  );
}
