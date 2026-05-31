"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Media", href: "#media" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ${
          scrolled
            ? "bg-ivory/92 backdrop-blur-md border-b border-sand/40"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
          <a
            href="#top"
            className={`flex items-baseline gap-3 transition-colors duration-700 ${
              scrolled ? "text-ink" : "text-ivory"
            }`}
          >
            <span className="font-display text-2xl font-medium tracking-wide leading-none">
              CRDP
            </span>
            <span
              className={`hidden text-[0.6rem] uppercase tracking-luxe md:inline ${
                scrolled ? "text-stone" : "text-ivory/70"
              }`}
            >
              California Residential
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`link-underline text-[0.72rem] uppercase tracking-wide2 transition-colors duration-500 ${
                  scrolled ? "text-graphite hover:text-gold" : "text-ivory/85 hover:text-ivory"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className={`hidden border px-6 py-2.5 text-[0.68rem] uppercase tracking-wide2 transition-all duration-500 lg:inline-block ${
              scrolled
                ? "border-ink/30 text-ink hover:border-gold hover:bg-gold/10"
                : "border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/10"
            }`}
          >
            Inquire
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`flex flex-col gap-[5px] lg:hidden ${
              scrolled ? "text-ink" : "text-ivory"
            }`}
          >
            <span className="block h-[1.5px] w-7 bg-current" />
            <span className="block h-[1.5px] w-7 bg-current" />
            <span className="block h-[1.5px] w-5 self-end bg-current" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink/97 px-8 py-7 text-ivory"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl">CRDP</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-3xl font-light leading-none"
              >
                ×
              </button>
            </div>
            <nav className="mt-auto mb-auto flex flex-col gap-7">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6 }}
                  className="font-display text-4xl font-light text-ivory/90 hover:text-champagne"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="rule-gold mb-4 opacity-50" />
            <p className="text-[0.64rem] uppercase tracking-luxe text-ivory/50">
              Los Angeles · Beverly Hills · Brentwood
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
