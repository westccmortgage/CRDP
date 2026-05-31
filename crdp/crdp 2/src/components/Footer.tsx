"use client";

const cols = [
  {
    title: "Navigate",
    links: ["Projects", "Portfolio", "Media", "Capabilities", "About", "Contact"],
  },
  {
    title: "Submarkets",
    links: [
      "Beverly Hills",
      "Brentwood",
      "Sherman Oaks",
      "Pacific Palisades",
      "Mandeville Canyon",
    ],
  },
  {
    title: "Practice",
    links: [
      "Ground-Up Development",
      "Luxury Remodels",
      "Construction Management",
      "Entitlements & Permits",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pt-20 pb-10 text-ivory md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 border-b border-ivory/15 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-medium">CRDP</span>
              <span className="text-[0.58rem] uppercase tracking-luxe text-ivory/50">
                Est. Los Angeles
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-ivory/60">
              California Residential Development Partners — luxury residential
              development, construction execution, and redevelopment across Los
              Angeles.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="mb-5 text-[0.6rem] uppercase tracking-luxe text-champagne">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="link-underline text-xs font-light text-ivory/70 hover:text-ivory"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-[0.62rem] uppercase tracking-wide2 text-ivory/40 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} California Residential Development
            Partners
          </span>
          <span>Design · Construction · Redevelopment</span>
        </div>
      </div>
    </footer>
  );
}
