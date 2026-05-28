import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetail from "./ProjectDetail";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} | California Residential Development Partners`,
    description: project.blurb,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((p) => p.id === params.slug);
  const project = projects[index];
  if (!project) notFound();

  const nextProject = projects[(index + 1) % projects.length];

  return <ProjectDetail project={project} nextProject={nextProject} />;
}
