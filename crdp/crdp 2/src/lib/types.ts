export type ProjectStatus =
  | "Completed"
  | "In Development"
  | "Coming Soon"
  | "Under Construction";

export interface GalleryImage {
  src: string;
  alt: string;
  /** editorial layout hint: wide images span both columns */
  span?: "full" | "half";
}

export interface ProjectDetail {
  /** Long-form editorial description, split into paragraphs */
  description: string[];
  /** Architect / design lead */
  architect?: string;
  /** Interior designer */
  interiors?: string;
  /** Gross sq ft */
  sqft?: string;
  /** Lot size */
  lot?: string;
  /** Bedrooms */
  beds?: string;
  /** Construction duration */
  duration?: string;
  /** Key material notes */
  materials?: string[];
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
  detail?: ProjectDetail;
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
