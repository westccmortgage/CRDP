import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectDetail from "./ProjectDetail";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — CRDP`,
    description: project.blurb,
  };
}

export default function Page({ params }: Props) {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.id === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return <ProjectDetail project={project} nextProject={nextProject} />;
}
