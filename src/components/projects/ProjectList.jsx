import React from "react";
import ProjectCard from "./ProjectCard";
import usePageGlobalStore, { getProjectData } from "@/store/usePageGlobalStore";

export default function ProjectList() {
  const projects = usePageGlobalStore(getProjectData);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-12">
      {projects.map((data) => (
        <ProjectCard key={data.id} data={data} />
      ))}
    </div>
  );
}
