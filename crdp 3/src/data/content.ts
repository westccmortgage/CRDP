import { MediaItem, Capability } from "@/lib/types";

export const media: MediaItem[] = [
  {
    id: "beverly-hills-progress",
    title: "Beverly Hills — Construction Progress",
    category: "Construction",
    duration: "Photo Series",
    poster: "/images/projects/3001-hutton-place-02-2560x1920.jpg",
    location: "Beverly Hills",
  },
  {
    id: "palisades-cinematic",
    title: "Pacific Palisades — Coastal Residences",
    category: "Cinematic",
    duration: "Gallery",
    poster: "/images/projects/1142-bienveneda-06-1800x1200.jpg",
    location: "Pacific Palisades",
  },
  {
    id: "mandeville-walkthrough",
    title: "Mandeville Canyon — Residence Details",
    category: "Walkthrough",
    duration: "Gallery",
    poster: "/images/projects/3348-mandeville-02-1800x1202.jpg",
    location: "Mandeville Canyon",
  },
  {
    id: "sherman-oaks-modern",
    title: "Sherman Oaks — Modern Estate",
    category: "Before / After",
    duration: "Gallery",
    poster: "/images/projects/3802-hollyline-02-1024x768.jpg",
    location: "Sherman Oaks",
  },
  {
    id: "century-city-development",
    title: "Century City — Condominium Development",
    category: "Cinematic",
    duration: "Gallery",
    poster: "/images/projects/10278-10280-missouri-02-1680x1103.jpg",
    location: "Los Angeles",
  },
];

export const capabilities: Capability[] = [
  {
    id: "ground-up",
    index: "01",
    title: "Ground-Up Residential Development",
    description:
      "Full-cycle delivery of new luxury residences — from site planning and approvals through construction, finish execution, and final presentation.",
  },
  {
    id: "redevelopment",
    index: "02",
    title: "Residential Redevelopment",
    description:
      "Transforming existing properties into refined, market-ready homes through design discipline, construction control, and careful value creation.",
  },
  {
    id: "construction-management",
    index: "03",
    title: "Construction Management",
    description:
      "Coordinated oversight of trades, schedules, budgets, and quality so every stage of the build moves with precision.",
  },
  {
    id: "custom-homes",
    index: "04",
    title: "Custom Luxury Homes",
    description:
      "Tailored residential environments built around privacy, proportion, natural light, indoor-outdoor living, and enduring materials.",
  },
  {
    id: "site-planning",
    index: "05",
    title: "Site Planning & Execution",
    description:
      "Strategic planning for hillside, canyon, and infill properties across Los Angeles’ most demanding residential submarkets.",
  },
  {
    id: "finish-execution",
    index: "06",
    title: "High-End Finish Execution",
    description:
      "A refined approach to millwork, stone, glass, flooring, fixtures, and architectural details that define the feel of a luxury residence.",
  },
];
