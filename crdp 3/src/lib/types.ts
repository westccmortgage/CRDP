export type ProjectStatus =
  | "Completed"
  | "In Development"
  | "Coming Soon"
  | "Under Construction";

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  span?: "wide" | "tall" | "standard";
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectDetail {
  intro: string;
  paragraphs: string[];
  specs: ProjectSpec[];
  materials: string[];
  gallery: GalleryImage[];
}

export interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  value: string;
  status: ProjectStatus;
  year: string;
  image: string;
  blurb: string;
  featured?: boolean;
  detail: ProjectDetail;
}

export interface MediaItem {
  id: string;
  title: string;
  category: "Cinematic" | "Drone" | "Construction" | "Before / After" | "Walkthrough";
  duration: string;
  poster: string;
  location: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  index: string;
}
