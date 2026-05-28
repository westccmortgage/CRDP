import { MediaItem, Capability } from "@/lib/types";

export const media: MediaItem[] = [
  {
    id: "palisades-cinematic",
    title: "Palisades — Cinematic Reveal",
    category: "Cinematic",
    duration: "2:14",
    poster: "/images/media-cinematic.jpg",
    location: "Pacific Palisades",
  },
  {
    id: "mandeville-drone",
    title: "Mandeville Canyon — Aerial Survey",
    category: "Drone",
    duration: "1:48",
    poster: "/images/media-drone.jpg",
    location: "Mandeville Canyon",
  },
  {
    id: "sherman-oaks-progress",
    title: "Sherman Oaks — Construction Progress",
    category: "Construction",
    duration: "3:02",
    poster: "/images/media-construction.jpg",
    location: "Sherman Oaks",
  },
  {
    id: "beverly-transform",
    title: "Beverly Hills — Before / After",
    category: "Before / After",
    duration: "1:36",
    poster: "/images/media-beforeafter.jpg",
    location: "Beverly Hills",
  },
  {
    id: "brentwood-walkthrough",
    title: "Brentwood Hillside — Walkthrough",
    category: "Walkthrough",
    duration: "4:21",
    poster: "/images/media-walkthrough.jpg",
    location: "Brentwood",
  },
];

export const capabilities: Capability[] = [
  {
    id: "ground-up",
    index: "01",
    title: "Ground-Up Residential Development",
    description:
      "From raw land and entitlements to finished residence — full lifecycle delivery of new luxury homes.",
  },
  {
    id: "remodels",
    index: "02",
    title: "Luxury Remodels",
    description:
      "Whole-home transformations that elevate legacy properties to contemporary standards of craft and comfort.",
  },
  {
    id: "construction-management",
    index: "03",
    title: "Construction Management",
    description:
      "Disciplined execution, trusted trades, and rigorous oversight across budget, schedule, and quality.",
  },
  {
    id: "entitlements",
    index: "04",
    title: "Entitlements & Permits",
    description:
      "Navigating Los Angeles approvals, variances, and hillside ordinances with precision and patience.",
  },
  {
    id: "site-planning",
    index: "05",
    title: "Site Planning",
    description:
      "Maximizing the potential of difficult lots through grading strategy, massing, and view orientation.",
  },
  {
    id: "finish-execution",
    index: "06",
    title: "High-End Finish Execution",
    description:
      "Millwork, stone, metal, and glass delivered to the tolerances a discerning residence demands.",
  },
];
