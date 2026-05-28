import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "beverly-hills-residence",
    name: "Beverly Hills Residence",
    location: "Beverly Hills, CA",
    type: "Ground-Up Luxury Residence",
    value: "$24.5M",
    status: "Completed",
    year: "2024",
    image: "/images/project-beverly-hills.jpg",
    blurb:
      "A nine-bedroom contemporary estate carved into the flats, executed in board-formed concrete, white oak, and travertine.",
    featured: true,
  },
  {
    id: "sherman-oaks-development",
    name: "Sherman Oaks Development",
    location: "Sherman Oaks, CA",
    type: "Multi-Lot Residential Development",
    value: "$18.2M",
    status: "Under Construction",
    year: "2025",
    image: "/images/project-sherman-oaks.jpg",
    blurb:
      "Three architectural homes on a re-platted hillside parcel, unified by warm minimalism and dramatic canyon glazing.",
    featured: true,
  },
  {
    id: "brentwood-hillside-residence",
    name: "Brentwood Hillside Residence",
    location: "Brentwood, CA",
    type: "Hillside Custom Residence",
    value: "$31.0M",
    status: "In Development",
    year: "2026",
    image: "/images/project-brentwood.jpg",
    blurb:
      "A cantilevered residence engineered into a complex slope, balancing structural ambition with quiet, livable luxury.",
    featured: true,
  },
  {
    id: "pacific-palisades-redevelopment",
    name: "Pacific Palisades Redevelopment",
    location: "Pacific Palisades, CA",
    type: "Estate Redevelopment",
    value: "$22.8M",
    status: "Coming Soon",
    year: "2026",
    image: "/images/project-palisades.jpg",
    blurb:
      "A full re-imagination of a legacy ocean-adjacent property, restoring scale and light through considered redevelopment.",
    featured: true,
  },
  {
    id: "mandeville-canyon-estate",
    name: "Mandeville Canyon Estate",
    location: "Mandeville Canyon, CA",
    type: "Private Compound",
    value: "$38.5M",
    status: "Completed",
    year: "2023",
    image: "/images/project-mandeville.jpg",
    blurb:
      "A gated canyon compound of pavilions, wellness wing, and motor court — a study in privacy, craft, and landscape.",
    featured: true,
  },
];
