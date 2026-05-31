"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onReady = () => setLoaded(true);
    if (v.readyState >= 3) setLoaded(true);
    v.addEventListener("canplay", onReady);
    // Ensure programmatic autoplay on mobile Safari
    v.play().catch(() => {});
    return () => v.removeEventListener("canplay", onReady);
  }, []);

  return (
    <section
      id="top"
      className="grain relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      {/* Poster fallback / fast first paint */}
      <div
        aria-hidden
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: "url(/images/hero-poster.jpg)" }}
      />

      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic gradient overlays */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_40%,transparent_30%,rgba(21,19,15,0.55)_100%)]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center px-6 text-center text-ivory">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.5 }}
          className="mb-7 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-champagne/70" />
          <span className="text-[0.62rem] uppercase tracking-luxe text-champagne">
            California Residential Development Partners
          </span>
          <span className="h-px w-10 bg-champagne/70" />
        </motion.div>

        <h1 className="font-display text-[2.6rem] font-light leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.4rem]">
          {["Luxury Residential", "Development in Los Angeles"].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.7 + i * 0.18 }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.15 }}
          className="mt-7 text-[0.74rem] uppercase tracking-wide2 text-ivory/80 sm:text-sm"
        >
          Design <span className="text-champagne">·</span> Construction{" "}
          <span className="text-champagne">·</span> Redevelopment{" "}
          <span className="text-champagne">·</span> High-End Residential Projects
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.4 }}
          className="mt-11 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative w-60 overflow-hidden border border-ivory/50 px-9 py-4 text-[0.7rem] uppercase tracking-wide2 text-ivory transition-colors duration-500 sm:w-auto"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-ink">
              View Projects
            </span>
            <span className="absolute inset-0 -translate-y-full bg-ivory transition-transform duration-500 ease-luxe group-hover:translate-y-0" />
          </a>
          <a
            href="#contact"
            className="group relative w-60 overflow-hidden bg-champagne px-9 py-4 text-[0.7rem] uppercase tracking-wide2 text-ink transition-colors duration-500 sm:w-auto"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-ivory">
              Contact Us
            </span>
            <span className="absolute inset-0 -translate-y-full bg-ink transition-transform duration-500 ease-luxe group-hover:translate-y-0" />
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[0.58rem] uppercase tracking-luxe text-ivory/60">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-9 w-px bg-gradient-to-b from-ivory/70 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
